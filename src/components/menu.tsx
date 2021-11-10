import React from 'react';
import styled from 'styled-components';
import { FaRegGrinTongueWink } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import { ImPointRight} from "react-icons/im";

function Menu() {
  const Menubar = styled.ul `
    display: flex;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  `;

  const Item = styled.li `
    list-style: none;
  `;

  const Button = styled.a `
    text-decoration: none;
    color: #66757f;
    margin: 0 2px;
    padding: 10px;
    border-radius: 4px;
    background: #fff;
    border: 1pxsolid transparent;
    transition: .5s;
    &:hover {
      cursor: pointer;
      background: #b3424a;
      color: white;
    }
  `;

  const Icon = styled.svg `
    display: inline-block;
    font-size: inherit;
    width: 1em;
    height: 1em;
    margin-right:.3em;
    overflow: visible;
    vertical-align: -.125em;
  `;

  return (
    <Menubar>
        <Item><Button href="/"><Icon><FaRegGrinTongueWink /></Icon>Profile</Button></Item>
        <Item><Button href="/product"><Icon><FaGift /></Icon>Product</Button></Item>
        <Item><Button href="/social"><Icon><ImPointRight /></Icon>Social</Button></Item>
    </Menubar>
    
  );
}

export default Menu;
