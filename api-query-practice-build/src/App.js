import { useEffect, useState } from "react";
import axios from "axios";
import UserForm from "./components/Input";

import "./App.css";

function App() {
  // set my empty array to serve as the holder of api call 
  const [arrayOfWars, setArrayOfWars] = useState([]);

  // use Effect has some class component like attributes, in this case componentDidMount similarities
  useEffect(() => {
    // creating an asynchronous function that allows the rest of the page to continue rendering while it finished
    const axiosPosts = async () => {
      const response = await axios("https://swapi.dev/api/films/");
      //I need to drill down to results to get what I am looking for. Often data returns an array of objects
      let data= response.data.results
      // set the arrayOfWars equal to response.data.results
      setArrayOfWars(data);
    };
    //invoke the function
    axiosPosts();
    //empty arround as second argument means the effect will only be executed on the first render
    //If the second argument is ommited the effect will take place every render
    //If a dependency is used (think state variable) the current value and the value on a previous render, if different the effect is invoked
  }, []);
  console.log(arrayOfWars);

  return (
    <div className="App">
      <header className="App-header">
        <UserForm />
        <ul>
          {/* Map over array of star wars films, if using {} then return must be used. Can also use parentheses and omit return */}
          {arrayOfWars.map((item) => (
              <div className='list-style'>
                {/* React requires items to have keys, index as a second argument is the lazy way but not recommended */}
                <li key={item.release_date}>{item.title}</li>
                <li>{item.url}</li>
              </div>
            )
          )}
        </ul>
      </header>
    </div>
  );
}

export default App;
