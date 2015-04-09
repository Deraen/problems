// Compiled by ClojureScript 0.0-3126 {}
goog.provide('hello_world.core');
goog.require('cljs.core');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
hello_world.core.throw_something = (function hello_world$core$throw_something(){
throw (new Error("foobar"));
});
hello_world.core.catch_and_rethrow = (function hello_world$core$catch_and_rethrow(){
try{return hello_world.core.throw_something.call(null);
}catch (e10502){if((e10502 instanceof Error)){
var e = e10502;
cljs.core.println.call(null,"catch",e);

throw e;
} else {
throw e10502;

}
}});
goog.exportSymbol('hello_world.core.catch_and_rethrow', hello_world.core.catch_and_rethrow);
hello_world.core.error = (function hello_world$core$error(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(null["foo"])], null);
});
hello_world.core.start = (function hello_world$core$start(){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.core.error], null),document.getElementById("app"));
});
goog.exportSymbol('hello_world.core.start', hello_world.core.start);

//# sourceMappingURL=core.js.map