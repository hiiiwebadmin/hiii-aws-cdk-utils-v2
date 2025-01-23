import { awscdk } from "projen";
const project = new awscdk.AwsCdkConstructLibrary({
  author: "hiiiwebadmin",
  authorAddress: "webadmin@hiii.com.tw",
  cdkVersion: "2.176.0",
  defaultReleaseBranch: "main",
  jsiiVersion: "~5.7.0",
  name: "hiii-aws-cdk-utils-v2",
  projenrcTs: true,
  repositoryUrl: "https://github.com/hiiiwebadmin/hiii-aws-cdk-utils-v2.git",
  description: "Aws CDK Construct Util Designed For Hiii.",
  deps: ["aws-cdk-lib", "constructs"],
  peerDeps: ["aws-cdk-lib", "constructs"],
  devDeps: ["aws-cdk-lib", "constructs"],
  keywords: ["cdk", "hiii"],
  npmignore: [
    "cdk.out",
    "cdk.context.json",
    "yarn-error.log",
    "dep.endabot.yml",
    "website/public",
    "images",
    "docs",
    "website",
  ],

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
const common_exclude = [
  "cdk.out",
  "cdk.context.json",
  "yarn-error.log",
  "dep.endabot.yml",
  "website/public",
];
project.gitignore.exclude(...common_exclude);
project.synth();
