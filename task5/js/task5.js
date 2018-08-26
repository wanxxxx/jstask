 $(function() {
     $("#btnShow").bind("click", function() {
         var $this = $(this);
         $("ul").html("<img src='Images/Loading.gif' alt=''/>").load("http://www.imooc.com/data/fruit_part.html", function() {
             $this.attr("disabled", "true");
         });
     })
 });