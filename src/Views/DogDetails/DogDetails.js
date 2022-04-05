import React, { useEffect, useState } from 'react';
import { useHistory, Link, useParams } from 'react-router-dom';
import { deleteDog, fetchDogById } from '../../services/fetchdogs';


export default function DogDetails({ currentUser }) {
  const [dog, setDog] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const params = useParams();
  const { id } = useParams();
  const history = useHistory(); 
//   console.log(id);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDogById(id);
        setDog(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, [id]);

  const removeDog = async () => {
    await deleteDog(id);
    history.push('/');
  };

  if (loading) return <h1>Loading Details</h1>;

  return (
    <div className='DogDetails'>
      {error && <p>{error}</p>}
      {/* <h1>insert jumps to places here</h1> */}
      <div key={dog.id}>
        <img src = {dog.img}/>
        <h1>{dog.Name}</h1>
        <p>Age: {dog.Age}</p>     
        <p>Breed: {dog.Breed}</p>     
        <p>Bio: {dog.Desc}</p>
      </div>

      {currentUser &&
    <>
      <Link to={`/dogs/${params.id}/edit`}>Edit Dog</Link>     
      <button onClick={removeDog}>Remove Dog</button>
    </>
      }

    </div>
  );
}