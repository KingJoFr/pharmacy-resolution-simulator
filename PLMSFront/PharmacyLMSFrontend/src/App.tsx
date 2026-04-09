
import { useEffect, useRef, useState} from 'react';
import './App.css';
import Header from './assets/components/Header';
import ResoWindow from './assets/components/ResoWindow';
import { ScenariosArr } from './scenarios.tsx';
import F10Modal from './assets/components/F10Modal.tsx';



function useAllKeysDown(targetKeys: string[], callback: () => void) {
  const keysPressed = useRef<Set<string>>(new Set());

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      keysPressed.current.add(event.key);
      const allPressed = targetKeys.every(key => keysPressed.current.has(key));
      if (allPressed) {
        callback();
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      keysPressed.current.delete(event.key);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [targetKeys, callback]);
}




  
   

function App() {
  //const [inputValue, setInputValue] = useState<string|number>(TestScenario1.Medication.quantity);
  const [isOpen, setIsOpen] = useState<boolean>(false);
   useAllKeysDown(['Control', 'F10'], () => {
     setIsOpen(true);
   });
  const [scenarioNumber, setScenarioNumber] = useState<number>(0);

  const [formState, setFormState] = useState({
    quantity: ScenariosArr[scenarioNumber].Medication.quantity,
    fillDate: ScenariosArr[scenarioNumber].Medication.fill_date,
    insurance: ScenariosArr[scenarioNumber].Patient.insurance[0].name
    
  });
  
  
 

  return (
    <>
      <p>Description:   {ScenariosArr[scenarioNumber].Description}</p>
      <p>Notes: This is a work in progress. 
        putonhold and switchtocash buttons don't function. 
        You can change the scenario using the dropdown menu at the top center. 
        Click the reset button after you change the scenario.
        ctlr + F10 opens the F10 form</p>
      <div className="App">
        <Header scenarioNumber={scenarioNumber} handleScenarioChange={setScenarioNumber} />
        <F10Modal isOpen={isOpen} onClose={() => {setIsOpen(false)}} >
          <h2>F10 form</h2>
          <label htmlFor="Diagnosis Code">
            Diagnosis Code:<input 
                                id="Diagnosis Code" 
                                name="diagnosisCode"/>
          </label>
          <label htmlFor="priorAuthorizationNumber">
            Prior Authorization Number:<input 
                                          id="priorAuthorizationNumber" 
                                          name="priorAuthorizationNumber"/>
          </label>
          <label htmlFor="priorAuthorizationNumber">
            Other Coverage Code:
            <select 
                  id="priorAuthorizationNumber" 
                  name="priorAuthorizationNumber">
                     <option value="01">01 no other coverage</option>
                     <option value="03">03 Other coverage exists- this claim not covered</option>
                     <option value="08">08 Claim is billing for copay</option> 
            </select>
          </label>
        </F10Modal>
        <ResoWindow currentScenario={ScenariosArr[scenarioNumber]} 
                    answerState={formState} 
                    setAnswer={setFormState} 
        />
      </div>
    </>
  )
}

export default App
