function Place(name,  notes, timeofYear, landmarks=[], id){
  this.name = name,
  this.landmarks = landmarks,
  this.notes = notes;
  this.timeofYear = timeofYear;
}

$(document).ready(function() {
  var newBook = new LocationBook();
  var notes = [];
  var marks = [];
  $("#placesform").submit(function(event){
    event.preventDefault();
    console.log("asdfasdf");
    newLoc = new Place($("#locname").val(),notes,$("#loctimeOfYear").val(),marks);
    console.log("asdfasdf");
    console.log(newLoc);
    console.log(notes);
    newBook.AddPlace(newLoc);
  });
  $("#noteadd").submit(function(event){
    //$("#locnote").
    event.preventDefault();
    if($("#locnote").val() != "" )
    {
      notes.push($("#locnote").val());
    }
    console.log(notes);
    $("#locnotes").html("")
    notes.forEach(function(y){
      $("#locnotes").append("<div class='note'>" + y + "<br></div>");
    });

  });

  $("#Addlandmark").submit(function(event){
    //$("#locnote").
    event.preventDefault();
    if($("#landmark").val() != "" )
    {
      marks.push($("#landmark").val());
    }
    console.log(landmarks);
    $("#landmarks").html("");
    marks.forEach(function(y){
      $("#landmarks").append("<div class='note'>" + y + "<br></div>");
    });

  });
  console.log("shdfasjghasjklgh");
  refreshLocations(newBook);
});
function refreshLocations(book){
$("#locbook").html("");
newBook.book.forEach(function(y){
  $("#locbook").append(y.printer);

})
}
function LocationBook(book, curId) {
  book = [],
  curId = 0;

}

LocationBook.prototype.AddPlace = function(){
  newBook.book.push(newLoc);
  newLoc.id = curId;
  newBook.curId++;
}
Place.prototype.printer = function(){
var locPrint;
locPrint = "<div>";
locPrint+= this.name;
locPrint+="</div>";
}
