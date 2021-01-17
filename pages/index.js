import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  var year = new Date().getFullYear() - 2017;
  return (
    <div className="container">
      <Head>
        <title>Yudi Hermawan!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Hi there!" />
        <p className="description">
          I am experienced Software Developer trained {year} years of total experience in Web Development using backend stacks: Docker, .NET Core. .NET Framework, Laravel, MySQL, MongoDB, Redis, Object Relational Mapping using Entity Framework Core, RESTful API, OData, unit testing using xUnit, while on frontend stacks using Vue.js, Reach.js, and jQuery. I have also some experiences in SharePoint development. 
        </p>
      </main>
    </div>
  )
}
