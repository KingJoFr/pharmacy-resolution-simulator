

export const ScenariosArr = 
  [
    {
      "ID": "scenario_1",
      "Description": "bad days supply level 1",
      "Patient": {
          "name" : "John Doe",
          "birthdate": "01-01-1980",
          "gender": "Male",
          "insurance" : 
              [
                {
                  "name": "UHC",
                  "policy_number": "123456789"
                },
                {
                  "name": "GRX",
                  "policy_number": "113456789"
                }
              ]
          
      },
      "Medication": {
          "name": "Lisinopril",
          "dosage": "10mg",
          "sig": "Take 1 tablet by mouth once daily",
          "quantity" : 90,
          "daysSupply": 90,
          "fillDate": "06-01-2024",
          "provider": "Dr. Dolittle"
      },
      "Rejection": {
          "code" : "76",
          "description" : "Invalid Days Supply/Plan Limitations Exceeded. Limit is 34 days."
      },
      "Solution": {
          "quantity": 30,
          "fillDate": "06-01-2024",
          "daysSupply": 30,
          "insurance": "UHC"
      },
      "Hint": "Try changing the quantity to 30.",
      "AdditionalInfo": "Even though the insurance allows for a maximum of 34 days supply, by convention we typically dispense a 30 day supply."
    },
    //Scenario 2
    {
      "ID": "scenario_2",
      "Description": "refill too soon level 1",
      "Patient": {
          "name" : "John Doe",
          "birthdate": "01-01-1980",
          "gender": "Male",
          "insurance" : 
              [
                {
                  "name": "UHC",
                  "policy_number": "123456789"
                }
              ]
          
      },
      "Medication": {
          "name": "Atorvastatin",
          "dosage": "10mg",
          "sig": "Take 1 tablet by mouth once daily",
          "quantity" : 30,
          "daysSupply": 30,
          "fillDate": "01-20-2026",
          "provider": "Dr. House"
      },
      "Rejection": {
          "code" : "?",
          "description" : "Refill Too Soon. Today's date is 01-20-2026. Previously filled at your pharmacy on 12-27-2025. Next available fill date is 01-26-2026,"
      },
      "Solution": {
          "quantity": 30,
          "fillDate": "01-26-2026",
          "daysSupply": 30,
          "insurance": "UHC"
      },
      "Hint": "Try changing the fill date."
    },
    //scenario 3
    {
      "ID": "scenario_3",
      "Description": "bad days supply level 2",
      "Patient": {
          "name" : "Jane Doe",
          "birthdate": "01-01-1995",
          "gender": "Female",
          "insurance" : 
              [
                {
                  "name": "BTX",
                  "policy_number": "123456789"
                },
                {
                  "name": "GRX",
                  "policy_number": "113456789"
                },
                {
                  "name": "ESI",
                  "policy_number" : "1223456789"
                }
              ]
          
      },
      "Medication": {
          "name": "Sumatriptan",
          "dosage": "25mg",
          "sig": "Take 1 tablet by mouth at onset of migraine. May repeat in 2 hours if needed. Do not exceed 2 tablets in 24 hours.",
          "quantity" : 30,
          "daysSupply": 30,
          "fillDate": "01-01-2026",
          "provider": "Dr. Strange"
      },
      "Rejection": {
          "code" : "76",
          "description" : "Invalid Days Supply. Dose exceeds 0.2 units per day."
      },
      "Solution": {
          "quantity": 6,
          "fillDate": "01-01-2026",
          "daysSupply": 30,
          "insurance": "BTX"
      },
      "Hint": "Try multiplying 30 days by 0.2 units per day to find the maximum quantity allowed."
    },
    //scenario 4
     {
      "ID": "scenario_4",
      "Description": "bad sex/gender code.",
      "Patient": {
          "name" : "Jane Doe",
          "birthdate": "01-01-1995",
          "gender": "male",
          "insurance" : 
              [
                {
                  "name": "BTX",
                  "policy_number": "123456789"
                },
                {
                  "name": "GRX",
                  "policy_number": "113456789"
                },
                {
                  "name": "ESI",
                  "policy_number" : "1223456789"
                }
              ]
          
      },
      "Medication": {
          "name": "Sumatriptan",
          "dosage": "25mg",
          "sig": "Take 1 tablet by mouth at onset of migraine. May repeat in 2 hours if needed. Do not exceed 2 tablets in 24 hours.",
          "quantity" : 30,
          "daysSupply": 30,
          "fillDate": "01-01-2026",
          "provider": "Dr. Strange"
      },
      "Rejection": {
          "code" : "10",
          "description" : "Missing / Invalid Patient Gender"
      },
      "Solution": {
          "quantity": 6,
          "fillDate": "01-01-2026",
          "daysSupply": 30,
          "insurance": "BTX",
          "gender": "female"
      },
      "Hint": "Try changing the gender",
      "GenderTest": true,
      "AdditionalInfo": "We usually verify with the person picking up the medication if the patient is male or female. Then let them know that the insurance has them labelled incorrectly, and to call their insurance to get it fixed."
    },
    //scenario 5
    {
      "ID": "scenario_5",
      "Description": "bad days supply",
      "Patient": {
          "name" : "Jannie Doe",
          "birthdate": "01-01-2024",
          "gender": "female",
          "insurance" : 
              [
                {
                  "name": "MTX",
                  "policy_number": "123456789"
                },
                {
                  "name": "GRX",
                  "policy_number": "113456789"
                },
                {
                  "name": "ESI",
                  "policy_number" : "1223456789"
                }
              ]
          
      },
      "Medication": {
          "name": "fer-in-sol",
          "dosage": "15mg/1ml",
          "sig": "Give 1ml by mouth once daily",
          "quantity" : 50,
          "daysSupply": 30,
          "fillDate": "01-01-2026",
          "provider": "Dr. Strangelove"
      },
      "Rejection": {
          "code" : "EU/EV",
          "description" : "M/I Prior Authorization Type Code Reject EU/EV vitamin and minerals claims required field int-auth 461 eu=8 and 462 ev=826 not covered for members over 21 years old; submit scc13 if patient has been affected by emergency/ disaster.;"
      },
      "Solution": {
          "quantity": 50,
          "fillDate": "01-01-2026",
          "daysSupply": 30,
          "insurance": "MTX",
          "gender": "female",
          "diagnosisCode": "",
          "intAuth": "8",
          "priorAuthorizationNumber": 826,
          "thirdPartyDaysSupply": "",
          "otherCoverageCode": ""
      },
      "Hint": "You have to input the code in the f10 window form.",
      "AdditionalInfo": "This is a medicaid claim.  Most other insurance will not cover vitamins and minerals or other otc medications."
    },
    //scenario 6
     {
      "ID": "scenario_6",
      "Description": "bad days supply level 3",
      "Patient": {
          "name" : "Johnny Doe",
          "birthdate": "01-01-2026",
          "gender": "male",
          "insurance" : 
              [
                {
                  "name": "MTX",
                  "policy_number": "123456789"
                },
                {
                  "name": "GRX",
                  "policy_number": "113456789"
                },
                {
                  "name": "ESI",
                  "policy_number" : "1223456789"
                }
              ]
          
      },
      "Medication": {
          "name": "fluticasone",
          "dosage": "50mcg",
          "sig": "1 spray in each nostril once daily",
          "quantity" : 16,
          "daysSupply": 60,
          "fillDate": "01-01-2026",
          "provider": "Dr. Phil"
      },
      "Rejection": {
          "code" : "76",
          "description" : "Invalid Days Supply/Plan Limitations Exceeded. Limit is 34 days."
      },
      "Solution": {
          "quantity": 16,
          "fillDate": "01-01-2026",
          "daysSupply": 60,
          "insurance": "MTX",
          "diagnosisCode": "",
          "intAuth": "",
          "priorAuthorizationNumber": "",
          "thirdPartyDaysSupply": "34",
          "otherCoverageCode": ""
      },
      "Hint": "The days supply field is correct. The medication is indivisible so you will have to use the f10 form and enter the maximum days supply allowed into the third party days supply field.",
      "AdditionalInfo": "This is common with inhalers, creams, eyedrops/eardrops, and other medications that come in a fixed quantity that doesn't align with the days supply allowed by the insurance."
    }
  ]