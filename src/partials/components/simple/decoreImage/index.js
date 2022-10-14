import Handlebars from 'handlebars';
import tpl from './tmpl.hbs';
import './style.scss';

Handlebars.registerPartial('decoreImage', tpl);

export default (props = {}) => {
	return tpl(props);
}