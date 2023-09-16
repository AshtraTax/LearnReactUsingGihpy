import "./ViewGif.css";

export default function ViewGif({ params }) {
  const { url } = params;
  console.log(params);
  console.log(url);
  return (
    <div className="ViewGif-content">
      <img src={url} alt={url}></img>
    </div>
  );
}
