$(document).ready(function() {
    var wid=$(window).width()-35;
    var hei=$(window).height()-$('.navbar').height()-59;
    var h=$("#html");
    var c=$("#css");
    var j=$("#js");
    var f=$("#dre");
    h.height(hei/2);
    c.height(hei/2);
    j.height(hei/2);
    f.height(hei/2);
    h.width(wid/3);
    c.width(wid/3);
    j.width(wid/3);
    f.width(wid+18);
    var f1=1,f2=1,f3=1,f4=1;
    window.addEventListener( "orientationchange", function() {
        wid=$(window).width()-35;
        hei=$(window).height()-$('.navbar').height()-59;
        f.width(wid+18);
        if(f4==1)
        {
            if(f1==1 || f2==1 || f3==1)
            {
                f.height(hei/2);
            }
            else
            {
                f.height(hei);
            }
        }
        if (f1==1)
        {
            if(f4==1)
            {
                h.height(hei/2);
            }
            else
            {
                h.height(hei);
            }
            if(f2==1 && f3==1)
            {
                h.width(wid/3);
            }
            else if(f2==1 || f3==1)
            {
                h.width((wid/2)+3);
            }
            else
            {
                h.width(wid+12);
            }
        }
        if (f2==1)
        {
            if(f4==1)
            {
                c.height(hei/2);
            }
            else
            {
                c.height(hei);
            }
            if(f1==1 && f3==1)
            {
                c.width(wid/3);
            }
            else if(f1==1 || f3==1)
            {
                c.width((wid/2)+3);
            }
            else
            {
                c.width(wid+12);
            }
        }
        if (f3==1)
        {
            if(f4==1)
            {
                j.height(hei/2);
            }
            else
            {
                j.height(hei);
            }
            if(f1==1 && f2==1)
            {
                j.width(wid/3);
            }
            else if(f1==1 || f2==1)
            {
                j.width((wid/2)+3);
            }
            else
            {
                j.width(wid+12);
            }
        }
    },false);
    $('#rst').click(function(){
        $("#html").val("");
        $("#css").val("");
        $("#js").val("");
        $("#ifr").attr("srcdoc","");
    });
    $("#bht").click(function() {
        $("#dht").slideToggle(0.0000000000001);
        if(f1==1)
        {
            $("#bht").css('background-color','white');
            $("#bht").css('color','#2196F3');
            f1=0;
            if(f2==1 && f3==1)
            {
                c.width((wid/2)+3);
                j.width((wid/2)+3);
            }
            else if(f2==0 && f3==1)
            {
                j.width(wid+12);
            }
            else if(f2==1 && f3==0)
            {
                c.width(wid+12);
            }
            else
            {
                if(f4==1)
                {
                    f.height(hei);
                }
            }
        }
        else
        {
            $("#bht").css('background-color','#2196F3');
            $("#bht").css('color','white');
            f1=1;
            if(f4==1)
            {
                h.height(hei/2);
                f.height(hei/2);
            }
            else
            {
                h.height(hei);
            }
            if(f2==1 && f3==1)
            {
                h.width(wid/3);
                c.width(wid/3);
                j.width(wid/3);
            }
            else if(f2==0 && f3==1)
            {
                h.width((wid/2)+3);
                j.width((wid/2)+3);
            }
            else if(f2==1 && f3==0)
            {
                h.width((wid/2)+3);
                c.width((wid/2)+3);
            }
            else
            {
                h.width(wid+12);
            }
        }
    });
    $("#bcs").click(function() {
        $("#dcs").slideToggle(0.0000000000001);
        if(f2==1)
        {
            $("#bcs").css('background-color','white');
            $("#bcs").css('color','#2196F3');
            f2=0;
            if(f1==1 && f3==1)
            {
                h.width((wid/2)+3);
                j.width((wid/2)+3);
            }
            else if(f1==0 && f3==1)
            {
                j.width(wid+12);
            }
            else if(f1==1 && f3==0)
            {
                h.width(wid+12);
            }
            else
            {
                if(f4==1)
                {
                    f.height(hei);
                }
            }
        }
        else
        {
            $("#bcs").css('background-color','#2196F3');
            $("#bcs").css('color','white');
            f2=1;
            if(f4==1)
            {
                c.height(hei/2);
                f.height(hei/2);
            }
            else
            {
                c.height(hei);
            }
            if(f1==1 && f3==1)
            {
                h.width(wid/3);
                c.width(wid/3);
                j.width(wid/3);
            }
            else if(f1==0 && f3==1)
            {
                c.width((wid/2)+3);
                j.width((wid/2)+3);
            }
            else if(f1==1 && f3==0)
            {
                h.width((wid/2)+3);
                c.width((wid/2)+3);
            }
            else
            {
                c.width(wid+12);
            }
        }
    });
    $("#bjs").click(function() {
        $("#djs").slideToggle(0.0000000000001);
        if(f3==1)
        {
            $("#bjs").css('background-color','white');
            $("#bjs").css('color','#2196F3');
            f3=0;
            if(f1==1 && f2==1)
            {
                h.width((wid/2)+3);
                c.width((wid/2)+3);
            }
            else if(f1==0 && f2==1)
            {
                c.width(wid+12);
            }
            else if(f1==1 && f2==0)
            {
                h.width(wid+12);
            }
            else
            {
                if(f4==1)
                {
                    f.height(hei);
                }
            }
        }
        else
        {
            $("#bjs").css('background-color','#2196F3');
            $("#bjs").css('color','white');
            f3=1;
            if(f4==1)
            {
                j.height(hei/2);
                f.height(hei/2);
            }
            else
            {
                j.height(hei);
            }
            if(f1==1 && f2==1)
            {
                h.width(wid/3);
                c.width(wid/3);
                j.width(wid/3);
            }
            else if(f1==0 && f2==1)
            {
                c.width((wid/2)+3);
                j.width((wid/2)+3);
            }
            else if(f1==1 && f2==0)
            {
                h.width((wid/2)+3);
                j.width((wid/2)+3);
            }
            else
            {
                j.width(wid+12);
            }
        }
    });
    $("#bre").click(function() {
        $("#dre").slideToggle(0.0000000000001);
        if(f4==1)
        {
            $("#bre").css('background-color','white');
            $("#bre").css('color','#2196F3');
            f4=0;
            h.height(hei);
            c.height(hei);
            j.height(hei);
        }
        else
        {
            $("#bre").css('background-color','#2196F3');
            $("#bre").css('color','white');
            f4=1;
            if(f1==1 || f2==1 || f3==1)
            {
                h.height(hei/2);
                c.height(hei/2);
                j.height(hei/2);
                f.height(hei/2);
            }
            else
            {
                f.height(hei);
            }
        }
    });
    $("#run").click(function() {
        var code=$("#html").val();
        var cs=$("#css").val();
        var jas=$("#js").val();
        var fr=$("#ifr");
        var content=fr.contents();
        var st=content.find('head').append('<style></style>').children('style');
        var bod=content.find('body');
        bod.html(code);
        st.text(cs);
        var scriptTag = "<script>"+jas+"<\/script>";
        bod.append(scriptTag);
    });
});
