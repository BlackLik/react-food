import { useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { setSeo } from '../stores/SEOSlicer';
import { useParams } from 'react-router-dom';
// import { getFilteredCategories } from '../api';

function CategoryPage() {
  const dispatch = useDispatch();
//   const [meals, setMeals] = useState([]);

  const { name } = useParams();

  useEffect(() => {
    dispatch(
      setSeo({
        title: name + ' Category',
        description: `This is the ${name} category page`,
      }),
    );
    // getFilteredCategories(name).then((res) => {
    //   setMeals(res.meals);
    // });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1>Category Page - {name}</h1>
      {/* {meals} */}
    </>
  );
}

export default CategoryPage;
