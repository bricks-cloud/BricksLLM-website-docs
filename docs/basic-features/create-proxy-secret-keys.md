---
sidebar_position: 2
---

# Create proxy secret keys

Proxy secret keys are used to monitor and optionally impose limits on your LLM usage. You can decide how you want to create and distribute these keys to your projects and users. Some example use cases include:

- Creating a proxy secret key for each environment (e.g. development, staging, production).
- Creating a proxy secret key for each project.
- Creating a proxy secret key for each user.

## Available settings

When you create a secret key, you have the option to configure the following properties.

### Basic settings

| Property                  | Description                                                                                                           |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Name                      | A descriptive name for the proxy secret key. Can be any string.                                                       |
| Key retrieval method      | Configure how many times can the key be viewed after creation. See more details <u>[here](#key-retrieval-method)</u>. |
| Expiry                    | How long before the proxy secret key is expired and unusable.                                                         |
| Rate limit                | Configure how often this proxy secret key can be used to send a request.                                              |
| Spend limit per month     | The total amount of money you can spend using the secret key per month. Refreshes at the start of each month.         |
| Spend limit over lifetime | The total amount of money you can spend using the secret key. Never refreshes.                                        |

#### Key retrieval method

| Value                   | Description                                                                                                        |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Once after key creation | A proxy secret key is viewable once immediately after its creation. No one will be able to retrieve it afterwards. |
| Once per viewer         | A proxy secret key is viewable anytime by owners, but only once per viewer.                                        |
| Anytime by a viewer     | A proxy secret key is viewable anytime by owners and viewers.                                                      |

### Provider settings

| Property          | Description                                                                                                                                                                                                                                |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Provider settings | Configure which LLM provider API key(s) this secret key can access. When more than one provider API key is selected for the same provider (e.g. choosing multiple OpenAI API keys), BricksAI will randomly distribute traffic between them |

### Advanced settings

| Property            | Description                                                      |
| ------------------- | ---------------------------------------------------------------- |
| Store request body  | Specify whether BricksAI should store request body in its logs.  |
| Store response body | Specify whether BricksAI should store response body in its logs. |
| Policy (beta)       | Specify which policy applies to this secret key.                 |
