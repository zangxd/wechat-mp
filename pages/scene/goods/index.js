"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Page({
    data: {
        goods: {
            title: "烟台苹果",
            price: 4880,
            formatPrice: "",
            express: "免运费",
            remain: 100,
            thumb: "https://img11.360buyimg.com/n2/s240x240_jfs/t1/88913/14/1277/360157/5dbc0d7eE921d1187/b5b6a9c4a2c58c7b.jpg!q70.jpg",
        },
    },
    onLoad: function () {
        var goods = this.data.goods;
        var formatPrice = "\u00A5" + (goods.price / 100).toFixed(2);
        this.setData({
            goods: __assign(__assign({}, goods), { formatPrice: formatPrice }),
        });
    },
    onClickCart: function () {
        wx.navigateTo({
            url: "/pages/cart/index",
            success: function () { },
            error: function () {
                wx.showToast({
                    icon: "none",
                    title: "打开购物车失败",
                });
            },
        });
    },
    onClickUser: function () {
        wx.navigateTo({
            url: "/pages/user/index",
            success: function () { },
            error: function () {
                wx.showToast({
                    icon: "none",
                    title: "打开个人中心失败",
                });
            },
        });
    },
    onClickButton: function () {
        wx.showToast({
            title: "暂无后续逻辑~",
            icon: "none",
        });
    },
    sorry: function () {
        wx.showToast({
            title: "暂无后续逻辑~",
            icon: "none",
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUU7WUFDTCxLQUFLLEVBQUUsTUFBTTtZQUNiLEtBQUssRUFBRSxJQUFJO1lBQ1gsV0FBVyxFQUFFLEVBQUU7WUFDZixPQUFPLEVBQUUsS0FBSztZQUNkLE1BQU0sRUFBRSxHQUFHO1lBQ1gsS0FBSyxFQUNILG9IQUFvSDtTQUN2SDtLQUNGO0lBQ0QsTUFBTTtRQUNJLElBQUEsS0FBSyxHQUFLLElBQUksQ0FBQyxJQUFJLE1BQWQsQ0FBZTtRQUM1QixJQUFNLFdBQVcsR0FBRyxXQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFHLENBQUM7UUFDekQsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLEtBQUssd0JBQ0EsS0FBSyxLQUNSLFdBQVcsYUFBQSxHQUNaO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVcsRUFBWDtRQUNFLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsbUJBQW1CO1lBQ3hCLE9BQU8sRUFBRSxjQUFPLENBQUM7WUFDakIsS0FBSyxFQUFFO2dCQUNMLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0JBQ1gsSUFBSSxFQUFFLE1BQU07b0JBQ1osS0FBSyxFQUFFLFNBQVM7aUJBQ2pCLENBQUMsQ0FBQztZQUNMLENBQUM7U0FDSyxDQUFDLENBQUM7SUFDWixDQUFDO0lBRUQsV0FBVyxFQUFYO1FBQ0UsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxtQkFBbUI7WUFDeEIsT0FBTyxFQUFFLGNBQU8sQ0FBQztZQUNqQixLQUFLLEVBQUU7Z0JBQ0wsRUFBRSxDQUFDLFNBQVMsQ0FBQztvQkFDWCxJQUFJLEVBQUUsTUFBTTtvQkFDWixLQUFLLEVBQUUsVUFBVTtpQkFDbEIsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztTQUNLLENBQUMsQ0FBQztJQUNaLENBQUM7SUFFRCxhQUFhO1FBQ1gsRUFBRSxDQUFDLFNBQVMsQ0FBQztZQUNYLEtBQUssRUFBRSxTQUFTO1lBQ2hCLElBQUksRUFBRSxNQUFNO1NBQ2IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELEtBQUs7UUFDSCxFQUFFLENBQUMsU0FBUyxDQUFDO1lBQ1gsS0FBSyxFQUFFLFNBQVM7WUFDaEIsSUFBSSxFQUFFLE1BQU07U0FDYixDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBnb29kczoge1xuICAgICAgdGl0bGU6IFwi54Of5Y+w6Iu55p6cXCIsXG4gICAgICBwcmljZTogNDg4MCxcbiAgICAgIGZvcm1hdFByaWNlOiBcIlwiLFxuICAgICAgZXhwcmVzczogXCLlhY3ov5DotLlcIixcbiAgICAgIHJlbWFpbjogMTAwLFxuICAgICAgdGh1bWI6XG4gICAgICAgIFwiaHR0cHM6Ly9pbWcxMS4zNjBidXlpbWcuY29tL24yL3MyNDB4MjQwX2pmcy90MS84ODkxMy8xNC8xMjc3LzM2MDE1Ny81ZGJjMGQ3ZUU5MjFkMTE4Ny9iNWI2YTljNGEyYzU4YzdiLmpwZyFxNzAuanBnXCIsXG4gICAgfSxcbiAgfSxcbiAgb25Mb2FkKCkge1xuICAgIGNvbnN0IHsgZ29vZHMgfSA9IHRoaXMuZGF0YTtcbiAgICBjb25zdCBmb3JtYXRQcmljZSA9IGDCpSR7KGdvb2RzLnByaWNlIC8gMTAwKS50b0ZpeGVkKDIpfWA7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGdvb2RzOiB7XG4gICAgICAgIC4uLmdvb2RzLFxuICAgICAgICBmb3JtYXRQcmljZSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0sXG5cbiAgb25DbGlja0NhcnQoKSB7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6IFwiL3BhZ2VzL2NhcnQvaW5kZXhcIixcbiAgICAgIHN1Y2Nlc3M6ICgpID0+IHt9LFxuICAgICAgZXJyb3I6ICgpID0+IHtcbiAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICBpY29uOiBcIm5vbmVcIixcbiAgICAgICAgICB0aXRsZTogXCLmiZPlvIDotK3nianovablpLHotKVcIixcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgIH0gYXMgYW55KTtcbiAgfSxcblxuICBvbkNsaWNrVXNlcigpIHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogXCIvcGFnZXMvdXNlci9pbmRleFwiLFxuICAgICAgc3VjY2VzczogKCkgPT4ge30sXG4gICAgICBlcnJvcjogKCkgPT4ge1xuICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgIGljb246IFwibm9uZVwiLFxuICAgICAgICAgIHRpdGxlOiBcIuaJk+W8gOS4quS6uuS4reW/g+Wksei0pVwiLFxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgfSBhcyBhbnkpO1xuICB9LFxuXG4gIG9uQ2xpY2tCdXR0b24oKSB7XG4gICAgd3guc2hvd1RvYXN0KHtcbiAgICAgIHRpdGxlOiBcIuaaguaXoOWQjue7remAu+i+kX5cIixcbiAgICAgIGljb246IFwibm9uZVwiLFxuICAgIH0pO1xuICB9LFxuXG4gIHNvcnJ5KCkge1xuICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICB0aXRsZTogXCLmmoLml6DlkI7nu63pgLvovpF+XCIsXG4gICAgICBpY29uOiBcIm5vbmVcIixcbiAgICB9KTtcbiAgfSxcbn0pO1xuIl19