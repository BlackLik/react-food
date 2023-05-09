import { useState, useEffect } from 'preact/hooks';
import { useDispatch } from 'react-redux';
import { setSeo } from '../stores/SEOSlicer';
import { useParams } from 'react-router-dom';
import { getFilteredCategories } from '../api';
import { CardList, Progress } from '../component';
import { useNavigate } from 'react-router-dom';

function CategoryPage() {
  const dispatch = useDispatch();
  const [meals, setMeals] = useState([]);

  const navigate= useNavigate();

  const { name } = useParams();

  useEffect(() => {
    dispatch(
      setSeo({
        title: name + ' Category',
        description: `This is the ${name} category page`,
      }),
    );
    getFilteredCategories(name).then((res) => {
      let result = res.meals;
      result.forEach((element) => {
        element.id = element.idMeal;
        delete element.idMeal;
        element.name = element.strMeal;
        delete element.strMeal;
        element.image = element.strMealThumb;
        delete element.strMealThumb;
        element.description = ''
        element.link = `/${element.id}/`;
      });
      setMeals(res.meals);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1>Category Page - {name}</h1>
      <button className={'btn'} onClick={()=>navigate(-1)}>Go back</button>
      {meals.length > 0 ? <CardList items={meals} /> : <Progress />}
    </>
  );
}

export default CategoryPage;
