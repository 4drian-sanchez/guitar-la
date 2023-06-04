import { getGuitarrasByUrl } from "@/data/getGuitarras";
import GuitarraByUrl from "@/components/GuitarraByUrl";
import Styles from '@/styles/guitarra.module.css'

const page = async ( {params: {url} } ) => {
  const guitarra = await getGuitarrasByUrl( url );

  return (
    <>

      {
        guitarra.length === 0 
        ? <>
            <main className={Styles.guitarra__error}>
              <p>La guitarra no exite</p>
            </main>
          </>
        : <>
            <GuitarraByUrl
              guitarra={guitarra}
              Styles={Styles}
            />
          </>
      }

    </>
  )
  
}
export default page