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

### Grouped by URL "PROTOCOL://AbC/path/file?a=1&b=2#h"

#### Protocol "ipfs:"

| environment | origin | host | hostname | path | search | hash | toString |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `node` | `null` | `AbC` | `AbC` | undefined | `?a=1&b=2` | `#h` | `ipfs://AbC/path/file?a=1&b=2#h` |
| `chrome` | `null` | "" | "" | undefined | `?a=1&b=2` | `#h` | `ipfs://AbC/path/file?a=1&b=2#h` |
| `firefox` | `ipfs://abc` | `abc` | `abc` | undefined | `?a=1&b=2` | `#h` | `ipfs://abc/path/file?a=1&b=2#h` |
| `electron-main` | `null` | `AbC` | `AbC` | undefined | `?a=1&b=2` | `#h` | `ipfs://AbC/path/file?a=1&b=2#h` |
| `webworker-chrome` | `null` | "" | "" | undefined | `?a=1&b=2` | `#h` | `ipfs://AbC/path/file?a=1&b=2#h` |
| `webworker-firefox` | `ipfs://abc` | `abc` | `abc` | undefined | `?a=1&b=2` | `#h` | `ipfs://abc/path/file?a=1&b=2#h` |

#### Protocol "ipns:"

| environment | origin | host | hostname | path | search | hash | toString |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `node` | `null` | `AbC` | `AbC` | undefined | `?a=1&b=2` | `#h` | `ipns://AbC/path/file?a=1&b=2#h` |
| `chrome` | `null` | "" | "" | undefined | `?a=1&b=2` | `#h` | `ipns://AbC/path/file?a=1&b=2#h` |
| `firefox` | `ipns://abc` | `abc` | `abc` | undefined | `?a=1&b=2` | `#h` | `ipns://abc/path/file?a=1&b=2#h` |
| `electron-main` | `null` | `AbC` | `AbC` | undefined | `?a=1&b=2` | `#h` | `ipns://AbC/path/file?a=1&b=2#h` |
| `webworker-chrome` | `null` | "" | "" | undefined | `?a=1&b=2` | `#h` | `ipns://AbC/path/file?a=1&b=2#h` |
| `webworker-firefox` | `ipns://abc` | `abc` | `abc` | undefined | `?a=1&b=2` | `#h` | `ipns://abc/path/file?a=1&b=2#h` |

#### Protocol "http:"

| environment | origin | host | hostname | path | search | hash | toString |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `node` | `http://abc` | `abc` | `abc` | undefined | `?a=1&b=2` | `#h` | `http://abc/path/file?a=1&b=2#h` |
| `chrome` | `http://abc` | `abc` | `abc` | undefined | `?a=1&b=2` | `#h` | `http://abc/path/file?a=1&b=2#h` |
| `firefox` | `http://abc` | `abc` | `abc` | undefined | `?a=1&b=2` | `#h` | `http://abc/path/file?a=1&b=2#h` |
| `electron-main` | `http://abc` | `abc` | `abc` | undefined | `?a=1&b=2` | `#h` | `http://abc/path/file?a=1&b=2#h` |
| `webworker-chrome` | `http://abc` | `abc` | `abc` | undefined | `?a=1&b=2` | `#h` | `http://abc/path/file?a=1&b=2#h` |
| `webworker-firefox` | `http://abc` | `abc` | `abc` | undefined | `?a=1&b=2` | `#h` | `http://abc/path/file?a=1&b=2#h` |

#### Protocol "https:"

| environment | origin | host | hostname | path | search | hash | toString |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `node` | `https://abc` | `abc` | `abc` | undefined | `?a=1&b=2` | `#h` | `https://abc/path/file?a=1&b=2#h` |
| `chrome` | `https://abc` | `abc` | `abc` | undefined | `?a=1&b=2` | `#h` | `https://abc/path/file?a=1&b=2#h` |
| `firefox` | `https://abc` | `abc` | `abc` | undefined | `?a=1&b=2` | `#h` | `https://abc/path/file?a=1&b=2#h` |
| `electron-main` | `https://abc` | `abc` | `abc` | undefined | `?a=1&b=2` | `#h` | `https://abc/path/file?a=1&b=2#h` |
| `webworker-chrome` | `https://abc` | `abc` | `abc` | undefined | `?a=1&b=2` | `#h` | `https://abc/path/file?a=1&b=2#h` |
| `webworker-firefox` | `https://abc` | `abc` | `abc` | undefined | `?a=1&b=2` | `#h` | `https://abc/path/file?a=1&b=2#h` |

#### Protocol "ftp:"

| environment | origin | host | hostname | path | search | hash | toString |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `node` | `ftp://abc` | `abc` | `abc` | undefined | `?a=1&b=2` | `#h` | `ftp://abc/path/file?a=1&b=2#h` |
| `chrome` | `ftp://abc` | `abc` | `abc` | undefined | `?a=1&b=2` | `#h` | `ftp://abc/path/file?a=1&b=2#h` |
| `firefox` | `ftp://abc` | `abc` | `abc` | undefined | `?a=1&b=2` | `#h` | `ftp://abc/path/file?a=1&b=2#h` |
| `electron-main` | `ftp://abc` | `abc` | `abc` | undefined | `?a=1&b=2` | `#h` | `ftp://abc/path/file?a=1&b=2#h` |
| `webworker-chrome` | `ftp://abc` | `abc` | `abc` | undefined | `?a=1&b=2` | `#h` | `ftp://abc/path/file?a=1&b=2#h` |
| `webworker-firefox` | `ftp://abc` | `abc` | `abc` | undefined | `?a=1&b=2` | `#h` | `ftp://abc/path/file?a=1&b=2#h` |

### Grouped by environment "webworker-firefox"

| protocol | origin | host | hostname | path | search | hash | toString |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `ipfs:` | `ipfs://abc` | `abc` | `abc` | undefined | `?a=1&b=2` | `#h` | `ipfs://abc/path/file?a=1&b=2#h` |
| `ipns:` | `ipns://abc` | `abc` | `abc` | undefined | `?a=1&b=2` | `#h` | `ipns://abc/path/file?a=1&b=2#h` |
| `http:` | `http://abc` | `abc` | `abc` | undefined | `?a=1&b=2` | `#h` | `http://abc/path/file?a=1&b=2#h` |
| `https:` | `https://abc` | `abc` | `abc` | undefined | `?a=1&b=2` | `#h` | `https://abc/path/file?a=1&b=2#h` |
| `ftp:` | `ftp://abc` | `abc` | `abc` | undefined | `?a=1&b=2` | `#h` | `ftp://abc/path/file?a=1&b=2#h` |

### Grouped by environment "webworker-chrome"

| protocol | origin | host | hostname | path | search | hash | toString |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `ipfs:` | `null` | "" | "" | undefined | `?a=1&b=2` | `#h` | `ipfs://AbC/path/file?a=1&b=2#h` |
| `ipns:` | `null` | "" | "" | undefined | `?a=1&b=2` | `#h` | `ipns://AbC/path/file?a=1&b=2#h` |
| `http:` | `http://abc` | `abc` | `abc` | undefined | `?a=1&b=2` | `#h` | `http://abc/path/file?a=1&b=2#h` |
| `https:` | `https://abc` | `abc` | `abc` | undefined | `?a=1&b=2` | `#h` | `https://abc/path/file?a=1&b=2#h` |
| `ftp:` | `ftp://abc` | `abc` | `abc` | undefined | `?a=1&b=2` | `#h` | `ftp://abc/path/file?a=1&b=2#h` |

### Grouped by environment "node"

| protocol | origin | host | hostname | path | search | hash | toString |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `ipfs:` | `null` | `AbC` | `AbC` | undefined | `?a=1&b=2` | `#h` | `ipfs://AbC/path/file?a=1&b=2#h` |
| `ipns:` | `null` | `AbC` | `AbC` | undefined | `?a=1&b=2` | `#h` | `ipns://AbC/path/file?a=1&b=2#h` |
| `http:` | `http://abc` | `abc` | `abc` | undefined | `?a=1&b=2` | `#h` | `http://abc/path/file?a=1&b=2#h` |
| `https:` | `https://abc` | `abc` | `abc` | undefined | `?a=1&b=2` | `#h` | `https://abc/path/file?a=1&b=2#h` |
| `ftp:` | `ftp://abc` | `abc` | `abc` | undefined | `?a=1&b=2` | `#h` | `ftp://abc/path/file?a=1&b=2#h` |

### Grouped by environment "firefox"

| protocol | origin | host | hostname | path | search | hash | toString |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `ipfs:` | `ipfs://abc` | `abc` | `abc` | undefined | `?a=1&b=2` | `#h` | `ipfs://abc/path/file?a=1&b=2#h` |
| `ipns:` | `ipns://abc` | `abc` | `abc` | undefined | `?a=1&b=2` | `#h` | `ipns://abc/path/file?a=1&b=2#h` |
| `http:` | `http://abc` | `abc` | `abc` | undefined | `?a=1&b=2` | `#h` | `http://abc/path/file?a=1&b=2#h` |
| `https:` | `https://abc` | `abc` | `abc` | undefined | `?a=1&b=2` | `#h` | `https://abc/path/file?a=1&b=2#h` |
| `ftp:` | `ftp://abc` | `abc` | `abc` | undefined | `?a=1&b=2` | `#h` | `ftp://abc/path/file?a=1&b=2#h` |

### Grouped by environment "electron-main"

| protocol | origin | host | hostname | path | search | hash | toString |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `ipfs:` | `null` | `AbC` | `AbC` | undefined | `?a=1&b=2` | `#h` | `ipfs://AbC/path/file?a=1&b=2#h` |
| `ipns:` | `null` | `AbC` | `AbC` | undefined | `?a=1&b=2` | `#h` | `ipns://AbC/path/file?a=1&b=2#h` |
| `http:` | `http://abc` | `abc` | `abc` | undefined | `?a=1&b=2` | `#h` | `http://abc/path/file?a=1&b=2#h` |
| `https:` | `https://abc` | `abc` | `abc` | undefined | `?a=1&b=2` | `#h` | `https://abc/path/file?a=1&b=2#h` |
| `ftp:` | `ftp://abc` | `abc` | `abc` | undefined | `?a=1&b=2` | `#h` | `ftp://abc/path/file?a=1&b=2#h` |

### Grouped by environment "chrome"

| protocol | origin | host | hostname | path | search | hash | toString |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `ipfs:` | `null` | "" | "" | undefined | `?a=1&b=2` | `#h` | `ipfs://AbC/path/file?a=1&b=2#h` |
| `ipns:` | `null` | "" | "" | undefined | `?a=1&b=2` | `#h` | `ipns://AbC/path/file?a=1&b=2#h` |
| `http:` | `http://abc` | `abc` | `abc` | undefined | `?a=1&b=2` | `#h` | `http://abc/path/file?a=1&b=2#h` |
| `https:` | `https://abc` | `abc` | `abc` | undefined | `?a=1&b=2` | `#h` | `https://abc/path/file?a=1&b=2#h` |
| `ftp:` | `ftp://abc` | `abc` | `abc` | undefined | `?a=1&b=2` | `#h` | `ftp://abc/path/file?a=1&b=2#h` |

