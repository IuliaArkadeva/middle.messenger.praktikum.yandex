import Handlebars from 'handlebars';
import tpl from './tmpl.hbs';
import './style.scss';
import button from '../../simple/button/';
import link from '../../simple/link/';
import textInput from '../../simple/textInput/';
import textLine from '../../simple/textLine/';
import decoreImage from '../../simple/decoreImage/';


Handlebars.registerPartial('simpleForm', tpl);

export default (props = {}) => {
	return tpl(props);
}
