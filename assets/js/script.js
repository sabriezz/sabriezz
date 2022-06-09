'use strict';


function docReady(fn) {
  // see if DOM is already available
  if (document.readyState === "complete" || document.readyState === "interactive") {
      // call on next available tick
      setTimeout(fn, 1);
  } else {
      document.addEventListener("DOMContentLoaded", fn);
  }
}    

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });


// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");


// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}


function delay(fn, params, t) {
  // private instance variables
  var queue = [], self, timer;
  
  function schedule(fn, params,t) {
      timer = setTimeout(function() {
          timer = null;
          fn(params)
          if (queue.length) {
              var item = queue.shift();
              schedule(item.fn, item.params, item.t);
          }
      }, t);            
  }
  self = {
      delay: function(fn, params, t) {
          // if already queuing things or running a timer, 
          //   then just add to the queue
          if (queue.length || timer) {
              queue.push({fn: fn, params: params, t: t});
          } else {
              // no queue or timer yet, so schedule the timer
              schedule(fn, params, t);
          }
          return self;
      },
      cancel: function() {
          clearTimeout(timer);
          queue = [];
          return self;
      }
  };
  return self.delay(fn, params, t);
}


function sleeping(params){
  document.querySelector('.chat').classList.add('hide');
  let image = document.querySelector('img');
  image.setAttribute('src', './assets/images/clouds.png');
}

function chatting(params){
  document.querySelector('.chat').classList.remove('hide');
  let message = document.querySelector('.message.last');
  let image = document.querySelector('img');
  image.setAttribute('src', './assets/images/smile.png');
  message.innerHTML = 'It happens so often! I need some rest!';
}

function solving(params){
  document.querySelector('.chat').classList.remove('hide');
  let message = document.querySelector('.message.last');
  let image = document.querySelector('img');
  image.setAttribute('src', './assets/images/oh-no.png');
  message.innerHTML = 'I just missed a semicolon! 🤔';
}

function debugging(params){
  document.querySelector('.chat').classList.remove('hide');
  let message = document.querySelector('.message.last');
  let image = document.querySelector('img');
  image.setAttribute('src', './assets/images/angry.png');
  message.innerHTML = 'Oh no! It seems like I\'m debugging! 🤬';
}

function programming (params){
  document.querySelector('.chat').classList.remove('hide');
    let message = document.querySelector('.message.last');
    if(params.showtext){
      message.innerHTML = 'I\'m programming! 💻';
    }else{
      document.querySelector('.chat').classList.add('hide');
    }
    let image = document.querySelector('img');
    image.setAttribute('src', './assets/images/programming.png');
}

function welcoming(params){
  document.querySelector('.chat').classList.remove('hide');
  let message = document.querySelector('.message.last');
  let image = document.querySelector('img');
  image.setAttribute('src', './assets/images/smile.png');
  message.innerHTML = 'How are you? I\'m doing ok! 😊';
}

function waving (params){
    document.querySelector('.chat').classList.remove('hide');
    let message = document.querySelector('.message.last');
    let image = document.querySelector('img');
    image.setAttribute('src', './assets/images/waving.png');
    message.innerHTML = 'Hi There! 👋';
}

function writing(params){
    let image = document.querySelector('img');
    image.setAttribute('src', './assets/images/thinking.png');
    document.querySelector('.chat').classList.remove('hide');
    document.querySelector('.message.last').innerHTML = '&nbsp; <div class="dot-flashing"></div> &nbsp; ';
}

docReady(function () {


  // 3 dot animation for message
var d = delay(writing, {'showtext':true}, 3000)
        .delay(waving,{'showtext':true},3000)
        .delay(welcoming,{'showtext':true},3000)
        .delay(programming,{'showtext':true},5000)
        .delay(debugging,{'showtext':true}, 5000)
        .delay(programming,{'showtext':false},6000)
        .delay(solving,{'showtext':true},3000)
        .delay(chatting,{'showtext':true},3000)
        .delay(sleeping,{'showtext':false},3000);
  //after 3 seconds adds class to .message.last div
  // //modify text of div class 'message last'
  // const message = document.querySelector('.message.last');
  // message.innerHTML = '<p>Thank you for your message!</p>';

  // //modify src of tag image
  // const image = document.querySelector('img');
  // image.setAttribute('src', '/assets/images/angry.png');



});