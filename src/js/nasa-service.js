export default class NasaService {
  static getSearch(date) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const searchURL = `https://api.nasa.gov/planetary/apod?date=${date}&hd=true&api_key=SLRKyXmq1vEUb9HnZ5XjeTEAz7RwP3q4LR9LxZk6`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", searchURL, true);
      request.send();
    });
  }
}
