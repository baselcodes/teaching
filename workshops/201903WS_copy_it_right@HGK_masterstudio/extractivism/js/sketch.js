const parsed_data = [];
let data_initialized = false;
let cnv;
let idx;
function setup() {
    cnv = createCanvas(innerWidth, innerHeight);
    cnv.parent('p5');
}

function draw() {
    background(0);
    // console.log(data);
    if (data_initialized) {
        const data = parsed_data[idx];
        // console.log(data);
        /**
         * HERE THE DRAWING IS HAPPENING
         */

        Object.keys(data).forEach(ip => {
            // console.log(ip);
            const element = data[ip];

            // draw_data(ip, data[ip])
        });


        /**
         * don't touch the code below
         */
        idx--;
        if (idx <= 0) {
            idx = 0;
            console.log('done')
            noLoop();
        }
    }
}

function windowResized() {
    resizeCanvas(innerWidth, innerHeight);
}

// function get_position(data){
//     return {
//         x: data.
//     }
// }

// function draw_data(ip, data) {
//     // $.getJSON('https://ipapi.co/' + ip + '/json/', data => console.log(data))
//     get_JSON('https://ipapi.co/' + ip + '/json/')
//     .then(result => { return result })
//     .then(data => console.log(data))
//     .catch(err => console.error(err));
// }

get_JSON('fb_data.json')
    .then(result => { return result })
    .then(data => parse_data(data))
    .catch(err => console.error(err));

async function get_JSON(url) {
    let result;
    try {
        result = await $.getJSON(url, data => result = data);
        return result;
    } catch (error) {
        console.error(error)
    }
}

function parse_data(_data) {
    const data = _data.account_activity;
    console.log(data);
    const result_data = data.reduce((accumulator, currentValue, idx, array) => {
        let parent = currentValue.ip_address;
        let child = currentValue.timestamp;
        if (!accumulator[parent]) {
            accumulator[parent] = {};
        }
        if (!accumulator[parent][child]) {
            accumulator[parent][child] = [];
        }
        accumulator[parent][child] = {
            action: currentValue.action,
            user_agent: currentValue.user_agent
        };
        return accumulator;
    }, {});

    Object.keys(result_data).forEach(key => {
        const obj = {}
        obj[key] = result_data[key]
        parsed_data.push(obj);
    })
    console.log(parsed_data);
    idx = parsed_data.length - 1;
    data_initialized = true;
    console.log(data_initialized, idx);
}