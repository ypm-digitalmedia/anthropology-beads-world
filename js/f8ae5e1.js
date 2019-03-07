$(document).ready(function(){$("area[rel^='prettyPhoto']").prettyPhoto({theme:'light_rounded',markup:'<div class="pp_pic_holder"> \
   <div class="ppt">&nbsp;</div> \
   <div class="pp_top"> \
    <div class="pp_left"></div> \
    <div class="pp_middle"></div> \
    <div class="pp_right"></div> \
   </div> \
   <div class="pp_content_container"> \
    <div class="pp_left"> \
    <div class="pp_right"> \
     <div class="pp_content"> \
      <div class="pp_loaderIcon"></div> \
      <div class="pp_fade"> \
       <a href="#" class="pp_expand" title="Expand the image">Expand</a> \
       <div class="pp_hoverContainer"> \
        <a class="pp_next" href="#">next</a> \
        <a class="pp_previous" href="#">previous</a> \
       </div> \
       <div id="pp_full_res"></div> \
       <div class="pp_details"> \
        <p class="pp_description"></p> \
        {pp_social} \
        <a class="pp_close" href="#">Close</a> \
       </div> \
      </div> \
     </div> \
    </div> \
    </div> \
   </div> \
   <div class="pp_bottom"> \
    <div class="pp_left"></div> \
    <div class="pp_middle"></div> \
    <div class="pp_right"></div> \
   </div> \
  </div> \
  <div class="pp_overlay"></div>',social_tools:''});$('area').on('click',function(){ga('send','event','Timeline','Click',getParameterByName('catalognumber',$(this).attr('href')));return true;});});function getParameterByName(name,url){name=name.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var regex=new RegExp("[\\?&]"+name+"=([^&#]*)"),results=regex.exec(url);return results===null?"":decodeURIComponent(results[1].replace(/\+/g," "));}