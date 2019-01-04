$('#companyButton').click( function() {
    $('#companyForm').submit();
});
$('#officeButton').click( function() {
    $('#officeForm').submit();
});

const input = document.querySelector("#phone");
      window.intlTelInput(input, {
        utilsScript: "js/utils.js"
      });