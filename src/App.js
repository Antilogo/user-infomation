import React, { useState, useEffect } from "react";
import axios from "axios";
import Posts from "./components/Posts/index";
import Pagination from "./components/Pagination/index";
import Header from "./components/Header/index";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  let currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://randomuser.me/api/?results=100");
      setPosts(res.data.results);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  useEffect(() => {}, [posts]);

  //Sort array
  const handlerSortByFirstName = (posts) => {
    posts.sort((a, b) => a.name.first.localeCompare(b.name.first));
    currentPost = posts.slice(0, 100);
    setPosts(currentPost);
  };

  const handlerSortByUserName = (posts) => {
    posts.sort((a, b) => a.login.username.localeCompare(b.login.username));
    currentPost = posts.slice(0, 100);
    setPosts(currentPost);
  };

  const handlerPaginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <Header />
      <Posts
        currentPosts={currentPost}
        posts={posts}
        loading={loading}
        sortByFirstName={handlerSortByFirstName}
        sortByUserName={handlerSortByUserName}
      />
      <Pagination
        postsperpage={postsPerPage}
        totalPosts={posts.length}
        paginate={handlerPaginate}
      />
    </div>
  );
}

export default App;
