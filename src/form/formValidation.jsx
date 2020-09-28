import React from 'react'

const initialState={
    name:'',
    remMe:false,
    nameError:'',
    remError:''
}

const styleError={
    fonstSize:18,color:"red"
}


class FormValidation extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state=initialState;
    }

    handleChange=event=>
    {
        const isCheckBox=event.target.type==='checkbox';
        this.setState({[event.target.name] : isCheckBox ? event.target.checked : event.target.value})
   
    }
        validate=()=>
        {
            let nameError="";
            let remError;
            if(this.state.name==''){
                nameError="Name Can't be Blank"
            }
            if(this.state.remMe==false){
                remError="Please check notifiction"
            }
            if(nameError){
                this.setState({nameError})
                return false;
            }
            if(remError){
                this.setState({remError})
                return false;
            }

            return true;
        }

        handleSubmit=()=>{
            const isValid=this.validate();
            if(isValid){
                console.log(this.state.name+" "+this.state.remMe)
                // clearing form data
                 this.setState(initialState)
            }
        }

        render()
        {
            return(
                <div>
                    <label>Name</label>
                    <input name='name' value={this.state.name} onChange={this.handleChange}></input>
                    <div style={styleError}>{this.state.nameError}</div>
               
                     <lable>Notifiaction</lable>   
                     <input type='checkbox' name='remMe' onChange={this.handleChange} />   
                     <div style={styleError}>{this.state.remError}</div>
                     <button onClick={this.handleSubmit}>Submit</button>
                </div>
            )
        }

    }


export default FormValidation;