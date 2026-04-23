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
    daysSupply: number;
    fillDate: string;
    provider: string;
    price?: string;
  },
  Rejection: {
    code: string;
    description: string;
},
  Solution: {
    quantity: number| string;
    fillDate: string;
    daysSupply: number|string;
    insurance: string;
    gender?: string;
    //f10 form fields below
    diagnosisCode?: string;
    intAuth?: string;
    priorAuthorizationNumber? : number|string;
    thirdPartyDaysSupply?: string | number;
    otherCoverageCode?: string;
    //switchtocasWindow
    switchToCashReason?: string;
   
  },
  Hint: string;
  AdditionalInfo?: string;
  GenderTest?: boolean;
};
