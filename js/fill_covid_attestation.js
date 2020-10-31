javascript:(function (){
/* Create a Bookmark in your browser and
   copy the content of this file in the URL field. */
var getTodayDate = function(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
};
var getTime = function(){
    /* return now time + 15 min in "HH:mm" format*/
    var d = new Date();
    var hours = d.getHours();
    var value = d.getMinutes() + 15;
    if (value > 59) {
        value = value % 60;
        hours += 1;
    }
    hours = String(hours).padStart(2, '0');
    var minutes = String(value).padStart(2, '0');
    return hours + ":" + minutes;
};
/* Edit the following lines with your own info */
document.getElementById("field-firstname").value="Karl";
document.getElementById("field-lastname").value="wnw";
document.getElementById("field-birthday").value="01/01/1900";
document.getElementById("field-placeofbirth").value="Lyon";
document.getElementById("field-address").value="1 rue de la Paix";
document.getElementById("field-city").value="Paris";
document.getElementById("field-zipcode").value="75002";
document.getElementById("field-datesortie").value=getTodayDate();
document.getElementById("field-heuresortie").value=getTime();
/* Choices:
    checkbox-travail,
    checkbox-achats,
    checkbox-sante,
    checkbox-famille,
    checkbox-handicap,
    checkbox-sport_animaux,
    checkbox-convocation,
    checkbox-missions,
    checkbox-enfants
*/
document.getElementById("checkbox-sport_animaux").checked=true;
})();void(0);