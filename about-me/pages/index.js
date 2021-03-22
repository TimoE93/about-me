import Head from "next/head"
import ContentIndex from "../components/content/ContentIndex"

const Default = () => {
  return (
    <div>
        <Head>
          <title>Timo Engler - Webdeveloper</title>
          <meta name='keywords' content='Timo Engler, Webdeveloper, Webdevelopment'></meta>
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        </Head>
        <ContentIndex></ContentIndex>
    </div>
  )
}

export default Default;