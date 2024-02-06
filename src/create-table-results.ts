export function valueNormalize (value: any): string | null {
  if (value === undefined) {
    return 'undefined'
  } else if (typeof value === 'object' && value === null) {
    return 'null'
  }
  if (value !== "") {
    return `\u0060${value}\u0060`
  }
  return `"${value}"`
}

export interface TableRow {
  environment: string
  url: string
  origin: string
  protocol: string
  host: string
  hostname: string
  pathname: string
  search: string
  hash: string
  /**
   * mostly for matching against other rows for matching URLS
   */
  urlTemplate: string
  toString: string
}

export type TableResults = TableRow[]

/**
 * Create JSON results for a url template.
 *
 * @param urlTemplate
 * @param environment
 */
export function createTableResults (urlTemplate: string, environment: string): TableResults {
  const ALL_PROTOCOLS = ['ipfs', 'ipns', 'http', 'https', 'ftp']

  const results: TableResults = []

  for (const protocol of ALL_PROTOCOLS) {
    const newUrlString = urlTemplate.replace(/^PROTOCOL:\/\//, `${protocol}://`)
    const urlObj = new URL(urlTemplate.replace(/^PROTOCOL:\/\//, `${protocol}://`))
    const row: TableRow = {
      toString: urlObj.toString(),
      environment,
      urlTemplate,
      url: newUrlString,
      origin: urlObj.origin,
      protocol: urlObj.protocol,
      host: urlObj.host,
      hostname: urlObj.hostname,
      pathname: urlObj.pathname,
      search: urlObj.search,
      hash: urlObj.hash
    }
    results.push(row)
  }

  return results
}

export function createMarkdownTableResults (urlTemplate: string, environment: string, existingTable: string | null = null): string {
  const ALL_PROTOCOLS = ['ipfs', 'ipns', 'http', 'https', 'ftp']

  const markdownTableLines = existingTable?.split('\n') ?? [
    '',
    `### Environment: ${environment}`,
    '| URL              | origin | protocol | host | hostname | path     | search | hash | toString |',
    '|------------------|--------|----------|------|----------|----------|--------|------|----------|'
  ]

  for (const protocol of ALL_PROTOCOLS) {
    const newUrlString = urlTemplate.replace(/^PROTOCOL:\/\//, `${protocol}://`)
    const urlObj = new URL(urlTemplate.replace(/^PROTOCOL:\/\//, `${protocol}://`))
    const row = [
      newUrlString,
      urlObj.origin,
      urlObj.protocol,
      urlObj.host,
      urlObj.hostname,
      urlObj.pathname,
      urlObj.search,
      urlObj.hash,
      urlObj.toString
    ]

    markdownTableLines.push(`| ${row.map(valueNormalize).join(' | ')} |`)
  }
  return markdownTableLines.join('\n')
}
