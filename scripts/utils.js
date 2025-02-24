function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    const barIcon = document.getElementById('bar');
    
    navLinks.classList.toggle("toggle-menu");
    
    // Check if navLinks contains active class
    if (navLinks.classList.contains("toggle-menu")) {
        barIcon.classList.replace("fa-bars", "fa-xmark");
    } else {
        barIcon.classList.replace("fa-xmark", "fa-bars");
    }
}
  
// Reviews
const reviews = [
    {
        image: "./assets/reviewprofile.png",
        name: "Edward Newgate",
        position: "Founder Circle",
        text: "“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedious forms, long calls, or administrative hassle) and securely.”"
    },
    {
        image: "./assets/reviewprofile.png",
        name: "Samantha Green",
        position: "CEO, TechCorp",
        text: "“This platform has revolutionized how we engage with our clients. The seamless integration and user-friendly interface are outstanding!”"
    },
    {
        image: "./assets/reviewprofile.png",
        name: "John Doe",
        position: "Product Manager",
        text: "“Amazing service! The support team is always there to help, and the features have streamlined our processes immensely.”"
    }
];

let currentIndex = 0;

function updateReview(){
    const review = reviews[currentIndex];
    document.getElementById('review-image').src = review.image;
    document.getElementById('review-name').textContent = review.name;
    document.getElementById("review-position").textContent = review.position;
    document.getElementById("review-text").textContent = review.text;
    updateDots();
}

function prevReview() {
    currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    updateReview();
}

function nextReview() {
    currentIndex = (currentIndex + 1) % reviews.length;
    updateReview();
}


function createDots(){
    const dotsContainer = document.getElementById("dots-container");
    dotsContainer.innerHTML = "";
    reviews.forEach((_, index)=>{
        const dot = document.createElement("div");
        dot.classList.add('dot');
        if(index === currentIndex){
            dot.classList.add("active");
        }

        dotsContainer.appendChild(dot);
    })
}

function updateDots(){
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, index)=>{
        dot.classList.toggle('active', index===currentIndex);
    });
}

updateReview();
createDots();