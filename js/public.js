// 导入公共模块
$.component([["header"], ["footer"], ["return"]]);


// 初始化滚动条
var base_scroll = {
  cursorcolor: "#006699",
  cursorwidth: "10px",
  cursorborder: "0px solid #000",
  cursorborderradius: "5px",
  scrollspeed: 40,
};

$("html").niceScroll(base_scroll);

$.scrollAnimated(100);
