axios({
    method:'get',
    url:'https://api.unsplash.com/photos/?client_id=5669f9d6a19532660a81476bdc20343fbea356ee73674f2c985d34ede594fdcf'
})
.then((Response)=>{
    console.log(Response);

    var randomNum = Math.floor(Math.random()*9)
    var backImg = Response.data[randomNum].urls.regular;
    console.log(backImg);
   
   $('body').css('background-image', 'url(' + backImg + ')')

})
.catch()


const icons = {
    Clear: '☀',
    Rain: '️🌧',
    Storm: '⛈',
    Snow: '🌨',
    Mist: '🌫',
    Clouds: '☁',
  };

axios({
    method: 'get',
    url: "http://api.openweathermap.org/data/2.5/weather?q=Riyadh&units=metric&APPID=fddde78406af0a2e6faa75a479923d3f"
})
.then((response)=> {
    const city = response.data.name
    const weather = response.data.main.temp
    const weather1 = response.data.weather[0].main
    console.log(response);
    
    $('.weather').append(`<h1>${icons[weather1.toString()]}</h1>`)
    $('.weather').append(`<h1>${weather}</h1>`)
    $('.weather').append(`<h1>${city}</h1>`)
    
})
.catch((error)=>{})



var time = moment().format('LTS');
$('.time').append(`${time}`)

axios({
    method: 'get',
    url:'https://api.quotable.io/random'
})
.then((response)=> {
    var quotemsg= response.data
    console.log(quotemsg);
    
$('footer').append(`${quotemsg.content} ${quotemsg.author} `)
})
.catch((response) => {
   console.log("quote error");
   
})
