import AWS, { DynamoDB } from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';


export interface User {
  id: string;
  userName: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  image?: string;
  createdAt: string;
  updatedAt: string;
}


export interface CreateUserInput {
  userName: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  image?: string;
}

export interface UpdateUserInput {
  userName?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  image?: string;
}

const dynamoDB = new DynamoDB.DocumentClient();
const TABLE_NAME = 'Users';

// Create a new user
export const createUser = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const requestBody = JSON.parse(event.body || '{}') as CreateUserInput;
    const timestamp = new Date().toISOString();
    
    const user: User = {
      id: uuidv4(), 
      userName: requestBody.userName,
      password: requestBody.password, // Should be hashed in production
      firstName: requestBody.firstName,
      lastName: requestBody.lastName,
      email: requestBody.email,
      image: requestBody.image,
      createdAt: timestamp,
      updatedAt: timestamp
    };
    
    const params: DynamoDB.DocumentClient.PutItemInput = {
      TableName: TABLE_NAME,
      Item: user
    };
    
    await dynamoDB.put(params).promise();
    
    return {
      statusCode: 201,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(user)
    };
  } catch (error) {
    console.error('Error creating user:', error);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ message: 'Could not create user' })
    };
  }
};

// Get a user by ID
export const getUser = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const userId = event.pathParameters?.id;
    
    if (!userId) {
      return {
        statusCode: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({ message: 'User ID is required' })
      };
    }
    
    const params: DynamoDB.DocumentClient.GetItemInput = {
      TableName: TABLE_NAME,
      Key: { id: userId }
    };
    
    const result = await dynamoDB.get(params).promise();
    
    if (!result.Item) {
      return {
        statusCode: 404,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({ message: 'User not found' })
      };
    }
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(result.Item as User)
    };
  } catch (error) {
    console.error('Error getting user:', error);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ message: 'Could not retrieve user' })
    };
  }
};

// List all users
export const listUsers = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const params: DynamoDB.DocumentClient.ScanInput = {
      TableName: TABLE_NAME
    };
    
    const result = await dynamoDB.scan(params).promise();
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(result.Items as User[])
    };
  } catch (error) {
    console.error('Error listing users:', error);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ message: 'Could not list users' })
    };
  }
};

// Update a user
export const updateUser = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const userId = event.pathParameters?.id;
    const requestBody = JSON.parse(event.body || '{}') as UpdateUserInput;
    
    if (!userId) {
      return {
        statusCode: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({ message: 'User ID is required' })
      };
    }
    
    // First, check if the user exists
    const getParams: DynamoDB.DocumentClient.GetItemInput = {
      TableName: TABLE_NAME,
      Key: { id: userId }
    };
    
    const existingUserResult = await dynamoDB.get(getParams).promise();
    
    if (!existingUserResult.Item) {
      return {
        statusCode: 404,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({ message: 'User not found' })
      };
    }
    
    const existingUser = existingUserResult.Item as User;
    
    // Update the user
    const timestamp = new Date().toISOString();
    const updatedUser: User = {
      ...existingUser,
      userName: requestBody.userName ?? existingUser.userName,
      password: requestBody.password ?? existingUser.password,
      firstName: requestBody.firstName ?? existingUser.firstName,
      lastName: requestBody.lastName ?? existingUser.lastName,
      email: requestBody.email ?? existingUser.email,
      image: requestBody.image !== undefined ? requestBody.image : existingUser.image,
      updatedAt: timestamp
    };
    
    const updateParams: DynamoDB.DocumentClient.PutItemInput = {
      TableName: TABLE_NAME,
      Item: updatedUser
    };
    
    await dynamoDB.put(updateParams).promise();
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(updatedUser)
    };
  } catch (error) {
    console.error('Error updating user:', error);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ message: 'Could not update user' })
    };
  }
};

// Delete a user
export const deleteUser = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const userId = event.pathParameters?.id;
    
    if (!userId) {
      return {
        statusCode: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({ message: 'User ID is required' })
      };
    }
    
    const params: DynamoDB.DocumentClient.DeleteItemInput = {
      TableName: TABLE_NAME,
      Key: { id: userId }
    };
    
    await dynamoDB.delete(params).promise();
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ message: 'User deleted successfully' })
    };
  } catch (error) {
    console.error('Error deleting user:', error);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ message: 'Could not delete user' })
    };
  }
};