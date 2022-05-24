export function HousePreview(props) {
const {country, address } = props.stay.loc
const {price, designedBy, imgUrl} = props.stay

  return (
    <div className="house-preview">
      <img
        className="house-preview-img"
        src={imgUrl}
      />
      <h1>{address},{country}</h1>
      <p>Desigened by {designedBy}</p>
      <p>Aug 18 - 25</p>
      <h2>
        {price}$ <span>night</span>
      </h2>
    </div>
  );
}
