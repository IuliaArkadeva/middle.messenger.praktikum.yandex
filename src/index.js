//styles
import './scss/style.scss';

//Utils
import rootloader from './utils/rootloader.js';
import Route from './utils/routing/route.js';
import Router from './utils/routing/router.js';
import locationHandler from './utils/routing/locationHandler.js';
//pages
import authorisation from './pages/authorisation/index.js';
import registration from './pages/registration/index.js';
import chats from './pages/chats/index.js';
import error from './pages/error/index.js';
import profile from './pages/profile/index.js';
import profileEdit from './pages/profileEdit/index.js';


//json
/*
    Temporaray dessidion for first sprint (without db)
*/
import indexData from './data/authorisation.json'
import error404 from './data/404.json';
import error505 from './data/505.json';
import registrationData from './data/registration.json';
import profileData from './data/profile.json';
import profilrEditMode from './data/profile_edit.json';
//delete profilrEditMode.editMode;
import chatsData from './data/chats.json';



const rootElement = document.getElementById('root');

console.log(profileData);
console.log(profilrEditMode);

const init = function () {
    var routes = new Router([
        new Route('home', authorisation, indexData, true),
        new Route('registration', registration, registrationData),
        new Route('chats', chats, chatsData),
        new Route('profile', profile, profilrEditMode),
        new Route('profile/edit', profileEdit, profileData),
        new Route('404', error, error404),
        new Route('505', error, error505)

    ], rootElement);
    window.onpopstate = locationHandler(routes.routes, rootElement);
}
init();

