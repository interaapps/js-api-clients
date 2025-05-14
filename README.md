# InteraApps JS API Clients

## Packages
- [@interaapps/accounts](https://npmjs.com/package/@interaapps/accounts)
- [@interaapps/pastefy](https://npmjs.com/package/@interaapps/pastefy)
- [@interaapps/punyshort](https://npmjs.com/package/@interaapps/punyshort)
- _(Internal) [@interaapps/base-client](https://npmjs.com/package/@interaapps/accounts)_

## Pastefy

```bash
npm i @interaapps/pastefy
```

### Usage

```javascript
import { PastefyClient } from '@interaapps/pastefy';
const client = new PastefyClient('api-token')

const paste = await client.getPaste('...')
```

---
## Accounts

```bash
npm i @interaapps/accounts
```

### Usage

```javascript
import { AccountsClient } from '@interaapps/accounts';
const client = new AccountsClient('api-token')

const currentUser = await client.getCurrentUser('...')
```
---
## Punyshort

```bash
npm i @interaapps/punyshort
```

### Usage

```javascript
import { PunyshortClient } from '@interaapps/punyshort';
const client = new PunyshortClient('api-token')

const shortenLink = await client.shortenLink('...')
```

---
## Example: Login in browser and access pastefy pastes

```bash
npm i @interaapps/accounts @interaapps/pastefy
```

### Usage

```javascript
export const oauthClient = new InteraAppsOAuth2Client('jw7tpy97etwd0jn', undefined)

const redirectUri = oauthClient
    .urlBuilder()
    .setRedirectUri(window.location.protocol + '//' + window.location.host + '/login-app.html')
    .setResponseType('token')
    .setScopes(['user:read', 'pastefy|pastes', 'pastefy|folders'])
    .build()

window.location.href = redirectUri
```

`login-app.html`

```javascript
const token = (new URLSearchParams(window.location.hash.replace('#', ''))).get('access_token')

const client = new AccountsClient(token)

const pastefy = new PastefyClient(await client.getKeyFor('pastefy'))

console.log('User pastes:', await pastefy.getUserPastes())
```
