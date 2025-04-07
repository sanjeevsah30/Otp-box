import "./styles.css";
import { useState, useRef, useEffect } from "react";

const otp_digit_count = 5;

export default function App() {
  const [otpArr, setOtpArr] = useState(new Array(otp_digit_count).fill());
  let tempArr;

  useEffect(() => {
    refArr.current[0]?.focus();
  }, []);

  const refArr = useRef([]);
  const handleInput = (value, index) => {
    console.log(otpArr);

    if (isNaN(value)) return;
    const newValue = value.trim();
    let tempArr = [...otpArr];
    tempArr[index] = newValue.slice(-1);
    setOtpArr(tempArr);
    newValue && refArr.current[index + 1]?.focus();
  };

  const handleDown = (e, index) => {
    if (!e.target.value && e.key == "Backspace") {
      refArr.current[index - 1]?.focus();
    }
  };
  return (
    <div className="App">
      <h1>Otp Box</h1>
      {otpArr.map((item, index) => (
        <input
          value={otpArr[index]}
          key={index}
          type="text"
          ref={(input) => (refArr.current[index] = input)}
          onChange={(e) => handleInput(e.target.value, index)}
          onKeyDown={(e) => handleDown(e, index)}
        />
      ))}
    </div>
  );
}
