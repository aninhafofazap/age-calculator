import arrow from "../../assets/images/icon-arrow.svg";
import "./styles.css";

function DownArrow() {
  return (
    <div className="container-arrow">
      <div className="circle">
        <img src={arrow} alt="Ícone de seta para baixo" />
      </div>
    </div>
  );
}

export default DownArrow;
