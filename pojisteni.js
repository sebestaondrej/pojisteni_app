var seznamPojistencu = [];

class Pojistenec {
    constructor(jmeno, prijmeni, vek, telefon) {
        this.id = seznamPojistencu.length + 1;
        this.jmeno = jmeno;
        this.prijmeni = prijmeni;
        this.vek = vek;
        this.telefon = telefon;
    }

    vytvorRadek() {
        var radek = "<tr><th scope=\"row\">" + this.id + "</th>"
        radek = radek + "<td>" + this.jmeno + "</td>"
        radek = radek + "<td>" + this.prijmeni + "</td>"
        radek = radek + "<td>" + this.vek + "</td>"
        radek = radek + "<td>" + this.telefon + "</td>"
        radek = radek + "</tr>"
        return radek;
    }
}

var pojistenecInit = new Pojistenec("František", "Bláha", 45, 123456789);
seznamPojistencu.push(pojistenecInit);

function pridatPojistence() {
    event.preventDefault();

    var jmeno = $("#jmeno").val();
    var prijmeni = $("#prijmeni").val();
    var vek = $("#vek").val();
    var telefon = $("#telefon").val();

    var pojistenec = new Pojistenec(jmeno, prijmeni, vek, telefon);
    seznamPojistencu.push(pojistenec);

    $("#jmeno").val("");
    $("#prijmeni").val("");
    $("#vek").val("");
    $("#telefon").val("");

    vypsatSeznam();
}

function vypsatSeznam() {
    const element = document.getElementById("data-table");
    var seznamHTML = "";

    for (const pojistenec of seznamPojistencu) {
        seznamHTML = seznamHTML + pojistenec.vytvorRadek();
    }
    element.innerHTML = seznamHTML;
}