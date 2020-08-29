Component({
  properties: {
    frame: Object,
    "align-x": {
      type: String,
      value: "left",
    },
    "align-y": {
      type: String,
      value: "",
    },
    padding: null,
    spacing: null,
    border: Object,
    shadow: Object,
  },

  methods: {
    onClick(event) {
      wx.navigateTo({
        url: event.target.dataset.url,
      });
    },
  },
});
