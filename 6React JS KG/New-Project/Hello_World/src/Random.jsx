function Random() {
  let number = Math.random() * 10;
  return (
    <p style={{ backgroundColor: "red" }}>this is random number:{number} </p>
  );
}
export default Random;
