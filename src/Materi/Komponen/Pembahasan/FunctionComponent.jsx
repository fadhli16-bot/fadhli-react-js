import { useState } from "react";

const FuntionComponent = ({ nama }) => {
  const [value, setValue] = useState(0);

  const handlePlus = () => {
    setValue(value + 1);
  };

  const handleMinus = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  return (
    <div>
      <h1>Mebuat component dengan functional component</h1>
      <h2>Hallo {nama}, selamat belajar</h2>
      <button onClick={handleMinus}>-</button>
      <span>
        {""}
        {value}
        {""}
      </span>
      <button onClick={handlePlus}>+</button>
    </div>
  );
};

// // Jika tidak memiliki nilai props
// FuntionComponent.defaultProps = {
//     nama: 'User'
// }
export default FuntionComponent;
