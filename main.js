let table = document.querySelector('table')
for (let i = 0; i<200; i++){
    let tr = document.createElement('tr')
    for (let j = 0; j<200; j++){
        let td = document.createElement('td');
        tr.append(td)
    }
    table.append(tr)
}
function f (e){
    if (e.target.tagName === 'TD'){
        e.preventDefault();
        e.target.classList.add('selected')
    }
    table.addEventListener('mouseover', f1)
}
function f1 (e) {
    if (e.target.tagName === 'TD'){
        e.preventDefault();
        e.target.classList.add('selected')
    }
}
function f3 (){
    table.removeEventListener('mouseover', f1)
}

table.addEventListener('mousedown', f)
table.addEventListener('mouseup', f3)