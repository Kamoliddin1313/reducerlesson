import B2 from "./B2";

const B1 = ({
  onChekInputValue1,
  onChekInputValue2,
  onChekInputValue3,
  onChekInputValue4,
}) => {
  return (
    <div>
      <h1>
        <B2
          onChekInputValue1={onChekInputValue1}
          onChekInputValue2={onChekInputValue2}
          onChekInputValue3={onChekInputValue3}
          onChekInputValue4={onChekInputValue4}
        />
      </h1>
    </div>
  );
};

export default B1;
