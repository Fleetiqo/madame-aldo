// ── Scroll header
const header = document.querySelector('.header')
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40)
})

// ── Mobile menu
const toggle = document.querySelector('.nav__toggle')
const menu   = document.querySelector('.nav__menu')
toggle?.addEventListener('click', () => menu.classList.toggle('active'))
menu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('active')))

// ── Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) } })
}, { threshold: 0.12 })
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el))
