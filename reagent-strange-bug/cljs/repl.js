// Compiled by ClojureScript 0.0-3269 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4422__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4422__auto__)){
var ns = temp__4422__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29015_29027 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29016_29028 = null;
var count__29017_29029 = (0);
var i__29018_29030 = (0);
while(true){
if((i__29018_29030 < count__29017_29029)){
var f_29031 = cljs.core._nth.call(null,chunk__29016_29028,i__29018_29030);
cljs.core.println.call(null,"  ",f_29031);

var G__29032 = seq__29015_29027;
var G__29033 = chunk__29016_29028;
var G__29034 = count__29017_29029;
var G__29035 = (i__29018_29030 + (1));
seq__29015_29027 = G__29032;
chunk__29016_29028 = G__29033;
count__29017_29029 = G__29034;
i__29018_29030 = G__29035;
continue;
} else {
var temp__4422__auto___29036 = cljs.core.seq.call(null,seq__29015_29027);
if(temp__4422__auto___29036){
var seq__29015_29037__$1 = temp__4422__auto___29036;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29015_29037__$1)){
var c__18905__auto___29038 = cljs.core.chunk_first.call(null,seq__29015_29037__$1);
var G__29039 = cljs.core.chunk_rest.call(null,seq__29015_29037__$1);
var G__29040 = c__18905__auto___29038;
var G__29041 = cljs.core.count.call(null,c__18905__auto___29038);
var G__29042 = (0);
seq__29015_29027 = G__29039;
chunk__29016_29028 = G__29040;
count__29017_29029 = G__29041;
i__29018_29030 = G__29042;
continue;
} else {
var f_29043 = cljs.core.first.call(null,seq__29015_29037__$1);
cljs.core.println.call(null,"  ",f_29043);

var G__29044 = cljs.core.next.call(null,seq__29015_29037__$1);
var G__29045 = null;
var G__29046 = (0);
var G__29047 = (0);
seq__29015_29027 = G__29044;
chunk__29016_29028 = G__29045;
count__29017_29029 = G__29046;
i__29018_29030 = G__29047;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29048 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18120__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18120__auto__)){
return or__18120__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29048);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29048)))?cljs.core.second.call(null,arglists_29048):arglists_29048));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29019 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29020 = null;
var count__29021 = (0);
var i__29022 = (0);
while(true){
if((i__29022 < count__29021)){
var vec__29023 = cljs.core._nth.call(null,chunk__29020,i__29022);
var name = cljs.core.nth.call(null,vec__29023,(0),null);
var map__29024 = cljs.core.nth.call(null,vec__29023,(1),null);
var map__29024__$1 = ((cljs.core.seq_QMARK_.call(null,map__29024))?cljs.core.apply.call(null,cljs.core.hash_map,map__29024):map__29024);
var doc = cljs.core.get.call(null,map__29024__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__29024__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29049 = seq__29019;
var G__29050 = chunk__29020;
var G__29051 = count__29021;
var G__29052 = (i__29022 + (1));
seq__29019 = G__29049;
chunk__29020 = G__29050;
count__29021 = G__29051;
i__29022 = G__29052;
continue;
} else {
var temp__4422__auto__ = cljs.core.seq.call(null,seq__29019);
if(temp__4422__auto__){
var seq__29019__$1 = temp__4422__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29019__$1)){
var c__18905__auto__ = cljs.core.chunk_first.call(null,seq__29019__$1);
var G__29053 = cljs.core.chunk_rest.call(null,seq__29019__$1);
var G__29054 = c__18905__auto__;
var G__29055 = cljs.core.count.call(null,c__18905__auto__);
var G__29056 = (0);
seq__29019 = G__29053;
chunk__29020 = G__29054;
count__29021 = G__29055;
i__29022 = G__29056;
continue;
} else {
var vec__29025 = cljs.core.first.call(null,seq__29019__$1);
var name = cljs.core.nth.call(null,vec__29025,(0),null);
var map__29026 = cljs.core.nth.call(null,vec__29025,(1),null);
var map__29026__$1 = ((cljs.core.seq_QMARK_.call(null,map__29026))?cljs.core.apply.call(null,cljs.core.hash_map,map__29026):map__29026);
var doc = cljs.core.get.call(null,map__29026__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__29026__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29057 = cljs.core.next.call(null,seq__29019__$1);
var G__29058 = null;
var G__29059 = (0);
var G__29060 = (0);
seq__29019 = G__29057;
chunk__29020 = G__29058;
count__29021 = G__29059;
i__29022 = G__29060;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map