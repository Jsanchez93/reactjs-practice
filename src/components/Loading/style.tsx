import styled from 'styled-components';

export const Load = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`

export const Loader = styled.div`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
  & div {
    position: absolute;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #000;
    animation: lds-grid 1.2s linear infinite;
    :nth-child(1) {
      top: 6px;
      left: 6px;
      animation-delay: 0s;
    }
    :nth-child(2) {
      top: 6px;
      left: 26px;
      animation-delay: -0.4s;
    }
    :nth-child(3) {
      top: 6px;
      left: 45px;
      animation-delay: -0.8s;
    }
    :nth-child(4) {
      top: 26px;
      left: 6px;
      animation-delay: -0.4s;
    }
    :nth-child(5) {
      top: 26px;
      left: 26px;
      animation-delay: -0.8s;
    }
    :nth-child(6) {
      top: 26px;
      left: 45px;
      animation-delay: -1.2s;
    }
    :nth-child(7) {
      top: 45px;
      left: 6px;
      animation-delay: -0.8s;
    }
    :nth-child(8) {
      top: 45px;
      left: 26px;
      animation-delay: -1.2s;
    }
    :nth-child(9) {
      top: 45px;
      left: 45px;
      animation-delay: -1.6s;
    }
  }
`