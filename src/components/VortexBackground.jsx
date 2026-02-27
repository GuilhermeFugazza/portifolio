import { memo } from "react";
import { Vortex } from "./ui/vortex";

const WRAPPER_STYLE = {
  position: "fixed",
  inset: 0,
  left: "50%",
  width: "100vw",
  minWidth: "100vw",
  height: "100svh",
  overflow: "hidden",
  pointerEvents: "none",
  zIndex: -10,
  transform: "translateX(-50%)"
};

const VortexBackground = memo(function VortexBackground() {
  return (
    <div style={WRAPPER_STYLE}>
      <Vortex />
    </div>
  );
});

export default VortexBackground;
