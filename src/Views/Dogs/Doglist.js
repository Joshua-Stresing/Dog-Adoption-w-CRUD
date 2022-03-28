import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchDogs } from '../../services/fetchdogs';


export default function ListOfDogs() {
  const [dogs, setDogs] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDogs();
        setDogs(data);
        console.log(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  return (      
    <div className='Doglist'>
      <h1>Check Out Our Dogs</h1>
      {error && <p>{error}</p>}
      { dogs.map((dog) => (
        <div key={dog.id}>
          <div key={dog.id}>
            <Link to = {`dogs/${dog.id}`}>
              <h3>{dog.name}</h3>
            </Link>
          </div> 
        </div>
      ))}
    </div>
  );
}