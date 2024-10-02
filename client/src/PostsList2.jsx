import { useQuery } from "@tanstack/react-query"
import { getPosts } from "./api/posts"
import { useEffect } from "react"

export default function PostsList2() {
  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  })

  console.log("postsQuery.fetchStatus")
  console.log(postsQuery.fetchStatus)
  console.log("status")
  console.log(postsQuery.status)

  if (postsQuery.status === "loading") return <h1>Loading...</h1>
  if (postsQuery.status === "error") {
    return <h1>{JSON.stringify(postsQuery.error)}</h1>
  }

  // useEffect(() => {
  //   console.log("Current fetch status:", postsQuery.fetchStatus);
  // }, [postsQuery.fetchStatus]);

  return (
    <div>
      <h1>Post List 2</h1>
      <ol>
        {postsQuery.data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ol>
    </div>
  )
}