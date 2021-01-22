let item = document.getElementById("items");
let itemcontainer = document.getElementById("item-container");
let ulItemList = document.getElementById("item-list");
let inputHolder = document.getElementById("inputBox");

let countries = [
  "Afghanisthan",
  "Albania",
  "Argentina",
  "Australia",
  "Barbados",
  "Belize",
  "Brazil",
  "China",
  "Denmark",
  "Egypt",
  "Fiji",
  "France",
  "Germany",
  "India",
  "Iraq",
];

let choosenCountry = [];

function searchByKey() {
  let inputValue = inputHolder.value.toLowerCase();
  let searchedCountries = countries.filter((country) =>
    country.toLowerCase().startsWith(inputValue)
  );

  if (inputHolder.value == "") {
    ulItemList.innerHTML = "";
    return;
  }
  displayList(searchedCountries);
}

function displayList(searchedCountries) {
  searchedCountries.map(function (country) {
    let li = document.createElement("li");
    let img = document.createElement("img");
    let span = document.createElement("p");
    span.innerHTML = `${country}`;
    li.addEventListener("click", getcountries);
    let url = "/images/" + `${country}` + ".png";
    img.setAttribute("src", url);
    img.setAttribute("id", "flag");
    li.appendChild(img);
    li.appendChild(span);
    ulItemList.appendChild(li);
  });
}

function getcountries(event) {
  let targetCountry = event.target.innerText;

  choosenCountry.push(targetCountry);

  displayTags();

  inputHolder.value = "";

  let index = countries.indexOf(targetCountry);
  countries.splice(index, 1);

  searchByKey();
}

function displayTags() {
  item.innerHTML = choosenCountry
    .map((item) => {
      return `<span class="tag">
                <img src="/images/${item}.png" id="flag">
                 <p>${item}</p>
                  <i class="fa fa-times" id="closeBtn"  onclick=deleteTags(event)></i>
                </span>`;
    })
    .join(" ");
}
function deleteTags(e) {
  let selectedCountryName = e.currentTarget.parentElement.innerText;
  let index = choosenCountry.indexOf(selectedCountryName);
  choosenCountry.splice(index, 1);
  displayTags();
  inputHolder.value = "";
  countries.unshift(selectedCountryName);
  searchByKey();
}
