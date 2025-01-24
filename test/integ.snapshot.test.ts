
import { Template } from 'aws-cdk-lib/assertions';

import { IntegTesting } from '../src/integ.default';

test('integ snapshot validation', () => {
  const integ = new IntegTesting();
  integ.stacks.forEach((stack) => {
    expect(
      Template.fromStack(stack),
    ).toMatchSnapshot();
  });
});
