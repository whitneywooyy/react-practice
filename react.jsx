// --------------------------------------------------------
// // First Component

// var App = React.createClass({
// 	render: function(){
// 		return <h1>Hello, World</h1>
// 	}
// });

// React.render(<App />, document.body);


// --------------------------------------------------------
// // Intro to Properties (Props)

// var App = React.createClass({
// 	// Default prop values
// 	getDefaultProps: function(){
// 		return {
// 			txt: "this is props txt",
// 			cat: 0
// 		}
// 	},
// 	// propTypes are optional
// 	propTypes: {
// 		txt: React.PropTypes.string,
// 		cat: React.PropTypes.number
// 	},
// 	render: function(){
// 		var txt = this.props.txt;
// 		var cat = this.props.cat;
// 		return (
// 			<div>
// 				<strong>BOLD</strong>
// 				<h1>{txt}</h1>
// 				<h2>{cat}</h2>
// 			</div>
// 		);
// 	}
// });

// React.render(<App />, document.body);


// --------------------------------------------------------
// State Basics

// var App = React.createClass({
// 	getInitialState: function(){
// 		return {
// 			txt: "The state txt"
// 		}
// 	},
// 	update: function(e){
// 		this.setState({txt: e.target.value});
// 	},
// 	render: function(){
// 		return (
// 			<div>
// 				<input type="text" onChange={this.update} />
// 				<h1>{this.state.txt}</h1>
// 			</div>
// 		);
// 	}

// });

// React.render(<App />, document.body);


// --------------------------------------------------------
// // Owner-Ownee Relationship

// var App = React.createClass({
// 	getInitialState: function(){
// 		return {
// 			txt: "The state txt"
// 		}
// 	},
// 	update: function(e){
// 		this.setState({txt: e.target.value});
// 	},	
// 	render: function(){
// 		return (
// 			<div>
// 				<Widget txt={this.state.txt} update={this.update} />
// 				<Widget txt={this.state.txt} update={this.update} />
// 				<Widget txt={this.state.txt} update={this.update} />
// 				<Widget txt={this.state.txt} update={this.update} />
// 			</div>
// 		);
// 	}
// });

// var Widget = React.createClass({
// 	render: function(){
// 		return (
// 			<div>
// 				<input type="text" onChange={this.props.update} />
// 				<strong>{this.props.txt}</strong>
// 			</div>
// 		);

// 	}
// });

// React.render(<App txt="this is props txt" />, document.body);


// --------------------------------------------------------
// // Using Refs to Access Components

// var App = React.createClass({
// 	getInitialState: function(){
// 		return {
// 			red: 0,
// 			green: 0,
// 			blue: 0
// 		}
// 	},
// 	update: function(){
// 		this.setState({
// 			red: this.refs.red.refs.inp.getDOMNode().value,
// 			green: this.refs.green.refs.inp.getDOMNode().value,
// 			blue: this.refs.blue.refs.inp.getDOMNode().value
// 		})
// 	},
// 	render: function(){
// 		return (
// 			<div>
// 				<Slider ref="red" update={this.update} />
// 					<label>{this.state.red}</label>
// 				<Slider ref="green" update={this.update} />
// 					<label>{this.state.green}</label>
// 				<Slider ref="blue" update={this.update} />
// 					<label>{this.state.blue}</label>
// 			</div>
// 		);
// 	}
// });

// var Slider = React.createClass({
// 	render: function(){
// 		return (
// 			<div>
// 				<input ref="inp" type="range" min="0" max="255" onChange={this.props.update} />
// 			</div>
// 		);
// 	}
// });

// React.render(<App />, document.body);


// --------------------------------------------------------
// // Component Lifecycle - Mounting Basics

// var Button = React.createClass({
// 	getInitialState: function(){
// 		return {
// 			val: 0
// 		}
// 	},
// 	update: function(){
// 		this.setState({val: this.state.val+1})
// 	},
// 	componentWillMount: function(){
// 		console.log("mounting!");
// 	},
// 	render: function(){
// 		console.log("rendering!");
// 		return <button onClick={this.update}>{this.state.val}</button>
// 	},
// 	componentDidMount: function(){
// 		console.log("mountED!");
// 	},
// 	componentWillUnmount: function(){
// 		console.log("bye!");
// 	}
// });

// var App = React.createClass({
// 	mount: function(){
// 		React.render(<Button />, document.getElementById('app'));
// 	},
// 	unmount: function(){
// 		React.unmountComponentAtNode(document.getElementById('app'));
// 	},
// 	render: function(){
// 		return (
// 			<div>
// 				<button onClick={this.mount}>Mount</button>
// 				<button onClick={this.unmount}>Unmount</button>
// 				<div id="app"></div>
// 			</div>
// 		);
// 	}
// });

// React.render(<App />, document.body);


// --------------------------------------------------------
// Component Lifecycle - Mounting Basics part 2

// var Button = React.createClass({
// 	getInitialState: function(){
// 		return {
// 			val: 0
// 		}
// 	},
// 	update: function(){
// 		this.setState({val: this.state.val+1})
// 	},
// 	componentWillMount: function(){
// 		this.setState({m: 2})
// 	},
// 	render: function(){
// 		console.log("rendering!");
// 		return <button onClick={this.update}>{this.state.val * this.state.m}</button>
// 	},
// 	componentDidMount: function(){
// 		this.increment = setInterval(this.update, 500);
// 	},
// 	componentWillUnmount: function(){
// 		clearInterval(this.increment);
// 	}
// });

// var App = React.createClass({
// 	mount: function(){
// 		React.render(<Button />, document.getElementById('app'));
// 	},
// 	unmount: function(){
// 		React.unmountComponentAtNode(document.getElementById('app'));
// 	},
// 	render: function(){
// 		return (
// 			<div>
// 				<button onClick={this.mount}>Mount</button>
// 				<button onClick={this.unmount}>Unmount</button>
// 				<div id="app"></div>
// 			</div>
// 		);
// 	}
// });

// React.render(<App />, document.body);


// --------------------------------------------------------
// // Component Lifecycle - Updating

// var Button = React.createClass({
// 	getInitialState: function(){
// 		return {
// 			increasing: false
// 		}
// 	},
// 	update: function(){
// 		this.setProps({val: this.props.val+1})
// 	},
// 	componentWillReceiveProps: function(nextProps){
// 		this.setState({increasing: nextProps.val > this.props.val})
// 	},
// 	shouldComponentUpdate: function(nextProps, nextState){
// 		return nextProps.val % 5 === 0;
// 	},
// 	render: function(){
// 		console.log(this.state.increasing);
// 		return <button onClick={this.update}>{this.props.val}</button>
// 	},
// 	componentDidUpdate: function(prevProps, prevState){
// 		console.log("previous props", prevProps);
// 	}
// });

// React.render(<Button val={0} />, document.body);


// --------------------------------------------------------
// // Mixins