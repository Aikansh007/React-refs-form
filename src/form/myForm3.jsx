import React from 'react'
import { exportAllDeclaration } from '@babel/types'

class MyForm3 extends React.Component{
    constructor(props)
    {
        super(props)
    this.state={
     name:"",
     add:"",
     remMe:true,
     course:"React"

        }
        }

  handleChange =event=>{
      const isCheckBox=event.target.type==='checkbox';
        console.log(event.target.name);
      this.setState({[event.target.value] : isCheckBox ? event.target.checked : event.target.value})
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
<input name='name' onChange={this.handleChange}></input><br/>

<label>Address </label>
<input name='add' onChange={this.handleChange}></input><br/>

<label>Notification </label>
<input name='remMe' type ="checkbox" onChange={this.handleChange} checked={this.state.remMe} ></input><br/>
<div>
    <label>Courses</label>
<select name='course' onChange={this.handleChange}>
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

export default MyForm3;