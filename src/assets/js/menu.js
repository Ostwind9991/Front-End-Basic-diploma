function toggleMeTu(a, currEle) {
    var t = currEle;
    var e = document.getElementById(a);
    if (!e) return true;
    if (e.style.display == "none") {
        t.setAttribute('aria-expanded', 'true');
        e.style.display = "block"
    }
    else {
        t.setAttribute('aria-expanded', 'false');
        e.style.display = "none"
    }
    return true;
}

function toggleMe(a, currEle) {
    var t = currEle;
    var e = document.getElementById(a);
    if (!e) return true;
    if (e.style.display == "block") {
        t.setAttribute('aria-expanded', 'true');
        e.style.display = "none"
    }
    else {
        t.setAttribute('aria-expanded', 'false');
        e.style.display = "none"
    }
    return true;
}