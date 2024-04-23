---
sidebar_position: 5
---

# Configure your organization

To configure your organization, navigate to the **Settings** tab in the BricksAI dashboard. Here, you can configure the following settings:

1. **Organization name**: The name of your organization. This name will be displayed in the BricksAI dashboard and in the metadata of your requests.
2. **LLM providers**: The LLM providers that your organization can access. You can add or remove LLM providers at any time.
3. **Members**: The members of your organization. You can add or remove members at any time.

## Member roles

There are two types of member roles in BricksAI, owners and members. Here's a breakdown of what each role can do:

| Role                      | Owner                    | Member                                                 |
| ------------------------- | ------------------------ | ------------------------------------------------------ |
| View secret keys          | Can view all secret keys | Can view secret keys only if they're added as a viewer |
| Create secret keys        | ✅                       | ❌                                                     |
| Add viewer to secret keys | ✅                       | ❌                                                     |
| Modify organization name  | ✅                       | ❌                                                     |
| Add LLM providers         | ✅                       | ❌                                                     |
| Modify LLM providers      | ✅                       | ❌                                                     |
| Invite members            | ✅                       | ❌                                                     |
| Edit member roles         | ✅                       | ❌                                                     |
| Remove members            | ✅                       | ❌                                                     |
