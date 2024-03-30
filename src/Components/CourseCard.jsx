

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white border rounded p-4 m-4 w-64 text-center">
      <img src={course.image} alt={course.name} className="w-full h-40 object-cover rounded" />
      <div className="mt-4">
        <h3 className="text-lg font-semibold">{course.name}</h3>
        <p className="text-gray-600">By {course.author}</p>
        <p className="text-gray-600">Rating: {course.rating}</p>
      </div>
    </div>
  );
};

export default CourseCard;
