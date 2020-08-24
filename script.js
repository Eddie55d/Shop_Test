const Tabs = document.querySelector('.Tabs');
const TabButtons = Tabs.querySelectorAll('.TabButton');
const TabPannels = Array.from(Tabs.querySelectorAll('.TabPannel'));

function handleTabButtonClick(event) {
    // hide all buttons by default
    TabButtons.forEach(button => {
        button.setAttribute('aria-selected', false);
    });
    event.currentTarget.setAttribute('aria-selected', true);

    // hide all tab panels by default
    TabPannels.forEach(panel => {
        panel.hidden = true;
    });
    // connect the tab button to the corresponding div panel
    const { id } = event.currentTarget;
    const correspondingTabPanel = TabPannels.find(panel => panel.getAttribute('aria-labelledby') === id);
    correspondingTabPanel.hidden = false;
}

TabButtons.forEach(button => button.addEventListener('click', handleTabButtonClick));