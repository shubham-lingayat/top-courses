import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

function Card({ course, likedCourses, setLikedCourses }) {
  function likeHandler() {
    // Logic
    if (likedCourses.includes(course.id)) {
      // Pehale se lke hua pada hai
      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("Liked Removed");
    } else {
      // Pehale se like nahi hai ye course
      // Insert in like course this course
      if (likedCourses.length === 0) {
        // array is empty
        setLikedCourses([course.id]);
      } else {
        // array is not empty
        setLikedCourses((prev) => [...prev, course.id]);
      }
      toast.success("Liked Successfully");
    }
  }
  return (
    <div className="bg-yellow-800 bg-opacity-80 w-[300px] rounded-md overflow-hidden">
      <div className="relative min-h-[100px] bg-white">
        {/* If-Else condition Start  */}

        {course.image?.url ? (
          <img src={course.image.url} alt={course.image.alt} />
        ) : (
          <div className="placeholder text-black">No Image Available</div>
        )}

        {/* If-Else condition End  */}
        <div className="absolute w-[40px] h-[40px] bg-white rounded-full right-2 bottom-3 grid place-items-center">
          <button onClick={likeHandler}>
            {likedCourses.includes(course.id) ? (
              <FcLike fontSize="1.75rem" />
            ) : (
              <FcLikePlaceholder fontSize="1.75rem" />
            )}
          </button>
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-white font-semibold text-lg leading-6">
          {course.title}
        </h2>
        <p className="text-white mt-2">
          {/* IF else statement chacking length of description less than 100 */}
          {course.description.length > 100
            ? course.description.substr(0, 100) + "..."
            : course.description}
        </p>
      </div>
    </div>
  );
}

export default Card;
