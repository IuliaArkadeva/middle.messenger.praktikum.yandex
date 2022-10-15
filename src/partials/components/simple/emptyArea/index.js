import Handlebars from 'handlebars';
import tpl from './tmpl.hbs';
import './style.scss';

Handlebars.registerPartial('emptyArea', tpl);

export default (props = {}) => {
	return tpl(props);
}