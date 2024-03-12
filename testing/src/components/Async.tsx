import { useEffect, useState } from "react";
// import useFetch from "./useFetch";

export default function Async() {
  //   const { data, loading, error } = useFetch({
  //     url: "https://jsonplaceholder.typicode.com/posts",
  //   });
  //   if (loading) {
  //     return <p>Loading...</p>;
  //   }
  //   if (error) {
  //     return <p>{error.message}</p>;
  //   }
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {data.map((post: any) => (
        <>
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        </>
      ))}
    </div>
  );
}
