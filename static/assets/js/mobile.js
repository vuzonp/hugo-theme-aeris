document.addEventListener('DOMContentLoaded', function() {


    // Selectors
    var s = document.createElement('span');
    s.setAttribute('aria-visibility', 'hidden');
    s.appendChild(document.createTextNode('\u00d7'));

    var b = document.createElement('div');
    b.setAttribute('id', 'switch-menu');
    b.appendChild(s);

    var m = document.getElementById('menu');
    m.insertBefore(b, m.firstChild);

    // Events
    b.onclick = function(ev) {
        if (m.className == 'opened') {
            m.className = '';
        } else {
            m.className = 'opened';
        }
    };

});
