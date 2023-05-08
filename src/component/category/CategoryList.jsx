import { useState, useEffect } from 'react';
import { getAllCategories } from '../../api';
import { Progress } from '../loader';
import { CardList } from '../card';

function CategoryList() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getAllCategories().then((data) => {
      let result = data.categories;
      result.forEach(element => {
        element.link = `/category/${element.strCategory}`;
      });
      setCategories(result);
    
    });


    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {categories.length > 0 ? <CardList items={categories} /> : <Progress />}
    </>
  );
}

export default CategoryList;
