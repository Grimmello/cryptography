var arrayContainer = [];
var beta = 0;
$(function(){
  $("form#crypto").submit(function(event) {
    event.preventDefault();
      var len = $("input#input").val();
      var lenSplit = len.split('');
      var arrayLength = lenSplit.length;
      console.log(arrayLength);

//      START OF FUNCTION
      function inputSquare (valueInput){
        var rowLength = Math.sqrt(arrayLength);
//       FINDS IF EVEN SQUARE
        if (Number.isInteger(rowLength) === true){
          console.log("is integer");

          for (var i = 0; i < (rowLength); i++) {
            arrayContainer.push(new Array());
          }
          return rowLength;
        }

//      PERFORMS THIS IF NO PERFECT SQUARE
        else
          var rowLength = Math.floor(rowLength+1);
          console.log("is not integer: " + rowLength)

          for (var i = 0; i < (rowLength-1); i++) {
            arrayContainer.push(new Array());
          }
          return rowLength;
        }
//      GET ROW WIDTH
        var parameterRow = inputSquare(arrayLength);
        console.log(parameterRow);

//      FILLS ARRAYS WITH INPUT LETTERS
        var lenSplit2 = lenSplit.map(function(repeat) {
          return repeat;
        });
        console.log(lenSplit2);
        for (var x = 0; x < lenSplit.length; x++) {
          debugger;
          if (arrayContainer[0].length < parameterRow) {
            var takeMe = lenSplit2.shift();
            arrayContainer[0].push(takeMe);
          } else if (arrayContainer[1].length < parameterRow) {
            var takeMe2 = lenSplit2.shift();
            arrayContainer[1].push(takeMe2);
          }
        }
      console.log(arrayContainer);
      var encrypted = arrayContainer.join('');
      $("#output").text(arrayContainer).show();
  });
});
