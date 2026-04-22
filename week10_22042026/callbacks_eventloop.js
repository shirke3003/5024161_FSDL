// callbacks + event loop demo

function fetchData(callback) {
    console.log("Fetching data...");

    setTimeout(() => {
        console.log("Data fetched");
        callback();
    }, 2000);
}

function processData() {
    console.log("Processing data...");
}

console.log("Start");

fetchData(processData);

console.log("End");