const music = document.getElementById("music");

document.addEventListener("DOMContentLoaded", (event) => {
    audio.muted = false;
    music.loop = true;
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