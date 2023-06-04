import Styles from '@/styles/carrito.module.css'
import Carrito from '@/components/Carrito'

const page = () => {

  return (
    <main className={`contenedor`}>
        <h1 className={Styles.carrito__heading}>Carrito</h1>

        <Carrito
          Styles={Styles}
        />
    </main>
  )
}

export default page