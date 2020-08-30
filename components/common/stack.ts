export type AlignX = "left" | "center" | "right";
export type AlignY = "top" | "center" | "bottom";
export type Frame = { width?: number; height?: number };
export type Border = { color: string; width: number; radius?: number };
export type Shadow = { color: string; radius: number; x: number; y: number };
export type Spacing = "xl" | "l" | "m" | "s" | "xs";

export const vertical = {
  top: "flex-start",
  center: "center",
  bottom: "flex-end",
};

export const horizontal = {
  left: "flex-start",
  center: "center",
  right: "flex-end",
};

export const getFrame = (frame: Frame) => {
  let style = "";

  if (frame) {
    const { width, height } = frame;
    if (width) {
      style = `width: ${width}px;`;
    }
    if (height) {
      style = `${style} height: ${height}px;`;
    }
  }
  return style;
};

export const getPadding = (padding?: string | true | number) => {
  let style = "";
  if (padding === true) {
    style = `padding: 10px;`;
  } else if (typeof padding === "string") {
    if (padding === "true") {
      style = `padding: 10px;`;
    } else if (!isNaN(parseInt(padding, 10))) {
      style = `padding: ${padding}px`;
    }
  } else {
    style = `padding: ${padding}px`;
  }
  return style;
};

export const getBorder = (border: Border) => {
  const { color, width, radius } = border;
  let style = `border: ${width}px solid ${color};`;
  if (radius) {
    style = `${style} border-radius: ${radius}px;`;
  }
};

export const getShadow = (shadow: Shadow) => {
  const { color, radius, x, y } = shadow;
  let style = `box-shadow: ${x}px ${y}px ${radius}px ${color}`;
  return style;
};
