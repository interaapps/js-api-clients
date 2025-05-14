# InteraApps JS API Clients

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