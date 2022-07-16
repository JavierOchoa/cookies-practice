import type { NextPage } from 'next'
import { Layout } from '../components/layouts'

const Home: NextPage = () => {
  return (
    <Layout>
      <h1>Cookie Master</h1>
        <p>En la barra de navegación presiona el botón de cambiar tema</p>
    </Layout>
  )
}

export default Home
