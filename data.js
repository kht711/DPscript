var english;
var japanese;
const url1 = "./source/Lines_en-us.json";
const url2 = "./source/Lines_ja.json";
$.getJSON(url1, (data) => { 
    english = data; 
});
$.getJSON(url2, (data) => { 
    japanese = data; 
});

window.onload = () => {
    let select = document.getElementById("select");
    for (let i = 0; i < english.linesdict.length; i++) {
        let option = document.createElement("option");
        select.appendChild(option);
        option.value = english.linesdict[i].label;
        option.innerHTML = english.linesdict[i].label;
        if (english.linesdict[i].label == "ch0_main") {
            option.selected = true;
        }
    }
    dataChange("ch0_main");
}

function dataChange(value) {
    let script = document.getElementById("script");
    script.innerHTML = "";

    let titleTr = document.createElement("tr");
    script.appendChild(titleTr);
    let enTh = document.createElement("th");
    enTh.innerHTML = "english";
    titleTr.appendChild(enTh);
    let jaTh = document.createElement("th");
    jaTh.innerHTML = "japanese";
    titleTr.appendChild(jaTh);

    let en_line = english.linesdict.find( ({label}) => label === value.value );
    let ja_line = japanese.linesdict.find( ({label}) => label === value.value );
    for (let i = 0; i < en_line.values.length; i++) {
        let tr = document.createElement("tr");
        script.appendChild(tr);

        let enTd = document.createElement("td");
        enTd.innerHTML = en_line.values[i];
        tr.appendChild(enTd);
        let jaTd = document.createElement("td");
        jaTd.innerHTML = ja_line.values[i];
        tr.appendChild(jaTd);
    }
}