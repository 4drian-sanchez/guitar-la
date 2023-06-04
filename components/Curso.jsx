'use client'
import Styles from '@/styles/curso.module.css'

export const Curso = ( {curso} ) => {

    const {
        Titulo,
        contenido,
        imagen: {
            data : {
                attributes : {
                    formats : {
                        large : {
                            url : imagenUrl
                        }
                    }
                }
            }
        },
    } = curso;
  
    console.log(imagenUrl)
    
  return (
    <section className={`curso ${Styles.curso}`}>
        <style jsx>{`
            .curso {
                background-image: 
                    linear-gradient( to right, rgba( 0 0 0 / .65), rgba( 0 0 0 / .7) ),
                    url( ${imagenUrl} )
            }
        `}
        </style>

        <div className='contenedor'>

            <div className={Styles.curso__contenido}>
                <h2 className={ Styles.curso__heading }> {Titulo} </h2>
                <p className={ Styles.curso__descripcion }>
                    { contenido }
                </p>
            </div>
        </div>

    </section>

  )
}