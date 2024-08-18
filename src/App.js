import "./App.css";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import { apiUrl, filterData } from "./data";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

function App() {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Loading is true data is not fetched
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();
        // Save data into a variable
        // console.log(data);
        setCourses(output.data);
      } catch (error) {
        toast.error("Something went wrong");
      }
      setLoading(false); // Loading is False data is fetched
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <div>
        <Navbar />
      </div>
      <div className="bg-[purple] ">
        <Filter
          filterData={filterData}
          category={category}
          setCategory={setCategory}
        />
        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {loading ? (
            <Spinner />
          ) : (
            <Cards courses={courses} category={category} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
