import axios from 'axios';

import { useState, useEffect } from 'react'
import Map from './components/Map'
import Loader from './components/Loader'
import Header from './components/Header'




function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://eonet.gsfc.nasa.gov/api/v2.1/events')
      let data = res.data.events
      setEventData(data)
      setLoading(false)
    }
    getPosts();    
  }, [])

  return (
    <div>
      <Header />
      { !loading ? <Map eventData={eventData} /> : <Loader/> }
    </div>
  );
}

export default App;
