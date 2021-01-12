
import React from 'react';

 class Input extends React.Component{
 	constructor(props){
 		super(props);
        this.state = {
            students:[{Name:"shyjan",Age:"22",RollNo:"1111111"},
        			{Name:"ratheesh",Age:"23",RollNo:"2222222"}]
        		}
        this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
 	}
 	handleChange(evt) {
    	const key = evt.target.name;
    	const value = evt.target.value;
    	this.setState({[key]:value})

    }
    onSubmit(){
    	const arrObj = {Name:this.state.Name,Age:this.state.Age,RollNo:this.state.RollNo}
    	const arrpush = this.state.students
    	arrpush.push(arrObj)
    	this.setState({
    		arrObj:arrpush
    	})
    	console.log(arrpush)
    	console.log(this.state.Age)
    }
 	renderTableData() {
      return this.state.students.map((student, index) => {
      	// console.log(index)
      	// console.log(student)
         return (
            <tr key = {index}>
               <td>{student.Name}</td>
               <td>{student.Age}</td>
               <td>{student.RollNo}</td>
            </tr>
         )
      })
   }
 	renderHead()
 	{
 		let header = Object.keys(this.state.students[0])
 		// console.log(header)
 		return header.map((key,index) => {
 		return <th key={index}>{key}</th>
 		})
 	}

	render()
	{
 					const {Name,Age,RollNo} = this.state.students

		return(

				<div>
					<input type = "text" placeholder ="Enter the Name" name="Name" value = {Name}  onChange={this.handleChange}/>
					<input type = "text" placeholder = "Enter the Age" name="Age"  value = {Age} onChange={this.handleChange}/>
					<input type = "text" placeholder = "Enter the RollNo" name="RollNo" value ={RollNo} onChange={this.handleChange}/>
					<button type = "button" onClick={this.onSubmit}>click</button>
					<table>
					<thead>
						<tr>{this.renderHead()}</tr>
						</thead>
						<tbody>{this.renderTableData()}</tbody>
					</table>
				</div>
			)
	}
}
export default Input;