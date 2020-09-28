import React from 'react'
import { exportAllDeclaration } from '@babel/types'

class MyForm2 extends React.Component{
    constructor(props)
    {
        super(props)
    this.state={
     name:"",
     add:"",
     remberMe:true,
     course:"React"

        }
        }

  handleChange =event=>{
      this.setState({name:event.target.value})
     // console.log(event.target)
  }
  handleChange1 =event=>{
    this.setState({add:event.target.value})
   // console.log(event.target)
}


  handleCheck =event=>{
    this.setState({remberMe:event.target.checked})
   // console.log(event.target)
}
  
handleSelect =event=>{
    this.setState({course:event.target.value})
   // console.log(event.target)
}


  handleSubmit=event=>{
      event.preventDefault();
      console.log(this.state);
  }


render(){
    return(
        <div>
<label>Name </label>
<input onChange={this.handleChange}></input><br/>

<label>Address </label>
<input onChange={this.handleChange1}></input><br/>

<label>Notification </label>
<input type ="checkbox" onChange={this.handleCheck} checked={this.state.remberMe} ></input><br/>
<div>
    <label>Courses</label>
<select onChange={this.handleSelect}>
<option>React</option>
<option>Angular</option>
<option>Spring</option>
    </select>
</div>

<button onClick={this.handleSubmit}>Submit</button>

        </div>
    )
}
}

export default MyForm2;