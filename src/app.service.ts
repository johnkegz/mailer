import { Injectable } from '@nestjs/common';
// const AWS = require('aws-sdk');

@Injectable()
export class AppService {
  private readonly mailgun;

  constructor() {
    const api_key = 'ef9c6779f4a5a9ca67bfbdce51512322-c30053db-6bf68043';
    const domain = 'sandbox524b96f3236c40aba45785bf61f9f41f.mailgun.org';
    this.mailgun = require('mailgun-js')({
      apiKey: api_key,
      domain: domain,
    });
  }
  // sendMail(): string {
  //   try {
  //     const data = {
  //       from: 'John <johnkal24@gmail.com>',
  //       to: 'johnkal24@gmail.com',
  //       subject: 'Testing mail gun',
  //       text: 'Testing some Mailgun awesomeness!',
  //     };

  //     this.mailgun.messages().send(data, function (error, body) {
  //       if (error) {
  //         console.log(error);
  //       }
  //       console.log('email body', body);
  //     });
  //     return 'email sent';
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  async sendEmail(): Promise<any> {
    const data = {
      from: 'John <johnkal24@gmail.com>',
      to: 'johnkal24@gmail.com',
      subject: 'Testing mail gun',
      text: 'Testing some Mailgun awesomeness!',
    };

    return await this.mailgun.messages().send(data);
  }

  recieveWebHook() {
    return 'yes no'
  }

  // recieveWebHook(mailGunData: any) {
  //   if (
  //     mailGunData['event-data'].message.headers['message-id'].includes(
  //       'mailgun.org',
  //     )
  //   ) {
  //     // Set region
  //     AWS.config.update({ region: 'us-east-2' });

  //     const data = {
  //       Provider: 'Mailgun',
  //       timestamp: mailGunData.signature.timestamp,
  //       type: 'email ' + mailGunData['event-data'].event,
  //     };

  //     // Create publish parameters
  //     const params = {
  //       Message: JSON.stringify(data) /* required */,
  //       TopicArn: 'arn:aws:sns:us-east-2:344027579703:mailgun',
  //     };

  //     // Create promise and SNS service object
  //     const publishTextPromise = new AWS.SNS({ apiVersion: '2010-03-31' })
  //       .publish(params)
  //       .promise();

  //     // Handle promise's fulfilled/rejected states
  //     publishTextPromise
  //       .then(function (data) {
  //         console.log(
  //           `Message ${params.Message} sent to the topic ${params.TopicArn}`,
  //         );
  //         console.log('MessageID is ' + data.MessageId);
  //       })
  //       .catch(function (err) {
  //         console.error(err, err.stack);
  //       });
  //     return;
  //   }
  //   return;
  // }
}
