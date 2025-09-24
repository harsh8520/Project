const lenis = new Lenis({
    duration: 1.5,       // speed (higher = smoother/slower)
    smoothWheel: true,   // smooth mouse wheel
    smoothTouch: true   // disable smooth for touch (can enable if you want)
})

// Animation frame loop (required)
function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}
requestAnimationFrame(raf)