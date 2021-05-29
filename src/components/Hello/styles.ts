import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > img {
    height: 400px;
    width: auto;
    margin-bottom: 10px;
  }
  > p {
    font-size: 1.5rem;
    font-weight: bold;
  }

  > span {
    margin-top: 1rem;
    max-width: 600px;

    text-align: justify;
    font-style: italic;
    line-height: 2rem;
    font-size: 1.2rem;
  }
`;
