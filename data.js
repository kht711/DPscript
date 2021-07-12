var english;
var japanese;
const url1 = "./source/Lines_en-us.json";
const url2 = "./source/Lines_ja.json";

window.onload = () => {
    $.getJSON(url1, (data) => { 
        english = data;
        let select = document.getElementById("select");
        for (let i = 0; i < english.linesdict.length; i++) {
            let option = document.createElement("option");
            select.appendChild(option);
            option.value = english.linesdict[i].label;
            option.innerHTML = english.linesdict[i].label;
        }
    });
    $.getJSON(url2, (data) => { 
        japanese = data; 
    });
    select.selectedIndex = -1;
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
    for (let i = 0; i < en_line.keys.length; i++) {
        if (en_line.values[i] == "") {
            continue;
        }
        let tr = document.createElement("tr");
        script.appendChild(tr);
        let enTd = document.createElement("td");
        let enKey = en_line.keys[i];
        enTd.innerHTML = en_line.values[i];
        tr.appendChild(enTd);
        let jaTd = document.createElement("td");
        if (ja_line.keys.indexOf(enKey) != -1) {
            jaTd.innerHTML = ja_line.values[ja_line.keys.indexOf(enKey)];
        } else {
            jaTd.innerHTML = "「翻訳されてない文」";
        }
        tr.appendChild(jaTd);
    }
}