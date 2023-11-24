import './App.css';
import { Navbar } from './components/Navbar';
import Main from './components/Main';
import Course from './components/Course';
import Courses from './components/Courses';

function App() {
  return (
    <div>
      <Navbar/>
      <Main/>
      <Courses/>
    </div>
  );
}

export default App;
