/* eslint-env mocha */
import { expect } from 'aegir/chai'
import { createTableResults } from '../src/create-table-results.js'

// @ts-ignore
const getUrlString = (protocol, host, rest = '') => {
  return `${protocol}://${host}${rest}`
}

// @ts-ignore
function validateObjects (actual, expected) {
  for (const [key, value] of Object.entries(expected)) {
    if (value === undefined) {
      // eslint-disable-next-line no-unused-expressions
      expect(actual[key], `Invalid value for \`url.${key}\` for "${actual.href}", ${actual[key]}`).to.be.undefined
    } else if (value === null) {
      // eslint-disable-next-line no-unused-expressions
      expect(actual[key], `Invalid value for \`url.${key}\` for "${actual.href}", ${actual[key]}`).to.be.null
    } else {
      expect(actual[key]).to.equal(value, `Invalid value for \`url.${key}\` for "${actual.href}"`)
    }
  }
}

describe('URL-test', () => {
  const RUNNER_ENV = process.env.RUNNER_ENV
  if (!RUNNER_ENV) throw new Error('No RUNNER_ENV set')
  describe('ipfs:// URLs', () => {
    let urlString = getUrlString('ipfs', 'bafyFoo')
    it(`parses ipfs://bafyFoo in ${RUNNER_ENV}`, () => {
      const urlString = getUrlString('ipfs', 'bafyFoo')
      const url = new URL(urlString)

      if (['node', 'electron-main', 'webkit', 'webworker-webkit'].includes(RUNNER_ENV)) {
        validateObjects(url, {
          origin: null,
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
      } else if (RUNNER_ENV.includes('chrome')) {
        validateObjects(url, {
          origin: null,
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
      } else if (RUNNER_ENV.includes('firefox')) {
        validateObjects(url, {
          origin: 'ipfs://bafyfoo',
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
    })

    it(`parses ipfs://bafyFoo/path/file?myQueryK1=123&myQueryK2=456#myHashValue1=123&myHashValue2=456 in ${RUNNER_ENV}`, () => {
      urlString = getUrlString('ipfs', 'bafyFoo', '/path/file?myQueryK1=123&myQueryK2=456#myHashValue1=123&myHashValue2=456')
      const url = new URL(urlString)

      if (['node', 'electron-main', 'webkit', 'webworker-webkit'].includes(RUNNER_ENV)) {
        validateObjects(url, {
          origin: null,
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
      } else if (RUNNER_ENV.includes('chrome')) {
        validateObjects(url, {
          origin: null,
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
      } else if (RUNNER_ENV.includes('firefox')) {
        validateObjects(url, {
          origin: 'ipfs://bafyfoo',
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
    })
  })
  describe('ipns:// URLs', () => {
    const protocol = 'ipns'
    let urlString = getUrlString(protocol, 'bafyFoo')
    it(`parses ${urlString} in ${RUNNER_ENV}`, () => {
      const url = new URL(urlString)

      if (['node', 'electron-main', 'webkit', 'webworker-webkit'].includes(RUNNER_ENV)) {
        validateObjects(url, {
          origin: null,
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
      } else if (RUNNER_ENV.includes('chrome')) {
        validateObjects(url, {
          origin: null,
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
      } else if (RUNNER_ENV.includes('firefox')) {
        validateObjects(url, {
          origin: 'ipns://bafyfoo',
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
    })

    it(`parses ipns://bafyFoo/path/file?myQueryK1=123&myQueryK2=456#myHashValue1=123&myHashValue2=456 in ${RUNNER_ENV}`, () => {
      urlString = getUrlString('ipns', 'bafyFoo', '/path/file?myQueryK1=123&myQueryK2=456#myHashValue1=123&myHashValue2=456')
      const url = new URL(urlString)

      if (['node', 'electron-main', 'webkit', 'webworker-webkit'].includes(RUNNER_ENV)) {
        validateObjects(url, {
          origin: null,
          protocol: 'ipns:',
          host: 'bafyFoo',
          port: '',
          hostname: 'bafyFoo',
          hash: '#myHashValue1=123&myHashValue2=456',
          search: '?myQueryK1=123&myQueryK2=456',
          query: undefined,
          pathname: '/path/file',
          href: urlString
        })
      } else if (RUNNER_ENV.includes('chrome')) {
        validateObjects(url, {
          origin: null,
          protocol: 'ipns:',
          host: '',
          port: '',
          hostname: '',
          hash: '#myHashValue1=123&myHashValue2=456',
          search: '?myQueryK1=123&myQueryK2=456',
          query: undefined,
          pathname: '//bafyFoo/path/file',
          href: urlString
        })
      } else if (RUNNER_ENV.includes('firefox')) {
        validateObjects(url, {
          origin: 'ipns://bafyfoo',
          protocol: 'ipns:',
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
    })
  })

  describe('http:// URLs', () => {
    const protocol = 'http'
    let urlString = getUrlString(protocol, 'bafyFoo')
    it(`parses ${urlString} URLs work in ${RUNNER_ENV}`, () => {
      const url = new URL(urlString)
      validateObjects(url, {
        origin: 'http://bafyfoo',
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

    it(`parses http://bafyFoo/path/file?myQueryK1=123&myQueryK2=456#myHashValue1=123&myHashValue2=456 in ${RUNNER_ENV}`, () => {
      urlString = getUrlString('http', 'bafyFoo', '/path/file?myQueryK1=123&myQueryK2=456#myHashValue1=123&myHashValue2=456')
      const url = new URL(urlString)
      validateObjects(url, {
        origin: 'http://bafyfoo',
        protocol: 'http:',
        host: 'bafyfoo',
        port: '',
        hostname: 'bafyfoo',
        hash: '#myHashValue1=123&myHashValue2=456',
        search: '?myQueryK1=123&myQueryK2=456',
        query: undefined,
        pathname: '/path/file',
        href: urlString.replace('bafyFoo', 'bafyfoo')
      })
    })
  })

  describe('https:// URLs', () => {
    const protocol = 'https'
    let urlString = getUrlString(protocol, 'bafyFoo')
    it(`parses ${urlString} in ${RUNNER_ENV}`, () => {
      const url = new URL(urlString)
      validateObjects(url, {
        origin: 'https://bafyfoo',
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

    it(`parses https://bafyFoo/path/file?myQueryK1=123&myQueryK2=456#myHashValue1=123&myHashValue2=456 in ${RUNNER_ENV}`, () => {
      urlString = getUrlString('https', 'bafyFoo', '/path/file?myQueryK1=123&myQueryK2=456#myHashValue1=123&myHashValue2=456')
      const url = new URL(urlString)
      validateObjects(url, {
        origin: 'https://bafyfoo',
        protocol: 'https:',
        host: 'bafyfoo',
        port: '',
        hostname: 'bafyfoo',
        hash: '#myHashValue1=123&myHashValue2=456',
        search: '?myQueryK1=123&myQueryK2=456',
        query: undefined,
        pathname: '/path/file',
        href: urlString.replace('bafyFoo', 'bafyfoo')
      })
    })
  })

  describe('ftp:// URLs', () => {
    const protocol = 'ftp'
    let urlString = getUrlString(protocol, 'bafyFoo')
    it(`parses ${urlString} in ${RUNNER_ENV}`, () => {
      const url = new URL(urlString)
      validateObjects(url, {
        origin: 'ftp://bafyfoo',
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

    it(`parses ftp://bafyFoo/path/file?myQueryK1=123&myQueryK2=456#myHashValue1=123&myHashValue2=456 in ${RUNNER_ENV}`, () => {
      urlString = getUrlString('ftp', 'bafyFoo', '/path/file?myQueryK1=123&myQueryK2=456#myHashValue1=123&myHashValue2=456')
      const url = new URL(urlString)
      validateObjects(url, {
        origin: 'ftp://bafyfoo',
        protocol: 'ftp:',
        host: 'bafyfoo',
        port: '',
        hostname: 'bafyfoo',
        hash: '#myHashValue1=123&myHashValue2=456',
        search: '?myQueryK1=123&myQueryK2=456',
        query: undefined,
        pathname: '/path/file',
        href: urlString.replace('bafyFoo', 'bafyfoo')
      })
    })
  })
  it('writes results to markdown files', async () => {
    expect(true).to.be.true()
    const URLS = [
      'PROTOCOL://bafyFoo',
      'PROTOCOL://bafyFoo/path/file?myQueryK1=123&myQueryK2=456#myHashValue1=123&myHashValue2=456'
    ]
    for (const url of URLS) {
      const table = createTableResults(url, RUNNER_ENV)

      expect(table).to.be.an('array').of.length(5)
      const result = await fetch(`${process.env.MARKDOWN_SERVER}`, {
        method: 'POST',
        body: JSON.stringify({
          env: RUNNER_ENV,
          url,
          table
        })
      })
      expect(result.ok).to.be.true()
      const body = await result.text()
      expect(body).to.equal('done')
    }
  })
})
