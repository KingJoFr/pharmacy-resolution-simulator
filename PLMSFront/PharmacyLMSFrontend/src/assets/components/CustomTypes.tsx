export type AnswerState = {
    quantity: number;
    fillDate: string;
    insurance: string;
  
}

export type RxStatus = 
  | { status: 'Accepted'; message: string }
  | { status: 'Ready' }
  | { status: 'Rejected'; code: string; message: string };

 export type RxAction =
  | {type: 'insuranceChange'; message: string;}
  | {type: 'quantityChange'; message: string;}
  | {type: 'putOnHold';}
  | {type: 'dateChange'; message: string;}
  | {type: 'switchToCash';};

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
  Solution: {
    quantity: number;
    fill_date: string;
    days_supply: number;
    insurance: string;
   
  },
  Hint: string;
};
