import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	width: 50%;
	min-width: 300px;
	flex-direction: column;
	background-color: #2b4671;
	padding: 15px 20px;
	border-radius: 10px;
	margin-bottom: 15px;
	align-items: center;
	color: white;

	& > img {
	width: 300px;
	}

	& > h3 {
	text-align: center;
	color: white;
	}
`;

 export const Header = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	& > button {
		color: white;
		align-self: end;
		margin-left: auto;

		&:hover {
			color: rgba(2, 150, 199, 1);
		}
	}

	& > div:first-child {
		margin-right: 10px;
	}

	& > div > span {
		font-size: 10px;
		line-height: 0;
	}
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 10px;
	width: 100%;

	& > p {
		padding: 5px 0 15px;
	}

	& > img {
		border-radius: 0px 0px 10px 10px;
		padding-bottom: 5px;
	}
`;

export const Description = styled.h5`
	margin: 10px 0;
	text-align: justify;
`;

export const PostButton = styled.button`
	border: none;
	background-color: transparent;
	width: 100px;
	cursor: pointer;
	color: white;

	&:hover {
		color: rgba(2, 150, 199, 1); 
	}
`;