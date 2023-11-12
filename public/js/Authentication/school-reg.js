  



var currentTab = 0;
var currentMinTab = 0;

showMinTab(currentMinTab);

function showMinTab(n) {
    var  minTab = document.getElementsByClassName('min-tab');
    minTab[n].style.display = 'grid';
    if(n == 0) {
        document.getElementById('prev').style.display = 'none';
    } else {
        document.getElementById('prev').style.display = 'inline';
    }

    if(n >= minTab.length -1) {
        document.getElementById('next').innerHTML = 'Submit';
    } else {
        document.getElementById('next').innerHTML = 'Next';
    }
}

function next(n){
    var minTab = document.getElementsByClassName('min-tab');
    minTab[currentMinTab].style.display = 'none';
    currentMinTab = currentMinTab + n;
    showMinTab(currentMinTab);
}

const fileInput = document.querySelector(".file-input"),
filterOptions = document.querySelectorAll(".filter button"),
filterName = document.querySelector(".filter-info .name"),
filterValue = document.querySelector(".filter-info .value"),
filterSlider = document.querySelector(".slider input"),
rotateOptions = document.querySelectorAll(".rotate button"),
previewImg = document.querySelector(".preview-img img"),
resetFilterBtn = document.querySelector(".reset-filter"),
chooseImgBtn = document.querySelector(".choose-img"),
saveImgBtn = document.querySelector(".save-img");

let brightness = "100", saturation = "100", inversion = "0", grayscale = "0";
let rotate = 0, flipHorizontal = 1, flipVertical = 1;
document.querySelector(".container").classList.remove("disable");
const loadImage = () => {
    let file = fileInput.files[0];
    if(!file) return;
    previewImg.src = URL.createObjectURL(file);
    previewImg.addEventListener("load", () => {
        resetFilterBtn.click();
        document.querySelector(".container").classList.remove("disable");
    });
}

const applyFilter = () => {
    previewImg.style.transform = `rotate(${rotate}deg) scale(${flipHorizontal}, ${flipVertical})`;
    previewImg.style.filter = `brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%)`;
}

filterOptions.forEach(option => {
    option.addEventListener("click", () => {
        document.querySelector(".active").classList.remove("active");
        option.classList.add("active");
        filterName.innerText = option.innerText;

        if(option.id === "brightness") {
            filterSlider.max = "200";
            filterSlider.value = brightness;
            filterValue.innerText = `${brightness}%`;
        } else if(option.id === "saturation") {
            filterSlider.max = "200";
            filterSlider.value = saturation;
            filterValue.innerText = `${saturation}%`
        } else if(option.id === "inversion") {
            filterSlider.max = "100";
            filterSlider.value = inversion;
            filterValue.innerText = `${inversion}%`;
        } else {
            filterSlider.max = "100";
            filterSlider.value = grayscale;
            filterValue.innerText = `${grayscale}%`;
        }
    });
});

const updateFilter = () => {
    filterValue.innerText = `${filterSlider.value}%`;
    const selectedFilter = document.querySelector(".filter .active");

    if(selectedFilter.id === "brightness") {
        brightness = filterSlider.value;
    } else if(selectedFilter.id === "saturation") {
        saturation = filterSlider.value;
    } else if(selectedFilter.id === "inversion") {
        inversion = filterSlider.value;
    } else {
        grayscale = filterSlider.value;
    }
    applyFilter();
}

rotateOptions.forEach(option => {
    option.addEventListener("click", () => {
        if(option.id === "left") {
            rotate -= 90;
        } else if(option.id === "right") {
            rotate += 90;
        } else if(option.id === "horizontal") {
            flipHorizontal = flipHorizontal === 1 ? -1 : 1;
        } else {
            flipVertical = flipVertical === 1 ? -1 : 1;
        }
        applyFilter();
    });
});

const resetFilter = () => {
    brightness = "100"; saturation = "100"; inversion = "0"; grayscale = "0";
    rotate = 0; flipHorizontal = 1; flipVertical = 1;
    filterOptions[0].click();
    applyFilter();
}

const saveImage = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = previewImg.naturalWidth;
    canvas.height = previewImg.naturalHeight;
    
    ctx.filter = `brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%)`;
    ctx.translate(canvas.width / 2, canvas.height / 2);
    if(rotate !== 0) {
        ctx.rotate(rotate * Math.PI / 180);
    }
    ctx.scale(flipHorizontal, flipVertical);
    ctx.drawImage(previewImg, -canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
    
    const link = document.createElement("a");
    link.download = "image.jpg";
    link.href = canvas.toDataURL();
    // link.click();
}

filterSlider.addEventListener("input", updateFilter);
resetFilterBtn.addEventListener("click", resetFilter);
saveImgBtn.addEventListener("click", saveImage);
fileInput.addEventListener("change", loadImage);
chooseImgBtn.addEventListener("click", () => fileInput.click());


var acc = document.getElementsByClassName('accordion');
    var i;

    for(i = 0; i < acc.length; i++) {
        acc[i].addEventListener('click', function() {
            this.classList.toggle('active');
            var panel = this.nextElementSibling;
            if(panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else  {
                panel.style.maxHeight = panel.scrollHeight + 'px';
            }
        })
    }
    


const resultEl = document.querySelector('.admin-input-password');
const lengthEl = document.getElementById('length')
const lowercaseEl = document.getElementById('lowercase')
const uppercaseEl = document.getElementById('uppercase')
const numberEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate-password')
const clipboardEl = document.getElementById('clipboard')
const adminAddInfoInput = document.querySelectorAll('.admin-add-info-input');
const adminFirstnameInput = document.querySelector('.admin-firstname-input')
const adminLastNameInput = document.querySelector('.admin-lastname-input')
const adminGenderInput = document.querySelector('.admin-gender-input')
const adminUsernameInput = document.querySelector('.admin-username-input')
const adminEmailInput = document.querySelector('.admin-email-input')

lengthEl.value = Math.floor(Math.random() * 12) + 8;

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbols
}

generateEl.addEventListener('click', () => {
    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numberEl.checked;
    const hasSymbol = symbolsEl.checked;
    
    resultEl.value = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
})


clipboardEl.addEventListener('click', function () {
    const textarea = document.createElement('textarea');
    const password = resultEl.innerText;

    if(!password) {
        return
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Password copied to clipboard!')
})


function generatePassword(lower, upper, number, symbol, length) {
    /**
     * 1. Init Password variable
     * 2. Filter out unchecked types
     * 3. Loop over length call generator function for each type
     * 4. Add a final password to the password variable and return
     */

    let generatedPassword = '';
    const typeCount = lower + upper + number + symbol;
    // console.log('typecount ', typeCount);

    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);
    // console.log('TypesArr ', typesArr);

    if(typeCount === 0) {
        return '';
    }

    for(let i = 0; i < length; i += typeCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type) [0];
            // console.log('funcName ', funcName);
            generatedPassword += randomFunc[funcName]();
        })
    }

    const finalPassword = generatedPassword.slice(0, length);
    return finalPassword;
}

/**
 * Generator Functions - http://www.net-comber.com/charset.html
 */

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper () {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber () {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbols () {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
}



function validateAdminInputs() {
    for(let i = 0; i < adminAddInfoInput.length; i++) {
        if(adminAddInfoInput[i].value == '') {
            adminAddInfoInput[i].classList.add('invalid-admin-validation');
            return  validateMessage('Please fill the required inputs')
        } 
    }
   const emailValue = adminEmailInput.value;
   const adminPhoneNumberInput = document.querySelector('.admin-phone-number-input')
   
   const adminFirstPassword = document.querySelector('.admin-first-password');
   const adminConfirmPassword = document.querySelector('.admin-confirm-password');
   
   if(adminFirstPassword.value !== adminConfirmPassword.value) {
    validateMessage('Password must match')
   } else if(adminFirstPassword.value == '' || adminConfirmPassword.value == '') {
    validateMessage('Provide a password');
   } else if(adminPhoneNumberInput.value.length >= 9) {
    validateMessage('Phone number can not exceed 9 numbers')
    } else {
    return;
    } 


    if(validateEmail(emailValue)) {
        return;
    } else {
        validateMessage('Please include an \'@\' and \' . \' in the email address to continue.');
    }
    
    function validateEmail (email) {
     return /\S+@\S+\.\S+/.test(email);
    }
    
}

const validateMessage = (messageInfo) => {
    document.querySelector('.admin-verification-message-container').style.display = 'block';
    document.getElementById('MessageContents').innerHTML = messageInfo;
    setTimeout(() => {
    document.querySelector('.admin-verification-message-content').classList.add('close-admin-validation-message-container')
    setTimeout(() => {
        document.querySelector('.admin-verification-message-content').classList.remove('close-admin-validation-message-container')
            document.querySelector('.admin-verification-message-container').style.display = 'none';
    }, 500);
    }, 3000);
}



function showAdminPassword() {
    const resultEl = document.querySelectorAll('.admin-input-password');
    for(let i = 0; i < resultEl.length; i++) {
        if(resultEl[i].type === 'password') {
            resultEl[i].type = 'text';
        } else {
            resultEl[i].type = 'password';
        }
    }
}


    setInterval(() => {
        const adminInputPassword = document.querySelector('.admin-input-password');
        const passIndicator = document.querySelectorAll('.pass-indicator');

        for(let i = 0; i < passIndicator.length; i++ ) {
            if(adminInputPassword.value.length >= 1) {
                passIndicator[i].classList.add("animate");
                passIndicator[i].style.opacity = "1";
            } else{
                passIndicator[i].classList.remove("animate");
                passIndicator[i].style.opacity = "0";
            }
        }
    }, 1);




showTab(currentTab);
function showTab(n) {
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "grid";
}

function nextPrev(n) {
    var x = document.getElementsByClassName("tab");
    x[currentTab].style.display = "none";
    currentTab = currentTab + n;
    showTab(currentTab);
}



