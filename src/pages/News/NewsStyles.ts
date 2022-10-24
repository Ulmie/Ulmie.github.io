import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  border-top: 1px solid rgba(190, 190, 190, .1);
  
  & > h2 {
    color: white;
    text-align: center;
  }

  & > div:nth-child(2) {
    width: 50%;
    min-width: 300px;
    margin: 15px auto;
  }
  `;