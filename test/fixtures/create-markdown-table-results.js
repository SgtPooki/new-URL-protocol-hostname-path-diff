function valueNormalize (value) {
  if (value === undefined) {
    return 'undefined'
  } else if (value === null) {
    return null
  } else if (typeof value === 'string') {
    return `"${value}"`
  }
  return `${value}`
}

// TODO: return JSON and allow grouping by protocol or environment
export function createMarkdownTableResults (urlTemplate, environment, existingTable = null) {
  const ALL_PROTOCOLS = ['ipfs', 'ipns', 'http', 'https', 'ftp']

  const markdownTableLines = existingTable?.split('\n') ?? [
    '',
    `### Environment: ${environment}`,
    '| URL              | origin | protocol | host | hostname | path     | search | hash |',
    '|------------------|--------|----------|------|----------|----------|--------|------|'
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
      urlObj.hash
    ]

    markdownTableLines.push(`| ${row.map(valueNormalize).join(' | ')} |`)
  }
  return markdownTableLines.join('\n')
}
