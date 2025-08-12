import { useEffect, useState } from "react";

function CurrentTime() {
  // Get the current date and time
  // This will be used to display the current time in Bharat
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Update the time every second to keep it current
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h3>
        This is time Current Time :{time.toLocaleDateString()}-{""}{" "}
        {time.toLocaleTimeString()}
      </h3>
    </div>
  );
}
export default CurrentTime;
