var signUp = document.getElementById('signupBtn');
var initialContent = document.querySelector('.inner-box');
var signupForm = document.querySelector('.sign-up-form');
var loginForm = document.querySelector('.sign-in-form');
var headerLoader = document.querySelector('.header-loader');
var containerTab = document.querySelector('.container-tabs');
var tab = document.querySelector('.tab');

// declaring verifying page..

var verificationSide = document.querySelector('.verification-inner-box');
var verificationOptions = document.querySelectorAll('.action-code');
var optionMainContent = document.querySelector('.main-content');
var optionSideBarContent = document.querySelector('.sidebar');
var verifyingPage = document.querySelector('.verifying-page');

const verificationInputs = document.querySelectorAll("#verify-input");
const verifyBtn = document.querySelector(".confirm-verify");


//setting loader and its functioning!!!


signUp.addEventListener('click', () => {
    
    setInterval(loading(), 3000);

    function loading() {
        initialContent.classList.add('loading-content');
        headerLoader.style.display = 'block';

        setTimeout(() => {
            initialContent.style.display = 'none';
            headerLoader.style.display = 'none';
            // verificationSide.style.display = 'grid';
            containerTab.style.display = 'block';
        },3000)
    }
})





// making verification options and functioning

verificationOptions.forEach((verifyOpt) => {
    verifyOpt.addEventListener('click', (activeOpt) => {
        // let receiverAddress = activeOpt.target.dataset.receiver;

        //clearing previously cont and replaced by verifying content

        setInterval(() => {
            optionMainContent.style.display = 'none';
            optionSideBarContent.style.display = 'none';
        },2000);

        setTimeout(() => {
            headerLoader.style.display = 'none';
            verifyingPage.style.display = 'block';
        }, 2000);

        // headerLoader.style.display = 'block';
        // optionMainContent.classList.add('loading-content');
        // optionSideBarContent.classList.add('loading-content');

        
        // if(receiverAddress.search(".com") >= 0) {
        //     document.getElementById('otpChoosen').innerHTML = "Email address";  
        // }

        // else {
        //     document.getElementById('otpChoosen').innerHTML = "Phone number";  
        // } 
    })
})


window.addEventListener('load', () => verificationInputs[0].focus());

setInterval(() => {
    verificationInputs.forEach((input, index1) => {
        input.addEventListener('keyup', (e) => {
            const currentInput = input,
            nextInput = input.nextElementSibling,
            prevInput = input.previousElementSibling;
    
            if(currentInput.value.length > 1) {
                currentInput.value = "";
                return;
            }
    
            if(nextInput && nextInput.hasAttribute("disabled") && currentInput.value !== "") {
                nextInput.removeAttribute("disabled");
                nextInput.focus();
            }
    
            if (e.key === "Backspace") {
                verificationInputs.forEach((input, index2) => {
                    if ( index1 <= index2 && prevInput) {
                        input.setAttribute("disabled", true);
                        currentInput.value = "";
                        prevInput.focus();
                    }
                });
            }
    
            if (!verificationInputs[5].disabled && verificationInputs[5].value !== "") {
                verifyBtn.classList.add("verifyBtnActive");
                verifyBtn.style.color = "white";
                loadingVerifying();
                return;
            } 
    
             verifyBtn.classList.remove("verifyBtnActive");

             function loadingVerifying() {
                setTimeout(() => {
                    verifyLoader.style.display = 'block';
                    document.getElementById("VerifyingTxt").innerHTML = "Verifying";
                    loadingPage();
                    verificationInputs.forEach((input) => {
                        input.setAttribute('disabled', true);
                    })
                }, 1000);
             }

             //loading the verification page while entering the verification code

             function loadingPage() {
                setTimeout(() => {
                    setTimeout(() => {
                      document.getElementById("VerifyingTxt").innerHTML = "Verified";
                      verifyLoader.style.display = 'none';
                      setTimeout(() => {

                                //verifying page after verification match

                       headerLoader.style.display = 'block';
                        document.querySelector(".last-verification-page").classList.add('loading-content');
                        document.querySelector(".informational-page").classList.add('loading-content');
                        document.querySelector(".verifying-page").classList.add('loading-content');
                        setTimeout(() => {
                          document.querySelector(".last-verification-page").style.display = 'none';
                          headerLoader.style.display = 'none';

                          //creating the image page after verification match

                          const button = document.createElement('button');
                          button.setAttribute('onclick', 'nextPrev(1)');
                          button.click();
                        }, 5000);
                      }, 1000);
                    }, 2000);
                }, 2000);
             }
        });
    }); 
}, 1)


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
    link.click();
}

filterSlider.addEventListener("input", updateFilter);
resetFilterBtn.addEventListener("click", resetFilter);
saveImgBtn.addEventListener("click", saveImage);
fileInput.addEventListener("change", loadImage);
chooseImgBtn.addEventListener("click", () => fileInput.click());

// making tabs of registaring

var currentTab = 0; 
showTab(currentTab);

function showTab(n) {
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
}

function nextPrev(n) {
  var x = document.getElementsByClassName("tab");
  if (n == 1 && !validateForm()) return false;
  x[currentTab].style.display = "none";
  currentTab = currentTab + n;
  if (currentTab >= x.length) {
    document.getElementById("regForm").submit();
    return false;
  }
  showTab(currentTab);
}

function validateForm() {
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  for (i = 0; i < y.length; i++) {
    if (y[i].value == "") {
      y[i].className += " invalid";
      valid = false;
    }
  }
  if (valid) {
    return true
  }
  return valid;
}

//creating server to  store progress of user while reloading 

