import React from 'react'


// uncontrolled Component

class MyForm1 extends React.Component
{
    constructor(props)
    {
        super(props);
        this.handleSubmit = this .handleSubmit.bind(this);
    }

    handleSubmit(evt){
        evt.preventDefault();

        let name= this.refs.name.value;
        let mail = this.refs.mail.value;
        let phone = this.refs.phone.value;
        console.log("Data Submitted "+name+' '+mail+' '+phone);
    }
    render()
    {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p> Name</p> <input type='text' ref='name'></input><br/>
                    <p> Mail</p> <input type='text' ref='mail'></input><br/>
                    <p> Phone</p> <input type='text' ref='phone'></input><br/>
                    <input type='submit' value='submit'></input>
                </form>
            </div>
        )
    }
}
export default MyForm1;


