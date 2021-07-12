var english;
var japanese;

window.onload = () => {
    const url1 = "./source/Lines_en-us.json";
    const url2 = "./source/Lines_ja.json";
    $.getJSON(url1, (data) => { english = data; });
    $.getJSON(url2, (data) => { japanese = data; });
}