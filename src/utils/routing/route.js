function Route(url, tempName, defaultRoute){
    try{
        if(!url || !tempName){
            throw new Error('initiled route is not correct. url or template name is missing.');
        }
        this.constructor(url, tempName, defaultRoute);
    }catch(e){
        console.log(e);
    }
}

Route.prototype = {
    url : undefined,
    tempName: undefined,
    isDefault: undefined,
    constructor: (url, tempName, isDefault)=>{
        this.url = url;
        this.tempName = tempName;
        this.isDefault = isDefault;
    },
    activated: (locationHash)=>{
        return locationHash == url;
    }
}

export default Route;