export default ({ customSize, setCustomSize }) => {
    return (
        <input
            type="number"
            id="passwordSize"
            min={1}
            value={customSize}
            onChange={(ev) => setCustomSize(ev.target.value)}
        />
    )
}