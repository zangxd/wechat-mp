"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stack_1 = require("../common/stack");
Component({
    options: {
        multipleSlots: true,
    },
    properties: {
        alignX: {
            type: String,
            value: "left",
            observer: function (v) {
                if (v) {
                    var style = this.data.baseStyle + " align-items: " + stack_1.horizontal[v] + ";";
                    this.setData({ baseStyle: style });
                }
            },
        },
        alignY: {
            type: String,
            value: "center",
            observer: function (v) {
                if (v) {
                    var style = this.data.baseStyle + " justify-content: " + stack_1.vertical[v] + ";";
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
            type: String,
            observer: function (spacing) {
                if (spacing) {
                    var className = this.data.className + " " + this.data.className + "--spacing__" + spacing;
                    this.setData({ className: className });
                }
            },
        },
        border: {
            type: Object,
            observer: function (border) {
                if (border) {
                    var style = this.data.baseStyle + " " + stack_1.getBorder(border);
                    this.setData({ baseStyle: style });
                }
            },
        },
        shadow: {
            type: Object,
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
        className: "mul-vstack",
    },
    methods: {},
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlDQWF5QjtBQUV6QixTQUFTLENBQUM7SUFDUixPQUFPLEVBQUU7UUFDUCxhQUFhLEVBQUUsSUFBSTtLQUNwQjtJQUNELFVBQVUsRUFBRTtRQUNWLE1BQU0sRUFBRTtZQUNOLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLE1BQU07WUFDYixRQUFRLEVBQUUsVUFBVSxDQUFTO2dCQUMzQixJQUFJLENBQUMsRUFBRTtvQkFDTCxJQUFNLEtBQUssR0FBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsc0JBQWlCLGtCQUFVLENBQUMsQ0FBQyxDQUFDLE1BQUcsQ0FBQztvQkFDdEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO2lCQUNwQztZQUNILENBQUM7U0FDRjtRQUNELE1BQU0sRUFBRTtZQUNOLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLFFBQVE7WUFDZixRQUFRLEVBQVIsVUFBUyxDQUFTO2dCQUNoQixJQUFJLENBQUMsRUFBRTtvQkFDTCxJQUFNLEtBQUssR0FBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsMEJBQXFCLGdCQUFRLENBQUMsQ0FBQyxDQUFDLE1BQUcsQ0FBQztvQkFDeEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO2lCQUNwQztZQUNILENBQUM7U0FDRjtRQUNELEtBQUssRUFBRTtZQUNMLElBQUksRUFBRSxNQUFNO1lBQ1osUUFBUSxFQUFSLFVBQVMsS0FBWTtnQkFDbkIsSUFBSSxLQUFLLEdBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLFNBQUksZ0JBQVEsQ0FBQyxLQUFLLENBQUcsQ0FBQztnQkFDeEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQ3JDLENBQUM7U0FDRjtRQUNELE9BQU8sRUFBRTtZQUNQLElBQUksRUFBRSxJQUFJO1lBQ1YsUUFBUSxFQUFSLFVBQVMsT0FBa0M7Z0JBQ3pDLElBQUksT0FBTyxFQUFFO29CQUNYLElBQUksS0FBSyxHQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxTQUFJLGtCQUFVLENBQUMsT0FBTyxDQUFHLENBQUM7b0JBQzVELElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztpQkFDcEM7WUFDSCxDQUFDO1NBQ0Y7UUFDRCxPQUFPLEVBQUU7WUFDUCxJQUFJLEVBQUUsTUFBTTtZQUNaLFFBQVEsRUFBUixVQUFTLE9BQWdCO2dCQUN2QixJQUFJLE9BQU8sRUFBRTtvQkFDWCxJQUFJLFNBQVMsR0FBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsU0FBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsbUJBQWMsT0FBUyxDQUFDO29CQUNyRixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsU0FBUyxXQUFBLEVBQUUsQ0FBQyxDQUFDO2lCQUM3QjtZQUNILENBQUM7U0FDRjtRQUNELE1BQU0sRUFBRTtZQUNOLElBQUksRUFBRSxNQUFNO1lBQ1osUUFBUSxFQUFSLFVBQVMsTUFBYztnQkFDckIsSUFBSSxNQUFNLEVBQUU7b0JBQ1YsSUFBSSxLQUFLLEdBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLFNBQUksaUJBQVMsQ0FBQyxNQUFNLENBQUcsQ0FBQztvQkFDMUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO2lCQUNwQztZQUNILENBQUM7U0FDRjtRQUNELE1BQU0sRUFBRTtZQUNOLElBQUksRUFBRSxNQUFNO1lBQ1osUUFBUSxFQUFSLFVBQVMsTUFBYztnQkFDckIsSUFBSSxNQUFNLEVBQUU7b0JBQ1YsSUFBSSxLQUFLLEdBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLFNBQUksaUJBQVMsQ0FBQyxNQUFNLENBQUcsQ0FBQztvQkFDMUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO2lCQUNwQztZQUNILENBQUM7U0FDRjtLQUNGO0lBQ0QsSUFBSSxFQUFFO1FBQ0osU0FBUyxFQUFFLEVBQUU7UUFDYixTQUFTLEVBQUUsWUFBWTtLQUN4QjtJQUNELE9BQU8sRUFBRSxFQUFFO0NBQ1osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWxpZ25YLFxuICBBbGlnblksXG4gIGhvcml6b250YWwsXG4gIHZlcnRpY2FsLFxuICBGcmFtZSxcbiAgZ2V0RnJhbWUsXG4gIGdldFBhZGRpbmcsXG4gIEJvcmRlcixcbiAgZ2V0Qm9yZGVyLFxuICBTaGFkb3csXG4gIGdldFNoYWRvdyxcbiAgU3BhY2luZyxcbn0gZnJvbSBcIi4uL2NvbW1vbi9zdGFja1wiO1xuXG5Db21wb25lbnQoe1xuICBvcHRpb25zOiB7XG4gICAgbXVsdGlwbGVTbG90czogdHJ1ZSxcbiAgfSxcbiAgcHJvcGVydGllczoge1xuICAgIGFsaWduWDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6IFwibGVmdFwiLFxuICAgICAgb2JzZXJ2ZXI6IGZ1bmN0aW9uICh2OiBBbGlnblgpIHtcbiAgICAgICAgaWYgKHYpIHtcbiAgICAgICAgICBjb25zdCBzdHlsZSA9IGAke3RoaXMuZGF0YS5iYXNlU3R5bGV9IGFsaWduLWl0ZW1zOiAke2hvcml6b250YWxbdl19O2A7XG4gICAgICAgICAgdGhpcy5zZXREYXRhKHsgYmFzZVN0eWxlOiBzdHlsZSB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9LFxuICAgIGFsaWduWToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6IFwiY2VudGVyXCIsXG4gICAgICBvYnNlcnZlcih2OiBBbGlnblkpIHtcbiAgICAgICAgaWYgKHYpIHtcbiAgICAgICAgICBjb25zdCBzdHlsZSA9IGAke3RoaXMuZGF0YS5iYXNlU3R5bGV9IGp1c3RpZnktY29udGVudDogJHt2ZXJ0aWNhbFt2XX07YDtcbiAgICAgICAgICB0aGlzLnNldERhdGEoeyBiYXNlU3R5bGU6IHN0eWxlIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0sXG4gICAgZnJhbWU6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIG9ic2VydmVyKGZyYW1lOiBGcmFtZSkge1xuICAgICAgICBsZXQgc3R5bGUgPSBgJHt0aGlzLmRhdGEuYmFzZVN0eWxlfSAke2dldEZyYW1lKGZyYW1lKX1gO1xuICAgICAgICB0aGlzLnNldERhdGEoeyBiYXNlU3R5bGU6IHN0eWxlIH0pO1xuICAgICAgfSxcbiAgICB9LFxuICAgIHBhZGRpbmc6IHtcbiAgICAgIHR5cGU6IG51bGwsXG4gICAgICBvYnNlcnZlcihwYWRkaW5nOiBib29sZWFuIHwgc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgICAgIGlmIChwYWRkaW5nKSB7XG4gICAgICAgICAgbGV0IHN0eWxlID0gYCR7dGhpcy5kYXRhLmJhc2VTdHlsZX0gJHtnZXRQYWRkaW5nKHBhZGRpbmcpfWA7XG4gICAgICAgICAgdGhpcy5zZXREYXRhKHsgYmFzZVN0eWxlOiBzdHlsZSB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9LFxuICAgIHNwYWNpbmc6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIG9ic2VydmVyKHNwYWNpbmc6IFNwYWNpbmcpIHtcbiAgICAgICAgaWYgKHNwYWNpbmcpIHtcbiAgICAgICAgICBsZXQgY2xhc3NOYW1lID0gYCR7dGhpcy5kYXRhLmNsYXNzTmFtZX0gJHt0aGlzLmRhdGEuY2xhc3NOYW1lfS0tc3BhY2luZ19fJHtzcGFjaW5nfWA7XG4gICAgICAgICAgdGhpcy5zZXREYXRhKHsgY2xhc3NOYW1lIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0sXG4gICAgYm9yZGVyOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICBvYnNlcnZlcihib3JkZXI6IEJvcmRlcikge1xuICAgICAgICBpZiAoYm9yZGVyKSB7XG4gICAgICAgICAgbGV0IHN0eWxlID0gYCR7dGhpcy5kYXRhLmJhc2VTdHlsZX0gJHtnZXRCb3JkZXIoYm9yZGVyKX1gO1xuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7IGJhc2VTdHlsZTogc3R5bGUgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSxcbiAgICBzaGFkb3c6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIG9ic2VydmVyKHNoYWRvdzogU2hhZG93KSB7XG4gICAgICAgIGlmIChzaGFkb3cpIHtcbiAgICAgICAgICBsZXQgc3R5bGUgPSBgJHt0aGlzLmRhdGEuYmFzZVN0eWxlfSAke2dldFNoYWRvdyhzaGFkb3cpfWA7XG4gICAgICAgICAgdGhpcy5zZXREYXRhKHsgYmFzZVN0eWxlOiBzdHlsZSB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBkYXRhOiB7XG4gICAgYmFzZVN0eWxlOiBcIlwiLFxuICAgIGNsYXNzTmFtZTogYG11bC12c3RhY2tgLFxuICB9LFxuICBtZXRob2RzOiB7fSxcbn0pO1xuIl19