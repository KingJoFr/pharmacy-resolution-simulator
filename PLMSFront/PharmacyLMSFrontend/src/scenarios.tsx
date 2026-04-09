

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
          "days_supply": 90,
          "fill_date": "06-01-2024",
          "provider": "Dr. Dolittle"
      },
      "Rejection": {
          "code" : "76",
          "description" : "Invalid Days Supply/Plan Limitations Exceeded. Limit is 34 days."
      },
      "Solution": {
          "quantity": 30,
          "fill_date": "06-01-2024",
          "days_supply": 30,
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
          "days_supply": 30,
          "fill_date": "01-20-2026",
          "provider": "Dr. House"
      },
      "Rejection": {
          "code" : "?",
          "description" : "Refill Too Soon. Today's date is 01-20-2026. Previously filled at your pharmacy on 12-27-2025. Next available fill date is 01-26-2026,"
      },
      "Solution": {
          "quantity": 30,
          "fill_date": "01-26-2026",
          "days_supply": 30,
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
          "days_supply": 30,
          "fill_date": "01-01-2026",
          "provider": "Dr. Strange"
      },
      "Rejection": {
          "code" : "76",
          "description" : "Invalid Days Supply. Dose exceeds 0.2 units per day."
      },
      "Solution": {
          "quantity": 6,
          "fill_date": "01-01-2026",
          "days_supply": 30,
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
          "days_supply": 30,
          "fill_date": "01-01-2026",
          "provider": "Dr. Strange"
      },
      "Rejection": {
          "code" : "10",
          "description" : "Missing / Invalid Patient Gender"
      },
      "Solution": {
          "quantity": 6,
          "fill_date": "01-01-2026",
          "days_supply": 30,
          "insurance": "BTX",
          "gender": "Female"
      },
      "Hint": "Try changing the gender",
      "GenderTest": true,
      "AdditionalInfo": "We usually verify with the person picking up the medication if the patient is male or female. Then let them know that the insurance has them labelled incorrectly, and to call their insurance to get it fixed."
    }
  ]