(function(){
    var EventUtil = {
        addHandler: function(element, type, handler){
            if (element.addEventListener){
                element.addEventListener(type, handler, false);
            } else if (element.attachEvent){
                element.attachEvent("on" + type, handler);
            } else {
                element["on" + type] = handler;
            }
        },
        getEvent: function(event){
            return event ? event : window.event;
        },
        getTarget: function(event){
            return event.target || event.srcElement;
        },
        preventDefault: function(event){
            if (event.preventDefault){
                event.preventDefault();
            } else {
                event.returnValue = false;
            }
        }
      };

      var mytab = document.getElementById("myTab");
      var tabli = mytab.getElementsByTagName("li");

      EventUtil.addHandler(mytab,"click",function(event){

          event = EventUtil.getEvent(event);
          var target = EventUtil.getTarget(event);

          if(target.className == "active"){
              return;
          }
          for(i=0;i<tabli.length;i++){
              tabli[i].setAttribute("data_tab",i);
              if(i == target.getAttribute("data_tab")){
                  target.className = "active";
                  document.getElementById("tab_content"+i).style.display = "block";
              }else{
                  tabli[i].className = "normal";
                  document.getElementById("tab_content"+i).style.display = "none";
              }
          }
    });

})()