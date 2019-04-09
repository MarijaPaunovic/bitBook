import React, { Component } from 'react';
import Header from './app/components/Header';
import Footer from './app/components/Footer';
import Main from './app/components/Main';
import ProfilePage from './app/profile/ProfilePage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* <Main /> */}
        <ProfilePage />
        <Footer />
      </div>
    );
  }
}

export default App;
