import { useEffect} from 'preact/hooks';
import { useDispatch } from 'react-redux';
import { setSeo } from '../stores/SEOSlicer';

function Contact() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setSeo({
        title: 'Contact',
        description: 'This is the contact page',
      }),
    );
  }, []);
  return (
    <>
      <h1>Contact</h1>
    </>
  );
}

export default Contact;
