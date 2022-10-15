import loader from '../rootloader';
import authorisation from '../../pages/authorisation';
import deleteslashinthend from '../deleteslashinthend';
import deleteslashinstart from '../deleteslashinstart';

const locationHandler = async (routes, rootElement) => {
    const location = deleteslashinthend(deleteslashinstart(window.location.pathname));
    console.log(location)

    let route = routes.find(r => r.activated(location));

    if (typeof route === 'undefined') {
        if (!location.length) {
            route = routes.find(r => r.activated('home'));
        } else {
            route = routes.find(r => r.activated('404'));
        }

    }

    loader(route.tempFunc, route.params, rootElement);

}

export default locationHandler;