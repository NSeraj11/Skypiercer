const reviews = [
    {
        id:1,
        name: "Penny Jackson",
        title: "Guest",
        img:"https://ik.imagekit.io/c5izch04w/person-2_CUZN4JH_V.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1660944089638",
        text: "I loved my stay here! I have had positive experiences and interactions with every member of the staff that I have come across.  Hands down the best hotel to stay at in the DC area.",
    },
    {
        id:2,
        name:"Anne Wright",
        title:"Guest",
        img:"https://ik.imagekit.io/c5izch04w/person-3_o8gkm6j3F.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1660946556625",
        text: "I cant say enough about this hotel, I have been coming here for years and have witnessed many staff changes through the years.  Every person this hotel employs has been just as kind and helping as the last and I cant say enough about the managers the rest of the staff."
    },
    {
        id:3,
        name:"Peter Burns",
        title:"Guest",
        img:"https://ik.imagekit.io/c5izch04w/person-1_2xeC6re-P.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1660939570234",
        text:"I have had countless buiseness trips to DC and The Skypiercer is always my preferred choice, the aesthetic, services offered, and general vibe of the hotel are perfect for someone on the go who likes to relax in their free time"
    }
];

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const title = document.getElementById('title');
const reviewText = document.getElementById('review-text');

//buttons
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

//set starting item
let currentItem = 0;

window.addEventListener('DOMContentLoaded', function(){
    showPerson(currentItem);
});

function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    title.textContent = item.title;
    reviewText.textContent = item.text;
};


//Show next person
nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
});

//Show last person
prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0){ 
        
    currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});