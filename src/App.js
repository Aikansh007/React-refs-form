import React from 'react';
import MyForm1 from './form/myForm1'
import MyForm2 from './form/myForm2'
import MyForm3 from './form/myForm3';
import FormValidation from './form/formValidation';

class App extends React.Component
{
  render()
  {
    return(
      <div>
        <h1>Welcome to React Form</h1>
        {/* <MyForm1></MyForm1> */}
        {/* <MyForm2></MyForm2> */}
        {/* <MyForm3></MyForm3> */}
        <FormValidation></FormValidation>
      </div>
    )
  }
}


export default App;
