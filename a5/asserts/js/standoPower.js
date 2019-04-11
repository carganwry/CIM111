  $(document).ready(function() {
      $("#kujo").click(function(){
        $("#text1").hide();
      });
      $("#kujo").click(function(){
        $("#text1").show();
      });
    });

     $(document).ready(function() {
      $("#joseph").click(function(){
        $("#text2").hide();
      });
      $("#joseph").click(function(){
        $("#text2").show();
      });
    });

     $(document).ready(function() {
      $("#mizu").click(function(){
        $("#text3").hide();
      });
      $("#mizu").click(function(){
        $("#text3").show();
      });
    });


     $(document).ready(function() {
      $("#avdol").click(function(){
        $("#text4").hide();
      });
      $("#avdol").click(function(){
        $("#text4").show();
      });
    });


    $(document).ready(function() {
      $("#kakyo").click(function(){
        $("#text5").hide();
      });
      $("#kakyo").click(function(){
        $("#text5").show();
      });
    });

    $(document).ready(function() {
      $("#pol").click(function(){
        $("#text6").hide();
      });
      $("#pol").click(function(){
        $("#text6").show();
      });
    });

    $(document).ready(function() {
      $("#iggy").click(function(){
        $("#text7").hide();
      });
      $("#iggy").click(function(){
        $("#text7").show();
      });
    });


      //HIDE ALL INFO
      $(".firstHide").hide();

      
      $("#kujo").click(function(){
        $("#text1").toggle(1000)
      })

      $("#joseph").click(function(){
        $("#text2").toggle(1000)
      })
      $("#mizu").click(function(){
        $("#text3").toggle(1000)
      })
      $("#avdol").click(function(){
        $("#text4").toggle(1000)
      })
      $("#kakyo").click(function(){
        $("#text5").toggle(1000)
      })
      $("#pol").click(function(){
        $("#text6").toggle(1000)
      })
      $("#iggy").click(function(){
        $("#text7").toggle(1000)
      })




      //ALL SHOW AND HIDE EVENTS
      var hideStatus = 1;
      $("#allShowButtom").click(function(){
        if(hideStatus == 1){
        $("#text1").show();
        $("#text2").show();
        $("#text3").show();
        $("#text4").show();
        $("#text5").show();
        $("#text6").show();
        $("#text7").show();
                //$(".").show();
        hideStatus == 0;
        }else{
        $("#text1").hide();
        $("#text2").hide();
        $("#text3").hide();
        $("#text4").hide();
        $("#text5").hide();
        $("#text6").hide();
        $("#text7").hide();
                //$(".").hide();
        hideStatus == 1;
        }
      }
      )

      //LIST 
      var standList = ["Anubis", "Atum", "Bastet", "Cream","Dark Blue Moon", "Death Thirteen", "Ebony Devil", "Emperor", "Empress", "The Fool", "Geb", "Hanged Man", "Hermit Purple", "Hierophant Green", "High Priestess", "Horus", "Judgement", "Justice", "Khnum", "Lovers", "Magician's Red", "Ocean Blue", "Osiris", "Sethan", "Silver Chariot", "Star Platinum", "Strength", "Sun", "Tenore Sax", "Tohth", "Tower of Gray", "Wheel of Fortune", "The World", "Yellow Temperance"];

      $("#listButton").click(function(){
        for (var i = 0; i < standList.length; i++){
          $("#list").append(standList[i] + "<br>")
        }
      }
      )