import "./styles.css";

function CalculatorResult({
  age,
}: {
  age: { year: number; month: number; day: number };
}) {
  return (
    <div className="age-result">
      {age.year !== 0 || age.month !== 0 || age.day !== 0 ? (
        <p>
          {age.year} years, {age.month} months, {age.day} days
        </p>
      ) : null}
    </div>
  );
}

export default CalculatorResult;
