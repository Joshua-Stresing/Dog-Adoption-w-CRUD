import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import DogForm from '../../Comps/DogForm';
import { addDog } from '../../services/fetchdogs';


export default function NewDog() {

  const [img, setImg] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState(null);
  const [breed, setBreed] = useState('');
  const [desc, setDesc] = useState('');
  const [error, setError] = useState('');
  
  const history = useHistory();
  
  const handleSubmit = async () => {
    try {
      const data = await addDog({ name, age, desc, breed, img });
      history.push('/dogs');
    } catch (e) {
      setError('Make sure your fields are filled in.');
    }
  };
  return (
    <div>
      {error && (
        <p>
          {error} <span onClick={() => setError('')}>Testing Error</span>
        </p>
      )}
      <DogForm
        {...{
          name,
          setName,
          age,
          setAge,
          desc,
          setDesc,
          breed,
          setBreed,
          img,
          setImg,
          handleSubmit,
        }}
      />
    </div>
  );
}