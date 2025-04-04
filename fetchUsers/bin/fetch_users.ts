#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { FetchUsersStack } from '../lib/users_backend-stack';

const app = new cdk.App();
new FetchUsersStack(app, 'FetchUsersStack', {

});