import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Head from '../components/head';
import PageName from '../components/pageName';
import SocialMain from '../components/socialMain';

function Social() {
  return (
    <div className="App">
      <header className="App-header">
        <main className="App-contents">
          <Head />
          <PageName name="Social" subname="SNSアカウントです。御覧いただけると幸いです。" />
          <SocialMain />

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          social
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

export default Social;
