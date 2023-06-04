import Image from "next/image"
import '../../styles/globals.css'
import Styles from '/styles/notFound.module.css'

export default function NotFoundCatchAll() {
  return (
    <main className={ Styles.notFound }>
        <div className="not-found__contenido">
            <Image
                src={'./img/icons8-error.svg'}
                width={500}
                height={500}
                alt='Icono de error (pàgina no encontrada)'
                title='Icono de error (pàgina no encontrada)'
                className={Styles.notFFound__image}
            />
            <h1>Error 404</h1>
            <p>No hemos encontrado la pàgina que estas buscando</p>
        </div>
    </main>
  )
}