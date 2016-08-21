//Begin search functions
$(document).ready(function() {
    //Begin Search function
    $('#search').keyup(function() {
      var searchField = $('#search').val();
      console.log(searchField);
    });
});
              // Good Code Begins
                       //Get past 30 days
                var today = new Date();
                var todayFormatted=moment(today).format("YYYY-MM-DD");
                console.log(todayFormatted);
                var prevDay= moment(today).subtract(1, "days").format("YYYY-MM-DD");
                console.log(prevDay);
                var thirtyDays = [];
                thirtyDays.splice(2,0, todayFormatted, prevDay);
                var count;
                for (count=0; count < 28; count++) {
                  var prevDay= moment(prevDay).subtract(1, "days").format("YYYY-MM-DD");
                  var apodDays = thirtyDays.push(prevDay);
                }

                
            //Get API URL
            function get(url) {
            // Return a new promise.
                return new Promise(function(resolve, reject) {
            // Do the usual XHR stuff
                var req = new XMLHttpRequest();
                req.open('GET', url);
                req.onload = function() {
            // This is called even on 404 etc
            // so check the status
                if (req.status == 200) {
            // Resolve the promise with the response text
                  resolve(req.response);
                }
                else {
            // Otherwise reject with the status text
            // which will hopefully be a meaningful error
                reject(Error(req.statusText));
                }
            };
            // Handle network errors
            req.onerror = function() {
              reject(Error("Network Error"));
            };
            // Make the request
            req.send();
          });
        }
          //Run Get api url
              var output = "";
              for (i=0; i<thirtyDays.length; i++) {
              currDate = thirtyDays[i];
              get('https://api.nasa.gov/planetary/apod?api_key=oxJ9qwzPgEyyWfrwPpQ7eGuZ12XrisGIOP7E6U4Z&date=' + currDate
              ).then(function(response) {
              return JSON.parse(response);
              }).then(function(response) {
        //Thirty days list output
              output += '<li><img src=" '+ response.url + '"' + '/>' + '</li>';
              output +='<h3 class="title">' + response.date + ' ' +  '/' + ' ' + response.copyright + '</h3>';
              output +='<p class="desc">' + response.explanation +'</p>';
                    document.getElementById("photo").innerHTML = output;
                }); 

      }
      //dont use jQuery! no no bad $("#photo").append(output);
      console.log(document.getElementById("photo").innerHTML = output)
      document.getElementById("photo").innerHTML = output;

       


