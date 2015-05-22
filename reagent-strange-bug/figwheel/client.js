// Compiled by ClojureScript 0.0-3269 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__28008__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28008 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28009__i = 0, G__28009__a = new Array(arguments.length -  0);
while (G__28009__i < G__28009__a.length) {G__28009__a[G__28009__i] = arguments[G__28009__i + 0]; ++G__28009__i;}
  args = new cljs.core.IndexedSeq(G__28009__a,0);
} 
return G__28008__delegate.call(this,args);};
G__28008.cljs$lang$maxFixedArity = 0;
G__28008.cljs$lang$applyTo = (function (arglist__28010){
var args = cljs.core.seq(arglist__28010);
return G__28008__delegate(args);
});
G__28008.cljs$core$IFn$_invoke$arity$variadic = G__28008__delegate;
return G__28008;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__28011){
var map__28013 = p__28011;
var map__28013__$1 = ((cljs.core.seq_QMARK_.call(null,map__28013))?cljs.core.apply.call(null,cljs.core.hash_map,map__28013):map__28013);
var message = cljs.core.get.call(null,map__28013__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__28013__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18120__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18120__auto__)){
return or__18120__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18108__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18108__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18108__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__21347__auto___28142 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21347__auto___28142,ch){
return (function (){
var f__21348__auto__ = (function (){var switch__21285__auto__ = ((function (c__21347__auto___28142,ch){
return (function (state_28116){
var state_val_28117 = (state_28116[(1)]);
if((state_val_28117 === (7))){
var inst_28112 = (state_28116[(2)]);
var state_28116__$1 = state_28116;
var statearr_28118_28143 = state_28116__$1;
(statearr_28118_28143[(2)] = inst_28112);

(statearr_28118_28143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28117 === (1))){
var state_28116__$1 = state_28116;
var statearr_28119_28144 = state_28116__$1;
(statearr_28119_28144[(2)] = null);

(statearr_28119_28144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28117 === (4))){
var inst_28080 = (state_28116[(7)]);
var inst_28080__$1 = (state_28116[(2)]);
var state_28116__$1 = (function (){var statearr_28120 = state_28116;
(statearr_28120[(7)] = inst_28080__$1);

return statearr_28120;
})();
if(cljs.core.truth_(inst_28080__$1)){
var statearr_28121_28145 = state_28116__$1;
(statearr_28121_28145[(1)] = (5));

} else {
var statearr_28122_28146 = state_28116__$1;
(statearr_28122_28146[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28117 === (13))){
var state_28116__$1 = state_28116;
var statearr_28123_28147 = state_28116__$1;
(statearr_28123_28147[(2)] = null);

(statearr_28123_28147[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28117 === (6))){
var state_28116__$1 = state_28116;
var statearr_28124_28148 = state_28116__$1;
(statearr_28124_28148[(2)] = null);

(statearr_28124_28148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28117 === (3))){
var inst_28114 = (state_28116[(2)]);
var state_28116__$1 = state_28116;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28116__$1,inst_28114);
} else {
if((state_val_28117 === (12))){
var inst_28087 = (state_28116[(8)]);
var inst_28100 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28087);
var inst_28101 = cljs.core.first.call(null,inst_28100);
var inst_28102 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_28101);
var inst_28103 = console.warn("Figwheel: Not loading code with warnings - ",inst_28102);
var state_28116__$1 = state_28116;
var statearr_28125_28149 = state_28116__$1;
(statearr_28125_28149[(2)] = inst_28103);

(statearr_28125_28149[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28117 === (2))){
var state_28116__$1 = state_28116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28116__$1,(4),ch);
} else {
if((state_val_28117 === (11))){
var inst_28096 = (state_28116[(2)]);
var state_28116__$1 = state_28116;
var statearr_28126_28150 = state_28116__$1;
(statearr_28126_28150[(2)] = inst_28096);

(statearr_28126_28150[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28117 === (9))){
var inst_28086 = (state_28116[(9)]);
var inst_28098 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28086,opts);
var state_28116__$1 = state_28116;
if(cljs.core.truth_(inst_28098)){
var statearr_28127_28151 = state_28116__$1;
(statearr_28127_28151[(1)] = (12));

} else {
var statearr_28128_28152 = state_28116__$1;
(statearr_28128_28152[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28117 === (5))){
var inst_28080 = (state_28116[(7)]);
var inst_28086 = (state_28116[(9)]);
var inst_28082 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28083 = (new cljs.core.PersistentArrayMap(null,2,inst_28082,null));
var inst_28084 = (new cljs.core.PersistentHashSet(null,inst_28083,null));
var inst_28085 = figwheel.client.focus_msgs.call(null,inst_28084,inst_28080);
var inst_28086__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28085);
var inst_28087 = cljs.core.first.call(null,inst_28085);
var inst_28088 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28086__$1,opts);
var state_28116__$1 = (function (){var statearr_28129 = state_28116;
(statearr_28129[(9)] = inst_28086__$1);

(statearr_28129[(8)] = inst_28087);

return statearr_28129;
})();
if(cljs.core.truth_(inst_28088)){
var statearr_28130_28153 = state_28116__$1;
(statearr_28130_28153[(1)] = (8));

} else {
var statearr_28131_28154 = state_28116__$1;
(statearr_28131_28154[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28117 === (14))){
var inst_28106 = (state_28116[(2)]);
var state_28116__$1 = state_28116;
var statearr_28132_28155 = state_28116__$1;
(statearr_28132_28155[(2)] = inst_28106);

(statearr_28132_28155[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28117 === (10))){
var inst_28108 = (state_28116[(2)]);
var state_28116__$1 = (function (){var statearr_28133 = state_28116;
(statearr_28133[(10)] = inst_28108);

return statearr_28133;
})();
var statearr_28134_28156 = state_28116__$1;
(statearr_28134_28156[(2)] = null);

(statearr_28134_28156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28117 === (8))){
var inst_28087 = (state_28116[(8)]);
var inst_28090 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28091 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28087);
var inst_28092 = cljs.core.async.timeout.call(null,(1000));
var inst_28093 = [inst_28091,inst_28092];
var inst_28094 = (new cljs.core.PersistentVector(null,2,(5),inst_28090,inst_28093,null));
var state_28116__$1 = state_28116;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28116__$1,(11),inst_28094);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21347__auto___28142,ch))
;
return ((function (switch__21285__auto__,c__21347__auto___28142,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21286__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21286__auto____0 = (function (){
var statearr_28138 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28138[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21286__auto__);

(statearr_28138[(1)] = (1));

return statearr_28138;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21286__auto____1 = (function (state_28116){
while(true){
var ret_value__21287__auto__ = (function (){try{while(true){
var result__21288__auto__ = switch__21285__auto__.call(null,state_28116);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21288__auto__;
}
break;
}
}catch (e28139){if((e28139 instanceof Object)){
var ex__21289__auto__ = e28139;
var statearr_28140_28157 = state_28116;
(statearr_28140_28157[(5)] = ex__21289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28116);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28139;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28158 = state_28116;
state_28116 = G__28158;
continue;
} else {
return ret_value__21287__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21286__auto__ = function(state_28116){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21286__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21286__auto____1.call(this,state_28116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21286__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21286__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21286__auto__;
})()
;})(switch__21285__auto__,c__21347__auto___28142,ch))
})();
var state__21349__auto__ = (function (){var statearr_28141 = f__21348__auto__.call(null);
(statearr_28141[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21347__auto___28142);

return statearr_28141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21349__auto__);
});})(c__21347__auto___28142,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28159_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28159_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_28166 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_28166){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_28164 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_28165 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_28164,_STAR_print_newline_STAR_28165,base_path_28166){
return (function() { 
var G__28167__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28167 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28168__i = 0, G__28168__a = new Array(arguments.length -  0);
while (G__28168__i < G__28168__a.length) {G__28168__a[G__28168__i] = arguments[G__28168__i + 0]; ++G__28168__i;}
  args = new cljs.core.IndexedSeq(G__28168__a,0);
} 
return G__28167__delegate.call(this,args);};
G__28167.cljs$lang$maxFixedArity = 0;
G__28167.cljs$lang$applyTo = (function (arglist__28169){
var args = cljs.core.seq(arglist__28169);
return G__28167__delegate(args);
});
G__28167.cljs$core$IFn$_invoke$arity$variadic = G__28167__delegate;
return G__28167;
})()
;})(_STAR_print_fn_STAR_28164,_STAR_print_newline_STAR_28165,base_path_28166))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28165;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28164;
}}catch (e28163){if((e28163 instanceof Error)){
var e = e28163;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28166], null));
} else {
var e = e28163;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_28166))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28170){
var map__28175 = p__28170;
var map__28175__$1 = ((cljs.core.seq_QMARK_.call(null,map__28175))?cljs.core.apply.call(null,cljs.core.hash_map,map__28175):map__28175);
var opts = map__28175__$1;
var build_id = cljs.core.get.call(null,map__28175__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__28175,map__28175__$1,opts,build_id){
return (function (p__28176){
var vec__28177 = p__28176;
var map__28178 = cljs.core.nth.call(null,vec__28177,(0),null);
var map__28178__$1 = ((cljs.core.seq_QMARK_.call(null,map__28178))?cljs.core.apply.call(null,cljs.core.hash_map,map__28178):map__28178);
var msg = map__28178__$1;
var msg_name = cljs.core.get.call(null,map__28178__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28177,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__28177,map__28178,map__28178__$1,msg,msg_name,_,map__28175,map__28175__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__28177,map__28178,map__28178__$1,msg,msg_name,_,map__28175,map__28175__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__28175,map__28175__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28182){
var vec__28183 = p__28182;
var map__28184 = cljs.core.nth.call(null,vec__28183,(0),null);
var map__28184__$1 = ((cljs.core.seq_QMARK_.call(null,map__28184))?cljs.core.apply.call(null,cljs.core.hash_map,map__28184):map__28184);
var msg = map__28184__$1;
var msg_name = cljs.core.get.call(null,map__28184__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28183,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28185){
var map__28193 = p__28185;
var map__28193__$1 = ((cljs.core.seq_QMARK_.call(null,map__28193))?cljs.core.apply.call(null,cljs.core.hash_map,map__28193):map__28193);
var on_compile_warning = cljs.core.get.call(null,map__28193__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__28193__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__28193,map__28193__$1,on_compile_warning,on_compile_fail){
return (function (p__28194){
var vec__28195 = p__28194;
var map__28196 = cljs.core.nth.call(null,vec__28195,(0),null);
var map__28196__$1 = ((cljs.core.seq_QMARK_.call(null,map__28196))?cljs.core.apply.call(null,cljs.core.hash_map,map__28196):map__28196);
var msg = map__28196__$1;
var msg_name = cljs.core.get.call(null,map__28196__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28195,(1));
var pred__28197 = cljs.core._EQ_;
var expr__28198 = msg_name;
if(cljs.core.truth_(pred__28197.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28198))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28197.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28198))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__28193,map__28193__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21347__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21347__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21348__auto__ = (function (){var switch__21285__auto__ = ((function (c__21347__auto__,msg_hist,msg_names,msg){
return (function (state_28399){
var state_val_28400 = (state_28399[(1)]);
if((state_val_28400 === (7))){
var inst_28333 = (state_28399[(2)]);
var state_28399__$1 = state_28399;
var statearr_28401_28442 = state_28399__$1;
(statearr_28401_28442[(2)] = inst_28333);

(statearr_28401_28442[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28400 === (20))){
var inst_28361 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28399__$1 = state_28399;
if(cljs.core.truth_(inst_28361)){
var statearr_28402_28443 = state_28399__$1;
(statearr_28402_28443[(1)] = (22));

} else {
var statearr_28403_28444 = state_28399__$1;
(statearr_28403_28444[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28400 === (27))){
var inst_28373 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28374 = figwheel.client.heads_up.display_warning.call(null,inst_28373);
var state_28399__$1 = state_28399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28399__$1,(30),inst_28374);
} else {
if((state_val_28400 === (1))){
var inst_28321 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28399__$1 = state_28399;
if(cljs.core.truth_(inst_28321)){
var statearr_28404_28445 = state_28399__$1;
(statearr_28404_28445[(1)] = (2));

} else {
var statearr_28405_28446 = state_28399__$1;
(statearr_28405_28446[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28400 === (24))){
var inst_28389 = (state_28399[(2)]);
var state_28399__$1 = state_28399;
var statearr_28406_28447 = state_28399__$1;
(statearr_28406_28447[(2)] = inst_28389);

(statearr_28406_28447[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28400 === (4))){
var inst_28397 = (state_28399[(2)]);
var state_28399__$1 = state_28399;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28399__$1,inst_28397);
} else {
if((state_val_28400 === (15))){
var inst_28349 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28350 = figwheel.client.format_messages.call(null,inst_28349);
var inst_28351 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28352 = figwheel.client.heads_up.display_error.call(null,inst_28350,inst_28351);
var state_28399__$1 = state_28399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28399__$1,(18),inst_28352);
} else {
if((state_val_28400 === (21))){
var inst_28391 = (state_28399[(2)]);
var state_28399__$1 = state_28399;
var statearr_28407_28448 = state_28399__$1;
(statearr_28407_28448[(2)] = inst_28391);

(statearr_28407_28448[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28400 === (31))){
var inst_28380 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28399__$1 = state_28399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28399__$1,(34),inst_28380);
} else {
if((state_val_28400 === (32))){
var state_28399__$1 = state_28399;
var statearr_28408_28449 = state_28399__$1;
(statearr_28408_28449[(2)] = null);

(statearr_28408_28449[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28400 === (33))){
var inst_28385 = (state_28399[(2)]);
var state_28399__$1 = state_28399;
var statearr_28409_28450 = state_28399__$1;
(statearr_28409_28450[(2)] = inst_28385);

(statearr_28409_28450[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28400 === (13))){
var inst_28339 = (state_28399[(2)]);
var inst_28340 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28341 = figwheel.client.format_messages.call(null,inst_28340);
var inst_28342 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28343 = figwheel.client.heads_up.display_error.call(null,inst_28341,inst_28342);
var state_28399__$1 = (function (){var statearr_28410 = state_28399;
(statearr_28410[(7)] = inst_28339);

return statearr_28410;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28399__$1,(14),inst_28343);
} else {
if((state_val_28400 === (22))){
var inst_28363 = figwheel.client.heads_up.clear.call(null);
var state_28399__$1 = state_28399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28399__$1,(25),inst_28363);
} else {
if((state_val_28400 === (29))){
var inst_28387 = (state_28399[(2)]);
var state_28399__$1 = state_28399;
var statearr_28411_28451 = state_28399__$1;
(statearr_28411_28451[(2)] = inst_28387);

(statearr_28411_28451[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28400 === (6))){
var inst_28329 = figwheel.client.heads_up.clear.call(null);
var state_28399__$1 = state_28399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28399__$1,(9),inst_28329);
} else {
if((state_val_28400 === (28))){
var inst_28378 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28399__$1 = state_28399;
if(cljs.core.truth_(inst_28378)){
var statearr_28412_28452 = state_28399__$1;
(statearr_28412_28452[(1)] = (31));

} else {
var statearr_28413_28453 = state_28399__$1;
(statearr_28413_28453[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28400 === (25))){
var inst_28365 = (state_28399[(2)]);
var inst_28366 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28367 = figwheel.client.heads_up.display_warning.call(null,inst_28366);
var state_28399__$1 = (function (){var statearr_28414 = state_28399;
(statearr_28414[(8)] = inst_28365);

return statearr_28414;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28399__$1,(26),inst_28367);
} else {
if((state_val_28400 === (34))){
var inst_28382 = (state_28399[(2)]);
var state_28399__$1 = state_28399;
var statearr_28415_28454 = state_28399__$1;
(statearr_28415_28454[(2)] = inst_28382);

(statearr_28415_28454[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28400 === (17))){
var inst_28393 = (state_28399[(2)]);
var state_28399__$1 = state_28399;
var statearr_28416_28455 = state_28399__$1;
(statearr_28416_28455[(2)] = inst_28393);

(statearr_28416_28455[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28400 === (3))){
var inst_28335 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28399__$1 = state_28399;
if(cljs.core.truth_(inst_28335)){
var statearr_28417_28456 = state_28399__$1;
(statearr_28417_28456[(1)] = (10));

} else {
var statearr_28418_28457 = state_28399__$1;
(statearr_28418_28457[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28400 === (12))){
var inst_28395 = (state_28399[(2)]);
var state_28399__$1 = state_28399;
var statearr_28419_28458 = state_28399__$1;
(statearr_28419_28458[(2)] = inst_28395);

(statearr_28419_28458[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28400 === (2))){
var inst_28323 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28399__$1 = state_28399;
if(cljs.core.truth_(inst_28323)){
var statearr_28420_28459 = state_28399__$1;
(statearr_28420_28459[(1)] = (5));

} else {
var statearr_28421_28460 = state_28399__$1;
(statearr_28421_28460[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28400 === (23))){
var inst_28371 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28399__$1 = state_28399;
if(cljs.core.truth_(inst_28371)){
var statearr_28422_28461 = state_28399__$1;
(statearr_28422_28461[(1)] = (27));

} else {
var statearr_28423_28462 = state_28399__$1;
(statearr_28423_28462[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28400 === (19))){
var inst_28358 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28359 = figwheel.client.heads_up.append_message.call(null,inst_28358);
var state_28399__$1 = state_28399;
var statearr_28424_28463 = state_28399__$1;
(statearr_28424_28463[(2)] = inst_28359);

(statearr_28424_28463[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28400 === (11))){
var inst_28347 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28399__$1 = state_28399;
if(cljs.core.truth_(inst_28347)){
var statearr_28425_28464 = state_28399__$1;
(statearr_28425_28464[(1)] = (15));

} else {
var statearr_28426_28465 = state_28399__$1;
(statearr_28426_28465[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28400 === (9))){
var inst_28331 = (state_28399[(2)]);
var state_28399__$1 = state_28399;
var statearr_28427_28466 = state_28399__$1;
(statearr_28427_28466[(2)] = inst_28331);

(statearr_28427_28466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28400 === (5))){
var inst_28325 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28399__$1 = state_28399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28399__$1,(8),inst_28325);
} else {
if((state_val_28400 === (14))){
var inst_28345 = (state_28399[(2)]);
var state_28399__$1 = state_28399;
var statearr_28428_28467 = state_28399__$1;
(statearr_28428_28467[(2)] = inst_28345);

(statearr_28428_28467[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28400 === (26))){
var inst_28369 = (state_28399[(2)]);
var state_28399__$1 = state_28399;
var statearr_28429_28468 = state_28399__$1;
(statearr_28429_28468[(2)] = inst_28369);

(statearr_28429_28468[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28400 === (16))){
var inst_28356 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28399__$1 = state_28399;
if(cljs.core.truth_(inst_28356)){
var statearr_28430_28469 = state_28399__$1;
(statearr_28430_28469[(1)] = (19));

} else {
var statearr_28431_28470 = state_28399__$1;
(statearr_28431_28470[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28400 === (30))){
var inst_28376 = (state_28399[(2)]);
var state_28399__$1 = state_28399;
var statearr_28432_28471 = state_28399__$1;
(statearr_28432_28471[(2)] = inst_28376);

(statearr_28432_28471[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28400 === (10))){
var inst_28337 = figwheel.client.heads_up.clear.call(null);
var state_28399__$1 = state_28399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28399__$1,(13),inst_28337);
} else {
if((state_val_28400 === (18))){
var inst_28354 = (state_28399[(2)]);
var state_28399__$1 = state_28399;
var statearr_28433_28472 = state_28399__$1;
(statearr_28433_28472[(2)] = inst_28354);

(statearr_28433_28472[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28400 === (8))){
var inst_28327 = (state_28399[(2)]);
var state_28399__$1 = state_28399;
var statearr_28434_28473 = state_28399__$1;
(statearr_28434_28473[(2)] = inst_28327);

(statearr_28434_28473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21347__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21285__auto__,c__21347__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21286__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21286__auto____0 = (function (){
var statearr_28438 = [null,null,null,null,null,null,null,null,null];
(statearr_28438[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21286__auto__);

(statearr_28438[(1)] = (1));

return statearr_28438;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21286__auto____1 = (function (state_28399){
while(true){
var ret_value__21287__auto__ = (function (){try{while(true){
var result__21288__auto__ = switch__21285__auto__.call(null,state_28399);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21288__auto__;
}
break;
}
}catch (e28439){if((e28439 instanceof Object)){
var ex__21289__auto__ = e28439;
var statearr_28440_28474 = state_28399;
(statearr_28440_28474[(5)] = ex__21289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28475 = state_28399;
state_28399 = G__28475;
continue;
} else {
return ret_value__21287__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21286__auto__ = function(state_28399){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21286__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21286__auto____1.call(this,state_28399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21286__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21286__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21286__auto__;
})()
;})(switch__21285__auto__,c__21347__auto__,msg_hist,msg_names,msg))
})();
var state__21349__auto__ = (function (){var statearr_28441 = f__21348__auto__.call(null);
(statearr_28441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21347__auto__);

return statearr_28441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21349__auto__);
});})(c__21347__auto__,msg_hist,msg_names,msg))
);

return c__21347__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21347__auto___28538 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21347__auto___28538,ch){
return (function (){
var f__21348__auto__ = (function (){var switch__21285__auto__ = ((function (c__21347__auto___28538,ch){
return (function (state_28521){
var state_val_28522 = (state_28521[(1)]);
if((state_val_28522 === (1))){
var state_28521__$1 = state_28521;
var statearr_28523_28539 = state_28521__$1;
(statearr_28523_28539[(2)] = null);

(statearr_28523_28539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28522 === (2))){
var state_28521__$1 = state_28521;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28521__$1,(4),ch);
} else {
if((state_val_28522 === (3))){
var inst_28519 = (state_28521[(2)]);
var state_28521__$1 = state_28521;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28521__$1,inst_28519);
} else {
if((state_val_28522 === (4))){
var inst_28509 = (state_28521[(7)]);
var inst_28509__$1 = (state_28521[(2)]);
var state_28521__$1 = (function (){var statearr_28524 = state_28521;
(statearr_28524[(7)] = inst_28509__$1);

return statearr_28524;
})();
if(cljs.core.truth_(inst_28509__$1)){
var statearr_28525_28540 = state_28521__$1;
(statearr_28525_28540[(1)] = (5));

} else {
var statearr_28526_28541 = state_28521__$1;
(statearr_28526_28541[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28522 === (5))){
var inst_28509 = (state_28521[(7)]);
var inst_28511 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_28509);
var state_28521__$1 = state_28521;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28521__$1,(8),inst_28511);
} else {
if((state_val_28522 === (6))){
var state_28521__$1 = state_28521;
var statearr_28527_28542 = state_28521__$1;
(statearr_28527_28542[(2)] = null);

(statearr_28527_28542[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28522 === (7))){
var inst_28517 = (state_28521[(2)]);
var state_28521__$1 = state_28521;
var statearr_28528_28543 = state_28521__$1;
(statearr_28528_28543[(2)] = inst_28517);

(statearr_28528_28543[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28522 === (8))){
var inst_28513 = (state_28521[(2)]);
var state_28521__$1 = (function (){var statearr_28529 = state_28521;
(statearr_28529[(8)] = inst_28513);

return statearr_28529;
})();
var statearr_28530_28544 = state_28521__$1;
(statearr_28530_28544[(2)] = null);

(statearr_28530_28544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__21347__auto___28538,ch))
;
return ((function (switch__21285__auto__,c__21347__auto___28538,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21286__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21286__auto____0 = (function (){
var statearr_28534 = [null,null,null,null,null,null,null,null,null];
(statearr_28534[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21286__auto__);

(statearr_28534[(1)] = (1));

return statearr_28534;
});
var figwheel$client$heads_up_plugin_$_state_machine__21286__auto____1 = (function (state_28521){
while(true){
var ret_value__21287__auto__ = (function (){try{while(true){
var result__21288__auto__ = switch__21285__auto__.call(null,state_28521);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21288__auto__;
}
break;
}
}catch (e28535){if((e28535 instanceof Object)){
var ex__21289__auto__ = e28535;
var statearr_28536_28545 = state_28521;
(statearr_28536_28545[(5)] = ex__21289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28521);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28546 = state_28521;
state_28521 = G__28546;
continue;
} else {
return ret_value__21287__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21286__auto__ = function(state_28521){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21286__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21286__auto____1.call(this,state_28521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21286__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21286__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21286__auto__;
})()
;})(switch__21285__auto__,c__21347__auto___28538,ch))
})();
var state__21349__auto__ = (function (){var statearr_28537 = f__21348__auto__.call(null);
(statearr_28537[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21347__auto___28538);

return statearr_28537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21349__auto__);
});})(c__21347__auto___28538,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__21347__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21347__auto__){
return (function (){
var f__21348__auto__ = (function (){var switch__21285__auto__ = ((function (c__21347__auto__){
return (function (state_28567){
var state_val_28568 = (state_28567[(1)]);
if((state_val_28568 === (1))){
var inst_28562 = cljs.core.async.timeout.call(null,(3000));
var state_28567__$1 = state_28567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28567__$1,(2),inst_28562);
} else {
if((state_val_28568 === (2))){
var inst_28564 = (state_28567[(2)]);
var inst_28565 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_28567__$1 = (function (){var statearr_28569 = state_28567;
(statearr_28569[(7)] = inst_28564);

return statearr_28569;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28567__$1,inst_28565);
} else {
return null;
}
}
});})(c__21347__auto__))
;
return ((function (switch__21285__auto__,c__21347__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21286__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21286__auto____0 = (function (){
var statearr_28573 = [null,null,null,null,null,null,null,null];
(statearr_28573[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21286__auto__);

(statearr_28573[(1)] = (1));

return statearr_28573;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21286__auto____1 = (function (state_28567){
while(true){
var ret_value__21287__auto__ = (function (){try{while(true){
var result__21288__auto__ = switch__21285__auto__.call(null,state_28567);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21288__auto__;
}
break;
}
}catch (e28574){if((e28574 instanceof Object)){
var ex__21289__auto__ = e28574;
var statearr_28575_28577 = state_28567;
(statearr_28575_28577[(5)] = ex__21289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28567);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28574;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28578 = state_28567;
state_28567 = G__28578;
continue;
} else {
return ret_value__21287__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21286__auto__ = function(state_28567){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21286__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21286__auto____1.call(this,state_28567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21286__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21286__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21286__auto__;
})()
;})(switch__21285__auto__,c__21347__auto__))
})();
var state__21349__auto__ = (function (){var statearr_28576 = f__21348__auto__.call(null);
(statearr_28576[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21347__auto__);

return statearr_28576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21349__auto__);
});})(c__21347__auto__))
);

return c__21347__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__28579){
var map__28585 = p__28579;
var map__28585__$1 = ((cljs.core.seq_QMARK_.call(null,map__28585))?cljs.core.apply.call(null,cljs.core.hash_map,map__28585):map__28585);
var ed = map__28585__$1;
var formatted_exception = cljs.core.get.call(null,map__28585__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__28585__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__28585__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__28586_28590 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__28587_28591 = null;
var count__28588_28592 = (0);
var i__28589_28593 = (0);
while(true){
if((i__28589_28593 < count__28588_28592)){
var msg_28594 = cljs.core._nth.call(null,chunk__28587_28591,i__28589_28593);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28594);

var G__28595 = seq__28586_28590;
var G__28596 = chunk__28587_28591;
var G__28597 = count__28588_28592;
var G__28598 = (i__28589_28593 + (1));
seq__28586_28590 = G__28595;
chunk__28587_28591 = G__28596;
count__28588_28592 = G__28597;
i__28589_28593 = G__28598;
continue;
} else {
var temp__4422__auto___28599 = cljs.core.seq.call(null,seq__28586_28590);
if(temp__4422__auto___28599){
var seq__28586_28600__$1 = temp__4422__auto___28599;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28586_28600__$1)){
var c__18905__auto___28601 = cljs.core.chunk_first.call(null,seq__28586_28600__$1);
var G__28602 = cljs.core.chunk_rest.call(null,seq__28586_28600__$1);
var G__28603 = c__18905__auto___28601;
var G__28604 = cljs.core.count.call(null,c__18905__auto___28601);
var G__28605 = (0);
seq__28586_28590 = G__28602;
chunk__28587_28591 = G__28603;
count__28588_28592 = G__28604;
i__28589_28593 = G__28605;
continue;
} else {
var msg_28606 = cljs.core.first.call(null,seq__28586_28600__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28606);

var G__28607 = cljs.core.next.call(null,seq__28586_28600__$1);
var G__28608 = null;
var G__28609 = (0);
var G__28610 = (0);
seq__28586_28590 = G__28607;
chunk__28587_28591 = G__28608;
count__28588_28592 = G__28609;
i__28589_28593 = G__28610;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__28611){
var map__28613 = p__28611;
var map__28613__$1 = ((cljs.core.seq_QMARK_.call(null,map__28613))?cljs.core.apply.call(null,cljs.core.hash_map,map__28613):map__28613);
var w = map__28613__$1;
var message = cljs.core.get.call(null,map__28613__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18108__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18108__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18108__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__28620 = cljs.core.seq.call(null,plugins);
var chunk__28621 = null;
var count__28622 = (0);
var i__28623 = (0);
while(true){
if((i__28623 < count__28622)){
var vec__28624 = cljs.core._nth.call(null,chunk__28621,i__28623);
var k = cljs.core.nth.call(null,vec__28624,(0),null);
var plugin = cljs.core.nth.call(null,vec__28624,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28626 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28620,chunk__28621,count__28622,i__28623,pl_28626,vec__28624,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_28626.call(null,msg_hist);
});})(seq__28620,chunk__28621,count__28622,i__28623,pl_28626,vec__28624,k,plugin))
);
} else {
}

var G__28627 = seq__28620;
var G__28628 = chunk__28621;
var G__28629 = count__28622;
var G__28630 = (i__28623 + (1));
seq__28620 = G__28627;
chunk__28621 = G__28628;
count__28622 = G__28629;
i__28623 = G__28630;
continue;
} else {
var temp__4422__auto__ = cljs.core.seq.call(null,seq__28620);
if(temp__4422__auto__){
var seq__28620__$1 = temp__4422__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28620__$1)){
var c__18905__auto__ = cljs.core.chunk_first.call(null,seq__28620__$1);
var G__28631 = cljs.core.chunk_rest.call(null,seq__28620__$1);
var G__28632 = c__18905__auto__;
var G__28633 = cljs.core.count.call(null,c__18905__auto__);
var G__28634 = (0);
seq__28620 = G__28631;
chunk__28621 = G__28632;
count__28622 = G__28633;
i__28623 = G__28634;
continue;
} else {
var vec__28625 = cljs.core.first.call(null,seq__28620__$1);
var k = cljs.core.nth.call(null,vec__28625,(0),null);
var plugin = cljs.core.nth.call(null,vec__28625,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28635 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28620,chunk__28621,count__28622,i__28623,pl_28635,vec__28625,k,plugin,seq__28620__$1,temp__4422__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_28635.call(null,msg_hist);
});})(seq__28620,chunk__28621,count__28622,i__28623,pl_28635,vec__28625,k,plugin,seq__28620__$1,temp__4422__auto__))
);
} else {
}

var G__28636 = cljs.core.next.call(null,seq__28620__$1);
var G__28637 = null;
var G__28638 = (0);
var G__28639 = (0);
seq__28620 = G__28636;
chunk__28621 = G__28637;
count__28622 = G__28638;
i__28623 = G__28639;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__28641 = arguments.length;
switch (G__28641) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__19160__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19160__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__28644){
var map__28645 = p__28644;
var map__28645__$1 = ((cljs.core.seq_QMARK_.call(null,map__28645))?cljs.core.apply.call(null,cljs.core.hash_map,map__28645):map__28645);
var opts = map__28645__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq28643){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28643));
});

//# sourceMappingURL=client.js.map