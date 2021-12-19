// fetching data from API
async function getData(){

    //concatenating text input with api
   const response =  await fetch("https://api.nationalize.io/?name="+person.value);
   data = await response.json();
   return data;
}

async function getCountries(){
    
    // if empty text box return alert
    if (person.value == "") {
        alert("Name must be filled out");
      } else {


try{

     // if textbox filled and stores data in res creates tables and rows and cells to insert different outputs from data
    let res = await getData();

    let table = document.createElement("table");
    div.appendChild(table);


    // title rows
    let row1 = table.insertRow();
    let c1 = row1.insertCell();
    c1.innerHTML = "Name"
    let c2 = row1.insertCell();
    c2.innerHTML ="Countries" 
    let c3 = row1.insertCell();
    c3.innerHTML =  "Probability";


    // first country id & probability
    let row2 = table.insertRow();
    let c4 = row2.insertCell();
    c4.setAttribute("id","imp");
    c4.innerHTML =  res.name;
    let c5 = row2.insertCell();
    c5.innerHTML = res.country[0].country_id;
    let c6 = row2.insertCell();
    c6.innerHTML = res.country[0].probability;

       
    // second country id & probability
    let row3 = table.insertRow();
    let c7 = row3.insertCell();
    c7.setAttribute("id","emptycell")
    let c8 = row3.insertCell();
    c8.innerHTML = res.country[1].country_id;
    let c9 = row3.insertCell();
    c9.innerHTML = res.country[1].probability;
    

// catch error if any
} catch (err){  
    div.appendChild(noName)}
    div.removeChild(table);
}}


// created all elements through DOM



let div = document.createElement("div");
document.body.appendChild(div);

let heading = document.createElement("P");
heading.setAttribute("id","heading")
heading.innerHTML = " Nationalize API"
div.appendChild(heading);

let person = document.createElement("input");
person.setAttribute("type", "text");
person.setAttribute("placeholder", "enter name here to find countries");
div.appendChild(person);

let button = document.createElement("button");
button.setAttribute("onclick","getCountries()");
button.innerText = "Find"
div.appendChild(button);

let noName = document.createElement("P");
noName.innerText = "Name does not exist in API";