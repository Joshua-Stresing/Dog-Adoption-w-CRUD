import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchDogs } from '../../services/fetchdogs';


export default function ListOfDogs() {
  const [dogs, setDogs] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDogs();
        setDogs(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  if (loading) return <h1>Loading list od Dogs</h1>;

  return (      
    <div className='Doglist'>
      <h1>Check Out Our Dogs</h1>
      {error && <p>{error}</p>}
      { dogs.map((dog) => (
        <div key={dog.id}>
          
          <Link to = {`/dogs/${dog.id}`}>
            <h3>{dog.Name}</h3>
            <img src = {dog.img}/>
          </Link>
           
        </div>
      ))}
    </div>
  );
}