import React, { useState } from 'react';
import { Avatar, IconButton } from '@mui/material';
import { MoreHoriz } from '@mui/icons-material';
import { Wrapper, Header, Content, PostButton, Description } from './PostStyles';
import { PostProps } from './interfaces';

const Post = (props: PostProps) => {

	const [contentText, setContentText] = useState<boolean>(false);

	return (
		<Wrapper>
			<Header>
				<Avatar />
				<div>
					<h4>{props.post.author || props.post.creator ? props.post.creator[0] : 'Anon'}</h4>
					<span>{props.post.pubDate}</span> 
				</div>
				<IconButton>
          <MoreHoriz />
        </IconButton>
			</Header>
			<Content>
				<h3>{props.post.title}</h3>
				<Description>{props.post.description}</Description>
				{props.post.content ? 
				<>
					<PostButton onClick={() => setContentText(!contentText)}>
						{contentText ? 'Hide content' : 'Show more...'}
					</PostButton>
					<p>{contentText ? props.post.content : null}</p>
				</>
				 : null}
				{props.post.image_url ? <img src={props.post.image_url} alt="post_img" /> : null}
			</Content>
		</Wrapper>
	)
}

export default Post;