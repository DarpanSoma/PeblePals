// FOR LATER, IGNORE FOR NOW
let testimonialList = [
  {
    rating: 4,
    name: "Bobbi",
    review: "A true gem of a friend!",
  },
  {
    rating: 4,
    name: "Bob",
    review: "This Rocks!",
  },
  {
    rating: 2,
    name: "Goob",
    review: "Very lazy, doesn't move for days.",
  },
  {
    rating: 5,
    name: "Bobbert",
    review: "Mine's not just a rock. it's family!",
  },
  {
    rating: 5,
    name: "Bobsi",
    review: "My depression? Cured. Will to live? Restored!",
  },
  {
    rating: 5,
    name: "Bobberta",
    review:
      "Walking my pet rock every day has been a great way to get some exercise!",
  },
];

// Container for Testimonial
let all_t = document.getElementById("all-testimonials");

// Decide what testimonial to use
// one from storage and default from this file

function getTestimonials() {
  let testimonials = localStorage.getItem("testimonials");

  if (testimonials) {
    return JSON.parse(testimonials);
  } else {
    return testimonialList;
  }
}

testimonialList = getTestimonials();
console.log(testimonialList);

function getStars(rating) {
  let stars = "";

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars += `<img src="/assets/star_yellow.svg" />`;
    } else {
      stars += `<img src="/assets/star_black.svg" />`;
    }
  }
  return stars;
}

// testimonials data to screen
for (let current_t of testimonialList) {
  let stars = getStars(current_t.rating);
  let new_t = `
          <div class="t-cloud">
            <div class="t-top">
              <div class="t-stars">
              ${stars}
              </div>
              <p class="t-author">~${current_t.name}</p>
            </div>
            <p class="t-review">${current_t.review}</p>
          </div>
    `;
  all_t.innerHTML += new_t;
}
