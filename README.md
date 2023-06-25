# Chatbot UI Supabase Database Extension

This extension provides Supabase Database support (with RLS) for [Chatbot UI](https://github.com/jorge-menjivar/chatbot-ui).

## Installation

### Step 1

Add the extension with npm:

```sh
npm i @chatbot-ui/supabase@latest
```

### Step 2

Run the [Supabase Generation Script](./Supabase%20Generation%20Script.sql) in the [Supabase SQL editor](https://app.supabase.com/project/_/sql).

This will do the following:

- Create the tables required by Chatbot UI.
- Create the authentication schema and tables required by NextAuth.js.
- Enable Row Level Security for the tables required by Chatbot UI.
- Apply the Row Level Security policies required by Chatbot UI.

### Step 3

Expose the next_auth schema in the [API settings](https://app.supabase.com/project/*/settings/api) by adding next_auth to the "Exposed schemas" list.

More information [here](https://authjs.dev/reference/adapter/supabase#expose-the-nextauth-schema-in-supabase).

### Step 4

Update `/chat.config.ts` to use the new database.

```typescript
import { ClientDatabase } from '@chatbot-ui/supabase';

export const ChatConfig = {
  ..., // Other config
  database: ClientDatabase,
  ... // Other config
};

};
```

## Configuration

All the following env variables are required for the extension to work. These can be found [here](https://app.supabase.com/project/_/settings/api).

| Environment Variable          | Default value | Description                                                                |
| ----------------------------- | ------------- | -------------------------------------------------------------------------- |
| NEXT_PUBLIC_SUPABASE_URL      | `''`          | The project URL.                                                           |
| NEXT_PUBLIC_SUPABASE_ANON_KEY | `''`          | The supabase project anon key.                                             |
| SUPABASE_SERVICE_ROLE_KEY     | `''`          | The supabase project service role key.                                     |
| SUPABASE_JWT_SECRET           | `''`          | **Warning!** Generating a new JWT Secret will invalidate all tokens above. |
