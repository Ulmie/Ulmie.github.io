import React, { useState } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Wrapper } from './NewsStyles';
import PostList from '../../components/PostList/PostList';
import Search from '../../components/Search/Search';

const News = () => {

  const [postName, setPostName] = useState<string>('');

  return (
    <Wrapper>
      <h2>News</h2>
      <Search value={postName} setValue={setPostName}/>
      <PostList postName={postName}/>
      <ReactQueryDevtools initialIsOpen/>
    </Wrapper>
  )
}

export default News;