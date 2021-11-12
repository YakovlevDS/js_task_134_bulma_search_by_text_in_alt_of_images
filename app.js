// ? Task:


// Solution 1

let boxes = document.querySelectorAll('.image')
    
function liveSearch() {
    let search_query = document.getElementById("searchbox").value;

    for (var i = 0; i < boxes.length; i++) {
        if (boxes[i].getAttribute('alt').toLowerCase()
            .includes(search_query.toLowerCase())) {
            boxes[i].classList.remove("is-hidden");
        } else {
            boxes[i].classList.add("is-hidden");
        }
    }
}

//A little delay
let typingTimer;
let typeInterval = 500;
let searchInput = document.getElementById('searchbox');

searchInput.addEventListener('keyup', () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(liveSearch, typeInterval);
});

// ! Explanation: 
