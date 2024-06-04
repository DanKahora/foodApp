import Item from "./Item";

export default function ItemList({ food, isLoading }) {
  return (
    <div>
      {isLoading ? (
        <p>Loading..</p>
      ) : (
        food.extendedIngredients.map((items) => (
          <Item key={items.id} items={items} />
        ))
      )}
    </div>
  );
}
