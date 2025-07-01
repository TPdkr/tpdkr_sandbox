export default function ColorCell({ color, children }) {
  return (
    <td id={color} style={{ backgroundColor: color, padding: "10px" }}>
      {color}
      {children}
    </td>
  );
}
