// 1. Get references to the button and the menu
        const menuToggle = document.querySelector('.mobile-nav-toggle');
        const mobileMenu = document.querySelector('.mobile-nav-menu');

        // 2. Add a click event listener to the button
        menuToggle.addEventListener('click', () => {
            // 3. Toggle the 'is-active' class on both elements
            menuToggle.classList.toggle('is-active');
            mobileMenu.classList.toggle('is-active');
        });

        // Optional: Close menu when a link is clicked
        const menuLinks = document.querySelectorAll('.mobile-nav-menu a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('is-active');
                mobileMenu.classList.remove('is-active');
            });
        });