export const getGuitarras = async () => {
    const response = await fetch(`${process.env.API_URL}/api/guitarras/?populate=*`, {cache: 'no-store'})
    const { data } = await response.json();
    return data;
}

export const getGuitarrasByUrl = async ( url ) => {
    const response = await fetch(`${process.env.API_URL}/api/guitarras?filters[url]=${url}&populate=*`)
    const { data } = await response.json();
    return data;
}

/* getStaticProps y getServerSideProps ya no funciona 
   ahora todo se realiza en el fetch API en el objeto init
   del Fetch API.
   
   Si queremos que devuelva una respuesta estatica, que no
   cambie no configuramos nada en el fetch

   Si queremos que los resultados sean dinàmicos colocamos 
   en el objeto init del fetch api la siguiente configuracion:

    fetch(`${process.env.API_URL}/api/guitarras/?populate=*`, {
        cache: 'no-store'*/