import React, {useEffect, useState} from 'react';
import Post from "../Post";
import PostService from "../API/PostService";
import Pagination from "../UI/Pagination/Pagination";
import {getPageCount} from "../Utilities/pages";
import Spinner from "../UI/Spinner/Spinner";
import {useNavigate} from "react-router-dom";
import {useQuery} from "../../hooks/useQuery";

const PostList = () => {
  const query = useQuery()
  const history = useNavigate()
  const page = query.get('page') ? Number(query.get('page')) : 1
  const [posts, setPosts] = useState([]); //  посты

  const [totalPages, setTotalPages] = useState(0) // вычисляемое количество страниц
  const limit = 10// лимит вывода постов
  //const [page, setPage] = useState(1) // текущая страница
  const [loader, setLoader] = useState(false)
  const postsMap = posts && !loader ? (posts.map((post) => (<Post key={post.id} post={post}/>))) : (<Spinner/>);

  useEffect(() => {
    fetchPosts()
  }, [page])

  async function fetchPosts() {
    setLoader(true)
    setTimeout(async () => {
      const response = await PostService.getAll(limit, page);
      setPosts(response.data)
      const totalCount = response.headers['x-total-count']
      setTotalPages(getPageCount(totalCount, limit))
      setLoader(false)
    }, 500)
  }

  const setPage = (page) => {
    history(`/posts?page=${page}`)
  }
  return (
      <div className={"container"}>
        <div className="row">
          <h1 className={"post-list__title text-center"}>Post list</h1>
        </div>
        <div className={"card-group"}>
          <div className="row d-flex justify-content-center w-100">
            {postsMap}
          </div>
        </div>
        <Pagination  totalPages={totalPages} currentPage={page} onChange={setPage}/>

      </div>

  );
};

export default PostList;
