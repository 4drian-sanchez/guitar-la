import Guitarra from '@/components/Guitarra';
import { getGuitarras } from '@/data/getGuitarras'
import Styles from '@/styles/guitarras.module.css'

export const metadata = {
  title: 'Guitar - Tienda',
  description: 'Nuestra tienda',
}

 export default async  function page ()  {

  const guitarras = await getGuitarras();
  
  return (
    <main className='contenedor'>
      <h1 className="heading">Nuestra colección </h1>
      
      <div className={Styles.guitarras__grid}>

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
  )
}