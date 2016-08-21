//Apod Christine Brown //

var apodParagraph = document.createElement("p");
var apodText = document.createTextNode("Testing photoss");
apodParagraph.appendChild(apodText);
document.getElementById("photo").appendChild(apodParagraph);

//Setup of API URL

var url= "https://api.nasa.gov/planetary/apod?api_key=oxJ9qwzPgEyyWfrwPpQ7eGuZ12XrisGIOP7E6U4Z&date=2016-08-02";
var promise = $.ajax({
  url: url,
  success: handleResult
});
//Handle the data result
function handleResult(result){
	$( "<h1>" ).text(title ).appendTo( "body" );
  if("copyright" in result) {
    $("#copyright").text("Image Credits: " + result.copyright);
  }
  else {
    $("#copyright").text("Image Credits: " + "Public Domain");
  }
  
  if(result.media_type == "video") {
    $("#apod_img_id").css("display", "none"); 
    $("#apod_vid_id").attr("src", result.url);
  }
  else {
    $("#apod_vid_id").css("display", "none"); 
    $("#apod_img_id").attr("src", result.url);
    $("#apod_img_date").text(result.date);

  
  }
  $("#reqObject").text(url);
  $("#returnObject").text(JSON.stringify(result, null, 4));  
  $("#apod_explaination").text(result.explanation);
  $("#apod_title").text(result.title);
}

//Setup date for past 30 day range 
/*function createPastThirtyDates () {
	var today= new Date();
	//create epoch version of date
	var epochDate = today.getTime()/1000;
	var thirtyDays = [];
	var todayFormatted= moment(today).format("YYYY-MM-DD");
	console.log(todayFormatted);
	return;
}*/
var today = new Date();
var thirtyDays = [];
var todayFormatted=moment(today).format("YYYY-MM-DD");
console.log(todayFormatted);
var prevDay= moment(today).subtract(1, "days").format("YYYY-MM-DD");
console.log(prevDay);
var count;
for (count=0; count < 28; count++) {
  var prevDay= moment(prevDay).subtract(1, "days").format("YYYY-MM-DD");
thirtyDays.push(prevDay);
  console.log(prevDay);
}
for (var i=0; i<thirtyDays.length; i++){
  url.push(thirtyDays[i]);
}


/*function render(url){
	var temp = url.split('/')[0];
	var url =
}
/*Good Test

var today = new Date();
var thirtyDays = [];
var todayFormatted=moment(today).format("YYYY-MM-DD");
console.log(todayFormatted);
var url = [];
var prevDay= moment(today).subtract(1, "days").format("YYYY-MM-DD");
console.log(prevDay);
var count;
for (count=0; count < 28; count++) {
  var prevDay= moment(prevDay).subtract(1, "days").format("YYYY-MM-DD");
thirtyDays.push(prevDay);
  console.log(prevDay);
  */


/* test
var today = new Date();
var thirtyDays = [];
var todayFormatted=moment(today).format("YYYY-MM-DD");
console.log(todayFormatted);
var url = [];
var prevDay= moment(today).subtract(1, "days").format("YYYY-MM-DD");
console.log(prevDay);
thirtyDays.map(function(index, day){
	return {
		prevDay;
		prevDay[0]-prevDay;
	}
});
var prevDay= moment(prevDay).subtract(1, "days").format("YYYY-MM-DD");
console.dir(prevDay);

*/

// Create time format to match NASA yyyy-mm-dd
function formatDate () {
	var photoDate = epoch(today);
}

