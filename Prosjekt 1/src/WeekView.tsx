import "./WeekView.css";

export default function WeekView() {
  const days = [];

  for (let i = 0; i < 7; i++) {
    days.push(
      <div className="days">
        <p>
          23.05.23 <br /> Mandag
        </p>
        <img src={"icon.png"} className="icon" alt="icon" />
        <p>24 °C</p>
      </div>
    );
  }

  return <div className="week">{days}</div>;
}
