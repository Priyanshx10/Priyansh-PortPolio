// pages/index.js

'use client';

import React, { Suspense } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const About = React.lazy(() => import('../components/About'));
const Projects = React.lazy(() => import('../components/Projects'));
const Contact = React.lazy(() => import('../components/Contact'));

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        <About />
        <Projects />
        <Contact />
      </Suspense>
      <Footer />
    </div>
  );
}
