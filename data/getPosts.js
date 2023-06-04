export const getPosts = async () => {
    const response = await fetch(`${process.env.API_URL}/api/posts?populate=*`, {cache:'no-store'})
    const { data } = await response.json()
    return data;
}

export const getPostByUrl = async ( url ) => {
    const response = await fetch(`${process.env.API_URL}/api/posts?filters[url]=${url}&populate=*`)
    const { data } = await response.json();
    return data;
}