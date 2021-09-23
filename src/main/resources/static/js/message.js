// received btn function
var receivedBtn = document.querySelector('.received.btn');
var sentBtn = document.querySelector('.sent.btn');
var receivedEl = document.querySelector('.list-box.received');
var sentEl = document.querySelector('.list-box.sent');

receivedBtn.addEventListener('click', function() {
    gsap.to(receivedEl, 0, {
        display: 'block',
    })
    gsap.to(receivedBtn, 0, {
        border: 'none',
        backgroundColor: 'gray'
    })
    gsap.to(sentBtn, 0, {
        border: '.5px solid black',
        backgroundColor: 'powderblue'
    })
    gsap.to(sentEl, 0, {
        display: 'none'
    })
})
// sent btn function
sentBtn.addEventListener('click', function() {
    gsap.to(receivedEl, 0, {
        display: 'none'
    })
    gsap.to(sentEl, 0, {
        display: 'block'
    })
    gsap.to(receivedBtn, 0, {
        border: '.5px solid black',
        backgroundColor: 'powderblue'
    })
    gsap.to(sentBtn, 0, {
        border: 'none',
        backgroundColor: 'gray'
    })
})