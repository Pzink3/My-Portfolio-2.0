<script type="text/javascript" src="scripts/jquery.js"></script>
<script type="text/javascript" src="scripts/jquery.color.js"></script>
<script type="text/javascript">
   $(".link3").live("mouseover", function(){
         $(this).stop().animate( {backgroundColor: "#acea11"}, 300 );
      }).live("mouseout", function(){
         $(this).stop().animate( {backgroundColor: "#89ba38"}, 100 );
      });
</script>