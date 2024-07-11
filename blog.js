function Theme() {
    const htmlElement = document.querySelector('body');
    const card = document.querySelectorAll('.card_title');
    
    if (htmlElement.style.backgroundColor != 'rgb(21, 32, 43)') {
        htmlElement.style.backgroundColor = 'rgb(21, 32, 43)';
        card.forEach((card) => {
                card.style.color = "white";
        });
        
    }
        else if(htmlElement.style.backgroundColor == 'rgb(21, 32, 43)'){
                htmlElement.style.backgroundColor = 'white';
                        card.forEach((card) => {
                                card.style.color = "black";
                        });
                
                
        }
}

document.addEventListener('DOMContentLoaded', function() {
        var categoriesLink = document.getElementById('menu-link');
        var categoriesList = document.getElementById('menu-list');
    
        categoriesLink.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the default link action
            // Toggle the display of the categories list
            if (categoriesList.style.display === 'none' || categoriesList.style.display === '') {
                categoriesList.style.display = 'block';
            } else {
                categoriesList.style.display = 'none';
            }
        });
    });