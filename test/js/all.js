let links = document.querySelectorAll('a');
function clearLinks(item, index, links) {
    links[index].setAttribute('href', ' ');
    links[index].setAttribute('target', '_blank');
}

links.forEach(clearLinks);


let images = document.querySelectorAll('img');
function loadLazy(item, index, images) {
    images[index].setAttribute('loading', 'lazy');
}

images.forEach(loadLazy);

