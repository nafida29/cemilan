<script src="script.js"></script>
document.querySelector('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click',function(e) {
        e.prevenDefault();

        document.querySelector(this.getAttribute('href')).scrollintoView({
            behavior: 'smooth'
        });
    });
});