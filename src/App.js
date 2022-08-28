import {Routes, Route} from 'react-router-dom';
import './App.css';

import Course from './frontend/Pages/CourseDetail/course';
import Coursespage from './frontend/Pages/Courses/CoursesPage';
import Home from './frontend/Pages/Home/home';
import BackendPath from './frontend/Pages/Learn Path/backendPath/backendPath';
import FrontendPath from './frontend/Pages/Learn Path/frontendPath/frontendPath';
import Learnpath from './frontend/Pages/Learn Path/learnPath';
import Learning from './frontend/Pages/learning/learning';
import Setting from './frontend/Pages/Setting/setting';
import UserPage from './frontend/Pages/User/userPage';


function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/course" element={<Course/>}/>
      <Route path="/learning-path" element={<Learnpath/>}/>
      <Route path="/learning-path/front-end-development" element={<FrontendPath/>}/>
      <Route path="/learning-path/back-end-development" element={<BackendPath/>}/>
      <Route path="/user" element={<UserPage/>}/>
      <Route path="/courses" element={<Coursespage/>}/>
      <Route path="/learning" element={<Learning/>}/>
      <Route path="/settings" element={<Setting/>}/>


      </Routes>
    </>
   
  );
}

export default App;
