import './ResoWindow.css';
import type { Scenario } from '../../App';
import InsDropDown from './InsDropDown';


const ResoWindow = ({testScenario}: {testScenario: Scenario}) => {
    return(
    <>
        <div className="resoWindowContainer">
        
            <div className="rejectCode">Rejection Code {testScenario.Rejection.code}</div>
            <div className="rejectMessage">Rejection Message: {testScenario.Rejection.description}</div>
            
            <div className="PTContainer">
                <p>Name: {testScenario.Patient.name}</p>
                <p>Birthdate: {testScenario.Patient.birthdate}</p>
                <p>Gender: {testScenario.Patient.gender}</p>
                <InsDropDown options={testScenario}/>
                
            </div>
            <div className="submissionContainer">
                <p>medication: {testScenario.Medication.name}</p>
                <p>dosage: {testScenario.Medication.dosage}</p>
                <p>sig: {testScenario.Medication.sig}</p>
                <label htmlFor="quantity">Quantity: 
                    <input type="number" 
                           id="quantity" 
                           value={testScenario.Medication.quantity} />
                </label>
                <label htmlFor="daysSupply">Days Supply: 
                    <input type="number" 
                           id="daysSupply" 
                           value={testScenario.Medication.days_supply} />
                </label>
                <label htmlFor="date">Fill Date:
                    <input type="date"
                            id="date"
                            value={testScenario.Medication.fill_date} />
                </label>
                <p>provider: {testScenario.Medication.provider}</p>
            </div>
            <div className="hint">Hint: {testScenario.Hint}</div>
            
        </div>
        <div className="buttonContainer">
                <button>submit</button>
                <button>hint</button>
                <button>put on hold</button>
                <button>switch to cash</button>
            </div>
    </>
    );
}

export default ResoWindow;