import './ResoWindow.css';
import type { Scenario, AnswerState } from './CustomTypes.tsx';
import {InsDropDown} from './InsDropDown';
import { InpBox } from './InpBox';
import { useState, useEffect } from 'react';
import type { ChangeEvent } from 'react';

interface ResoWindowProps {
    testScenario: Scenario;
    answerState: AnswerState;
    setAnswer: (answer: AnswerState) => void;
    inputValue: string | number;
    setInputValue: (value: string | number) => void;
    onChange: (event: ChangeEvent<HTMLInputElement>, label: string) => void;
}


const ResoWindow = ({testScenario,inputValue, setInputValue, answerState, setAnswer, onChange}: ResoWindowProps) => {
     const handleInputChange = (event: ChangeEvent<HTMLInputElement>, label: string) => {
        setInputValue(event.target.value);
        
        setAnswer({...answerState,[label]: inputValue});
        

    };
    //Each input updates the answerState then I compare the answer state to the solution.
        
    const [daysSupplyValue, setDaysSupplyValue] = useState<number>(testScenario.Medication.days_supply);
    const handleSubmit = () => {
        setAnswer({...answerState,"quantity": inputValue});
        console.log(" answerState in handleSubmit", answerState);
        //logic to determine if answer is correct and update rxState accordingly
        const dsupply : number = (parseInt(answerState.quantity) == testScenario.Solution.quantity) ? testScenario.Solution.days_supply : testScenario.Medication.days_supply;
        setDaysSupplyValue(dsupply);
        
        if(parseInt(answerState.quantity) === testScenario.Solution.quantity &&
           answerState.fillDate === testScenario.Solution.fill_date &&
           answerState.insurance === testScenario.Solution.insurance)
           {
            alert("Correct! Rx Accepted");
        } else {
            alert("Incorrect. Be sure to only change one input at a time and refer to the hint if needed.");
        }
    }
    const handleHint = () => {
        alert(testScenario.Hint);
    }
   

    //onChange function to tur90n change the answerState in app.tsx.
    

   useEffect(() => {
          setAnswer({...answerState,"quantity": inputValue});
          console.log(" answerState in useeffect", answerState);
        console.log("solution", testScenario.Solution);
         
        }, [inputValue]);


    return(
    <>
        <div className="resoWindowContainer">
        
            <div className="rejectCode">Rejection Code {testScenario.Rejection.code}</div>
            <div className="rejectMessage">Rejection Message: {testScenario.Rejection.description}</div>
            
            <div className="PTContainer">
                <p>Name: {testScenario.Patient.name}</p>
                <p>Birthdate: {testScenario.Patient.birthdate}</p>
                <p>Gender: {testScenario.Patient.gender}</p>
                <InsDropDown options={testScenario} onChange={(value) => setAnswer({...answerState, insurance: value})} />
                
            </div>
            <div className="submissionContainer">
                <p>medication: {testScenario.Medication.name}</p>
                <p>dosage: {testScenario.Medication.dosage}</p>
                <p>sig: {testScenario.Medication.sig}</p>

               <label htmlFor="quantity">Quantity:  
                <input  type="number"
                        id="quantity"
                        onChange={(event) => handleInputChange(event, "quantity")}
                 />
                 </label>
                <label htmlFor="daysSupply">Days Supply: 
                    <input type="number" 
                           id="daysSupply" 
                           value={daysSupplyValue} 
                           readOnly={true}
                           />
                </label>
                <label htmlFor="fillDate">Fill Date:
                    <input 
                        id="fillDate"
                        value={testScenario.Medication.fill_date}
                        type="text"
                        readOnly={true}
                        
                />
                </label>
             
                <p>provider: {testScenario.Medication.provider}</p>
            </div>
        
            
        </div>
        <div className="buttonContainer">
                <button onClick={handleSubmit}>submit</button>
                <button onClick={handleHint}>hint</button>
                <button>put on hold</button>
                <button>switch to cash</button>
            </div>
    </>
    );
}

export default ResoWindow