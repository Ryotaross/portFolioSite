import React from 'react';
import logo from '../me.jpg';
import styled from 'styled-components';

function Logo() {
  const Header = styled.div `
    text-align:center;
  `;

  const Image = styled.img `
    border: 5px solid #fff;
    width: 100px;
    height: 100px;
    border-radius: 100%;
    object-fit: cover;
    &:hover {
      border: 5px solid #b3424a;
    }
  `;

  /*
  const First = styled.h1 `
    position:relative;
    left:-1em;
    font-size: 1.5em;
    margin: 0.1em 0 0 0;
    transform: rotate(-5deg);
    -moz-transform: rotate(-5deg);
    -webkit-transform: rotate(-5deg);
  `;

  const Last = styled.h1 `
    position:relative;
    left:1em;
    font-size: 1.5em;
    margin: 0 0 .3em 0;
    transform: rotate(-5deg);
    -moz-transform: rotate(-5deg);
    -webkit-transform: rotate(-5deg);
  `;
  */

  const Name = styled.h1 `
    font-size: 1.5em;
    margin: 0.5em 0;
  `;

  return (
    <Header>
      <Image src={logo} alt="logo" />
      <Name>Ryotaro Shimizu</Name>
    </Header>
  );
}

export default Logo;
