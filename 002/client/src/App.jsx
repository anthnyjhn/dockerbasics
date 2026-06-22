import React, { useEffect, useState } from "react";

const App = () => {
  const [backendState, setBackendState] = useState(false);

  useEffect(() => {
    const getStatus = async () => {
      try {
        const response = await fetch("http://localhost:5000/status");
        const data = await response.json();
        console.log(response);
        setBackendState(data.status);
      } catch (error) {
        console.error("Error fetching status:", error);
      }
    };

    getStatus();
  }, []);

  return <div>{backendState ? "Backend is up" : "Backend is down"}</div>;
};

export default App;
