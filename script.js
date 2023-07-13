// Add click event listener to tab links
const tabLinks = document.querySelectorAll('.tab-link');
tabLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetTab = link.getAttribute('data-tab');
    showTabContent(targetTab);
  });
});

// Function to show the selected tab content
function showTabContent(tabId) {
  // Hide all tab contents
  const tabContents = document.querySelectorAll('.tab-content');
  tabContents.forEach(content => {
    content.style.display = 'none';
  });

  // Show the selected tab content
  const selectedTab = document.getElementById(tabId);
  selectedTab.style.display = 'block';
}
