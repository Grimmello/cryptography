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

          for (var i = 0; i < (rowLength-2); i++) {
            arrayContainer.push(new Array());
          }
          return rowLength;
        }
//      GET ROW WIDTH
        var parameterRow = inputSquare(arrayLength);
        console.log(parameterRow);

//      FILLS ARRAYS WITH INPUT LETTERS
        for (var x = 0; x < lenSplit.length; x++) {
          debugger;
          var counter = (if (arrayContainer[0].length <= parameterRow) {
            var takeMe = lenSplit.shift();
            arrayContainer[0].push(takeMe);
          } else {
            return takeMe;
          })
        }
      console.log(arrayContainer);
      var encrypted = arrayContainer.join('');
      $("#output").text(arrayContainer).show();
  });
});
