import { useState } from "react";

const Math = () => {
    // useState = hook untuk menyimpan state
    // count = state untuk menyimpan nilai counter
    // setCount = function untuk mengubah nilai count (default valuenya)
    const [count, setCount] = useState(0); 

    // function untuk handle increment, decrement, dan reset counter
    const handleIncrement = () => {
        // alert("ini penjumlahan");
        setCount(count + 1);
    }
    const handleDecrement = () => {
        // alert("ini pengurangan");
        setCount(count - 1);
    }
    const resetCounter = () => {
        // alert("Counter di reset");
        setCount(0);
    }

return (
    <div style={{ display: "flex", gap: "5px",}}>
        <button onClick={handleIncrement}>Tambah</button>
        <p>{count}</p>
        <button onClick={handleDecrement}>Kurang</button>
        <button onClick={resetCounter}>Reset</button>
    </div>
)
};

export default Math;