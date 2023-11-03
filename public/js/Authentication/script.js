var signUp = document.getElementById('signupBtn');
var initialContent = document.querySelector('.inner-box');
var signupForm = document.querySelector('.sign-up-form');
var loginForm = document.querySelector('.sign-in-form');
var headerLoader = document.querySelector('.header-loader');
var containerTab = document.querySelector('.container-tabs');

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

        // setInterval(() => {
        //     optionMainContent.style.display = 'none';
        //     optionSideBarContent.style.display = 'none';
        // },2000);

        // setTimeout(() => {
        //     headerLoader.style.display = 'none';
        //     verifyingPage.style.display = 'block';
        // }, 2000);

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

             function loadingPage() {
                setTimeout(() => {
                    setInterval(() => {
                        headerLoader.style.display = 'block';
                    }, 2000)
                }, 2000)
             }
        });
    }); 
}, 1)

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