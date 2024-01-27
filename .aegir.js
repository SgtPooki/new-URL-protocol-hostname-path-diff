import http from 'node:http';
import { writeFile } from 'node:fs/promises'

/** @type {import('aegir/types').PartialOptions} */
export default {
  test: {
    files: ['dist/test/*.spec.js'],
    async before (options) {
      const requestListener = async function (req, res) {
        const { env, table, url } = await new Promise(resolve => {
          let body = ''
          req.on('data', function (data) {
            body += data
          })

          req.on('end', function () {
            resolve(JSON.parse(body))
          })
        })

        try {
          res.writeHead(200, {
            'Access-Control-Allow-Origin': '*'
          })
          const filenameSafeUrl = url.replace(/[^a-zA-Z0-9]/g, '_')
          await writeFile(`./url-results-${filenameSafeUrl}-${env}.json`, JSON.stringify(table, null, 2), { encoding: 'utf8', append: false })
          res.end('done')
        } catch (err) {
          // eslint-disable-next-line no-console
          console.error('Error:', err)
          res.writeHead(500, {
            'Access-Control-Allow-Origin': '*'
          })
          res.end(err.toString())
        }
      }
      const httpServer = http.createServer(requestListener)
      await new Promise(resolve => httpServer.listen(0, () => resolve(0) ) )

      /**
       * @type {string}
       */
      let RUNNER_ENV = options.runner;
      if (RUNNER_ENV === 'browser') {
        if (process.argv.includes('firefox')) {
          RUNNER_ENV = 'firefox';
        } else if (process.argv.includes('webkit')) {
          RUNNER_ENV = 'webkit';
        } else {
          RUNNER_ENV = 'chrome';
        }
      } else if (RUNNER_ENV === 'webworker') {
        if (process.argv.includes('firefox')) {
          RUNNER_ENV += '-firefox';
        } else if (process.argv.includes('webkit')) {
          RUNNER_ENV += '-webkit';
        } else {
          RUNNER_ENV += '-chrome';
        }
      }

      return {
        env: {
          RUNNER_ENV,
          MARKDOWN_SERVER: `http://127.0.0.1:${httpServer.address().port}`
        },
        httpServer
      };

    },
    /**
     *
     * @param {object} beforeResult
     * @param {import('http').Server} beforeResult.httpServer
     */
    async after (_, { httpServer } ) {
        console.log('trying to close the server...')
        await new Promise(resolve => {
          httpServer.closeAllConnections()
          httpServer.close(resolve)
        })
    }
  },
};
