import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import DogForm from '../../Comps/DogForm';
import { editDog, fetchDogById } from '../../services/fetchdogs';

export default function EditPage() {
  
  const [img, setImg] = useState('');
  const [Name, setName] = useState('');
  const [Age, setAge] = useState('');
  const [Breed, setBreed] = useState('');
  const [Desc, setDesc] = useState('');
  const [error, setError] = useState('');
  

  const history = useHistory(); 
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const fetchDog = async () => {
      const data = await fetchDogById(id);
      setName(data.Name);
      setAge(data.Age);
      setBreed(data.Breed);
      setDesc(data.Desc);
      setError(data.error);
      setImg(data.img);
    };
    fetchDog();
  }, [id]);

  const handleSubmit = async (e) => {

    e.preventDefault();
    try {
      await editDog({ id, Name, Desc, Breed, img, Age });
      history.push(`/dogs/${id}`);
    } catch (e) {
      setError('ya broke it');
    }
  };
  
  return (
    <div>
      Edit Page
      {error && <p>{error}</p>}
      <DogForm
        {...{
          Name,
          setName,
          Age,
          setAge,
          Desc,
          setDesc,
          Breed,
          setBreed,
          img,
          setImg,
          handleSubmit,
        }}
      />
    </div>
  );
}