import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: 'Shellnium - Selenium Web Driver for Bash',
  description: 'Shellnium: Web Driver by Bash',
  openGraph: {
    title: 'Shellnium: Web Driver by Bash',
    description: 'Shellnium: Web Driver by Bash',
    images: [{ url: 'https://shellnium-site.vercel.app/ogp.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://shellnium-site.vercel.app/ogp.png'],
  },
  icons: {
    icon: '/favicon/32x32.png',
    apple: '/favicon/apple-touch-icon.png',
  },
}

const logo = (
  <>
    <span style={{ fontWeight: 'bold', marginRight: 10 }}>Shellnium</span>
    <span style={{ color: 'gray' }}>Selenium Web Driver for Bash</span>
  </>
)

export default async function RootLayout({ children }) {
  const pageMap = await getPageMap()

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={
            <Navbar
              logo={logo}
              projectLink="https://github.com/Rasukarusan/shellnium"
            />
          }
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/Rasukarusan/shellnium-site"
          sidebar={{ toggleButton: true }}
          footer={<Footer />}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
