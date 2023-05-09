import { useEffect } from 'preact/hooks';
import { useDispatch } from 'react-redux';
import { setSeo } from '../stores/SEOSlicer';

function About() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setSeo({
        title: 'About',
        description: 'This is the about page',
      }),
    );
  }, []);
  return (
    <>
      <h1>About</h1>
    </>
  );
}

export default About;
