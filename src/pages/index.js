import Head from 'next/head'
import Link from 'next/link'

import axios from 'configs/axios'


function Home(props) {

  return (
    <div className="container mx-auto mt-4">
      <Head>
        <title>BWAMICRO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Saya halaman utama</h1>
        <Link href="/random">
          <a>Bring me to random fetch page</a>
        </Link>
      </main>
    </div>
  )
}

Home.getInitialProps = async () => {
  try {
    const data = await axios.get(`/courses`);
    return { data: data.data.data };
  } catch (error) {
    return error;
  }
}

export default Home;
