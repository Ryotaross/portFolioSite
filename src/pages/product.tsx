import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Head from '../components/head';
import PageName from '../components/pageName';
import ProductMain from '../components/productMain';

function Product() {
  return (
    <div className="App">
      <header className="App-header">
        <main className="App-contents">
          <Head />
          <PageName name="Product" subname="これまでに個人開発を行ったプロダクトです。" />
          <ProductMain />
          <img src={logo} className="App-logo" alt="logo" />
        <p>
          product
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </main>
      </header>
    </div>
  );
}

export default Product;
