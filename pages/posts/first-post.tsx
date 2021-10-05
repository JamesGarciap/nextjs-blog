import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/Layout/layout'
import Alert from "../../components/Alert/alert";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
        <Alert type={'success'}><p>Soy una alerta</p></Alert>
      <h2>
        <Link href="/">
          <a>Back to Home</a>
        </Link>
      </h2>
    </Layout>
  )
}
