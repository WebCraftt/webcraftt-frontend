import Image from 'next/image'
import Layout from '@/src/layout/Layout'
import About from '@/src/components/About'
import Package from '@/src/components/Package'


export default function Home() {
  return (
    <Layout>
      <h1>Hello</h1>
      <br />
      <About />
      <br />
      <Package />
    </Layout>
  )
}
