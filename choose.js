function printFreqTable(freq) {
  var currentFreq = new Map();
  currentFreq = freq;
  $("button").click(function() {
    var currentStr = $("#in").val().toUpperCase();
    var arrStr = currentStr.split(/\s+/);
    var len = arrStr.length;
    var $table = $("<table border='1' class='biao'></table>");
    var res = "<tr><td>序号</td><td>频率</td><td>键号</td></tr>";

    for (var i = 0; i < len; i++) {
      var currentA = arrStr[i];
      var reverseFreq = "没有此键";
      if (!isReverse()) {
        currentFreq.forEach(function(value, index, array) {
          if (value == currentA) {
            reverseFreq = index;
          }
        });
      }
      var chos = isReverse() ? currentFreq.get(currentA) : reverseFreq;
      var freq = isReverse() ? chos : currentA;
      var key = isReverse() ? currentA : chos;
      res += "<tr><td>" + (i + 1) + "</td><td>" + freq + "</td><td>" + key + "</td></tr>";
    }

    $table.append(res);
    $("#out").html($table);

    function isReverse() {
      return currentA < 60 || isNaN(+currentA);
    }
  })
}

 function makeExpandingArea(el) {
   var setStyle = function(el) {
     el.style.height = 'auto';
     el.style.height = el.scrollHeight + 'px';
   }

   el.addEventListener('input', function() {
     setStyle(el)
   }, false);

   setStyle(el)

 }

$(function() {
  var freq1 = new Map([
    ["0", "0"],
    ["1", "2960"],
    ["2", "2794"],
    ["3", "2637"],
    ["4", "2489"],
    ["5", "2349"],
    ["6", "2218"],
    ["7", "2093"],
    ["8", "1976"],
    ["9", "1865"],
    ["10", "1760"],
    ["11", "1661"],
    ["12", "1568"],
    ["13", "1480"],
    ["14", "1397"],
    ["15", "1319"],
    ["16", "1245"],
    ["17", "1175"],
    ["18", "1109"],
    ["19", "1047"],
    ["20", "988"],
    ["21", "932"],
    ["22", "880"],
    ["23", "831"],
    ["24", "784"],
    ["25", "740"],
    ["26", "698"],
    ["27", "659"],
    ["28", "622"],
    ["29", "587"],
    ["30", "554"],
    ["31", "523"],
    ["32", "494"],
    ["33", "466"],
    ["34", "440"],
    ["35", "415"],
    ["36", "392"],
    ["37", "370"],
    ["38", "349"],
    ["39", "330"],
    ["40", "311"],
    ["41", "294"],
    ["42", "277"],
    ["43", "262"],
    ["44", "247"],
    ["45", "233"],
    ["46", "220"],
    ["47", "208"],
    ["48", "196"],
    ["49", "185"],
    ["50", "175"],
    ["51", "165"],
    ["52", "156"],
    ["53", "147"],
    ["54", "139"],
    ["55", "131"],
    ["56", "123"],
    ["57", "117"],
    ["58", "110"]
  ]);
  var freq2 = new Map([
    ["0", "0"],
    ["1", "2960"],
    ["2", "2794"],
    ["3", "2637"],
    ["4", "2489"],
    ["5", "2349"],
    ["6", "2218"],
    ["7", "2093"],
    ["8", "1976"],
    ["9", "1865"],
    ["A", "1760"],
    ["B", "1661"],
    ["C", "1568"],
    ["D", "1480"],
    ["E", "1397"],
    ["F", "1319"],
    ["10", "1245"],
    ["11", "1175"],
    ["12", "1109"],
    ["13", "1047"],
    ["14", "988"],
    ["15", "932"],
    ["16", "880"],
    ["17", "831"],
    ["18", "784"],
    ["19", "740"],
    ["1A", "698"],
    ["1B", "659"],
    ["1C", "622"],
    ["1D", "587"],
    ["1E", "554"],
    ["1F", "523"],
    ["20", "494"],
    ["21", "466"],
    ["22", "440"],
    ["23", "415"],
    ["24", "392"],
    ["25", "370"],
    ["26", "349"],
    ["27", "330"],
    ["28", "311"],
    ["29", "294"],
    ["2A", "277"],
    ["2B", "262"],
    ["2C", "247"],
    ["2D", "233"],
    ["2E", "220"],
    ["2F", "208"],
    ["30", "196"],
    ["31", "185"],
    ["32", "175"],
    ["33", "165"],
    ["34", "156"],
    ["35", "147"],
    ["36", "139"],
    ["37", "131"],
    ["38", "123"],
    ["39", "117"],
    ["3A", "110"]
  ]);
  $("ul li").click(function() {
    var $scr = $(this).attr("alt");
    $(this).addClass("active").siblings().removeClass("active");
    switch ($scr) {
      case "cutiao":
        printFreqTable(freq1);
        break;
      case "jingpin":
        printFreqTable(freq2);
        break;
    }
  }).eq(0).click();
   var textarea = $('#in')[0];
    makeExpandingArea(textarea);

})