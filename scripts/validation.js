$("#feedbackForm").on("submit", function() {
  var formValid = true;

  // if name's validation criteria is met
  if( $("#userName").prop("validity").valid ) {

    $("#nameFeedback").addClass("hidden");

  } else {

    $("#nameFeedback").removeClass("hidden");

    formValid = false;
  }

  // if email's validation criteria is met
  if( $("#userEmail").prop("validity").valid ) {

    $("#emailFeedback").addClass("hidden");

  } else {

    $("#emailFeedback").removeClass("hidden");

    formValid = false;
  }

  // if day's validation criteria is met
  if( $("#fri").is(":checked") ||
    $("#sat").is(":checked") ||
    $("#sun").is(":checked") ) {

    $("#dayFeedback").addClass("hidden");

  } else {

    $("#dayFeedback").removeClass("hidden");

    formValid = false;
  }

  // if time's validation criteria is met
  if( $("#morn").is(":checked") ||
    $("#aft").is(":checked") ||
    $("#eve").is(":checked") ) {

    $("#timeFeedback").addClass("hidden");

  } else {

    $("#timeFeedback").removeClass("hidden");

    formValid = false;
  }

  // if experience's validation criteria is met
  if( $("#userExp").prop("validity").valid ) {

    $("#expFeedback").addClass("hidden");

  } else {

    $("#expFeedback").removeClass("hidden");

    formValid = false;
  }

  // if all are valid, send form to server
  return formValid;
});
