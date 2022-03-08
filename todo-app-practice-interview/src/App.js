import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

//to do list needs:
// Input with state for text input
// array to hold to do lists
// map over the array and render to browser
//onChange function
//onSubmit function

function App() {
  const [text, setText] = useState();
  const [list, setList] = useState([]);
  const [counter, setCounter] = useState(1);
  const [users, setUsers] = useState([]);
  const [nextPage, setNextPage] = useState(1);


// const fetchNextUser = (pageNumber) => {
//   const axiosPosts = async (nextPage) => {
//     const response = await axios.get(`https://randomuser.me/api?page=${pageNumber}`);
//     const data = response.data;
//     const newUserInfo = [
//       ...users,
//       ...data.results
//     ]
//     setUsers(newUserInfo);
//     setNextPage(data.info.page + 1);
//   };
// }

//   useEffect((pageNumber) => {
//     fetchNextUser()
//   }, []);
//   console.log(users);

  useEffect((pageNumber) => {
    const axiosPosts = async () => {
      const response = await axios.get('https://randomuser.me/api');
      const data = response.data;
      setUsers(data.results);
      setNextPage(data.info.page + 1);
    };
    axiosPosts();
  }, []);

  // to handle single input field setText to event.target.value and set value to text
  const handleInput = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setList([...list, text]);
    setText("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <input type="text" value={text} onChange={handleInput} />
          <button type="submit"> Submit </button>
        </form>
        <div>
          <ul>
            {list.map((item) => (
              <li className="map-list" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p>{counter}</p>
          <button onClick={() => setCounter(counter + 1)}>Click Me!</button>
          {/* <button onClick={() => setCounter(counter + 1)}>Click Me!</button> */}

        </div>
        <div>
          <p>
            {users.map((user, index) => {
              return (
                <div>
                  <li className="map-list" key={index}>
                    {user.name.first} {user.name.last}
                  </li>
                  <img src={user.picture.thumbnail} alt="profile" />
                </div>
              );
            })}
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
