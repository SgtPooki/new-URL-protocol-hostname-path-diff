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

| environment | origin | host | hostname | path | search | hash |
| --- | --- | --- | --- | --- | --- | --- |
| "node" | "null" | "bafyFoo" | "bafyFoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "chrome" | "null" | "" | "" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "firefox" | "ipfs://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "webkit" | "null" | "bafyFoo" | "bafyFoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "electron-main" | "null" | "bafyFoo" | "bafyFoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "webworker-chrome" | "null" | "" | "" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "webworker-firefox" | "ipfs://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "webworker-webkit" | "null" | "bafyFoo" | "bafyFoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |

#### Protocol "ipns:"

| environment | origin | host | hostname | path | search | hash |
| --- | --- | --- | --- | --- | --- | --- |
| "node" | "null" | "bafyFoo" | "bafyFoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "chrome" | "null" | "" | "" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "firefox" | "ipns://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "webkit" | "null" | "bafyFoo" | "bafyFoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "electron-main" | "null" | "bafyFoo" | "bafyFoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "webworker-chrome" | "null" | "" | "" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "webworker-firefox" | "ipns://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "webworker-webkit" | "null" | "bafyFoo" | "bafyFoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |

#### Protocol "http:"

| environment | origin | host | hostname | path | search | hash |
| --- | --- | --- | --- | --- | --- | --- |
| "node" | "http://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "chrome" | "http://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "firefox" | "http://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "webkit" | "http://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "electron-main" | "http://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "webworker-chrome" | "http://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "webworker-firefox" | "http://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "webworker-webkit" | "http://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |

#### Protocol "https:"

| environment | origin | host | hostname | path | search | hash |
| --- | --- | --- | --- | --- | --- | --- |
| "node" | "https://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "chrome" | "https://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "firefox" | "https://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "webkit" | "https://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "electron-main" | "https://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "webworker-chrome" | "https://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "webworker-firefox" | "https://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "webworker-webkit" | "https://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |

#### Protocol "ftp:"

| environment | origin | host | hostname | path | search | hash |
| --- | --- | --- | --- | --- | --- | --- |
| "node" | "ftp://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "chrome" | "ftp://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "firefox" | "ftp://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "webkit" | "ftp://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "electron-main" | "ftp://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "webworker-chrome" | "ftp://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "webworker-firefox" | "ftp://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "webworker-webkit" | "ftp://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |

### Grouped by environment "webworker-webkit"

| protocol | origin | host | hostname | path | search | hash |
| --- | --- | --- | --- | --- | --- | --- |
| "ipfs:" | "null" | "bafyFoo" | "bafyFoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "ipfs:" | "null" | "bafyFoo" | "bafyFoo" | undefined | "" | "" |
| "ipns:" | "null" | "bafyFoo" | "bafyFoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "ipns:" | "null" | "bafyFoo" | "bafyFoo" | undefined | "" | "" |
| "http:" | "http://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "http:" | "http://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "https:" | "https://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "https:" | "https://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "ftp:" | "ftp://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "ftp:" | "ftp://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |

### Grouped by environment "webworker-firefox"

| protocol | origin | host | hostname | path | search | hash |
| --- | --- | --- | --- | --- | --- | --- |
| "ipfs:" | "ipfs://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "ipfs:" | "ipfs://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "ipns:" | "ipns://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "ipns:" | "ipns://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "http:" | "http://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "http:" | "http://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "https:" | "https://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "https:" | "https://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "ftp:" | "ftp://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "ftp:" | "ftp://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |

### Grouped by environment "webworker-chrome"

| protocol | origin | host | hostname | path | search | hash |
| --- | --- | --- | --- | --- | --- | --- |
| "ipfs:" | "null" | "" | "" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "ipfs:" | "null" | "" | "" | undefined | "" | "" |
| "ipns:" | "null" | "" | "" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "ipns:" | "null" | "" | "" | undefined | "" | "" |
| "http:" | "http://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "http:" | "http://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "https:" | "https://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "https:" | "https://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "ftp:" | "ftp://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "ftp:" | "ftp://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |

### Grouped by environment "webkit"

| protocol | origin | host | hostname | path | search | hash |
| --- | --- | --- | --- | --- | --- | --- |
| "ipfs:" | "null" | "bafyFoo" | "bafyFoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "ipfs:" | "null" | "bafyFoo" | "bafyFoo" | undefined | "" | "" |
| "ipns:" | "null" | "bafyFoo" | "bafyFoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "ipns:" | "null" | "bafyFoo" | "bafyFoo" | undefined | "" | "" |
| "http:" | "http://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "http:" | "http://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "https:" | "https://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "https:" | "https://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "ftp:" | "ftp://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "ftp:" | "ftp://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |

### Grouped by environment "node"

| protocol | origin | host | hostname | path | search | hash |
| --- | --- | --- | --- | --- | --- | --- |
| "ipfs:" | "null" | "bafyFoo" | "bafyFoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "ipfs:" | "null" | "bafyFoo" | "bafyFoo" | undefined | "" | "" |
| "ipns:" | "null" | "bafyFoo" | "bafyFoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "ipns:" | "null" | "bafyFoo" | "bafyFoo" | undefined | "" | "" |
| "http:" | "http://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "http:" | "http://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "https:" | "https://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "https:" | "https://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "ftp:" | "ftp://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "ftp:" | "ftp://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |

### Grouped by environment "firefox"

| protocol | origin | host | hostname | path | search | hash |
| --- | --- | --- | --- | --- | --- | --- |
| "ipfs:" | "ipfs://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "ipfs:" | "ipfs://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "ipns:" | "ipns://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "ipns:" | "ipns://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "http:" | "http://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "http:" | "http://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "https:" | "https://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "https:" | "https://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "ftp:" | "ftp://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "ftp:" | "ftp://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |

### Grouped by environment "electron-main"

| protocol | origin | host | hostname | path | search | hash |
| --- | --- | --- | --- | --- | --- | --- |
| "ipfs:" | "null" | "bafyFoo" | "bafyFoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "ipfs:" | "null" | "bafyFoo" | "bafyFoo" | undefined | "" | "" |
| "ipns:" | "null" | "bafyFoo" | "bafyFoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "ipns:" | "null" | "bafyFoo" | "bafyFoo" | undefined | "" | "" |
| "http:" | "http://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "http:" | "http://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "https:" | "https://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "https:" | "https://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "ftp:" | "ftp://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "ftp:" | "ftp://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |

### Grouped by environment "chrome"

| protocol | origin | host | hostname | path | search | hash |
| --- | --- | --- | --- | --- | --- | --- |
| "ipfs:" | "null" | "" | "" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "ipfs:" | "null" | "" | "" | undefined | "" | "" |
| "ipns:" | "null" | "" | "" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "ipns:" | "null" | "" | "" | undefined | "" | "" |
| "http:" | "http://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "http:" | "http://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "https:" | "https://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "https:" | "https://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "ftp:" | "ftp://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "ftp:" | "ftp://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |

### Grouped by URL "PROTOCOL://bafyFoo"

#### Protocol "ipfs:"

| environment | origin | host | hostname | path | search | hash |
| --- | --- | --- | --- | --- | --- | --- |
| "node" | "null" | "bafyFoo" | "bafyFoo" | undefined | "" | "" |
| "chrome" | "null" | "" | "" | undefined | "" | "" |
| "firefox" | "ipfs://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "webkit" | "null" | "bafyFoo" | "bafyFoo" | undefined | "" | "" |
| "electron-main" | "null" | "bafyFoo" | "bafyFoo" | undefined | "" | "" |
| "webworker-chrome" | "null" | "" | "" | undefined | "" | "" |
| "webworker-firefox" | "ipfs://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "webworker-webkit" | "null" | "bafyFoo" | "bafyFoo" | undefined | "" | "" |

#### Protocol "ipns:"

| environment | origin | host | hostname | path | search | hash |
| --- | --- | --- | --- | --- | --- | --- |
| "node" | "null" | "bafyFoo" | "bafyFoo" | undefined | "" | "" |
| "chrome" | "null" | "" | "" | undefined | "" | "" |
| "firefox" | "ipns://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "webkit" | "null" | "bafyFoo" | "bafyFoo" | undefined | "" | "" |
| "electron-main" | "null" | "bafyFoo" | "bafyFoo" | undefined | "" | "" |
| "webworker-chrome" | "null" | "" | "" | undefined | "" | "" |
| "webworker-firefox" | "ipns://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "webworker-webkit" | "null" | "bafyFoo" | "bafyFoo" | undefined | "" | "" |

#### Protocol "http:"

| environment | origin | host | hostname | path | search | hash |
| --- | --- | --- | --- | --- | --- | --- |
| "node" | "http://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "chrome" | "http://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "firefox" | "http://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "webkit" | "http://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "electron-main" | "http://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "webworker-chrome" | "http://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "webworker-firefox" | "http://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "webworker-webkit" | "http://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |

#### Protocol "https:"

| environment | origin | host | hostname | path | search | hash |
| --- | --- | --- | --- | --- | --- | --- |
| "node" | "https://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "chrome" | "https://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "firefox" | "https://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "webkit" | "https://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "electron-main" | "https://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "webworker-chrome" | "https://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "webworker-firefox" | "https://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "webworker-webkit" | "https://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |

#### Protocol "ftp:"

| environment | origin | host | hostname | path | search | hash |
| --- | --- | --- | --- | --- | --- | --- |
| "node" | "ftp://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "chrome" | "ftp://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "firefox" | "ftp://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "webkit" | "ftp://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "electron-main" | "ftp://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "webworker-chrome" | "ftp://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "webworker-firefox" | "ftp://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |
| "webworker-webkit" | "ftp://bafyfoo" | "bafyfoo" | "bafyfoo" | undefined | "" | "" |

