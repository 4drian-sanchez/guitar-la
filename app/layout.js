import { Outfit } from 'next/font/google';
import  {Header, Footer} from '@/components'
import { CarritoProvider } from '@/context/carritoContext';
import '../styles/normalize.css';
import '../styles/globals.css'

const outfit = Outfit({
  weight: ['400', '700', '900'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Guitar - Inicio',
  description: 'Tienda de Guitarras',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="es" className={outfit.className}>
      <body>
        <Header/>
        <CarritoProvider>
          {children}
        </CarritoProvider>
        <Footer/>
      </body>
    </html>
  )
}
