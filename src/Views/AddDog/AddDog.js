import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import DogForm from '../../Comps/DogForm';
import { addDog } from '../../services/fetchdogs';
//update

export default function AddDog() {

  const [img, setImg] = useState('');
  const [Name, setName] = useState('');
  const [Age, setAge] = useState('');
  const [Breed, setBreed] = useState('');
  const [Desc, setDesc] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  

  const history = useHistory();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDog({ Name, Age, Desc, Breed, img });
      setMessage('Added Good');
      history.push('/');
    } catch (e) {
      setError('Make sure your fields are filled in.');
    }
  };
  return (
    <div>
      {message}
      {error && (
        <p>
          {error} <span onClick={() => setError('')}>Testing Error</span>
        </p>
      )}
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