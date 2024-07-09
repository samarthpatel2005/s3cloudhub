
let images = [
        document.getElementById("image1"),
        document.getElementById("image2"), // array of divs to be shown
        document.getElementById("image3")
]
let next = document.getElementById("next");
let prev = document.getElementById("prev");

      let currentIndex = 0;
function updateimages() {
        images.forEach((image, index) => {
                if (index === currentIndex) {
                        image.classList.add("active");
                } else {
                        image.classList.remove("active");
                }
        });
      }

next.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateimages();
});

prev.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateimages();
});
updateimages();

 function Theme() {
      const htmlElement = document.querySelector('body');
      const nav = document.querySelector('nav');
      const card = document.querySelectorAll('.card');
      const fcontent = document.querySelector('.fcontent');
      const first = document.querySelector('.first');

if (htmlElement.style.backgroundColor != 'rgb(21, 32, 43)') {
        htmlElement.style.backgroundColor = 'rgb(21, 32, 43)';
        card.forEach((card) => {
                card.style.boxShadow = "0 4px 8px 0 white";
        });
        fcontent.style.color = 'white';
        first.style.backgroundColor = 'rgb(21, 32, 43)';
    }
        else if(htmlElement.style.backgroundColor == 'rgb(21, 32, 43)'){
                htmlElement.style.backgroundColor = 'white';
                        card.forEach((card) => {
                                card.style.boxShadow = "0 4px 8px 0 rgba(0,0,0,0.2)";
                        });
                fcontent.style.color = 'black';
                first.style.backgroundColor = 'white';
                
        }
}
var typed = new Typed('#learn', {
        strings: [ 'Web Development', 'AWS', 'Cloud Computing','Python', 'CI/CD', 'DevOps', 'Machine Learning', 'Data Science', 'Cyber Security', 'Blockchain', 'IoT', 'Big Data', 'Artificial Intelligence','GitLab','Jenkins','Docker'],
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 1000,
        loop: true
});
var typed = new Typed('#join', {
        strings: ['#YouTube ','#Twitter ','#LinkedIn ','#Facebook '],
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 1000,
        loop: true
});
let yt = document.getElementById("yt");
let tw = document.getElementById("tw");
let li = document.getElementById("in");
let fb = document.getElementById("fb");
let ig = document.getElementById("ig");

yt.addEventListener("click", () => {
        window.open('https://www.youtube.com/@S3CloudHub');
});
tw.addEventListener("click", () => {
        window.open('https://twitter.com/S3CloudHub');
});
li.addEventListener("click", () => {
        window.open('https://www.linkedin.com/company/s3cloudhub');
});
fb.addEventListener("click", () => {
        window.open('https://www.facebook.com/S3CloudHub');
});
ig.addEventListener("click", () => {
        window.open('https://www.instagram.com/s3cloudhub');
});