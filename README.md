# new-URL-protocol-hostname-path-diff

This repo is an example of how the URL constructor works differently in different environments. NodeJS, Chrome, and Firefox handle URL construction differently for non-blessed protocols.

Pay attention to the casing differences as well.

## Usage

```bash
npm install
npm run test
```

To update the below results, run `npm run update-results`

<!-- RESULTS_TRIGGER -->
## Results

The following tables are generated from the test suite.

### Grouped by URL "PROTOCOL://bafyFoo/path/file?myQueryK1=123&myQueryK2=456#myHashValue1=123&myHashValue2=456"

#### Protocol "ipfs:"

| environment | protocol | origin | protocol | host | hostname | path | search | hash |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| "node" | "ipfs:" | "null" | "ipfs:" | "bafyFoo" | "bafyFoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "chrome" | "ipfs:" | "null" | "ipfs:" | "" | "" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "firefox" | "ipfs:" | "ipfs://bafyfoo" | "ipfs:" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "webkit" | "ipfs:" | "null" | "ipfs:" | "bafyFoo" | "bafyFoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "electron-main" | "ipfs:" | "null" | "ipfs:" | "bafyFoo" | "bafyFoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "webworker-chrome" | "ipfs:" | "null" | "ipfs:" | "" | "" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "webworker-firefox" | "ipfs:" | "ipfs://bafyfoo" | "ipfs:" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "webworker-webkit" | "ipfs:" | "null" | "ipfs:" | "bafyFoo" | "bafyFoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |

#### Protocol "ipns:"

| environment | protocol | origin | protocol | host | hostname | path | search | hash |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| "node" | "ipns:" | "null" | "ipns:" | "bafyFoo" | "bafyFoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "chrome" | "ipns:" | "null" | "ipns:" | "" | "" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "firefox" | "ipns:" | "ipns://bafyfoo" | "ipns:" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "webkit" | "ipns:" | "null" | "ipns:" | "bafyFoo" | "bafyFoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "electron-main" | "ipns:" | "null" | "ipns:" | "bafyFoo" | "bafyFoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "webworker-chrome" | "ipns:" | "null" | "ipns:" | "" | "" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "webworker-firefox" | "ipns:" | "ipns://bafyfoo" | "ipns:" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "webworker-webkit" | "ipns:" | "null" | "ipns:" | "bafyFoo" | "bafyFoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |

#### Protocol "http:"

| environment | protocol | origin | protocol | host | hostname | path | search | hash |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| "node" | "http:" | "http://bafyfoo" | "http:" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "chrome" | "http:" | "http://bafyfoo" | "http:" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "firefox" | "http:" | "http://bafyfoo" | "http:" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "webkit" | "http:" | "http://bafyfoo" | "http:" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "electron-main" | "http:" | "http://bafyfoo" | "http:" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "webworker-chrome" | "http:" | "http://bafyfoo" | "http:" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "webworker-firefox" | "http:" | "http://bafyfoo" | "http:" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "webworker-webkit" | "http:" | "http://bafyfoo" | "http:" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |

#### Protocol "https:"

| environment | protocol | origin | protocol | host | hostname | path | search | hash |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| "node" | "https:" | "https://bafyfoo" | "https:" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "chrome" | "https:" | "https://bafyfoo" | "https:" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "firefox" | "https:" | "https://bafyfoo" | "https:" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "webkit" | "https:" | "https://bafyfoo" | "https:" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "electron-main" | "https:" | "https://bafyfoo" | "https:" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "webworker-chrome" | "https:" | "https://bafyfoo" | "https:" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "webworker-firefox" | "https:" | "https://bafyfoo" | "https:" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "webworker-webkit" | "https:" | "https://bafyfoo" | "https:" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |

#### Protocol "ftp:"

| environment | protocol | origin | protocol | host | hostname | path | search | hash |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| "node" | "ftp:" | "ftp://bafyfoo" | "ftp:" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "chrome" | "ftp:" | "ftp://bafyfoo" | "ftp:" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "firefox" | "ftp:" | "ftp://bafyfoo" | "ftp:" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "webkit" | "ftp:" | "ftp://bafyfoo" | "ftp:" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "electron-main" | "ftp:" | "ftp://bafyfoo" | "ftp:" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "webworker-chrome" | "ftp:" | "ftp://bafyfoo" | "ftp:" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "webworker-firefox" | "ftp:" | "ftp://bafyfoo" | "ftp:" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "webworker-webkit" | "ftp:" | "ftp://bafyfoo" | "ftp:" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |

### Grouped by environment "webworker-webkit"

| environment | protocol | origin | protocol | host | hostname | path | search | hash |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| "webworker-webkit" | "ipfs:" | "null" | "ipfs:" | "bafyFoo" | "bafyFoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "webworker-webkit" | "ipfs:" | "null" | "ipfs:" | "bafyFoo" | "bafyFoo" | undefined | "" | "" |
| "webworker-webkit" | "ipns:" | "null" | "ipns:" | "bafyFoo" | "bafyFoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "webworker-webkit" | "ipns:" | "null" | "ipns:" | "bafyFoo" | "bafyFoo" | undefined | "" | "" |
| "webworker-webkit" | "http:" | "http://bafyfoo" | "http:" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "webworker-webkit" | "http:" | "http://bafyfoo" | "http:" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "webworker-webkit" | "https:" | "https://bafyfoo" | "https:" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "webworker-webkit" | "https:" | "https://bafyfoo" | "https:" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "webworker-webkit" | "ftp:" | "ftp://bafyfoo" | "ftp:" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "webworker-webkit" | "ftp:" | "ftp://bafyfoo" | "ftp:" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |

### Grouped by environment "webworker-firefox"

| environment | protocol | origin | protocol | host | hostname | path | search | hash |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| "webworker-firefox" | "ipfs:" | "ipfs://bafyfoo" | "ipfs:" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "webworker-firefox" | "ipfs:" | "ipfs://bafyfoo" | "ipfs:" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "webworker-firefox" | "ipns:" | "ipns://bafyfoo" | "ipns:" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "webworker-firefox" | "ipns:" | "ipns://bafyfoo" | "ipns:" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "webworker-firefox" | "http:" | "http://bafyfoo" | "http:" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "webworker-firefox" | "http:" | "http://bafyfoo" | "http:" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "webworker-firefox" | "https:" | "https://bafyfoo" | "https:" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "webworker-firefox" | "https:" | "https://bafyfoo" | "https:" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "webworker-firefox" | "ftp:" | "ftp://bafyfoo" | "ftp:" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "webworker-firefox" | "ftp:" | "ftp://bafyfoo" | "ftp:" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |

### Grouped by environment "webworker-chrome"

| environment | protocol | origin | protocol | host | hostname | path | search | hash |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| "webworker-chrome" | "ipfs:" | "null" | "ipfs:" | "" | "" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "webworker-chrome" | "ipfs:" | "null" | "ipfs:" | "" | "" | undefined | "" | "" |
| "webworker-chrome" | "ipns:" | "null" | "ipns:" | "" | "" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "webworker-chrome" | "ipns:" | "null" | "ipns:" | "" | "" | undefined | "" | "" |
| "webworker-chrome" | "http:" | "http://bafyfoo" | "http:" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "webworker-chrome" | "http:" | "http://bafyfoo" | "http:" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "webworker-chrome" | "https:" | "https://bafyfoo" | "https:" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "webworker-chrome" | "https:" | "https://bafyfoo" | "https:" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "webworker-chrome" | "ftp:" | "ftp://bafyfoo" | "ftp:" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "webworker-chrome" | "ftp:" | "ftp://bafyfoo" | "ftp:" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |

### Grouped by environment "webkit"

| environment | protocol | origin | protocol | host | hostname | path | search | hash |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| "webkit" | "ipfs:" | "null" | "ipfs:" | "bafyFoo" | "bafyFoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "webkit" | "ipfs:" | "null" | "ipfs:" | "bafyFoo" | "bafyFoo" | undefined | "" | "" |
| "webkit" | "ipns:" | "null" | "ipns:" | "bafyFoo" | "bafyFoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "webkit" | "ipns:" | "null" | "ipns:" | "bafyFoo" | "bafyFoo" | undefined | "" | "" |
| "webkit" | "http:" | "http://bafyfoo" | "http:" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "webkit" | "http:" | "http://bafyfoo" | "http:" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "webkit" | "https:" | "https://bafyfoo" | "https:" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "webkit" | "https:" | "https://bafyfoo" | "https:" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "webkit" | "ftp:" | "ftp://bafyfoo" | "ftp:" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "webkit" | "ftp:" | "ftp://bafyfoo" | "ftp:" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |

### Grouped by environment "node"

| environment | protocol | origin | protocol | host | hostname | path | search | hash |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| "node" | "ipfs:" | "null" | "ipfs:" | "bafyFoo" | "bafyFoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "node" | "ipfs:" | "null" | "ipfs:" | "bafyFoo" | "bafyFoo" | undefined | "" | "" |
| "node" | "ipns:" | "null" | "ipns:" | "bafyFoo" | "bafyFoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "node" | "ipns:" | "null" | "ipns:" | "bafyFoo" | "bafyFoo" | undefined | "" | "" |
| "node" | "http:" | "http://bafyfoo" | "http:" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "node" | "http:" | "http://bafyfoo" | "http:" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "node" | "https:" | "https://bafyfoo" | "https:" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "node" | "https:" | "https://bafyfoo" | "https:" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "node" | "ftp:" | "ftp://bafyfoo" | "ftp:" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "node" | "ftp:" | "ftp://bafyfoo" | "ftp:" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |

### Grouped by environment "firefox"

| environment | protocol | origin | protocol | host | hostname | path | search | hash |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| "firefox" | "ipfs:" | "ipfs://bafyfoo" | "ipfs:" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "firefox" | "ipfs:" | "ipfs://bafyfoo" | "ipfs:" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "firefox" | "ipns:" | "ipns://bafyfoo" | "ipns:" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "firefox" | "ipns:" | "ipns://bafyfoo" | "ipns:" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "firefox" | "http:" | "http://bafyfoo" | "http:" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "firefox" | "http:" | "http://bafyfoo" | "http:" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "firefox" | "https:" | "https://bafyfoo" | "https:" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "firefox" | "https:" | "https://bafyfoo" | "https:" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "firefox" | "ftp:" | "ftp://bafyfoo" | "ftp:" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "firefox" | "ftp:" | "ftp://bafyfoo" | "ftp:" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |

### Grouped by environment "electron-main"

| environment | protocol | origin | protocol | host | hostname | path | search | hash |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| "electron-main" | "ipfs:" | "null" | "ipfs:" | "bafyFoo" | "bafyFoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "electron-main" | "ipfs:" | "null" | "ipfs:" | "bafyFoo" | "bafyFoo" | undefined | "" | "" |
| "electron-main" | "ipns:" | "null" | "ipns:" | "bafyFoo" | "bafyFoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "electron-main" | "ipns:" | "null" | "ipns:" | "bafyFoo" | "bafyFoo" | undefined | "" | "" |
| "electron-main" | "http:" | "http://bafyfoo" | "http:" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "electron-main" | "http:" | "http://bafyfoo" | "http:" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "electron-main" | "https:" | "https://bafyfoo" | "https:" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "electron-main" | "https:" | "https://bafyfoo" | "https:" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "electron-main" | "ftp:" | "ftp://bafyfoo" | "ftp:" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "electron-main" | "ftp:" | "ftp://bafyfoo" | "ftp:" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |

### Grouped by environment "chrome"

| environment | protocol | origin | protocol | host | hostname | path | search | hash |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| "chrome" | "ipfs:" | "null" | "ipfs:" | "" | "" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "chrome" | "ipfs:" | "null" | "ipfs:" | "" | "" | undefined | "" | "" |
| "chrome" | "ipns:" | "null" | "ipns:" | "" | "" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "chrome" | "ipns:" | "null" | "ipns:" | "" | "" | undefined | "" | "" |
| "chrome" | "http:" | "http://bafyfoo" | "http:" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "chrome" | "http:" | "http://bafyfoo" | "http:" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "chrome" | "https:" | "https://bafyfoo" | "https:" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "chrome" | "https:" | "https://bafyfoo" | "https:" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "chrome" | "ftp:" | "ftp://bafyfoo" | "ftp:" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "chrome" | "ftp:" | "ftp://bafyfoo" | "ftp:" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |

### Grouped by URL "PROTOCOL://bafyFoo"

#### Protocol "ipfs:"

| environment | protocol | origin | protocol | host | hostname | path | search | hash |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| "node" | "ipfs:" | "null" | "ipfs:" | "bafyFoo" | "bafyFoo" | undefined | "" | "" |
| "chrome" | "ipfs:" | "null" | "ipfs:" | "" | "" | undefined | "" | "" |
| "firefox" | "ipfs:" | "ipfs://bafyfoo" | "ipfs:" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "webkit" | "ipfs:" | "null" | "ipfs:" | "bafyFoo" | "bafyFoo" | undefined | "" | "" |
| "electron-main" | "ipfs:" | "null" | "ipfs:" | "bafyFoo" | "bafyFoo" | undefined | "" | "" |
| "webworker-chrome" | "ipfs:" | "null" | "ipfs:" | "" | "" | undefined | "" | "" |
| "webworker-firefox" | "ipfs:" | "ipfs://bafyfoo" | "ipfs:" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "webworker-webkit" | "ipfs:" | "null" | "ipfs:" | "bafyFoo" | "bafyFoo" | undefined | "" | "" |

#### Protocol "ipns:"

| environment | protocol | origin | protocol | host | hostname | path | search | hash |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| "node" | "ipns:" | "null" | "ipns:" | "bafyFoo" | "bafyFoo" | undefined | "" | "" |
| "chrome" | "ipns:" | "null" | "ipns:" | "" | "" | undefined | "" | "" |
| "firefox" | "ipns:" | "ipns://bafyfoo" | "ipns:" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "webkit" | "ipns:" | "null" | "ipns:" | "bafyFoo" | "bafyFoo" | undefined | "" | "" |
| "electron-main" | "ipns:" | "null" | "ipns:" | "bafyFoo" | "bafyFoo" | undefined | "" | "" |
| "webworker-chrome" | "ipns:" | "null" | "ipns:" | "" | "" | undefined | "" | "" |
| "webworker-firefox" | "ipns:" | "ipns://bafyfoo" | "ipns:" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "webworker-webkit" | "ipns:" | "null" | "ipns:" | "bafyFoo" | "bafyFoo" | undefined | "" | "" |

#### Protocol "http:"

| environment | protocol | origin | protocol | host | hostname | path | search | hash |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| "node" | "http:" | "http://bafyfoo" | "http:" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "chrome" | "http:" | "http://bafyfoo" | "http:" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "firefox" | "http:" | "http://bafyfoo" | "http:" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "webkit" | "http:" | "http://bafyfoo" | "http:" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "electron-main" | "http:" | "http://bafyfoo" | "http:" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "webworker-chrome" | "http:" | "http://bafyfoo" | "http:" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "webworker-firefox" | "http:" | "http://bafyfoo" | "http:" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "webworker-webkit" | "http:" | "http://bafyfoo" | "http:" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |

#### Protocol "https:"

| environment | protocol | origin | protocol | host | hostname | path | search | hash |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| "node" | "https:" | "https://bafyfoo" | "https:" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "chrome" | "https:" | "https://bafyfoo" | "https:" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "firefox" | "https:" | "https://bafyfoo" | "https:" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "webkit" | "https:" | "https://bafyfoo" | "https:" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "electron-main" | "https:" | "https://bafyfoo" | "https:" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "webworker-chrome" | "https:" | "https://bafyfoo" | "https:" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "webworker-firefox" | "https:" | "https://bafyfoo" | "https:" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "webworker-webkit" | "https:" | "https://bafyfoo" | "https:" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |

#### Protocol "ftp:"

| environment | protocol | origin | protocol | host | hostname | path | search | hash |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| "node" | "ftp:" | "ftp://bafyfoo" | "ftp:" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "chrome" | "ftp:" | "ftp://bafyfoo" | "ftp:" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "firefox" | "ftp:" | "ftp://bafyfoo" | "ftp:" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "webkit" | "ftp:" | "ftp://bafyfoo" | "ftp:" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "electron-main" | "ftp:" | "ftp://bafyfoo" | "ftp:" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "webworker-chrome" | "ftp:" | "ftp://bafyfoo" | "ftp:" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "webworker-firefox" | "ftp:" | "ftp://bafyfoo" | "ftp:" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "webworker-webkit" | "ftp:" | "ftp://bafyfoo" | "ftp:" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |

