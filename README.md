# new-URL-protocol-hostname-path-diff

This repo is an example of how the URL constructor works differently in different environments:

| URL                              | Environment | .protocol              | .pathname   | .host         |
|----------------------------------|-------------|------------------------|-------------|---------------|
| ipfs://bafyFoo                   | NodeJs      | 'ipfs:'                | ''          | 'bafyFoo'     |
| ipfs://bafyFoo                   | chrome      | 'ipfs:'                | '//bafyFoo' | ''            |
| ipfs://bafyFoo                   | firefox     | 'ipfs:'                | '/'         | 'bafyfoo'     |
| ipns://bafyFoo                   | NodeJs      | 'ipns:'                | ''          | 'bafyFoo'     |
| ipns://bafyFoo                   | chrome      | 'ipns:'                | '//bafyFoo' | ''            |
| ipns://bafyFoo                   | firefox     | 'ipns:'                | '/'         | 'bafyfoo'     |
| [https\|http\|ftp]://bafyFoo.com | NodeJs      | 'https'\|'http'\|'ftp' | '/'         | 'bafyfoo.com' |
| [https\|http\|ftp]://bafyFoo.com | chrome      | 'https'\|'http'\|'ftp' | '/'         | 'bafyfoo.com' |
| [https\|http\|ftp]://bafyFoo.com | firefox     | 'https'\|'http'\|'ftp' | '/'         | 'bafyfoo.com' |
