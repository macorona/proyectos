$(document).ready(function() {
    $('select').on('change', function (e) {
        var optionSelected = $("option:selected", this);
        var page = this.value;
        renderPageWS(page);
    });

});

function renderPageWS(page) {
    var myFrame;

    $("#content").replaceWith("<section id='content' class='body' width='100%' height='100%'></div>");
    myFrame = "<iframe id='myframe' height='100%' width='100%' frameborder='0' src='" + page + "'></iframe>";

    $("#content").append(myFrame);

    var alturaTotal = $(window).height();
    var alturaEncab = $("#rowEncabezado").outerHeight(true);
    var alturaFooter = $("#rowFooter").outerHeight(true);
    var alturaSeccion = (alturaTotal - alturaEncab) - alturaFooter;
    alturaSeccion = alturaSeccion - 10;
    $("#content").css({"height":alturaSeccion + "px"});

}
