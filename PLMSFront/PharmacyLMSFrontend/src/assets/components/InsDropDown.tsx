import { useState, type ChangeEvent } from 'react';
import type { Scenario } from './CustomTypes.tsx';


interface DropdownProps {
    options: Scenario;
    onChange: (value: string) => void;
}
type Ins = {
    name: string;
    policy_number: string;
}

export const InsDropDown = ({ options, onChange }: DropdownProps) => {
    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedIns(event.target.value);
    };

    const [selectedIns, setSelectedIns] = useState<string>(options.Patient.insurance[0].name);

    return (
        <select value={selectedIns}
                onChange={handleChange}>
            {options.Patient.insurance.map((ins: Ins) => (
                <option key={ins.policy_number} value={ins.policy_number}>
                    {ins.name} ({ins.policy_number});
                </option>
            ))}

        </select>
    );
}

export default InsDropDown;


