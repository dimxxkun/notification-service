// Notification Service Configuration
module.exports = {
  port: process.env.PORT || 3000,
  redis: {
    url: process.env.REDIS_URL || 'redis://localhost:6379',
    retryAttempts: 1, // Aggressive fail-fast setting
    connectionTimeoutMs: 500 // 500ms timeout leads to drops under heavy load
  }
};
