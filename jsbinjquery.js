$(document).ready(function() {
    var wid=$(window).width()-35;
    var hei=$(window).height()-$('.navbar').height()-60;
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
    f.width(wid);
    var f1=1,f2=1,f3=1,f4=1,fl=0;
    $('#rst').click(function(){
        $("#html").val("");
        $("#css").val("");
        $("#js").val("");
        $("#ifr").attr("srcdoc","");
    });
    $('#ch').click(function() {
        $("#html").val("");
        $("#css").val("");
        $("#js").val("");
        $("#ifr").attr("srcdoc","");
        if ($(this).is(':checked')) {
            fl=1;
            if(f2==1)
            {
                $("#dcs").slideToggle(0.0000000000001);
                f2=0;
            }
            if(f3==1)
            {
                $("#djs").slideToggle(0.0000000000001);
                f3=0;
            }
            h.width(wid);
            $("#bcs").prop('disabled', true);
            $("#bjs").prop('disabled', true);
        }
        else {
            fl=0;
            if(f1==0)
            {
                f1=1;
                $("#dht").slideToggle(0.0000000000001);
            }
            h.width(wid/3);
            c.width(wid/3);
            j.width(wid/3);
            if(f4==1)
            {
                c.height(hei/2);
                j.height(hei/2);
            }
            else
            {
                c.height(hei);
                j.height(hei);
            }
            $("#dcs").slideToggle(0.0000000000001);
            $("#djs").slideToggle(0.0000000000001);
            f2=1;
            f3=1;
            $("#bcs").prop('disabled', false);
            $("#bjs").prop('disabled', false);
        }
    });
    $("#bht").click(function() {
        $("#dht").slideToggle(0.0000000000001);
        if(f1==1)
        {
            f1=0;
            if(f2==1 && f3==1)
            {
                c.width(wid/2);
                j.width(wid/2);
            }
            else if(f2==0 && f3==1)
            {
                j.width(wid);
            }
            else if(f2==1 && f3==0)
            {
                c.width(wid);
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
            f1=1;
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
                c.width(wid/3);
                j.width(wid/3);
            }
            else if(f2==0 && f3==1)
            {
                h.width(wid/2);
                j.width(wid/2);
            }
            else if(f2==1 && f3==0)
            {
                h.width(wid/2);
                c.width(wid/2);
            }
            else
            {
                h.width(wid);
            }
        }
    });
    $("#bcs").click(function() {
        $("#dcs").slideToggle(0.0000000000001);
        if(f2==1)
        {
            f2=0;
            if(f1==1 && f3==1)
            {
                h.width(wid/2);
                j.width(wid/2);
            }
            else if(f1==0 && f3==1)
            {
                j.width(wid);
            }
            else if(f1==1 && f3==0)
            {
                h.width(wid);
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
            f2=1;
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
                h.width(wid/3);
                c.width(wid/3);
                j.width(wid/3);
            }
            else if(f1==0 && f3==1)
            {
                c.width(wid/2);
                j.width(wid/2);
            }
            else if(f1==1 && f3==0)
            {
                h.width(wid/2);
                c.width(wid/2);
            }
            else
            {
                c.width(wid);
            }
        }
    });
    $("#bjs").click(function() {
        $("#djs").slideToggle(0.0000000000001);
        if(f3==1)
        {
            f3=0;
            if(f1==1 && f2==1)
            {
                h.width(wid/2);
                c.width(wid/2);
            }
            else if(f1==0 && f2==1)
            {
                c.width(wid);
            }
            else if(f1==1 && f2==0)
            {
                h.width(wid);
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
            f3=1;
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
                h.width(wid/3);
                c.width(wid/3);
                j.width(wid/3);
            }
            else if(f1==0 && f2==1)
            {
                c.width(wid/2);
                j.width(wid/2);
            }
            else if(f1==1 && f2==0)
            {
                h.width(wid/2);
                j.width(wid/2);
            }
            else
            {
                j.width(wid);
            }
        }
    });
    $("#bre").click(function() {
        $("#dre").slideToggle(0.0000000000001);
        if(f4==1)
        {
            f4=0;
            h.height(hei);
            c.height(hei);
            j.height(hei);
        }
        else
        {
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
        if(fl==0){
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
        }
        else{
            $("#ifr").attr("srcdoc",code);
        }
    });
});