import styled from 'styled-components';

export const Section = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: flex-start;
  position: fixed;
  right: 1%;
  top: 70px;
  width: 400px;
  @media (min-width: 1500px) {
    right: 5%;
  }
`

export const Img = styled.img`
  max-width: 300px;
  width: 100%;
`

export const P = styled.p`
  text-align: left;
  width: 100%;
  & span {
    display: block;
  }
`

export const NoCard = styled.p`
  font-size: 1rem;
  text-align: center;
  width: 100%;
`

export const H2 = styled.h2`
  font-size: 2rem;
  margin: 5px 0;
  width: 100%;
  & small {
    display: block;
    font-size: 1rem;
  }
`
export const Actions = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
`