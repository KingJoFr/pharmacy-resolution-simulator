import './ResoWindow.css';
import type { Scenario } from './CustomTypes.tsx';
import {InsDropDown} from './InsDropDown';
import { type FormEvent, type Dispatch, useState } from 'react';
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
        console.log("insurance", insurance === testScenario.Solution.insurance);
        console.log("quantity", quantity === testScenario.Solution.quantity);
        console.log("fillDate", fillDate );
        //setAnswer({...answerState, quantity: quantity, fillDate: fillDate, insurance: insurance});
            if(quantity === testScenario.Solution.quantity &&
               fillDate === testScenario.Solution.fill_date &&
               insurance === testScenario.Solution.insurance)
            {
             alert("Correct! Rx Accepted");
            } else {
             alert("Incorrect. Be sure to only change one input at a time and refer to the hint if needed.");
           }
         
         
        

    };
 
    const handleHint = () => {
        alert(testScenario.Hint);
    }
    return(
    <>
        <div className="resoWindowContainer">
        
            <div className="rejectCode">Rejection Code {testScenario.Rejection.code}</div>
            <div className="rejectMessage">Rejection Message: {testScenario.Rejection.description}</div>
            
            <div className="PTContainer">
                <p>Name: {testScenario.Patient.name}</p>
                <p>Birthdate: {testScenario.Patient.birthdate}</p>
                <p>Gender: {testScenario.Patient.gender}</p>
               
                
            </div>
            <div className="submissionContainer">
                <p>medication: {testScenario.Medication.name}</p>
                <p>dosage: {testScenario.Medication.dosage}</p>
                <p>sig: {testScenario.Medication.sig}</p>
                <form onSubmit={handleForm}>
                    <label htmlFor="quantity">Quantity:
                        <input type="number" 
                            id="quantity" 
                            name="quantity"
                            placeholder={testScenario.Medication.quantity.toString()}
                            defaultValue={testScenario.Medication.quantity}
                            />
                    </label>
                    <label htmlFor="daysSupply">Days Supply: 
                        <input type="number" 
                            id="daysSupply" 
                            value={90} 
                            readOnly={true}
                            />
                    </label>
                    <label htmlFor="fillDate">Fill Date:
                        <input 
                            id="fillDate"
                            name="fillDate"
                            value={testScenario.Medication.fill_date}
                            type="text"
                            readOnly={true}
                            
                    />
                    </label>
                    <InsDropDown options={insOptions} selectedIns={selectedIns} handleInsuranceChange={setSelectedIns} />
                    <div className="buttonContainer">
                        <button type="submit" >submit</button>
                        <button onClick={handleHint}>hint</button>
                        <button>put on hold</button>
                        <button>switch to cash</button>
                    </div>
                </form>
                    <p>provider: {testScenario.Medication.provider}</p>
            </div>
        
            
        </div>
        
    </>
    );
}

export default ResoWindow