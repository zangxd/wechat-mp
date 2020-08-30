"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getShadow = exports.getBorder = exports.getPadding = exports.getFrame = exports.horizontal = exports.vertical = void 0;
exports.vertical = {
    top: "flex-start",
    center: "center",
    bottom: "flex-end",
};
exports.horizontal = {
    left: "flex-start",
    center: "center",
    right: "flex-end",
};
exports.getFrame = function (frame) {
    var style = "";
    if (frame) {
        var width = frame.width, height = frame.height;
        if (width) {
            style = "width: " + width + "px;";
        }
        if (height) {
            style = style + " height: " + height + "px;";
        }
    }
    return style;
};
exports.getPadding = function (padding) {
    var style = "";
    if (padding === true) {
        style = "padding: 10px;";
    }
    else if (typeof padding === "string") {
        if (padding === "true") {
            style = "padding: 10px;";
        }
        else if (!isNaN(parseInt(padding, 10))) {
            style = "padding: " + padding + "px";
        }
    }
    else {
        style = "padding: " + padding + "px";
    }
    return style;
};
exports.getBorder = function (border) {
    var color = border.color, width = border.width, radius = border.radius;
    var style = "border: " + width + "px solid " + color + ";";
    if (radius) {
        style = style + " border-radius: " + radius + "px;";
    }
};
exports.getShadow = function (shadow) {
    var color = shadow.color, radius = shadow.radius, x = shadow.x, y = shadow.y;
    var style = "box-shadow: " + x + "px " + y + "px " + radius + "px " + color;
    return style;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFPYSxRQUFBLFFBQVEsR0FBRztJQUN0QixHQUFHLEVBQUUsWUFBWTtJQUNqQixNQUFNLEVBQUUsUUFBUTtJQUNoQixNQUFNLEVBQUUsVUFBVTtDQUNuQixDQUFDO0FBRVcsUUFBQSxVQUFVLEdBQUc7SUFDeEIsSUFBSSxFQUFFLFlBQVk7SUFDbEIsTUFBTSxFQUFFLFFBQVE7SUFDaEIsS0FBSyxFQUFFLFVBQVU7Q0FDbEIsQ0FBQztBQUVXLFFBQUEsUUFBUSxHQUFHLFVBQUMsS0FBWTtJQUNuQyxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7SUFFZixJQUFJLEtBQUssRUFBRTtRQUNELElBQUEsS0FBSyxHQUFhLEtBQUssTUFBbEIsRUFBRSxNQUFNLEdBQUssS0FBSyxPQUFWLENBQVc7UUFDaEMsSUFBSSxLQUFLLEVBQUU7WUFDVCxLQUFLLEdBQUcsWUFBVSxLQUFLLFFBQUssQ0FBQztTQUM5QjtRQUNELElBQUksTUFBTSxFQUFFO1lBQ1YsS0FBSyxHQUFNLEtBQUssaUJBQVksTUFBTSxRQUFLLENBQUM7U0FDekM7S0FDRjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyxDQUFDO0FBRVcsUUFBQSxVQUFVLEdBQUcsVUFBQyxPQUFnQztJQUN6RCxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDZixJQUFJLE9BQU8sS0FBSyxJQUFJLEVBQUU7UUFDcEIsS0FBSyxHQUFHLGdCQUFnQixDQUFDO0tBQzFCO1NBQU0sSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLEVBQUU7UUFDdEMsSUFBSSxPQUFPLEtBQUssTUFBTSxFQUFFO1lBQ3RCLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQztTQUMxQjthQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFO1lBQ3hDLEtBQUssR0FBRyxjQUFZLE9BQU8sT0FBSSxDQUFDO1NBQ2pDO0tBQ0Y7U0FBTTtRQUNMLEtBQUssR0FBRyxjQUFZLE9BQU8sT0FBSSxDQUFDO0tBQ2pDO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDLENBQUM7QUFFVyxRQUFBLFNBQVMsR0FBRyxVQUFDLE1BQWM7SUFDOUIsSUFBQSxLQUFLLEdBQW9CLE1BQU0sTUFBMUIsRUFBRSxLQUFLLEdBQWEsTUFBTSxNQUFuQixFQUFFLE1BQU0sR0FBSyxNQUFNLE9BQVgsQ0FBWTtJQUN4QyxJQUFJLEtBQUssR0FBRyxhQUFXLEtBQUssaUJBQVksS0FBSyxNQUFHLENBQUM7SUFDakQsSUFBSSxNQUFNLEVBQUU7UUFDVixLQUFLLEdBQU0sS0FBSyx3QkFBbUIsTUFBTSxRQUFLLENBQUM7S0FDaEQ7QUFDSCxDQUFDLENBQUM7QUFFVyxRQUFBLFNBQVMsR0FBRyxVQUFDLE1BQWM7SUFDOUIsSUFBQSxLQUFLLEdBQW1CLE1BQU0sTUFBekIsRUFBRSxNQUFNLEdBQVcsTUFBTSxPQUFqQixFQUFFLENBQUMsR0FBUSxNQUFNLEVBQWQsRUFBRSxDQUFDLEdBQUssTUFBTSxFQUFYLENBQVk7SUFDdkMsSUFBSSxLQUFLLEdBQUcsaUJBQWUsQ0FBQyxXQUFNLENBQUMsV0FBTSxNQUFNLFdBQU0sS0FBTyxDQUFDO0lBQzdELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHR5cGUgQWxpZ25YID0gXCJsZWZ0XCIgfCBcImNlbnRlclwiIHwgXCJyaWdodFwiO1xuZXhwb3J0IHR5cGUgQWxpZ25ZID0gXCJ0b3BcIiB8IFwiY2VudGVyXCIgfCBcImJvdHRvbVwiO1xuZXhwb3J0IHR5cGUgRnJhbWUgPSB7IHdpZHRoPzogbnVtYmVyOyBoZWlnaHQ/OiBudW1iZXIgfTtcbmV4cG9ydCB0eXBlIEJvcmRlciA9IHsgY29sb3I6IHN0cmluZzsgd2lkdGg6IG51bWJlcjsgcmFkaXVzPzogbnVtYmVyIH07XG5leHBvcnQgdHlwZSBTaGFkb3cgPSB7IGNvbG9yOiBzdHJpbmc7IHJhZGl1czogbnVtYmVyOyB4OiBudW1iZXI7IHk6IG51bWJlciB9O1xuZXhwb3J0IHR5cGUgU3BhY2luZyA9IFwieGxcIiB8IFwibFwiIHwgXCJtXCIgfCBcInNcIiB8IFwieHNcIjtcblxuZXhwb3J0IGNvbnN0IHZlcnRpY2FsID0ge1xuICB0b3A6IFwiZmxleC1zdGFydFwiLFxuICBjZW50ZXI6IFwiY2VudGVyXCIsXG4gIGJvdHRvbTogXCJmbGV4LWVuZFwiLFxufTtcblxuZXhwb3J0IGNvbnN0IGhvcml6b250YWwgPSB7XG4gIGxlZnQ6IFwiZmxleC1zdGFydFwiLFxuICBjZW50ZXI6IFwiY2VudGVyXCIsXG4gIHJpZ2h0OiBcImZsZXgtZW5kXCIsXG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RnJhbWUgPSAoZnJhbWU6IEZyYW1lKSA9PiB7XG4gIGxldCBzdHlsZSA9IFwiXCI7XG5cbiAgaWYgKGZyYW1lKSB7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBmcmFtZTtcbiAgICBpZiAod2lkdGgpIHtcbiAgICAgIHN0eWxlID0gYHdpZHRoOiAke3dpZHRofXB4O2A7XG4gICAgfVxuICAgIGlmIChoZWlnaHQpIHtcbiAgICAgIHN0eWxlID0gYCR7c3R5bGV9IGhlaWdodDogJHtoZWlnaHR9cHg7YDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0eWxlO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFBhZGRpbmcgPSAocGFkZGluZz86IHN0cmluZyB8IHRydWUgfCBudW1iZXIpID0+IHtcbiAgbGV0IHN0eWxlID0gXCJcIjtcbiAgaWYgKHBhZGRpbmcgPT09IHRydWUpIHtcbiAgICBzdHlsZSA9IGBwYWRkaW5nOiAxMHB4O2A7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHBhZGRpbmcgPT09IFwic3RyaW5nXCIpIHtcbiAgICBpZiAocGFkZGluZyA9PT0gXCJ0cnVlXCIpIHtcbiAgICAgIHN0eWxlID0gYHBhZGRpbmc6IDEwcHg7YDtcbiAgICB9IGVsc2UgaWYgKCFpc05hTihwYXJzZUludChwYWRkaW5nLCAxMCkpKSB7XG4gICAgICBzdHlsZSA9IGBwYWRkaW5nOiAke3BhZGRpbmd9cHhgO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGBwYWRkaW5nOiAke3BhZGRpbmd9cHhgO1xuICB9XG4gIHJldHVybiBzdHlsZTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRCb3JkZXIgPSAoYm9yZGVyOiBCb3JkZXIpID0+IHtcbiAgY29uc3QgeyBjb2xvciwgd2lkdGgsIHJhZGl1cyB9ID0gYm9yZGVyO1xuICBsZXQgc3R5bGUgPSBgYm9yZGVyOiAke3dpZHRofXB4IHNvbGlkICR7Y29sb3J9O2A7XG4gIGlmIChyYWRpdXMpIHtcbiAgICBzdHlsZSA9IGAke3N0eWxlfSBib3JkZXItcmFkaXVzOiAke3JhZGl1c31weDtgO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U2hhZG93ID0gKHNoYWRvdzogU2hhZG93KSA9PiB7XG4gIGNvbnN0IHsgY29sb3IsIHJhZGl1cywgeCwgeSB9ID0gc2hhZG93O1xuICBsZXQgc3R5bGUgPSBgYm94LXNoYWRvdzogJHt4fXB4ICR7eX1weCAke3JhZGl1c31weCAke2NvbG9yfWA7XG4gIHJldHVybiBzdHlsZTtcbn07XG4iXX0=