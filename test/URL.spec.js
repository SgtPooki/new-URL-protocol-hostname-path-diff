import { expect } from 'aegir/chai';

describe('URL-test', () => {
  it(`ipfs:// URLs work in ${process.env.RUNNER_ENV}`, () => {
    const url = new URL('ipfs://bafyFoo');
    if (['node', 'electron-main'].includes(process.env.RUNNER_ENV)) {
      expect(url.protocol).to.equal('ipfs:');
      expect(url.pathname).to.equal('');
      expect(url.host).to.equal('bafyFoo');
      expect(url.hostname).to.equal('bafyFoo');
    } else if (process.env.RUNNER_ENV.includes('chrome')) {
      expect(url.protocol).to.equal('ipfs:');
      expect(url.pathname).to.equal('//bafyFoo');
      expect(url.host).to.equal('');
      expect(url.hostname).to.equal('');
    } else if (process.env.RUNNER_ENV.includes('firefox')) {
      expect(url.protocol).to.equal('ipfs:');
      expect(url.pathname).to.equal('/');
      expect(url.host).to.equal('bafyfoo');
      expect(url.hostname).to.equal('bafyfoo');
    }
  });
  it(`ipns:// URLs work in ${process.env.RUNNER_ENV}`, () => {
    const url = new URL('ipns://bafyFoo');
    if (['node', 'electron-main'].includes(process.env.RUNNER_ENV)) {
      expect(url.protocol).to.equal('ipns:');
      expect(url.pathname).to.equal('');
      expect(url.host).to.equal('bafyFoo');
      expect(url.hostname).to.equal('bafyFoo');
    } else if (process.env.RUNNER_ENV.includes('chrome')) {
      expect(url.protocol).to.equal('ipns:');
      expect(url.pathname).to.equal('//bafyFoo');
      expect(url.host).to.equal('');
      expect(url.hostname).to.equal('');
    } else if (process.env.RUNNER_ENV.includes('firefox')) {
      expect(url.protocol).to.equal('ipns:');
      expect(url.pathname).to.equal('/');
      expect(url.host).to.equal('bafyfoo');
      expect(url.hostname).to.equal('bafyfoo');
    }
  });

  it(`http:// URLs work in ${process.env.RUNNER_ENV}`, () => {
    const url = new URL('http://bafyFoo.com');
    expect(url.protocol).to.equal('http:');
    expect(url.pathname).to.equal('/');
    expect(url.host).to.equal('bafyfoo.com');
    expect(url.hostname).to.equal('bafyfoo.com');
  });
  it(`https:// URLs work in ${process.env.RUNNER_ENV}`, () => {
    const url = new URL('https://bafyFoo.com');
    expect(url.protocol).to.equal('https:');
    expect(url.pathname).to.equal('/');
    expect(url.host).to.equal('bafyfoo.com');
    expect(url.hostname).to.equal('bafyfoo.com');
  });
  it(`ftp:// URLs work in ${process.env.RUNNER_ENV}`, () => {
    const url = new URL('ftp://bafyFoo.com');
    expect(url.protocol).to.equal('ftp:');
    expect(url.pathname).to.equal('/');
    expect(url.host).to.equal('bafyfoo.com');
    expect(url.hostname).to.equal('bafyfoo.com');
  });
});
