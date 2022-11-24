import Icon from "../assets/google-maps.png";
function Card(props) {
  return (
    <div className="card-div">
      <img
        src={props.image}
        alt={props.country + " Visit Image"}
        className="card-img"
      />
      <div className="card-content">
        <div className="card-location">
          <img src={Icon} alt="map icon" />
          <h3>{props.country}</h3>
          <p>View of Google Maps</p>
        </div>
        <h1>{props.title}</h1>
        <p className="travel-date">{props.date}</p>
        <p className="description">{props.description}</p>
      </div>
    </div>
  );
}

export default Card;
