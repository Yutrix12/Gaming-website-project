document.addEventListener("DOMContentLoaded", function () {
    // Dropdown Menu Functionality
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseenter', function () {
            this.querySelector('.dropdown-menu').classList.add('active');
        });

        dropdown.addEventListener('mouseleave', function () {
            this.querySelector('.dropdown-menu').classList.remove('active');
        });

        dropdown.addEventListener('click', function () {
            this.classList.toggle('active');
            let dropdownMenu = this.querySelector('.dropdown-menu');
            dropdownMenu.classList.toggle('show');
        });
    });

    // Search Box Functionality
    const searchBox = document.querySelector('.search-box input');
    const searchIcon = document.querySelector('.search-box i');

    searchIcon.addEventListener('click', function () {
        const query = searchBox.value.trim();
        if (query) {
            alert(`Search for: ${query}`);
            // Add your search logic here
        }
    });

    searchBox.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            const query = searchBox.value.trim();
            if (query) {
                alert(`Search for: ${query}`);
                // Add your search logic here
            }
        }
    });

    // Mobile Menu Toggle (if needed)
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', function () {
            navbarMenu.classList.toggle('active');
        });
    }

    // Login Form Handling
    const loginForm = document.querySelector("#loginForm");
    
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent the form from submitting normally
            const username = document.querySelector("#username").value;
            const password = document.querySelector("#password").value;
    
            if (username && password) {
                alert(`Logging in as ${username}`);
                // Here you can add your login logic (e.g., sending data to a server)
                window.location.href = 'index.html'; // Redirect to index.html after login
            } else {
                alert("Please fill in all fields");
            }
        });
    }
});

