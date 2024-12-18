const viewMoreButton = document.querySelector('.view-more-button');
    const hiddenCards = document.querySelector('.hidden');

    viewMoreButton.addEventListener('click', () => {
        hiddenCards.style.display = hiddenCards.style.display === 'none' || !hiddenCards.style.display ? 'flex' : 'none';
        viewMoreButton.textContent = hiddenCards.style.display === 'flex' ? 'View Less' : 'View More';
    }); 


    const viewMoreButton1 = document.querySelector('.view-more-button1');
    const hiddenCards1 = document.querySelector('.hidden1');

    viewMoreButton1.addEventListener('click', () => {
        hiddenCards1.style.display = hiddenCards1.style.display === 'none' || !hiddenCards1.style.display ? 'flex' : 'none';
        viewMoreButton1.textContent = hiddenCards1.style.display === 'flex' ? 'View Less' : 'View More';
    }); 


    const viewMoreButton2 = document.querySelector('.view-more-button2');
    const hiddenCards2 = document.querySelector('.hidden2');

    viewMoreButton2.addEventListener('click', () => {
        hiddenCards2.style.display = hiddenCards2.style.display === 'none' || !hiddenCards2.style.display ? 'flex' : 'none';
        viewMoreButton2.textContent = hiddenCards2.style.display === 'flex' ? 'View Less' : 'View More';
    }); 

    const viewMoreButton3 = document.querySelector('.view-more-button3');
    const hiddenCards3 = document.querySelector('.hidden3');

    viewMoreButton3.addEventListener('click', () => {
        hiddenCards3.style.display = hiddenCards3.style.display === 'none' || !hiddenCards3.style.display ? 'flex' : 'none';
        viewMoreButton3.textContent = hiddenCards3.style.display === 'flex' ? 'View Less' : 'View More';
    }); 

    const viewMoreButton4 = document.querySelector('.view-more-button4');
    const hiddenCards4 = document.querySelector('.hidden4');

    viewMoreButton4.addEventListener('click', () => {
        hiddenCards4.style.display = hiddenCards4.style.display === 'none' || !hiddenCards4.style.display ? 'flex' : 'none';
        viewMoreButton4.textContent = hiddenCards4.style.display === 'flex' ? 'View Less' : 'View More';
    }); 