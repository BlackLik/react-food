import { useEffect} from 'preact/hooks';
import { useDispatch } from "react-redux";
import { setSeo } from "../stores/SEOSlicer";

function ErrorPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSeo({
      title: "404 Not found",
      description: "404 Not found"
    }));
  }, []);
  return (
    <>
      404 Not found
    </>
  );
}

export default ErrorPage;
