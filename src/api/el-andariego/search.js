import axios from 'axios';

export async function getSearchResults(data) {
  const res = await axios.get(`/api/search/${data}`);
  return res.data;
}
