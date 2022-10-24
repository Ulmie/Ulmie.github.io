import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 50%;
  & > h4 {
    display: block;
    border-bottom: 1px solid #333;
    width: 100%;
    margin-bottom: 10px;
  }
`;

export const Header = styled.div`
  display: flex;
`;

export const Friends = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const FoundFriends = styled.div`
  position: absolute;
  width: 300px;
  background-color: rgba(190, 190, 190, .1);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;

export const SearchFr = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 15px;

  & > img {
      margin-right: 10px;
  }

  & > div:first-child {
    margin-right: 10px;
  }

  & > button {
    align-self: flex-end;
    margin: 0 0 0 auto;
    color: white;
  }
`;