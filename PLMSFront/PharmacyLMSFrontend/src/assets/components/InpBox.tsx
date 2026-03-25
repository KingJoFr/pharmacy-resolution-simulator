import { useEffect, type ChangeEvent } from 'react';
import type {AnswerState} from './CustomTypes.tsx';


interface InpBoxProps {
    label: string;
    id: string;
    type: string;
    value?: string | number;
    inputValue: string | number;
    setInputValue: (value: string | number) => void;
    answerState: AnswerState;
    setAnswer: (answer: AnswerState) => void;
    

}

export const InpBox = ({ value,label, id,type,inputValue,setInputValue,answerState,setAnswer}: InpBoxProps) => {
   console.log("label in inpbox: ", label)
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);

    };
   useEffect(() => {
          setAnswer({...answerState,[label]: inputValue});
          console.log("inputValue after useEffect: ", inputValue);
          console.log("answerState after useEffect: ", answerState);
          console.log("current label",label);
        }, [ label,inputValue]);

    

    
   
  
    return (
        <label htmlFor={id}>
            {label}:
            <input type={type} id={id} defaultValue={value? value.toString() : ""} onChange={handleInputChange} />
        </label>
        
    );
}