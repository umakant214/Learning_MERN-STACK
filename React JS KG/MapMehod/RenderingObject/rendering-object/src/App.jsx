function App() {
  const input = prompt("Enter letters or numbers:");
  const data = input.split(""); // turns "ABC" into ["A", "B", "C"]

  return (
    <>
      <div>
        {data.map((item, index) => (
          <button key={index}>{item}</button>
        ))}
      </div>
    </>
  );
}

export default App;
