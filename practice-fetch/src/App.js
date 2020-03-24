import React from 'react';
// import logo from './logo.svg';
import './App.css';
import UserGreeting from './UserGreeting'
import NameList from './NameList'
// import Person from './person'

const api_key = '73ad2fea02d04d6d8ca5605c162cb9ec';
let url = `https://api.spoonacular.com/recipes/findByNutrients?minCarbs=10&maxCarbs=100&number=20&apiKey=${api_key}`;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: false,
    }
  }
  clickedLike = () => {
    this.setState ({
      likes: !this.state.likes
    })
  }

  render(i) {
    const likes = this.state.likes;
    console.log("run Forrest!")

    return(
    <button className="likeButton" key={i} onClick={() => this.clickedLike()}>{likes ? "Unlike" : "Like"}</button>
    )
  }
}

class App extends React.Component {  
//   SearchList.defaultProps = {
//     places: [],

// }

  state = {
    recipes: []
  }
  componentDidMount() {
    fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.setState ({
        recipes: data
      })
    })
  }
  render() {
    console.log(this.state.recipes, "howdy there");
    return(
      <div>
        <h2><NameList/></h2>
      </div>
    )
    // return (
    //     <div>
    //       <h1>Recipes</h1>
    //       {this.state.recipes.map((recipe,index) => {
    //         console.log("next step", recipe)
    //         return(
    //           <div key= {index}>
    //             <UserGreeting/>
    //             {/* <li>{recipe.title + " - "} <img src={recipe.image}></img></li>
    //             <LikeButton/> */}
    //             <NameList/>
    //           </div>
    //         )
    //       })}
    //     </div>
    // )
  }
}
// App.defaultProps = {
//   recipes: [],
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
