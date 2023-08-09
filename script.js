let temp1 = null;

fetch("https://dog.ceo/api/breeds/list/all")
    .then(function (response) {
        return response.json()
    })
    .then(function (breedList) {
        console.log(breedList)

        //TODO: populate select element with dog breeds

        let breedInput = document.querySelector("#dogBreed").value
        return fetch(`https://api.pexels.com/v1/search?query=${breedInput}%20dog&per_page=4`, {
            headers: {
                "Authorization": "zPGVC6aPEjLHzpDgCHA6NOjBtXPQBP3EoVpQfLUa4ta1ad1oyVxXD51K"
            }
        })

    })
    .then(function (response) {

        return response.json()
    })
    .then(function (data) {
        console.log(data)
        temp1 = data
        //TODO: display images
    })

$(function () {
    const breedList = [
        'German Shepard',
        'Siberian Husky ',
        'Beagle',
        'Boxer',
        'English Bulldog',
        'French Bulldog',
        'Great Dane',

    ];
    $('#dogBreed').autocomplete({
        source: breedList,
    });
});



