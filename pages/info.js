import Layout from '../components/Layout'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

export default function Info({ frontmatter, markdownBody, title }) {
  return (
    <Layout
      pathname="info"
      bgColor={frontmatter.background_color}
      siteTitle={title}
    >
      <div className="container mx-auto pt-8 sm:p-4 md:p-6 lg:p-8 xl:p-24 text-blue-700">
        {/* <ReactMarkdown source={markdownBody} /> */}
        <h1 className="text-6xl">Say hey!</h1>
        <p className="text-lg">
          Shoot me a message and I'd love to talk
        </p>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const content = await import(`../data/info.md`)
  const config = await import(`../data/config.json`)
  const data = matter(content.default)

  return {
    props: {
      title: config.title,
      frontmatter: data.data,
      markdownBody: data.content,
    },
  }
}
