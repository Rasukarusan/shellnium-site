export default {
  repository: 'https://github.com/Rasukarusan/shellnium', // project repo
  docsRepository: 'https://github.com/Rasukarusan/shellnium-site', // docs repo
  branch: 'master', // branch of docs
  path: '/', // path of docs
  titleSuffix: ' – Shellnium',
  nextLinks: true,
  prevLinks: true,
  search: false,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: <>MIT {new Date().getFullYear()} © Rasukarusan</>,
  footerEditOnGitHubLink: true, // will link to the docs repo
  logo: <>
    <span style={{fontWeight: 'bold', marginRight: 10}}>Shellnium</span>
    <span style={{color: 'gray'}}>Selenium Web Driver for Bash</span>
  </>,
  head: <>
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/favicon/32x32.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/favicon/apple-touch-icon.png"
    />
    <link
      rel="icon"
      sizes="256x256"
      href="/favicon/android-chrome-256x256.png"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="theme-color" content="#ffffff" />
    <meta name="description" content="Shellnium: Web Driver by Bash" />
    <meta httpEquiv="Content-Language" content="en" />
    <meta name="og:title" content="Shellnium: Web Driver by Bash" />
    <meta name="og:image" content="https://shellnium-site.vercel.app/ogp.png" />
    <meta name="og:description" content="Shellnium: Web Driver by Bash" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content="https://shellnium-site.vercel.app/ogp.png" />
    <meta name="twitter:site:domain" content="shellnium-site.vercel.app" />
    <meta name="twitter:url" content="https://shellnium-site.vercel.app" />
    <meta name="apple-mobile-web-app-title" content="Shellnium" />
  </>
}
