# Punyshort TypeScript SDK

A TypeScript client library for interacting with the [Punyshort](https://punyshort.intera.dev) API — a powerful link shortener service with workspace, domain, and user management support.

---

## ✨ Features

- 🔗 Create and manage shortened links
- 🧑‍💼 Workspace and user management
- 🌍 Domain integration and control
- 📊 Rich statistics (date, country, OS)
- ✅ Fully typed API responses and requests
- ⚠️ Built-in exception handling

---

## 📦 Installation

```bash
npm install @interaapps/punyshort
````

---

## 🚀 Getting Started

```ts
import { PunyshortClient } from '@interaapps/punyshort';

const client = new PunyshortClient('your-api-token');

// Example: Create a shortened link
const shortLink = await client.shortenLink({
  domain: 'example.com',
  long_link: 'https://your-long-url.com',
});

console.log(shortLink.full_link);
```

---

## 📘 API Reference

### 🔐 Authentication

```ts
client.setApiToken(token: string)
```

### 👤 User

* `getUser(): Promise<User>`
* `editUser(id: string, req: EditUserRequest): Promise<ActionResponse>`

### 🔑 Access Tokens

* `createAccessToken(req: CreateAccessTokenRequest)`
* `getAccessTokens()`
* `deleteAccessToken(key: string)`

### 🌐 Domains

* `getDomains()`
* `createDomain(req: CreateDomainRequest)`
* `deleteDomain(id: string)`

### 🔗 Shorten Links

* `shortenLink(req: ShortenLinkRequest)`
* `getShortenLinks(params?: ShortenLinkFilters)`
* `getShortenLink(id: string)`
* `editShortenLink(id: string, req: ShortenLinkRequest)`
* `deleteShortenLink(id: string)`

#### 📊 Stats

* `getShortenLinkStatsTotal(id: string)`
* `getShortenLinkDateStats(id: string, filters?)`
* `getShortenLinkCountryStats(id: string, filters?)`
* `getShortenLinkOperatingSystemStats(id: string, filters?)`

### 📥 Follow Link

* `followLink(req: FollowLinkRequest)`

### 🧑‍🤝‍🧑 Workspaces

* `getWorkspaces(filters?)`
* `createWorkspace(req: CreateWorkspaceRequest)`
* `getWorkspace(id: string)`
* `deleteWorkspace(id: string)`

#### 👥 Workspace Users

* `getWorkspaceUsers(workspaceId)`
* `inviteWorkspaceUser(workspaceId, req)`
* `editWorkspaceUser(workspaceId, userId, req)`
* `removeWorkspaceUser(workspaceId, userId)`
* `acceptWorkspaceInvitation(workspaceId, userId)`

#### 🌍 Workspace Domains

* `getWorkspaceDomains(workspaceId)`
* `addWorkspaceDomain(workspaceId, req)`
* `removeWorkspaceDomain(workspaceId, domainId)`

---

## 🧱 Types

The SDK is fully typed with reusable interfaces for:

* Requests (`ShortenLinkRequest`, `CreateDomainRequest`, etc.)
* Responses (`ShortenLink`, `Domain`, `User`, etc.)
* Pagination, filters, and stat breakdowns

---

## 🛑 Exception Handling

All API errors are handled using custom exception classes:

```ts
try {
  await client.shortenLink({ ... });
} catch (e) {
  if (e instanceof PathTakenException) {
    console.error('The desired short path is already taken.');
  }
}
```

List of exceptions:

* `AuthenticationException`
* `BadRequestException` (with subclasses like `InvalidLinkException`, `PathTakenException`, etc.)
* `NotFoundException` (e.g., `DomainNotFoundException`)
* `PermissionsDeniedException`, `BlockedException`, etc.

---

## 📄 License

MIT © [InteraApps](https://interaapps.de)