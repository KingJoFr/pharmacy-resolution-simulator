import './ResoWindow.css';
import type { Scenario } from './CustomTypes.tsx';
import {InsDropDown} from './InsDropDown';
import { type FormEvent, type Dispatch, useState, useRef } from 'react';
import type { AnswerState } from './CustomTypes.tsx';

interface ResoWindowProps {
    testScenario: Scenario;
    answerState: AnswerState;
    setAnswer: Dispatch<React.SetStateAction<AnswerState>>;
    
    
}


const ResoWindow = ({testScenario }: ResoWindowProps) => {
    //const [daysSupplyValue, setDaysSupplyValue] = useState<number>(testScenario.Medication.days_supply);
    const insOptions = testScenario.Patient.insurance;
    const [selectedIns, setSelectedIns] = useState<string>(insOptions[0].name);
    

    const handleForm = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        for (const [key, value] of formData.entries()) {
            console.log("formdata",key , value);
        }
        const quantity = Number(formData.get("quantity")) as number;
        const fillDate = formData.get("fillDate") as string;
        const insurance = selectedIns as string;
        const daysSupply = Number(formData.get("daysSupply")) as number;

        console.log("insurance", insurance === testScenario.Solution.insurance);
        console.log("insurance,", insurance, testScenario.Solution.insurance);
        console.log("quantity", quantity === testScenario.Solution.quantity);
        console.log("fillDate", fillDate );
        //setAnswer({...answerState, quantity: quantity, fillDate: fillDate, insurance: insurance});
            if(quantity === testScenario.Solution.quantity &&
               fillDate === testScenario.Solution.fill_date &&
               insurance === testScenario.Solution.insurance &&
                daysSupply === testScenario.Solution.days_supply)
            {
             alert("Correct! Rx Accepted");
            } else {
             alert("Incorrect. Refer to the hint if needed.");
           }
         
         
        

    };
 
    const handleHint = () => {
        alert(testScenario.Hint);
    }
    const formRef = useRef<HTMLFormElement>(null);
    const handleReset = () => {
        formRef.current?.reset();
        setSelectedIns(insOptions[0].name);
        
    }

    return(
    <>
        <div className="resoWindowContainer">
        
            <div className="rejectCode"><strong>Rejection Code</strong>: {testScenario.Rejection.code}</div>
            <div className="rejectMessage"><strong>Rejection Message</strong>: {testScenario.Rejection.description}</div>
            
            <div className="PTContainer">
                <h2>Patient Information</h2>
                <p>Name: {testScenario.Patient.name}</p>
                <p>Birthdate: {testScenario.Patient.birthdate}</p>
                <p>Gender: {testScenario.Patient.gender}</p>
               
                
            </div>
            <div className="submissionContainer">
                <h2>Prescription Information</h2>
                <p>medication: {testScenario.Medication.name}</p>
                <p>dosage: {testScenario.Medication.dosage}</p>
                <p>sig: {testScenario.Medication.sig}</p>
                <p>provider: {testScenario.Medication.provider}</p>
                <form ref={formRef} onSubmit={handleForm}>
                    <label htmlFor="quantity">Quantity:
                        <input type="number" 
                            id="quantity" 
                            name="quantity"
                            placeholder={testScenario.Medication.quantity.toString()}
                            
                            />
                    </label>
                    <label htmlFor="daysSupply">Days Supply: 
                        <input type="number" 
                            id="daysSupply" 
                            placeholder={testScenario.Medication.days_supply.toString()}
                            name="daysSupply"
                            />
                    </label>
                    <label htmlFor="fillDate">Fill Date:
                        <input 
                            id="fillDate"
                            name="fillDate"
                            placeholder={testScenario.Medication.fill_date}
                            type="text"
                            
                            
                    />
                    </label>
                    <InsDropDown options={insOptions} selectedIns={selectedIns} handleInsuranceChange={setSelectedIns} />
                    <div className="formButtonContainer">
                        <button type="submit" >submit</button>
                       
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