import React from 'react';
import './App.css';

class ShowDetails extends React.Component {
  state = {
    showDetails: false,
  }
  clickShowDetails = () => { 
    // if(this.state.showDetails) {
    //   <div>{users.name.first}</div>
    // } else {
    //   return
    // }
    this.setState ({
      showDetails: !this.state.showDetails
    })
  }

  render(i) {
    const showDetails = this.state.showDetails;
    let user = this.props.user;
    console.log(showDetails, "fiddle")
    // if(showDetails) {
    //   return 
    // }
    
    return (
      showDetails ? (
        <div>
          <button key={i} onClick={() => this.clickShowDetails()}>Hide Details</button>
          <div className="descriptor">{`Age: `}
            <span className="details">{`${user.dob.age}`}</span>
          </div>
          <div className="descriptor">{`Contact: `} 
            <span className="details">{`${user.email}`}</span>
          </div>
          <div className="descriptor">{`Location: `} 
            <span className="details">{`${user.location.city} ${user.location.state}, ${user.location.country}`}</span>
          </div>
        </div>
      ) : (
        <button key={i} onClick={() => this.clickShowDetails()}>Show Details</button>
      )
    // <button key={i} onClick={() => this.clickShowDetails()}>{showDetails ? "Hide Details" : "Show Details"}</button>
    
    )
  }
}

// return showDetails ? (<button key{i} onClick={() => this.clickShowDetails()}>Hide Details</button>)
// : (<button key{i} onClick={() => this.clickShowDetails()}>Show Details</button>)

class App extends React.Component {
  state = {
    users: []
  }
  componentDidMount() {
    fetch("https://randomuser.me/api?results=25")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      this.setState ({
        users: data.results
      })
    }) 
  };
  render() {
    console.log(this.state.users, "whoot")
  return(
    <div>
      <h1>Contacts</h1>
      {this.state.users.map((user, index) => {
        console.log(user.name, "here")
        return(
          <div key = {index}>
            <p>{`${user.name.first} ${user.name.last}`} <img alt="pictures" src= {user.picture.thumbnail}/></p>
            <ShowDetails user={user}/>
          </div>
        )
      }
      )}
    </div>
  )
    
  }
}

export default App;
