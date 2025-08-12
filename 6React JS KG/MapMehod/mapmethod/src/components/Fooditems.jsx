import Item from "./items";

const Fooditems = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </ul>
  );
};

export default Fooditems;
