import PropTypes from 'prop-types';
import styles from './ReceptMain.module.css';

function ReceptMain(props) {
  const { name, area, ingredients, instructions, youtube, thumb } = props;
  const paragraphs = instructions.split('\n');
  return (
    <main className={styles.main}>
      <figure className={styles.image}>
        <img
          src={thumb}
          alt={name + ' Area - ' + area}
          
        />
        <figcaption>{name + '. Area - ' + area}</figcaption>
      </figure>
      <section className={styles.info}>
        <iframe src={youtube} title={name + ' in youtube video'} loading="lazy"></iframe>
        <table>
          <thead>
            <tr>
              <th>Ingredient</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {ingredients.map((ingredient, index) => (
              <tr key={index}>
                <td>{ingredient.name}</td>
                <td>{ingredient.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section className={styles.instructions}>
        <h2>Instruction</h2>
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>
    </main>
  );
}

ReceptMain.propTypes = {
  name: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  ingredients: PropTypes.array.isRequired,
  instructions: PropTypes.string.isRequired,
  youtube: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
};

export default ReceptMain;
