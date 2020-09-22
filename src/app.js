console.log("app is running");
// creating  app object
const app={
	name:'Indecision App',
	subtitle:'Happy to Help Always'
};
//jsx-js extension
const template =
(
	<div>
		<h1>{app.name} </h1>
		<h3>Subtitle : {app.subtitle}</h3>
	</div>
);
const appRoot = document.getElementById('app');
let value=0;
const plusOne=()=>{
	value=value+1;
	call();
}
const minusOne=()=>{value=value-1;call()}
const Reset=()=>{value=0;call();}
const call=()=>
{
	const btn=(
		<div>
			<h3>Count : {value}</h3>
			<button id="id1" onClick={plusOne}>Add One</button>
			<button id="id2" onClick={minusOne}>Minus One</button>
			<button id="id3" onClick={Reset}>Clear</button>
		</div>);
		
		
		ReactDOM.render(btn, appRoot);
}
call();


