let shrinkButton = document.createElement('button');
shrinkButton.setAttribute('onclick', 'showForm()');
shrinkButton.className = 'button-shrink';
shrinkButton.innerHTML = '<i class="fas fa-compress-arrows-alt"></i> SHRINK';

let container = document.createElement('section');
container.className = 'text-container';

let p = document.createElement('p');

function showDetails() {
    p.innerHTML = document.querySelector("textarea").value;
    container.append(p);
    document.body.append(shrinkButton);
    document.body.append(container);
    document.getElementById('form').hidden = true;
    document.querySelector('h1').hidden = true;
    document.body.style.background = 'rgb(51, 153, 102)';
}

function showForm() {
    document.body.style.background = 'none';
    document.getElementById('form').hidden = false;
    document.querySelector('h1').hidden = false;
    shrinkButton.remove();
    container.remove();
}