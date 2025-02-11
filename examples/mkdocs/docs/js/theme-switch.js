/**
 * Theme Switch Integration for Gurubase Chat Widget
 * 
 * This script synchronizes the theme (light/dark mode) between MkDocs and the Gurubase chat widget.
 * It works by:
 * 1. Waiting for the chat widget to be initialized
 * 2. Setting up a MutationObserver to detect theme changes in MkDocs
 * 3. Automatically switching the widget theme when MkDocs theme changes
 * 4. Setting the correct initial theme on page load
 * 
 * The script handles theme synchronization by monitoring changes to the visibility
 * of theme toggle labels in the MkDocs header.
 */

// Theme switch integration with Gurubase widget

document.addEventListener('DOMContentLoaded', function() {
    // Wait for widget to be initialized
    const waitForWidget = setInterval(() => {
        if (window.chatWidget) {
            clearInterval(waitForWidget);
            
            let lastThemeChange = Date.now();
            
            // Set up theme change detection
            const observer = new MutationObserver((mutations) => {
                
                // Find the mutation where a label becomes visible (hidden attribute is removed)
                const themeChange = mutations.find(mutation => 
                    mutation.target.classList.contains('md-header__button') && 
                    mutation.attributeName === 'hidden' &&
                    !mutation.target.hasAttribute('hidden')  // Only process the label becoming visible
                );

                if (themeChange && Date.now() - lastThemeChange > 100) {
                    lastThemeChange = Date.now();
                    window.chatWidget.switchTheme();
                }
            });

            // Find and observe both theme toggle labels
            const themeToggles = document.querySelectorAll('label.md-header__button.md-icon');
            
            if (themeToggles.length > 0) {
                themeToggles.forEach(toggle => {
                    observer.observe(toggle, {
                        attributes: true,
                        attributeOldValue: true,
                        attributeFilter: ['hidden', 'title']
                    });
                });

                // Set initial theme based on current MkDocs theme
                const htmlElement = document.querySelector('body');
                const currentTheme = htmlElement.getAttribute('data-md-color-scheme');
                const widgetShouldBeDark = currentTheme === 'slate';
                const widgetIsDark = !window.chatWidget.lightMode;

                console.log('Initial theme check:', {
                    mkdocsTheme: currentTheme,
                    widgetShouldBeDark,
                    widgetIsDark,
                    needsSwitch: widgetShouldBeDark !== widgetIsDark
                });

                // Only switch if there's a mismatch
                if (widgetShouldBeDark !== widgetIsDark) {
                    window.chatWidget.switchTheme();
                }
            } else {
                console.error('Theme toggle labels not found!');
            }
        }
    }, 1000);

    // Add a timeout to stop checking after 30 seconds
    setTimeout(() => {
        if (window.chatWidget) {
            console.log('Widget initialization successful');
        } else {
            console.error('Widget not found after 30 seconds');
            clearInterval(waitForWidget);
        }
    }, 30000);
}); 