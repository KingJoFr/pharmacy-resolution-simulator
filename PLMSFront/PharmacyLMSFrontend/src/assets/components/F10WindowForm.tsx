interface   F10WindowFormProps {
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;

}
const F10WindowForm = ({ onSubmit }: F10WindowFormProps) => {

    const intAuthOptions = [
        { value: '0', label: '0 not specified' },
        { value: '1', label: '1 Prior Authorization'},
        { value: '2', label: '2 Medical Certification'},
        { value: '3', label: '3 Early Periodic Screening Diagnosis Treatment'},
        { value: '4', label: '4 Exemption from Copay and/or Coinsurance'},
        { vlaue: '5', label: '5 Exemption from RX'},
        { value: '6', label: '6 Family planning Indicator'},
        { value: '7', label: '7 Temporary Assistance for Needy Families (TANF)'},
        { value: '8', label: '8 Payer Defined Exemption'},
        { value: '9', label: '9 Emergency Preparedness'}
      ]

    return(
        <form id="f10Form" onSubmit={onSubmit}>
            <fieldset id="f10Fieldset">
              <legend>F10 Window</legend>
              <label htmlFor="Diagnosis Code">
                Diagnosis Code:<input 
                                    id="Diagnosis Code" 
                                    name="diagnosisCode"/>
              </label>
              <label htmlFor="Int-Auth">Int-Auth Code:
                <select id="Int-Auth" name="intAuth">
                  {intAuthOptions.map(option => (
                    <option key={option.label} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
              <label htmlFor="priorAuthorizationNumber">
                Prior Authorization Number(462):
                <input 
                      id="priorAuthorizationNumber" 
                      name="priorAuthorizationNumber"
                      type="number"
                />
              </label>
              <label htmlFor="otherCoverageCode">
                Other Coverage Code:
                <select 
                      id="otherCoverageCode" 
                      name="otherCoverageCode">
                        <option value="">--blank--</option>
                        <option value="01">01 no other coverage</option>
                        <option value="03">03 Other coverage exists- this claim not covered</option>
                        <option value="08">08 Claim is billing for copay</option> 
                </select>
              </label>
              <label htmlFor="thirdPartyDaysSupply">Third Party Days Supply:
                <input id="thirdPartyDaysSupply"
                       name="thirdPartyDaysSupply" 
                />
              </label>
            </fieldset>
        </form>

)}

export default F10WindowForm;