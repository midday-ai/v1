# Tinybird Integration for Inbox Zero

This package contains the Tinybird integration for the Inbox Zero project. Tinybird is used for real-time analytics and data processing.

## Directory Structure

- `datasources/`: Contains Tinybird datasource definitions
  - `email_events.datasource`: Defines the schema for email events
- `includes/`: Shared SQL snippets and configurations
- `pipes/`: Tinybird pipe definitions for data transformations
  - `email_activity_summary.pipe`: Aggregates email activity data
- `src/`: TypeScript source code for Tinybird-related operations
  - `client.ts`: TypeScript client for interacting with Tinybird API
  - `publish.ts`: Functions for publishing events to Tinybird
  - `query.ts`: Functions for querying data from Tinybird
  - `delete.ts`: Functions for deleting data from Tinybird
  - `types/`: Contains type definitions
    - `index.ts`: Defines schemas and types for email events and activity summaries

## Getting Started

### Prerequisites

- Node.js and npm
- Tinybird account and API token

### Setup

1. Install the package:
   ```bash
   npm install @inbox-zero/tinybird
   ```

2. Set up environment variables:
   ```bash
   TINYBIRD_TOKEN=your_tinybird_api_token
   TINYBIRD_BASE_URL=https://api.tinybird.co
   ```

   Make sure to set these environment variables in your project's `.env` file or in your deployment environment.

3. Required Environment Variables:

   | Variable | Description |
   |----------|-------------|
   | `TINYBIRD_TOKEN` | Your Tinybird API token |
   | `TINYBIRD_BASE_URL` | The base URL for Tinybird API (usually `https://api.tinybird.co`) |

   Ensure all these variables are set before using the Tinybird integration.

## Usage

### Adding a New Datasource

1. Create a new `.datasource` file in the `datasources/` directory:

   ```sql
   SCHEMA >
       `column1` String,
       `column2` DateTime,
       `column3` UInt32

   ENGINE "MergeTree"
   ENGINE_SORTING_KEY "column1, column2"
   ```

2. Push the new datasource to Tinybird:
   ```bash
   npm run push:datasources
   ```

### Adding a New Pipe

1. Create a new `.pipe` file in the `pipes/` directory:

   ```sql
   NODE endpoint
   SQL >
     SELECT column1, column2, count(*) as count
     FROM new_datasource
     WHERE column3 > {{min_value Int32}}
     GROUP BY column1, column2

   TYPE materialized
   DESCRIPTION >
     This pipe aggregates data from new_datasource
   ```

2. Push the new pipe to Tinybird:
   ```bash
   npm run push:pipes
   ```

### Using the Client

1. Import the necessary functions:
   ```typescript
   import { publishEmailEvent, getActivitySummary, deleteEmailEvents } from "@inbox-zero/tinybird";
   ```

2. Publish an event:
   ```typescript
   await publishEmailEvent({
     userId: "user123",
     emailId: "email456",
     eventType: "open",
     timestamp: Date.now(),
     metadata: JSON.stringify({ userAgent: "Mozilla/5.0 ..." }),
   });
   ```

3. Query data:
   ```typescript
   const summary = await getActivitySummary({
     user_id: "user123",
     start_date: "2023-01-01",
     end_date: "2023-12-31",
   });
   ```

4. Delete data:
   ```typescript
   await deleteEmailEvents({ userId: "user123" });
   ```

## Development

To contribute to this package:

1. Clone the repository
2. Install dependencies: `npm install`
3. Make your changes
4. Run tests: `npm test`
5. Build the package: `npm run build`

## License

This package is part of the Inbox Zero project and is subject to its licensing terms.
