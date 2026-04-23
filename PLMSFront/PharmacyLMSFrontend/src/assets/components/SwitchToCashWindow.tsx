
interface SwitchToCashProps{
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const SwitchToCashWindow = ({onSubmit}:SwitchToCashProps) => {
    return(

        <form id="switchToCash" onSubmit={onSubmit} >
            <fieldset>
                <legend>Switch to Cash Reason</legend>
                <select name="switchToCashReason">
                    <option value=""> Select a reason</option>
                    <option value="medicationNotCovered">Medication Not Covered</option>
                    <option value="patientNotCovered">Patient Not Covered</option>
                    <option value="request"> Patient Request</option>
                </select>
            </fieldset>
        </form>
    )
}

export default SwitchToCashWindow;