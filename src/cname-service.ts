import * as elbv2 from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import * as route53 from 'aws-cdk-lib/aws-route53';
import { CnameRecord } from 'aws-cdk-lib/aws-route53';
import { Construct } from 'constructs';
import { printOutput } from './common/util';

export interface CNameProps {
  readonly recordName: string;
  readonly hostZoneId: string;
  readonly zoneName: string;
  readonly elbv2: elbv2.ApplicationLoadBalancer;
}

export class CNameService extends Construct {
  constructor(scope: Construct, id: string, props: CNameProps) {
    super(scope, id);

    const albDnsName = props.elbv2.loadBalancerDnsName;
    const zone = route53.HostedZone.fromHostedZoneAttributes(this, 'HiiiCnameZone', {
      hostedZoneId: props.hostZoneId,
      zoneName: props.zoneName,
    });
    new CnameRecord(this, 'HiiiCnameRecord', {
      domainName: albDnsName,
      zone: zone,
      recordName: props.recordName,
      comment: albDnsName,
    });

    printOutput(this, 'HiiiAlbDnsName - ', albDnsName);
    printOutput(this, 'HiiiRecordName - ', props.recordName);
  }
}


