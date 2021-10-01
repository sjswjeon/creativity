$('.third-page').ready(function() {
    if ($('.message-list__single-message') != null) {
        var firstReceivedMessageEl = $('.message-list__single-message');
        firstReceivedMessageEl.trigger('mouseenter');
    }
})

// side menu Animation
var sideMenuBtn = document.querySelector('.side-menu-btn');
var sideMenuPage = document.querySelector('.side-menu');
var darkeningPage = document.querySelector('.darkening');
var webSiteNameEl = document.querySelector('.website-name');
var isSideMenuOpen = false;

sideMenuBtn.addEventListener('click', function() {
    isSideMenuOpen = !isSideMenuOpen;

    if (isSideMenuOpen) {
        gsap.to(sideMenuPage, .4, {
            left: 0
        })
        gsap.to(darkeningPage, .4, {
            zIndex: 1,
            opacity: 1
        })
        gsap.to(sideMenuBtn, .4, {
            color: 'rgb(255, 232, 189)',
            borderColor: 'rgb(255, 232, 189)'
        })
        gsap.to(webSiteNameEl, .4, {
            scale: 1.3,
            left: '30px',
            color: 'rgb(255, 232, 189)'
        })
    } else {
        gsap.to(sideMenuPage, .4, {
            left: '-250px'
        })
        gsap.to(darkeningPage, .4, {
            zIndex: -1,
            opacity: 0
        })
        gsap.to(sideMenuBtn, .4, {
            color: '#333',
            borderColor: '#333'
        })
        gsap.to(webSiteNameEl, .4, {
            scale: 1,
            left: '20px',
            color: '#333'
        })
    }
})

darkeningPage.addEventListener('click', function() {
    if (isSideMenuOpen) {
        gsap.to(sideMenuPage, .4, {
            left: '-250px'
        })
        gsap.to(darkeningPage, .4, {
            zIndex: -1,
            opacity: 0
        })
        gsap.to(sideMenuBtn, .4, {
            color: '#333',
            borderColor: '#333'
        })
        gsap.to(webSiteNameEl, .4, {
            scale: 1,
            left: '20px',
            color: '#333'
        })
        isSideMenuOpen = !isSideMenuOpen;
    }
})


// preview received Message
var messageGroup = document.querySelectorAll('.received-message-page .message-li');
var k = messageGroup.length -1;

function previewMessage(id) {
    for(j=0; j < messageGroup.length; j++) {
        if (messageGroup[j].classList.contains('focused')) {
            messageGroup[j].classList.remove('focused');
        };
    };

    var currentMessage = document.querySelector('.received' + id);
    var i = 0;
    while((currentMessage = currentMessage.previousElementSibling) != null) {
        i++;
    }
    
    if (k >= 0) {
        var currentMessage = messageGroup[i];
        console.log('currentMessage = ' + currentMessage.className);
    }

    if (k >= 1) {
        if (currentMessage.previousElementSibling != null) {
            var prev1 = currentMessage.previousElementSibling;
        } else {
            var prev1 = messageGroup[k];
        }
    }
    
    if (k >= 2) {
        if (prev1.previousElementSibling != null) {
            var prev2 = prev1.previousElementSibling;
        } else {
            var prev2 = messageGroup[k];
        }
    }

    if (k >= 3) {
        if (prev2.previousElementSibling != null) {
            var prev3 = prev2.previousElementSibling;
        } else {
            var prev3 = messageGroup[k];
        }
    }

    if (k >= 4) {
        if (prev3.previousElementSibling != null) {
            var prev4 = prev3.previousElementSibling;
        } else {
            var prev4 = messageGroup[k];
        }
    }

    if (k >= 5) {
        if (prev4.previousElementSibling != null) {
            var prev5 = prev4.previousElementSibling;
        } else {
            var prev5 = messageGroup[k];
        }
    }

    if (k >= 6) {
        if(currentMessage.nextElementSibling != null) {
            var next1 = currentMessage.nextElementSibling;
        } else {
            var next1 = messageGroup[0]; 
        }
    }

    if (k >= 7) {
        if(next1.nextElementSibling != null) {
            var next2 = next1.nextElementSibling;
        } else {
            var next2 = messageGroup[0]; 
        }
    }

    if (k >= 8) {
        if(next2.nextElementSibling != null) {
            var next3 = next2.nextElementSibling;
        } else {
            var next3 = messageGroup[0]; 
        }
    }

    if (k >= 9) {
        if(next3.nextElementSibling != null) {
            var next4 = next3.nextElementSibling;
        } else {
            var next4 = messageGroup[0]; 
        }
    }

    if (k >= 10) {
        if(next4.nextElementSibling != null) {
            var next5 = next4.nextElementSibling;
        } else {
            var next5 = messageGroup[0]; 
        }
    }



 




// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    // if (currentMessage.previousElementSibling != null) {
    //     var prev1 = currentMessage.previousElementSibling;
    // } else {
    //     var prev1 = messageGroup[k];
    // }

    // if (prev1.previousElementSibling != null) {
    //     var prev2 = prev1.previousElementSibling;
    // } else {
    //     var prev2 = messageGroup[k];
    // }

    // if (prev2.previousElementSibling != null) {
    //     var prev3 = prev2.previousElementSibling;
    // } else {
    //     var prev3 = messageGroup[k];
    // }

    // if (prev3.previousElementSibling != null) {
    //     var prev4 = prev3.previousElementSibling;
    // } else {
    //     var prev4 = messageGroup[k];
    // }

    // if (prev4.previousElementSibling != null) {
    //     var prev5 = prev4.previousElementSibling;
    // } else {
    //     var prev5 = messageGroup[k];
    // }

    // if(prev5.previousElementSibling != null) {
    //     var next5 = prev5.previousElementSibling;
    // } else {
    //     var next5 = messageGroup[k]; 
    // }

    // if(next5.previousElementSibling != null) {
    //     var next4 = next5.previousElementSibling;
    // } else {
    //     var next4 = messageGroup[k]; 
    // }

    // if(next4.previousElementSibling != null) {
    //     var next3 = next4.previousElementSibling;
    // } else {
    //     var next3 = messageGroup[k]; 
    // }

    // if(next3.previousElementSibling != null) {
    //     var next2 = next3.previousElementSibling;
    // } else {
    //     var next2 = messageGroup[k]; 
    // }

    // if(next2.previousElementSibling != null) {
    //     var next1 = next2.previousElementSibling;
    // } else {
    //     var next1 = messageGroup[k]; 
    // }

    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    // if (currentMessage.nextElementSibling != null) {
    //     var next1 = currentMessage.nextElementSibling;
    // } else {
    //     var next1 = messageGroup[0];
    // }

    // if (next1.nextElementSibling != null) {
    //     var next2 = next1.nextElementSibling;
    // } else {
    //     var next2 = messageGroup[0];
    // }

    // if (next2.nextElementSibling != null) {
    //     var next3 = next2.nextElementSibling;
    // } else {
    //     var next3 = messageGroup[0];
    // }

    // if (next3.nextElementSibling != null) {
    //     var next4 = next3.nextElementSibling;
    // } else {
    //     var next4 = messageGroup[0];
    // }

    // if (next4.nextElementSibling != null) {
    //     var next5 = next4.nextElementSibling;
    // } else {
    //     var next5 = messageGroup[0];
    // }

    gsap.to(currentMessage, .2, {
        zIndex: 6,
        left: 0,
        scale: .6,
        opacity: 1
    })
    
    gsap.to(next1, .2, {
        left: '20%',
        zIndex: 5,
        scale: .47,
        opacity: .9
    })
    
    gsap.to(next2, .2, {
        left: '33%',
        zIndex: 4,
        scale: .43,
        opacity: .7
    })
    
    gsap.to(next3, .2, {
        left: '42%',
        zIndex: 3,
        scale: .4,
        opacity: .4
    })
    
    gsap.to(next4, .2, {
        left: '51%',
        zIndex: 2,
        scale: .35,
        opacity: .3
    })

    gsap.to(next5, .2, {
        left: '57%',
        scale: .3,
        zIndex: 1,
        opacity: .2
    })

    gsap.to(prev5, .2, {
        left: '-58%',
        zIndex: 1,
        scale: .3,
        opacity: .2
    })
        
    gsap.to(prev4, .2, {
        left: '-51%',
        zIndex: 2,
        scale: .35,
        opacity: .3
    })

    gsap.to(prev3, .2, {
        left: '-42%',
        zIndex: 3,
        scale: .4,
        opacity: .4
    })

    gsap.to(prev2, .2, {
        left: '-33%',
        zIndex: 4,
        scale: .43,
        opacity: .7
    })

    gsap.to(prev1, .2, {
        left: '-20%',
        scale: .47,
        zIndex: 5,
        opacity: .9
    })


    // var currentMessage = messageGroup[i];
    // i += 1;

    // if (i <= 10) {
    //     var message6 = messageGroup[i];
    //     i++;
    // } else {
    //     i = 0;
    //     var message6 = messageGroup[i];
    //     i++;
    // }

    // if (i <= 10) {
    //     var message7 = messageGroup[i];
    //     i++;
    // } else {
    //     i = 0;
    //     var message7 = messageGroup[i];
    //     i++;
    // }

    // if (i <= 10) {
    //     var message8 = messageGroup[i];
    //     i++;
    // } else {
    //     i = 0;
    //     var message8 = messageGroup[i];
    //     i++;
    // }

    // if (i <= 10) {
    //     var message9 = messageGroup[i];
    //     i++;
    // } else {
    //     i = 0;
    //     var message9 = messageGroup[i];
    //     i++;
    // }

    // if (i <= 10) {
    //     var message10 = messageGroup[i];
    //     i++;
    // } else {
    //     i = 0;
    //     var message10 = messageGroup[i];
    //     i++;
    // }

    // if (i <= 10) {
    //     var message0 = messageGroup[i];
    //     i++;
    // } else {
    //     i = 0;
    //     var message0 = messageGroup[i];
    //     i++;
    // }

    // if (i <= 10) {
    //     var message1 = messageGroup[i];
    //     i++;
    // } else {
    //     i = 0;
    //     var message1 = messageGroup[i];
    //     i++;
    // }

    // if (i <= 10) {
    //     var message2 = messageGroup[i];
    //     i++;
    // } else {
    //     i = 0;
    //     var message2 = messageGroup[i];
    //     i++;
    // }

    // if (i <= 10) {
    //     var message3 = messageGroup[i];
    //     i++;
    // } else {
    //     i = 0;
    //     var message3 = messageGroup[i];
    //     i++;
    // }

    // if (i <= 10) {
    //     var message4 = messageGroup[i];
    //     i++;
    // } else {
    //     i = 0;
    //     var message4 = messageGroup[i];
    //     i++;
    // }

    currentMessage.classList.add('focused');

    console.log('prev5 = ' + prev5.className);
    console.log('prev4 = ' + prev4.className);
    console.log('prev3 = ' + prev3.className);
    console.log('prev2 = ' + prev2.className);
    console.log('prev1 = ' + prev1.className);
    console.log('currentMessage = ' + currentMessage.className);
    console.log('next1 = ' + next1.className);
    console.log('next2 = ' + next2.className);
    console.log('next3 = ' + next3.className);
    console.log('next4 = ' + next4.className);
    console.log('next5 = ' + next5.className);

    console.log('----------------');
}


// Message received Hover

function mouseOverMessage(id) {
    for (var l=0; l < messageGroup.length; l++) {
        messageGroup[l].classList.remove('focused');
    }

    if (k >= 0) {
        var currentMessage = document.querySelector('.received' + id);
    }

    if (k >= 1) {
        if (currentMessage.previousElementSibling != null) {
            var prev1 = currentMessage.previousElementSibling;
        } else {
            var prev1 = messageGroup[k];
        }
    }
    
    if (k >= 2) {
        if (prev1.previousElementSibling != null) {
            var prev2 = prev1.previousElementSibling;
        } else {
            var prev2 = messageGroup[k];
        }
    }

    if (k >= 3) {
        if (prev2.previousElementSibling != null) {
            var prev3 = prev2.previousElementSibling;
        } else {
            var prev3 = messageGroup[k];
        }
    }

    if (k >= 4) {
        if (prev3.previousElementSibling != null) {
            var prev4 = prev3.previousElementSibling;
        } else {
            var prev4 = messageGroup[k];
        }
    }

    if (k >= 5) {
        if (prev4.previousElementSibling != null) {
            var prev5 = prev4.previousElementSibling;
        } else {
            var prev5 = messageGroup[k];
        }
    }

    if (k >= 6) {
        if(currentMessage.nextElementSibling != null) {
            var next1 = currentMessage.nextElementSibling;
        } else {
            var next1 = messageGroup[0]; 
        }
    }

    if (k >= 7) {
        if(next1.nextElementSibling != null) {
            var next2 = next1.nextElementSibling;
        } else {
            var next2 = messageGroup[0]; 
        }
    }

    if (k >= 8) {
        if(next2.nextElementSibling != null) {
            var next3 = next2.nextElementSibling;
        } else {
            var next3 = messageGroup[0]; 
        }
    }

    if (k >= 9) {
        if(next3.nextElementSibling != null) {
            var next4 = next3.nextElementSibling;
        } else {
            var next4 = messageGroup[0]; 
        }
    }

    if (k >= 10) {
        if(next4.nextElementSibling != null) {
            var next5 = next4.nextElementSibling;
        } else {
            var next5 = messageGroup[0]; 
        }
    }

    gsap.to(currentMessage, .2, {
        zIndex: 6,
        left: 0,
        scale: .6,
        opacity: 1
    })
    
    gsap.to(next1, .2, {
        left: '20%',
        zIndex: 5,
        scale: .47,
        opacity: .9
    })
    
    gsap.to(next2, .2, {
        left: '33%',
        zIndex: 4,
        scale: .43,
        opacity: .7
    })
    
    gsap.to(next3, .2, {
        left: '42%',
        zIndex: 3,
        scale: .4,
        opacity: .4
    })
    
    gsap.to(next4, .2, {
        left: '51%',
        zIndex: 2,
        scale: .35,
        opacity: .3
    })

    gsap.to(next5, .2, {
        left: '57%',
        scale: .3,
        zIndex: 1,
        opacity: .2
    })

    gsap.to(prev5, .2, {
        left: '-58%',
        zIndex: 1,
        scale: .3,
        opacity: .2
    })
        
    gsap.to(prev4, .2, {
        left: '-51%',
        zIndex: 2,
        scale: .35,
        opacity: .3
    })

    gsap.to(prev3, .2, {
        left: '-42%',
        zIndex: 3,
        scale: .4,
        opacity: .4
    })

    gsap.to(prev2, .2, {
        left: '-33%',
        zIndex: 4,
        scale: .43,
        opacity: .7
    })

    gsap.to(prev1, .2, {
        left: '-20%',
        scale: .47,
        zIndex: 5,
        opacity: .9
    })

    currentMessage.classList.add('focused');

}

// preview sent message 

var sentMessageGroup = document.querySelectorAll('.sent-message-page .message-li');

function previewSentMessage(id) {
    for(j=0; j < sentMessageGroup.length; j++) {
        if (sentMessageGroup[j].classList.contains('focused')) {
            sentMessageGroup[j].classList.remove('focused');
        };
    };

    var currentMessage = document.querySelector('.sent' + id);
    var i = 0;
    while((currentMessage = currentMessage.previousElementSibling) != null) {
        i++;
    }

    if (k >= 0) {
        var currentMessage = sentMessageGroup[i];
        console.log('currentMessage = ' + currentMessage.className);
    }

    if (k >= 1) {
        if (currentMessage.previousElementSibling != null) {
            var prev1 = currentMessage.previousElementSibling;
        } else {
            var prev1 = sentMessageGroup[k];
        }
    }
    
    if (k >= 2) {
        if (prev1.previousElementSibling != null) {
            var prev2 = prev1.previousElementSibling;
        } else {
            var prev2 = sentMessageGroup[k];
        }
    }

    if (k >= 3) {
        if (prev2.previousElementSibling != null) {
            var prev3 = prev2.previousElementSibling;
        } else {
            var prev3 = sentMessageGroup[k];
        }
    }

    if (k >= 4) {
        if (prev3.previousElementSibling != null) {
            var prev4 = prev3.previousElementSibling;
        } else {
            var prev4 = sentMessageGroup[k];
        }
    }

    if (k >= 5) {
        if (prev4.previousElementSibling != null) {
            var prev5 = prev4.previousElementSibling;
        } else {
            var prev5 = sentMessageGroup[k];
        }
    }

    if (k >= 6) {
        if(currentMessage.nextElementSibling != null) {
            var next1 = currentMessage.nextElementSibling;
        } else {
            var next1 = sentMessageGroup[0]; 
        }
    }

    if (k >= 7) {
        if(next1.nextElementSibling != null) {
            var next2 = next1.nextElementSibling;
        } else {
            var next2 = sentMessageGroup[0]; 
        }
    }

    if (k >= 8) {
        if(next2.nextElementSibling != null) {
            var next3 = next2.nextElementSibling;
        } else {
            var next3 = sentMessageGroup[0]; 
        }
    }

    if (k >= 9) {
        if(next3.nextElementSibling != null) {
            var next4 = next3.nextElementSibling;
        } else {
            var next4 = sentMessageGroup[0]; 
        }
    }

    if (k >= 10) {
        if(next4.nextElementSibling != null) {
            var next5 = next4.nextElementSibling;
        } else {
            var next5 = sentMessageGroup[0]; 
        }
    }

    gsap.to(currentMessage, .2, {
        zIndex: 6,
        left: 0,
        scale: .6,
        opacity: 1
    })
    
    gsap.to(next1, .2, {
        left: '20%',
        zIndex: 5,
        scale: .47,
        opacity: .9
    })
    
    gsap.to(next2, .2, {
        left: '33%',
        zIndex: 4,
        scale: .43,
        opacity: .7
    })
    
    gsap.to(next3, .2, {
        left: '42%',
        zIndex: 3,
        scale: .4,
        opacity: .4
    })
    
    gsap.to(next4, .2, {
        left: '51%',
        zIndex: 2,
        scale: .35,
        opacity: .3
    })

    gsap.to(next5, .2, {
        left: '57%',
        scale: .3,
        zIndex: 1,
        opacity: .2
    })

    gsap.to(prev5, .2, {
        left: '-58%',
        zIndex: 1,
        scale: .3,
        opacity: .2
    })
        
    gsap.to(prev4, .2, {
        left: '-51%',
        zIndex: 2,
        scale: .35,
        opacity: .3
    })

    gsap.to(prev3, .2, {
        left: '-42%',
        zIndex: 3,
        scale: .4,
        opacity: .4
    })

    gsap.to(prev2, .2, {
        left: '-33%',
        zIndex: 4,
        scale: .43,
        opacity: .7
    })

    gsap.to(prev1, .2, {
        left: '-20%',
        scale: .47,
        zIndex: 5,
        opacity: .9
    })

    currentMessage.classList.add('focused');
}

// Message sent Hover

function mouseOverSentMessage(id) {
    for (var l=0; l < sentMessageGroup.length; l++) {
        sentMessageGroup[l].classList.remove('focused');
    }

    if (k >= 0) {
        var currentMessage = document.querySelector('.sent' + id);
    }

    if (k >= 1) {
        if (currentMessage.previousElementSibling != null) {
            var prev1 = currentMessage.previousElementSibling;
        } else {
            var prev1 = sentMessageGroup[k];
        }
    }
    
    if (k >= 2) {
        if (prev1.previousElementSibling != null) {
            var prev2 = prev1.previousElementSibling;
        } else {
            var prev2 = sentMessageGroup[k];
        }
    }

    if (k >= 3) {
        if (prev2.previousElementSibling != null) {
            var prev3 = prev2.previousElementSibling;
        } else {
            var prev3 = sentMessageGroup[k];
        }
    }

    if (k >= 4) {
        if (prev3.previousElementSibling != null) {
            var prev4 = prev3.previousElementSibling;
        } else {
            var prev4 = sentMessageGroup[k];
        }
    }

    if (k >= 5) {
        if (prev4.previousElementSibling != null) {
            var prev5 = prev4.previousElementSibling;
        } else {
            var prev5 = sentMessageGroup[k];
        }
    }

    if (k >= 6) {
        if(currentMessage.nextElementSibling != null) {
            var next1 = currentMessage.nextElementSibling;
        } else {
            var next1 = sentMessageGroup[0]; 
        }
    }

    if (k >= 7) {
        if(next1.nextElementSibling != null) {
            var next2 = next1.nextElementSibling;
        } else {
            var next2 = sentMessageGroup[0]; 
        }
    }

    if (k >= 8) {
        if(next2.nextElementSibling != null) {
            var next3 = next2.nextElementSibling;
        } else {
            var next3 = sentMessageGroup[0]; 
        }
    }

    if (k >= 9) {
        if(next3.nextElementSibling != null) {
            var next4 = next3.nextElementSibling;
        } else {
            var next4 = sentMessageGroup[0]; 
        }
    }

    if (k >= 10) {
        if(next4.nextElementSibling != null) {
            var next5 = next4.nextElementSibling;
        } else {
            var next5 = sentMessageGroup[0]; 
        }
    }

    gsap.to(currentMessage, .2, {
        zIndex: 6,
        left: 0,
        scale: .6,
        opacity: 1
    })
    
    gsap.to(next1, .2, {
        left: '20%',
        zIndex: 5,
        scale: .47,
        opacity: .9
    })
    
    gsap.to(next2, .2, {
        left: '33%',
        zIndex: 4,
        scale: .43,
        opacity: .7
    })
    
    gsap.to(next3, .2, {
        left: '42%',
        zIndex: 3,
        scale: .4,
        opacity: .4
    })
    
    gsap.to(next4, .2, {
        left: '51%',
        zIndex: 2,
        scale: .35,
        opacity: .3
    })

    gsap.to(next5, .2, {
        left: '57%',
        scale: .3,
        zIndex: 1,
        opacity: .2
    })

    gsap.to(prev5, .2, {
        left: '-58%',
        zIndex: 1,
        scale: .3,
        opacity: .2
    })
        
    gsap.to(prev4, .2, {
        left: '-51%',
        zIndex: 2,
        scale: .35,
        opacity: .3
    })

    gsap.to(prev3, .2, {
        left: '-42%',
        zIndex: 3,
        scale: .4,
        opacity: .4
    })

    gsap.to(prev2, .2, {
        left: '-33%',
        zIndex: 4,
        scale: .43,
        opacity: .7
    })

    gsap.to(prev1, .2, {
        left: '-20%',
        scale: .47,
        zIndex: 5,
        opacity: .9
    })

    currentMessage.classList.add('focused');

}


// received <-> Sent Switch

var receivedBtn = document.querySelector('.received-message-btn');
var sentBtn = document.querySelector('.sent-message-btn');
var writeNewMessageBtn = document.querySelector('.write-message-btn');

var receivedMessageList = document.querySelector('.third-page .received-page');
var sentMessageList = document.querySelector('.third-page .sent-page');
var receivedMessagePage = document.querySelector('.third-page .received-message-page');
var sentMessagePage = document.querySelector('.third-page .sent-message-page');
var newMessageList = document.querySelector('.third-page .new-message-page');

sentBtn.addEventListener('click', function() {

    if ($('.message-list__single-message.sent') != null) {
        var firstSentMessageEl = $('.message-list__single-message.sent');
        firstSentMessageEl.trigger('mouseenter');
    }

    gsap.to(receivedMessageList, .2, {
        left: '-69%',
        opacity: 0,
        display: 'none'
    })

    gsap.to(receivedMessagePage, 0, {
        opacity: 0,
        display: 'none'
    })

    gsap.to(sentMessageList, .2, {
        scale: 1,
        left: '10%',
        opacity: 1,
        display: 'block'
    })

    gsap.to(sentMessagePage, 0, {
        opacity: 1,
        display: 'block'
    })

    gsap.to(newMessageList, .2, {
        left: '89%',
        display: 'none',
        opacity: 0
    })
})

receivedBtn.addEventListener('click', function() {

    // if ($('.message-list__single-message') != null) {
    //     var firstReceivedMessageEl = $('.message-list__single-message');
    //     firstReceivedMessageEl.trigger('mouseenter');
    // }

    gsap.to(receivedMessageList, .2, {
        scale: 1,
        left: '10%',
        opacity: 1,
        display: 'block'
    })

    gsap.to(receivedMessagePage, 0, {
        opacity: 1,
        display: 'block'
    })

    gsap.to(sentMessageList, .2, {
        left: '89%',
        opacity: 0,
        display: 'none'
    })

    gsap.to(sentMessagePage, 0, {
        opacity: 0,
        display: 'none'
    })

    gsap.to(newMessageList, .2, {
        left: '168%',
        display: 'none',
        opacity: 0
    })
})

writeNewMessageBtn.addEventListener('click', function() {
    gsap.to(receivedMessageList, .2, {
        scale: 1,
        left: '-129%',
        opacity: 1,
        display: 'block'
    })

    gsap.to(sentMessageList, .2, {
        left: '-69%',
        opacity: 0,
        display: 'none'
    })

    gsap.to(newMessageList, .2, {
        left: '10%',
        display: 'block',
        opacity: 1
    })
})
