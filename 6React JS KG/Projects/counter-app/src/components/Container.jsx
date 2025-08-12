const Container = ({ children }) => {
  return (
    <>
      <div class="card" style={{ width: "80%", height: "300px" }}>
        <div class="card-body">{children}</div>
      </div>
    </>
  );
};
export default Container;
