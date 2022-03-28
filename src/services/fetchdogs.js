import { checkError, client } from './client';

export async function fetchDogs() {
  const data = await client
    .from('dogs')
    .select('*');
  return checkError(data);
}