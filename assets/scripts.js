// Get photos past 30 days
const today = moment().format("YYYY-MM-DD");
const thirtyDays = [];
const url = 'https://api.nasa.gov/planetary/apod';
const apiKey = process.env.API_KEY;

for (let i = 0; i < 8; i++) {
  const prevDay = moment(today).subtract(i + 1, "days").format("YYYY-MM-DD");
  thirtyDays.push(prevDay);
}

async function getPhotoData(date) {
  const response = await fetch(`${url}?api_key=${apiKey}&date=${date}`);
  const data = await response.json();
  return data;
}

async function getPhotos() {
  const photoData = await Promise.all(thirtyDays.map(getPhotoData));
  const output = photoData.map(data => `
    <div class="col-md-6">
      <div class="well">
        <img src="${data.url}"/>
        <div class="caption">
          <h3 class="text-center">${data.title}</h3>
          <ul class="form-group">
            <li class="list-group-item"><strong>Photo Day:</strong>${data.date}</li>
            <li class="list-group-item">${data.explanation}</li>
            <li class="list-group-item"><strong>Photo By:</strong>${data.copyrigh}</li>
          </ul>
        </div> 
      </div>
    </div>
  `).join('');
  document.getElementById("photos").innerHTML = output;
}

getPhotos();