const Math = () => {
    const handleIncrement = () => {
        alert("ini penjumlahan")
    }
    const handleDecrement = () => {
        alert("ini pengurangan")
    }
    
return (
    <div style={{ display: "flex", gap: "5px",}}>
        <button onClick={handleIncrement}>Tambah</button>
        <p>0</p>
        <button onClick={handleDecrement}>Kurang</button>
    </div>
)
};

export default Math;