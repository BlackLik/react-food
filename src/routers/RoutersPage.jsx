// import { lazy, Suspense } from 'react';
import { Suspense, lazy } from 'preact/compat';
import { Routes, Route } from 'react-router-dom';
import { Progress } from '../component';

const Home = lazy(() => import('../pages/HomePage'));
const About = lazy(() => import('../pages/AboutPage'));
const Contact = lazy(() => import('../pages/ContactPage'));
const NotFound = lazy(() => import('../pages/ErrorPage'));
const Category = lazy(() => import('../pages/CategoryPage'));
const Single = lazy(() => import('../pages/SinglePage'));

const RoutersPage = () => {
  return (
    <Suspense fallback={<Progress />}>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/:id/' element={<Single />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/category/:name' element={<Category />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export { RoutersPage };
