'use client'
import { useEffect, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import {  useCarritoContext } from "@/context/carritoContext"
import { dollarFormatter } from "@/helpers/dollarFormatter"
import FormStyles from '@/styles/form.module.css'

const GuitarraByUrl = ( {guitarra, Styles} ) => {

    const [cantidad, setCantidad] = useState(0)
    const [error, setError] = useState('')
    const router = useRouter()

    const { agregarCarrito, carrito } = useCarritoContext();

    const {
      nombre,
      descripcion,
      precio,
      imagen: { data: { attributes: { formats: { medium: { url: imagenUrl } } } } },
    } = guitarra[0]?.attributes
    
    const hundleSubmit = e => {
        e.preventDefault()
        
        if(!cantidad) {
            setError('La cantidad debe ser mayor a 0')
            return
        }
        setError('')

        const guitarraSeleccionada = {
          id: guitarra[0].id,
          imagenUrl,
          nombre,
          precio,
          cantidad
        }

        
        agregarCarrito(guitarraSeleccionada)
        router.push('/carrito')
    }
       
  return (
    <main className={Styles.guitarra__contenedor} >
        <div className={Styles.guitarra}>
            <Image
              src={imagenUrl}
              width={300}
              height={200}
              alt={`Guitarra ${nombre}`}
              title={`Guitarra ${nombre}`}
              className={Styles.guitarra__imagen}
            />

            <div className={Styles.guitarra__contenido}>
              <h1 className={Styles.guitarra__heading}> {nombre} </h1>
              <p className={Styles.guitarra__descripcion}>{descripcion}</p>
              <p className={Styles.guitarra__precio}>{dollarFormatter(precio)}</p>

              <form 
                onSubmit={ hundleSubmit }
              >
                <label className={ FormStyles.label } htmlFor="cantidad">Cantidad</label>

                <select 
                    id="cantidad"
                    onChange={ (e) => setCantidad(+e.target.value) }
                    value={ cantidad }
                    className={ FormStyles.form__select }
                    >
                    <option value="0" disabled> --Seleccione --</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                {
                    error && <p className={ FormStyles.form__error }> {error} </p>
                }
                <input 
                    type="submit"
                    value='Agregar al carrito'
                    className={FormStyles.form__submit}
                />
              </form>


            </div>
        </div>
    </main>
  )
}

export default GuitarraByUrl