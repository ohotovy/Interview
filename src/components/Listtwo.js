export default function Listtwo(props) {
  return (
    <div className="list-two">
      <div className="big-display-one">
        <img src="https://estate-comparison.codeboot.cz/images/d18-a-sdn-cz/d_18/c_img_gZ_K/L6wFv5-jpeg-fl-res-400-300-3-shr--20-jpg-90.jpeg"></img>
        <p>{props.name}</p>
        <div
          className={
            props.price <= props.pricet ? "green-backgrond " : "red-backgrond "
          }
        >
          <p>Price: </p>
          <p>{props.price}</p>
        </div>
        <div className="neutral">
          <p>Locality: </p>
          <p>{props.location}</p>
        </div>
        <div
          className={
            props.flor >= props.flort ? "green-backgrond " : "red-backgrond "
          }
        >
          <p>Floor area:</p>
          <p>{props.flor}</p>
        </div>
        <div
          className={
            props.land <= props.landt ? "green-backgrond " : "red-backgrond "
          }
        >
          <p>Land area: </p>
          <p>{props.land}</p>
        </div>
      </div>
      <div className="big-display-one">
        <img src="https://estate-comparison.codeboot.cz/images/d18-a-sdn-cz/d_18/c_img_gZ_K/A83Ft7-jpeg-fl-res-400-300-3-shr--20-jpg-90.jpeg"></img>
        <p>{props.namet}</p>
        <div
          className={
            props.price >= props.pricet ? "green-backgrond " : "red-backgrond "
          }
        >
          <p>Price: </p>
          <p>{props.pricet}</p>
        </div>
        <div className="neutral">
          <p>Locality: </p>
          <p>{props.locationt}</p>
        </div>
        <div
          className={
            props.flor <= props.flort ? "green-backgrond " : "red-backgrond "
          }
        >
          <p>Floor area:</p>
          <p>{props.flort}</p>
        </div>
        <div
          className={
            props.land >= props.landt ? "green-backgrond " : "red-backgrond "
          }
        >
          <p>Land area: </p>
          <p>{props.landt}</p>
        </div>
      </div>
    </div>
  );
}
