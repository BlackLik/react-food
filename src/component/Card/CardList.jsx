import PropTypes from 'prop-types';
import Card from './Card';
import styles from './cardList.module.css'

function CardList(props) {
  const items = props.items;

  return (
    <section className={styles.card_list}>
      {items.map((item, index) => {
        let keys = Object.keys(item);
        let new_item = {};
        new_item['id'] = item[keys[0]];
        new_item['name'] = item[keys[1]];
        new_item['image'] = item[keys[2]];
        new_item['description'] = item[keys[3]];
        new_item['link'] = item[keys[4]];
        return <Card key={index} {...new_item}/>;
      })}
    </section>
  );
}

CardList.propTypes = {
  items: PropTypes.array
};

export default CardList;
