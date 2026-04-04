

export const ScenariosArr = 
  [
    {
      "ID": "scenario_1",
      "Description": "bad_days_supply",
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
          "description" : "Invalid Days Supply/Plan Limitations Exceeded"
      },
      "Solution": {
          "quantity": 30,
          "fill_date": "06-01-2024",
          "days_supply": 30,
          "insurance": "UHC"
      },
      "Hint": "Try changing the quantity to 30."
    },
    //Scenario 2
    {
      "ID": "scenario_2",
      "Description": "refill_too_soon",
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


  ];


