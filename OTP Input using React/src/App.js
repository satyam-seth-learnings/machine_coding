import "./styles.css";
import { useState, useRef, useEffect } from "react";

const BOX_COUNT = 6;

export default function App() {
  const [inputArr, setInputArr] = useState(new Array(BOX_COUNT).fill(""));
  const refArr = useRef([]);

  useEffect(() => {
    refArr.current[0]?.focus();
  }, []);

  const handleOnChange = (e, index) => {
    if (isNaN(e.target.value)) return;

    const newArr = [...inputArr];
    const newValue = e.target.value.trim().slice(-1);
    newArr[index] = newValue;

    setInputArr(newArr);
    newValue && refArr.current[index + 1]?.focus();
  };

  const handleOnKyeDown = (e, index) => {
    if (!e.target.value && e.key === "Backspace") {
      refArr.current[index - 1]?.focus();
    }
  };

  return (
    <div className="App">
      <h1>Validate OTP</h1>
      {inputArr.map((inputVal, index) => {
        return (
          <input
            className="otp-input"
            type="text"
            key={index}
            value={inputArr[index]}
            ref={(input) => (refArr.current[index] = input)}
            onChange={(e) => handleOnChange(e, index)}
            onKeyDown={(e) => handleOnKyeDown(e, index)}
          />
        );
      })}
    </div>
  );
}
