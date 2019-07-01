// access ID Ml2Itmz8bia5ZbzTQTSbG
// ${data.weatherPrimary.toLowerCase()}
const key = 'GPoS4kGt7JH1Dz0rgBRsahknUNHypeVurvEYBkOa';
let where = 'Wolsztyn'
const input = document.querySelector('.change-location')
const target = document.querySelector('.card');
const body = document.querySelector('body');
input.addEventListener('submit', e =>{
  e.preventDefault();
  where= input.children[1].value.trim();
  window.onload();
});


window.onload = function() {

    const aeris = new AerisWeather('Ml2Itmz8bia5ZbzTQTSbG', 'GPoS4kGt7JH1Dz0rgBRsahknUNHypeVurvEYBkOa');

    aeris.api().endpoint('observations').place(`${where}, PL`).get().then((result) => {
         const data = result.data.ob;
         //console.log(aeris.api().endpoint('observations').place(`${where}, PL`));
         document.getElementById('temperature').innerHTML = `   ${data.tempC} &deg;C`;
         document.querySelector('h5').innerHTML = ` ${where}`
         document.querySelector('#Wet').src = `https://cdn.aerisapi.com/wxblox/icons/${result.data.ob.icon || 'na.png'}`
         //target.children[0].src = `https://cdn.aerisapi.com/wxblox/icons/${result.data.ob.icon || 'na.png'}`
         if(!result.data.ob.isDay){
           body.style.background = 'url("pic/night.jpg")';
           body.style.backgroundSize = "cover";
         }else{
           body.style.background = 'url("pic/day.jpg")';
           body.style.backgroundSize = "cover";
         };
    });
    const request = aeris.map();
      request.layers('flat,radar,counties,admin');
      request.center(`${where}, PL`).zoom(8);
      request.size(400, 300);
      request.get().then((result) => {
      target.children[0].src = result.image.src;

    });
};
