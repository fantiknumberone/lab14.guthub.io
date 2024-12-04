
function changetext(div) {
    var input = document.createElement('input');
    input.type = 'text';
    input.value = div.innerText;
    
    input.onblur = function() {
        div.innerText = input.value;
        div.style.display = 'block';
        input.remove();
    };

    div.style.display = 'none';
    div.parentNode.insertBefore(input, div);
    input.focus();
}

function changeLanguage(div) {
    var flag = div.querySelector('img');
    var input = document.createElement('input');
    input.type = 'text';
    input.value = div.childNodes[0].nodeValue.trim();

    input.onblur = function() {
        div.childNodes[0].nodeValue = input.value;

        if (input.value.toLowerCase() == 'английский') {
            flag.src = 'https://www.a1flags.com.au/images/Catalogue/Flag/uk---.svg';
        } else if(input.value.toLowerCase() == 'русский') {
            flag.src = 'https://sc24-surgut.gosuslugi.ru/netcat_files/userfiles/Ofitsal_no/Flag_Rossii_1_.jpg';
        } else if(input.value.toLowerCase() == 'немецкий') {
            flag.src = 'https://www.labelocean.de/ae/Germany/Flaggen/ES-FL-DEU.jpg';
        }
        else {
            flag.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Noun-question-By_Adrien_Coquet%2C_FR.svg/640px-Noun-question-By_Adrien_Coquet%2C_FR.svg.png';
        }

        div.style.display = 'block';
        input.remove();
    };

    div.style.display = 'none';
    div.parentNode.insertBefore(input, div); 
    input.focus();
}

function changeLi(li){
    var span = li.querySelector('span');
    var input = document.createElement('input');
    input.type = 'text';
    input.value = span.innerText;
    
    input.onblur = function() {
        span.innerText = input.value;
        li.style.display = 'block';
        input.remove();
    };

    li.style.display = 'none';
    li.parentNode.insertBefore(input, li);
    input.focus();
}
     

       function captureImage() {
            const element = document.getElementById('main');
            html2canvas(element, {
                useCORS: true,
                scale: 2
            }).then((canvas) => {
                const image = canvas.toDataURL('image/png');
                const link = document.createElement('a');
                link.href = image;
                link.download = 'screenshot.png';
                link.click();
            });
        }