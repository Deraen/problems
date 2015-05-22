// Compiled by ClojureScript 0.0-3269 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__29063_SHARP_,p2__29064_SHARP_){
var and__18108__auto__ = p1__29063_SHARP_;
if(cljs.core.truth_(and__18108__auto__)){
return p2__29064_SHARP_;
} else {
return and__18108__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18120__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18120__auto__){
return or__18120__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__18120__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__18120__auto__){
return or__18120__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__18120__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__18120__auto__)){
return or__18120__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__19015__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19016__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19017__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19018__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19019__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19019__auto__,method_table__19015__auto__,prefer_table__19016__auto__,method_cache__19017__auto__,cached_hierarchy__19018__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__29065){
var map__29066 = p__29065;
var map__29066__$1 = ((cljs.core.seq_QMARK_.call(null,map__29066))?cljs.core.apply.call(null,cljs.core.hash_map,map__29066):map__29066);
var file = cljs.core.get.call(null,map__29066__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__29067){
var map__29068 = p__29067;
var map__29068__$1 = ((cljs.core.seq_QMARK_.call(null,map__29068))?cljs.core.apply.call(null,cljs.core.hash_map,map__29068):map__29068);
var namespace = cljs.core.get.call(null,map__29068__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__19015__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19016__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19017__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19018__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19019__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19019__auto__,method_table__19015__auto__,prefer_table__19016__auto__,method_cache__19017__auto__,cached_hierarchy__19018__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e29069){if((e29069 instanceof Error)){
var e = e29069;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29069;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__29071 = arguments.length;
switch (G__29071) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29073,callback){
var map__29075 = p__29073;
var map__29075__$1 = ((cljs.core.seq_QMARK_.call(null,map__29075))?cljs.core.apply.call(null,cljs.core.hash_map,map__29075):map__29075);
var file_msg = map__29075__$1;
var request_url = cljs.core.get.call(null,map__29075__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__29075,map__29075__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29075,map__29075__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29076){
var map__29078 = p__29076;
var map__29078__$1 = ((cljs.core.seq_QMARK_.call(null,map__29078))?cljs.core.apply.call(null,cljs.core.hash_map,map__29078):map__29078);
var file_msg = map__29078__$1;
var namespace = cljs.core.get.call(null,map__29078__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__29078__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

var meta_data__$1 = (function (){var or__18120__auto__ = meta_data;
if(cljs.core.truth_(or__18120__auto__)){
return or__18120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__18108__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__18108__auto__){
var or__18120__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18120__auto__)){
return or__18120__auto__;
} else {
var or__18120__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18120__auto____$1)){
return or__18120__auto____$1;
} else {
var and__18108__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__18108__auto____$1){
var or__18120__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__18120__auto____$2){
return or__18120__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__18108__auto____$1;
}
}
}
} else {
return and__18108__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29079,callback){
var map__29081 = p__29079;
var map__29081__$1 = ((cljs.core.seq_QMARK_.call(null,map__29081))?cljs.core.apply.call(null,cljs.core.hash_map,map__29081):map__29081);
var file_msg = map__29081__$1;
var request_url = cljs.core.get.call(null,map__29081__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__29081__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__21347__auto___29168 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21347__auto___29168,out){
return (function (){
var f__21348__auto__ = (function (){var switch__21285__auto__ = ((function (c__21347__auto___29168,out){
return (function (state_29150){
var state_val_29151 = (state_29150[(1)]);
if((state_val_29151 === (1))){
var inst_29128 = cljs.core.nth.call(null,files,(0),null);
var inst_29129 = cljs.core.nthnext.call(null,files,(1));
var inst_29130 = files;
var state_29150__$1 = (function (){var statearr_29152 = state_29150;
(statearr_29152[(7)] = inst_29130);

(statearr_29152[(8)] = inst_29128);

(statearr_29152[(9)] = inst_29129);

return statearr_29152;
})();
var statearr_29153_29169 = state_29150__$1;
(statearr_29153_29169[(2)] = null);

(statearr_29153_29169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29151 === (2))){
var inst_29130 = (state_29150[(7)]);
var inst_29133 = (state_29150[(10)]);
var inst_29133__$1 = cljs.core.nth.call(null,inst_29130,(0),null);
var inst_29134 = cljs.core.nthnext.call(null,inst_29130,(1));
var inst_29135 = (inst_29133__$1 == null);
var inst_29136 = cljs.core.not.call(null,inst_29135);
var state_29150__$1 = (function (){var statearr_29154 = state_29150;
(statearr_29154[(10)] = inst_29133__$1);

(statearr_29154[(11)] = inst_29134);

return statearr_29154;
})();
if(inst_29136){
var statearr_29155_29170 = state_29150__$1;
(statearr_29155_29170[(1)] = (4));

} else {
var statearr_29156_29171 = state_29150__$1;
(statearr_29156_29171[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29151 === (3))){
var inst_29148 = (state_29150[(2)]);
var state_29150__$1 = state_29150;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29150__$1,inst_29148);
} else {
if((state_val_29151 === (4))){
var inst_29133 = (state_29150[(10)]);
var inst_29138 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29133);
var state_29150__$1 = state_29150;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29150__$1,(7),inst_29138);
} else {
if((state_val_29151 === (5))){
var inst_29144 = cljs.core.async.close_BANG_.call(null,out);
var state_29150__$1 = state_29150;
var statearr_29157_29172 = state_29150__$1;
(statearr_29157_29172[(2)] = inst_29144);

(statearr_29157_29172[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29151 === (6))){
var inst_29146 = (state_29150[(2)]);
var state_29150__$1 = state_29150;
var statearr_29158_29173 = state_29150__$1;
(statearr_29158_29173[(2)] = inst_29146);

(statearr_29158_29173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29151 === (7))){
var inst_29134 = (state_29150[(11)]);
var inst_29140 = (state_29150[(2)]);
var inst_29141 = cljs.core.async.put_BANG_.call(null,out,inst_29140);
var inst_29130 = inst_29134;
var state_29150__$1 = (function (){var statearr_29159 = state_29150;
(statearr_29159[(12)] = inst_29141);

(statearr_29159[(7)] = inst_29130);

return statearr_29159;
})();
var statearr_29160_29174 = state_29150__$1;
(statearr_29160_29174[(2)] = null);

(statearr_29160_29174[(1)] = (2));


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
});})(c__21347__auto___29168,out))
;
return ((function (switch__21285__auto__,c__21347__auto___29168,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21286__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21286__auto____0 = (function (){
var statearr_29164 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29164[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21286__auto__);

(statearr_29164[(1)] = (1));

return statearr_29164;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21286__auto____1 = (function (state_29150){
while(true){
var ret_value__21287__auto__ = (function (){try{while(true){
var result__21288__auto__ = switch__21285__auto__.call(null,state_29150);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21288__auto__;
}
break;
}
}catch (e29165){if((e29165 instanceof Object)){
var ex__21289__auto__ = e29165;
var statearr_29166_29175 = state_29150;
(statearr_29166_29175[(5)] = ex__21289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29165;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29176 = state_29150;
state_29150 = G__29176;
continue;
} else {
return ret_value__21287__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21286__auto__ = function(state_29150){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21286__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21286__auto____1.call(this,state_29150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21286__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21286__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21286__auto__;
})()
;})(switch__21285__auto__,c__21347__auto___29168,out))
})();
var state__21349__auto__ = (function (){var statearr_29167 = f__21348__auto__.call(null);
(statearr_29167[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21347__auto___29168);

return statearr_29167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21349__auto__);
});})(c__21347__auto___29168,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__29177,p__29178){
var map__29181 = p__29177;
var map__29181__$1 = ((cljs.core.seq_QMARK_.call(null,map__29181))?cljs.core.apply.call(null,cljs.core.hash_map,map__29181):map__29181);
var opts = map__29181__$1;
var url_rewriter = cljs.core.get.call(null,map__29181__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__29182 = p__29178;
var map__29182__$1 = ((cljs.core.seq_QMARK_.call(null,map__29182))?cljs.core.apply.call(null,cljs.core.hash_map,map__29182):map__29182);
var file_msg = map__29182__$1;
var file = cljs.core.get.call(null,map__29182__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29183){
var map__29186 = p__29183;
var map__29186__$1 = ((cljs.core.seq_QMARK_.call(null,map__29186))?cljs.core.apply.call(null,cljs.core.hash_map,map__29186):map__29186);
var eval_body__$1 = cljs.core.get.call(null,map__29186__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__29186__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18108__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18108__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18108__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e29187){var e = e29187;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29192,p__29193){
var map__29395 = p__29192;
var map__29395__$1 = ((cljs.core.seq_QMARK_.call(null,map__29395))?cljs.core.apply.call(null,cljs.core.hash_map,map__29395):map__29395);
var opts = map__29395__$1;
var before_jsload = cljs.core.get.call(null,map__29395__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29395__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__29395__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__29396 = p__29193;
var map__29396__$1 = ((cljs.core.seq_QMARK_.call(null,map__29396))?cljs.core.apply.call(null,cljs.core.hash_map,map__29396):map__29396);
var msg = map__29396__$1;
var files = cljs.core.get.call(null,map__29396__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__21347__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21347__auto__,map__29395,map__29395__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29396,map__29396__$1,msg,files){
return (function (){
var f__21348__auto__ = (function (){var switch__21285__auto__ = ((function (c__21347__auto__,map__29395,map__29395__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29396,map__29396__$1,msg,files){
return (function (state_29521){
var state_val_29522 = (state_29521[(1)]);
if((state_val_29522 === (7))){
var inst_29410 = (state_29521[(7)]);
var inst_29408 = (state_29521[(8)]);
var inst_29411 = (state_29521[(9)]);
var inst_29409 = (state_29521[(10)]);
var inst_29416 = cljs.core._nth.call(null,inst_29409,inst_29411);
var inst_29417 = figwheel.client.file_reloading.eval_body.call(null,inst_29416);
var inst_29418 = (inst_29411 + (1));
var tmp29523 = inst_29410;
var tmp29524 = inst_29408;
var tmp29525 = inst_29409;
var inst_29408__$1 = tmp29524;
var inst_29409__$1 = tmp29525;
var inst_29410__$1 = tmp29523;
var inst_29411__$1 = inst_29418;
var state_29521__$1 = (function (){var statearr_29526 = state_29521;
(statearr_29526[(7)] = inst_29410__$1);

(statearr_29526[(8)] = inst_29408__$1);

(statearr_29526[(9)] = inst_29411__$1);

(statearr_29526[(11)] = inst_29417);

(statearr_29526[(10)] = inst_29409__$1);

return statearr_29526;
})();
var statearr_29527_29596 = state_29521__$1;
(statearr_29527_29596[(2)] = null);

(statearr_29527_29596[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29522 === (20))){
var inst_29454 = (state_29521[(12)]);
var inst_29453 = (state_29521[(13)]);
var inst_29457 = (state_29521[(14)]);
var inst_29460 = (state_29521[(15)]);
var inst_29458 = (state_29521[(16)]);
var inst_29463 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29465 = (function (){var all_files = inst_29453;
var files_SINGLEQUOTE_ = inst_29454;
var res_SINGLEQUOTE_ = inst_29457;
var res = inst_29458;
var files_not_loaded = inst_29460;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_29454,inst_29453,inst_29457,inst_29460,inst_29458,inst_29463,state_val_29522,c__21347__auto__,map__29395,map__29395__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29396,map__29396__$1,msg,files){
return (function (p__29464){
var map__29528 = p__29464;
var map__29528__$1 = ((cljs.core.seq_QMARK_.call(null,map__29528))?cljs.core.apply.call(null,cljs.core.hash_map,map__29528):map__29528);
var namespace = cljs.core.get.call(null,map__29528__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29528__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_29454,inst_29453,inst_29457,inst_29460,inst_29458,inst_29463,state_val_29522,c__21347__auto__,map__29395,map__29395__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29396,map__29396__$1,msg,files))
})();
var inst_29466 = cljs.core.map.call(null,inst_29465,inst_29458);
var inst_29467 = cljs.core.pr_str.call(null,inst_29466);
var inst_29468 = figwheel.client.utils.log.call(null,inst_29467);
var inst_29469 = (function (){var all_files = inst_29453;
var files_SINGLEQUOTE_ = inst_29454;
var res_SINGLEQUOTE_ = inst_29457;
var res = inst_29458;
var files_not_loaded = inst_29460;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_29454,inst_29453,inst_29457,inst_29460,inst_29458,inst_29463,inst_29465,inst_29466,inst_29467,inst_29468,state_val_29522,c__21347__auto__,map__29395,map__29395__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29396,map__29396__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_29454,inst_29453,inst_29457,inst_29460,inst_29458,inst_29463,inst_29465,inst_29466,inst_29467,inst_29468,state_val_29522,c__21347__auto__,map__29395,map__29395__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29396,map__29396__$1,msg,files))
})();
var inst_29470 = setTimeout(inst_29469,(10));
var state_29521__$1 = (function (){var statearr_29529 = state_29521;
(statearr_29529[(17)] = inst_29468);

(statearr_29529[(18)] = inst_29463);

return statearr_29529;
})();
var statearr_29530_29597 = state_29521__$1;
(statearr_29530_29597[(2)] = inst_29470);

(statearr_29530_29597[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29522 === (27))){
var inst_29480 = (state_29521[(19)]);
var state_29521__$1 = state_29521;
var statearr_29531_29598 = state_29521__$1;
(statearr_29531_29598[(2)] = inst_29480);

(statearr_29531_29598[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29522 === (1))){
var inst_29400 = (state_29521[(20)]);
var inst_29397 = before_jsload.call(null,files);
var inst_29398 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29399 = (function (){return ((function (inst_29400,inst_29397,inst_29398,state_val_29522,c__21347__auto__,map__29395,map__29395__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29396,map__29396__$1,msg,files){
return (function (p1__29188_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29188_SHARP_);
});
;})(inst_29400,inst_29397,inst_29398,state_val_29522,c__21347__auto__,map__29395,map__29395__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29396,map__29396__$1,msg,files))
})();
var inst_29400__$1 = cljs.core.filter.call(null,inst_29399,files);
var inst_29401 = cljs.core.not_empty.call(null,inst_29400__$1);
var state_29521__$1 = (function (){var statearr_29532 = state_29521;
(statearr_29532[(21)] = inst_29397);

(statearr_29532[(20)] = inst_29400__$1);

(statearr_29532[(22)] = inst_29398);

return statearr_29532;
})();
if(cljs.core.truth_(inst_29401)){
var statearr_29533_29599 = state_29521__$1;
(statearr_29533_29599[(1)] = (2));

} else {
var statearr_29534_29600 = state_29521__$1;
(statearr_29534_29600[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29522 === (24))){
var state_29521__$1 = state_29521;
var statearr_29535_29601 = state_29521__$1;
(statearr_29535_29601[(2)] = null);

(statearr_29535_29601[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29522 === (4))){
var inst_29445 = (state_29521[(2)]);
var inst_29446 = (function (){return ((function (inst_29445,state_val_29522,c__21347__auto__,map__29395,map__29395__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29396,map__29396__$1,msg,files){
return (function (p1__29189_SHARP_){
var and__18108__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29189_SHARP_);
if(cljs.core.truth_(and__18108__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29189_SHARP_));
} else {
return and__18108__auto__;
}
});
;})(inst_29445,state_val_29522,c__21347__auto__,map__29395,map__29395__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29396,map__29396__$1,msg,files))
})();
var inst_29447 = cljs.core.filter.call(null,inst_29446,files);
var state_29521__$1 = (function (){var statearr_29536 = state_29521;
(statearr_29536[(23)] = inst_29445);

(statearr_29536[(24)] = inst_29447);

return statearr_29536;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_29537_29602 = state_29521__$1;
(statearr_29537_29602[(1)] = (16));

} else {
var statearr_29538_29603 = state_29521__$1;
(statearr_29538_29603[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29522 === (15))){
var inst_29435 = (state_29521[(2)]);
var state_29521__$1 = state_29521;
var statearr_29539_29604 = state_29521__$1;
(statearr_29539_29604[(2)] = inst_29435);

(statearr_29539_29604[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29522 === (21))){
var state_29521__$1 = state_29521;
var statearr_29540_29605 = state_29521__$1;
(statearr_29540_29605[(2)] = null);

(statearr_29540_29605[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29522 === (31))){
var inst_29488 = (state_29521[(25)]);
var inst_29498 = (state_29521[(2)]);
var inst_29499 = cljs.core.not_empty.call(null,inst_29488);
var state_29521__$1 = (function (){var statearr_29541 = state_29521;
(statearr_29541[(26)] = inst_29498);

return statearr_29541;
})();
if(cljs.core.truth_(inst_29499)){
var statearr_29542_29606 = state_29521__$1;
(statearr_29542_29606[(1)] = (32));

} else {
var statearr_29543_29607 = state_29521__$1;
(statearr_29543_29607[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29522 === (32))){
var inst_29488 = (state_29521[(25)]);
var inst_29501 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29488);
var inst_29502 = cljs.core.pr_str.call(null,inst_29501);
var inst_29503 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_29502)].join('');
var inst_29504 = figwheel.client.utils.log.call(null,inst_29503);
var state_29521__$1 = state_29521;
var statearr_29544_29608 = state_29521__$1;
(statearr_29544_29608[(2)] = inst_29504);

(statearr_29544_29608[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29522 === (33))){
var state_29521__$1 = state_29521;
var statearr_29545_29609 = state_29521__$1;
(statearr_29545_29609[(2)] = null);

(statearr_29545_29609[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29522 === (13))){
var inst_29421 = (state_29521[(27)]);
var inst_29425 = cljs.core.chunk_first.call(null,inst_29421);
var inst_29426 = cljs.core.chunk_rest.call(null,inst_29421);
var inst_29427 = cljs.core.count.call(null,inst_29425);
var inst_29408 = inst_29426;
var inst_29409 = inst_29425;
var inst_29410 = inst_29427;
var inst_29411 = (0);
var state_29521__$1 = (function (){var statearr_29546 = state_29521;
(statearr_29546[(7)] = inst_29410);

(statearr_29546[(8)] = inst_29408);

(statearr_29546[(9)] = inst_29411);

(statearr_29546[(10)] = inst_29409);

return statearr_29546;
})();
var statearr_29547_29610 = state_29521__$1;
(statearr_29547_29610[(2)] = null);

(statearr_29547_29610[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29522 === (22))){
var inst_29460 = (state_29521[(15)]);
var inst_29473 = (state_29521[(2)]);
var inst_29474 = cljs.core.not_empty.call(null,inst_29460);
var state_29521__$1 = (function (){var statearr_29548 = state_29521;
(statearr_29548[(28)] = inst_29473);

return statearr_29548;
})();
if(cljs.core.truth_(inst_29474)){
var statearr_29549_29611 = state_29521__$1;
(statearr_29549_29611[(1)] = (23));

} else {
var statearr_29550_29612 = state_29521__$1;
(statearr_29550_29612[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29522 === (36))){
var state_29521__$1 = state_29521;
var statearr_29551_29613 = state_29521__$1;
(statearr_29551_29613[(2)] = null);

(statearr_29551_29613[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29522 === (29))){
var inst_29487 = (state_29521[(29)]);
var inst_29492 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29487);
var inst_29493 = cljs.core.pr_str.call(null,inst_29492);
var inst_29494 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_29493)].join('');
var inst_29495 = figwheel.client.utils.log.call(null,inst_29494);
var state_29521__$1 = state_29521;
var statearr_29552_29614 = state_29521__$1;
(statearr_29552_29614[(2)] = inst_29495);

(statearr_29552_29614[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29522 === (6))){
var inst_29442 = (state_29521[(2)]);
var state_29521__$1 = state_29521;
var statearr_29553_29615 = state_29521__$1;
(statearr_29553_29615[(2)] = inst_29442);

(statearr_29553_29615[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29522 === (28))){
var inst_29487 = (state_29521[(29)]);
var inst_29486 = (state_29521[(2)]);
var inst_29487__$1 = cljs.core.get.call(null,inst_29486,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29488 = cljs.core.get.call(null,inst_29486,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_29489 = cljs.core.get.call(null,inst_29486,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29490 = cljs.core.not_empty.call(null,inst_29487__$1);
var state_29521__$1 = (function (){var statearr_29554 = state_29521;
(statearr_29554[(29)] = inst_29487__$1);

(statearr_29554[(25)] = inst_29488);

(statearr_29554[(30)] = inst_29489);

return statearr_29554;
})();
if(cljs.core.truth_(inst_29490)){
var statearr_29555_29616 = state_29521__$1;
(statearr_29555_29616[(1)] = (29));

} else {
var statearr_29556_29617 = state_29521__$1;
(statearr_29556_29617[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29522 === (25))){
var inst_29519 = (state_29521[(2)]);
var state_29521__$1 = state_29521;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29521__$1,inst_29519);
} else {
if((state_val_29522 === (34))){
var inst_29489 = (state_29521[(30)]);
var inst_29507 = (state_29521[(2)]);
var inst_29508 = cljs.core.not_empty.call(null,inst_29489);
var state_29521__$1 = (function (){var statearr_29557 = state_29521;
(statearr_29557[(31)] = inst_29507);

return statearr_29557;
})();
if(cljs.core.truth_(inst_29508)){
var statearr_29558_29618 = state_29521__$1;
(statearr_29558_29618[(1)] = (35));

} else {
var statearr_29559_29619 = state_29521__$1;
(statearr_29559_29619[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29522 === (17))){
var inst_29447 = (state_29521[(24)]);
var state_29521__$1 = state_29521;
var statearr_29560_29620 = state_29521__$1;
(statearr_29560_29620[(2)] = inst_29447);

(statearr_29560_29620[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29522 === (3))){
var state_29521__$1 = state_29521;
var statearr_29561_29621 = state_29521__$1;
(statearr_29561_29621[(2)] = null);

(statearr_29561_29621[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29522 === (12))){
var inst_29438 = (state_29521[(2)]);
var state_29521__$1 = state_29521;
var statearr_29562_29622 = state_29521__$1;
(statearr_29562_29622[(2)] = inst_29438);

(statearr_29562_29622[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29522 === (2))){
var inst_29400 = (state_29521[(20)]);
var inst_29407 = cljs.core.seq.call(null,inst_29400);
var inst_29408 = inst_29407;
var inst_29409 = null;
var inst_29410 = (0);
var inst_29411 = (0);
var state_29521__$1 = (function (){var statearr_29563 = state_29521;
(statearr_29563[(7)] = inst_29410);

(statearr_29563[(8)] = inst_29408);

(statearr_29563[(9)] = inst_29411);

(statearr_29563[(10)] = inst_29409);

return statearr_29563;
})();
var statearr_29564_29623 = state_29521__$1;
(statearr_29564_29623[(2)] = null);

(statearr_29564_29623[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29522 === (23))){
var inst_29454 = (state_29521[(12)]);
var inst_29453 = (state_29521[(13)]);
var inst_29457 = (state_29521[(14)]);
var inst_29460 = (state_29521[(15)]);
var inst_29480 = (state_29521[(19)]);
var inst_29458 = (state_29521[(16)]);
var inst_29476 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29479 = (function (){var all_files = inst_29453;
var files_SINGLEQUOTE_ = inst_29454;
var res_SINGLEQUOTE_ = inst_29457;
var res = inst_29458;
var files_not_loaded = inst_29460;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_29454,inst_29453,inst_29457,inst_29460,inst_29480,inst_29458,inst_29476,state_val_29522,c__21347__auto__,map__29395,map__29395__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29396,map__29396__$1,msg,files){
return (function (p__29478){
var map__29565 = p__29478;
var map__29565__$1 = ((cljs.core.seq_QMARK_.call(null,map__29565))?cljs.core.apply.call(null,cljs.core.hash_map,map__29565):map__29565);
var meta_data = cljs.core.get.call(null,map__29565__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_29454,inst_29453,inst_29457,inst_29460,inst_29480,inst_29458,inst_29476,state_val_29522,c__21347__auto__,map__29395,map__29395__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29396,map__29396__$1,msg,files))
})();
var inst_29480__$1 = cljs.core.group_by.call(null,inst_29479,inst_29460);
var inst_29481 = cljs.core.seq_QMARK_.call(null,inst_29480__$1);
var state_29521__$1 = (function (){var statearr_29566 = state_29521;
(statearr_29566[(32)] = inst_29476);

(statearr_29566[(19)] = inst_29480__$1);

return statearr_29566;
})();
if(inst_29481){
var statearr_29567_29624 = state_29521__$1;
(statearr_29567_29624[(1)] = (26));

} else {
var statearr_29568_29625 = state_29521__$1;
(statearr_29568_29625[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29522 === (35))){
var inst_29489 = (state_29521[(30)]);
var inst_29510 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29489);
var inst_29511 = cljs.core.pr_str.call(null,inst_29510);
var inst_29512 = [cljs.core.str("not required: "),cljs.core.str(inst_29511)].join('');
var inst_29513 = figwheel.client.utils.log.call(null,inst_29512);
var state_29521__$1 = state_29521;
var statearr_29569_29626 = state_29521__$1;
(statearr_29569_29626[(2)] = inst_29513);

(statearr_29569_29626[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29522 === (19))){
var inst_29454 = (state_29521[(12)]);
var inst_29453 = (state_29521[(13)]);
var inst_29457 = (state_29521[(14)]);
var inst_29458 = (state_29521[(16)]);
var inst_29457__$1 = (state_29521[(2)]);
var inst_29458__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29457__$1);
var inst_29459 = (function (){var all_files = inst_29453;
var files_SINGLEQUOTE_ = inst_29454;
var res_SINGLEQUOTE_ = inst_29457__$1;
var res = inst_29458__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_29454,inst_29453,inst_29457,inst_29458,inst_29457__$1,inst_29458__$1,state_val_29522,c__21347__auto__,map__29395,map__29395__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29396,map__29396__$1,msg,files){
return (function (p1__29191_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29191_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_29454,inst_29453,inst_29457,inst_29458,inst_29457__$1,inst_29458__$1,state_val_29522,c__21347__auto__,map__29395,map__29395__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29396,map__29396__$1,msg,files))
})();
var inst_29460 = cljs.core.filter.call(null,inst_29459,inst_29457__$1);
var inst_29461 = cljs.core.not_empty.call(null,inst_29458__$1);
var state_29521__$1 = (function (){var statearr_29570 = state_29521;
(statearr_29570[(14)] = inst_29457__$1);

(statearr_29570[(15)] = inst_29460);

(statearr_29570[(16)] = inst_29458__$1);

return statearr_29570;
})();
if(cljs.core.truth_(inst_29461)){
var statearr_29571_29627 = state_29521__$1;
(statearr_29571_29627[(1)] = (20));

} else {
var statearr_29572_29628 = state_29521__$1;
(statearr_29572_29628[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29522 === (11))){
var state_29521__$1 = state_29521;
var statearr_29573_29629 = state_29521__$1;
(statearr_29573_29629[(2)] = null);

(statearr_29573_29629[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29522 === (9))){
var inst_29440 = (state_29521[(2)]);
var state_29521__$1 = state_29521;
var statearr_29574_29630 = state_29521__$1;
(statearr_29574_29630[(2)] = inst_29440);

(statearr_29574_29630[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29522 === (5))){
var inst_29410 = (state_29521[(7)]);
var inst_29411 = (state_29521[(9)]);
var inst_29413 = (inst_29411 < inst_29410);
var inst_29414 = inst_29413;
var state_29521__$1 = state_29521;
if(cljs.core.truth_(inst_29414)){
var statearr_29575_29631 = state_29521__$1;
(statearr_29575_29631[(1)] = (7));

} else {
var statearr_29576_29632 = state_29521__$1;
(statearr_29576_29632[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29522 === (14))){
var inst_29421 = (state_29521[(27)]);
var inst_29430 = cljs.core.first.call(null,inst_29421);
var inst_29431 = figwheel.client.file_reloading.eval_body.call(null,inst_29430);
var inst_29432 = cljs.core.next.call(null,inst_29421);
var inst_29408 = inst_29432;
var inst_29409 = null;
var inst_29410 = (0);
var inst_29411 = (0);
var state_29521__$1 = (function (){var statearr_29577 = state_29521;
(statearr_29577[(7)] = inst_29410);

(statearr_29577[(8)] = inst_29408);

(statearr_29577[(9)] = inst_29411);

(statearr_29577[(33)] = inst_29431);

(statearr_29577[(10)] = inst_29409);

return statearr_29577;
})();
var statearr_29578_29633 = state_29521__$1;
(statearr_29578_29633[(2)] = null);

(statearr_29578_29633[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29522 === (26))){
var inst_29480 = (state_29521[(19)]);
var inst_29483 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29480);
var state_29521__$1 = state_29521;
var statearr_29579_29634 = state_29521__$1;
(statearr_29579_29634[(2)] = inst_29483);

(statearr_29579_29634[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29522 === (16))){
var inst_29447 = (state_29521[(24)]);
var inst_29449 = (function (){var all_files = inst_29447;
return ((function (all_files,inst_29447,state_val_29522,c__21347__auto__,map__29395,map__29395__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29396,map__29396__$1,msg,files){
return (function (p1__29190_SHARP_){
return cljs.core.update_in.call(null,p1__29190_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_29447,state_val_29522,c__21347__auto__,map__29395,map__29395__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29396,map__29396__$1,msg,files))
})();
var inst_29450 = cljs.core.map.call(null,inst_29449,inst_29447);
var state_29521__$1 = state_29521;
var statearr_29580_29635 = state_29521__$1;
(statearr_29580_29635[(2)] = inst_29450);

(statearr_29580_29635[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29522 === (30))){
var state_29521__$1 = state_29521;
var statearr_29581_29636 = state_29521__$1;
(statearr_29581_29636[(2)] = null);

(statearr_29581_29636[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29522 === (10))){
var inst_29421 = (state_29521[(27)]);
var inst_29423 = cljs.core.chunked_seq_QMARK_.call(null,inst_29421);
var state_29521__$1 = state_29521;
if(inst_29423){
var statearr_29582_29637 = state_29521__$1;
(statearr_29582_29637[(1)] = (13));

} else {
var statearr_29583_29638 = state_29521__$1;
(statearr_29583_29638[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29522 === (18))){
var inst_29454 = (state_29521[(12)]);
var inst_29453 = (state_29521[(13)]);
var inst_29453__$1 = (state_29521[(2)]);
var inst_29454__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_29453__$1);
var inst_29455 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29454__$1);
var state_29521__$1 = (function (){var statearr_29584 = state_29521;
(statearr_29584[(12)] = inst_29454__$1);

(statearr_29584[(13)] = inst_29453__$1);

return statearr_29584;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29521__$1,(19),inst_29455);
} else {
if((state_val_29522 === (37))){
var inst_29516 = (state_29521[(2)]);
var state_29521__$1 = state_29521;
var statearr_29585_29639 = state_29521__$1;
(statearr_29585_29639[(2)] = inst_29516);

(statearr_29585_29639[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29522 === (8))){
var inst_29408 = (state_29521[(8)]);
var inst_29421 = (state_29521[(27)]);
var inst_29421__$1 = cljs.core.seq.call(null,inst_29408);
var state_29521__$1 = (function (){var statearr_29586 = state_29521;
(statearr_29586[(27)] = inst_29421__$1);

return statearr_29586;
})();
if(inst_29421__$1){
var statearr_29587_29640 = state_29521__$1;
(statearr_29587_29640[(1)] = (10));

} else {
var statearr_29588_29641 = state_29521__$1;
(statearr_29588_29641[(1)] = (11));

}

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
}
}
}
});})(c__21347__auto__,map__29395,map__29395__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29396,map__29396__$1,msg,files))
;
return ((function (switch__21285__auto__,c__21347__auto__,map__29395,map__29395__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29396,map__29396__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21286__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21286__auto____0 = (function (){
var statearr_29592 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29592[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21286__auto__);

(statearr_29592[(1)] = (1));

return statearr_29592;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21286__auto____1 = (function (state_29521){
while(true){
var ret_value__21287__auto__ = (function (){try{while(true){
var result__21288__auto__ = switch__21285__auto__.call(null,state_29521);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21288__auto__;
}
break;
}
}catch (e29593){if((e29593 instanceof Object)){
var ex__21289__auto__ = e29593;
var statearr_29594_29642 = state_29521;
(statearr_29594_29642[(5)] = ex__21289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29521);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29593;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29643 = state_29521;
state_29521 = G__29643;
continue;
} else {
return ret_value__21287__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21286__auto__ = function(state_29521){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21286__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21286__auto____1.call(this,state_29521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21286__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21286__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21286__auto__;
})()
;})(switch__21285__auto__,c__21347__auto__,map__29395,map__29395__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29396,map__29396__$1,msg,files))
})();
var state__21349__auto__ = (function (){var statearr_29595 = f__21348__auto__.call(null);
(statearr_29595[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21347__auto__);

return statearr_29595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21349__auto__);
});})(c__21347__auto__,map__29395,map__29395__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29396,map__29396__$1,msg,files))
);

return c__21347__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29646,link){
var map__29648 = p__29646;
var map__29648__$1 = ((cljs.core.seq_QMARK_.call(null,map__29648))?cljs.core.apply.call(null,cljs.core.hash_map,map__29648):map__29648);
var file = cljs.core.get.call(null,map__29648__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4422__auto__ = link.href;
if(cljs.core.truth_(temp__4422__auto__)){
var link_href = temp__4422__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4422__auto__,map__29648,map__29648__$1,file){
return (function (p1__29644_SHARP_,p2__29645_SHARP_){
if(cljs.core._EQ_.call(null,p1__29644_SHARP_,p2__29645_SHARP_)){
return p1__29644_SHARP_;
} else {
return false;
}
});})(link_href,temp__4422__auto__,map__29648,map__29648__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4422__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29652){
var map__29653 = p__29652;
var map__29653__$1 = ((cljs.core.seq_QMARK_.call(null,map__29653))?cljs.core.apply.call(null,cljs.core.hash_map,map__29653):map__29653);
var match_length = cljs.core.get.call(null,map__29653__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29653__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29649_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29649_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4422__auto__)){
var res = temp__4422__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__29655 = arguments.length;
switch (G__29655) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__29657){
var map__29659 = p__29657;
var map__29659__$1 = ((cljs.core.seq_QMARK_.call(null,map__29659))?cljs.core.apply.call(null,cljs.core.hash_map,map__29659):map__29659);
var f_data = map__29659__$1;
var file = cljs.core.get.call(null,map__29659__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__29659__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var temp__4420__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4420__auto__)){
var link = temp__4420__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__18120__auto__ = request_url;
if(cljs.core.truth_(or__18120__auto__)){
return or__18120__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29660,files_msg){
var map__29682 = p__29660;
var map__29682__$1 = ((cljs.core.seq_QMARK_.call(null,map__29682))?cljs.core.apply.call(null,cljs.core.hash_map,map__29682):map__29682);
var opts = map__29682__$1;
var on_cssload = cljs.core.get.call(null,map__29682__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__29683_29703 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__29684_29704 = null;
var count__29685_29705 = (0);
var i__29686_29706 = (0);
while(true){
if((i__29686_29706 < count__29685_29705)){
var f_29707 = cljs.core._nth.call(null,chunk__29684_29704,i__29686_29706);
figwheel.client.file_reloading.reload_css_file.call(null,f_29707);

var G__29708 = seq__29683_29703;
var G__29709 = chunk__29684_29704;
var G__29710 = count__29685_29705;
var G__29711 = (i__29686_29706 + (1));
seq__29683_29703 = G__29708;
chunk__29684_29704 = G__29709;
count__29685_29705 = G__29710;
i__29686_29706 = G__29711;
continue;
} else {
var temp__4422__auto___29712 = cljs.core.seq.call(null,seq__29683_29703);
if(temp__4422__auto___29712){
var seq__29683_29713__$1 = temp__4422__auto___29712;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29683_29713__$1)){
var c__18905__auto___29714 = cljs.core.chunk_first.call(null,seq__29683_29713__$1);
var G__29715 = cljs.core.chunk_rest.call(null,seq__29683_29713__$1);
var G__29716 = c__18905__auto___29714;
var G__29717 = cljs.core.count.call(null,c__18905__auto___29714);
var G__29718 = (0);
seq__29683_29703 = G__29715;
chunk__29684_29704 = G__29716;
count__29685_29705 = G__29717;
i__29686_29706 = G__29718;
continue;
} else {
var f_29719 = cljs.core.first.call(null,seq__29683_29713__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_29719);

var G__29720 = cljs.core.next.call(null,seq__29683_29713__$1);
var G__29721 = null;
var G__29722 = (0);
var G__29723 = (0);
seq__29683_29703 = G__29720;
chunk__29684_29704 = G__29721;
count__29685_29705 = G__29722;
i__29686_29706 = G__29723;
continue;
}
} else {
}
}
break;
}

var c__21347__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21347__auto__,map__29682,map__29682__$1,opts,on_cssload){
return (function (){
var f__21348__auto__ = (function (){var switch__21285__auto__ = ((function (c__21347__auto__,map__29682,map__29682__$1,opts,on_cssload){
return (function (state_29693){
var state_val_29694 = (state_29693[(1)]);
if((state_val_29694 === (1))){
var inst_29687 = cljs.core.async.timeout.call(null,(100));
var state_29693__$1 = state_29693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29693__$1,(2),inst_29687);
} else {
if((state_val_29694 === (2))){
var inst_29689 = (state_29693[(2)]);
var inst_29690 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_29691 = on_cssload.call(null,inst_29690);
var state_29693__$1 = (function (){var statearr_29695 = state_29693;
(statearr_29695[(7)] = inst_29689);

return statearr_29695;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29693__$1,inst_29691);
} else {
return null;
}
}
});})(c__21347__auto__,map__29682,map__29682__$1,opts,on_cssload))
;
return ((function (switch__21285__auto__,c__21347__auto__,map__29682,map__29682__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21286__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21286__auto____0 = (function (){
var statearr_29699 = [null,null,null,null,null,null,null,null];
(statearr_29699[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__21286__auto__);

(statearr_29699[(1)] = (1));

return statearr_29699;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21286__auto____1 = (function (state_29693){
while(true){
var ret_value__21287__auto__ = (function (){try{while(true){
var result__21288__auto__ = switch__21285__auto__.call(null,state_29693);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21288__auto__;
}
break;
}
}catch (e29700){if((e29700 instanceof Object)){
var ex__21289__auto__ = e29700;
var statearr_29701_29724 = state_29693;
(statearr_29701_29724[(5)] = ex__21289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29693);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29700;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29725 = state_29693;
state_29693 = G__29725;
continue;
} else {
return ret_value__21287__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__21286__auto__ = function(state_29693){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21286__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21286__auto____1.call(this,state_29693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21286__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21286__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21286__auto__;
})()
;})(switch__21285__auto__,c__21347__auto__,map__29682,map__29682__$1,opts,on_cssload))
})();
var state__21349__auto__ = (function (){var statearr_29702 = f__21348__auto__.call(null);
(statearr_29702[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21347__auto__);

return statearr_29702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21349__auto__);
});})(c__21347__auto__,map__29682,map__29682__$1,opts,on_cssload))
);

return c__21347__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map