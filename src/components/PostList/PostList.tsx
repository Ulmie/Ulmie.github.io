import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from "axios";
import Post from '../Post/Post';
import { PostListProps } from './interfaces';
import { Wrapper } from './PostListStyles';
import { CircularProgress } from '@mui/material';

// const API_KEY = '7457b8a5ef0a4048978cda264f75845e';
const API_KEY_TWO = 'pub_114512270742bd942b704000aad31d1954819';
// `https://newsapi.org/v2/everything?q=${postName || "a"}&sortBy=popularity&language=ru&pageSize=10&page=1&apiKey=${API_KEY}`
// res.data.articles
// `https://newsdata.io/api/1/news?apikey=${API_KEY_TWO}`
// res.data.results



const PostList = ({postName}: PostListProps) => {

  const { data, error, isLoading, isSuccess } = useQuery(["news", postName], () => 
    axios
      .get(`https://newsdata.io/api/1/news?${postName !== '' ? ('q=' + postName + '&') : ''}language=en&apikey=${API_KEY_TWO}`)
      .then((res) => res.data), {cacheTime: Infinity}
    );  

  if (error instanceof Error) return <div>An error has occurred: {error.message}</div>;

  return (
    <>
      <Wrapper>
        {isLoading && <CircularProgress />}
        {isSuccess && data.results?.map((post: any, id: number) => <Post post={post}/>)}
      </Wrapper>
    </>
  )
}

export default PostList;