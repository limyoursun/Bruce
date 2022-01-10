$(function () {
  /*calendar*/
  $.datepicker.setDefaults({
    buttonImageOnly: true,
    showOn: "both",
    buttonImage: "../images/btn_calendar.png",
    changeMonth: true,
    changeYear: true,
    numberOfMonths: 1,
    regional: ["ko"],
    dateFormat: "yy-mm-dd"
  });
  $("[dataformat='datepic']").datepicker({
    buttonText: "날짜를 선택해주세요."
  });
  var from = $("[dataformat='from']").datepicker({
    buttonText: "시작날짜를 선택해주세요.",
    onClose: function (selectedDate) {
      var getName = $(this).attr('name');
      $("input[name='" + getName + "'].to").datepicker("option", "minDate", selectedDate);
    }
  });
  var to = $("[dataformat='to']").datepicker({
    buttonText: "종료날짜를 선택해주세요.",
    onClose: function (selectedDate) {
      var getName = $(this).attr('name');
      $("input[name='" + getName + "'].from").datepicker("option", "maxDate", selectedDate);
    }
  });

  // pop
  var popBtn = $('[openpop]');
  popBtn.on('click', function () {
    var target = $(this).attr('openpop');
    $('#' + target).show();
  })
  var closePop = $('.btn_pop_close');
  closePop.on('click', function () {
    $(this).parents('.pop_overlay').hide();
  })

  $('.con_list .more').on('click', function () {
    $(this).toggleClass('on');
    $(this).parent('p').nextAll('ul').slideToggle('fast');
  })
})


// Menu.
var $menu = $('#menu'),
  $menu_openers = $menu.children('ul').find('.opener');

// Openers.
$menu_openers.each(function () {
  var $this = $(this);
  $this.on('click', function (event) {
    // Prevent default.
    event.preventDefault();
    // Toggle.
    $menu_openers.not($this).removeClass('active');
    $this.toggleClass('active');
    // Trigger resize (sidebar lock).
    $window.triggerHandler('resize.sidebar-lock');
  });

});


   