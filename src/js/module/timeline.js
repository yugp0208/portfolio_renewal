$(function() {
  //selectorsオブジェクトに格納
  const selectors = {
    id: $(this),//this
    item: $(this).find(".timeline-item"),//this要素の.timeline-item
    activeClass: "timeline-item--active",//付与するclass
    img: ".timeline__img"//timeline-itemの画像
  };
  selectors.item.eq(0).addClass(selectors.activeClass);//最初のitemにclassを付与
  //this要素のcssに
  selectors.id.css("background-image","url("+selectors.item.first().find(selectors.img).attr("src")+")");

  const itemLength = selectors.item.length;
  $(window).scroll(function() {
    let max, min;
    const pos = $(this).scrollTop();
    selectors.item.each(function(i) {
      min = $(this).offset().top;
      max = $(this).height() + $(this).offset().top;
      const that = $(this);
      if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
        selectors.item.removeClass(selectors.activeClass);
        selectors.id.css(
          "background-image",
          "url(" +
            selectors.item
              .last()
              .find(selectors.img)
              .attr("src") +
            ")"
        );
        selectors.item.last().addClass(selectors.activeClass);
      } else if (pos <= max - 40 && pos >= min) {
        selectors.id.css(
          "background-image",
          "url(" +
            $(this)
              .find(selectors.img)
              .attr("src") +
            ")"
        );
        selectors.item.removeClass(selectors.activeClass);
        $(this).addClass(selectors.activeClass);
      }
    });
  });

  $("#timeline-1").timeline();
});