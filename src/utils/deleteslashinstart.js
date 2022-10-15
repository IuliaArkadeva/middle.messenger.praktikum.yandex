export default (url)=>{
    return url.startsWith('/') ? url.slice(1) : url;
}