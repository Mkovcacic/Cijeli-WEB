import $ from "jquery";

const fetch_data = (callb) => {
    $.get("/api/products/", (res) => {
        console.log(res);
    }); 
}

$(() => {
    console.log("Test");
    fetch_data((res) => {
        console.log(res);
    });
});

