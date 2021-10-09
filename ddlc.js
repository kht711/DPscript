var english;
var japanese;
var url = "./source/ddlc_and_plus_";

window.onload = () => {
    let select = document.getElementById("select");
    url += (select.value + ".txt");
    $.get(url, (data) => { 
        dataChange(data);
    });
}

function dataChange(value) {
    let script = document.getElementById("script");
    script.innerHTML = "";

    let titleTr = document.createElement("tr");
    script.appendChild(titleTr);
    let enTh = document.createElement("th");
    enTh.innerHTML = "DDLC_english";
    titleTr.appendChild(enTh);
    let jaTh = document.createElement("th");
    jaTh.innerHTML = "DDLC_japanese";
    titleTr.appendChild(jaTh);

    let enPlusTh = document.createElement("th");
    enPlusTh.innerHTML = "DDLC_Plus_english"
    titleTr.appendChild(enPlusTh);
    let jaPlusTh = document.createElement("th");
    jaPlusTh.innerHTML = "DDLC_Plus_japanese";
    titleTr.appendChild(jaPlusTh);

    let lines = value.split('\n');
    for (let i = 0; i < lines.length; i++) {
        if (lines[i] == "") {
            continue;
        }
        let line = lines[i].trim().split("\t");
        let tr = document.createElement("tr");
        script.appendChild(tr);

        let enTd = document.createElement("td");
        enTd.innerHTML = line[0];
        tr.appendChild(enTd);
        let jaTd = document.createElement("td");
        jaTd.innerHTML = line[1];
        jaTd.className = "japanese";
        tr.appendChild(jaTd);

        let enPlusTd = document.createElement("td");
        enPlusTd.innerHTML = line[2];
        tr.appendChild(enPlusTd);
        let jaPlusTd = document.createElement("td");
        jaPlusTd.innerHTML = line[3];
        jaPlusTd.className = "japanese";
        tr.appendChild(jaPlusTd);
    }
}