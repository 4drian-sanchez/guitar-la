import Post from "@/components/post"
import { getPosts } from "@/data/getPosts"
import Styles from '@/styles/blog.module.css'

export const metadata = {
  title: 'Guitar - Blog',
  description: 'Blog de nuestra tienda',
}

const page = async () => {
  
  const posts = await getPosts();

  return (
    <>
      <h1 className="heading">Nuestro blog</h1>
 
    <main className={Styles.blog__grid}>
        {
          posts?.map( post => (
            <Post
              key={ post.id }
              post={ post }
              Styles= { Styles }
            />
          ) )
        }
    </main>
    </>
  )
}

export default page