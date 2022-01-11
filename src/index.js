import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import NasaService from './js/nasa-service.js';


function clearFields(){
  $('#search').val("");
  $('#imageToShow').attr("");
}

$('#photoSearch').click(function() {
  let search = $('#search').val();
  clearFields();
  let promise = NasaService.getSearch(search);
  promise.then(function(response){
    const body = JSON.parse(response);
    let imageOfTheDay = body.url;
    $('#imageToShow').attr("src", imageOfTheDay);
  });
});
