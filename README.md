# Dog Image Generator

## Description

- Motivations:
  - To gain experience in collaborative work on a project
  - To construct a demo web app using two distinct web API endpoints
  - To gain experience and reinforce our HTML, CSS, and Javascript skills

---

- Problems and Resolutions:
  - Merging via GitHub was confusing and challenging, particularly where the
    reconciliation of conflicting code segments during merging was
    was concerned. Repeated practice helped the team to gain a greater
    comfort level with this aspect of Git and GitHub.
  - Difficulties getting page layout to respond as desired when resized. Resolution
    of this issue ultimately was resolved by carefully distinguishing "class"
    versus "id" attributes in the HTML, and group review of the changes was valuable
    in diagnosing this issue.
  - Issues with resizing images that were generated to fit their corresponding container. We struggled with targeting and finding the best style to apply to our container to generate our images cleanly. We overcame this issue by testing and reclassifying our containers to allow for more specific targeting of our desired elements. This allowed for us to size the image upon generation to allow for the highest quality.

---

- Learned:
  - How to utilize the projects board in our Github repo, to allow for issue generation, work division, and tracking.
  - How to display a modal alert using Bootstrap CSS Framework
  - Use of javascript fetch() for retrieving external API content, which included setting parameters to retrieve our desired data
  - Asynchronous javascript coding techniques

---

- Possible future enhancements:
  - Limit number of "recent searches" buttons to prevent excessive use of localStorage and
    to to enhance the use of the app/site, particularly when viewed on mobile devices.
  - Style model "incorrect search" dialog box to be more consistent with the style of the
    main page.
  - Consider storing "current-breed" as a localStorage item so that use of the back
    button causes return to the main page having the same state as before user viewed
    a specific image.

## Installation

For users of the this page, there is no installation needed beyond having a browser. (see [Usage](#usage))

For developers, installation requires:

- Access to GitHub repository [Dog-Image-Generator](https://github.com/SimonMagidenko/Dog-Image-Generator)
- Appropriate tools for editing, testing, and deploying component modules.

## Usage

The result of this project is a web site accessible via web browser at [simonmagidenko.github.io/Dog-Image-Generator/](https://simonmagidenko.github.io/Dog-Image-Generator/) . No installation is required beyond that for use.

### Generally

The purpose of the web site (beyond being a demonstration of the technical components used to develop it) is to enable
a user/viewer to select a dog breed of interest and then be presented with pictures of dogs of that breed.

### Key Features

- Upon initially loading, the user can begin to key in the name of a dog breed of interest in the text box
  under the label "Select a Dog Breed:". The text box should "auto-complete" based on a combination of user
  input and the sites internal list of dog breeds, that list having been loaded from an API provided by site
  [dog.ceo](https://https://dog.ceo/).
- Once a few letters of the desired breed have been typed, it will be possible to select a desired breed from the
  drop-down list that will then appear.
- After selecting a breed, the user can then click the "Generate Images" button to view up to four images of dogs
  of that breed. (The images result from interfacing with an API provided by [pexels.com](https://www.pexels.com/)
  which searches the pexels site based on two combined key words - the specified breed, and the word "dog".)
- If no valid breed is selected with the "Generate Images" button is pushed then a modal "Invalid Search" dialog
  is displayed.
- If a search is successful then:
  - Up to four images resulting from the pexels search are displayed to the right
  - A new button is added to the "Recent Searches" list. These buttons can then later be used to view
    image samples for a desired breed without having to rekey the breed name. Note that these "recent
    search" breeds are also persisted via localStorage so that the same buttons will be available when
    the site is used at a later date.
- Once images for a selected breed are displayed, the user may choose to click on any of the four images
  that resulted. Clicking on any of these images results in jumping to a new page showing only the one
  selected image, but at a higher quality than was displayed on the main page.

## Credits

Special thanks to the teaching staff of the University of Pennsylvania Full Stack Coding Boot Camp (UPENN-VIRT-FSF-FT-07-2023-U-LOLC-M-F).

This web site and the code supporting it were the combined effort of the Full Stack Code Boot Camp Project 1 Group 4,
consisting of:

- Harry Felty
- Simon Magidenko
- Steve Reuterskiold

Innumerable publicly available reference resources were consulted in pursuing this project. Specifically, among these
were:

- [MDN Web Docs](https://developer.mozilla.org/en-US/)
- [Bootstrap CSS Documentation](https://getbootstrap.com/docs/5.3/getting-started/introduction/)

## License

Please refer to the license information in this GitHub repository. (https://github.com/SimonMagidenko/Dog-Image-Generator)
