import $ from "jquery";

$(function() {
  $.fn.timeline = function() {
    const selectors = {
      id: $(this),
      item: $(this).find(".timeline-item"),
      activeClass: "timeline-item--active",
      img: ".timeline__img"
    };
    selectors.item.eq(0).addClass(selectors.activeClass);
    selectors.id.css("background-image","url("+selectors.item.first().find(selectors.img).attr("src")+")");

    const itemLength = selectors.item.length;
    $(window).scroll(function() {
      let max, min;
      const pos = $(this).scrollTop();
      selectors.item.each(function(i) {
        if (window.matchMedia("(min-width: 768px)").matches) {
          min = $(this).offset().top - 300;
        }
        if (window.matchMedia("(max-width: 768px)").matches) {
          min = $(this).offset().top - 400;
        }
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
  };

  $("#timeline-1").timeline();
});