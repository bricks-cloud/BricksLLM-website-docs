---
sidebar_position: 3
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Attach Custom ID to requests

You can add a custom ID to your requests. A custom ID can be a trace ID, an agent ID, or anything that is relevant to your application.

To add a custom ID to a request, include the `x-custom-event-id` header in your request. For example:

<Tabs>

<TabItem value="curl" label="curl">

```bash
curl --request POST \
  --url https://api.trybricks.ai/api/providers/openai/v1/chat/completions \
  --header 'Authorization: Bearer your-bricks-secret-key' \
  --header 'Content-Type: application/json' \
  # highlight-next-line
  --header 'x-custom-event-id: trace-123' \
  --data '{
    "model": "gpt-3.5-turbo",
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

This ID will be included in logs, and you can use it to track the request in your system.
