import { useEffect, useState } from "react";
import data from "./data";

// const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [jobs, setJobs] = useState([data]);
  // const [isLoading, setIsLoading] = useState(true);

  // const fetchData = async () => {
  //   const resp = await fetch(url);
  //   const newJobs = await resp.json();
  //   setJobs(newJobs);
  //   setIsLoading(false);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  console.log(jobs);

  return <h2>Tabs Starter</h2>;
};
export default App;
