function showTab(tabId) {
    var tabs = document.getElementsByClassName("item-tab");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.opacity = 0;
        tabs[i].classList.remove("active");
    }
    var tabToShow = document.querySelector('[data-tab="' + tabId + '"]');
    tabToShow.style.opacity = 1;
    tabToShow.classList.add("active");
}