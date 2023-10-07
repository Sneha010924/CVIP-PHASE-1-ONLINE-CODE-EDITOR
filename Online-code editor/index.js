function run(){
    let htmlcode = document.getElementById("html-code").value;
    let csscode = document.getElementById("css-code").value;
    let jscode = document.getElementById("js-code").value;
    let outputcode = document.getElementById("output");

    outputcode.contentDocument.body.innerHTML = htmlcode +"<style>" +  csscode + "</style>" ;
    outputcode.contentWindow.eval(jscode);


}