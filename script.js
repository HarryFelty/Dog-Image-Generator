let searchBtnEl = document.querySelector("#searchBtn");
let dogBreedEl = document.querySelector("#dogBreed");
let historyEl = document.querySelector("#history");
let imageEl = document.querySelectorAll("img");
let modalEl = document.querySelector("#myModal");
let closeBtn = document.querySelector("#closeBtn");
let breedArray = [];
let recents = JSON.parse(localStorage.getItem("recents")) || [];

populateHistory();

fetch("https://dog.ceo/api/breeds/list/all")
    .then(function (response) {
        return response.json()
    })
    .then(function (breedResponse) {
        breedArray = arrayFromDogCeoResponse(breedResponse)
        $(function () {
            $('#dogBreed').autocomplete({
                source: breedArray,
            });
        });
    })

//calls fetch and passes in appropriate value
function generateImages(breed) {
    fetch(`https://api.pexels.com/v1/search?query=${breed}%20dog&per_page=4`, {
        headers: {
            "Authorization": "zPGVC6aPEjLHzpDgCHA6NOjBtXPQBP3EoVpQfLUa4ta1ad1oyVxXD51K"
        }
    })
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {

            if (!data.photos.length) {
                dogBreedEl.value = "";
                modalEl.style.display = "block";
            } else {
                for (let i = 0; i < imageEl.length; i++) {
                    imageEl[i].setAttribute("src", data.photos[i].src.medium);
                    imageEl[i].setAttribute("alt", data.photos[i].alt);
                    imageEl[i].parentElement.setAttribute("href", data.photos[i].src.original);
                }
            }
        });
}

//populates search history from local storage
function populateHistory() {
    if (recents.length) {
        for (let i = 0; i < recents.length; i++) {
            let newBtn = document.createElement("button");
            newBtn.textContent = recents[i];
            historyEl.appendChild(newBtn);
        }
    }
}

//adds event listeners
searchBtnEl.addEventListener("click", () => {
    if (breedArray.indexOf(dogBreedEl.value) === -1) {
        dogBreedEl.value = "";
        modalEl.style.display = "block";
    } else {
        generateImages(dogBreedEl.value);

        let newBtn = document.createElement("button");
        newBtn.textContent = dogBreedEl.value;
        historyEl.prepend(newBtn);

        recents.unshift(dogBreedEl.value);
        if (recents.length > 7) {
            recents.pop();
        }

        localStorage.setItem("recents", JSON.stringify(recents));

        dogBreedEl.value = "";
    }
})

historyEl.addEventListener("click", event => {
    if (event.target.matches("button")) {
        generateImages(event.target.textContent);
    }
})

closeBtn.addEventListener("click", () => {
    modalEl.style.display = "none";
})

function arrayFromDogCeoResponse(resp) {
    breeds = [];
    objMembersArray = Object.entries(resp.message);
    let len = objMembersArray.length;
    for (let i = 0; i < len; i++) {
        if (objMembersArray[i].length > 0) {
            breeds.push(objMembersArray[i][0]);
        }
    }
    return breeds;
}