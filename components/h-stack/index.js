"use strict";
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
        onClick: function (event) {
            wx.navigateTo({
                url: event.target.dataset.url,
            });
        },
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxDQUFDO0lBQ1IsVUFBVSxFQUFFO1FBQ1YsS0FBSyxFQUFFLE1BQU07UUFDYixTQUFTLEVBQUU7WUFDVCxJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxNQUFNO1NBQ2Q7UUFDRCxTQUFTLEVBQUU7WUFDVCxJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxFQUFFO1NBQ1Y7UUFDRCxPQUFPLEVBQUUsSUFBSTtRQUNiLE9BQU8sRUFBRSxJQUFJO1FBQ2IsTUFBTSxFQUFFLE1BQU07UUFDZCxNQUFNLEVBQUUsTUFBTTtLQUNmO0lBRUQsT0FBTyxFQUFFO1FBQ1AsT0FBTyxZQUFDLEtBQUs7WUFDWCxFQUFFLENBQUMsVUFBVSxDQUFDO2dCQUNaLEdBQUcsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHO2FBQzlCLENBQUMsQ0FBQztRQUNMLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIkNvbXBvbmVudCh7XG4gIHByb3BlcnRpZXM6IHtcbiAgICBmcmFtZTogT2JqZWN0LFxuICAgIFwiYWxpZ24teFwiOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogXCJsZWZ0XCIsXG4gICAgfSxcbiAgICBcImFsaWduLXlcIjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6IFwiXCIsXG4gICAgfSxcbiAgICBwYWRkaW5nOiBudWxsLFxuICAgIHNwYWNpbmc6IG51bGwsXG4gICAgYm9yZGVyOiBPYmplY3QsXG4gICAgc2hhZG93OiBPYmplY3QsXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIG9uQ2xpY2soZXZlbnQpIHtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGV2ZW50LnRhcmdldC5kYXRhc2V0LnVybCxcbiAgICAgIH0pO1xuICAgIH0sXG4gIH0sXG59KTtcbiJdfQ==