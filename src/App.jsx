import { useEffect, useState } from "react";
import data from "./data";
import JobInfo from "./JobInfo";
import BtnContainer from "./BtnContainer";

// const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [jobs, setJobs] = useState(data);
  const [currentItem, setCurrentItem] = useState(0)
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

  return (
    <section className="jobs-center">
      {/* button container */}
      <BtnContainer jobs={jobs} currentItem={currentItem} setCurrentItem={setCurrentItem}/>

      {/* job info */}

      <JobInfo jobs={jobs} currentItem={currentItem}/>
    </section>
  );
};
export default App;
