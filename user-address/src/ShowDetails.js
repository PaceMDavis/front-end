import { useState } from "react";

const ShowDetails = (props) => {
    const [showDetails, setShowDetails] = useState(false);
    let user = props.user
    let id = props.id
    
    const handleToggle = (e) => {
        setShowDetails(showDetails => !showDetails)
    }

    
    return ( 
        showDetails ? (
            <div>
                <button key={id} onClick ={() => handleToggle()}>Hide Details</button>
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
            <button kkey={id} onClick ={() => handleToggle()}>Show Details</button>
        )
     );
}
 
export default ShowDetails;