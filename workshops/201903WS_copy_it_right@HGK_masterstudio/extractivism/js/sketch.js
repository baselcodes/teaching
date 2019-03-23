let parsed_data = {};


let ip_locations = [];
let max_calls_API = 0;
let API_calls_counter = 0;

let data_initialized = false;
let cnv;
let idx;


function setup() {
    cnv = createCanvas(innerWidth, innerHeight);
    cnv.parent('p5');

    get_JSON('fb_data.json')
        .then(result => { return result })
        .then(data => parse_data(data))
        .catch(err => console.error(err));
    frameRate(2);
    textSize(10);
}

function draw() {
    // background(0);
    // console.log(data);
    if (data_initialized) {
        const location = ip_locations[idx];
        const ip = ip_locations[idx].query;
        console.log(ip)
        const account_activity = parsed_data[ip];
        console.log(location, account_activity);
        const position = get_position(location);
        const city = location.city;
        /**
         * HERE THE DRAWING IS HAPPENING
         */
        fill(255);
        ellipse(position.x, position.y, 10);
        fill(0);
        text(city, position.x, position.y)
        // Object.keys(data).forEach(ip => {
        //     // console.log(ip);
        //     const element = data[ip];

        //     // draw_data(ip, data[ip])
        // });


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

function get_position(location){
    const x = map(location.lon, -180, 180, 0, width);
    const y = map(location.lat, -90, 90, height, 0);
    return{
        x: x,
        y: y
    }
}

function draw_data(ip, data) {
    // $.getJSON('https://ipapi.co/' + ip + '/json/', data => console.log(data))
    get_JSON('https://ipapi.co/' + ip + '/json/')
        .then(result => { return result })
        .then(data => console.log(data))
        .catch(err => console.error(err));
}

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
    parsed_data = data.reduce((accumulator, currentValue, idx, array) => {
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


    const ip_s = [];
    Object.keys(parsed_data).forEach(key => {
        // const obj = {}
        // obj[key] = parsed_data[key]
        // parsed_data.push(obj);
        ip_s.push({ "query": key });
    })


    const sliced_ip_s = extract_sliced_array(ip_s, 100);
    max_calls_API = sliced_ip_s.length;
    for (const ips of sliced_ip_s) get_geo_by_batch_urls(ips);
    console.log(sliced_ip_s);
    console.log(parsed_data, ip_s);
}

function extract_sliced_array(arr, _max_length) {
    const sliced_arr = [];
    const max_length = _max_length || 100;
    const num_sub_arr = Math.floor(arr.length / max_length);
    let start = 0;
    let stop = max_length;
    for (let i = 0; i < num_sub_arr; i += 1) {
        const temp_arr = arr.slice(start, stop);
        sliced_arr.push(temp_arr);
        start += max_length;
        stop += max_length;
    }
    // here we add the last piece
    stop = arr.length;
    const temp_arr = arr.slice(start, stop);
    sliced_arr.push(temp_arr);
    return sliced_arr
}

function get_geo_by_batch_urls(_query) {
    const BATCH_URLS = 'http://ip-api.com/batch?fields=61146';
    const query = _query || [{ "query": "208.80.152.201" }, { "query": "8.8.8.8" }, { "query": "2003:00ea:6f31:b944:bd0b:2bae:e2aa:2b02" }];
    $.ajax({
        type: "POST",
        dataType: 'json',
        url: BATCH_URLS,
        data: JSON.stringify(query),
        // contentType: "application/json; charset=utf-8",
        success: draw_ip_locations,
        error: xhr => console.error(xhr.responseText)
    });
}
function draw_ip_locations(data) {
    // console.log(data);
    ip_locations = ip_locations.concat(data);
    if (API_calls_counter >= max_calls_API - 1) {
        idx = ip_locations.length - 1;
        data_initialized = true;
        console.log('start drawing', data_initialized, idx);
    }
    API_calls_counter++;
}