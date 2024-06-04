import FoodItem from "./FoodItem";

export default function FoodList({ fooddata, foodId, setFoodId }) {
  return (
    <div>
      {fooddata.map((food) => (
        <FoodItem key={food.id} food={food} setFoodId={setFoodId} />
      ))}
    </div>
  );
}
