// Alert for unfinished page

// Grab Anchor Links
var anchors = document.querySelectorAll('a');

// Grab anchor for unfinished page
var collections = anchors[2];

// Add event listener to alert when clicked
collections.addEventListener('click', () => {
    alert('This page is under construction, check back soon!');
});