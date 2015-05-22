// Compiled by ClojureScript 0.0-3269 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__19160__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19160__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__28772_28780 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__28773_28781 = null;
var count__28774_28782 = (0);
var i__28775_28783 = (0);
while(true){
if((i__28775_28783 < count__28774_28782)){
var k_28784 = cljs.core._nth.call(null,chunk__28773_28781,i__28775_28783);
e.setAttribute(cljs.core.name.call(null,k_28784),cljs.core.get.call(null,attrs,k_28784));

var G__28785 = seq__28772_28780;
var G__28786 = chunk__28773_28781;
var G__28787 = count__28774_28782;
var G__28788 = (i__28775_28783 + (1));
seq__28772_28780 = G__28785;
chunk__28773_28781 = G__28786;
count__28774_28782 = G__28787;
i__28775_28783 = G__28788;
continue;
} else {
var temp__4422__auto___28789 = cljs.core.seq.call(null,seq__28772_28780);
if(temp__4422__auto___28789){
var seq__28772_28790__$1 = temp__4422__auto___28789;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28772_28790__$1)){
var c__18905__auto___28791 = cljs.core.chunk_first.call(null,seq__28772_28790__$1);
var G__28792 = cljs.core.chunk_rest.call(null,seq__28772_28790__$1);
var G__28793 = c__18905__auto___28791;
var G__28794 = cljs.core.count.call(null,c__18905__auto___28791);
var G__28795 = (0);
seq__28772_28780 = G__28792;
chunk__28773_28781 = G__28793;
count__28774_28782 = G__28794;
i__28775_28783 = G__28795;
continue;
} else {
var k_28796 = cljs.core.first.call(null,seq__28772_28790__$1);
e.setAttribute(cljs.core.name.call(null,k_28796),cljs.core.get.call(null,attrs,k_28796));

var G__28797 = cljs.core.next.call(null,seq__28772_28790__$1);
var G__28798 = null;
var G__28799 = (0);
var G__28800 = (0);
seq__28772_28780 = G__28797;
chunk__28773_28781 = G__28798;
count__28774_28782 = G__28799;
i__28775_28783 = G__28800;
continue;
}
} else {
}
}
break;
}

var seq__28776_28801 = cljs.core.seq.call(null,children);
var chunk__28777_28802 = null;
var count__28778_28803 = (0);
var i__28779_28804 = (0);
while(true){
if((i__28779_28804 < count__28778_28803)){
var ch_28805 = cljs.core._nth.call(null,chunk__28777_28802,i__28779_28804);
e.appendChild(ch_28805);

var G__28806 = seq__28776_28801;
var G__28807 = chunk__28777_28802;
var G__28808 = count__28778_28803;
var G__28809 = (i__28779_28804 + (1));
seq__28776_28801 = G__28806;
chunk__28777_28802 = G__28807;
count__28778_28803 = G__28808;
i__28779_28804 = G__28809;
continue;
} else {
var temp__4422__auto___28810 = cljs.core.seq.call(null,seq__28776_28801);
if(temp__4422__auto___28810){
var seq__28776_28811__$1 = temp__4422__auto___28810;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28776_28811__$1)){
var c__18905__auto___28812 = cljs.core.chunk_first.call(null,seq__28776_28811__$1);
var G__28813 = cljs.core.chunk_rest.call(null,seq__28776_28811__$1);
var G__28814 = c__18905__auto___28812;
var G__28815 = cljs.core.count.call(null,c__18905__auto___28812);
var G__28816 = (0);
seq__28776_28801 = G__28813;
chunk__28777_28802 = G__28814;
count__28778_28803 = G__28815;
i__28779_28804 = G__28816;
continue;
} else {
var ch_28817 = cljs.core.first.call(null,seq__28776_28811__$1);
e.appendChild(ch_28817);

var G__28818 = cljs.core.next.call(null,seq__28776_28811__$1);
var G__28819 = null;
var G__28820 = (0);
var G__28821 = (0);
seq__28776_28801 = G__28818;
chunk__28777_28802 = G__28819;
count__28778_28803 = G__28820;
i__28779_28804 = G__28821;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq28769){
var G__28770 = cljs.core.first.call(null,seq28769);
var seq28769__$1 = cljs.core.next.call(null,seq28769);
var G__28771 = cljs.core.first.call(null,seq28769__$1);
var seq28769__$2 = cljs.core.next.call(null,seq28769__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__28770,G__28771,seq28769__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__19015__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19016__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19017__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19018__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19019__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__19015__auto__,prefer_table__19016__auto__,method_cache__19017__auto__,cached_hierarchy__19018__auto__,hierarchy__19019__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__19015__auto__,prefer_table__19016__auto__,method_cache__19017__auto__,cached_hierarchy__19018__auto__,hierarchy__19019__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19019__auto__,method_table__19015__auto__,prefer_table__19016__auto__,method_cache__19017__auto__,cached_hierarchy__19018__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_28822 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_28822.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_28822.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_28822.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_28822);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__28823,st_map){
var map__28827 = p__28823;
var map__28827__$1 = ((cljs.core.seq_QMARK_.call(null,map__28827))?cljs.core.apply.call(null,cljs.core.hash_map,map__28827):map__28827);
var container_el = cljs.core.get.call(null,map__28827__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__28827,map__28827__$1,container_el){
return (function (p__28828){
var vec__28829 = p__28828;
var k = cljs.core.nth.call(null,vec__28829,(0),null);
var v = cljs.core.nth.call(null,vec__28829,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__28827,map__28827__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__28830,dom_str){
var map__28832 = p__28830;
var map__28832__$1 = ((cljs.core.seq_QMARK_.call(null,map__28832))?cljs.core.apply.call(null,cljs.core.hash_map,map__28832):map__28832);
var c = map__28832__$1;
var content_area_el = cljs.core.get.call(null,map__28832__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__28833){
var map__28835 = p__28833;
var map__28835__$1 = ((cljs.core.seq_QMARK_.call(null,map__28835))?cljs.core.apply.call(null,cljs.core.hash_map,map__28835):map__28835);
var content_area_el = cljs.core.get.call(null,map__28835__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__21347__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21347__auto__){
return (function (){
var f__21348__auto__ = (function (){var switch__21285__auto__ = ((function (c__21347__auto__){
return (function (state_28877){
var state_val_28878 = (state_28877[(1)]);
if((state_val_28878 === (1))){
var inst_28862 = (state_28877[(7)]);
var inst_28862__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_28863 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_28864 = ["10px","10px","100%","68px","1.0"];
var inst_28865 = cljs.core.PersistentHashMap.fromArrays(inst_28863,inst_28864);
var inst_28866 = cljs.core.merge.call(null,inst_28865,style);
var inst_28867 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28862__$1,inst_28866);
var inst_28868 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_28862__$1,msg);
var inst_28869 = cljs.core.async.timeout.call(null,(300));
var state_28877__$1 = (function (){var statearr_28879 = state_28877;
(statearr_28879[(8)] = inst_28867);

(statearr_28879[(7)] = inst_28862__$1);

(statearr_28879[(9)] = inst_28868);

return statearr_28879;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28877__$1,(2),inst_28869);
} else {
if((state_val_28878 === (2))){
var inst_28862 = (state_28877[(7)]);
var inst_28871 = (state_28877[(2)]);
var inst_28872 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_28873 = ["auto"];
var inst_28874 = cljs.core.PersistentHashMap.fromArrays(inst_28872,inst_28873);
var inst_28875 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28862,inst_28874);
var state_28877__$1 = (function (){var statearr_28880 = state_28877;
(statearr_28880[(10)] = inst_28871);

return statearr_28880;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28877__$1,inst_28875);
} else {
return null;
}
}
});})(c__21347__auto__))
;
return ((function (switch__21285__auto__,c__21347__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__21286__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__21286__auto____0 = (function (){
var statearr_28884 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28884[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__21286__auto__);

(statearr_28884[(1)] = (1));

return statearr_28884;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__21286__auto____1 = (function (state_28877){
while(true){
var ret_value__21287__auto__ = (function (){try{while(true){
var result__21288__auto__ = switch__21285__auto__.call(null,state_28877);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21288__auto__;
}
break;
}
}catch (e28885){if((e28885 instanceof Object)){
var ex__21289__auto__ = e28885;
var statearr_28886_28888 = state_28877;
(statearr_28886_28888[(5)] = ex__21289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28877);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28885;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28889 = state_28877;
state_28877 = G__28889;
continue;
} else {
return ret_value__21287__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__21286__auto__ = function(state_28877){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21286__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21286__auto____1.call(this,state_28877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__21286__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__21286__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__21286__auto__;
})()
;})(switch__21285__auto__,c__21347__auto__))
})();
var state__21349__auto__ = (function (){var statearr_28887 = f__21348__auto__.call(null);
(statearr_28887[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21347__auto__);

return statearr_28887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21349__auto__);
});})(c__21347__auto__))
);

return c__21347__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var temp__4420__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4420__auto__)){
var vec__28891 = temp__4420__auto__;
var f = cljs.core.nth.call(null,vec__28891,(0),null);
var ln = cljs.core.nth.call(null,vec__28891,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__28894 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__28894,(0),null);
var file_line = cljs.core.nth.call(null,vec__28894,(1),null);
var file_column = cljs.core.nth.call(null,vec__28894,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__28894,file_name,file_line,file_column){
return (function (p1__28892_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__28892_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__28894,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__18120__auto__ = file_line;
if(cljs.core.truth_(or__18120__auto__)){
return or__18120__auto__;
} else {
var and__18108__auto__ = cause;
if(cljs.core.truth_(and__18108__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__18108__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__28896 = figwheel.client.heads_up.ensure_container.call(null);
var map__28896__$1 = ((cljs.core.seq_QMARK_.call(null,map__28896))?cljs.core.apply.call(null,cljs.core.hash_map,map__28896):map__28896);
var content_area_el = cljs.core.get.call(null,map__28896__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__21347__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21347__auto__){
return (function (){
var f__21348__auto__ = (function (){var switch__21285__auto__ = ((function (c__21347__auto__){
return (function (state_28943){
var state_val_28944 = (state_28943[(1)]);
if((state_val_28944 === (1))){
var inst_28926 = (state_28943[(7)]);
var inst_28926__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_28927 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_28928 = ["0.0"];
var inst_28929 = cljs.core.PersistentHashMap.fromArrays(inst_28927,inst_28928);
var inst_28930 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28926__$1,inst_28929);
var inst_28931 = cljs.core.async.timeout.call(null,(300));
var state_28943__$1 = (function (){var statearr_28945 = state_28943;
(statearr_28945[(7)] = inst_28926__$1);

(statearr_28945[(8)] = inst_28930);

return statearr_28945;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28943__$1,(2),inst_28931);
} else {
if((state_val_28944 === (2))){
var inst_28926 = (state_28943[(7)]);
var inst_28933 = (state_28943[(2)]);
var inst_28934 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_28935 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_28936 = cljs.core.PersistentHashMap.fromArrays(inst_28934,inst_28935);
var inst_28937 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28926,inst_28936);
var inst_28938 = cljs.core.async.timeout.call(null,(200));
var state_28943__$1 = (function (){var statearr_28946 = state_28943;
(statearr_28946[(9)] = inst_28933);

(statearr_28946[(10)] = inst_28937);

return statearr_28946;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28943__$1,(3),inst_28938);
} else {
if((state_val_28944 === (3))){
var inst_28926 = (state_28943[(7)]);
var inst_28940 = (state_28943[(2)]);
var inst_28941 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_28926,"");
var state_28943__$1 = (function (){var statearr_28947 = state_28943;
(statearr_28947[(11)] = inst_28940);

return statearr_28947;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28943__$1,inst_28941);
} else {
return null;
}
}
}
});})(c__21347__auto__))
;
return ((function (switch__21285__auto__,c__21347__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__21286__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__21286__auto____0 = (function (){
var statearr_28951 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28951[(0)] = figwheel$client$heads_up$clear_$_state_machine__21286__auto__);

(statearr_28951[(1)] = (1));

return statearr_28951;
});
var figwheel$client$heads_up$clear_$_state_machine__21286__auto____1 = (function (state_28943){
while(true){
var ret_value__21287__auto__ = (function (){try{while(true){
var result__21288__auto__ = switch__21285__auto__.call(null,state_28943);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21288__auto__;
}
break;
}
}catch (e28952){if((e28952 instanceof Object)){
var ex__21289__auto__ = e28952;
var statearr_28953_28955 = state_28943;
(statearr_28953_28955[(5)] = ex__21289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28956 = state_28943;
state_28943 = G__28956;
continue;
} else {
return ret_value__21287__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__21286__auto__ = function(state_28943){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__21286__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__21286__auto____1.call(this,state_28943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__21286__auto____0;
figwheel$client$heads_up$clear_$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__21286__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__21286__auto__;
})()
;})(switch__21285__auto__,c__21347__auto__))
})();
var state__21349__auto__ = (function (){var statearr_28954 = f__21348__auto__.call(null);
(statearr_28954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21347__auto__);

return statearr_28954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21349__auto__);
});})(c__21347__auto__))
);

return c__21347__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__21347__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21347__auto__){
return (function (){
var f__21348__auto__ = (function (){var switch__21285__auto__ = ((function (c__21347__auto__){
return (function (state_28988){
var state_val_28989 = (state_28988[(1)]);
if((state_val_28989 === (1))){
var inst_28978 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_28988__$1 = state_28988;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28988__$1,(2),inst_28978);
} else {
if((state_val_28989 === (2))){
var inst_28980 = (state_28988[(2)]);
var inst_28981 = cljs.core.async.timeout.call(null,(400));
var state_28988__$1 = (function (){var statearr_28990 = state_28988;
(statearr_28990[(7)] = inst_28980);

return statearr_28990;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28988__$1,(3),inst_28981);
} else {
if((state_val_28989 === (3))){
var inst_28983 = (state_28988[(2)]);
var inst_28984 = figwheel.client.heads_up.clear.call(null);
var state_28988__$1 = (function (){var statearr_28991 = state_28988;
(statearr_28991[(8)] = inst_28983);

return statearr_28991;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28988__$1,(4),inst_28984);
} else {
if((state_val_28989 === (4))){
var inst_28986 = (state_28988[(2)]);
var state_28988__$1 = state_28988;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28988__$1,inst_28986);
} else {
return null;
}
}
}
}
});})(c__21347__auto__))
;
return ((function (switch__21285__auto__,c__21347__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__21286__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__21286__auto____0 = (function (){
var statearr_28995 = [null,null,null,null,null,null,null,null,null];
(statearr_28995[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__21286__auto__);

(statearr_28995[(1)] = (1));

return statearr_28995;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__21286__auto____1 = (function (state_28988){
while(true){
var ret_value__21287__auto__ = (function (){try{while(true){
var result__21288__auto__ = switch__21285__auto__.call(null,state_28988);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21288__auto__;
}
break;
}
}catch (e28996){if((e28996 instanceof Object)){
var ex__21289__auto__ = e28996;
var statearr_28997_28999 = state_28988;
(statearr_28997_28999[(5)] = ex__21289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28988);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28996;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29000 = state_28988;
state_28988 = G__29000;
continue;
} else {
return ret_value__21287__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__21286__auto__ = function(state_28988){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21286__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21286__auto____1.call(this,state_28988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__21286__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__21286__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__21286__auto__;
})()
;})(switch__21285__auto__,c__21347__auto__))
})();
var state__21349__auto__ = (function (){var statearr_28998 = f__21348__auto__.call(null);
(statearr_28998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21347__auto__);

return statearr_28998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21349__auto__);
});})(c__21347__auto__))
);

return c__21347__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map