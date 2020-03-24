import React, { Component } from 'react'

class UserGreeting extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: false,
    }
  }

  render() {
    // This is an approach to conditionally render UI, it evaluates the left side for truth, and if so, it evaluates the right side
   return  this.state.isLoggedIn && <div>Welcome Pace</div>

    // return (
    //   this.state.isLoggedIn ? 
    //   <div>Welcome Vishwas</div> :
    //   <div>Welcome Guest</div>
    // )
    // let message 
    // if(this.state.isLoggedIn) {
    //   message = <div>Welcome Pace</div>
    // } else {
    //   message = <div>Welcome Guest</div>
    // }
    // return <div>{message}</div>
    // if(this.state.isLoggedIn) {
    //   return(
    //     <div>
    //       Welcome Vishwash
    //     </div>
    //   )
    // } else {
    //   return(
    //     <div>
    //       Welcome Guest
    //     </div>
    //   )
    // }
    // return (
    //   <div>
    //     <div>
    //       Welcome Pace
    //     </div>
    //     <div>
    //       Welcome Guest
    //     </div>
    //   </div>
    // )
  }
}

export default UserGreeting