# Endless-scroll-js
## Hosted Link :- https://rohitdhawale07.github.io/Endless-scroll-js/
Creating an endless scroll using HTML, CSS, and JavaScript typically involves organizing your code into multiple files to keep it organized and maintainable. 
Below, I'll provide an overview of the files you might use and their respective purposes.
Please note that specific implementations can vary depending on your project's requirements.
HTML File (index.html):
Purpose: This file contains the structure and content of your web page.
Detailed Information: It should include the basic HTML structure, including <head> and <body> sections. 
In the <head>, you'll link to your CSS and JavaScript files.
In the <body>, you'll have the elements for your content, typically a container for the scrollable content and placeholders for new items that will load as the user scrolls.
 ## HTML Code
 ```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Endless Scroll</title>
    <link rel="stylesheet" href="./style.css">
    <script defer src="./index.js"></script>
</head>
<body>

    <h1>Endless Scroll</h1>
    <div id="results"></div>
    
</body>
</html>
```
Purpose: This file contains the styles that define the appearance of your web page and scrollable content.
Detailed Information: Define the styles for your content container, items, placeholders, and any other elements you want to style. 
You'll also set up styles for creating a smooth scrolling experience.
## CSS code
```
@import url('https://fonts.googleapis.com/css2?family=Lato:ital@1&family=Roboto:wght@300&display=swap');

*{
    margin: 0;
    padding: 0;
}

body{
    font-family: 'Lato', sans-serif;
    width: 100%;
    height: 100vh;
}
    
h1{
    letter-spacing: 2px;
    font-size: 2.5rem;
    color: #fff;
    text-shadow: 0 0 10px #00f, 0 0 20px #00f, 0 0 30px #00f;
    text-align: center;
    margin-top: 1.5rem;
    cursor: pointer;
    transition: 0.2s ease-in-out;
}
h1:hover{
    transform: scale(1.05);
    animation: bounce 0.5s ease infinite;
}
#results{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;    
    overflow: hidden;
}
#results img{
    width: 30%;
    margin-top: 2rem;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transition: 0.2s ease-in-out;

}
#results img:hover{
    opacity: 0.9;
    transform: scale(1.01);
    cursor: pointer;
}


@keyframes bounce {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px); /* Adjust the bounce height as needed */
    }
}

```
for JAVASCRIPT part,we used addEventListener() to the whole document.
When It fulfills the predefined function the eventlistener will work.
we used "scroll" type of event.
Firstly we calculate the 'window.innerHeight' which will give us the screen size. Later on
we will check for scrolled height using 'window.scrollY' method.
We will also calculate the total ScrollbarHeight using 'document.documentElement.ScrollBarHeight'.
We will applay condition like when 'window.InnerHeight' + 'window.scrollY' >= 'document.documentElement.ScrollBarHeight' 
We will fetch Images again and Loop will continue again.

## JAVASCRIPT code:-
```

// const url = 'https://api.unsplash.com/photos/?client_id=_utszRhIsPwMWgEA_go-9zZiqV3XKnB1-UuPQOoS5_Y';
const url =   "https://api.unsplash.com/photos/random/?client_id=_utszRhIsPwMWgEA_go-9zZiqV3XKnB1-UuPQOoS5_Y&count=10";

const container = document.getElementById("results");

// console.log(url);

function fetchImage(){
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        // return data;
    
        data.map((ele)=>{
            console.log(ele.urls.small);
            const image = document.createElement("img")
            image.src = ele.urls.small;
            container.appendChild(image);
        })
    })
}

fetchImage();

window.addEventListener("scroll",()=>{
    // console.log(window.innerHeight);
    // console.log(window.scrollY);
    // console.log(document.documentElement.scrollHeight);

    if(window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
        fetchImage();
    }

})
```
