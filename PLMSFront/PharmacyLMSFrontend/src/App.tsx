
import {useState} from 'react';
import './App.css';
import Header from './assets/components/Header';
import ResoWindow from './assets/components/ResoWindow';
import { ScenariosArr } from './scenarios.tsx';


/*function rxReducer(state: RxStatus, action: RxAction): RxStatus {
  switch (action.type) {
    case '':  
*/
   

function App() {
  //const [inputValue, setInputValue] = useState<string|number>(TestScenario1.Medication.quantity);
  const [scenarioNumber, setScenarioNumber] = useState<number>(0);

  const [formState, setFormState] = useState({
    quantity: ScenariosArr[scenarioNumber].Medication.quantity,
    fillDate: ScenariosArr[scenarioNumber].Medication.fill_date,
    insurance: ScenariosArr[scenarioNumber].Patient.insurance[0].name
    
  });
  
 

  return (
    <>
      <p>description:   {ScenariosArr[scenarioNumber].Description}</p>
      <div className="App">
        <Header scenarioNumber={scenarioNumber} handleScenarioChange={setScenarioNumber} />
        <ResoWindow testScenario={ScenariosArr[scenarioNumber]} 
                    answerState={formState} 
                    setAnswer={setFormState} 
                    />
      </div>
    </>
  )
}

export default App
