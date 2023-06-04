import { getGuitarras } from "@/data/getGuitarras";
import { getPosts } from "@/data/getPosts";
import { Post } from "@/components/Post";
import { Curso } from "@/components/Curso";
import Guitarra from "@/components/Guitarra";

//Styles
import Styles from '@/styles/guitarras.module.css'
import blogStyles from '@/styles/blog.module.css'


const getCurso = async () => {
  const response = await fetch(`${process.env.API_URL}/api/curso?populate=*`)
  const { data } = await response.json()
  return data
}

export default async function Home() {

  const guitarras = await getGuitarras();
  const posts = await getPosts();
  const curso = await getCurso()
  
  
  return (
    <>
      <main className='contenedor'>
      <h1 className="heading">Nuestra colección </h1>
      
      <div className={Styles.guitarras__main}>

          {
            guitarras.map( guitarra => (
                <Guitarra
                  key= {guitarra.id }
                  guitarra= {  guitarra }
                  Styles= {Styles}
              />
            ) )
          }
      </div>
    </main>
    
      <Curso
            key={curso?.id}
            curso={curso?.attributes}
      />

    <section>
      <h2 className="heading">Nuestro blog</h2>
        <div className={`contenedor ${blogStyles.blog__grid}`}>
          {
            posts.map( post => (
              <Post
                key={ post.id }
                post={ post }
                Styles= { blogStyles }
              />
            ) )
          }
      </div>
    </section>
  </>
  )
}
