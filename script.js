  // Function to open faculty details page
  function openFacultyDetails(facultyNumber) {
    // Construct the faculty details page URL
    const facultyURL = `faculty${facultyNumber}.html`;
    
    // Open the faculty details page in a new tab/window
    window.open(facultyURL, '_blank');
}

// Add click event listeners to the img elements
document.querySelector('.img1').addEventListener('click', () => {
    openFacultyDetails(1);
});

document.querySelector('.img2').addEventListener('click', () => {
    openFacultyDetails(2);
});

document.querySelector('.img3').addEventListener('click', () => {
    openFacultyDetails(3);
});

document.querySelector('.img4').addEventListener('click', () => {
    openFacultyDetails(4);
});

document.querySelector('.img5').addEventListener('click', () => {
    openFacultyDetails(5);
});

document.querySelector('.img6').addEventListener('click', () => {
    openFacultyDetails(6);
});