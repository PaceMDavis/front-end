import { useState } from "react";

const UserForm = () => {
    // Use state hook to declare state variable values, which is an object
  const [values, setValues] = useState({
    movie: "",
    character: "",
    film: "",
  });

//   Second state variable array
  const [userFeedback, setUserFeedback] = useState([]);
// Write input function
  const handleInputChange = (event) => {
    // spread operator is allowing the object to merge with the inputs
    const state = {...values}
    // object is assigned at each spot (for example, event.target.name = movie what is input in the corresponding value)
    state[event.target.name] = event.target.value;
    setValues(state)
  }

  const handleSubmit = (event) => {
      //event.preventDefault() prevents browser refresh which is the native DOM event, it would prevent the handlesubmit from occurring. 
    event.preventDefault()
    // set the array effectively concatenating userfeedback, with the values that are present in the inputs at the time of submission
    setUserFeedback([...userFeedback, values]);
    // On submit, reset the values of the inputs to an empty string like they were originally
    setValues({
        movie: '',
        character: '',
        film: ''
    })
    
  }
  console.log(userFeedback)
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
            Movie
            <input
            // name is how we target this input, event.target.name
                type="text"
                name="movie"
            // We set event.target.name of the values object, in this case movie, equal to what is in the input box
                value={values.movie}
                onChange={handleInputChange}
                required
            />
        </label>
        <label>
            Character
            <input
                type="text"
                name="character"
                value={values.character}
                onChange={handleInputChange}
                required
            />
        </label>
        <label>
            Film
            <input
                type="text"
                name="film"
                value={values.film}
                onChange={handleInputChange}
                required
            />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
