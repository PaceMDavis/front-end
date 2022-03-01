import './App.css';
import { useState } from 'react';
import axios from 'axios'




function App() {

  const [values, setValues] = useState('')
 

  const handleChange = (e) => {
    const name = e.target.name
    setValues(values => {
      return{...values, [name]: e.target.value}
    })
    // console.log(e.target.name)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Hello")

    axios.post('/user', {
      firstName: values.fName,
      lastName: values.lName
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error)
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={(e) => handleSubmit(e)} action="" className="form-styles">
          <input type="text" name = "fName" placeholder='First Name' onChange={handleChange} />
          <input type="text" name = "lName" placeholder='Last Name' onChange={handleChange} />
          <input type="submit" />
          <textarea name="text" onChange={handleChange}></textarea>
          {/* <button onClick={submitValue}>Submit</button> */}
        </form>
      </header>
    </div>
  );
}

// function App() {

//   const [textArea, setTextArea] = useState('')
//   const [firstName,setFirstName] = useState('')
//   const [lastName, setLastName]  =useState('')

//   const submitValue = (e) => {
//     const frmdetails = {
//       'First Name': firstName,
//       'Last Name': lastName,
//       'Text Area': textArea
//     }
//     console.log(frmdetails)
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <form action="" className="form-styles">
//           <input type="text" placeholder='First Name' onChange={e => setFirstName(e.target.value)} />
//           <input type="text" placeholder='Last Name' onChange={e => setLastName(e.target.value)} />
//           <input type="submit" onClick={submitValue} />
//           <textarea name="text" onChange={e => setTextArea(e.target.value)}></textarea>
//           {/* <button onClick={submitValue}>Submit</button> */}
//         </form>
//       </header>
//     </div>
//   );
// }

export default App;
