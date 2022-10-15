import Handlebars from 'handlebars';
import tpl from './tmpl.hbs';
import './style.scss';
import decoreImage from '../decoreImage/';

Handlebars.registerPartial('error', tpl);

export default (props = {}) => {
	return tpl(props);
}