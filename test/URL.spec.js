import { expect } from 'aegir/chai';

describe('URL-test', () => {
  it('protocol', () => {
    const url = new URL('ipfs://bafyFoo');
    if (['node', 'electron-main'].includes(process.env.RUNNER_ENV)) {
      expect(url.protocol).to.equal('ipfs:');
      expect(url.pathname).to.equal('');
      expect(url.host).to.equal('bafyFoo');
      expect(url.hostname).to.equal('bafyFoo');
    } else if (process.env.RUNNER_ENV === 'chrome') {
      expect(url.protocol).to.equal('ipfs:');
      expect(url.pathname).to.equal('//bafyFoo');
      expect(url.host).to.equal('');
      expect(url.hostname).to.equal('');
    } else if (process.env.RUNNER_ENV === 'firefox') {
      expect(url.protocol).to.equal('ipfs:');
      expect(url.pathname).to.equal('/');
      expect(url.host).to.equal('bafyfoo');
      expect(url.hostname).to.equal('bafyfoo');
    }
  });
});
