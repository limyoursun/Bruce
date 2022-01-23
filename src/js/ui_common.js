$(function () {
  // 화면 크기에 따른 slide menu hide/show
  function slideWidth() {
    $(window).on("load", function () {
      if ($(window).width() <= 769) {
        $(".slide_wrap").addClass("on");
      }
    });
    $(window).on("resize", function () {
      if ($(window).width() <= 769) {
        $(".slide_wrap").addClass("on");
      }
    });
  }
  slideWidth();
  
  // toast alert
  $(".toast_alarm li")
    .find("button")
    .on("click", function () {
      $(this).parents("li").fadeToggle();
    });
  setTimeout(() => $(".toast_alarm").fadeIn("slow"), 500);
  setTimeout(() => $(".toast_alarm").fadeOut("slow"), 4500);

  // calendar
  $.datepicker.setDefaults({
    buttonImageOnly: true,
    showOn: "both",
    buttonImage: "../images/btn_calendar.png",
    changeMonth: true,
    changeYear: true,
    numberOfMonths: 1,
    regional: ["ko"],
    dateFormat: "yy-mm-dd",
  });

  // pop
  var popBtn = $("[openpop]");
  popBtn.on("click", function () {
    var target = $(this).attr("openpop");
    $("#" + target).show();
  });
  var closePop = $(".btn_pop_close");
  closePop.on("click", function () {
    $(this).parents(".pop_overlay").hide();
  });

  $(".con_list .more").on("click", function () {
    $(this).toggleClass("on");
    $(this).parent("p").nextAll("ul").slideToggle("fast");
  });

  // datetimepicker
  $.datetimepicker.setLocale("kr");
  $("#datepicker").datetimepicker({
    format: "Y/m/d",
    timepicker:false
  });

  $.datetimepicker.setLocale("kr");
  $("#datetimepicker").datetimepicker({
    minDate: 0,
  });

  $("#date_timepicker_start").datetimepicker({
    useCurrent: true,
    format: "Y/m/d",
    onShow: function (ct) {
      this.setOptions({
        maxDate: $("#date_timepicker_end").val()
          ? $("#date_timepicker_end").val()
          : false,
      });
    },
    timepicker: false,
  });

  $("#date_timepicker_end").datetimepicker({
    format: "Y/m/d",
    onShow: function (ct) {
      this.setOptions({
        minDate: $("#date_timepicker_start").val()
          ? $("#date_timepicker_start").val()
          : false,
      });
    },
    timepicker: false,
  });

  function gnb() {
    var lm = $("#gnb");
    lm.a = lm.find(">li>a");
    lm.dep2 = lm.find(">li>ul");
    lm.dep2.a = lm.dep2.find(">li>a");
    lm.dep2.hide();
    lm.a.each(function () {
      if (!$(this).next().length) {
        console.log("0");
        $(this).addClass("empty");
      }
      if ($(this).hasClass("on")) {
        console.log("1");
        $(this).next("ul").show();
      }
    });
    lm.a.on("click", function () {
      lm.a.removeClass("on");
      if ($(this).next("ul").is(":hidden")) {
        console.log("2");
        lm.dep2.slideUp("fast");
        $(this).next("ul").slideDown("fast");
      } else {
        console.log("3");
        $(this).removeClass("on");
        $(this).next("ul").slideUp("fast");
      }

      // 클릭 후 슬라이드
      var url = $(this).attr("href");
      if ($(this).next("ul").is("ul")) {
        console.log("4");
        $(this).addClass("on");
        $(this)
          .next("ul")
          .slideDown("fast", function () {
            document.location.href = url;
          });
      } else if ($(this).next("ul").not("ul")) {
        lm.dep2.slideUp("fast");
        console.log("5");
        $(this).addClass("on");
        setTimeout(function () {
          document.location.href = url;
        }, 200);
      }
      return false;
    });
  }
  gnb();
});
