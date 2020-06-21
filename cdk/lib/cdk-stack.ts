import * as cdk from '@aws-cdk/core';
import ad = require('@aws-cdk/aws-directoryservice')
import ec2 = require('@aws-cdk/aws-ec2')

export class CdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const vpc = ec2.Vpc.fromLookup(this, 'VPC', {
      isDefault: true
    });
    const ssisAD = new ad.CfnMicrosoftAD(this, 'ssisActiveDirectory', {
      name: 'sum41k.example.com',
      edition: 'standard',
      password: 'GJLgjrhjdjvyt,tc',
      vpcSettings: {
        vpcId: vpc.vpcId,
        subnetIds: vpc.selectSubnets({
          onePerAz: true
        }).subnetIds,
      },
        

    });
  }
}

// subnetIds: vpc.selectSubnets({
//   subnetGroupName: 'management-private',
//   onePerAz: true
// }).subnetIds,