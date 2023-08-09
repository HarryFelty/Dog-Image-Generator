fetch("https://dog.ceo/api/breeds/list/all")
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data)

        //TODO: populate select element with dog breeds


        return fetch("https://api.pexels.com/v1/search?query=dogs&per_page=10", {
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

        //TODO: display images
    })

function arrayFromDogCeoResponse (resp) {
    breeds = [];
    objMembersArray = Object.entries(resp.message);
    let len = objMembersArray.length;
    for (let i=0;i<len;i++) {
        if (objMembersArray[i].length > 0) {
            breeds.push(objMembersArray[i][0]);
        }
    }
    return breeds;
}

