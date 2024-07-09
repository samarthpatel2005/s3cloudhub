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