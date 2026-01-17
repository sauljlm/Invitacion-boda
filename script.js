const music = document.getElementById("music");
const btn = document.querySelector(".enable-audio");

btn.addEventListener("click", () => {
    if (music.paused) {
        console.log('play')
        music.muted = false;
        music.volume = 1;
        music.play();
        btn.classList.add("pause-button");
    } else {
        music.pause();
        btn.classList.remove("pause-button");
    }
});

document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger,SplitText)

    const sections = document.querySelectorAll(".primary-animation");
    const galleryBoxes = document.querySelectorAll(".album-row");

    sections.forEach(section => {
        gsap.from(section, {
          y: 50,
          autoAlpha: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });
    });

    galleryBoxes.forEach(box => {
        gsap.from(box, {
            x: -50,
            autoAlpha: 0,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: box,
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        });
    });
});