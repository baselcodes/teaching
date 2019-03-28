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
  if (ready == true) {
    // here we draw our likes!
    // console.log(likes.length);
    for (let i = 0; i < 10; i++) {
      // console.log(likes[i]);
      let like = likes[i];
      console.log(like.name);
      let date = get_date(like.timestamp);
      console.log(date.getDay());
      let loop = date.getDay() + 1;
      let h = height / 10;
      let spacing = 50;
      for (let j = 0; j < loop; j++) {
        ellipse(100 + j * 20, i * h, h - spacing);
      }
    }
    noLoop();
  }
}

function get_date(timestamp) {
  return new Date(timestamp * 1000);
}

function windowResized() {
  resizeCanvas(innerWidth, innerHeight);
}