export default {
  repository: 'https://github.com/Rasukarusan/shellnium', // project repo
  docsRepository: 'https://github.com/Rasukarusan/shellnium-site', // docs repo
  branch: 'master', // branch of docs
  path: '/', // path of docs
  titleSuffix: ' – Shellnium',
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: 'MIT 2020 © Rasukarusan',
  footerEditOnGitHubLink: true, // will link to the docs repo
  logo: <>
    <svg>...</svg>
    <span>Next.js Static Site Generator</span>
  </>,
  head: <>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Nextra: the next docs builder" />
    <meta name="og:title" content="Nextra: the next docs builder" />
  </>
}
