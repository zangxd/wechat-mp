"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stack_1 = require("../common/stack");
Component({
    properties: {
        alignX: {
            type: String,
            value: "left",
            observer: function (v) {
                if (v) {
                    var style = this.data.baseStyle + " justify-content: " + stack_1.horizontal[v] + ";";
                    this.setData({ baseStyle: style });
                }
            },
        },
        alignY: {
            type: String,
            value: "center",
            observer: function (v) {
                if (v) {
                    var style = this.data.baseStyle + " align-items: " + stack_1.vertical[v] + ";";
                    this.setData({ baseStyle: style });
                }
            },
        },
        frame: {
            type: Object,
            observer: function (frame) {
                var style = this.data.baseStyle + " " + stack_1.getFrame(frame);
                this.setData({ baseStyle: style });
            },
        },
        padding: {
            type: null,
            observer: function (padding) {
                if (padding) {
                    var style = this.data.baseStyle + " " + stack_1.getPadding(padding);
                    this.setData({ baseStyle: style });
                }
            },
        },
        spacing: {
            type: null,
            observer: function (spacing) {
                if (spacing) {
                    var className = this.data.className + " " + this.data.className + "--spacing__" + spacing;
                    this.setData({ className: className });
                }
            },
        },
        border: {
            type: null,
            observer: function (border) {
                if (border) {
                    var style = this.data.baseStyle + " " + stack_1.getBorder(border);
                    this.setData({ baseStyle: style });
                }
            },
        },
        shadow: {
            type: null,
            observer: function (shadow) {
                if (shadow) {
                    var style = this.data.baseStyle + " " + stack_1.getShadow(shadow);
                    this.setData({ baseStyle: style });
                }
            },
        },
    },
    data: {
        baseStyle: "",
        className: "mul-hstack",
    },
    methods: {},
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlDQWF5QjtBQUV6QixTQUFTLENBQUM7SUFDUixVQUFVLEVBQUU7UUFDVixNQUFNLEVBQUU7WUFDTixJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxNQUFNO1lBQ2IsUUFBUSxFQUFSLFVBQVMsQ0FBUztnQkFDaEIsSUFBSSxDQUFDLEVBQUU7b0JBQ0wsSUFBTSxLQUFLLEdBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLDBCQUFxQixrQkFBVSxDQUFDLENBQUMsQ0FBQyxNQUFHLENBQUM7b0JBQzFFLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztpQkFDcEM7WUFDSCxDQUFDO1NBQ0Y7UUFDRCxNQUFNLEVBQUU7WUFDTixJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxRQUFRO1lBQ2YsUUFBUSxFQUFSLFVBQVMsQ0FBUztnQkFDaEIsSUFBSSxDQUFDLEVBQUU7b0JBQ0wsSUFBTSxLQUFLLEdBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLHNCQUFpQixnQkFBUSxDQUFDLENBQUMsQ0FBQyxNQUFHLENBQUM7b0JBQ3BFLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztpQkFDcEM7WUFDSCxDQUFDO1NBQ0Y7UUFDRCxLQUFLLEVBQUU7WUFDTCxJQUFJLEVBQUUsTUFBTTtZQUNaLFFBQVEsRUFBUixVQUFTLEtBQVk7Z0JBQ25CLElBQUksS0FBSyxHQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxTQUFJLGdCQUFRLENBQUMsS0FBSyxDQUFHLENBQUM7Z0JBQ3hELElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUNyQyxDQUFDO1NBQ0Y7UUFDRCxPQUFPLEVBQUU7WUFDUCxJQUFJLEVBQUUsSUFBSTtZQUNWLFFBQVEsRUFBUixVQUFTLE9BQWtDO2dCQUN6QyxJQUFJLE9BQU8sRUFBRTtvQkFDWCxJQUFJLEtBQUssR0FBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsU0FBSSxrQkFBVSxDQUFDLE9BQU8sQ0FBRyxDQUFDO29CQUM1RCxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7aUJBQ3BDO1lBQ0gsQ0FBQztTQUNGO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsSUFBSSxFQUFFLElBQUk7WUFDVixRQUFRLEVBQVIsVUFBUyxPQUFnQjtnQkFDdkIsSUFBSSxPQUFPLEVBQUU7b0JBQ1gsSUFBSSxTQUFTLEdBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLFNBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLG1CQUFjLE9BQVMsQ0FBQztvQkFDckYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLFNBQVMsV0FBQSxFQUFFLENBQUMsQ0FBQztpQkFDN0I7WUFDSCxDQUFDO1NBQ0Y7UUFDRCxNQUFNLEVBQUU7WUFDTixJQUFJLEVBQUUsSUFBSTtZQUNWLFFBQVEsRUFBUixVQUFTLE1BQWM7Z0JBQ3JCLElBQUksTUFBTSxFQUFFO29CQUNWLElBQUksS0FBSyxHQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxTQUFJLGlCQUFTLENBQUMsTUFBTSxDQUFHLENBQUM7b0JBQzFELElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztpQkFDcEM7WUFDSCxDQUFDO1NBQ0Y7UUFDRCxNQUFNLEVBQUU7WUFDTixJQUFJLEVBQUUsSUFBSTtZQUNWLFFBQVEsRUFBUixVQUFTLE1BQWM7Z0JBQ3JCLElBQUksTUFBTSxFQUFFO29CQUNWLElBQUksS0FBSyxHQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxTQUFJLGlCQUFTLENBQUMsTUFBTSxDQUFHLENBQUM7b0JBQzFELElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztpQkFDcEM7WUFDSCxDQUFDO1NBQ0Y7S0FDRjtJQUNELElBQUksRUFBRTtRQUNKLFNBQVMsRUFBRSxFQUFFO1FBQ2IsU0FBUyxFQUFFLFlBQVk7S0FDeEI7SUFDRCxPQUFPLEVBQUUsRUFBRTtDQUNaLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFsaWduWCxcbiAgQWxpZ25ZLFxuICBob3Jpem9udGFsLFxuICB2ZXJ0aWNhbCxcbiAgRnJhbWUsXG4gIGdldEZyYW1lLFxuICBnZXRQYWRkaW5nLFxuICBCb3JkZXIsXG4gIGdldEJvcmRlcixcbiAgU2hhZG93LFxuICBnZXRTaGFkb3csXG4gIFNwYWNpbmcsXG59IGZyb20gXCIuLi9jb21tb24vc3RhY2tcIjtcblxuQ29tcG9uZW50KHtcbiAgcHJvcGVydGllczoge1xuICAgIGFsaWduWDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6IFwibGVmdFwiLFxuICAgICAgb2JzZXJ2ZXIodjogQWxpZ25YKSB7XG4gICAgICAgIGlmICh2KSB7XG4gICAgICAgICAgY29uc3Qgc3R5bGUgPSBgJHt0aGlzLmRhdGEuYmFzZVN0eWxlfSBqdXN0aWZ5LWNvbnRlbnQ6ICR7aG9yaXpvbnRhbFt2XX07YDtcbiAgICAgICAgICB0aGlzLnNldERhdGEoeyBiYXNlU3R5bGU6IHN0eWxlIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0sXG4gICAgYWxpZ25ZOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogXCJjZW50ZXJcIixcbiAgICAgIG9ic2VydmVyKHY6IEFsaWduWSkge1xuICAgICAgICBpZiAodikge1xuICAgICAgICAgIGNvbnN0IHN0eWxlID0gYCR7dGhpcy5kYXRhLmJhc2VTdHlsZX0gYWxpZ24taXRlbXM6ICR7dmVydGljYWxbdl19O2A7XG4gICAgICAgICAgdGhpcy5zZXREYXRhKHsgYmFzZVN0eWxlOiBzdHlsZSB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9LFxuICAgIGZyYW1lOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICBvYnNlcnZlcihmcmFtZTogRnJhbWUpIHtcbiAgICAgICAgbGV0IHN0eWxlID0gYCR7dGhpcy5kYXRhLmJhc2VTdHlsZX0gJHtnZXRGcmFtZShmcmFtZSl9YDtcbiAgICAgICAgdGhpcy5zZXREYXRhKHsgYmFzZVN0eWxlOiBzdHlsZSB9KTtcbiAgICAgIH0sXG4gICAgfSxcbiAgICBwYWRkaW5nOiB7XG4gICAgICB0eXBlOiBudWxsLFxuICAgICAgb2JzZXJ2ZXIocGFkZGluZzogYm9vbGVhbiB8IHN0cmluZyB8IG51bWJlcikge1xuICAgICAgICBpZiAocGFkZGluZykge1xuICAgICAgICAgIGxldCBzdHlsZSA9IGAke3RoaXMuZGF0YS5iYXNlU3R5bGV9ICR7Z2V0UGFkZGluZyhwYWRkaW5nKX1gO1xuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7IGJhc2VTdHlsZTogc3R5bGUgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSxcbiAgICBzcGFjaW5nOiB7XG4gICAgICB0eXBlOiBudWxsLFxuICAgICAgb2JzZXJ2ZXIoc3BhY2luZzogU3BhY2luZykge1xuICAgICAgICBpZiAoc3BhY2luZykge1xuICAgICAgICAgIGxldCBjbGFzc05hbWUgPSBgJHt0aGlzLmRhdGEuY2xhc3NOYW1lfSAke3RoaXMuZGF0YS5jbGFzc05hbWV9LS1zcGFjaW5nX18ke3NwYWNpbmd9YDtcbiAgICAgICAgICB0aGlzLnNldERhdGEoeyBjbGFzc05hbWUgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSxcbiAgICBib3JkZXI6IHtcbiAgICAgIHR5cGU6IG51bGwsXG4gICAgICBvYnNlcnZlcihib3JkZXI6IEJvcmRlcikge1xuICAgICAgICBpZiAoYm9yZGVyKSB7XG4gICAgICAgICAgbGV0IHN0eWxlID0gYCR7dGhpcy5kYXRhLmJhc2VTdHlsZX0gJHtnZXRCb3JkZXIoYm9yZGVyKX1gO1xuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7IGJhc2VTdHlsZTogc3R5bGUgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSxcbiAgICBzaGFkb3c6IHtcbiAgICAgIHR5cGU6IG51bGwsXG4gICAgICBvYnNlcnZlcihzaGFkb3c6IFNoYWRvdykge1xuICAgICAgICBpZiAoc2hhZG93KSB7XG4gICAgICAgICAgbGV0IHN0eWxlID0gYCR7dGhpcy5kYXRhLmJhc2VTdHlsZX0gJHtnZXRTaGFkb3coc2hhZG93KX1gO1xuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7IGJhc2VTdHlsZTogc3R5bGUgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgZGF0YToge1xuICAgIGJhc2VTdHlsZTogXCJcIixcbiAgICBjbGFzc05hbWU6IGBtdWwtaHN0YWNrYCxcbiAgfSxcbiAgbWV0aG9kczoge30sXG59KTtcbiJdfQ==