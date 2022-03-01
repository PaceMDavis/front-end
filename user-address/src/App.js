import axios from 'axios'
import './App.css';
import { useEffect, useState } from 'react';
import ShowDetails from './ShowDetails';


function App() {
  const [arrayofUsers, setArrayOfUsers] = useState([]);


useEffect(() => {
  const axiosPosts = async() => {
    const response  = await axios('https://randomuser.me/api?results=25')
    setArrayOfUsers(response.data.results)
  };
    axiosPosts()
}, [])


//  const onToggle = (e, id) => {
//   setShowDetails()

//   console.log(id)
// }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Address Book</h1>
        <ol>{arrayofUsers.map((user, id) => {
          return (
            <div key={id}>
              <img src={user.picture.medium} alt="head"/>
              <p>{user.name.first} {user.name.last}</p>
              <ShowDetails user={user} id={id}/>
              {/* <div onClick={(id) =>  onToggle()}>
                {showDetails === false ? (
                  <button key={id}>Show Details</button>
                  
                ) : (
                  <span>
                  <button key={id}>Hide Details</button>
                  <p>Age: {user.dob.age}</p>
                  <p>Phone: {user.phone}</p>
                  <p>Country: {user.location.country}</p>
                  </span>
                )}
              </div> */}
            </div>
          )
        })}</ol>
      </header>
    </div>
  );
}

export default App;
