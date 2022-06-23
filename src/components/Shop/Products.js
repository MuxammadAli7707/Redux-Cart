import ProductItem from './ProductItem';
import classes from './Products.module.css';

const foodArray  = [
  {
    id: 'p1',
    price: 2,
    title: 'Osh',
    descption: 'Plov is the symbol of Uzbek food. It is prepared in every Uzbekistan family'
  },
  {
    id: 'p2',
    price: 5,
    title: 'Shashlik',
    descption: 'The classic Uzbek shashlik is a dish of shallow meat, usually lamb with a minimum of spices.'
  },
  {
    id: 'p3',
    price: 4,
    title: 'Norin',
    descption: 'Norin (narin) - is home-made noodles with horsemeat, more precisely, with kazy (horse meat sausage).'
  },
]


const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {foodArray.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.descption}
        />
        ))}

      </ul>
    </section>
  );
};

export default Products;
