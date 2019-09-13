import { useRouter } from 'next/router'
import Layout from '../layout/MainLayout'

const Page = () => {
  const router = useRouter()

  return (
    <Layout>
      <h1>{router.query.title}</h1>
      <p>This is the post content.</p>
    </Layout>
  )
}

export default Page
