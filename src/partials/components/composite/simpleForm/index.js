import Handlebars from 'handlebars';
import tpl from './tmpl.hbs';
import './style.scss';

Handlebars.registerPartial('simpeForm', tpl);

export default (props = {}) => {
	return tpl(props);
}
