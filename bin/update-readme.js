#!/usr/bin/env node
import { writeFile, readFile } from 'node:fs/promises'
import { glob } from 'glob'

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

async function main () {
/**
 * Copy all url-results-*.md files and combine them into a single markdown file, and write it to the README.md file.
 */
  // TODO: read JSON files and build full table
  const markdownTables = await glob('./url-results-*.md')

  // const markdownTableLines = [

  const markdownTableLines = [
    '## Results',
    '',
    'The following tables are generated from the test suite.',
    ''
  ]
  for (const markdownTable of markdownTables) {
    const markdownTableContent = await readFile(markdownTable, 'utf8')
    markdownTableLines.push(markdownTableContent)
  }
  const readmeWithoutResults = await getExistingReadmeWithoutResults()
  await writeFile('./README.md', `${readmeWithoutResults}\n${markdownTableLines.join('\n')}\n`, { encoding: 'utf8', append: false })
}

await main()
