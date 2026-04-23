import './ResoWindow.css';
import type { Scenario } from './CustomTypes.tsx';

import { type FormEvent, type Dispatch, useState, useRef } from 'react';
//import type { AnswerState } from './CustomTypes.tsx';

interface ResoWindowProps {
    setIsOpen: Dispatch<React.SetStateAction<boolean>>;
    setOpenSwitchToCash: Dispatch<React.SetStateAction<boolean>>;
    currentScenario: Scenario;
    handleForm: (event: FormEvent<HTMLFormElement>) => void;
    resetResults: () => void;
   /* answerState: AnswerState;
    setAnswer: Dispatch<React.SetStateAction<AnswerState>>;*/
    
    
}
/*interface DropdownProps {
    options: Ins[];
    selectedIns: string;
    handleInsuranceChange: (value: string) => void;
}*/
type Ins = {
    name: string;
    policy_number: string;
}

const ResoWindow = ({currentScenario, setIsOpen, handleForm, resetResults,setOpenSwitchToCash}: ResoWindowProps) => {
    //const [daysSupplyValue, setdaysSupplyValue] = useState<number>(currentScenario.Medication.daysSupply);
    const insOptions = currentScenario.Patient.insurance;
    const [selectedIns, setSelectedIns] = useState<string>(insOptions[0].name);
    const formRef = useRef<HTMLFormElement>(null);
    const handleReset = () => {
        formRef.current?.reset();
        setSelectedIns(insOptions[0].name);
        resetResults();
        
    }

    function openF10(){
        setIsOpen(true);
    }
    function openSwitchToCash(){
        setOpenSwitchToCash(true);
    }
    


        
       // setAnswer({...answerState, quantity: quantity, fill_date: fill_date, insurance: insurance});


         
        /*
             if (currentScenario.AdditionalInfo) {
                alert(`Correct! Rx Accepted. Additional Info: ${currentScenario.AdditionalInfo}`);
             } else {
                alert("Correct! Rx Accepted");
            }
            } else {
             alert("Incorrect. Refer to the hint if needed.");
           }
         */
    const handleHint = () => {
        alert(currentScenario.Hint);
    }

    //reset logic
    
    return(
    <>
        <div className="resoWindowContainer">
        
            <div className="rejectCode"><strong>Rejection Code</strong>: {currentScenario.Rejection.code}</div>
            <div className="rejectMessage"><strong>Rejection Message</strong>: {currentScenario.Rejection.description}</div>
            
            <div className="PTContainer">
                <h2>Patient Information</h2>
                <p>Name: {currentScenario.Patient.name}</p>
                <p>Birthdate: {currentScenario.Patient.birthdate}</p>
                <p>Gender: {currentScenario.Patient.gender}</p>
               
                
            </div>
            <div className="submissionContainer">
                <h2>Prescription Information</h2>
                <p>medication: {currentScenario.Medication.name}</p>
                <p>dosage: {currentScenario.Medication.dosage}</p>
                <p>sig: {currentScenario.Medication.sig}</p>
                <p>provider: {currentScenario.Medication.provider}</p>
                {/*form*/}
                <form id="submissionForm"ref={formRef} onSubmit={handleForm}>
                    <label htmlFor="quantity">Quantity:
                        <input type="number" 
                            id="quantity" 
                            name="quantity"
                            placeholder={currentScenario.Medication.quantity.toString()}
                            
                            />
                    </label>
                    <label htmlFor="daysSupply">Days Supply: 
                        <input type="number" 
                            id="daysSupply" 
                            placeholder={currentScenario.Medication.daysSupply.toString()}
                            name="daysSupply"
                            />
                    </label>
                    <label htmlFor="fillDate">Fill Date:
                        <input 
                            id="fillDate"
                            name="fillDate"
                            placeholder={currentScenario.Medication.fillDate}
                            type="text"
                            
                            
                    />
                    </label>
                    {currentScenario.GenderTest && 
                    <div    className="genderContainer">Gender:
                        <input 
                                 type="radio"
                                 id="male"
                                 name="gender"
                                 value="male"
                                 defaultChecked
                            />
                        <label htmlFor="male">Male </label>
                        <input 
                                type="radio"
                                id="female"
                                name="gender"
                                value="female"
                            />
                        <label htmlFor="female">Female </label> 
                    </div>
                    }

                    
                    <label htmlFor="select" >Insurance:
                                <select id ="select" name="insurance" style={{"width": "50%"}}value={selectedIns}
                                    
                                >
                                        {currentScenario.Patient.insurance.map((ins: Ins) => (
                                            <option key={ins.policy_number} value={ins.name}>
                                                {ins.name} {ins.policy_number}
                                            </option>
                                        ))}
                    
                                </select>
                            </label>
                    <div className="formButtonContainer">
                        <button type="submit" >submit</button>
                        <button type="button" onClick={openF10}>F10 Window</button>
                       
                    </div>
                </form>
                 <div className="buttonContainer">
                        <button onClick={handleHint}>hint</button>
                        <button>put on hold</button>
                        <button onClick={openSwitchToCash}>switch to cash</button>
                        <button onClick={handleReset}>reset</button>
                    </div>
                    
            </div>
        
            
        </div>
        
    </>
    );
}

export default ResoWindow