Template.entry.onRendered(function () {
  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year
    onOpen: function() {
      $('.datepicker-div').find('i').addClass('active');
    },
    onClose: function() {
      $('.datepicker-div').find('i').removeClass('active');
    },
    onSet: function(context) {
      $('.datepicker-div').find('label').toggleClass('active');
    }
  });
});