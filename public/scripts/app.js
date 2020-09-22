'use strict';

console.log("app is running");
// creating  app object
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
var value = 0;
var plusOne = function plusOne() {
	value = value + 1;
	call();
};
var minusOne = function minusOne() {
	value = value - 1;call();
};
var Reset = function Reset() {
	value = 0;call();
};
var call = function call() {
	var btn = React.createElement(
		'div',
		null,
		React.createElement(
			'h3',
			null,
			'Count : ',
			value
		),
		React.createElement(
			'button',
			{ id: 'id1', onClick: plusOne },
			'Add One'
		),
		React.createElement(
			'button',
			{ id: 'id2', onClick: minusOne },
			'Minus One'
		),
		React.createElement(
			'button',
			{ id: 'id3', onClick: Reset },
			'Clear'
		)
	);

	ReactDOM.render(btn, appRoot);
};
call();
