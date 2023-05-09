import { useSelector } from 'react-redux';
import ReceptHeader from './ReceptHeader';
import ReceptMain from './ReceptMain';
import ReceptFooter from './ReceptFooter';

function ReceptContent() {
  let {
    id,
    name,
    drinkAlternate,
    category,
    area,
    instructions,
    thumb,
    tags,
    youtube,
    ingredients,
    source,
    imageSource,
    creativeCommonsConfirmed,
    dateModified,
  } = useSelector((state) => state.recept.data);

  return (
    <article key={id}>
      <ReceptHeader
        name={name}
        drinkAlternate={drinkAlternate}
        category={category}
        tags={tags}
        dateModified={dateModified}
      />
      <ReceptMain
        name={name}
        area={area}
        instructions={instructions}
        ingredients={ingredients}
        thumb={thumb}
        youtube={youtube}
      />
      <ReceptFooter
        source={source}
        imageSource={imageSource}
        creativeCommonsConfirmed={creativeCommonsConfirmed}
      />
    </article>
  );
}

export default ReceptContent;
