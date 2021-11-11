import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Head from '../components/head';
import PageName from '../components/pageName';
import ProfileMain from '../components/profileMain';

function Profile() {
  return (
    <div className="App">
      <header className="App-header">
        <main className="App-contents">
          <Head />
          <PageName name="Profile" subname="Webエンジニアを目指して転職活動中です。" />
          <ProfileMain />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          profile
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

export default Profile;
