$(".form:eq(1)").hide();
$(".form:eq(2)").hide();
$(".form:eq(3)").hide();
$(".form:eq(4)").hide();

let obj = {};

$(".form1:eq(0)").validate({
  rules: {
    pass: "required",
    cpass: {
      equalTo: "#pass",
    },
    email: "required",
    uname: "required",
  },
  submitHandler: function (form) {
    $(".form:eq(0)").hide();
    $(".form:eq(1)").show();
    $(".form:eq(1)").addClass("my");
    setTimeout(() => {
      $(".form:eq(1)").removeClass("my");
    }, 4000);

    $(".bar").css("width", "+=10%");
    $(".bar").css("transition", "2s ease-in");
    $(".the_bar").css("width", "+=14%");
    $(".the_bar").css("transition", "2s ease-in");

    setTimeout(() => {
      $(".lock:eq(0)").css("background-color", "green");
      $(".lock:eq(0)").html("<i class='fas fa-lock-open'></i>");
      $(".lock:eq(0)").removeClass("pevent");
      $(".lock:eq(0)").css("cursor", "pointer");
    }, 2000);

    $("span.count").text("2");
  },
});

$("input:eq(0)").on("change", function () {
  obj.email = $(this).val();
});

$("input:eq(1)").on("change", function () {
  obj.uname = $(this).val();
});

$("input:eq(2)").on("change", function () {
  obj.pass = $(this).val();
});

$("input:eq(3)").on("change", function () {
  obj.cpass = $(this).val();
});

$(".pre:eq(0)").click(function () {
  $(".form:eq(1)").hide();
  $(".form:eq(0)").show();
  $(".form:eq(0)").addClass("my2");
  setTimeout(() => {
    $(".form:eq(0)").removeClass("my2");
  }, 4000);

  $("span.count").text("1");
});
//-------------------- up until this this is the form 1 -------------------

$(".form1:eq(1)").validate({
  rules: {
    fname: "required",
    Ad1: "required",
    Ad2: "required",
    city: "required",
  },
  submitHandler: function (form) {
    $(".form:eq(1)").hide();
    $(".form:eq(2)").show();
    $(".form:eq(2)").addClass("my");
    setTimeout(() => {
      $(".form:eq(2)").removeClass("my");
    }, 4000);

    $(".bar").css("width", function (index, value) {
      return "+=39%";
    });
    $(".bar").css("transition", "2s ease-in");
    $(".the_bar").css("width", function (index, value) {
      return "+=44%";
    });
    $(".the_bar").css("transition", "2s ease-in");

    setTimeout(() => {
      $(".lock:eq(1)").css("background-color", "green");
      $(".lock:eq(1)").html("<i class='fas fa-user-check'></i>");
      $(".lock:eq(1)").removeClass("pevent");
      $(".lock:eq(1)").css("cursor", "pointer");
    }, 2000);

    $("span.count").text("3");
  },
});

$("input:eq(4)").on("change", function () {
  obj.fname = $(this).val();
});

$("input:eq(5)").on("change", function () {
  obj.Ad1 = $(this).val();
});

$("input:eq(6)").on("change", function () {
  obj.Ad2 = $(this).val();
});

$("input:eq(7)").on("change", function () {
  obj.city = $(this).val();
});

$(".pre:eq(1)").click(function () {
  $(".form:eq(2)").hide();
  $(".form:eq(1)").show();
  $(".form:eq(1)").addClass("my2");
  setTimeout(() => {
    $(".form:eq(1)").removeClass("my2");
  }, 4000);

  $("span.count").text("2");
});

$(".form1:eq(2)").validate({
  rules: {
    Jn: "required",
    Jl: "required",
    CN: "required",
    yoe: "required",
  },
  submitHandler: function (form) {
    $(".form:eq(2)").hide();
    $(".form:eq(3)").show();
    $(".form:eq(3)").addClass("my");
    setTimeout(() => {
      $(".form:eq(3)").removeClass("my");
    }, 4000);

    $(".bar").css("width", function (index, value) {
      return "+=61.5%";
    });
    $(".bar").css("transition", "2s ease-in");
    $(".the_bar").css("width", function (index, value) {
      return "+=71.5%";
    });
    $(".the_bar").css("transition", "2s ease-in");

    setTimeout(() => {
      $(".lock:eq(2)").css("background-color", "green");
      $(".lock:eq(2)").removeClass("pevent");
      $(".lock:eq(2)").css("cursor", "pointer");
    }, 2000);

    $("span.count").text("4");

    $("#em").val(obj.email);
    $("#un").val(obj.uname);
    $("#ps").val(obj.pass);
    $("#cps").val(obj.cpass);
    $("#fn").val(obj.fname);
    $("#ad1").val(obj.Ad1);
    $("#ad2").val(obj.Ad2);
    $("#ci").val(obj.city);
    $("#jn").val(obj.Jn);
    $("#jl").val(obj.Jl);
    $("#cn").val(obj.CN);
    $("#y").val(obj.yoe);
  },
});

$("input:eq(8)").on("change", function () {
  obj.Jl = $(this).val();
});

$("input:eq(9)").on("change", function () {
  obj.Jn = $(this).val();
});

$("input:eq(10)").on("change", function () {
  obj.CN = $(this).val();
});

$("input:eq(11)").on("change", function () {
  obj.yoe = $(this).val();
});

$(".form1:eq(3)").validate({
  submitHandler: function (form) {
    $(".form:eq(3)").hide();
    setTimeout(() => {
      $(".form:eq(4)").show();
    }, 2000);
    $(".bar").css("width", function (index, value) {
      return "+=87.5%";
    });
    $(".bar").css("transition", "2s ease-in");
    $(".the_bar").css("width", function (index, value) {
      return "+=100%";
    });
    $(".the_bar").css("transition", "2s ease-in");
    setTimeout(() => {
      $(".lock:eq(3)").css("background-color", "green");
      $(".acc").text("completed");
      $(".lock:eq(3)").html("<i class='fas fa-check'></i>");
    }, 2000);

    console.log(JSON.stringify(obj));
    $(".lock").addClass("pevent");
  },
});

$(".pre:eq(2)").click(function () {
  $(".form:eq(3)").hide();
  $(".form:eq(2)").show();
  $(".form:eq(2)").addClass("my2");
  setTimeout(() => {
    $(".form:eq(2)").removeClass("my2");
  }, 4000);

  $("span.count").text("3");
});

// -----------clck events----------
$(".lock:eq(0)").click(function () {
  $(".form:eq(1)").hide();
  $(".form:eq(2)").hide();
  $(".form:eq(3)").hide();
  $(".form:eq(0)").show();
  $(".form:eq(0)").addClass("my2");
  setTimeout(() => {
    $(".form:eq(0)").removeClass("my2");
  }, 4000);

  $("span.count").text("1");
});
// -------lock 1------

$(".lock:eq(1)").on("click", function () {
  $(".form:eq(2)").hide();
  $(".form:eq(0)").hide();
  $(".form:eq(3)").hide();
  $(".form:eq(1)").show();
  $(".form:eq(1)").addClass("my2");
  setTimeout(() => {
    $(".form:eq(1)").removeClass("my2");
  }, 4000);

  $("span.count").text("2");
});

// --------lock 2-------

$(".lock:eq(2)").on("click", function () {
  $(".form:eq(3)").hide();
  $(".form:eq(0)").hide();
  $(".form:eq(1)").hide();
  $(".form:eq(2)").show();
  $(".form:eq(2)").addClass("my2");
  setTimeout(() => {
    $(".form:eq(2)").removeClass("my2");
  }, 4000);

  $("span.count").text("3");
});
