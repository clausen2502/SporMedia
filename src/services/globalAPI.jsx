import axios from 'axios'

const BASE_URL = 'http://localhost:1337/api'

const getPost = axios.get(BASE_URL + '/fyrirtaekis?populate=*');
const getPostById=(id) => axios.get(BASE_URL + '/fyrirtaekis/'+id+'?populate=*');
const getPostBySlug = (slug) =>
  axios.get(`${BASE_URL}/fyrirtaekis/slug/${slug}?populate=*`);

export default{
    getPost,
    getPostById,
    getPostBySlug
}
