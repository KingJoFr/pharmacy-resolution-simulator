
import { useEffect, useRef, useState} from 'react';
import './App.css';
import Header from './assets/components/Header';
import ResoWindow from './assets/components/ResoWindow';
import { ScenariosArr } from './scenarios.tsx';
import FButtonModal from './assets/components/FButtonModal.tsx';
import F10WindowForm from './assets/components/F10WindowForm.tsx';
import type {  FormEvent } from 'react';
import type { Scenario } from './assets/components/CustomTypes.tsx';
import Notes from './assets/components/Notes.tsx';
import SwitchToCashWindow from './assets/components/SwitchToCashWindow.tsx'

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
  //state variables
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openSwitchToCash, setOpenSwitchToCash] = useState<boolean>(false);

  useAllKeysDown(['Control', 'F10'], () => {
     setIsOpen(true);
   });
  
  const [scenarioNumber, setScenarioNumber] = useState<number>(0);

  /*const [formState, setFormState] = useState({
    quantity: ScenariosArr[scenarioNumber].Medication.quantity,
    fillDate: ScenariosArr[scenarioNumber].Medication.fillDate,
    insurance: ScenariosArr[scenarioNumber].Patient.insurance[0].name
    
  });*/

  //const [mainFormResults, setMainFormResults] = useState<boolean[]>([]);
  //const [f10FormResults, setF10FormResults] = useState<boolean[]>([]);
  const mainFormResultsRef = useRef<boolean[]>([]);
  const f10FormResultsRef = useRef<boolean[]>([]);
  const switchToCashResultsRef = useRef<boolean>(false);


  //reset logic
  function resetResults(){
  mainFormResultsRef.current = [];
  f10FormResultsRef.current = []  ;

  }


  function handleMainForm (event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        
        formData.forEach((value,key) => {
          const result: boolean = value.toString() == ScenariosArr[scenarioNumber].Solution[key as keyof Scenario["Solution"]];
          
          mainFormResultsRef.current.push(result);
          
        
        }  )
        
        
        


        if(Object.hasOwn(ScenariosArr[scenarioNumber].Solution,"intAuth")){ //if has intauth in scenario then f10 form is needed
          
          if(mainFormResultsRef.current.length > 0 && f10FormResultsRef.current.length > 0){ //check if both forms have been submitted  
              
            if(mainFormResultsRef.current.includes(false) && f10FormResultsRef.current.includes(false)){
                alert("Incorrect. Refer to the hint if needed.");
            }else{
                alert(`Correct! Rx Accepted\n\n` + (ScenariosArr[scenarioNumber].AdditionalInfo ? ` Additional Info: ${ScenariosArr[scenarioNumber].AdditionalInfo}` : ''))
                
            }
          }else{
            alert("Please submit the F10 form to complete the scenario.");
          }
          
        }else if(mainFormResultsRef.current.length > 0){ //if no f10 required just check main form results
          
            if(mainFormResultsRef.current.includes(false)){
                alert("Incorrect. Refer to the hint if needed.");
            }
            else{

                alert(`Correct! Rx Accepted\n\n` + (ScenariosArr[scenarioNumber].AdditionalInfo ? ` Additional Info: ${ScenariosArr[scenarioNumber].AdditionalInfo}` : ''));
                
           }
        
          
  }
  resetResults();
}
    
    

  function handleF10FormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.forEach((value, key) => {
    
      f10FormResultsRef.current.push(value.toString() === ScenariosArr[scenarioNumber].Solution[key as keyof Scenario["Solution"]]?.toString());
      
    });

    
    alert("F10 form submitted. Please complete and submit the main form.");
    setIsOpen(false);

    
  
}
  function handleSwitchToCash(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget)
    const solution = ScenariosArr[scenarioNumber].Solution.switchToCashReason;
    const additionalInfo = ScenariosArr[scenarioNumber].AdditionalInfo;
    const choice: FormDataEntryValue = formData.get("switchToCashReason")!;
    console.log("choice", choice)
    console.log("solution", solution)
    if(choice !== null){
      switchToCashResultsRef.current = (choice === solution);
      console.log("switchToCashResults", switchToCashResultsRef.current)
    }
    if(switchToCashResultsRef.current){
       alert(`Correct! Rx Accepted\n\n` + (additionalInfo ? ` Additional Info: ${additionalInfo}` : ''))
       setOpenSwitchToCash(false);
    }else{
       alert("Incorrect. Refer to hint if needed.")
       setOpenSwitchToCash(false);
    }

  }
 

  return (
    <>
      <Notes/>
      <div className="App">
        <Header scenarioNumber={scenarioNumber} handleScenarioChange={setScenarioNumber} />
        
        <FButtonModal modalForm="f10Form"isOpen={isOpen} onClose={() => {setIsOpen(false)}}> 
          <F10WindowForm onSubmit={handleF10FormSubmit}/>
        
        </FButtonModal>
        <FButtonModal modalForm="switchToCash" 
                      isOpen={openSwitchToCash} 
                      onClose={()=> {setOpenSwitchToCash(false)}}>
          <SwitchToCashWindow onSubmit={handleSwitchToCash}/>
        </FButtonModal>
        <ResoWindow currentScenario={ScenariosArr[scenarioNumber]} 
                    setIsOpen={setIsOpen} 
                    handleForm={handleMainForm}
                    resetResults = {resetResults}
                    setOpenSwitchToCash={setOpenSwitchToCash}
                    />
        
      </div>
    </>
  )
}

export default App
