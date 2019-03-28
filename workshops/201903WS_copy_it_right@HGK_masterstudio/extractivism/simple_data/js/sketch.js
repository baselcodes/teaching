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
  if (ready == true) {// when the data is ready
    // here we draw our likes!
    for (let i = 0; i < likes.length; i++) {// go through all the element of the array
      // console.log(likes[i]);
      let like = likes[i];// get the single element of the array
      console.log(like.name);// log the name of the page
      let date = get_date(like.timestamp);// transform timestamp to human readabble date
      console.log(date.getDay());
      let loop = date.getDay() + 1;// get the days as number [0, 6]
      let h = height / likes.length;// define height of single element
      let spacing = 1;// define spacing
      for (let j = 0; j < loop; j++) {// loop the days
        ellipse(100 + j * 20, i * h, h - spacing);//draw as many ellipses
      }
    }
    noLoop();// stop the sketch!
  }
}

function get_date(timestamp) {
  return new Date(timestamp * 1000);
}

function windowResized() {
  resizeCanvas(innerWidth, innerHeight);
}