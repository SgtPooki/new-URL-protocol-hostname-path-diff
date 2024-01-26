import { expect } from 'aegir/chai';

const getUrlString = (protocol, host, rest = '') => {
  return `${protocol}://${host}${rest}`;
}

const testTuples = [
  ['ipfs', 'bafyFoo', ''],
  ['ipfs', 'bafyFoo', '/path/file?query&query2#hash'],
]

function validateObjects (actual, expected) {
  for (const key of Object.keys(expected)) {
    expect(actual[key]).to.equal(expected[key], `Invalid value for \`url.${key}\` for "${actual.href}"`);
  }
}

describe('URL-test', () => {
  describe('ipfs:// URLs', () => {
    let urlString = getUrlString('ipfs', 'bafyFoo');
    it(`parses ipfs://bafyFoo in ${process.env.RUNNER_ENV}`, () => {
      const urlString = getUrlString('ipfs', 'bafyFoo');
      const url = new URL(urlString);
      if (['node', 'electron-main'].includes(process.env.RUNNER_ENV)) {
        validateObjects(url, {
          protocol: 'ipfs:',
          host: 'bafyFoo',
          port: '',
          hostname: 'bafyFoo',
          hash: '',
          search: '',
          query: undefined,
          pathname: '',
          href: urlString
        })
      } else if (process.env.RUNNER_ENV.includes('chrome')) {
        validateObjects(url, {
          protocol: 'ipfs:',
          host: '',
          port: '',
          hostname: '',
          hash: '',
          search: '',
          query: undefined,
          pathname: '//bafyFoo',
          href: urlString
        })
      } else if (process.env.RUNNER_ENV.includes('firefox')) {
        validateObjects(url, {
          protocol: 'ipfs:',
          host: 'bafyfoo',
          port: '',
          hostname: 'bafyfoo',
          hash: '',
          search: '',
          query: undefined,
          pathname: '/',
          href: urlString.replace('bafyFoo', 'bafyfoo') + '/'
        })
      }
    });

    it(`parses ipfs://bafyFoo/path/file?myQueryK1=123&myQueryK2=456#myHashValue1=123&myHashValue2=456 in ${process.env.RUNNER_ENV}`, () => {
      urlString = getUrlString('ipfs', 'bafyFoo', '/path/file?myQueryK1=123&myQueryK2=456#myHashValue1=123&myHashValue2=456')
      const url = new URL(urlString);
      if (['node', 'electron-main'].includes(process.env.RUNNER_ENV)) {
        validateObjects(url, {
          protocol: 'ipfs:',
          host: 'bafyFoo',
          port: '',
          hostname: 'bafyFoo',
          hash: '#myHashValue1=123&myHashValue2=456',
          search: '?myQueryK1=123&myQueryK2=456',
          query: undefined,
          pathname: '/path/file',
          href: urlString
        })
      } else if (process.env.RUNNER_ENV.includes('chrome')) {
        validateObjects(url, {
          protocol: 'ipfs:',
          host: '',
          port: '',
          hostname: '',
          hash: '#myHashValue1=123&myHashValue2=456',
          search: '?myQueryK1=123&myQueryK2=456',
          query: undefined,
          pathname: '//bafyFoo/path/file',
          href: urlString
        })
      } else if (process.env.RUNNER_ENV.includes('firefox')) {
        validateObjects(url, {
          protocol: 'ipfs:',
          host: 'bafyfoo',
          port: '',
          hostname: 'bafyfoo',
          hash: '#myHashValue1=123&myHashValue2=456',
          search: '?myQueryK1=123&myQueryK2=456',
          query: undefined,
          pathname: '/path/file',
          href: urlString.replace('bafyFoo', 'bafyfoo')
        })
      }
    });
  })
  describe('ipns:// URLs', () => {
    const protocol = 'ipns';
    const urlString = getUrlString(protocol, 'bafyFoo');
    it(`parses ${urlString} in ${process.env.RUNNER_ENV}`, () => {
      const url = new URL(urlString);
      if (['node', 'electron-main'].includes(process.env.RUNNER_ENV)) {
        validateObjects(url, {
          protocol: 'ipns:',
          host: 'bafyFoo',
          port: '',
          hostname: 'bafyFoo',
          hash: '',
          search: '',
          query: undefined,
          pathname: '',
          href: urlString
        })
      } else if (process.env.RUNNER_ENV.includes('chrome')) {
        validateObjects(url, {
          protocol: 'ipns:',
          host: '',
          port: '',
          hostname: '',
          hash: '',
          search: '',
          query: undefined,
          pathname: '//bafyFoo',
          href: urlString
        })
      } else if (process.env.RUNNER_ENV.includes('firefox')) {
        validateObjects(url, {
          protocol: 'ipns:',
          host: 'bafyfoo',
          port: '',
          hostname: 'bafyfoo',
          hash: '',
          search: '',
          query: undefined,
          pathname: '/',
          href: urlString.replace('bafyFoo', 'bafyfoo') + '/'
        })
      }
    });
  })

  describe('http:// URLs', () => {
    const protocol = 'http';
    const urlString = getUrlString(protocol, 'bafyFoo');
    it(`parses ${urlString} URLs work in ${process.env.RUNNER_ENV}`, () => {
      const url = new URL(urlString);
        validateObjects(url, {
          protocol: 'http:',
          host: 'bafyfoo',
          port: '',
          hostname: 'bafyfoo',
          hash: '',
          search: '',
          query: undefined,
          pathname: '/',
          href: urlString.replace('bafyFoo', 'bafyfoo') + '/'
        })
    })
  })

  describe('https:// URLs', () => {
    const protocol = 'https';
    const urlString = getUrlString(protocol, 'bafyFoo');
    it(`parses ${urlString} in ${process.env.RUNNER_ENV}`, () => {
      const url = new URL(urlString);
      validateObjects(url, {
        protocol: 'https:',
        host: 'bafyfoo',
        port: '',
        hostname: 'bafyfoo',
        hash: '',
        search: '',
        query: undefined,
        pathname: '/',
        href: urlString.replace('bafyFoo', 'bafyfoo') + '/'
      })
    })
  })

  describe('ftp:// URLs', () => {
    const protocol = 'ftp'
    const urlString = getUrlString(protocol, 'bafyFoo');
    it(`parses ${urlString} in ${process.env.RUNNER_ENV}`, () => {
      const url = new URL(urlString);
      validateObjects(url, {
        protocol: 'ftp:',
        host: 'bafyfoo',
        port: '',
        hostname: 'bafyfoo',
        hash: '',
        search: '',
        query: undefined,
        pathname: '/',
        href: urlString.replace('bafyFoo', 'bafyfoo') + '/'
      })
    })
  })
});
