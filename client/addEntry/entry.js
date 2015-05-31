Template.entry.onRendered(function () {
  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year
    // onOpen: function() {
    //   $('.datepicker-div').find('i').addClass('active');
    // },
    // onClose: function() {
    //   $('.datepicker-div').find('i').removeClass('active');
    // },
    onSet: function(context) {
      //console.log(context);
      var pickerDiv = $('.datepicker-div');
      if(context.select){
        pickerDiv.find('label, i').addClass('active');
      } else {
        pickerDiv.find('label, i').removeClass('active');
      }

    }
  });
});