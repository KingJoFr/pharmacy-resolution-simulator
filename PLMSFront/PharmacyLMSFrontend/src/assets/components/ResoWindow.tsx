import './ResoWindow.css';
import type { Scenario } from './CustomTypes.tsx';
import {InsDropDown} from './InsDropDown';
import { type FormEvent, type Dispatch,type ChangeEvent, useState, useRef } from 'react';
import type { AnswerState } from './CustomTypes.tsx';

interface ResoWindowProps {
    setIsOpen: Dispatch<React.SetStateAction<boolean>>;
    currentScenario: Scenario;
    answerState: AnswerState;
    setAnswer: Dispatch<React.SetStateAction<AnswerState>>;
    
    
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

const ResoWindow = ({currentScenario, setIsOpen }: ResoWindowProps) => {
    //const [days_supplyValue, setdays_supplyValue] = useState<number>(currentScenario.Medication.days_supply);
    const insOptions = currentScenario.Patient.insurance;
    const [selectedIns, setSelectedIns] = useState<string>(insOptions[0].name);

    function openF10(){
        setIsOpen(true);
    }
    

    const handleForm = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        for (const [key, value] of formData.entries()) {
            console.log("formdata",key , value);
        }

        let i = 0;
        const results: boolean[] = [];
        formData.forEach((value,key) => {
            console.log("current scenario solution", currentScenario.Solution[key as keyof typeof currentScenario.Solution]);
            console.log("value", value);
            console.log("key", key);
            results[i] = value  === currentScenario.Solution[key as keyof typeof currentScenario.Solution]?.toString();
            i++;
            }
        )
        if(results.includes(false)){
            alert("Incorrect. Refer to the hint if needed.");
        }else{
            alert(`Correct! Rx Accepted\n\n` + (currentScenario.AdditionalInfo ? ` Additional Info: ${currentScenario.AdditionalInfo}` : ''));
        }
    }
        
        //setAnswer({...answerState, quantity: quantity, fill_date: fill_date, insurance: insurance});


         
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
    const formRef = useRef<HTMLFormElement>(null);
    const handleReset = () => {
        formRef.current?.reset();
        setSelectedIns(insOptions[0].name);
        
    }

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
                    <label htmlFor="days_supply">Days Supply: 
                        <input type="number" 
                            id="days_supply" 
                            placeholder={currentScenario.Medication.days_supply.toString()}
                            name="days_supply"
                            />
                    </label>
                    <label htmlFor="fill_date">Fill Date:
                        <input 
                            id="fill_date"
                            name="fill_date"
                            placeholder={currentScenario.Medication.fill_date}
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
                        <button>switch to cash</button>
                        <button onClick={handleReset}>reset</button>
                    </div>
                    
            </div>
        
            
        </div>
        
    </>
    );
}

export default ResoWindow