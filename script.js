let searchBtnEl = document.querySelector("#searchBtn");
let dogBreedEl = document.querySelector("#dogBreed");
let historyEl = document.querySelector("#history");
let imageEl = document.querySelectorAll("img");
let recents = JSON.parse(localStorage.getItem("recents")) || [];

populateHistory();

fetch("https://dog.ceo/api/breeds/list/all")
    .then(function (response) {
        return response.json()
    })
    .then(function (breedResponse) {
        let breedArray = arrayFromDogCeoResponse(breedResponse)
        $(function () {
            $('#dogBreed').autocomplete({
                source: breedArray,
            });
        });

        //TODO: populate select element with dog breeds

    })

//calls fetch and passes in appropriate value
function generateImages(breed) {
    fetch(`https://api.pexels.com/v1/search?query=${breed}&per_page=4`, {
        headers: {
            "Authorization": "zPGVC6aPEjLHzpDgCHA6NOjBtXPQBP3EoVpQfLUa4ta1ad1oyVxXD51K"
        }
    })
        .then(function (response) {

            return response.json()
        })
        .then(function (data) {
            console.log(data)

            //TODO: display images
            let i = 0;
            for (img of imageEl) {
                img.setAttribute("src", data.photos[i].src.original);
                i++;
            }
        })
}

//populates search history from local storage
function populateHistory() {
    if (recents.length) {
        let i = 0;
        for (let recent of recents) {
            let newBtn = document.createElement("button");
            newBtn.textContent = recent;
            historyEl.appendChild(newBtn);

            i++;
            if (i === 7) {
                break;
            }
        }
    }
}


//adds event listeners
searchBtnEl.addEventListener("click", () => {
    generateImages(dogBreedEl.value);

    let newBtn = document.createElement("button");
    newBtn.textContent = dogBreedEl.value;
    historyEl.appendChild(newBtn);

    recents.unshift(dogBreedEl.value);
    localStorage.setItem("recents", JSON.stringify(recents));

    dogBreedEl.value = "";
})

historyEl.addEventListener("click", event => {
    if (event.target.matches("button")) {
        generateImages(event.target.textContent);
    }
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