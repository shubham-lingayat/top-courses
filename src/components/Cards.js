import { React, useState } from "react";
import Card from "./Card";

function Cards({ courses, category }) {
  //   Liked Courses
  const [likedCourses, setLikedCourses] = useState([]);

  // All Couses List
  let allCourses = [];
  //   function returns you a list of all courses received from the api response
  const getCourses = () => {
    // if category is All
    if (category === "All") {
      Object.values(courses).forEach((courseCategory) => {
        courseCategory.forEach((course) => {
          allCourses.push(course);
        });
      });
      return allCourses;
    } else {
      // Specific category data
      return courses[category];
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {!courses ? (
        <div>
          <p>Please Wait for 3 Sceonds</p>
          <p>If data could not load, Refresh the page.</p>
        </div>
      ) : (
        getCourses().map((course) => {
          return (
            <Card
              key={course.id}
              course={course}
              likedCourses={likedCourses}
              setLikedCourses={setLikedCourses}
            />
          );
        })
      )}
    </div>
  );
}

export default Cards;
