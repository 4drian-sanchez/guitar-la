import Image from "next/image";
import Link from "next/link";
import { dollarFormatter } from "@/helpers/dollarFormatter";

const Guitarra = ( { guitarra, Styles } ) => {

    const {
        nombre,
        imagen: { data: { attributes: { formats: { medium: { url: imagenUrl } } } } },
        descripcion,
        precio,
        url

    } = guitarra.attributes;
    
  return (
    <div className={Styles.guitarra}>
        
        <div className={ Styles.guitarra__imagen }>
            <Image
                src={imagenUrl}
                width={400}
                height={900}
                alt={`Guitarra ${nombre}`}
            />
        </div>
        
        <div className="guitarra__contenido">
            <h2 className={Styles.guitarra__nombre}>{ nombre }</h2>
            <p className={Styles.guitarra__descripcion}> { descripcion } </p>
            <p className={Styles.guitarra__precio}>{ dollarFormatter( precio ) }</p>

            <Link
                className={ Styles.guitarra__link }
                href={`/guitarras/${url}`}
            >
                Ver más
            </Link>
        </div>
    </div>
  )
}

export default Guitarra