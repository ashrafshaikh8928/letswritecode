function run(){
    let html = document.getElementById("html-code").value;
    let css = document.getElementById("css-code").value;
    let js = document.getElementById("js-code").value;
    let out = document.getElementById("output");

    out.contentDocument.body.innerHTML = html + "<style>" + css + "</style>";
    out.contentWindow.eval(js)
}