import Head from 'next/head'
import Header from '@components/Header'

export default function Home() {
  var year = new Date().getFullYear() - 2017;
  return (
    <div className="container">
      <Head>
        <title>Yudi Hermawan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Hi there!" />
        <p className="description">
          My name Yudi Hermawan, I am experienced Software Developer trained {year} years of total experience in Web Development using backend stacks:
          Docker, .NET Core. .NET Framework, Laravel, MySQL, MongoDB, Redis, Object Relational Mapping using Entity Framework Core, RESTful API, OData, unit testing using xUnit,
          while on frontend stacks using Vue.js, React.js, and jQuery. I have also some experiences in SharePoint development. <br /> <br />
          Find me on <a href="https://github.com/yudihermawan">Github</a>, <a href="https://www.linkedin.com/in/yudi-hermawan/">LinkedIn</a>, <a href="https://medium.com/@yudi.hs">Medium</a>, <a href="https://twitter.com/yudify_">Twitter</a>, <a href="https://facebook.com/hs.yudi">Facebook</a>, or <a href="https://www.instagram.com/yudihermawan.s/">Instagram</a>
        </p>
      </main>
    </div>
  )
}
