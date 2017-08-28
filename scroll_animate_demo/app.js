$(function() {

  var $window           = $(window),
      win_height_padded = $window.height() * 1.1,
      isTouch           = Modernizr.touch;
      
  if (isTouch) { $('.revealOnScroll').addClass('animated'); }
//窗口高度
  $window.on('scroll', revealOnScroll);

  function revealOnScroll() {
    var scrolled = $window.scrollTop(),//监听滚动条高度
        win_height_padded = $window.height() * 1.1;//可视窗口高度
    // Showed...
    $(".revealOnScroll:not(.animated)").each(function () {
      var $this     = $(this),
          offsetTop = $this.offset().top;
        
      if (scrolled + win_height_padded > offsetTop) {
        if ($this.data('timeout')) {
          window.setTimeout(function(){
            $this.addClass('animated ' + $this.data('animation'));
          }, parseInt($this.data('timeout'),10));
        } else {
          $this.addClass('animated ' + $this.data('animation'));
        }
      }
    });
    // Hidden...
   $(".revealOnScroll.animated").each(function (index) {
      var $this     = $(this),
          offsetTop = $this.offset().top;
      if (scrolled + win_height_padded < offsetTop) {
        $(this).removeClass('animated fadeInUp flipInX lightSpeedIn')
      }
    });
  }

  revealOnScroll();
});