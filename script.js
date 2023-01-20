function showPassword() {
    let passwords = document.getElementsByClassName("password");
    for (password of passwords) {
        password.type = password.type == "password" 
        ? "text" 
        : "password";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    var bars = document.getElementsByClassName('bar');
    for (i = 0; i < bars.length; i++) {
        bars[i].style.width = '1%';
    }
})

function done(goal, target) {
    var li = document.getElementById(`ts${goal}`);
    const numOfTargets = li.getElementsByTagName('li').length;

    var t = document.getElementById(`t${target}`);
    var b = document.getElementById(`b${target}`);
    
    var p = document.getElementById(`p${goal}`);
    const curWidth = parseInt(p.style.width.replace('%', ''));

    if (t.style.textDecoration === 'line-through') {

        t.style.textDecoration = 'none';
        b.innerHTML = 'done'
        p.style.width = `${Math.max(1, curWidth - (100 / numOfTargets))}%`;

    } else {

        t.style.textDecoration = 'line-through';
        b.innerHTML = 'undo'
        p.style.width = `${Math.min(100, curWidth + (100 / numOfTargets))}%`;

    }
    
}