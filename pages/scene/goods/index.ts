Page({
  data: {
    goods: {
      title: "烟台苹果",
      price: 4880,
      formatPrice: "",
      express: "免运费",
      remain: 100,
      thumb:
        "https://img11.360buyimg.com/n2/s240x240_jfs/t1/88913/14/1277/360157/5dbc0d7eE921d1187/b5b6a9c4a2c58c7b.jpg!q70.jpg",
    },
  },
  onLoad() {
    const { goods } = this.data;
    const formatPrice = `¥${(goods.price / 100).toFixed(2)}`;
    this.setData({
      goods: {
        ...goods,
        formatPrice,
      },
    });
  },

  onClickCart() {
    wx.navigateTo({
      url: "/pages/cart/index",
      success: () => {},
      error: () => {
        wx.showToast({
          icon: "none",
          title: "打开购物车失败",
        });
      },
    } as any);
  },

  onClickUser() {
    wx.navigateTo({
      url: "/pages/user/index",
      success: () => {},
      error: () => {
        wx.showToast({
          icon: "none",
          title: "打开个人中心失败",
        });
      },
    } as any);
  },

  onClickButton() {
    wx.showToast({
      title: "暂无后续逻辑~",
      icon: "none",
    });
  },

  sorry() {
    wx.showToast({
      title: "暂无后续逻辑~",
      icon: "none",
    });
  },
});
