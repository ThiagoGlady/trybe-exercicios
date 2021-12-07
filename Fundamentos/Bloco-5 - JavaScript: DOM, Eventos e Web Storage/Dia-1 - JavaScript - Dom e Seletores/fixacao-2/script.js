document.getElementById('header-container').style.backgroundColor = 'green';
for(let i=0; i < document.getElementsByClassName('emergency-tasks').length; i += 1) {
    document.getElementsByClassName('emergency-tasks')[i].style.backgroundColor = 'pink';
}

document.getElementsByClassName("emergency-tasks")[0].firstElementChild.firstElementChild.style.backgroundColor = 'purple';
document.getElementsByClassName("emergency-tasks")[0].children[1].firstElementChild.style.backgroundColor = "purple";

document.getElementsByClassName("no-emergency-tasks")[0].firstElementChild.firstElementChild.style.backgroundColor = 'black';
document.getElementsByClassName("no-emergency-tasks")[0].children[1].firstElementChild.style.backgroundColor = "black";

for(let i=0; i < document.getElementsByClassName('no-emergency-tasks').length; i += 1) {
    document.getElementsByClassName('no-emergency-tasks')[i].style.backgroundColor = 'yellow';
}

document.getElementsByTagName("footer")[0].style.backgroundColor = "darkgreen";
document.getElementsByTagName("footer")[0].style.marginTop = "10px";