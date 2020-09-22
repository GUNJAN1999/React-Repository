'use strict';

console.log("app is running");
// creating  aapp object
var app = {
	name: 'Indecision App',
	subtitle: 'Happy to Help Always'
};
//jsx-js extension
var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		'Name :',
		app.name,
		' '
	),
	React.createElement(
		'h3',
		null,
		'Subtitle : ',
		app.subtitle
	)
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
