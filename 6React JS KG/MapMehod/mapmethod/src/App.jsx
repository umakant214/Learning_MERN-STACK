import Fooditems from "./components/Fooditems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import "./App.css";
function ListItem() {
  const foodItems = ["Ghee", "Roti", "Milk", "Salad", "Green Vegetarian"];

  return (
    <>
      <Container>
        <h1>Healthy Food</h1>
        <FoodInput />
        <Fooditems items={foodItems} />
        <ErrorMessage items={foodItems} />
      </Container>

      {/* <Container>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam ipsa
          ea quasi enim error, reprehenderit, dolorum inventore quia architecto
          quas, placeat illum doloribus dolor. Rerum reiciendis nobis pariatur
          dicta quaerat!
        </p>
      </Container> */}
    </>
  );
}

export default ListItem;
