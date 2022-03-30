import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { fetchDogById } from '../../services/fetchdogs';


export default function DogDetails() {
  const [dog, setDog] = useState('');
  const [error, setError] = useState('');
  const params = useParams();
  const { id } = useParams();

//   console.log(id);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDogById(id);
        // console.log(data); 
        setDog(data);

      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, [id]);

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
        <Link to={`/dogs/${params.id}/edit`}>Edit Dog</Link>     
      </div>
    </div>
  );
}