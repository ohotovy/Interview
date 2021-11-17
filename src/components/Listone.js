export default function Listone(props) {
  return (
    <div className="first-list">
      {props.firstlist.slice(0, 10).map((estates, index) => (
        <div key={index} className="first-list_det">
          <img src={estates.images[0]}></img>
          <p>
            {estates.name_extracted} {estates.locality}
          </p>
        </div>
      ))}
    </div>
  );
}
