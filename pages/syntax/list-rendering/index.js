"use strict";
Page({
    data: {
        objectArray: [
            { id: 5, unique: "unique_5" },
            { id: 4, unique: "unique_4" },
            { id: 3, unique: "unique_3" },
            { id: 2, unique: "unique_2" },
            { id: 1, unique: "unique_1" },
            { id: 0, unique: "unique_0" },
        ],
        numberArray: [1, 2, 3, 4],
    },
    switch: function () {
        var length = this.data.objectArray.length;
        for (var i = 0; i < length; ++i) {
            var x = Math.floor(Math.random() * length);
            var y = Math.floor(Math.random() * length);
            var temp = this.data.objectArray[x];
            this.data.objectArray[x] = this.data.objectArray[y];
            this.data.objectArray[y] = temp;
        }
        this.setData({
            objectArray: this.data.objectArray,
        });
    },
    addToFront: function () {
        var length = this.data.objectArray.length;
        this.data.objectArray = [{ id: length, unique: "unique_" + length }].concat(this.data.objectArray);
        this.setData({
            objectArray: this.data.objectArray,
        });
    },
    addNumberToFront: function () {
        this.data.numberArray = [this.data.numberArray.length + 1].concat(this.data.numberArray);
        this.setData({
            numberArray: this.data.numberArray,
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osV0FBVyxFQUFFO1lBQ1gsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUU7WUFDN0IsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUU7WUFDN0IsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUU7WUFDN0IsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUU7WUFDN0IsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUU7WUFDN0IsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUU7U0FDOUI7UUFDRCxXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDMUI7SUFDRCxNQUFNLEVBQUU7UUFDTixJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7UUFDNUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTtZQUMvQixJQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQztZQUM3QyxJQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQztZQUM3QyxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwRCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDakM7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVztTQUNuQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsVUFBVSxFQUFFO1FBQ1YsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO1FBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEdBQUcsTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQ3pFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUN0QixDQUFDO1FBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVc7U0FDbkMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELGdCQUFnQixFQUFFO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FDL0QsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQ3RCLENBQUM7UUFDRixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVztTQUNuQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBvYmplY3RBcnJheTogW1xuICAgICAgeyBpZDogNSwgdW5pcXVlOiBcInVuaXF1ZV81XCIgfSxcbiAgICAgIHsgaWQ6IDQsIHVuaXF1ZTogXCJ1bmlxdWVfNFwiIH0sXG4gICAgICB7IGlkOiAzLCB1bmlxdWU6IFwidW5pcXVlXzNcIiB9LFxuICAgICAgeyBpZDogMiwgdW5pcXVlOiBcInVuaXF1ZV8yXCIgfSxcbiAgICAgIHsgaWQ6IDEsIHVuaXF1ZTogXCJ1bmlxdWVfMVwiIH0sXG4gICAgICB7IGlkOiAwLCB1bmlxdWU6IFwidW5pcXVlXzBcIiB9LFxuICAgIF0sXG4gICAgbnVtYmVyQXJyYXk6IFsxLCAyLCAzLCA0XSxcbiAgfSxcbiAgc3dpdGNoOiBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5kYXRhLm9iamVjdEFycmF5Lmxlbmd0aDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbGVuZ3RoKTtcbiAgICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBsZW5ndGgpO1xuICAgICAgY29uc3QgdGVtcCA9IHRoaXMuZGF0YS5vYmplY3RBcnJheVt4XTtcbiAgICAgIHRoaXMuZGF0YS5vYmplY3RBcnJheVt4XSA9IHRoaXMuZGF0YS5vYmplY3RBcnJheVt5XTtcbiAgICAgIHRoaXMuZGF0YS5vYmplY3RBcnJheVt5XSA9IHRlbXA7XG4gICAgfVxuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBvYmplY3RBcnJheTogdGhpcy5kYXRhLm9iamVjdEFycmF5LFxuICAgIH0pO1xuICB9LFxuICBhZGRUb0Zyb250OiBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5kYXRhLm9iamVjdEFycmF5Lmxlbmd0aDtcbiAgICB0aGlzLmRhdGEub2JqZWN0QXJyYXkgPSBbeyBpZDogbGVuZ3RoLCB1bmlxdWU6IFwidW5pcXVlX1wiICsgbGVuZ3RoIH1dLmNvbmNhdChcbiAgICAgIHRoaXMuZGF0YS5vYmplY3RBcnJheVxuICAgICk7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIG9iamVjdEFycmF5OiB0aGlzLmRhdGEub2JqZWN0QXJyYXksXG4gICAgfSk7XG4gIH0sXG4gIGFkZE51bWJlclRvRnJvbnQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmRhdGEubnVtYmVyQXJyYXkgPSBbdGhpcy5kYXRhLm51bWJlckFycmF5Lmxlbmd0aCArIDFdLmNvbmNhdChcbiAgICAgIHRoaXMuZGF0YS5udW1iZXJBcnJheVxuICAgICk7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIG51bWJlckFycmF5OiB0aGlzLmRhdGEubnVtYmVyQXJyYXksXG4gICAgfSk7XG4gIH0sXG59KTtcbiJdfQ==