import * as cdk from 'aws-cdk-lib';
import { AuthorizationType } from 'aws-cdk-lib/aws-apigateway';
import { FieldLogLevel, GraphqlApi, SchemaFile } from 'aws-cdk-lib/aws-appsync';
import { AttributeType, BillingMode, Table } from 'aws-cdk-lib/aws-dynamodb';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class FetchUsersStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const userTable = new Table(this, 'UserTable', {
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      billingMode: BillingMode.PAY_PER_REQUEST,
      partitionKey: {
        name: 'userId',
        type: AttributeType.STRING,
      }
    });
  const api = new GraphqlApi(this, 'User Api', {
    name: 'User Api',
    schema: SchemaFile.fromAsset('graphql/schema.graphql'),
    authorizationConfig: {
      defaultAuthorization: { 
        authorizationType: AuthorizationType.API_KEY,
        apiKeyConfig: {
          description: 'public scan for users',
          expires: cdk.Expiration.after(cdk.Duration.days(30)),
          name: "Uesr API Key",
        },
      },
    },
    logConfig: {
      fieldLogLevel: FieldLogLevel.ALL,
    },
    xrayEnabled: false,
  });
  }
}

