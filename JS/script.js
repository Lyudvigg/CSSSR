const getElement = id => document.querySelector(id);
const sliderItemHandler = (getterClass, itemValue, classListValue) => {
  getElement(getterClass).addEventListener("click", () => {
    sliderItems.value = itemValue;
    thumb.className = "slider-block";
    thumb.classList.add(classListValue);
  });
};

const bornData = getElement(`#born_data`);
const thumb = getElement(".slider-block");
const emailData = getElement(`#email_data`);
const sliderItems = getElement(".inp--slider");
const invalid_email = getElement(`.invalid-email`);

bornData.onkeypress = () => !(bornData.value.length >= 4);

emailData.onkeyup = () => {
  const regExpEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const { value } = emailData;

  regExpEmail.test(value.toLowerCase())
    ? invalid_email.classList.add("d_none")
    : invalid_email.classList.remove("d_none");
};

sliderItems.addEventListener("input", function() {
  switch (this.value) {
    case "1":
      thumb.className = "slider-block";
      thumb.classList.add("first");
      break;
    case "2":
      thumb.className = "slider-block";
      thumb.classList.add("second");
      break;
    case "3":
      thumb.className = "slider-block";
      thumb.classList.add("third");
      break;
    case "4":
      thumb.className = "slider-block";
      thumb.classList.add("fourth");
      break;

    default:
      break;
  }
});

sliderItemHandler(".slider-menu-first", "1", "first");
sliderItemHandler(".slider-menu-second", "2", "second");
sliderItemHandler(".slider-menu-third", "3", "third");
sliderItemHandler(".slider-menu-fourth", "4", "fourth");

const thumbElem = getElement('.thumb');
const sliderItem = document.querySelectorAll(".slider-menu-item-all");
for (i = 0; i < sliderItem.length - 1; i++) {
  sliderItem[i].addEventListener('click', function() {
    let offsetLeftVal = this.offsetLeft;
    console.log(offsetLeftVal)
    thumbElem.style.left = offsetLeftVal + 'px';
  });
}

getElement('.slider-menu-fourth').addEventListener('click', function () {
  thumbElem.style.left = 'calc(100% - 4px)'
})

let mousePosition;
let offset = [0,0];
let thumbSlider;
let isDown = false;
let contanier = document.querySelector('.content-container');
thumbSlider = document.getElementById("thumb");

thumbSlider.addEventListener('mousedown', function(e) {
    isDown = true;
}, true);

document.addEventListener('mouseup', function() {
    isDown = false;
}, true);

document.addEventListener('mousemove', function(event) {
    event.preventDefault();
    if (isDown) {
        mousePosition = {
            x : event.clientX,
        };
        let thumbLeft = mousePosition.x - contanier.offsetLeft;
        let sliderMenuSecond = document.querySelector('.slider-menu-second').offsetLeft;
        let sliderMenuThird = document.querySelector('.slider-menu-third').offsetLeft;

        if (thumbLeft < 50) {
          thumbSlider.style.left = '0px';
        } else if (thumbLeft < 142) {
            thumbSlider.style.left = sliderMenuSecond + 'px';
        } else if (thumbLeft < 385) {
            thumbSlider.style.left = sliderMenuThird + 'px';
        } else if (thumbLeft < 585) {
          thumbSlider.style.left = sliderMenuThird + 'px';
        } else {
            thumbSlider.style.left = 'calc(100% - 4px)';
        }
    }
}, true);

flatpickr("#datepicker", {
  dateFormat: "d.m.Y"
});

