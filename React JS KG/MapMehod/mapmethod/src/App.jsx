import Fooditems from "./components/Fooditems";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";
function ListItem() {
  const foodItems = ["Ghee", "Roti", "Milk", "Salad", "Green Vegetarian"];

  return (
    <>
      <h1>Healthy Food</h1>
      <Fooditems items={foodItems} />
      <ErrorMessage items={foodItems} />
    </>
  );
}

export default ListItem;
