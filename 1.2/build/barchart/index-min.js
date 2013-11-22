/*! kcharts - v1.2 - 2013-11-22 2:11:45 PM
* Copyright (c) 2013 数据可视化小组; Licensed  */
KISSY.add("gallery/kcharts/1.2/barchart/theme",function(){var e={"ks-chart-default":{title:{content:"",css:{"text-align":"center","font-size":"16px","font-weight":"bold",color:"#666"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px",color:"#666"},isShow:!0},xGrids:{css:{color:"#eee"}},yGrids:{css:{color:"#eee"}},yAxis:{css:{color:"#ccc"}},xAxis:{css:{color:"#ccc"}},xLabels:{css:{color:"#666","font-size":"12px"}},yLabels:{css:{color:"#666","font-size":"12px"}},tip:{css:{border:"1px solid {COLOR}"}}},"ks-chart-analytiks":{title:{content:"",css:{"text-align":"center","font-size":"16px","font-weight":"bold",color:"#666"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px",color:"#666"},isShow:!0},xGrids:{css:{color:"#eee"}},yGrids:{css:{color:"#eee"}},yAxis:{css:{color:"#ccc"}},xAxis:{css:{color:"#ccc"}},xLabels:{css:{color:"#666","font-size":"12px"}},yLabels:{css:{color:"#666","font-size":"12px"}},tip:{css:{border:"1px solid {COLOR}"}}},"ks-chart-rainbow":{title:{content:"",css:{"text-align":"center","font-size":"16px","font-weight":"bold",color:"#666"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px",color:"#666"},isShow:!0},xGrids:{css:{color:"#eee"}},yGrids:{css:{color:"#eee"}},yAxis:{css:{color:"#ccc"}},xAxis:{css:{color:"#ccc"}},xLabels:{css:{color:"#666","font-size":"12px"}},yLabels:{css:{color:"#666","font-size":"12px"}},tip:{css:{border:"1px solid {COLOR}"}}}};return e}),KISSY.add("gallery/kcharts/1.2/barchart/index",function(e,t,r,a,n,i,s,o,c,l){var d,h=e.all,f=e.Event,p="ks-chart-",_=p+"default",u=_+"-canvas",g=p+"evtlayout",b=g+"-bars",x="{COLOR}",m=function(e){var t=this;t._cfg=e,t.init()};return e.extend(m,r,{init:function(){var t=this;if(t.chartType="barchart",r.prototype.init.call(t,t._cfg),t._$ctnNode[0]){var a={themeCls:_,autoRender:!0,colors:[],stackable:!1,title:{content:"",css:{"text-align":"center","font-size":"16px"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px"},isShow:!0},xLabels:{isShow:!0,css:{color:"#666","font-size":"12px","white-space":"nowrap",position:"absolute"}},yLabels:{isShow:!0,css:{color:"#666","font-size":"12px","white-space":"nowrap",position:"absolute"}},xAxis:{isShow:!0,css:{color:"#eee",zIndex:10},min:0},yAxis:{isShow:!0,css:{zIndex:10},num:5,min:0},xGrids:{isShow:!0,css:{}},yGrids:{isShow:!0,css:{}},areas:{isShow:!0,css:{}},bars:{isShow:!0,css:{background:x,border:"1px solid #fff"},barsRatio:.6,barRatio:.5},legend:{isShow:!1},tip:{isShow:!0,template:"",css:{},anim:{easing:"easeOut",duration:.3},offset:{x:0,y:0},boundryDetect:!0,alignX:"right",alignY:"bottom"}};t._bars={},t._finished=[],_=t._cfg.themeCls||a.themeCls,t._cfg=e.mix(e.mix(a,o[_],c,c,!0),t._cfg,c,c,!0),t.color=d=new n({themeCls:_}),t._cfg.colors.length>0&&d.removeAllColors();for(var i in t._cfg.colors)d.setColor(t._cfg.colors[i]);t._cfg.autoRender&&t.render(!0)}},drawTitle:function(){var t=this,r=t.htmlPaper,a=_+"-title",n=t._cfg,i=t._innerContainer,s=.6*i.y;n.title.isShow&&""!=n.title.content&&(t._title=r.rect(0,0,t._$ctnNode.width(),s).addClass(a).css(e.mix({"line-height":s+"px"},n.title.css)).html(n.title.content))},drawSubTitle:function(){var t=this,r=t.htmlPaper,a=_+"-subtitle",n=t._cfg,i=t._innerContainer,s=.4*i.y;n.subTitle.isShow&&""!=n.subTitle.content&&(t._subTitle=r.rect(0,.6*i.y,t._$ctnNode.width(),s).addClass(a).css(e.mix({"line-height":s+"px"},n.subTitle.css)).html(n.subTitle.content))},drawBar:function(t,a,n){var i,s=this,o=s._cfg,c=s.paper,l=u+"-bars",d=s._innerContainer,h=s.color.getColor(t).DEFAULT,f=s.processAttr(o.bars.css,h),p="x"==o.zoomType?!1:!0,_=s._barsPos[t][a],g=(_.x-0).toFixed(2),b=(_.y-0).toFixed(2),x=(_.width-0).toFixed(2),m=(_.height-0).toFixed(2);if(o.anim){var v=o.anim.duration?e.isNumber(o.anim.duration)?o.anim.duration:.5:.5,w=o.anim.easing?o.anim.easing:"easeOut";if(p){var y=r.prototype.data2GrapicData.call(s,0,!0,!1);i=c.rect(y,b,0,m).attr({posx:g,posy:b}).addClass(l).css(f).animate({width:x,marginLeft:g-d.x},v,w,function(){n&&n()})}else{var C=r.prototype.data2GrapicData.call(s,0,!1,!0);i=c.rect(g,C,x,0).attr({posx:g,posy:b}).addClass(l).css(f).animate({height:m,marginTop:b-d.y},v,w,function(){n&&n()})}}else i=c.rect(g,b,x,m).attr({posx:g,posy:b}).addClass(l).css(f),n&&n();return i},getBarsPos:function(){var e=this,t=e._cfg.zoomType,a=e._cfg.stackable,n=e._innerContainer,i="y"==t,s=a?1:r.prototype.obj2Array(e._clonePoints).length,o=e._cfg.bars.barsRatio,c=e._cfg.bars.barRatio,l=i?e._pointsY.length>1?e._pointsY[1].y-e._pointsY[0].y:n.height:e._pointsX.length>1?e._pointsX[1].x-e._pointsX[0].x:n.width,d=l*o,h=c>=1?0:(1-c)/c,f=d/(s+(s-1)*h),p=f*(1-c)/c,_=a?0:f+p,u=(e._innerContainer.bl.y,e._innerContainer.bl.x),g=(l*(1-o)-l)/2,b=[];e._barsPos={};for(var x in e._points){var m=[];if(i){var v=r.prototype.data2GrapicData.call(e,0,!0,!1);for(var w in e._points[x]){var y={},C=e._points[x][w].x,L=Math.abs(C-v);y.y=g+e._points[x][w].y,a?(y.x=u+(b[w]||0),b[w]=b[w]?b[w]+L:L):y.x=C>v?C-L:v-L,y.width=L,y.height=f,m.push(y)}}else{var A=r.prototype.data2GrapicData.call(e,0,!1,!0);for(var w in e._points[x]){var y={},Y=e._points[x][w].y,X=Math.abs(A-Y);y.x=g+e._points[x][w].x,a?(y.y=Y-(b[w]||0),b[w]=b[w]?b[w]+X:X):y.y=Y>A?A:Y,y.width=f,y.height=X,m.push(y)}}g+=_,e._barsPos[x]=m}},drawBars:function(e){var t=this;t._cfg;for(var r in t._barsPos){var a=[],n=[];for(var i in t._barsPos[r]){var s=t._barsPos[r][i];n[i]=s,a[i]=t.drawBar(r,i,function(){t._finished.push(!0),e&&t._finished.length==t._cfg.series.length&&e()}).attr({barGroup:r,barIndex:i,defaultColor:d.getColor(r).DEFAULT,hoverColor:d.getColor(r).HOVER})}var o={bars:a,posInfos:n,color:d.getColor(r)};t._bars[r]=o}return t._bars},drawGridsX:function(){var e,t=this,r=t._points[0];if(t._gridsX=[],"x"==t._cfg.zoomType){e=function(){var e=r.length,t=[];if(e>1){var a=(r[1].x-r[0].x)/2;t.push({x:r[0].x-a});for(var n in r)t.push({x:r[n].x- -a})}return t}();for(var a=0,n=e.length;n>a;a++)t._gridsX.push(t.drawGridX(e[a]))}else for(var a in t._pointsX)t._gridsX.push(t.drawGridX(t._pointsX[a]));return t._gridsX},drawGridX:function(e,t){var r=this,a=r._innerContainer.tl.y,n=r._innerContainer.height,t=t||r._cfg.xAxis.css,i=r.htmlPaper,s=r._cfg.themeCls+"-gridsx";return i.lineY(e.x,a,n).addClass(s).css(r._cfg.xGrids.css)},drawGridY:function(e,t){var r=this,a=r._innerContainer.width,t=t||r._cfg.yGrids.css,n=r.htmlPaper,i=r._cfg.themeCls+"-gridsy";return n.lineX(e.x,e.y,a).addClass(i).css(t)},drawGridsY:function(){var e=this,t=e._innerContainer.tl.x,r="x"==e._cfg.zoomType?!1:!0;e._gridsY=[];for(var a=0,n=e._pointsY.length;n>a;a++)e._gridsY[a]={0:e.drawGridY({x:t,y:e._pointsY[a].y}),num:r?e.coordNumX[a]:e.coordNum[a]}},drawAxisX:function(){var e=this,t=e._innerContainer,r=t.bl,a=t.width,n=e.htmlPaper,i=e._cfg.themeCls+"-axisx";return e._axisX=n.lineX(r.x,r.y,a).addClass(i).css(e._cfg.xAxis.css||{}),e._axisX},drawAxisY:function(){var e=this,t=e._innerContainer,r=t.tl,a=t.height,n=e.htmlPaper,i=e._cfg.themeCls+"-axisy";return e._axisY=n.lineY(r.x,r.y,a).addClass(i).css(e._cfg.yAxis.css||{}),e._axisY},drawLabelsX:function(){var e=this,t=e._cfg,r="y"==t.zoomType?!0:!1;if(r)for(var a in e._pointsX)e._labelX[a]={0:e.drawLabelX(a,e._pointsX[a].number)};else for(var a in e._cfg.xAxis.text)e._labelX[a]={0:e.drawLabelX(a,e._cfg.xAxis.text[a])}},drawLabelsY:function(){var e=this,t=e._cfg,r="x"==t.zoomType?!1:!0;if(r)for(var a in e._cfg.yAxis.text)e._labelY[a]={0:e.drawLabelY(a,e._cfg.yAxis.text[a])};else for(var a in e._pointsY)e._labelY[a]={0:e.drawLabelY(a,e._pointsY[a].number),num:e._pointsY[a].number}},drawLabelX:function(r,a){var n,i=this,s=i.htmlPaper,o=i._pointsX,l=o.length||0,d=i._cfg.themeCls+"-xlabels",h="{{data}}",f="";return l>r?(h=i._cfg.xLabels.template||h,f=e.isFunction(h)?h(r,a):t(h).render({data:a}),n=o[r],n[0]=s.text(n.x,n.y,"<span class="+d+">"+f+"</span>","center").children().css(i._cfg.xLabels.css),n[0]):c},drawLabelY:function(r,a){var n=this,i=n.htmlPaper,s=n._cfg.themeCls+"-ylabels",o="{{data}}",c="";return o=n._cfg.yLabels.template||o,c=e.isFunction(o)?o(r,a):t(o).render({data:a}),c&&i.text(n._pointsY[r].x,n._pointsY[r].y,"<span class="+s+">"+c+"</span>","right","middle").children().css(n._cfg.yLabels.css)},renderTip:function(){var t=this,r=t._cfg,a=t._innerContainer,n=r.tip.boundryDetect?{x:a.tl.x,y:a.tl.y,width:a.width,height:a.height}:{},i=e.mix(r.tip,{rootNode:t._$ctnNode,clsName:r.themeCls,boundry:n});return t.tip=new l(i),t.tip},renderEvtLayout:function(){var e,t=this,r=t._innerContainer,a=(r.tl.y,t._points[0],r.height);t._multiple,t._evtEls._bars=[],e=t._evtEls.paper?t._evtEls.paper:t._evtEls.paper=new i(t._$ctnNode,{clsName:g,prependTo:!1,width:r.width,height:a,left:r.tl.x,top:r.tl.y,css:{"z-index":20,background:"#fff",filter:"alpha(opacity =1)","-moz-opacity":.01,"-khtml-opacity":.01,opacity:.01}});for(var n in t._barsPos){var s=[];for(var o in t._barsPos[n]){var c=t._barsPos[n][o];s[o]=e.rect(c.x,c.y,c.width,c.height).addClass(b).attr({barGroup:n,barIndex:o})}t._evtEls._bars.push(s)}return e},clearEvtLayout:function(){var e=this;if(e._evtEls._bars)for(var t in e._evtEls._bars)for(var r in e._evtEls._bars[t])e._evtEls._bars[t][r].remove()},renderLegend:function(){var t=this,r=t._cfg.legend,a=r.container&&h(r.container)[0]?h(r.container):t._$ctnNode,n=t._innerContainer,i=t.color._colors,o=i.length,c=t._cfg,l=t._cfg.series,d=e.map(l,function(e,t){t%=o;var r={},a=i[t];return r.text=e.text,r.DEFAULT=a.DEFAULT,r.HOVER=a.HOVER,r}),f=e.merge({interval:20,iconright:5,showicon:!0},c.legend.globalConfig);return t.legend=new s({container:a,bbox:{width:n.width,height:n.height,left:n.x,top:n.y},align:c.legend.align||"bc",offset:c.legend.offset||(/t/g.test(c.legend.align)?[0,0]:[0,20]),globalConfig:f,config:d}),t.legend.on("click",function(e){var t=e.index,r=(e.text,e.icon,e.el);1!=r.hide?(this.hideBar(t),r.hide=1,r.disable()):(this.showBar(t),r.hide=0,r.enable())},this),t.legend},render:function(t){var r=this,n=r._cfg,s=r._innerContainer,o=n.themeCls;t&&r._$ctnNode.html(""),r.raphaelPaper=a(r._$ctnNode[0],n.width,n.height),r.paper=new i(r._$ctnNode,{clsName:u,width:s.width,height:s.height,left:s.tl.x,top:s.tl.y}),r._clonePoints=r._points,r.getBarsPos(),r.htmlPaper=new i(r._$ctnNode,{clsName:o}),r.drawTitle(),r.drawSubTitle(),r.renderEvtLayout(),n.tip.isShow&&r.renderTip(),n.xGrids.isShow&&r.drawGridsX(),n.yGrids.isShow&&r.drawGridsY(),n.xAxis.isShow&&r.drawAxisX(),n.yAxis.isShow&&r.drawAxisY(),n.xLabels.isShow&&r.drawLabelsX(),n.yLabels.isShow&&r.drawLabelsY(),n.legend.isShow&&r.renderLegend(),r.drawBars(function(){r.afterRender(),r.fix2Resize()}),r.bindEvt(),e.log(r)},bindEvt:function(){var e=this,t=e._cfg;this.unbindEvt(),f.on(h("."+b,e._$ctnNode),"mouseenter",function(r){var a=h(r.currentTarget),n=a.attr("barIndex"),i=a.attr("barGroup");t.tip.isShow&&e.tipHandler(i,n),e.barChange(i,n)}),f.on(h("."+b,e._$ctnNode),"click",function(t){var r=h(t.currentTarget),a=r.attr("barIndex"),n=r.attr("barGroup");e.barClick(n,a)}),f.on(h("."+b,e._$ctnNode),"mouseleave",function(t){var r=h(t.currentTarget),a=r.attr("barIndex"),n=r.attr("barGroup"),i=e._bars[n].bars[a];i.css({background:i.attr("defaultColor")})}),f.on(e._evtEls.paper.$paper,"mouseleave",function(){e.tip&&e.tip.hide(),e.paperLeave()})},unbindEvt:function(){f.detach(h("."+b,self._$ctnNode),"mouseenter"),f.detach(h("."+b,self._$ctnNode),"click"),f.detach(h("."+b,self._$ctnNode),"mouseleave"),f.detach(self._evtEls.paper.$paper,"mouseleave")},paperLeave:function(){var e=this;e.fire("paperLeave",e)},barChange:function(t,r){var a=this,n=a._bars[t],i=e.mix({target:n.bars[r],currentTarget:n.bars[r],barGroup:Math.round(t),barIndex:Math.round(r)},a._points[t][r]);a.fire("barChange",i)},barClick:function(t,r){var a=this,n=a._bars[t],i=e.mix({target:n.bars[r],currentTarget:n.bars[r],barGroup:Math.round(t),barIndex:Math.round(r)},a._points[t][r]);a.fire("barClick",i)},tipHandler:function(t,r){var a=this,n=a._cfg,i=a.tip,s="y"==n.zoomType?!0:!1,o=(i.getInstance(),a._bars[t].bars[r]),c=o.attr("defaultColor"),l=a._cfg.tip.template,d=s?o.attr("posx")- -o.width()- -a._innerContainer.x:o.attr("posx"),h=o.attr("posy"),f=e.merge(a._points[t][r].dataInfo,n.series[t]);delete f.data,a._points[t][r].dataInfo,o.css({background:o.attr("hoverColor")}),l&&(e.mix(f,{groupindex:t,barindex:r}),i.fire("setcontent",{data:f}),i.fire("move",{x:d,y:h,style:a.processAttr(n.tip.css,c)}))},animateGridsAndLabels:function(){var e=this,t=e._cfg.zoomType;if("y"==t){for(var r in e._labelX)e._labelX[r]&&e._labelX[r][0]&&h(e._labelX[r][0]).remove(),e._gridsX[r]&&e._gridsX[r][0]&&h(e._gridsX[r][0]).remove();e.drawGridsX(),e.drawLabelsX()}else if("x"==t){for(var r in e._labelY)e._labelY[r]&&e._labelY[r][0]&&e._labelY[r][0].remove(),e._gridsY[r]&&e._gridsY[r][0]&&e._gridsY[r][0].remove();e.drawGridsY(),e.drawLabelsY()}},processAttr:function(t,r){var a=e.clone(t);for(var n in a)a[n]&&"string"==typeof a[n]&&(a[n]=a[n].replace(x,r));return a},showBar:function(t){var a=this,n=a._innerContainer;r.prototype.recoveryData.call(a,t),a._clonePoints[t]=a._points[t],a.animateGridsAndLabels(),a.getBarsPos();for(var i in a._bars)if(i!=t)for(var s in a._bars[i].bars)if(a._barsPos[i]){var o=a._barsPos[i][s];o&&a._bars[i].bars[s].stop().animate({height:o.height,width:o.width,marginTop:o.y-n.y,marginLeft:o.x-n.x},.4,"easeOut",function(){}),a._bars[i].bars[s].attr({posx:o.x,posy:o.y})}var c=[],l=[];for(var s in a._barsPos[t]){var o=a._barsPos[t][s];c[s]=o,l[s]=a.drawBar(t,s).attr({barGroup:t,barIndex:s,defaultColor:d.getColor(t).DEFAULT,hoverColor:d.getColor(t).HOVER})}a._bars[t]={bars:l,posInfos:c,color:d.getColor(i)},a.clearEvtLayout(),a.renderEvtLayout(),a.bindEvt(),e.log(a)},fix2Resize:function(){var t=this;t._$ctnNode,t._cfg.anim="";var r=e.buffer(function(){t.init()},200);!t.__isFix2Resize&&t.on("resize",function(){t.__isFix2Resize=1,r()})},hideBar:function(t){var a=this,n=a._innerContainer;r.prototype.removeData.call(a,t),delete a._clonePoints[t],a.animateGridsAndLabels(),a.getBarsPos();for(var i in a._bars[t].bars)a._bars[t].bars[i].remove();for(var i in a._bars)if(i!=t)for(var s in a._bars[i].bars){var o=a._barsPos[i]?a._barsPos[i][s]:"";o&&a._bars[i].bars[s].stop().animate({height:o.height,width:o.width,marginTop:o.y-n.y,marginLeft:o.x-n.x},.4,"easeOut",function(){}),a._bars[i].bars[s].attr({posx:o.x,posy:o.y})}a.clearEvtLayout(),a.renderEvtLayout(),a.bindEvt(),e.log(a)},afterRender:function(){var e=this;e.fire("afterRender",e)},getPaper:function(){return this.paper},getHtmlPaper:function(){return this.paper},getRaphaelPaper:function(){return this.raphaelPaper},clear:function(){this._$ctnNode.html("")},destroy:function(){this.unbindEvt(),this.clear()}}),m},{requires:["gallery/template/1.0/index","gallery/kcharts/1.2/basechart/index","gallery/kcharts/1.2/raphael/index","gallery/kcharts/1.2/tools/color/index","gallery/kcharts/1.2/tools/htmlpaper/index","gallery/kcharts/1.2/legend/index","./theme","gallery/kcharts/1.2/tools/touch/index","gallery/kcharts/1.2/tip/index"]});