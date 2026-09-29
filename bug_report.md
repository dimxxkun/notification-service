### Description
SMS dispatch requests fail with HTTP 500 when the recipient phone number contains spaces or formatting characters.

### Steps to Reproduce
1. Send a POST request to `/api/v1/notifications/sms` with payload:
   ```json
   {
     "to": "+1 555 0199",
     "message": "Verification code: 123456"
   }
   ```
2. Inspect the HTTP response and server log.

### Expected Behavior
The service should sanitize phone numbers into E.164 format and return HTTP 200.

### Actual Behavior
The service returns HTTP 500 Internal Server Error.

### Log Evidence
```text
[ERROR] 2026-09-27T09:12:44.201Z - SMSGatewayError: Invalid phone number format: '+1 555 0199'
    at SMSClient.validateAndSend (src/services/sms.js:42:11)
    at NotificationDispatcher.process (src/dispatcher.js:88:24)
    at async RouteHandler.handleSmsRequest (src/routes/notifications.js:15:5)
```
