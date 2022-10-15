import Handlebars from 'handlebars';
import tpl from './tmpl.hbs';
import './style.scss';
import buttonIconText from '../../components/simple/buttonIconText/';


Handlebars.registerPartial('header', tpl);

export default (props = {}) => {
	
	// const btns = {"buttons":[
	// 	{
	// 		id: "goBack",
	// 		title: "Back",
	// 		icon_class: "fa-regular fa-chevron-left"
	// 	},
	// 	{
	// 		id: "openSettings",
	// 		title: "Back",
	// 		icon_class: "fa-sharp fa-solid fa-gear"
	// 	}
	// ]};	
	// props = {"buttons" : btns};
	return tpl(props);
}