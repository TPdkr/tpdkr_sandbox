import FlatPushButton from "../components/FlatPushButton";
import FlatRetroButton from "../components/FlatRetroButton";
import RetroButton from "../components/RetroButton";
import { Link } from "react-router-dom";
import "./Buttons.css";

export default function Buttons() {
  return (
    <>
      <h1>This is a buttons page</h1>
      <div className="buttons-container">
        <FlatRetroButton></FlatRetroButton>
        <RetroButton></RetroButton>
        <FlatPushButton>this is a flat push button</FlatPushButton>
        <FlatPushButton>
          <Link to="/tpdkr_sandbox/com64">this is a link</Link>
        </FlatPushButton>
      </div>
    </>
  );
}
