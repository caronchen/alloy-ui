AUI.add("aui-form-textarea",function(D){var G=D.Lang,F=D.ClassNameManager.getClassName,M="textarea",I=F(M),E=[F(M,"height","monitor"),F("field","text","input"),F("helper","hidden","accessible")].join(" "),J="&nbsp;&nbsp;",K="&nbsp;\n&nbsp;",B='<pre class="'+E+'">',L="</pre>",H='<textarea autocomplete="off" class="{cssClass}" name="{name}"></textarea>';var C=D.Component.create({NAME:M,ATTRS:{autoSize:{value:true},height:{value:"auto"},maxHeight:{value:1000,setter:"_setAutoDimension"},minHeight:{value:45,setter:"_setAutoDimension"},width:{value:"auto",setter:"_setAutoDimension"}},HTML_PARSER:{node:"textarea"},EXTENDS:D.Textfield,prototype:{FIELD_TEMPLATE:H,renderUI:function(){var A=this;C.superclass.renderUI.call(A);if(A.get("autoSize")){A._renderHeightMonitor();}},bindUI:function(){var A=this;C.superclass.bindUI.call(A);if(A.get("autoSize")){A.get("node").on("keyup",A._onKeyup,A);}A.after("adjustSize",A._uiAutoSize);A.after("heightChange",A._afterHeightChange);A.after("widthChange",A._afterWidthChange);},syncUI:function(){var A=this;C.superclass.syncUI.call(A);A._setAutoDimension(A.get("minHeight"),"minHeight");A._setAutoDimension(A.get("maxHeight"),"maxHeight");var N=A.get("width");var O=A.get("minHeight");A._setAutoDimension(N,"width");A._uiSetDim("height",O);A._uiSetDim("width",N);},_afterHeightChange:function(N){var A=this;A._uiSetDim("height",N.newVal,N.prevVal);},_afterWidthChange:function(N){var A=this;A._uiSetDim("width",N.newVal,N.prevVal);},_onKeyup:function(N){var A=this;A.fire("adjustSize");},_renderHeightMonitor:function(){var A=this;var O=D.Node.create(B+L);var Q=A.get("node");D.getBody().append(O);A._heightMonitor=O;var S=Q.getComputedStyle("fontFamily");var R=Q.getComputedStyle("fontSize");var P=Q.getComputedStyle("fontWeight");var N=Q.getComputedStyle("fontSize");Q.setStyle("height",A.get("minHeight")+"px");O.setStyles({fontFamily:S,fontSize:R,fontWeight:P});if("outerHTML" in O.getDOM()){A._updateContent=A._updateOuterContent;}else{A._updateContent=A._updateInnerContent;}},_setAutoDimension:function(O,N){var A=this;A["_"+N]=O;},_uiAutoSize:function(){var N=this;var R=N.get("node");var P=N._heightMonitor;var A=N._minHeight;var O=N._maxHeight;var Q=R.val();var T=document.createTextNode(Q);P.set("innerHTML","");P.appendChild(T);P.setStyle("width",R.getComputedStyle("width"));Q=P.get("innerHTML");if(!Q.length){Q=J;}else{Q+=K;}N._updateContent(Q);var S=Math.max(P.get("offsetHeight"),A);S=Math.min(S,O);if(S!=N._lastHeight){N._lastHeight=S;N._uiSetDim("height",S);}},_uiSetDim:function(O,N){var A=this;var P=A.get("node");if(G.isNumber(N)){N+="px";}P.setStyle(O,N);},_updateInnerContent:function(N){var A=this;return A._heightMonitor.set("innerHTML",N);},_updateOuterContent:function(N){var A=this;N=N.replace(/\n/g,"<br />");return A._updateInnerContent(N);}}});D.Textarea=C;},"@VERSION@",{requires:["aui-form-textfield"],skinnable:true});