'use strict';

module.exports.hello = async (event) => {
  const api_key = 'ef9c6779f4a5a9ca67bfbdce51512322-c30053db-6bf68043';
  const domain = 'sandbox524b96f3236c40aba45785bf61f9f41f.mailgun.org';
  this.mailgun = require('mailgun-js')({
    apiKey: api_key,
    domain: domain,
  });

  const data = {
    from: 'John <johnkal24@gmail.com>',
    to: 'johnkal24@gmail.com',
    subject: 'Testing mail gun',
    text: 'Testing some Mailgun awesomeness! and lambda functions',
  };

  return await mailgun.messages().send(data);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

// import { configure as serverlessExpress } from '@vendia/serverless-express';
// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// let cachedServer;

// export const handler = async (event, context) => {
//   if (!cachedServer) {
//     const nestApp = await NestFactory.create(AppModule);
//     await nestApp.init();
//     cachedServer = serverlessExpress({
//       app: nestApp.getHttpAdapter().getInstance(),
//     });
//   }

//   return cachedServer(event, context);
// };
