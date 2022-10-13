import axios from 'axios';

export async function getSearchResults(data) {
  try {
    const res = await axios.get(`/api/search/${data}`);
    return res.data;
  } catch (err) {
    alert(err);
  }
}
