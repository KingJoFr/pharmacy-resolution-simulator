import { type ChangeEvent } from 'react';



interface DropdownProps {
    options: Ins[];
    selectedIns: string;
    handleInsuranceChange: (value: string) => void;
}
type Ins = {
    name: string;
    policy_number: string;
}

export const InsDropDown = ({ options,selectedIns, handleInsuranceChange }: DropdownProps) => {
   
   

    

    return (
        <select value={selectedIns}
                onChange={(event: ChangeEvent<HTMLSelectElement>) => handleInsuranceChange(event.target.value)}
        >
                {options.map((ins: Ins) => (
                    <option key={ins.policy_number} value={ins.name}>
                        {ins.name} {ins.policy_number}
                    </option>
                ))}

        </select>
    );
}

export default InsDropDown;


