
import { useEffect, useRef, useState} from 'react';
import './App.css';
import Header from './assets/components/Header';
import ResoWindow from './assets/components/ResoWindow';
import { ScenariosArr } from './scenarios.tsx';
import FButtonModal from './assets/components/FButtonModal.tsx';
import F10WindowForm from './assets/components/F10WindowForm.tsx';
import type { ChangeEvent, FormEvent, FormEventHandler } from 'react';



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
  function handleF10FormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const f10Data: { [key: string]: string } = {};
    formData.forEach((value, key) => {
      f10Data[key] = value.toString();
    });
    
  }
  
  
 

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
        <FButtonModal modalForm="f10Form"isOpen={isOpen} onClose={() => {setIsOpen(false)}} onSubmit={handleF10FormSubmit}> 
          <F10WindowForm onSubmit={handleF10FormSubmit} />
        
        </FButtonModal>
        <ResoWindow currentScenario={ScenariosArr[scenarioNumber]} setIsOpen={setIsOpen} answerState={formState} setAnswer={setFormState} />
        
      </div>
    </>
  )
}

export default App
