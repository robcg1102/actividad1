export default function Actions(props) {
  const count = props.count;
  const callOperation = props.callOperation;

  const operation = (value, op) => {
    const updateData = op === "resta" ? value - 1 : value + 1;
    callOperation(updateData)
  };

  return (
    <div>
      <button onClick={(e) => operation(count, "resta")}>Restar</button>
      <button onClick={(e) => operation(count)}>Sumar</button>
    </div>
  );
}
