import Image from "next/image"
import Link from "next/link"
import { formatearFecha } from "@/helpers/formatearFecha"

export const Post = ( { post, Styles } ) => {

    const {
        titulo,
        descripcion,
        publishedAt,
        url,
        imagen: { data: { attributes: {url : imagenUrl} } }
    } = post.attributes
    
  return (
    <div className={Styles.blog}>

        <div>
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
        </div>

        <Link 
            href={`/blog/${url}`}
            className={Styles.blog__link}
        >
            Ver más
        </Link>
        
    </div>
  )
}