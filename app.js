const colorBox = document.querySelectorAll('.box');
const hexCode = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 'A' , 'B' , 'C' , 'D' , 'E' , 'F'];

colorBox.forEach((item) => {
        let color = changeColors();
        item.style.backgroundColor = color;
        item.addEventListener('click' , () => {
            document.body.style.backgroundColor = color;
            remove();
            item.classList.add('show__border');
            localStorage.setItem('bg-color' , color);
    });
});


function remove() {
    colorBox.forEach((element) => {
        element.classList.remove('show__border');
    })
}


function changeColors() {
    let color = '';
    for(let i = 0 ; i <= 5 ; i++) {
        let randIndex = parseInt(Math.random() * hexCode.length);
        color += hexCode[randIndex];
    }
    return '#' + color;
}


window.addEventListener('load' , () => {
    document.body.style.backgroundColor = localStorage.getItem('bg-color');
})