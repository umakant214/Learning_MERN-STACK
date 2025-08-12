const LoadingSpinner = () => {
  return (
    <div className="text-center my-5">
      <h2>Loading...</h2>
      <div
        className="spinner-border"
        role="status"
        style={{ width: "5rem", height: "5rem" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
export default LoadingSpinner;
