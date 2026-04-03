
import {useState} from 'react';
import './App.css';
import Header from './assets/components/Header';
import ResoWindow from './assets/components/ResoWindow';
import { TestScenario1 } from './scenarios.tsx';


/*function rxReducer(state: RxStatus, action: RxAction): RxStatus {
  switch (action.type) {
    case '':  
*/
   

function App() {
  //const [inputValue, setInputValue] = useState<string|number>(TestScenario1.Medication.quantity);
  
  const [formState, setFormState] = useState({
    quantity: TestScenario1.Medication.quantity,
    fillDate: TestScenario1.Medication.fill_date,
    insurance: TestScenario1.Patient.insurance[0].name
    
  });
  
 

  return (
    <>
      <p>description:   {TestScenario1.Description}</p>
      <div className="App">
        <Header />
        <ResoWindow testScenario={TestScenario1} 
                    answerState={formState} 
                    setAnswer={setFormState} 
                    />
      </div>
    </>
  )
}

export default App
