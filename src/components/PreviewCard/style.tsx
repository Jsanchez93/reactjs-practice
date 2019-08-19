import styled from 'styled-components';

export const Article = styled.article`
  background-position: -15px -16px;
  border: 4px solid rgba(0,0,0,0.9);
  border-radius: 4px;
  height: 200px;
  margin-bottom: 10px;
  position: relative;
  width: 200px;
  :hover {
    cursor: pointer;
  }
  & span {
    background-color: rgba(0,0,0,0.6);
    color: white;
    bottom: 0;
    left: 0;
    padding: 7px 0;
    position: absolute;
    text-align: center;
    width: 100%;
  }
`