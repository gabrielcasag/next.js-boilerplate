import React from 'react';
import * as S from './styles';

const Hello: React.FC = () => (
  <S.Container>
    <img src="/logo.svg" alt="Logo" />
    <p>
      Hello! This is an next.js ft. prettier ft. eslint ft. styled-components
      template
    </p>
    <span>
      "feel free to create your issue or PR to improve this template, my intent
      is to provide a more simple and faster way to start coding your apps"
    </span>

    <footer>
      created by
      <a
        target="_blank"
        href="https://github.com/gabrielcasag"
        rel="noreferrer"
      >
        @gabrielcasag
      </a>
    </footer>
  </S.Container>
);

export default Hello;
