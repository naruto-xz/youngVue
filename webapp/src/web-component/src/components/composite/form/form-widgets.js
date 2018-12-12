import basewidgets from "../../widgets";

var widgets = Object.keys(basewidgets).reduce((res, key) => {
	res[`xui-formwidget-${key}`] = basewidgets[key];
	return res;
}, {});

widgets.regist = function(name, widget) {
	widgets[`xui-formwidget-${name}`] = widget;
};

export default widgets;
