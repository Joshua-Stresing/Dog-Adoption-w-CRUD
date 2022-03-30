import React from 'react';

export default function DogForm({
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
}) {
  return (
    <form>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Age
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      </label>
      <label>
        Desc
        <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} />
      </label>
      <label>
        Breed
        <input type="text" value={breed} onChange={(e) => setBreed(e.target.value)} />
      </label>
      <label>
        Image
        <input type="text" value={img} onChange={(e) => setImg(e.target.value)} />
      </label>
      <button onClick={handleSubmit}>Set Dog Info</button>
    </form>
  );
}