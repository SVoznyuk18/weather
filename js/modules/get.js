
const get = async (url) =>{
    const resp = await fetch(url)
    if(!resp.ok){
        throw new Error(`status ${resp.status}`);
    }
    return await resp.json();
}

export default get;