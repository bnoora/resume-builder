import { useState } from 'react'
import './App.css'
import {v4 as uuidv4} from 'uuid';
import eduInfo from './components/form/eduInfo';

function App() {
  const [educations, setEducations] = useState([
    { 
        id: uuidv4(),
        school: '',
        degree: '',
        schoolStart: '',
        schoolEnd: '',
        schoolCity: '',
        schoolState: '',
        isOngoing: false
    }
  ]);

  const handleEducationChange = (id, newEducation) => {
    const updatedEducations = educations.map(education => {
      if (education.id === id) {
        return {...newEducation, id: education.id};
      }
      return education;
    });
    setEducations(updatedEducations);
  };

  const addEducation = () => {
    setEducations([...educations, {id: uuidv4(), school: '', degree: '', schoolStart: '', 
    schoolEnd: '', schoolCity: '', schoolState: '', isOngoing: false}]);
  }
 
  const removeEducation = (id) => {
    setEducations(educations.filter(education => education.id !== id));
  }

  return (
    <div></div>
  )
}

export default App
