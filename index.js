const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navLinks = document.getElementsByClassName('nav-ul')[0];

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
})

    gsap.to('.header-title-studio', {duration:1.5, ease: "power4.out", x:-1000});
    gsap.to('.header-title-studio2', {duration:1.5, ease: "power4.out", x:-1000})
    gsap.to("#studio-buds", {duration: 1.5, ease: "power2.out", x:1000 });

    gsap.to('#beats-flex', {
        scrollTrigger: {
            trigger: '#studio-buds',
            start: 'center center'
        },
        x:-1200
    });
    gsap.to('.second-title', {
        scrollTrigger: {
            trigger: '#beats-flex',
            start: 'center center'
        },
        x:-1000
    });
    gsap.to('.second-title2', {
        scrollTrigger: {
            trigger: '#beats-flex',
            start: 'center center'
        },
        x:-1000
    });
    gsap.to('#powerbeats', {
        scrollTrigger: {
            trigger: '#beats-flex',
            start: 'center center'
        },
        x:-1000
    });
    gsap.to('#powerbeats-pro', {
        scrollTrigger: {
            trigger: '#powerbeats',
            start: 'center center'
        },
        x:1000
    });
    const buyButton = document.querySelectorAll('.buyNow');
    const learnButton = document.querySelectorAll('.learnMore');
    buyButton.forEach(function(currentbtn) {
        currentbtn.addEventListener('click', () => {
            document.location.href = "https://www.beatsbydre.com/products";
        })
    })
    learnButton.forEach(function(egg) {
        egg.addEventListener('click', () => {
            document.location.href = "https://www.beatsbydre.com/products";
        })
    })