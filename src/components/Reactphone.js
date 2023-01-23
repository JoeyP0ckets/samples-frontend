import { useState } from "react";
import PhoneInput from "react-phone-number-input/input"
import 'react-phone-number-input/style.css'

const Reactphone = () => {
  const [value, setValue] = useState();
  return(
    <div>
    <PhoneInput
      // style={{}}
      style={{width: "100%", height: "37px", borderRadius: "5px", borderWidth: "1px", border: "1px inset"}}
      placeholder="Phone Number"
      value={value}
      name="phone_number"
      onChange={setValue}
      defaultCountry="US"
    />
    </div>
  );
};

export default Reactphone;