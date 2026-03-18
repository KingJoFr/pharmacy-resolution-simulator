import './ResoWindow.css';
import type { Scenario } from '../../App';

function ResoWindow (props: {scenario: Scenario}) {
    return(
    <>
    <div className="resoWindowContainer">
    
        <div className="rejectCode">{props.scenario.Rejection.code}</div>
        <div className="rejectMessage">{props.scenario.Rejection.description}</div>
        
        <div className="PTContainer">
            <p>{props.scenario.Patient.name}</p>
        </div>
        <div className="submissionContainer">
            <p>submission information</p>
        </div>
    </div>
    </>
    );
}

export default ResoWindow;