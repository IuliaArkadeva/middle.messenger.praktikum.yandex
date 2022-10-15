import loader from '../rootloader';
import authorisation from '../../pages/authorisation';
import deleteSlashInEnd from '../deleteslashinthend';
import deleteSlashInStart from '../deleteslashinstart';

const locationHandler = async (routes, rootElement) => {
    const location = deleteSlashInEnd(deleteSlashInStart(window.location.pathname));
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