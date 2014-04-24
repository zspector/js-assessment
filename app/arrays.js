if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        var total = 0
        for (i=0; i < arr.length; i++) {
            total += arr[i]
        }
        return total
    },

    remove : function(arr, item) {
        for (i=0; i < arr.length; i++) {
            if (arr[i] === item) {
                arr.splice(i, 1)
            }
        }
        return arr
    },

    removeWithoutCopy : function(arr, item) {
        for (i=0; i < arr.length; i++) {
            if (arr[i] === item) {
                arr.splice(i, 1)
                i -= 1;
            }
        }
        return arr
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        var x = arr.length - 1;
        arr.splice(x);
        return arr;
    },

    prepend : function(arr, item) {
        arr.splice(0, 0, item);
        return arr;
    },

    curtail : function(arr) {
        arr.splice(0, 1);
        return arr;
    },

    concat : function(arr1, arr2) {
        var newArray = arr1.concat(arr2);
        return newArray;
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        //for loop puts elements in arr into newArray
        var newArray = []
        for (i=0; i < arr.length; i++) {
            if (arr[i] === item) {
                newArray.push(item);
            }
        }
        return newArray.length;
    },

    duplicates : function(arr) {

    },

    square : function(arr) {

    },

    findAllOccurrences : function(arr, target) {

    }
  };
});
