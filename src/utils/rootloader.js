
export default(tempFunc, props ={})=>{
    const root = document.getElementById('root');
    root.innerHTML = tempFunc(props);
}