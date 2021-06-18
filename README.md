
#### Things I managed to implement
- I was able to send emails through mailgun locally using nestjs. I used a free account so I added my email inorder to enable it to send  and receive email.
- I was able to confirm that the mail came from mailgun by checking event response that event-data.message.leaders.message-id contains mailgun.com- I set up ngrok on my local machine to set up the webhook so that I could get the response and get events when the mail goes through mailgun.
- The web hook triggered the sns service in nestjs and created a formatted message to match the required format- I created and uploaded the zipped file and deployed it in lambda function

#### Things I failed to do
- Trigger the code in the lambda function using an API gateway.