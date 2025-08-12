import styles from "./FoodInput.module.css";
const FoodInput = () => {
  const handleOnchange = () => {
    console.log(event.target.value);
  };
  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Enter Food Item here"
      onChange={(event) => handleOnchange(event)}
    />
  );
};
export default FoodInput;
