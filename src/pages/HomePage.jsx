import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSeo } from '../stores/SEOSlicer';
import { CategoryList } from '../component';

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setSeo({
        title: 'Home',
        description: 'This is the home page',
      }),
    );
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1>Home</h1>
      <CategoryList />
    </>
  );
}

export default Home;
