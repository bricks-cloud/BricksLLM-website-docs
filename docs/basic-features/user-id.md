---
sidebar_position: 3
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Attach User ID to requests

Unlike a custom ID, which is primarily used for debugging purposes, a user ID allows you to control a user's access in a manner similar to a proxy secret key.

This feature is useful when you want to impose limits specific to each user, in addition to the general limits applied through your proxy secret key.

## Create a user

To create a user, go to the Users page. Click "Create a new user", fill in all information, then click "Create". You can supply your own user ID, or if you don't, we will generate one for you.

## Attach user ID to requests

To include a user ID in a request, add the user field to your request body. For example:

<Tabs>

<TabItem value="curl" label="curl">

```bash
curl --request POST \
  --url https://api.trybricks.ai/api/providers/openai/v1/chat/completions \
  --header 'Authorization: Bearer your-bricks-secret-key' \
  --header 'Content-Type: application/json' \
  --data '{
    "model": "gpt-3.5-turbo",
    # highlight-next-line
    "user": "user-123",
    "messages": [
      {
        "role": "system",
        "content": "You are a helpful assistant."
      },
      {
        "role": "user",
        "content": "hi"
      }
    ]
  }'
```

</TabItem>
</Tabs>

This ID will be included in the logs, and you can use it to track a user's requests in your system.
