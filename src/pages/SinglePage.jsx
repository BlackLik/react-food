import { useState, useEffect } from 'preact/hooks';
import { useDispatch } from 'react-redux';
import { setSeo } from '../stores/SEOSlicer';
import { setReceptionist } from '../stores/ReceptSlicer';
import { useParams } from 'react-router-dom';
import { getMealById } from '../api';
import { Progress, ReceptContent } from '../component';

function SinglePage() {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    getMealById(id).then((data) => {
      let result = data.meals[0];
      let ingridients = [];
      for (let i = 1; i <= 20; i++) {
        ingridients = [
          ...ingridients,
          {
            name: result[`strIngredient${i}`],
            quantity: result[`strMeasure${i}`],
          },
        ];
      }
      ingridients = ingridients.filter((element) => element.name !== '');
      let seoTags = ''
      let tags = []
      if (result.strTags) {
        tags = result.strTags.split(',');
        seoTags = tags.map((tag) => tag.trim()).join(', ');
      }
      let seoIngridients = ingridients
        .map((ingredient) => (ingredient.name !== '' ? ingredient.name : null))
        .filter((ingredient) => ingredient !== null)
        .join(', ');

      let seoDescription = `${result.strMeal} for ${result.strArea} | ${result.strCategory} | Tags: ${seoTags} | Ingredients: ${seoIngridients}`;
      dispatch(
        setSeo({
          title: result.strMeal,
          description: seoDescription,
        }),
      );
      dispatch(
        setReceptionist({
          id: result.idMeal,
          name: result.strMeal,
          drinkAlternate: result.strDrinkAlternate,
          category: result.strCategory,
          area: result.strArea,
          instructions: result.strInstructions,
          thumb: result.strMealThumb,
          tags: [...tags],
          youtube: result.strYoutube,
          ingredients: [...ingridients],
          source: result.strSource,
          imageSource: result.strImageSource,
          creativeCommonsConfirmed: result.strCreativeCommonsConfirmed,
          dateModified: result.dateModified,
        }),
      );

      setLoader(false);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{loader ? <Progress /> : <ReceptContent />}</>;
}

export default SinglePage;
