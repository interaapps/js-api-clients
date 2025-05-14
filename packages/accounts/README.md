# InteraApps Accounts SDK

A TypeScript/JavaScript SDK for interacting with the [InteraApps Accounts API](https://accounts.interaapps.de). This SDK provides all the necessary tools for user authentication, user management, OAuth2 integrations, and project/app management through a simple and consistent API.

---

## 🌐 Features

- 🔐 Login, registration, password reset
- 👥 User and contact management
- 📁 Project and app management
- 🔄 OAuth2 authentication flows
- 📦 Fully typed request and response models
- 🧪 Built-in exception handling

---

## 📦 Installation

```bash
npm install @interaapps/accounts
````

---

## 🚀 Getting Started

### Initialize the client:

```ts
import { AccountsClient } from '@interaapps/accounts';

const client = new AccountsClient('YOUR_API_TOKEN');

// Or without token (you can set it later)
const client = new AccountsClient();
client.setApiToken('YOUR_API_TOKEN');
```

---

## 🔐 Authentication

```ts
import { LoginRequest } from '@interaapps/accounts';

const authKey = await client.login({
  name: 'your-username',
  password: 'your-password',
});
```

---

## 👤 User Management

```ts
const user = await client.getCurrentUser();

await client.editUser({
  full_name: 'New Name',
  favorite_color: '#123456'
});
```

---

## 🧑‍💻 Projects & Apps

```ts
const project = await client.createProject({ name: 'My Project' });

await client.createProjectApp(project.id, {
  name: 'My App',
  type: 'OAUTH2',
  url: 'https://myapp.com',
});
```

---

## 🔄 OAuth2 Integration

### Create a URL for OAuth2 login:

```ts
import { InteraAppsOAuth2Client } from '@interaapps/accounts';

const oauthClient = new InteraAppsOAuth2Client(
  'your-client-id',
  'your-client-secret'
);

const url = oauthClient.urlBuilder()
  .setRedirectUri('https://yourapp.com/callback')
  .setScopes(['user'])
  .build();

// Redirect user to this URL
```

### Token Exchange

```ts
const token = await oauthClient.exchangeToken('oauth-code');
```


### Get Key for App
```js
oauthClient.urlBuilder()
  .setRedirectUri('https://yourapp.com/callback')
  .setScopes(['profile', 'pastefy|pastes'])
  .build();
// ...

const userClient = await oauthClient.exchangeTokenAndGetClient('oauth-code');
const pastefyToken = userClient.getKeyFor('pastefy')
const pastefyClient = new PastefyClient(pastefyToken)

```

---

## 🛠 Exceptions

All exceptions inherit from `InteraAppsAccountsException` and include:

* `AlreadyLinked`
* `AccountNotGrantedApp`
* `Authentication`
* `AuthenticationInvalid`
* `ChallengeFailed`
* `HTTP`
* `InternalError`
* `InvalidRequest`
* `NamespacePermissionsDenied`
* `NotFound`
* `PermissionsDenied`
* `PrivacyPoliciesNotChecked`
* `TokenExpired`

You can handle them like this:

```ts
try {
  await client.login({ name: 'user', password: 'wrong-pass' });
} catch (e) {
  if (e instanceof AuthenticationInvalid) {
    console.error('Invalid login credentials');
  }
}
```

---

## 📘 Types

All request and response types are fully typed. For example:

* `LoginRequest`, `RegisterRequest`, `EditUserRequest`
* `User`, `Project`, `OAuth2App`, `AuthKey`, etc.

---

## 🧪 Testing

> No test framework included, but you can mock `BaseClient` methods for integration testing.

---

## 📝 License

MIT License © InteraApps

```

---

Let me know if you'd like the README in German or want a `tsdoc` style API documentation as well.
```
