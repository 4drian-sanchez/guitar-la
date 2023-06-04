import Styles from '@/styles/nosotros.module.css'
import Image from 'next/image'

export const metadata = {
  title: 'Guitar - Nosotros',
  description: 'Información sobre nosotros',
}

const page = () => {
  return (
    <main className='contenedor'>

      <div className={Styles.nosotros__contenido}>
        <Image
          className={ Styles.nosotros__imagen }
          src={'/img/nosotros.jpg'}
          alt='Imagen de nosotros'
          width={900}
          height={400}
        />
        
        <div className={Styles.nosotros__texto}>
          <h1 className={`heading ${Styles.nosotros__heading}`}>Sobre nosotros</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas fugiat accusamus vel dolores reprehenderit! 
            Dolor sapiente exercitationem corrupti temporibus tempore distinctio ea maiores at ipsam, tempora excepturi 
            delectus aspernatur nihil!</p>
        </div>
      </div>


    </main>
  )
}

export default page