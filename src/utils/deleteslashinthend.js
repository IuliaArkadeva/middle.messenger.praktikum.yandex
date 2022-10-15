export default (url)=>{
    return url.endsWith('/') ? url.slice(0, -1) : url;
}