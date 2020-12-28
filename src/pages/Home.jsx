import React from 'react'
import { fetchPizzas } from '../redux/actions/pizzas';
import Categories from '../components/Categories';
import SortPopup from '../components/SortPopup';
import LoadingBlock from '../components/PizzaBlock/LoadingBlock';
import PizzaBlock from '../components/PizzaBlock';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setSortBy } from '../redux/actions/filters'
import { addPizzdToCart } from '../redux/actions/cart'
import pizzas from '../redux/reducers/pizzas';

const categoryNames = [
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые'
]
const sortItems = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' },
];

function Home() {
  const dispatch = useDispatch();
  const cartItems = useSelector(({ cart }) => cart.items)
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);


  React.useEffect(() => {

    dispatch(fetchPizzas(sortBy, category))

  }, [category, sortBy]);


  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const handleAddPizzaToCart = (obj) => {
    dispatch({
      type: 'ADD_PIZZA_CART',
      payload: obj,
    })
  }


  return (
    <div>

      <div className="container">
        <div className="content__top">
          <Categories activeCategory={category} onClickCategory={onSelectCategory}
            items={categoryNames} />
          <SortPopup activeSortType={sortBy.type} items={sortItems} onClickSortType={onSelectSortType} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoaded
            ? items.map((obj) => (<PizzaBlock
              onClickAddPizza={handleAddPizzaToCart}
              key={obj.id}
              addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
              {...obj} />))
            : Array(12).fill(0).map((_, index) => <LoadingBlock key={index} />)
          }



        </div>
      </div>
    </div>

  )
}


export default Home