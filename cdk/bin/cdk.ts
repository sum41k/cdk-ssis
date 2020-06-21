#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkStack } from '../lib/cdk-stack';

const envEU  = { account: '600377393768', region: 'eu-central-1' };
const app = new cdk.App();
new CdkStack(app, 'CdkStack', { env: envEU });