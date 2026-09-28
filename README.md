# Notification Service

A backend notification dispatch service for transactional email and SMS alerts.

## Overview
This service listens for notification events from the internal message queue and delivers messages using external provider APIs.

## Tech Stack
- Node.js / Express
- Redis for High-speed message queuing
- Kafka message streaming
- SendGrid and Twillio integrations

 ## Local Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment variables:**
   Create a `.env` file in the project root:
   ```env
   PORT=3000
   REDIS_URL=redis://localhost:6379
   ```

3. **Start the application:**
   ```bash
   npm start
   ```
