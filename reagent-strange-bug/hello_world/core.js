// Compiled by ClojureScript 0.0-3269 {}
goog.provide('hello_world.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.ratom');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof hello_world.core.state !== 'undefined'){
} else {
hello_world.core.state = reagent.ratom.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"foo","foo",1268894036),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"active?","active?",459499776),false], null)], null));
}
hello_world.core.main = (function hello_world$core$main(){
var data = reagent.core.cursor.call(null,hello_world.core.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"foo","foo",1268894036)], null));
return ((function (data){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (data){
return (function (p1__23543_SHARP_){
return cljs.core.swap_BANG_.call(null,data,cljs.core.assoc,new cljs.core.Keyword(null,"value","value",305978217),p1__23543_SHARP_.target.value);
});})(data))
,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (data){
return (function (){
return cljs.core.swap_BANG_.call(null,data,cljs.core.assoc,new cljs.core.Keyword(null,"not-pristine","not-pristine",623148367),true);
});})(data))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (data){
return (function (){
return cljs.core.swap_BANG_.call(null,hello_world.core.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"foo","foo",1268894036),new cljs.core.Keyword(null,"active?","active?",459499776)], null),cljs.core.not);
});})(data))
], null),"Click"], null),(cljs.core.truth_(new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data)))?"Active":null)], null);
});
;})(data))
});
hello_world.core.start = (function hello_world$core$start(){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.core.main], null),document.getElementById("app"));
});
goog.exportSymbol('hello_world.core.start', hello_world.core.start);
hello_world.core.start.call(null);

//# sourceMappingURL=core.js.map