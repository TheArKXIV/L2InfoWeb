$(document).ready(function () {
  var monthNames = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"];
  var qntYears = 100;
  var selectYear = $("#SelectAnnee");
  var selectMonth = $("#SelectMois");
  var selectDay = $("#SelectJour");
  var currentYear = new Date().getFullYear();
  var qntYears = currentYear - 1899;
  for (var y = 0; y < qntYears; y++) {
    let date = new Date(currentYear);
    var yearElem = document.createElement("option");
    yearElem.value = currentYear
    yearElem.textContent = currentYear;
    selectYear.append(yearElem);
    currentYear--;
  }

  for (var m = 0; m < 12; m++) {
    let monthNum = new Date(2018, m).getMonth()
    let month = monthNames[monthNum];
    var monthElem = document.createElement("option");
    monthElem.value = monthNum;
    monthElem.textContent = month;
    selectMonth.append(monthElem);
  }

  var d = new Date();
  var month = d.getMonth();
  var year = d.getFullYear();
  var day = d.getDate();

  selectYear.val(year);
  selectYear.on("change", AdjustDays);
  selectMonth.val(month);
  selectMonth.on("change", AdjustDays);

  AdjustDays();
  selectDay.val(day)

  function AdjustDays() {
    var year = selectYear.val();
    var month = parseInt(selectMonth.val()) + 1;
    selectDay.empty();

    //get the last day, so the number of days in that month
    var days = new Date(year, month, 0).getDate();

    //lets create the days of that month
    for (var d = 1; d <= days; d++) {
      var dayElem = document.createElement("option");
      dayElem.value = d;
      dayElem.textContent = d;
      selectDay.append(dayElem);
    }
  }
});