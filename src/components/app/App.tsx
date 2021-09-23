import React from 'react';
import Header from '../header/header';
import styles from './App.module.scss';
import HeroSection from '../heroSection/heroSection';
import Container from '../container/container';

function App() {
  return (
    <div className={styles.app}>
      <Header/>
      <Container classNames={styles.hero_section}>
        <HeroSection/>
      </Container>
    </div>
  );
}

export default App;
