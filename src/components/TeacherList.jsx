import React from 'react';
import "../styles/teacherList.css";
import Image1 from './../assets/image.jpeg';

const teachers = [
    {
        image: Image1,
        name: 'Prof. Jhone Doe',
        cost: 100,
    },

];

const TeacherList = () => {
  return (
    <div className="teacher--list">
        <div className="list--header">
            <h2>Teachers</h2>
            <select>
                <option value="english">English</option>
                <option value="french">French</option>
            </select>
        </div>
    </div>
  )
}

export default TeacherList