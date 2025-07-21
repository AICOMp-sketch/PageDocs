// Syntax highlighting
        document.addEventListener('DOMContentLoaded', (event) => {
            document.querySelectorAll('pre code').forEach((el) => {
                hljs.highlightElement(el);
            });
        });
        
        // Theme toggle
        const themeToggle = document.getElementById('theme-toggle');
        const themeIconDark = document.getElementById('theme-icon-dark');
        const themeIconLight = document.getElementById('theme-icon-light');
        
        themeToggle.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            themeIconDark.classList.toggle('hidden');
            themeIconLight.classList.toggle('hidden');
            
            // For demo purposes, we'll just toggle a dark class
            // In a real implementation, you would need proper dark mode handling
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
