import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import PostsList1 from "./PostsList1";
import PostsList2 from "./PostsList2";
import { useState } from "react";
import Post from "./Post";
import { CreatePost } from "./CreatePost";

const POSTS = [
  {id:1, title: "Post 1"},
  {id:2, title:"Post 2"}
]

function App() {
  const [currentPage, setCurrentPage] = useState(<PostsList1 />)

  return (
    <div>
      <button onClick={() => setCurrentPage(<PostsList1 />)}>
        Posts List 1
      </button>
      <button onClick={() => setCurrentPage(<PostsList2 />)}>
        Posts List 2
      </button>
      <button
        onClick={() => setCurrentPage(<Post id={1} />)}
      >
        First Post
      </button>
      <button
        onClick={() =>
          setCurrentPage(<CreatePost setCurrentPage={setCurrentPage} />)
        }
      >
        New Post
      </button>
      <br />
      {currentPage}
    </div>
  )
}

export default App