"use client"
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useCarritoContext } from '@/context/carritoContext'
import { dollarFormatter } from '@/helpers/dollarFormatter'

const Carrito = ( { Styles } ) => {

    const { carrito, actualizarCantidad, eliminarProducto } = useCarritoContext()
    const [total, setTotal] = useState(0)
    
    useEffect(() => {
        const totalAcumulado = carrito.reduce( ( total, producto ) => total + ( producto.cantidad * producto.precio), 0 )
        setTotal(totalAcumulado)
    }, [carrito])

    return (
        <div className={Styles.carrito__contenido}>
            <section className={Styles.carrito__articulos}>
                <h3>Articulos</h3>

                {
                    carrito.map(articulo => (

                        <div
                            className={Styles.articulo}
                            key={articulo.id}
                        >

                            <Image
                                src={articulo.imagenUrl}
                                width={400}
                                alt={`Imagen de la guitarra ${articulo.nombre}`}
                                title={`Imagen de la guitarra ${articulo.nombre}`}
                                height={700}
                                className={Styles.imagen}
                            />

                            <aside className={Styles.articulo__contenido}>
                                <h2 className={Styles.articulo__heading}>{articulo.nombre}</h2>

                                <div className={Styles.articulo__cantidad}>
                                    <p>Cantidad</p>
                                    <select
                                        value={articulo.cantidad}
                                        onChange={e => actualizarCantidad({
                                            id: articulo.id,
                                            cantidad: e.target.value
                                        })}
                                    >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>

                                <p className={Styles.articulo__precio}> {dollarFormatter(articulo.precio)} </p>
                                <p className={Styles.articulo__subtotal}>Subtotal: <span> {dollarFormatter(articulo.cantidad * articulo.precio)} </span></p>
                            </aside>

                            <button
                                type='button'
                                className={Styles.eliminar}
                                onClick={() => eliminarProducto(articulo.id)}
                            >
                                X
                            </button>

                        </div>
                    ))
                }

            </section>

            <aside className={Styles.carrito__resumen}>
                <h3>Resumen del pedido</h3>
                {
                    carrito.length
                        ? <p>Total a pagar: {dollarFormatter(total)}</p>
                        : <p>El carrito esta vacio</p>
                }
            </aside>

        </div>
    )
}

export default Carrito