export default function ColorCell({ color }) {
  return (
    <td id={color} style={{ backgroundColor: color, padding: "10px" }}>
      {color}
    </td>
  );
}
