import { checkError, client } from './client';

export async function fetchDogs() {
  const data = await client
    .from('dogs')
    .select('*');

  return checkError(data);
}

export async function fetchDogById(id) {
  const data = await client
    .from('dogs')
    .select('*')
    .match({ id })
    .single();
  
  return checkError(data);
}

export async function addDog(dog) {
  const data = await client
    .from('dogs')
    .insert(dog);
  
  return checkError(data);
}

export async function editDog(dog) {
  const data = await client
    .from('dogs')
    .update(dog)
    .match({ id: dog.id });

  return checkError(data);
}

export async function deleteDog(id) {
  const data = await client
    .from('dogs')
    .delete()
    .match({ id })
    .single();

  return checkError(data);
}