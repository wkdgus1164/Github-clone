(function(window, document) {
    'use strict';

    const $toggles = document.querySelectorAll('.toggle');
    const $toggleBtn = document.getElementById('toggle-btn');

    $toggleBtn.addEventListener('click', () => {
        toggleElements();
    });

    const toggleElements = () => {
        [].forEach.call($toggles, toggle => {
            toggle.classList.toggle('on');
        });
    }
})(window, document)