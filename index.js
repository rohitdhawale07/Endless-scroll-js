
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