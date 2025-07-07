import FlatPushButton from "../components/FlatPushButton";
import FlatRetroButton from "../components/FlatRetroButton";
import RetroButton from "../components/RetroButton";
import "./Buttons.css";

export default function Buttons() {
  return (
    <>
      <h1>This is a buttons page</h1>
      <div className="buttons-container">
        <FlatRetroButton>This is a flat retro button</FlatRetroButton>
        <RetroButton>This is a simple retro button</RetroButton>
        <FlatPushButton>this is a flat push button</FlatPushButton>
        <FlatPushButton path="/tpdkr_sandbox/com64">
          This is a link
        </FlatPushButton>
      </div>
    </>
  );
}
