function Route(url, tempName, params={}, defaultRoute = false){
    try{
        if(!url && !defaultRoute || !tempName){
            throw new Error('initiled route is not correct. url or template name is missing.');
        }
        this.constructor(url, tempName, params, defaultRoute);
    }catch(e){
        console.log(e);
    }
}

Route.prototype = {
    url : undefined,
    tempFunc: undefined,
    params : undefined,
    isDefault: undefined,
     constructor: function(url, tempFunc, params = {}, isDefault){
        this.url = url;
        this.params = params,
        this.tempFunc = tempFunc;
        this.isDefault = isDefault;
    },
    activated: function(locationHash){
        return locationHash == this.url.replace('#', '');
    }
}

export default Route;