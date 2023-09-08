export default function Gif({ title, id, url }) {
  return (
    <div key={id}>
      <h4>{title}</h4>
      <small>{id}</small>
      <img src={url} alt={title} />
    </div>
  );
}
