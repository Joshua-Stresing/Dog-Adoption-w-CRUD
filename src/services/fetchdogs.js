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