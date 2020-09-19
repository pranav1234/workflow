const awsmobile = {
  aws_project_region: process.env.REGION,
  aws_cognito_identity_pool_id: process.env.POOL_ID,
  aws_cognito_region: process.env.REGION,
  aws_user_pools_id: process.env.USER_POOL_ID,
  aws_user_pools_web_client_id: process.env.WEB_CLIENT_ID,
  oauth: {},
};

export default awsmobile;
