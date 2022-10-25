import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// import MyContext from '../Context/MyContext';
// const {} = useContext(MyContext)

export default function Profile() {
  return (
    <div>
      <Header header profile search={ false } title="Profile" />
      <Footer />

    </div>
  );
}
