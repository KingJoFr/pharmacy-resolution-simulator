
import {useState} from 'react';
import './App.css';
import Header from './assets/components/Header';
import ResoWindow from './assets/components/ResoWindow';



type RxStatus = 
  | { status: 'Accepted'; message: string }
  | { status: 'Ready' }
  | { status: 'Rejected'; code: string; message: string };

 type RxAction =
  | {type: 'insuranceChange'; message: string;}
  | {type: 'quantityChange'; message: string;}
  | {type: 'putOnHold';}
  | {type: 'dateChange'; message: string;}
  | {type: 'switchToCash';};

  /*enum RxActionType {
  insuranceChange = 'insuranceChange',
  quantityChange = 'quantityChange',
  putOnHold = 'putOnHold',
  dateChange = 'dateChange',
  switchToCash = 'switchToCash'
}*/

export type Insurance ={
  name: string;
  policy_number: string;
}

export type Scenario = {
  ID: string,
  Description: string,
  Patient: {
    name: string;
    birthdate: string;
    gender: string;
    insurance: Insurance[];
  },
  Medication: {
    name: string;
    dosage: string;
    sig: string;
    quantity: number;
    days_supply: number;
    fill_date: string;
    provider: string;
  },
  Rejection: {
    code: string;
    description: string;
},
  Solution: RxAction;
  Hint: string;
};

const TestScenario1: Scenario = {
    "ID": "scenario_1",
    "Description": "bad_days_supply",
    "Patient": {
        "name" : "John Doe",
        "birthdate": "1980-01-01",
        "gender": "Male",
        "insurance" : 
            [
              {
                "name": "UHC",
                "policy_number": "123456789"
              },
              {
                "name": "GRX",
                "policy_number": "123456789"
              }
            ]
        
    },
    "Medication": {
        "name": "Lisinopril",
        "dosage": "10mg",
        "sig": "Take 1 tablet by mouth once daily",
        "quantity" : 90,
        "days_supply": 90,
        "fill_date": "2024-06-01",
        "provider": "Dr. Dolittle"
    },
    "Rejection": {
        "code" : "76",
        "description" : "Invalid Days Supply/Plan Limitations Exceeded"
    },
    "Solution": {type: "quantityChange", message: "30"},
    "Hint": "Try changing the quantity to 30 and days supply to 30"
};

/*function rxReducer(state: RxStatus, action: RxAction): RxStatus {
  switch (action.type) {
    case '':  
*/
export type PtAge ={
  age: number;
}

function App() {

  const JohnAge: PtAge = {
  age: 44
  };
  const [rxState, setRxState] = useState<RxStatus>({ status: 'Ready' });

  return (
    <>
      <p>description:   {TestScenario1.Description}</p>
      <div className="App">
        <Header />
        <ResoWindow testScenario={TestScenario1} />
      </div>
    </>
  )
}

export default App
