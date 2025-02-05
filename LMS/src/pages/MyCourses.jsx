import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import React, { useState, useEffect } from 'react';
import { getSubjects } from '../services/subjectService';



const MyCourses = () => {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const subjectData = await getSubjects();
        setSubjects(subjectData);
      } catch (error) {
        alert(error.message);
      }
    };
    fetchSubjects();
  }, []);
  
  return (
    <Layout>
      <div className="mt-20 dark:text-darkWhite px-3 mb-5">MyCourses</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-2">
        {subjects.map((subject) => (
          <Link key={subject._id} to={`/subject/${subject._id}`}>
            <div
              className="relative p-4 border rounded-lg shadow-md hover:shadow-lg transition duration-200 cursor-pointer"
              style={{
                backgroundImage: `url(${subject.bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "250px", // Adjust height as per need
              }}
            >
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <h1 className="font-bold text-lg text-white mb-1">{subject.title}</h1>
                <p className="text-white">{subject.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default MyCourses;
