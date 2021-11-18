//Change 1: array of images now changed to dogs
let dogsImages = [
    "https://hips.hearstapps.com/countryliving.cdnds.net/17/47/2048x1365/gallery-1511194376-cavachon-puppy-christmas.jpg?resize=980:*",
    "https://www.dogtime.com/assets/uploads/2011/03/puppy-development.jpg",
    "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2021/05/25082143/Alaskan-Malamute-puppy-laying-down-outdoors.jpg",
    "https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=620&quality=45&auto=format&fit=max&dpr=2&s=064680b85e72644d9cc2e69e2763c541",
];

//traverse through array of images
//getting random image from the array we created before (we use math.floor and math.random to grab a random index in the array)
const imgs = document.getElementsByTagName("img");
for(let i = 0; i < imgs.length; i++) {
    const randomImg = Math.floor(Math.random() * dogsImages.length)
    imgs[i].src = dogsImages[randomImg]
}

//Change 2: loop through h1 elements, changing text, font color and font family
const headers = document.getElementsByTagName("h1");
for (let i = 0; i < headers.length; i++){
    headers[i].innerText = "Cats are awesome. But dogs are better";
    headers[i].setAttribute("style", "color: blue; font-family: verdana");
}

//Change 3: loop through p elements, changing text and making text all caps
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++){
    p[i].innerText = "This website is now about dogs.";
    p[i].style.textTransform = "uppercase";
}

/*
* Change 4:
* Randomly assign a font color to each div
*/
const divs = document.getElementsByTagName('div');
let color = []

// Loop through each div
for(let i=0; i < divs.length; i++) {
    // generate a random rgb color
    for(let j=0; j < 3; j++) {
        color[j] = Math.floor(Math.random() * 255);
    }

    // apply the rgb color to the div
    divs[i].style.color = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
}

/*
* Change 5:
* Make the body background color animated
*/
const body = document.querySelector('body');
body.setAttribute('style', 'background: linear-gradient(-45deg, #EE8952, #E73C8C, #2392D5, #23D58B); background-size: 400% 400%;');

// animate the background using keyframes
body.animate([ 
    { backgroundPosition: "0% 50%", offset: 0 },
    { backgroundPosition: "100% 50%", offset: 0.5 },
    { backgroundPosition: "0% 50%", offset: 1 } ],
    { easing: "ease",
    iterations: Infinity,
    duration: 10000
});

/*
* Change 6:
* Make all buttons animated cog buttons
* This adjustment removes all text from buttons and replaces them with a font awesome cog icon
*/
// Add font awesome icons stylesheet
const link = document.createElement('link');
link.rel = 'stylesheet'; 
link.type = 'text/css';
link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';

// Add stylesheet to head
const head = document.getElementsByTagName('HEAD')[0];
head.appendChild(link);

buttons = document.getElementsByTagName("button");

// Loop through buttons
for(let i=0; i < buttons.length; i++) {
    // Add the cog icon and remove button text
    const loadEl = document.createElement('i');
    loadEl.setAttribute('class', 'fa fa-cog fa-spin');
    buttons[i].innerText = "";
    buttons[i].appendChild(loadEl);
}