import styled from 'styled-components';

export const CounterContainer = styled.div`
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  div {
    background-color: #d5dcff;
    display: flex;
    flex-direction: column;
    color: #fff;
    border-radius: 6px;
    height: 80px;
    margin: 0 0.5rem;
    height: 10rem;
    width: 10.5rem;
    cursor: pointer;
    color: #2e5cff;
    p {
      margin-bottom: 2rem;
    }
    .counter {
      margin-left: 10px;
      font-weight: 700;
      font-size: 16px;
    }
    .count {
      font-size: 36px;
      text-align: center;
    }
    &.active {
      background-color: #1142f4;
      color: #fff;
    }
  }
`;
