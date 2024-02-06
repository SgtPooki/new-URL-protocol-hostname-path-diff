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
    let urlString = getUrlString('ipfs', 'AbC')
    it(`parses ipfs://AbC in ${RUNNER_ENV}`, () => {
      const urlString = getUrlString('ipfs', 'AbC')
      const url = new URL(urlString)

      if (['node', 'electron-main', 'webkit', 'webworker-webkit'].includes(RUNNER_ENV)) {
        validateObjects(url, {
          origin: null,
          protocol: 'ipfs:',
          host: 'AbC',
          port: '',
          hostname: 'AbC',
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
          pathname: '//AbC',
          href: urlString
        })
      } else if (RUNNER_ENV.includes('firefox')) {
        validateObjects(url, {
          origin: 'ipfs://abc',
          protocol: 'ipfs:',
          host: 'abc',
          port: '',
          hostname: 'abc',
          hash: '',
          search: '',
          query: undefined,
          pathname: '/',
          href: urlString.replace('AbC', 'abc') + '/'
        })
      }
    })

    it(`parses ipfs://AbC/path/file?a=1&b=2#h in ${RUNNER_ENV}`, () => {
      urlString = getUrlString('ipfs', 'AbC', '/path/file?a=1&b=2#h')
      const url = new URL(urlString)

      if (['node', 'electron-main', 'webkit', 'webworker-webkit'].includes(RUNNER_ENV)) {
        validateObjects(url, {
          origin: null,
          protocol: 'ipfs:',
          host: 'AbC',
          port: '',
          hostname: 'AbC',
          hash: '#h',
          search: '?a=1&b=2',
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
          hash: '#h',
          search: '?a=1&b=2',
          query: undefined,
          pathname: '//AbC/path/file',
          href: urlString
        })
      } else if (RUNNER_ENV.includes('firefox')) {
        validateObjects(url, {
          origin: 'ipfs://abc',
          protocol: 'ipfs:',
          host: 'abc',
          port: '',
          hostname: 'abc',
          hash: '#h',
          search: '?a=1&b=2',
          query: undefined,
          pathname: '/path/file',
          href: urlString.replace('AbC', 'abc')
        })
      }
    })
  })
  describe('ipns:// URLs', () => {
    const protocol = 'ipns'
    let urlString = getUrlString(protocol, 'AbC')
    it(`parses ${urlString} in ${RUNNER_ENV}`, () => {
      const url = new URL(urlString)

      if (['node', 'electron-main', 'webkit', 'webworker-webkit'].includes(RUNNER_ENV)) {
        validateObjects(url, {
          origin: null,
          protocol: 'ipns:',
          host: 'AbC',
          port: '',
          hostname: 'AbC',
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
          pathname: '//AbC',
          href: urlString
        })
      } else if (RUNNER_ENV.includes('firefox')) {
        validateObjects(url, {
          origin: 'ipns://abc',
          protocol: 'ipns:',
          host: 'abc',
          port: '',
          hostname: 'abc',
          hash: '',
          search: '',
          query: undefined,
          pathname: '/',
          href: urlString.replace('AbC', 'abc') + '/'
        })
      }
    })

    it(`parses ipns://AbC/path/file?a=1&b=2#h in ${RUNNER_ENV}`, () => {
      urlString = getUrlString('ipns', 'AbC', '/path/file?a=1&b=2#h')
      const url = new URL(urlString)

      if (['node', 'electron-main', 'webkit', 'webworker-webkit'].includes(RUNNER_ENV)) {
        validateObjects(url, {
          origin: null,
          protocol: 'ipns:',
          host: 'AbC',
          port: '',
          hostname: 'AbC',
          hash: '#h',
          search: '?a=1&b=2',
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
          hash: '#h',
          search: '?a=1&b=2',
          query: undefined,
          pathname: '//AbC/path/file',
          href: urlString
        })
      } else if (RUNNER_ENV.includes('firefox')) {
        validateObjects(url, {
          origin: 'ipns://abc',
          protocol: 'ipns:',
          host: 'abc',
          port: '',
          hostname: 'abc',
          hash: '#h',
          search: '?a=1&b=2',
          query: undefined,
          pathname: '/path/file',
          href: urlString.replace('AbC', 'abc')
        })
      }
    })
  })

  describe('http:// URLs', () => {
    const protocol = 'http'
    let urlString = getUrlString(protocol, 'AbC')
    it(`parses ${urlString} URLs work in ${RUNNER_ENV}`, () => {
      const url = new URL(urlString)
      validateObjects(url, {
        origin: 'http://abc',
        protocol: 'http:',
        host: 'abc',
        port: '',
        hostname: 'abc',
        hash: '',
        search: '',
        query: undefined,
        pathname: '/',
        href: urlString.replace('AbC', 'abc') + '/'
      })
    })

    it(`parses http://AbC/path/file?a=1&b=2#h in ${RUNNER_ENV}`, () => {
      urlString = getUrlString('http', 'AbC', '/path/file?a=1&b=2#h')
      const url = new URL(urlString)
      validateObjects(url, {
        origin: 'http://abc',
        protocol: 'http:',
        host: 'abc',
        port: '',
        hostname: 'abc',
        hash: '#h',
        search: '?a=1&b=2',
        query: undefined,
        pathname: '/path/file',
        href: urlString.replace('AbC', 'abc')
      })
    })
  })

  describe('https:// URLs', () => {
    const protocol = 'https'
    let urlString = getUrlString(protocol, 'AbC')
    it(`parses ${urlString} in ${RUNNER_ENV}`, () => {
      const url = new URL(urlString)
      validateObjects(url, {
        origin: 'https://abc',
        protocol: 'https:',
        host: 'abc',
        port: '',
        hostname: 'abc',
        hash: '',
        search: '',
        query: undefined,
        pathname: '/',
        href: urlString.replace('AbC', 'abc') + '/'
      })
    })

    it(`parses https://AbC/path/file?a=1&b=2#h in ${RUNNER_ENV}`, () => {
      urlString = getUrlString('https', 'AbC', '/path/file?a=1&b=2#h')
      const url = new URL(urlString)
      validateObjects(url, {
        origin: 'https://abc',
        protocol: 'https:',
        host: 'abc',
        port: '',
        hostname: 'abc',
        hash: '#h',
        search: '?a=1&b=2',
        query: undefined,
        pathname: '/path/file',
        href: urlString.replace('AbC', 'abc')
      })
    })
  })

  describe('ftp:// URLs', () => {
    const protocol = 'ftp'
    let urlString = getUrlString(protocol, 'AbC')
    it(`parses ${urlString} in ${RUNNER_ENV}`, () => {
      const url = new URL(urlString)
      validateObjects(url, {
        origin: 'ftp://abc',
        protocol: 'ftp:',
        host: 'abc',
        port: '',
        hostname: 'abc',
        hash: '',
        search: '',
        query: undefined,
        pathname: '/',
        href: urlString.replace('AbC', 'abc') + '/'
      })
    })

    it(`parses ftp://AbC/path/file?a=1&b=2#h in ${RUNNER_ENV}`, () => {
      urlString = getUrlString('ftp', 'AbC', '/path/file?a=1&b=2#h')
      const url = new URL(urlString)
      validateObjects(url, {
        origin: 'ftp://abc',
        protocol: 'ftp:',
        host: 'abc',
        port: '',
        hostname: 'abc',
        hash: '#h',
        search: '?a=1&b=2',
        query: undefined,
        pathname: '/path/file',
        href: urlString.replace('AbC', 'abc')
      })
    })
  })
  it('writes results to markdown files', async () => {
    expect(true).to.be.true()
    const URLS = [
      'PROTOCOL://AbC/path/file?a=1&b=2#h'
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
