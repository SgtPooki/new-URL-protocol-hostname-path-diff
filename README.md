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


### Environment: webworker-webkit
| URL              | origin | protocol | host | hostname | path     | search | hash |
|------------------|--------|----------|------|----------|----------|--------|------|
| "ipfs://bafyFoo" | "null" | "ipfs:" | "bafyFoo" | "bafyFoo" | "" | "" | "" |
| "ipns://bafyFoo" | "null" | "ipns:" | "bafyFoo" | "bafyFoo" | "" | "" | "" |
| "http://bafyFoo" | "http://bafyfoo" | "http:" | "bafyfoo" | "bafyfoo" | "/" | "" | "" |
| "https://bafyFoo" | "https://bafyfoo" | "https:" | "bafyfoo" | "bafyfoo" | "/" | "" | "" |
| "ftp://bafyFoo" | "ftp://bafyfoo" | "ftp:" | "bafyfoo" | "bafyfoo" | "/" | "" | "" |
| "ipfs://bafyFoo/path/file?myQueryK1=123&myQueryK2=456#myHashValue1=123&myHashValue2=456" | "null" | "ipfs:" | "bafyFoo" | "bafyFoo" | "/path/file" | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "ipns://bafyFoo/path/file?myQueryK1=123&myQueryK2=456#myHashValue1=123&myHashValue2=456" | "null" | "ipns:" | "bafyFoo" | "bafyFoo" | "/path/file" | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "http://bafyFoo/path/file?myQueryK1=123&myQueryK2=456#myHashValue1=123&myHashValue2=456" | "http://bafyfoo" | "http:" | "bafyfoo" | "bafyfoo" | "/path/file" | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "https://bafyFoo/path/file?myQueryK1=123&myQueryK2=456#myHashValue1=123&myHashValue2=456" | "https://bafyfoo" | "https:" | "bafyfoo" | "bafyfoo" | "/path/file" | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "ftp://bafyFoo/path/file?myQueryK1=123&myQueryK2=456#myHashValue1=123&myHashValue2=456" | "ftp://bafyfoo" | "ftp:" | "bafyfoo" | "bafyfoo" | "/path/file" | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |

### Environment: webworker-firefox
| URL              | origin | protocol | host | hostname | path     | search | hash |
|------------------|--------|----------|------|----------|----------|--------|------|
| "ipfs://bafyFoo" | "ipfs://bafyfoo" | "ipfs:" | "bafyfoo" | "bafyfoo" | "/" | "" | "" |
| "ipns://bafyFoo" | "ipns://bafyfoo" | "ipns:" | "bafyfoo" | "bafyfoo" | "/" | "" | "" |
| "http://bafyFoo" | "http://bafyfoo" | "http:" | "bafyfoo" | "bafyfoo" | "/" | "" | "" |
| "https://bafyFoo" | "https://bafyfoo" | "https:" | "bafyfoo" | "bafyfoo" | "/" | "" | "" |
| "ftp://bafyFoo" | "ftp://bafyfoo" | "ftp:" | "bafyfoo" | "bafyfoo" | "/" | "" | "" |
| "ipfs://bafyFoo/path/file?myQueryK1=123&myQueryK2=456#myHashValue1=123&myHashValue2=456" | "ipfs://bafyfoo" | "ipfs:" | "bafyfoo" | "bafyfoo" | "/path/file" | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "ipns://bafyFoo/path/file?myQueryK1=123&myQueryK2=456#myHashValue1=123&myHashValue2=456" | "ipns://bafyfoo" | "ipns:" | "bafyfoo" | "bafyfoo" | "/path/file" | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "http://bafyFoo/path/file?myQueryK1=123&myQueryK2=456#myHashValue1=123&myHashValue2=456" | "http://bafyfoo" | "http:" | "bafyfoo" | "bafyfoo" | "/path/file" | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "https://bafyFoo/path/file?myQueryK1=123&myQueryK2=456#myHashValue1=123&myHashValue2=456" | "https://bafyfoo" | "https:" | "bafyfoo" | "bafyfoo" | "/path/file" | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "ftp://bafyFoo/path/file?myQueryK1=123&myQueryK2=456#myHashValue1=123&myHashValue2=456" | "ftp://bafyfoo" | "ftp:" | "bafyfoo" | "bafyfoo" | "/path/file" | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |

### Environment: webworker-chrome
| URL              | origin | protocol | host | hostname | path     | search | hash |
|------------------|--------|----------|------|----------|----------|--------|------|
| "ipfs://bafyFoo" | "null" | "ipfs:" | "" | "" | "//bafyFoo" | "" | "" |
| "ipns://bafyFoo" | "null" | "ipns:" | "" | "" | "//bafyFoo" | "" | "" |
| "http://bafyFoo" | "http://bafyfoo" | "http:" | "bafyfoo" | "bafyfoo" | "/" | "" | "" |
| "https://bafyFoo" | "https://bafyfoo" | "https:" | "bafyfoo" | "bafyfoo" | "/" | "" | "" |
| "ftp://bafyFoo" | "ftp://bafyfoo" | "ftp:" | "bafyfoo" | "bafyfoo" | "/" | "" | "" |
| "ipfs://bafyFoo/path/file?myQueryK1=123&myQueryK2=456#myHashValue1=123&myHashValue2=456" | "null" | "ipfs:" | "" | "" | "//bafyFoo/path/file" | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "ipns://bafyFoo/path/file?myQueryK1=123&myQueryK2=456#myHashValue1=123&myHashValue2=456" | "null" | "ipns:" | "" | "" | "//bafyFoo/path/file" | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "http://bafyFoo/path/file?myQueryK1=123&myQueryK2=456#myHashValue1=123&myHashValue2=456" | "http://bafyfoo" | "http:" | "bafyfoo" | "bafyfoo" | "/path/file" | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "https://bafyFoo/path/file?myQueryK1=123&myQueryK2=456#myHashValue1=123&myHashValue2=456" | "https://bafyfoo" | "https:" | "bafyfoo" | "bafyfoo" | "/path/file" | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "ftp://bafyFoo/path/file?myQueryK1=123&myQueryK2=456#myHashValue1=123&myHashValue2=456" | "ftp://bafyfoo" | "ftp:" | "bafyfoo" | "bafyfoo" | "/path/file" | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |

### Environment: webkit
| URL              | origin | protocol | host | hostname | path     | search | hash |
|------------------|--------|----------|------|----------|----------|--------|------|
| "ipfs://bafyFoo" | "null" | "ipfs:" | "bafyFoo" | "bafyFoo" | "" | "" | "" |
| "ipns://bafyFoo" | "null" | "ipns:" | "bafyFoo" | "bafyFoo" | "" | "" | "" |
| "http://bafyFoo" | "http://bafyfoo" | "http:" | "bafyfoo" | "bafyfoo" | "/" | "" | "" |
| "https://bafyFoo" | "https://bafyfoo" | "https:" | "bafyfoo" | "bafyfoo" | "/" | "" | "" |
| "ftp://bafyFoo" | "ftp://bafyfoo" | "ftp:" | "bafyfoo" | "bafyfoo" | "/" | "" | "" |
| "ipfs://bafyFoo/path/file?myQueryK1=123&myQueryK2=456#myHashValue1=123&myHashValue2=456" | "null" | "ipfs:" | "bafyFoo" | "bafyFoo" | "/path/file" | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "ipns://bafyFoo/path/file?myQueryK1=123&myQueryK2=456#myHashValue1=123&myHashValue2=456" | "null" | "ipns:" | "bafyFoo" | "bafyFoo" | "/path/file" | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "http://bafyFoo/path/file?myQueryK1=123&myQueryK2=456#myHashValue1=123&myHashValue2=456" | "http://bafyfoo" | "http:" | "bafyfoo" | "bafyfoo" | "/path/file" | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "https://bafyFoo/path/file?myQueryK1=123&myQueryK2=456#myHashValue1=123&myHashValue2=456" | "https://bafyfoo" | "https:" | "bafyfoo" | "bafyfoo" | "/path/file" | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "ftp://bafyFoo/path/file?myQueryK1=123&myQueryK2=456#myHashValue1=123&myHashValue2=456" | "ftp://bafyfoo" | "ftp:" | "bafyfoo" | "bafyfoo" | "/path/file" | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |

### Environment: node
| URL              | origin | protocol | host | hostname | path     | search | hash |
|------------------|--------|----------|------|----------|----------|--------|------|
| "ipfs://bafyFoo" | "null" | "ipfs:" | "bafyFoo" | "bafyFoo" | "" | "" | "" |
| "ipns://bafyFoo" | "null" | "ipns:" | "bafyFoo" | "bafyFoo" | "" | "" | "" |
| "http://bafyFoo" | "http://bafyfoo" | "http:" | "bafyfoo" | "bafyfoo" | "/" | "" | "" |
| "https://bafyFoo" | "https://bafyfoo" | "https:" | "bafyfoo" | "bafyfoo" | "/" | "" | "" |
| "ftp://bafyFoo" | "ftp://bafyfoo" | "ftp:" | "bafyfoo" | "bafyfoo" | "/" | "" | "" |
| "ipfs://bafyFoo/path/file?myQueryK1=123&myQueryK2=456#myHashValue1=123&myHashValue2=456" | "null" | "ipfs:" | "bafyFoo" | "bafyFoo" | "/path/file" | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "ipns://bafyFoo/path/file?myQueryK1=123&myQueryK2=456#myHashValue1=123&myHashValue2=456" | "null" | "ipns:" | "bafyFoo" | "bafyFoo" | "/path/file" | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "http://bafyFoo/path/file?myQueryK1=123&myQueryK2=456#myHashValue1=123&myHashValue2=456" | "http://bafyfoo" | "http:" | "bafyfoo" | "bafyfoo" | "/path/file" | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "https://bafyFoo/path/file?myQueryK1=123&myQueryK2=456#myHashValue1=123&myHashValue2=456" | "https://bafyfoo" | "https:" | "bafyfoo" | "bafyfoo" | "/path/file" | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "ftp://bafyFoo/path/file?myQueryK1=123&myQueryK2=456#myHashValue1=123&myHashValue2=456" | "ftp://bafyfoo" | "ftp:" | "bafyfoo" | "bafyfoo" | "/path/file" | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |

### Environment: firefox
| URL              | origin | protocol | host | hostname | path     | search | hash |
|------------------|--------|----------|------|----------|----------|--------|------|
| "ipfs://bafyFoo" | "ipfs://bafyfoo" | "ipfs:" | "bafyfoo" | "bafyfoo" | "/" | "" | "" |
| "ipns://bafyFoo" | "ipns://bafyfoo" | "ipns:" | "bafyfoo" | "bafyfoo" | "/" | "" | "" |
| "http://bafyFoo" | "http://bafyfoo" | "http:" | "bafyfoo" | "bafyfoo" | "/" | "" | "" |
| "https://bafyFoo" | "https://bafyfoo" | "https:" | "bafyfoo" | "bafyfoo" | "/" | "" | "" |
| "ftp://bafyFoo" | "ftp://bafyfoo" | "ftp:" | "bafyfoo" | "bafyfoo" | "/" | "" | "" |
| "ipfs://bafyFoo/path/file?myQueryK1=123&myQueryK2=456#myHashValue1=123&myHashValue2=456" | "ipfs://bafyfoo" | "ipfs:" | "bafyfoo" | "bafyfoo" | "/path/file" | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "ipns://bafyFoo/path/file?myQueryK1=123&myQueryK2=456#myHashValue1=123&myHashValue2=456" | "ipns://bafyfoo" | "ipns:" | "bafyfoo" | "bafyfoo" | "/path/file" | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "http://bafyFoo/path/file?myQueryK1=123&myQueryK2=456#myHashValue1=123&myHashValue2=456" | "http://bafyfoo" | "http:" | "bafyfoo" | "bafyfoo" | "/path/file" | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "https://bafyFoo/path/file?myQueryK1=123&myQueryK2=456#myHashValue1=123&myHashValue2=456" | "https://bafyfoo" | "https:" | "bafyfoo" | "bafyfoo" | "/path/file" | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "ftp://bafyFoo/path/file?myQueryK1=123&myQueryK2=456#myHashValue1=123&myHashValue2=456" | "ftp://bafyfoo" | "ftp:" | "bafyfoo" | "bafyfoo" | "/path/file" | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |

### Environment: electron-main
| URL              | origin | protocol | host | hostname | path     | search | hash |
|------------------|--------|----------|------|----------|----------|--------|------|
| "ipfs://bafyFoo" | "null" | "ipfs:" | "bafyFoo" | "bafyFoo" | "" | "" | "" |
| "ipns://bafyFoo" | "null" | "ipns:" | "bafyFoo" | "bafyFoo" | "" | "" | "" |
| "http://bafyFoo" | "http://bafyfoo" | "http:" | "bafyfoo" | "bafyfoo" | "/" | "" | "" |
| "https://bafyFoo" | "https://bafyfoo" | "https:" | "bafyfoo" | "bafyfoo" | "/" | "" | "" |
| "ftp://bafyFoo" | "ftp://bafyfoo" | "ftp:" | "bafyfoo" | "bafyfoo" | "/" | "" | "" |
| "ipfs://bafyFoo/path/file?myQueryK1=123&myQueryK2=456#myHashValue1=123&myHashValue2=456" | "null" | "ipfs:" | "bafyFoo" | "bafyFoo" | "/path/file" | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "ipns://bafyFoo/path/file?myQueryK1=123&myQueryK2=456#myHashValue1=123&myHashValue2=456" | "null" | "ipns:" | "bafyFoo" | "bafyFoo" | "/path/file" | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "http://bafyFoo/path/file?myQueryK1=123&myQueryK2=456#myHashValue1=123&myHashValue2=456" | "http://bafyfoo" | "http:" | "bafyfoo" | "bafyfoo" | "/path/file" | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "https://bafyFoo/path/file?myQueryK1=123&myQueryK2=456#myHashValue1=123&myHashValue2=456" | "https://bafyfoo" | "https:" | "bafyfoo" | "bafyfoo" | "/path/file" | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "ftp://bafyFoo/path/file?myQueryK1=123&myQueryK2=456#myHashValue1=123&myHashValue2=456" | "ftp://bafyfoo" | "ftp:" | "bafyfoo" | "bafyfoo" | "/path/file" | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |

### Environment: chrome
| URL              | origin | protocol | host | hostname | path     | search | hash |
|------------------|--------|----------|------|----------|----------|--------|------|
| "ipfs://bafyFoo" | "null" | "ipfs:" | "" | "" | "//bafyFoo" | "" | "" |
| "ipns://bafyFoo" | "null" | "ipns:" | "" | "" | "//bafyFoo" | "" | "" |
| "http://bafyFoo" | "http://bafyfoo" | "http:" | "bafyfoo" | "bafyfoo" | "/" | "" | "" |
| "https://bafyFoo" | "https://bafyfoo" | "https:" | "bafyfoo" | "bafyfoo" | "/" | "" | "" |
| "ftp://bafyFoo" | "ftp://bafyfoo" | "ftp:" | "bafyfoo" | "bafyfoo" | "/" | "" | "" |
| "ipfs://bafyFoo/path/file?myQueryK1=123&myQueryK2=456#myHashValue1=123&myHashValue2=456" | "null" | "ipfs:" | "" | "" | "//bafyFoo/path/file" | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "ipns://bafyFoo/path/file?myQueryK1=123&myQueryK2=456#myHashValue1=123&myHashValue2=456" | "null" | "ipns:" | "" | "" | "//bafyFoo/path/file" | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "http://bafyFoo/path/file?myQueryK1=123&myQueryK2=456#myHashValue1=123&myHashValue2=456" | "http://bafyfoo" | "http:" | "bafyfoo" | "bafyfoo" | "/path/file" | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "https://bafyFoo/path/file?myQueryK1=123&myQueryK2=456#myHashValue1=123&myHashValue2=456" | "https://bafyfoo" | "https:" | "bafyfoo" | "bafyfoo" | "/path/file" | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
| "ftp://bafyFoo/path/file?myQueryK1=123&myQueryK2=456#myHashValue1=123&myHashValue2=456" | "ftp://bafyfoo" | "ftp:" | "bafyfoo" | "bafyfoo" | "/path/file" | "?myQueryK1=123&myQueryK2=456" | "#myHashValue1=123&myHashValue2=456" |
