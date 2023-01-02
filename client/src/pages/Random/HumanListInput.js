import "./randomStyle.css";

function HumanListInput(props) {
  return (
    <div className="human-list-input-container">
      <label htmlFor="human-list-input">People List Goes Here:</label>
      <textarea
        id="human-list-input"
        onChange={(event) => {
          const listString = event.target.value;
          const list = listString
            .split(",")
            .filter((str) => {
              return str.trim().length;
            })
            .map((str) => {
              return str.trim();
            });
          props.onChange(list);
          console.log(event.target.value);
        }}
      />
    </div>
  );
}
export default HumanListInput;
