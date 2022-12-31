function HumanListInput(props) {
    return (
        <textarea onChange={(event) => {
            const listString=event.target.value;
            const list = listString.split(',').filter(str=> {
                return str.trim().length
            }).map(str => {
                return str.trim();
            });
            props.onChange(list)
            console.log(event.target.value)
        }}/>
    )
}
export default HumanListInput;