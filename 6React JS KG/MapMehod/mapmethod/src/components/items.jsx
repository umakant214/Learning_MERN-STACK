import styles from "./Button.module.css";
const Item = ({ item }) => {
  const hanleBuyButtonClcked = (event) => {
    console.log(event);

    console.log(`${item} items is bought`);
  };
  return (
    <>
      <li className="list-group-item kg-item">
        {item}

        <button
          type="button"
          className={`btn btn-success ${styles.button}`}
          onClick={(event) => hanleBuyButtonClcked(event)}
        >
          Buy
        </button>
      </li>
    </>
  );
};

export default Item;
