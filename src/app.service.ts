import { Injectable } from '@nestjs/common';
var AWS = require('aws-sdk');

@Injectable()
export class AppService {
  sendMail(): string {
    var api_key = 'key-c527f1a56ed412b0064e09d9bd251849';
    var domain = 'sandbox54408a1cd3c547ab846cc7db1ea135b1.mailgun.org';
    var mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain });

    var data = {
      from: 'John <johnkal24@gmail.com>',
      to: 'johnkal24@gmail.com',
      subject: 'Hello world now',
      text: 'Testing some Mailgun awesomeness!'
    };

    mailgun.messages().send(data, function (error, body) {
      if(error){
        console.log("error +++>", error)
      }
      console.log("res +++>", body);
    });
    return 'Hello World!';
  }

  recieveWebHook(mailGunData: any){
    // console.log("mailGunData ++++>", mailGunData['event-data'].message.headers['message-id']);
    if(mailGunData['event-data'].message.headers['message-id'].includes('mailgun.org')){
      // Set region
      AWS.config.update({region: 'us-east-2'});

      let data = {
        Provider: 'Mailgun',
        timestamp: mailGunData.signature.timestamp,
        type: "email "+mailGunData['event-data'].event
      }

      // Create publish parameters
      var params = {
        Message: JSON.stringify(data), /* required */
        TopicArn: 'arn:aws:sns:us-east-2:344027579703:mailgun'
      };

      // Create promise and SNS service object
      var publishTextPromise = new AWS.SNS({apiVersion: '2010-03-31'}).publish(params).promise();

      // Handle promise's fulfilled/rejected states
      publishTextPromise.then(
        function(data) {
          console.log(`Message ${params.Message} sent to the topic ${params.TopicArn}`);
          console.log("MessageID is " + data.MessageId);
        }).catch(
          function(err) {
          console.error(err, err.stack);
        });
      return
    }
    return
  }
}
