import "./DetailedWeekView.css";

export default function DetWeekView() {
  

  return (
    <div className="detcomp">
      <div className="detrow">
        <p className="detcell">Dato</p>
        <p className="detcell">Natt</p>
        <p className="detcell">Morgen</p>
        <p className="detcell">Ettermiddag</p>
        <p className="detcell">Kveld</p>
        <p className="detcell">Maks/min. temp.</p>
        <p className="detcell">Nedbør</p>
        <p className="detcell">Vind</p>
      </div>
      <div className="detrow">
        <p className="detcell">Detaljert</p>
        <p className="detcell">Detaljert</p>
      </div>
    </div>
  );
}
