import Link from "next/link"

import Layout from "../components/layout"
import Head from "next/head"
function HomePage() {
    return <Layout>
    <Head>
        <title>Anasayfa</title>
    </Head>
       <h2>Welcome to Next.js!</h2> 
       <style jsx>{`
           h2{
               color: white;
               background-color:
               
               pink;
           }`}
       </style>
    </Layout>
  
  }
  
  export default HomePage