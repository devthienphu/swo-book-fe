import {Routes, Route} from 'react-router-dom';
import './App.css';
import Course from './frontend/Pages/CourseDetail/course';
import Coursespage from './frontend/Pages/Courses/CoursesPage';
import Home from './frontend/Pages/Home/home';
import Learnpath from './frontend/Pages/Learn Path/learnPath';


function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/course" element={<Course/>}/>
      <Route path="/learning-path" element={<Learnpath/>}/>
      <Route path="/courses" element={<Coursespage/>}/>



      </Routes>
    </>
   
  );
}

export default App;
