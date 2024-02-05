---
sidebar_position: 3
---

# Custom ID per request

To track a specific request, you can add a custom ID, such as a user ID, to the request. This ID will be included in logs, and you can use it to track the request in your system.

To add a custom ID to a request, include the `x-custom-event-id` header in your request. The value of this header can be any identifier that's helpful for you.
