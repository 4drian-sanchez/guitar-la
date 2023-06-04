import Link from 'next/link';
import Styles from '../styles/footer.module.css';

export const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <div className="contenedor">
          <nav className={Styles.navegacion}>
            <Link
              href={'/'}
            >
              Inicio
            </Link>
            <Link
              href={'/nosotros'}
            >
              Nosotros
            </Link>
            <Link
              href={'/tienda'}
            >
              Tienda
            </Link>
            <Link
              href={'/blog'}
            >
              Blog
            </Link>

          </nav>
      </div>
        <p
            className={Styles.copyright}
            >
            <b className={Styles.copyright__name}>&copy;GuitarLA</b>  Todos los derechos reservados
        </p>
    </footer>
  )
}