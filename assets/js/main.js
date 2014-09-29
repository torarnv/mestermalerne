;(function(){

    $('#menu-select').change(function() {
      window.location.href = "http://" + window.location.host + $(this).val();
      $(this).blur();
    });

    $("#menu-select > option").each(function() {
        if (window.location.href.lastIndexOf(this.value) >= 0)
          $(this).prop('selected', true);
    });

    if (cycleCarousel) {
	  $('.carousel').carousel({
	    interval: 4000
	  });

	  $('.carousel').carousel('cycle');
    }
})();
