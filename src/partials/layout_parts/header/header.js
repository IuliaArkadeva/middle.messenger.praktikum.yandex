import Handlebars from 'handlebars';
//import Handlebars from 'handlebars/dist/handlebars.runtime';
import tpl from './tmpl.hbs';
import './style.scss';

Handlebars.registerPartial('header', tpl);

export default () => {
	return tpl();
}