import React from 'react';

class SampleArr extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			sample : ["first", "second"]			
		}
		this.onchanging = this.onchanging.bind(this)
		this.buttonclick = this.buttonclick.bind(this)

	}
	onchanging(e){
		const name = e.target.name
		const values = e.target.value
		this.setState({values}, () => {
			console.log(this.state)
		})
	}
	buttonclick(){
		const a = this.state.sample //a = ["first", "second"]
		a.push(this.state.values)// a = ["first", "second", "third"]
		this.setState({
			sample:a
		})
		console.log(this.state.sample)
	}
	arrmaping(){
		return this.state.sample.map((numbers) =>{
			return <li>{numbers}</li>
		})
	}
	
	render(){

		return(
				<div>
					<input type = "text" name= "first1" placeholder = "Enter value" value ={this.state.sample.value} onChange = {this.onchanging} />
					<button type = "button" onClick = {this.buttonclick}>click</button>
					<ul>{this.arrmaping()}</ul>

				</div>
			)
	}
}
export default SampleArr;