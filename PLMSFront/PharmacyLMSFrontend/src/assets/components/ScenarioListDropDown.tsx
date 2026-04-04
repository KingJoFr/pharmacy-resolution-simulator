import { type ChangeEvent } from 'react';
import {type Scenario} from './CustomTypes.tsx';
import  {ScenariosArr} from '../../scenarios.tsx';
import type {Dispatch, SetStateAction} from 'react';

// The current scenario is decided by a number called scenarioNumber, which 
// is just the index of the scenario in the ScenariosArr array.
interface DropdownProps {
    
    scenarioNumber: number;
    handleScenarioChange: Dispatch<SetStateAction<number>>;
}


export const ScenarioListDropDown = ({scenarioNumber, handleScenarioChange }: DropdownProps) => {
   
   
    function   handleChange(event: ChangeEvent<HTMLSelectElement>) {
        handleScenarioChange(Number(event.target.value));
    }
    

    return (
        <select value={scenarioNumber}
                onChange={(event: ChangeEvent<HTMLSelectElement>) => handleChange(event)}
        >
                {ScenariosArr.map((scenario: Scenario, index: number) => (
                    <option key={scenario.ID} value={index}>
                        {scenario.ID} {scenario.Description}
                    </option>
                ))}

        </select>
    );
}

export default ScenarioListDropDown;


