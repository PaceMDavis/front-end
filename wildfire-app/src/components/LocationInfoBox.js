const LocationInfoBox = ({info}) => {
    return ( 
        <div className='location-info'>
            <h2>Event Location Info</h2>
            <ul>
                <li>ID: <strong>{info.id}</strong></li>
                <li>Name: <strong>{info.title}</strong></li>
            </ul>

        </div>
     );
}
 
export default LocationInfoBox;