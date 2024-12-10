# Timestamp Microservice

This is a simple **Timestamp Microservice** built using Node.js and Express. The application provides both Unix timestamps and UTC-formatted dates based on user input.

---

## Features

- Accepts a valid date string or Unix timestamp as input.
- Returns a JSON object with both Unix and UTC timestamps.
- Handles invalid date inputs gracefully.

---

## API Endpoints

### **GET** `/api/:date`

#### Parameters:
- `:date` - A valid date string (e.g., `2024-12-08`) or Unix timestamp (e.g., `1672531200000`).
  - If no `:date` is provided, the current date and time are used.

#### Response:
Returns a JSON object with the following structure:
```json
{
  "unix": 1672531200000,
  "utc": "Sun, 08 Dec 2024 00:00:00 GMT"
}
