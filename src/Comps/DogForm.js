import React from 'react';

export default function DogForm({
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
}) {
  return (
    <form>

      <label>
        Name
        <input type="text" value={Name} onChange={(e) => setName(e.target.value)} />
      </label>

      <label>
        Age
        <input type="number" value={Age} onChange={(e) => setAge(e.target.value)} />
      </label>

      <label>
        Desc
        <input type="text" value={Desc} onChange={(e) => setDesc(e.target.value)} />
      </label>

      <label>
        Breed
        <input type="text" value={Breed} onChange={(e) => setBreed(e.target.value)} />
      </label>

      <label>
        Image
        <input type="text" value={img} onChange={(e) => setImg(e.target.value)} />
      </label>

      <button onClick={handleSubmit}>Set Dog Info</button>
    </form>
  );
}