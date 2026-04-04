import './Header.css';
import {ScenarioListDropDown} from './ScenarioListDropDown.tsx';
import type {Dispatch, SetStateAction} from 'react';

interface HeaderProps {
    scenarioNumber: number;
    handleScenarioChange: Dispatch<SetStateAction<number>>;
}

const Header = ({ scenarioNumber, handleScenarioChange }: HeaderProps) => {
    return (
        <ul>
            <li><ScenarioListDropDown scenarioNumber={scenarioNumber} handleScenarioChange={handleScenarioChange}/></li>
            <li>current rx</li>
            <li>tools</li>
        </ul>
    );
}

export default Header;