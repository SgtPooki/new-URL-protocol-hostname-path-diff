#!/usr/bin/env node
import { writeFile, readFile } from 'node:fs/promises'
import { glob } from 'glob'
import { valueNormalize } from '../dist/src/create-table-results.js'

async function getExistingReadmeWithoutResults () {
  const readme = await readFile('./README.md', 'utf8')
  const readmeLines = readme.split('\n')
  const readmeLinesWithoutResults = []
  let inResults = false
  for (const line of readmeLines) {
    if (line.includes('<!-- RESULTS_TRIGGER -->')) {
      inResults = true
    }
    readmeLinesWithoutResults.push(line)
    if (inResults) {
      break
    }
  }
  return readmeLinesWithoutResults.join('\n')
}

// async function main () {
// /**
//  * Copy all url-results-*.md files and combine them into a single markdown file, and write it to the README.md file.
//  */
//   // TODO: read JSON files and build full table
//   const markdownTables = await glob('./url-results-*.md')

//   // const markdownTableLines = [

//   const markdownTableLines = [
//     '## Results',
//     '',
//     'The following tables are generated from the test suite.',
//     ''
//   ]
//   for (const markdownTable of markdownTables) {
//     const markdownTableContent = await readFile(markdownTable, 'utf8')
//     markdownTableLines.push(markdownTableContent)
//   }
//   const readmeWithoutResults = await getExistingReadmeWithoutResults()
//   await writeFile('./README.md', `${readmeWithoutResults}\n${markdownTableLines.join('\n')}\n`, { encoding: 'utf8', append: false })
// }

function sortRowsByProperty (property, weighting = []) {
  return (a, b) => {
    if (weighting.length > 0) {
      const aWeight = weighting.indexOf(a[property])
      const bWeight = weighting.indexOf(b[property])
      if (aWeight !== -1 && bWeight !== -1) {
        if (aWeight < bWeight) {
          return -1
        }
        if (aWeight > bWeight) {
          return 1
        }
      }
    }
    // return rows.sort((a, b) => {
    if (a[property] < b[property]) {
      return -1
    }
    if (a[property] > b[property]) {
      return 1
    }
    return 0
  // })
  }
}
async function main () {
  /**
   * Copy all url-results-*.json files and combine them into a single markdown file, and write it to the README.md file.
   */
  const jsonFiles = await glob('./url-results-*.json')
  const allResults = []
  /**
   * @type {Record<string, import ('../src/create-table-results.js').TableResults>}
   */
  const groups = {}
  for (const result of jsonFiles) {
    const resultContent = await readFile(result, 'utf8')
    /**
     * @type {import ('../src/create-table-results.js').TableResults}
     */
    const resultJson = JSON.parse(resultContent)

    for (const resultEntry of resultJson) {
      allResults.push(resultEntry)
      let urlTemplateGroup = groups[resultEntry.urlTemplate]
      if (!urlTemplateGroup) {
        urlTemplateGroup = []
        groups[resultEntry.urlTemplate] = urlTemplateGroup
      }
      urlTemplateGroup.push(resultEntry)
      let envGroup = groups[resultEntry.environment]
      if (!envGroup) {
        envGroup = []
        groups[resultEntry.environment] = envGroup
      }
      envGroup.push(resultEntry)
    }
  }
  const markdownTableLines = [
    '## Results',
    '',
    'The following tables are generated from the test suite.',
    ''
  ]

  // add tables grouped by urlTemplate
  const columns = ['environment', 'protocol', 'origin', 'host', 'hostname', 'path', 'search', 'hash']
  // eslint-disable-next-line guard-for-in
  for (const [groupName, groupItems] of Object.entries(groups)) {
    if (groupName.includes('PROTOCOL')) {
      const groupColumns = columns.filter(c => c !== 'protocol')
      const columnHeaders = `| ${groupColumns.join(' | ')} |`
      const columnHeaderBreak = `| ${groupColumns.map(() => '---').join(' | ')} |`
      markdownTableLines.push(`### Grouped by URL "${groupName}"`)
      markdownTableLines.push('');

      ['ipfs:', 'ipns:', 'http:', 'https:', 'ftp:'].forEach(protocol => {
        markdownTableLines.push(`#### Protocol "${protocol}"`)
        markdownTableLines.push('')
        markdownTableLines.push(columnHeaders)
        markdownTableLines.push(columnHeaderBreak)
        const protocolGroup = groupItems.filter(result => result.protocol === protocol).sort(sortRowsByProperty('environment', ['node', 'chrome', 'firefox', 'webkit', 'electron-main', 'webworker']))
        markdownTableLines.push(protocolGroup.map(result => `| ${groupColumns.map(column => valueNormalize(result[column])).join(' | ')} |`).join('\n'))
        markdownTableLines.push('')
      })
    } else {
      const groupColumns = columns.filter(c => c !== 'environment')
      const columnHeaders = `| ${groupColumns.join(' | ')} |`
      const columnHeaderBreak = `| ${groupColumns.map(() => '---').join(' | ')} |`
      markdownTableLines.push(`### Grouped by environment "${groupName}"`)
      markdownTableLines.push('')

      markdownTableLines.push(columnHeaders)
      markdownTableLines.push(columnHeaderBreak)
      const protocolGroup = groupItems.sort(sortRowsByProperty('protocol', ['ipfs:', 'ipns:', 'http:', 'https:', 'ftp:']))
      markdownTableLines.push(protocolGroup.map(result => `| ${groupColumns.map(column => valueNormalize(result[column])).join(' | ')} |`).join('\n'))
      markdownTableLines.push('')
    }
  }

  const readmeWithoutResults = await getExistingReadmeWithoutResults()
  await writeFile('./README.md', `${readmeWithoutResults}\n${markdownTableLines.join('\n')}\n`, { encoding: 'utf8', append: false })
}

await main()
