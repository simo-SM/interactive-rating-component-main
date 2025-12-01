let numberButtons = document.querySelectorAll(".buttonNumber button");

let submitBtn = document.querySelector(".btn");

let cardRating = document.querySelector(".boxRating");

let cardThank = document.querySelector(".Rating-container");

// You selected <span>1</span>...
let selectedDisplay = document.getElementById("addNumber");

let selectedRating = null;


numberButtons.forEach((numb) => {
    numb.addEventListener("click", () => {
        let value = numb.textContent.trim();

        selectedRating = value;

        numberButtons.forEach((b) => b.classList.remove("active-number"));

        numb.classList.add("active-number");
    });
});

submitBtn.addEventListener("click", () => {
    if (!selectedRating) {
      alert("Please select a rating before submitting.");
      return;
    }
  
    cardRating.style.display = "none";
    cardThank.style.display = "block";
  
    let span = selectedDisplay.querySelector("span");
    if (span) {
      span.textContent = selectedRating;
    } else {
      selectedDisplay.textContent = `You selected ${selectedRating} out of 5`;
    }
  });