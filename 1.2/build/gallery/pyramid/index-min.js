/*! kcharts - v1.2 - 2013-11-22 2:11:45 PM
* Copyright (c) 2013 数据可视化小组; Licensed  */
KISSY.add("gallery/kcharts/1.2/gallery/pyramid/index",function(t){function e(t,e,l,r,i,n){this._init(t,e,l,r,i,n)}var l=t.all;return t.augment(e,{_init:function(t,e,r,i,n,s){function a(t,l,r,n,a,o,c,h,x,f){w=g.path("M "+e/2+" 0 l 0 "+h*t+" l "+c*t/2+" 0 ").attr({fill:l,stroke:r});var u=200*e/330-4;x||(x="#fff"),10>Math.round(100*o)&&(i?u=-1e4:(x=s,u+=9*(c*t/2)/10));var y="14px";f&&(y="12px"),g.text(u,n,a+":"+Math.round(100*o)+"%").attr({fill:x,"font-size":y})}l("#"+t).html(""),r[0].d.sort(function(t,e){return t[0]-e[0]}),r[1].d.sort(function(t,e){return t[0]-e[0]});for(var o=0,c=[],h=0;r[0].d.length>h;h++)o+=r[0].d[h][0];for(var h=0;r[0].d.length>h;h++)c[h]=r[0].d[h][0]/o;for(var x=0,f=[],h=0;r[1].d.length>h;h++)x+=r[1].d[h][0];for(var h=0;r[1].d.length>h;h++)f[h]=r[1].d[h][0]/x;var e=e,u=.88,y=Math.round(e*u),d=r[0].p[0],p=r[1].p[0],g=new Raphael(t,e,y),v="",m="",_="",b="";n||(n="#ee5949"),s||(s="#74aed2"),i?(v=n,m="rgb(209,209,209)",_="#000",b="#fff"):(v="rgb(209,209,209)",m=s,_="rgb(154,154,154)",b="#fff");var w=g.path("M "+e/2+" 0 l "+e/2+" "+y+" l -"+e+" 0");w.attr({fill:"#ccc",stroke:"none"}),w=g.path("M "+e/2+" 0 l 0 "+y+" l -"+e/2+" 0").attr({fill:m,stroke:m}),g.text(90*e/330,260*y/290,r[1].p[1]).attr({fill:b,"font-size":"22px"}),g.text(90*e/330,280*y/290,r[1].p[2]+" : "+Math.round(100*p)+"%").attr({fill:b,"font-size":"16px"}),w=g.path("M "+e/2+" 0 l 0 "+d*y+" l -"+d*e/2+" 0").attr({fill:v,stroke:v}),g.text(120*e/330,d*y-50,r[0].p[1]).attr({fill:_,"font-size":"22px"}),g.text(120*e/330,d*y-30,r[0].p[2]+":").attr({fill:_,"font-size":"16px"}),g.text(120*e/330,d*y-10,Math.round(100*d)+"%").attr({fill:_,"font-size":"16px"});var k=r[0].d.length,C=r[1].d.length;a(1,m,m,280*y/290+3,r[1].d[C-1][1],r[1].d[C-1][0],e,y,b,!0);for(var S=0,h=C-2;h>=0;h--)S+=f[h+1]*p,a(1-S,m,"#fff",(1-S)*y-6,r[1].d[h][1],r[1].d[h][0],e,y,b,!0);a(1,v,"#fff",d*y-8,r[0].d[k-1][1],r[0].d[k-1][0],d*e,d*y,_);for(var L=0,h=k-2;h>0;h--)L+=c[h+1],a(1-L,v,"#fff",(1-L)*y*d-8,r[0].d[h][1],r[0].d[h][0],d*e,d*y,_);var A=r[0].d[0][0];a(c[0],v,"#fff",A*d*y-8,r[0].d[0][1],r[0].d[0][0],d*e,d*y,_);var w=g.path("M "+e/2+" 0 l 0 "+y);w.attr({stroke:"#fff"})}}),e},{requires:["gallery/kcharts/1.2/raphael/index"]});