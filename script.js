$(document).ready(function(){
  init()
  function init(){
    
    var url ="https://api.covid19api.com/summary"
    var data =''

    $.get(url, function(data){
    console.log(data.Global)

      data =`
      <td>${data.Global.TotalConfirmed}</td>
      <td>${data.Global.TotalDeaths}</td>
      <td>${data.Global.TotalRecovered}</td>
      `
      $("#data").html(data)

    })
  }
})


 
$(document).ready(function(){
  init()
  function init(){
    
    var url ="https://api.covid19api.com/summary"
    var dataTwo =''
    

    $.get(url, function(data){
    console.log(data.Countries)

      data =`

      <td>${data.Countries[0].TotalConfirmed}</td>
      <td>${data.Countries[0].TotalDeaths}</td>
      <td>${data.Countries[0].TotalRecovered}</td>
      `
      $("#data-2").html(data)

    })
  }
})

  $(document).ready(function(){
  init()
  function init(){
    
    var url ="https://api.covid19api.com/summary"
    var dataThree =''

    $.get(url, function(data){
    console.log(data.Countries)

      data =`
      <td>${data.Countries[11].TotalConfirmed}</td>
      <td>${data.Countries[11].TotalDeaths}</td>
      <td>${data.Countries[11].TotalRecovered}</td>
      `
      $("#data-3").html(data)

    })
  }
})

$(document).ready(function(){
  init()
  function init(){
    
    var url ="https://api.covid19api.com/summary"
    var dataFour =''

    $.get(url, function(data){
    console.log(data.Countries)

      data =`
      <td>${data.Countries[35].TotalConfirmed}</td>
      <td>${data.Countries[35].TotalDeaths}</td>
      <td>${data.Countries[35].TotalRecovered}</td>
      `
      $("#data-4").html(data)

    })
  }
})



$(document).ready(function(){
  init()
  function init(){
    
    var url ="https://api.covid19api.com/summary"
    var dataFive =''

    $.get(url, function(data){
    console.log(data.Global)

      data =`
      <td>${data.Countries[46].TotalConfirmed}</td>
      <td>${data.Countries[46].TotalDeaths}</td>
      <td>${data.Countries[46].TotalRecovered}</td>
      `
      $("#data-5").html(data)

    })
  }
})

  //What is one thing you learned from the project?
  //What is a roadblock you encountered?
  //What would you like to add for version 2?

// new york times Api key = Ded7j8nC2LPSzN7ltiSG5xFbGUA7yywX 

// /articlesearch.json?q={query}&fq={filter}

//Example call
// https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=yourkey

// https://api.nytimes.com/svc/search/v2/articlesearch.json?q=covid19&api-key=Ded7j8nC2LPSzN7ltiSG5xFbGUA7yywX

// API key for API news = b4474f9667dc496f9a6f6f7d2b452fe2

// https://newsapi.org/v2/everything?q=covid19&from=2021-04-12&sortBy=publishedAt&apiKey=b4474f9667dc496f9a6f6f7d2b452fe2

//let covidUrl= https://api.nytimes.com/svc/topstories/v2/covid19.json?api-key=b4474f9667dc496f9a6f6f7d2b452fe2

let covidUrl = 'https://accesscontrolalloworiginall.herokuapp.com/https://newsapi.org/v2/everything?q=covid19&from=2021-04-12&sortBy=publishedAt&apiKey=b4474f9667dc496f9a6f6f7d2b452fe2'


//let covidUrl ="https://accesscontrolalloworiginall.herokuapp.com/http://newsapi.org/v2/everything?q=covid19&apiKey=b736aa1d17f347b2b3ca60348774826d"

let headlines = document.getElementById("headlines");

fetch(covidUrl)
.then(response => response.json())
.then(data => {
  
  console.log(data);

  data.articles.map(article =>{
    console.log(article.title);

    let a = document.createElement ("a");
    a.setAttribute('href', article.url);
    a.innerHTML = article.title;

    let p = document.createElement("p");
    p.innerHTML = article.description

    headlines.appendChild(a);
    headlines.appendChild(p);

  })
})



