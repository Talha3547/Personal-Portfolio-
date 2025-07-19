// Tab functionality
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('[data-tab]');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remove active class from all tabs and content
            document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            document.getElementById(tabId).classles.add('active');
        });
    });
    
    // Animate skill bars when skills tab is shown
    const skillsTab = document.querySelector('[data-tab="skills"]');
    if (skillsTab) {
        skillsTab.addEventListener('click', function() {
            setTimeout(() => {
                const skillBars = document.querySelectorAll('.skill-bar');
                skillBars.forEach(bar => {
                    const width = bar.getAttribute('data-width');
                    bar.style.width = width + '%';
                });
            }, 300);
        });
    }
});

// Function to download CV image
function downloadCV() {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = '1000032305.jpg'; // The filename of your CV image
    link.download = 'Shehroz_Khadim_CV.jpg'; // The filename you want to save as
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

