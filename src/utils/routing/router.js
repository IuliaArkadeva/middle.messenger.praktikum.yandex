//import all pages


function Router(routes, pageContainer){
    try{
        if(!routes){
            throw new Error('no rotes initialised');
        }

        this.constructor(routes, pageContainer);
        this.Infinity();

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
    },
    init: function(){
        const routeList = this.routes;
        const initListener = function(scope, routes){
            window.addEventListener('hashchange', function(e){
                scope.hasChanges(scope, routes);
            })
        }
        initListener(this, routeList);
    },
    hasChange: function(scope, routes){
        if(window.location.hash.length>0){
            //TODO сократить
            routes.forEach(route=>{
                if(route.activated(window.location.hash.substr(1))){
                    scope.switchRoute(route.tempName);
                }
            })
        }else{
            //TODO: переключиться на дефолтный
        }
    },
    switchRoute: function(tempName){
        //TODO: заполняем rootElement из шаблона вкладки pages
    }
}

export default Router;