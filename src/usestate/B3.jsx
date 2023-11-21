const B3 = ({
  onChekInputValue1,
  onChekInputValue2,
  onChekInputValue3,
  onChekInputValue4,
}) => {
  return (
    <div>
      <input type="text" placeholder="B1 ... " onChange={onChekInputValue1} />{" "}
      <br />
      <input type="text" placeholder="B2 ... " onChange={onChekInputValue2} />
      <br />
      <input type="text" placeholder="B3 ... " onChange={onChekInputValue3} />
      <br />
      <input type="text" placeholder="B4 ... " onChange={onChekInputValue4} />
    </div>
  );
};

export default B3;
