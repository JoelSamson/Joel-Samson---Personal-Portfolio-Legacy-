const toggleSidebar = () => document.body.classList.toggle("open");
      
function gotoprev(){
  window.open("loader.html","_self");
}
$(window).on('beforeunload', function(){
  $(window).scrollTop(0);
});


///Modal Image Gallery

// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

//Javascript for the flutter text
class TextScramble {
  constructor(el) {
    this.el = el
    this.chars = '!<>-_\\/[]{}—=+*^?#________'
    this.update = this.update.bind(this)
  }
  setText(newText) {
    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise((resolve) => this.resolve = resolve)
    this.queue = []
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({ from, to, start, end })
    }
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }
  update() {
    let output = ''
    let complete = 0
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar()
          this.queue[i].char = char
        }
        output += `<span class="dud">${char}</span>`
      } else {
        output += from
      }
    }
    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
  }
}
const phrases = [
'I work with',
'Java',
'Python',
'HTML & CSS',
'JavaScript',
'Node.js',
'MongoDB',
'PHP & MySQL',
'C/C++'
]

const el = document.querySelector('.text')
const fx = new TextScramble(el)

let counter = 0
const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 800)
  })
  counter = (counter + 1) % phrases.length
}

next()



$(document).ready(function () {
				screenCheck();

				$('.scroll-control .one').click(function () {
					$.scrollify.move('#s-one');
				});
				$('.scroll-control .two').click(function () {
					$.scrollify.move('#s-two');
				});
				$('.scroll-control .three').click(function () {
					$.scrollify.move('#s-three');
				});
        $('.scroll-control .four').click(function () {
					$.scrollify.move('#s-four');
				});
        $('.scroll-control .five').click(function () {
					$.scrollify.move('#s-five');
				});
        $('.scroll-control .six').click(function () {
					$.scrollify.move('#s-six');
				});
        $('.scroll-control .seven').click(function () {
					$.scrollify.move('#s-seven');
				});
        $('.scroll-control .eight').click(function () {
					$.scrollify.move('#s-eight');
				});
			});

			$(window).on('resize', function () {
				screenCheck();
        screenRemove();
			});

			function applyScroll() {
				$.scrollify({
					section: '.scroll',
					sectionName: 'section-name',
					//standardScrollElements: 'section',
					easing: 'easeOutExpo',
					scrollSpeed: 1100,
					offset: 0,
          scrolled : true,
					scrollbars: true,
					setHeights: true,
					overflowScroll: true,
					updateHash: false,
					touchScroll: true,
				});
			}

			function screenCheck() {
				var deviceAgent = navigator.userAgent.toLowerCase();
				var agentID = deviceAgent.match(/(iphone|ipod|ipad)/);
				if (agentID || $(window).width() <= 1024) {
					// its mobile screen
					$.scrollify.destroy();
					$('section').removeClass('scroll').removeAttr('style');
					$.scrollify.disable();
				} else {
					// its desktop
					$('section').addClass('scroll');
					applyScroll();
					$.scrollify.enable();
				}
			}
      function screenRemove() {
				var deviceAgent = navigator.userAgent.toLowerCase();
				var agentID = deviceAgent.match(/(iphone|ipod|ipad)/);
				if (agentID || $(window).width() <= 1024) {
					// its mobile screen
          $(".navig").css("display","none");
				} else {
					// its desktop
          $(".navig").css("display","block");
				}
			}