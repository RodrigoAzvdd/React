export default () => {
    const status = false
    return (
        <h2 style={{
            color: status ? "#80ff9f" : "#f64648"
        }}>
            Current status: {status ? "ON" : "OFF"}
        </h2>
    )
}