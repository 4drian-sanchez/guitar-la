'use client';
import Link from 'next/link'
import Image from 'next/image';
import Logo from '../public/img/logo.svg'
import Styles from '../styles/header.module.css'
 import { usePathname } from 'next/navigation';

export const Header = () => {
  
  const pathname = usePathname();
  return (
    <header className={ Styles.header }>
            
      <div className={`contenedor ${Styles.header_barra}`}>
        <Link href={'/'}>
          <Image 
            src={Logo} alt="Logo de la tienda" 
            width={150}
            />
        </Link>

        <nav className= { Styles.header_navegacion } >
            <Link 
              href={'/'}
              className={ pathname === '/' ? 'active' : '' }

              >
              Inicio
            </Link>
            <Link 
              href={'/nosotros'}
              className={ pathname === '/nosotros' ? 'active' : '' }
              >
              Nosotros
            </Link>
            <Link 
              href={'/tienda'}
              className={ pathname === '/tienda' ? 'active' : '' }
              >
              Tienda
            </Link>
            <Link 
              href={'/blog'}
              className={ pathname === '/blog' ? 'active' : '' }
              >
              Blog
            </Link>
            <Link 
              href={'/carrito'}
              className={ pathname === '/carrito' ? 'active' : '' }
              >
                <Image
                  src='/img/carrito.png'
                  alt='Imagen del carrito'
                  title='Imagen del carrito'
                  width={30}
                  height={25}
                />
            </Link>

        </nav>
    </div>
    </header>
  )
}