// Get photos past 30 days
var today = new Date();
var thirtyDays = [];
var todayFormatted=moment(today).format("YYYY-MM-DD");
console.log(todayFormatted);
var url = [];
var prevDay= moment(today).subtract(1, "days").format("YYYY-MM-DD");
console.log(prevDay);
var count;
for (count=0; count < 8; count++) {
  var prevDay= moment(prevDay).subtract(1, "days").format("YYYY-MM-DD");
thirtyDays.push(prevDay);
  console.log(prevDay);
}
function get(url) {
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Request
    var req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = function() {
      //Check status of request
      if (req.status == 200) {
        // Complete promise with the response text
        resolve(req.response);
      }
      else {
        // Reject error text
        reject(Error(req.statusText));
      }
    };

    // Manage errors
    req.onerror = function() {
      reject(Error("Network Error"));
    };

    // Send the request
    req.send();
  });
}

   //Run Get api url
              var output = "";
              for (i=0; i<thirtyDays.length; i++) {
              currDate = thirtyDays[i];
              get('https://api.nasa.gov/planetary/apod?api_key=lY5L86uXs31eIA8nsAIKth2W3MeSD43RU0kiY5hc&date=' + currDate
              ).then(function(response) {
              return JSON.parse(response);
              }).then(function(response) {
              console.log(response.url);
  //Thirty days list output
              output += `
                      <div class="col-md-6">
                        <div class="well">
                           <img src="${response.url}"/>
                           <div class="caption">
                            <h3 class="text-center">${response.title}</h3>
                              <ul class="form-group">
                                <li class="list-group-item"><strong>Photo Day:</strong>${response.date}</li>
                                <li class="list-group-item">${response.explanation}</li>
                                <li class="list-group-item"><strong>Photo By:</strong>${response.copyright}</li>

                           </div> 
                        </div>
                      </div>
                      `;
                    document.getElementById("photos").innerHTML = output;
                }); 

      }
