# Pastefy Client

A TypeScript client for interacting with the [Pastefy.app](https://pastefy.app) API (v2). This library provides full access to pastes, folders, tags, users, and more, and supports both authenticated and public endpoints.

## ✨ Features

* Create, edit, delete and fetch pastes (including support for multipaste)
* Manage folders and organize pastes
* Fetch and filter public trending or latest pastes
* Manage users and authentication
* API key management
* Fully typed with TypeScript
* Built-in error handling with custom exceptions

## 🚀 Installation

```bash
npm install @interaapps/pastefy
```

## 📦 Usage

```ts
import { PastefyClient } from '@interaapps/pastefy';

const client = new PastefyClient('YOUR_API_KEY');

// Create a paste
const paste = await client.createPaste({
  title: 'Hello World',
  content: 'This is a sample paste.',
  visibility: 'PUBLIC',
});
console.log(paste.id);
```

## 📚 API Overview

### 📝 Paste

* `createPaste(paste: CreatePasteRequest)`
* `editPaste(id: string, data: EditPasteRequest)`
* `getPastes(query: PasteFilters)`
* `getPaste(id: string)`
* `getPasteRaw(id: string)`
* `deletePaste(id: string)`
* `starPaste(id: string)`
* `unstarPaste(id: string)`
* `getPublicPastes(query: PasteFilters)`
* `getPublicTrendingPastes(query: PasteFilters)`
* `getLatestPublicPastes(query: PasteFilters)`
* `getUserPastes(query: PasteFilters)`
* `getStarredPastes(query: PasteFilters)`

### 📁 Folders

* `createFolder(data: CreateFolderRequest)`
* `getFolder(id: string, options?)`
* `getFolders(query: Filters)`
* `getUserFolders(query?)`

### 👤 User

* `getCurrentUser()`
* `getUserOverview()`
* `getPublicUser(id: string)`
* `getUser(id: string)`
* `getUsers(query: string)`
* `editUser(id: string, data: EditUser)`
* `deleteUser(id: string)`

### 🔑 API Keys

* `createApiKey()`
* `getApiKeys()`
* `deleteApiKey(id: string)`

### 🏷 Tags

* `getTags(query: Filters)`
* `getTag(id: string)`

## 🔐 Authentication

Pass your API token when creating the client instance:

```ts
const client = new PastefyClient('your-api-token');
```

You can also update the token later:

```ts
client.setApiToken('new-token');
```

## ❗ Exceptions

Custom exceptions are automatically thrown for common error types:

* `AuthenticationException`
* `AwaitingAccessException`
* `BlockedException`
* `FeatureDisabledException`
* `NotFoundException`
* `PastePrivateException`
* `PermissionsDeniedException`

Catch them like this:

```ts
try {
  await client.getPaste('invalid-id');
} catch (e) {
  if (e instanceof NotFoundException) {
    console.error('Paste not found');
  }
}
```

## 🧱 Types

The library exports many useful types:

* `Paste`, `CreatePasteRequest`, `EditPasteRequest`
* `Folder`, `CreateFolderRequest`
* `User`, `PublicUser`, `UserAsAdmin`, `EditUser`
* `Tag`
* `Filters`, `PasteFilters`
* `ApiKey`
* `UserOverview`

## 🧪 Example

```ts
const paste = await client.createPaste({
  title: 'My First Paste',
  content: 'Welcome to Pastefy!',
  visibility: 'UNLISTED',
  tags: ['welcome', 'test'],
});

console.log(`Paste created at: https://pastefy.app/${paste.id}`);
```

## 🔗 Related

* [Pastefy.app](https://pastefy.app)

## 📄 License

MIT License