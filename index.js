function newImage(options) {
    const image = document.createElement('img');
    image.src = options.src
    image.style.position = 'fixed'
    image.style.top = options.top
    image.style.right = options.right
    image.style.bottom = options.bottom
    image.style.left = options.left
    image.style.width = options.width
    image.style.height = options.height
    document.body.append(image)

    return image
}

function newItem(options) {
    const item = newImage(options)
    item.classList.add("item");
    item.addEventListener('dblclick', function () {
        item.remove()
    })
}

newImage({
    src: 'assets/grass.png',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '70%'
});

newImage({
    src: 'assets/sky.png',
    top: 0,
    left: 0,
    width: '100%',
    height: '30%'
});

newImage({
    src: 'assets/green-character.gif',
    bottom: '100px',
    left: '100px',
});

newImage({
    src: 'assets/pine-tree.png',
    bottom: '200px',
    left: '450px',
});

newImage({
    src: 'assets/tree.png',
    bottom: '300px',
    left: '200px'
});

newImage({
    src: 'assets/pillar.png',
    bottom: '100px',
    left: '350px',
});

newImage({
    src: 'assets/crate.png',
    bottom: '200px',
    left: '150px'
});

newImage({
    src: 'assets/well.png',
    bottom: '425px',
    left: '500px'
});

newItem({
    src: 'assets/sword.png',
    bottom: '405px',
    left: '500px'
});

newItem({
    src: 'assets/sheild.png',
    bottom: '185px',
    left: '165px'
});

newItem({
    src: 'assets/staff.png',
    bottom: '100px',
    left: '600px'
});
