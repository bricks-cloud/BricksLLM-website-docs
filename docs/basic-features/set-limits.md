---
sidebar_position: 2
---

# Set limits on secret key

To prevent one project or user from using all of your LLM's rate limit or cost, you can set limits on each secret key.

When you create a secret key, you have the option to set the following limits:

| Property                  | Description                                                                                                   |
| ------------------------- | ------------------------------------------------------------------------------------------------------------- |
| Provider                  | Configure which LLM provider(s) this secret key can access.                                                   |
| Rate limit                | Configure how                                                                                                 |
| Spend limit per month     | The total amount of money you can spend using the secret key per month. Refreshes at the start of each month. |
| Spend limit over lifetime | The total amount of money you can spend using the secret key. Never refreshes.                                |
