---
sidebar_position: 2
---

# Create proxy secret keys

Proxy secret keys are used to monitor and optionally impose limits on your LLM usage. You can decide how you want to create and distribute these keys to your projects and users. Some example use cases include:

- Creating a proxy secret key for each environment (e.g. development, staging, production).
- Creating a proxy secret key for each project.
- Creating a proxy secret key for each user.

## Setting limits

To prevent one project or user from using all of your LLM's rate limit or cost, you can set limits on each proxy secret key.

When you create a secret key, you have the option to set the following properties:

| Property                  | Description                                                                                                                                                                                                                                |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Provider settings         | Configure which LLM provider API key(s) this secret key can access. When more than one provider API key is selected for the same provider (e.g. choosing multiple OpenAI API keys), BricksAI will randomly distribute traffic between them |
| Expiry                    | How long before the proxy secret key is expired and unusable.                                                                                                                                                                              |
| Rate limit                | Configure how often this proxy secret key can be used to send a request.                                                                                                                                                                   |
| Spend limit per month     | The total amount of money you can spend using the secret key per month. Refreshes at the start of each month.                                                                                                                              |
| Spend limit over lifetime | The total amount of money you can spend using the secret key. Never refreshes.                                                                                                                                                             |
| Store request body        | Specify whether BricksAI should store request body in its logs.                                                                                                                                                                            |
| Store response body       | Specify whether BricksAI should store response body in its logs.                                                                                                                                                                           |
