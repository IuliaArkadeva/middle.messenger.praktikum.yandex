import loader from "../rootloader";


function Router(routes, pageContainer){
    try{
        if(!routes){
            throw new Error('no rotes initialised');
        }
        this.constructor(routes, pageContainer);
        
    }catch (e){
        console.log(e);
    }
}

Router.prototype = {
    routes: undefined,
    pageContainer: undefined,
    constructor: function(routes, pageContainer){
        this.routes = routes;
        this.pageContainer = pageContainer;
    }
}

export default Router;