export default ({ passwordSize, setPasswordSize }) => {

    return (
        <input
            type="number"
            id="passwordSize"
            min={1}
            value={passwordSize}
            onChange={(ev) => setPasswordSize(ev.target.value) } />
    )
}