Page({
  data: {
    checkedGoods: ["1", "2", "3"],
    goods: [
      {
        id: "1",
        title: "mac",
        desc: "i7, 1T, 16G",
        price: 1500000,
        num: 1,
        thumb:
          "https://img10.360buyimg.com/n7/s410x410_jfs/t1/117402/40/5319/122863/5eb2c3fcEca38019c/15285049766a8f59.jpg!q70.dpg.webp",
      },
      {
        id: "2",
        title: "mac pro",
        desc: "i7, 1T, 32G",
        price: 1700000,
        num: 1,
        thumb:
          "https://img10.360buyimg.com/n7/s410x410_jfs/t1/117402/40/5319/122863/5eb2c3fcEca38019c/15285049766a8f59.jpg!q70.dpg.webp",
      },
      {
        id: "3",
        title: "mac pro'pro",
        desc: "i9, 2T, 32G",
        price: 2000000,
        num: 1,
        thumb:
          "https://img10.360buyimg.com/n7/s410x410_jfs/t1/117402/40/5319/122863/5eb2c3fcEca38019c/15285049766a8f59.jpg!q70.dpg.webp",
      },
    ],
    totalPrice: 0,
  },
  onLoad: function () {
    const { checkedGoods, goods } = this.data;
    const submitBarText = `结算`;
    const totalPrice = goods.reduce(
      (total, item) =>
        total + (checkedGoods.indexOf(item.id) !== -1 ? item.price : 0),
      0
    );
    goods.forEach((item) => {
      (item as any).formatPrice = (item.price / 100).toFixed(2);
    });
    this.setData({
      totalPrice,
      submitBarText,
      goods,
    });
  },

  onChange(event: any) {
    const { goods } = this.data;
    const checkedGoods = event.detail;
    const totalPrice = goods.reduce(
      (total, item) =>
        total + (checkedGoods.indexOf(item.id) !== -1 ? item.price : 0),
      0
    );
    const submitBarText = checkedGoods.length ? `结算` : "结算";
    this.setData({
      checkedGoods,
      totalPrice,
      submitBarText,
    });
  },

  onSubmit() {
    wx.showToast({
      title: "点击结算",
      icon: "none",
    });
  },
});
