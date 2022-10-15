import Handlebars from 'handlebars';
import tpl from './tmpl.hbs';
import './style.scss';
import buttonIconText from '../../components/simple/buttonIconText/';

//TODO: event deligation to root ??
// document.getElementById("goback").addEventListener('click', ()=>{
// 	window.history.go(-1);
// })

Handlebars.registerPartial('header', tpl);

export default (props = {}) => {
	
	return tpl(props);
}