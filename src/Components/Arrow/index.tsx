import arrow from "../../assets/images/icon-arrow.svg";
import "./styles.css";

interface IDownArrow {
  handleCalculateAge: () => void;
}

function DownArrow({ handleCalculateAge }: IDownArrow) {
  return (
    <div className="container-arrow">
      <div className="circle" onClick={handleCalculateAge}>
        <button className="button-arrow">
          <img src={arrow} alt="Ícone de seta para baixo" />
        </button>
      </div>
    </div>
  );
}

export default DownArrow;
