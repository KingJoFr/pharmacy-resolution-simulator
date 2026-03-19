import { ChangeEvent } from 'react';
import type { Scenario } from '../../App';

interface Option {
    label: string;
    value: string;
}

interface DropdownProps {
    options: Scenario;
    onChange: (value: string) => void;
}
type Ins = {
    name: string;
    policy_number: string;
}

const InsDropDown = ({ options, onChange }: DropdownProps) => {
    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value);
    };

    return (
        <select onChange={handleChange}>
            {options.Patient.insurance.map((ins: Ins) => (
                <option key={ins.policy_number} value={ins.policy_number}>
                    {ins.name} ({ins.policy_number});
                </option>
            ))}

        </select>
    );
}

export default InsDropDown;