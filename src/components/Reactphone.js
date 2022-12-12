import { useState } from "react";
import PhoneInput from "react-phone-number-input/input"

const Reactphone = () => {
  const [value, setValue] = useState();
  return(
    <div>
    <PhoneInput
      placeholder="Phone Number"
      value={value}
      //Not sure about this next line to capture value might have to capture value off state here and send to signup as props
      name="phone_number"
      onChange={setValue}
      defaultCountry="US"
    />
    </div>
  );
};

export default Reactphone;