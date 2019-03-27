let likes;
let ready = false;
function setup() {
    cnv = createCanvas(innerWidth, innerHeight);
    cnv.parent('p5');
    fetch('pages.json')
        .then(response => { return response.json() })
        .then(data => {
            console.log(data);
            likes = data.page_likes;
            ready = true;
        })
        .catch(err => console.error(err));

    frameRate(2);
    textSize(10);
}

function draw() {
    if (ready) {
        // here we draw our likes!


    }
}

function get_date(timestamp) {
    return new Date(timestamp * 1000);
}

function windowResized() {
    resizeCanvas(innerWidth, innerHeight);
}