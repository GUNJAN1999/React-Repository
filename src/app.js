console.log("app is running");
// creating  aapp object
var app={
	name:'Indecision App',
	subtitle:'Happy to Help Always'
};
//jsx-js extension
var template =
(
	<div>
		<h1>Name :{app.name} </h1>
		<h3>Subtitle : {app.subtitle}</h3>
	</div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);