import Image from "next/image"
import Link from "next/link"
import { getPostByUrl } from "@/data/getPosts"
import { formatearFecha } from "@/helpers/formatearFecha"
import Styles from '@/styles/blog.module.css'

const page = async ( { params: {url: urlParam} } ) => {
  
  const post = await getPostByUrl(urlParam)

  if(post.length === 0) {
    return(
      <p>El blog no existe</p>
    )
  }
  
  const {
    titulo,
    descripcion,
    publishedAt,
    url,
    imagen: { data: { attributes: {url : imagenUrl} } }
} = post[0]?.attributes


  return (
    <div className={Styles.blog}>

    <div className={Styles.blog__contenedor}>
        <Image
            src={imagenUrl}
            width={700}
            height={900}
            alt={`Imagen del blog ${titulo}`}
            title={`Imagen del blog ${titulo}`}
            className={Styles.blog__imagen}
        />
        <h2 className={Styles.blog__titulo}>{titulo}</h2>
        <p className={Styles.blog__descripcion}>{ descripcion }</p>
        <p className={Styles.blog__fecha}>{ formatearFecha(publishedAt) }</p>

        <Link
          className={Styles.blog__linkPost}
          href={'/blog'}
        >
          Regresar
        </Link>
    </div>
    
</div>
  )
}

export default page