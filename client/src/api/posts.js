import axios from "axios"

export async function getPosts() {
  const res = await axios
    .get("http://localhost:3000")
  return res.data
}

export async function getPost(id) {
  return axios.get(`http://localhost:3000/posts/${id}`).then(res => res.data)
}

export async function createPost({ title, body }) {
  return axios
    .post("http://localhost:3000/posts", {
      title,
      body,
      userId: 1,
      id: Date.now(),
    })
    .then(res => res.data)
}