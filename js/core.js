setTimeout(() => {
  var url = location.href;
  var hash = url.slice(url.indexOf("#"));
  $("html,body").animate({
    scrollTop: $(hash).offset().top,
  });
}, 1000);

$(function () {
  var winHeight = $(window).height();
  $.component([
    [
      "header",
      function () {
        $("#header")
          .attr("data-spy", "affix")
          .affix({
            offset: {
              top: winHeight,
            },
          });
      },
    ],
    ["footer"],
    ["return"],
  ]);
  $("#subNav")
    .affix({
      offset: {
        top: winHeight,
      },
    })
    .on("click", "a", function (e) {
      e.preventDefault();
      var url = $(this).prop("href");
      var hash = url.slice(url.indexOf("#"));
      $("html,body").animate({
        scrollTop: $(hash).offset().top,
      });
    })
    .on("affixed.bs.affix", function () {
      $("#header .header").css({
        "-webkit-transform": "translateY(-100%)",
        transform: "translateY(-100%)",
      });
    });

  $(window).on("scroll", function () {
    var scrollTop = $(this).scrollTop();
    if (scrollTop < winHeight) {
      $("#header .header").css({
        "-webkit-transform": "translateY(0)",
        transform: "translateY(0)",
      });
    }
  });
});

var solutions = document.getElementById("solutions");
var solution = solutions.getElementsByClassName("solutions")[0];
var solutionsDiv = solution.getElementsByClassName("solutions-container-div")[0];
var solutionDiv = solution.getElementsByClassName("solutions-div")[0];
var solutionsDiv1 = solutionDiv.getElementsByClassName("solutions-div-1");
var liObj = solutionsDiv.getElementsByTagName("li");
for (var i = 0; i < liObj.length; i++) {
  liObj[i].index = i;
  liObj[i].onclick = function () {
    for (var j = 0; j < liObj.length; j++) {
      liObj[j].className = "";
      solutionsDiv1[j].className = "solutions-div-1 none";
    }
    liObj[this.index].className = "bg";
    solutionsDiv1[this.index].className = "solutions-div-1";
  };
}
