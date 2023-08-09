<script>
 $(document).ready(function() {
  var windowHeight = $(window).height();
  var halfWindowHeight = windowHeight * 4;
  var isHalfwayShown = false;
  
  $(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    
    if (scrollTop >= halfWindowHeight && !isHalfwayShown) {
      // Trigger your action when scrolled halfway
      $('#exampleModal').modal('show');
      isHalfwayShown = true; // Set the flag to prevent repeated triggering
    }
  });
});
</script>