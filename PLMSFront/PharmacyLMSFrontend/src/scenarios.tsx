

 export const TestScenario1 = {
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
        "fill_date": "2024-06-01",
        "provider": "Dr. Dolittle"
    },
    "Rejection": {
        "code" : "76",
        "description" : "Invalid Days Supply/Plan Limitations Exceeded"
    },
    "Solution": {quantity: 30,
                 fill_date: "2024-06-01",
                 days_supply: 30,
                 insurance: "UHC"
    },
    "Hint": "Try changing the quantity to 30 and days supply to 30"
};


