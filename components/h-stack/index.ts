import {
  AlignX,
  AlignY,
  horizontal,
  vertical,
  Frame,
  getFrame,
  getPadding,
  Border,
  getBorder,
  Shadow,
  getShadow,
  Spacing,
} from "../common/stack";

Component({
  properties: {
    alignX: {
      type: String,
      value: "left",
      observer(v: AlignX) {
        if (v) {
          const style = `${this.data.baseStyle} justify-content: ${horizontal[v]};`;
          this.setData({ baseStyle: style });
        }
      },
    },
    alignY: {
      type: String,
      value: "center",
      observer(v: AlignY) {
        if (v) {
          const style = `${this.data.baseStyle} align-items: ${vertical[v]};`;
          this.setData({ baseStyle: style });
        }
      },
    },
    frame: {
      type: Object,
      observer(frame: Frame) {
        let style = `${this.data.baseStyle} ${getFrame(frame)}`;
        this.setData({ baseStyle: style });
      },
    },
    padding: {
      type: null,
      observer(padding: boolean | string | number) {
        if (padding) {
          let style = `${this.data.baseStyle} ${getPadding(padding)}`;
          this.setData({ baseStyle: style });
        }
      },
    },
    spacing: {
      type: null,
      observer(spacing: Spacing) {
        if (spacing) {
          let className = `${this.data.className} ${this.data.className}--spacing__${spacing}`;
          this.setData({ className });
        }
      },
    },
    border: {
      type: null,
      observer(border: Border) {
        if (border) {
          let style = `${this.data.baseStyle} ${getBorder(border)}`;
          this.setData({ baseStyle: style });
        }
      },
    },
    shadow: {
      type: null,
      observer(shadow: Shadow) {
        if (shadow) {
          let style = `${this.data.baseStyle} ${getShadow(shadow)}`;
          this.setData({ baseStyle: style });
        }
      },
    },
  },
  data: {
    baseStyle: "",
    className: `mul-hstack`,
  },
  methods: {},
});
