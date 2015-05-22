// Compiled by ClojureScript 0.0-3269 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t25379 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25379 = (function (fn_handler,f,meta25380){
this.fn_handler = fn_handler;
this.f = f;
this.meta25380 = meta25380;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t25379.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25381,meta25380__$1){
var self__ = this;
var _25381__$1 = this;
return (new cljs.core.async.t25379(self__.fn_handler,self__.f,meta25380__$1));
});

cljs.core.async.t25379.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25381){
var self__ = this;
var _25381__$1 = this;
return self__.meta25380;
});

cljs.core.async.t25379.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25379.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t25379.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t25379.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta25380","meta25380",113318582,null)], null);
});

cljs.core.async.t25379.cljs$lang$type = true;

cljs.core.async.t25379.cljs$lang$ctorStr = "cljs.core.async/t25379";

cljs.core.async.t25379.cljs$lang$ctorPrWriter = (function (this__18699__auto__,writer__18700__auto__,opt__18701__auto__){
return cljs.core._write.call(null,writer__18700__auto__,"cljs.core.async/t25379");
});

cljs.core.async.__GT_t25379 = (function cljs$core$async$fn_handler_$___GT_t25379(fn_handler__$1,f__$1,meta25380){
return (new cljs.core.async.t25379(fn_handler__$1,f__$1,meta25380));
});

}

return (new cljs.core.async.t25379(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__25383 = buff;
if(G__25383){
var bit__18794__auto__ = null;
if(cljs.core.truth_((function (){var or__18120__auto__ = bit__18794__auto__;
if(cljs.core.truth_(or__18120__auto__)){
return or__18120__auto__;
} else {
return G__25383.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__25383.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25383);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25383);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__25385 = arguments.length;
switch (G__25385) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__25388 = arguments.length;
switch (G__25388) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_25390 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25390);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_25390,ret){
return (function (){
return fn1.call(null,val_25390);
});})(val_25390,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__25392 = arguments.length;
switch (G__25392) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4420__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4420__auto__)){
var ret = temp__4420__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4420__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4420__auto__)){
var retb = temp__4420__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4420__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4420__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__19005__auto___25394 = n;
var x_25395 = (0);
while(true){
if((x_25395 < n__19005__auto___25394)){
(a[x_25395] = (0));

var G__25396 = (x_25395 + (1));
x_25395 = G__25396;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__25397 = (i + (1));
i = G__25397;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t25401 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25401 = (function (alt_flag,flag,meta25402){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta25402 = meta25402;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t25401.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25403,meta25402__$1){
var self__ = this;
var _25403__$1 = this;
return (new cljs.core.async.t25401(self__.alt_flag,self__.flag,meta25402__$1));
});})(flag))
;

cljs.core.async.t25401.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25403){
var self__ = this;
var _25403__$1 = this;
return self__.meta25402;
});})(flag))
;

cljs.core.async.t25401.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25401.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t25401.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t25401.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta25402","meta25402",1514756393,null)], null);
});})(flag))
;

cljs.core.async.t25401.cljs$lang$type = true;

cljs.core.async.t25401.cljs$lang$ctorStr = "cljs.core.async/t25401";

cljs.core.async.t25401.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18699__auto__,writer__18700__auto__,opt__18701__auto__){
return cljs.core._write.call(null,writer__18700__auto__,"cljs.core.async/t25401");
});})(flag))
;

cljs.core.async.__GT_t25401 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t25401(alt_flag__$1,flag__$1,meta25402){
return (new cljs.core.async.t25401(alt_flag__$1,flag__$1,meta25402));
});})(flag))
;

}

return (new cljs.core.async.t25401(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t25407 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25407 = (function (alt_handler,flag,cb,meta25408){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta25408 = meta25408;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t25407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25409,meta25408__$1){
var self__ = this;
var _25409__$1 = this;
return (new cljs.core.async.t25407(self__.alt_handler,self__.flag,self__.cb,meta25408__$1));
});

cljs.core.async.t25407.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25409){
var self__ = this;
var _25409__$1 = this;
return self__.meta25408;
});

cljs.core.async.t25407.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25407.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t25407.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t25407.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta25408","meta25408",-650935532,null)], null);
});

cljs.core.async.t25407.cljs$lang$type = true;

cljs.core.async.t25407.cljs$lang$ctorStr = "cljs.core.async/t25407";

cljs.core.async.t25407.cljs$lang$ctorPrWriter = (function (this__18699__auto__,writer__18700__auto__,opt__18701__auto__){
return cljs.core._write.call(null,writer__18700__auto__,"cljs.core.async/t25407");
});

cljs.core.async.__GT_t25407 = (function cljs$core$async$alt_handler_$___GT_t25407(alt_handler__$1,flag__$1,cb__$1,meta25408){
return (new cljs.core.async.t25407(alt_handler__$1,flag__$1,cb__$1,meta25408));
});

}

return (new cljs.core.async.t25407(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25410_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25410_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25411_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25411_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18120__auto__ = wport;
if(cljs.core.truth_(or__18120__auto__)){
return or__18120__auto__;
} else {
return port;
}
})()], null));
} else {
var G__25412 = (i + (1));
i = G__25412;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18120__auto__ = ret;
if(cljs.core.truth_(or__18120__auto__)){
return or__18120__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4422__auto__ = (function (){var and__18108__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18108__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18108__auto__;
}
})();
if(cljs.core.truth_(temp__4422__auto__)){
var got = temp__4422__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__19160__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19160__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25415){
var map__25416 = p__25415;
var map__25416__$1 = ((cljs.core.seq_QMARK_.call(null,map__25416))?cljs.core.apply.call(null,cljs.core.hash_map,map__25416):map__25416);
var opts = map__25416__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25413){
var G__25414 = cljs.core.first.call(null,seq25413);
var seq25413__$1 = cljs.core.next.call(null,seq25413);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25414,seq25413__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__25418 = arguments.length;
switch (G__25418) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21347__auto___25467 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21347__auto___25467){
return (function (){
var f__21348__auto__ = (function (){var switch__21285__auto__ = ((function (c__21347__auto___25467){
return (function (state_25442){
var state_val_25443 = (state_25442[(1)]);
if((state_val_25443 === (7))){
var inst_25438 = (state_25442[(2)]);
var state_25442__$1 = state_25442;
var statearr_25444_25468 = state_25442__$1;
(statearr_25444_25468[(2)] = inst_25438);

(statearr_25444_25468[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25443 === (1))){
var state_25442__$1 = state_25442;
var statearr_25445_25469 = state_25442__$1;
(statearr_25445_25469[(2)] = null);

(statearr_25445_25469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25443 === (4))){
var inst_25421 = (state_25442[(7)]);
var inst_25421__$1 = (state_25442[(2)]);
var inst_25422 = (inst_25421__$1 == null);
var state_25442__$1 = (function (){var statearr_25446 = state_25442;
(statearr_25446[(7)] = inst_25421__$1);

return statearr_25446;
})();
if(cljs.core.truth_(inst_25422)){
var statearr_25447_25470 = state_25442__$1;
(statearr_25447_25470[(1)] = (5));

} else {
var statearr_25448_25471 = state_25442__$1;
(statearr_25448_25471[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25443 === (13))){
var state_25442__$1 = state_25442;
var statearr_25449_25472 = state_25442__$1;
(statearr_25449_25472[(2)] = null);

(statearr_25449_25472[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25443 === (6))){
var inst_25421 = (state_25442[(7)]);
var state_25442__$1 = state_25442;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25442__$1,(11),to,inst_25421);
} else {
if((state_val_25443 === (3))){
var inst_25440 = (state_25442[(2)]);
var state_25442__$1 = state_25442;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25442__$1,inst_25440);
} else {
if((state_val_25443 === (12))){
var state_25442__$1 = state_25442;
var statearr_25450_25473 = state_25442__$1;
(statearr_25450_25473[(2)] = null);

(statearr_25450_25473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25443 === (2))){
var state_25442__$1 = state_25442;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25442__$1,(4),from);
} else {
if((state_val_25443 === (11))){
var inst_25431 = (state_25442[(2)]);
var state_25442__$1 = state_25442;
if(cljs.core.truth_(inst_25431)){
var statearr_25451_25474 = state_25442__$1;
(statearr_25451_25474[(1)] = (12));

} else {
var statearr_25452_25475 = state_25442__$1;
(statearr_25452_25475[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25443 === (9))){
var state_25442__$1 = state_25442;
var statearr_25453_25476 = state_25442__$1;
(statearr_25453_25476[(2)] = null);

(statearr_25453_25476[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25443 === (5))){
var state_25442__$1 = state_25442;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25454_25477 = state_25442__$1;
(statearr_25454_25477[(1)] = (8));

} else {
var statearr_25455_25478 = state_25442__$1;
(statearr_25455_25478[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25443 === (14))){
var inst_25436 = (state_25442[(2)]);
var state_25442__$1 = state_25442;
var statearr_25456_25479 = state_25442__$1;
(statearr_25456_25479[(2)] = inst_25436);

(statearr_25456_25479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25443 === (10))){
var inst_25428 = (state_25442[(2)]);
var state_25442__$1 = state_25442;
var statearr_25457_25480 = state_25442__$1;
(statearr_25457_25480[(2)] = inst_25428);

(statearr_25457_25480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25443 === (8))){
var inst_25425 = cljs.core.async.close_BANG_.call(null,to);
var state_25442__$1 = state_25442;
var statearr_25458_25481 = state_25442__$1;
(statearr_25458_25481[(2)] = inst_25425);

(statearr_25458_25481[(1)] = (10));


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
});})(c__21347__auto___25467))
;
return ((function (switch__21285__auto__,c__21347__auto___25467){
return (function() {
var cljs$core$async$state_machine__21286__auto__ = null;
var cljs$core$async$state_machine__21286__auto____0 = (function (){
var statearr_25462 = [null,null,null,null,null,null,null,null];
(statearr_25462[(0)] = cljs$core$async$state_machine__21286__auto__);

(statearr_25462[(1)] = (1));

return statearr_25462;
});
var cljs$core$async$state_machine__21286__auto____1 = (function (state_25442){
while(true){
var ret_value__21287__auto__ = (function (){try{while(true){
var result__21288__auto__ = switch__21285__auto__.call(null,state_25442);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21288__auto__;
}
break;
}
}catch (e25463){if((e25463 instanceof Object)){
var ex__21289__auto__ = e25463;
var statearr_25464_25482 = state_25442;
(statearr_25464_25482[(5)] = ex__21289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25463;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25483 = state_25442;
state_25442 = G__25483;
continue;
} else {
return ret_value__21287__auto__;
}
break;
}
});
cljs$core$async$state_machine__21286__auto__ = function(state_25442){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21286__auto____1.call(this,state_25442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21286__auto____0;
cljs$core$async$state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21286__auto____1;
return cljs$core$async$state_machine__21286__auto__;
})()
;})(switch__21285__auto__,c__21347__auto___25467))
})();
var state__21349__auto__ = (function (){var statearr_25465 = f__21348__auto__.call(null);
(statearr_25465[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21347__auto___25467);

return statearr_25465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21349__auto__);
});})(c__21347__auto___25467))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__25667){
var vec__25668 = p__25667;
var v = cljs.core.nth.call(null,vec__25668,(0),null);
var p = cljs.core.nth.call(null,vec__25668,(1),null);
var job = vec__25668;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21347__auto___25850 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21347__auto___25850,res,vec__25668,v,p,job,jobs,results){
return (function (){
var f__21348__auto__ = (function (){var switch__21285__auto__ = ((function (c__21347__auto___25850,res,vec__25668,v,p,job,jobs,results){
return (function (state_25673){
var state_val_25674 = (state_25673[(1)]);
if((state_val_25674 === (1))){
var state_25673__$1 = state_25673;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25673__$1,(2),res,v);
} else {
if((state_val_25674 === (2))){
var inst_25670 = (state_25673[(2)]);
var inst_25671 = cljs.core.async.close_BANG_.call(null,res);
var state_25673__$1 = (function (){var statearr_25675 = state_25673;
(statearr_25675[(7)] = inst_25670);

return statearr_25675;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25673__$1,inst_25671);
} else {
return null;
}
}
});})(c__21347__auto___25850,res,vec__25668,v,p,job,jobs,results))
;
return ((function (switch__21285__auto__,c__21347__auto___25850,res,vec__25668,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21286__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21286__auto____0 = (function (){
var statearr_25679 = [null,null,null,null,null,null,null,null];
(statearr_25679[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21286__auto__);

(statearr_25679[(1)] = (1));

return statearr_25679;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21286__auto____1 = (function (state_25673){
while(true){
var ret_value__21287__auto__ = (function (){try{while(true){
var result__21288__auto__ = switch__21285__auto__.call(null,state_25673);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21288__auto__;
}
break;
}
}catch (e25680){if((e25680 instanceof Object)){
var ex__21289__auto__ = e25680;
var statearr_25681_25851 = state_25673;
(statearr_25681_25851[(5)] = ex__21289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25852 = state_25673;
state_25673 = G__25852;
continue;
} else {
return ret_value__21287__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21286__auto__ = function(state_25673){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21286__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21286__auto____1.call(this,state_25673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21286__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21286__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21286__auto__;
})()
;})(switch__21285__auto__,c__21347__auto___25850,res,vec__25668,v,p,job,jobs,results))
})();
var state__21349__auto__ = (function (){var statearr_25682 = f__21348__auto__.call(null);
(statearr_25682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21347__auto___25850);

return statearr_25682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21349__auto__);
});})(c__21347__auto___25850,res,vec__25668,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25683){
var vec__25684 = p__25683;
var v = cljs.core.nth.call(null,vec__25684,(0),null);
var p = cljs.core.nth.call(null,vec__25684,(1),null);
var job = vec__25684;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__19005__auto___25853 = n;
var __25854 = (0);
while(true){
if((__25854 < n__19005__auto___25853)){
var G__25685_25855 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__25685_25855) {
case "compute":
var c__21347__auto___25857 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25854,c__21347__auto___25857,G__25685_25855,n__19005__auto___25853,jobs,results,process,async){
return (function (){
var f__21348__auto__ = (function (){var switch__21285__auto__ = ((function (__25854,c__21347__auto___25857,G__25685_25855,n__19005__auto___25853,jobs,results,process,async){
return (function (state_25698){
var state_val_25699 = (state_25698[(1)]);
if((state_val_25699 === (1))){
var state_25698__$1 = state_25698;
var statearr_25700_25858 = state_25698__$1;
(statearr_25700_25858[(2)] = null);

(statearr_25700_25858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25699 === (2))){
var state_25698__$1 = state_25698;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25698__$1,(4),jobs);
} else {
if((state_val_25699 === (3))){
var inst_25696 = (state_25698[(2)]);
var state_25698__$1 = state_25698;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25698__$1,inst_25696);
} else {
if((state_val_25699 === (4))){
var inst_25688 = (state_25698[(2)]);
var inst_25689 = process.call(null,inst_25688);
var state_25698__$1 = state_25698;
if(cljs.core.truth_(inst_25689)){
var statearr_25701_25859 = state_25698__$1;
(statearr_25701_25859[(1)] = (5));

} else {
var statearr_25702_25860 = state_25698__$1;
(statearr_25702_25860[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25699 === (5))){
var state_25698__$1 = state_25698;
var statearr_25703_25861 = state_25698__$1;
(statearr_25703_25861[(2)] = null);

(statearr_25703_25861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25699 === (6))){
var state_25698__$1 = state_25698;
var statearr_25704_25862 = state_25698__$1;
(statearr_25704_25862[(2)] = null);

(statearr_25704_25862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25699 === (7))){
var inst_25694 = (state_25698[(2)]);
var state_25698__$1 = state_25698;
var statearr_25705_25863 = state_25698__$1;
(statearr_25705_25863[(2)] = inst_25694);

(statearr_25705_25863[(1)] = (3));


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
});})(__25854,c__21347__auto___25857,G__25685_25855,n__19005__auto___25853,jobs,results,process,async))
;
return ((function (__25854,switch__21285__auto__,c__21347__auto___25857,G__25685_25855,n__19005__auto___25853,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21286__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21286__auto____0 = (function (){
var statearr_25709 = [null,null,null,null,null,null,null];
(statearr_25709[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21286__auto__);

(statearr_25709[(1)] = (1));

return statearr_25709;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21286__auto____1 = (function (state_25698){
while(true){
var ret_value__21287__auto__ = (function (){try{while(true){
var result__21288__auto__ = switch__21285__auto__.call(null,state_25698);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21288__auto__;
}
break;
}
}catch (e25710){if((e25710 instanceof Object)){
var ex__21289__auto__ = e25710;
var statearr_25711_25864 = state_25698;
(statearr_25711_25864[(5)] = ex__21289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25698);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25710;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25865 = state_25698;
state_25698 = G__25865;
continue;
} else {
return ret_value__21287__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21286__auto__ = function(state_25698){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21286__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21286__auto____1.call(this,state_25698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21286__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21286__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21286__auto__;
})()
;})(__25854,switch__21285__auto__,c__21347__auto___25857,G__25685_25855,n__19005__auto___25853,jobs,results,process,async))
})();
var state__21349__auto__ = (function (){var statearr_25712 = f__21348__auto__.call(null);
(statearr_25712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21347__auto___25857);

return statearr_25712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21349__auto__);
});})(__25854,c__21347__auto___25857,G__25685_25855,n__19005__auto___25853,jobs,results,process,async))
);


break;
case "async":
var c__21347__auto___25866 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25854,c__21347__auto___25866,G__25685_25855,n__19005__auto___25853,jobs,results,process,async){
return (function (){
var f__21348__auto__ = (function (){var switch__21285__auto__ = ((function (__25854,c__21347__auto___25866,G__25685_25855,n__19005__auto___25853,jobs,results,process,async){
return (function (state_25725){
var state_val_25726 = (state_25725[(1)]);
if((state_val_25726 === (1))){
var state_25725__$1 = state_25725;
var statearr_25727_25867 = state_25725__$1;
(statearr_25727_25867[(2)] = null);

(statearr_25727_25867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25726 === (2))){
var state_25725__$1 = state_25725;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25725__$1,(4),jobs);
} else {
if((state_val_25726 === (3))){
var inst_25723 = (state_25725[(2)]);
var state_25725__$1 = state_25725;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25725__$1,inst_25723);
} else {
if((state_val_25726 === (4))){
var inst_25715 = (state_25725[(2)]);
var inst_25716 = async.call(null,inst_25715);
var state_25725__$1 = state_25725;
if(cljs.core.truth_(inst_25716)){
var statearr_25728_25868 = state_25725__$1;
(statearr_25728_25868[(1)] = (5));

} else {
var statearr_25729_25869 = state_25725__$1;
(statearr_25729_25869[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25726 === (5))){
var state_25725__$1 = state_25725;
var statearr_25730_25870 = state_25725__$1;
(statearr_25730_25870[(2)] = null);

(statearr_25730_25870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25726 === (6))){
var state_25725__$1 = state_25725;
var statearr_25731_25871 = state_25725__$1;
(statearr_25731_25871[(2)] = null);

(statearr_25731_25871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25726 === (7))){
var inst_25721 = (state_25725[(2)]);
var state_25725__$1 = state_25725;
var statearr_25732_25872 = state_25725__$1;
(statearr_25732_25872[(2)] = inst_25721);

(statearr_25732_25872[(1)] = (3));


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
});})(__25854,c__21347__auto___25866,G__25685_25855,n__19005__auto___25853,jobs,results,process,async))
;
return ((function (__25854,switch__21285__auto__,c__21347__auto___25866,G__25685_25855,n__19005__auto___25853,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21286__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21286__auto____0 = (function (){
var statearr_25736 = [null,null,null,null,null,null,null];
(statearr_25736[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21286__auto__);

(statearr_25736[(1)] = (1));

return statearr_25736;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21286__auto____1 = (function (state_25725){
while(true){
var ret_value__21287__auto__ = (function (){try{while(true){
var result__21288__auto__ = switch__21285__auto__.call(null,state_25725);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21288__auto__;
}
break;
}
}catch (e25737){if((e25737 instanceof Object)){
var ex__21289__auto__ = e25737;
var statearr_25738_25873 = state_25725;
(statearr_25738_25873[(5)] = ex__21289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25725);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25737;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25874 = state_25725;
state_25725 = G__25874;
continue;
} else {
return ret_value__21287__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21286__auto__ = function(state_25725){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21286__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21286__auto____1.call(this,state_25725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21286__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21286__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21286__auto__;
})()
;})(__25854,switch__21285__auto__,c__21347__auto___25866,G__25685_25855,n__19005__auto___25853,jobs,results,process,async))
})();
var state__21349__auto__ = (function (){var statearr_25739 = f__21348__auto__.call(null);
(statearr_25739[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21347__auto___25866);

return statearr_25739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21349__auto__);
});})(__25854,c__21347__auto___25866,G__25685_25855,n__19005__auto___25853,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__25875 = (__25854 + (1));
__25854 = G__25875;
continue;
} else {
}
break;
}

var c__21347__auto___25876 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21347__auto___25876,jobs,results,process,async){
return (function (){
var f__21348__auto__ = (function (){var switch__21285__auto__ = ((function (c__21347__auto___25876,jobs,results,process,async){
return (function (state_25761){
var state_val_25762 = (state_25761[(1)]);
if((state_val_25762 === (1))){
var state_25761__$1 = state_25761;
var statearr_25763_25877 = state_25761__$1;
(statearr_25763_25877[(2)] = null);

(statearr_25763_25877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25762 === (2))){
var state_25761__$1 = state_25761;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25761__$1,(4),from);
} else {
if((state_val_25762 === (3))){
var inst_25759 = (state_25761[(2)]);
var state_25761__$1 = state_25761;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25761__$1,inst_25759);
} else {
if((state_val_25762 === (4))){
var inst_25742 = (state_25761[(7)]);
var inst_25742__$1 = (state_25761[(2)]);
var inst_25743 = (inst_25742__$1 == null);
var state_25761__$1 = (function (){var statearr_25764 = state_25761;
(statearr_25764[(7)] = inst_25742__$1);

return statearr_25764;
})();
if(cljs.core.truth_(inst_25743)){
var statearr_25765_25878 = state_25761__$1;
(statearr_25765_25878[(1)] = (5));

} else {
var statearr_25766_25879 = state_25761__$1;
(statearr_25766_25879[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25762 === (5))){
var inst_25745 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25761__$1 = state_25761;
var statearr_25767_25880 = state_25761__$1;
(statearr_25767_25880[(2)] = inst_25745);

(statearr_25767_25880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25762 === (6))){
var inst_25747 = (state_25761[(8)]);
var inst_25742 = (state_25761[(7)]);
var inst_25747__$1 = cljs.core.async.chan.call(null,(1));
var inst_25748 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25749 = [inst_25742,inst_25747__$1];
var inst_25750 = (new cljs.core.PersistentVector(null,2,(5),inst_25748,inst_25749,null));
var state_25761__$1 = (function (){var statearr_25768 = state_25761;
(statearr_25768[(8)] = inst_25747__$1);

return statearr_25768;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25761__$1,(8),jobs,inst_25750);
} else {
if((state_val_25762 === (7))){
var inst_25757 = (state_25761[(2)]);
var state_25761__$1 = state_25761;
var statearr_25769_25881 = state_25761__$1;
(statearr_25769_25881[(2)] = inst_25757);

(statearr_25769_25881[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25762 === (8))){
var inst_25747 = (state_25761[(8)]);
var inst_25752 = (state_25761[(2)]);
var state_25761__$1 = (function (){var statearr_25770 = state_25761;
(statearr_25770[(9)] = inst_25752);

return statearr_25770;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25761__$1,(9),results,inst_25747);
} else {
if((state_val_25762 === (9))){
var inst_25754 = (state_25761[(2)]);
var state_25761__$1 = (function (){var statearr_25771 = state_25761;
(statearr_25771[(10)] = inst_25754);

return statearr_25771;
})();
var statearr_25772_25882 = state_25761__$1;
(statearr_25772_25882[(2)] = null);

(statearr_25772_25882[(1)] = (2));


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
});})(c__21347__auto___25876,jobs,results,process,async))
;
return ((function (switch__21285__auto__,c__21347__auto___25876,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21286__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21286__auto____0 = (function (){
var statearr_25776 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25776[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21286__auto__);

(statearr_25776[(1)] = (1));

return statearr_25776;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21286__auto____1 = (function (state_25761){
while(true){
var ret_value__21287__auto__ = (function (){try{while(true){
var result__21288__auto__ = switch__21285__auto__.call(null,state_25761);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21288__auto__;
}
break;
}
}catch (e25777){if((e25777 instanceof Object)){
var ex__21289__auto__ = e25777;
var statearr_25778_25883 = state_25761;
(statearr_25778_25883[(5)] = ex__21289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25761);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25777;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25884 = state_25761;
state_25761 = G__25884;
continue;
} else {
return ret_value__21287__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21286__auto__ = function(state_25761){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21286__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21286__auto____1.call(this,state_25761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21286__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21286__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21286__auto__;
})()
;})(switch__21285__auto__,c__21347__auto___25876,jobs,results,process,async))
})();
var state__21349__auto__ = (function (){var statearr_25779 = f__21348__auto__.call(null);
(statearr_25779[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21347__auto___25876);

return statearr_25779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21349__auto__);
});})(c__21347__auto___25876,jobs,results,process,async))
);


var c__21347__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21347__auto__,jobs,results,process,async){
return (function (){
var f__21348__auto__ = (function (){var switch__21285__auto__ = ((function (c__21347__auto__,jobs,results,process,async){
return (function (state_25817){
var state_val_25818 = (state_25817[(1)]);
if((state_val_25818 === (7))){
var inst_25813 = (state_25817[(2)]);
var state_25817__$1 = state_25817;
var statearr_25819_25885 = state_25817__$1;
(statearr_25819_25885[(2)] = inst_25813);

(statearr_25819_25885[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25818 === (20))){
var state_25817__$1 = state_25817;
var statearr_25820_25886 = state_25817__$1;
(statearr_25820_25886[(2)] = null);

(statearr_25820_25886[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25818 === (1))){
var state_25817__$1 = state_25817;
var statearr_25821_25887 = state_25817__$1;
(statearr_25821_25887[(2)] = null);

(statearr_25821_25887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25818 === (4))){
var inst_25782 = (state_25817[(7)]);
var inst_25782__$1 = (state_25817[(2)]);
var inst_25783 = (inst_25782__$1 == null);
var state_25817__$1 = (function (){var statearr_25822 = state_25817;
(statearr_25822[(7)] = inst_25782__$1);

return statearr_25822;
})();
if(cljs.core.truth_(inst_25783)){
var statearr_25823_25888 = state_25817__$1;
(statearr_25823_25888[(1)] = (5));

} else {
var statearr_25824_25889 = state_25817__$1;
(statearr_25824_25889[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25818 === (15))){
var inst_25795 = (state_25817[(8)]);
var state_25817__$1 = state_25817;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25817__$1,(18),to,inst_25795);
} else {
if((state_val_25818 === (21))){
var inst_25808 = (state_25817[(2)]);
var state_25817__$1 = state_25817;
var statearr_25825_25890 = state_25817__$1;
(statearr_25825_25890[(2)] = inst_25808);

(statearr_25825_25890[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25818 === (13))){
var inst_25810 = (state_25817[(2)]);
var state_25817__$1 = (function (){var statearr_25826 = state_25817;
(statearr_25826[(9)] = inst_25810);

return statearr_25826;
})();
var statearr_25827_25891 = state_25817__$1;
(statearr_25827_25891[(2)] = null);

(statearr_25827_25891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25818 === (6))){
var inst_25782 = (state_25817[(7)]);
var state_25817__$1 = state_25817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25817__$1,(11),inst_25782);
} else {
if((state_val_25818 === (17))){
var inst_25803 = (state_25817[(2)]);
var state_25817__$1 = state_25817;
if(cljs.core.truth_(inst_25803)){
var statearr_25828_25892 = state_25817__$1;
(statearr_25828_25892[(1)] = (19));

} else {
var statearr_25829_25893 = state_25817__$1;
(statearr_25829_25893[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25818 === (3))){
var inst_25815 = (state_25817[(2)]);
var state_25817__$1 = state_25817;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25817__$1,inst_25815);
} else {
if((state_val_25818 === (12))){
var inst_25792 = (state_25817[(10)]);
var state_25817__$1 = state_25817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25817__$1,(14),inst_25792);
} else {
if((state_val_25818 === (2))){
var state_25817__$1 = state_25817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25817__$1,(4),results);
} else {
if((state_val_25818 === (19))){
var state_25817__$1 = state_25817;
var statearr_25830_25894 = state_25817__$1;
(statearr_25830_25894[(2)] = null);

(statearr_25830_25894[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25818 === (11))){
var inst_25792 = (state_25817[(2)]);
var state_25817__$1 = (function (){var statearr_25831 = state_25817;
(statearr_25831[(10)] = inst_25792);

return statearr_25831;
})();
var statearr_25832_25895 = state_25817__$1;
(statearr_25832_25895[(2)] = null);

(statearr_25832_25895[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25818 === (9))){
var state_25817__$1 = state_25817;
var statearr_25833_25896 = state_25817__$1;
(statearr_25833_25896[(2)] = null);

(statearr_25833_25896[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25818 === (5))){
var state_25817__$1 = state_25817;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25834_25897 = state_25817__$1;
(statearr_25834_25897[(1)] = (8));

} else {
var statearr_25835_25898 = state_25817__$1;
(statearr_25835_25898[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25818 === (14))){
var inst_25797 = (state_25817[(11)]);
var inst_25795 = (state_25817[(8)]);
var inst_25795__$1 = (state_25817[(2)]);
var inst_25796 = (inst_25795__$1 == null);
var inst_25797__$1 = cljs.core.not.call(null,inst_25796);
var state_25817__$1 = (function (){var statearr_25836 = state_25817;
(statearr_25836[(11)] = inst_25797__$1);

(statearr_25836[(8)] = inst_25795__$1);

return statearr_25836;
})();
if(inst_25797__$1){
var statearr_25837_25899 = state_25817__$1;
(statearr_25837_25899[(1)] = (15));

} else {
var statearr_25838_25900 = state_25817__$1;
(statearr_25838_25900[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25818 === (16))){
var inst_25797 = (state_25817[(11)]);
var state_25817__$1 = state_25817;
var statearr_25839_25901 = state_25817__$1;
(statearr_25839_25901[(2)] = inst_25797);

(statearr_25839_25901[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25818 === (10))){
var inst_25789 = (state_25817[(2)]);
var state_25817__$1 = state_25817;
var statearr_25840_25902 = state_25817__$1;
(statearr_25840_25902[(2)] = inst_25789);

(statearr_25840_25902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25818 === (18))){
var inst_25800 = (state_25817[(2)]);
var state_25817__$1 = state_25817;
var statearr_25841_25903 = state_25817__$1;
(statearr_25841_25903[(2)] = inst_25800);

(statearr_25841_25903[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25818 === (8))){
var inst_25786 = cljs.core.async.close_BANG_.call(null,to);
var state_25817__$1 = state_25817;
var statearr_25842_25904 = state_25817__$1;
(statearr_25842_25904[(2)] = inst_25786);

(statearr_25842_25904[(1)] = (10));


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
});})(c__21347__auto__,jobs,results,process,async))
;
return ((function (switch__21285__auto__,c__21347__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21286__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21286__auto____0 = (function (){
var statearr_25846 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25846[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21286__auto__);

(statearr_25846[(1)] = (1));

return statearr_25846;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21286__auto____1 = (function (state_25817){
while(true){
var ret_value__21287__auto__ = (function (){try{while(true){
var result__21288__auto__ = switch__21285__auto__.call(null,state_25817);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21288__auto__;
}
break;
}
}catch (e25847){if((e25847 instanceof Object)){
var ex__21289__auto__ = e25847;
var statearr_25848_25905 = state_25817;
(statearr_25848_25905[(5)] = ex__21289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25817);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25847;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25906 = state_25817;
state_25817 = G__25906;
continue;
} else {
return ret_value__21287__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21286__auto__ = function(state_25817){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21286__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21286__auto____1.call(this,state_25817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21286__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21286__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21286__auto__;
})()
;})(switch__21285__auto__,c__21347__auto__,jobs,results,process,async))
})();
var state__21349__auto__ = (function (){var statearr_25849 = f__21348__auto__.call(null);
(statearr_25849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21347__auto__);

return statearr_25849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21349__auto__);
});})(c__21347__auto__,jobs,results,process,async))
);

return c__21347__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__25908 = arguments.length;
switch (G__25908) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__25911 = arguments.length;
switch (G__25911) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__25914 = arguments.length;
switch (G__25914) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21347__auto___25966 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21347__auto___25966,tc,fc){
return (function (){
var f__21348__auto__ = (function (){var switch__21285__auto__ = ((function (c__21347__auto___25966,tc,fc){
return (function (state_25940){
var state_val_25941 = (state_25940[(1)]);
if((state_val_25941 === (7))){
var inst_25936 = (state_25940[(2)]);
var state_25940__$1 = state_25940;
var statearr_25942_25967 = state_25940__$1;
(statearr_25942_25967[(2)] = inst_25936);

(statearr_25942_25967[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25941 === (1))){
var state_25940__$1 = state_25940;
var statearr_25943_25968 = state_25940__$1;
(statearr_25943_25968[(2)] = null);

(statearr_25943_25968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25941 === (4))){
var inst_25917 = (state_25940[(7)]);
var inst_25917__$1 = (state_25940[(2)]);
var inst_25918 = (inst_25917__$1 == null);
var state_25940__$1 = (function (){var statearr_25944 = state_25940;
(statearr_25944[(7)] = inst_25917__$1);

return statearr_25944;
})();
if(cljs.core.truth_(inst_25918)){
var statearr_25945_25969 = state_25940__$1;
(statearr_25945_25969[(1)] = (5));

} else {
var statearr_25946_25970 = state_25940__$1;
(statearr_25946_25970[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25941 === (13))){
var state_25940__$1 = state_25940;
var statearr_25947_25971 = state_25940__$1;
(statearr_25947_25971[(2)] = null);

(statearr_25947_25971[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25941 === (6))){
var inst_25917 = (state_25940[(7)]);
var inst_25923 = p.call(null,inst_25917);
var state_25940__$1 = state_25940;
if(cljs.core.truth_(inst_25923)){
var statearr_25948_25972 = state_25940__$1;
(statearr_25948_25972[(1)] = (9));

} else {
var statearr_25949_25973 = state_25940__$1;
(statearr_25949_25973[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25941 === (3))){
var inst_25938 = (state_25940[(2)]);
var state_25940__$1 = state_25940;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25940__$1,inst_25938);
} else {
if((state_val_25941 === (12))){
var state_25940__$1 = state_25940;
var statearr_25950_25974 = state_25940__$1;
(statearr_25950_25974[(2)] = null);

(statearr_25950_25974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25941 === (2))){
var state_25940__$1 = state_25940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25940__$1,(4),ch);
} else {
if((state_val_25941 === (11))){
var inst_25917 = (state_25940[(7)]);
var inst_25927 = (state_25940[(2)]);
var state_25940__$1 = state_25940;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25940__$1,(8),inst_25927,inst_25917);
} else {
if((state_val_25941 === (9))){
var state_25940__$1 = state_25940;
var statearr_25951_25975 = state_25940__$1;
(statearr_25951_25975[(2)] = tc);

(statearr_25951_25975[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25941 === (5))){
var inst_25920 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25921 = cljs.core.async.close_BANG_.call(null,fc);
var state_25940__$1 = (function (){var statearr_25952 = state_25940;
(statearr_25952[(8)] = inst_25920);

return statearr_25952;
})();
var statearr_25953_25976 = state_25940__$1;
(statearr_25953_25976[(2)] = inst_25921);

(statearr_25953_25976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25941 === (14))){
var inst_25934 = (state_25940[(2)]);
var state_25940__$1 = state_25940;
var statearr_25954_25977 = state_25940__$1;
(statearr_25954_25977[(2)] = inst_25934);

(statearr_25954_25977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25941 === (10))){
var state_25940__$1 = state_25940;
var statearr_25955_25978 = state_25940__$1;
(statearr_25955_25978[(2)] = fc);

(statearr_25955_25978[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25941 === (8))){
var inst_25929 = (state_25940[(2)]);
var state_25940__$1 = state_25940;
if(cljs.core.truth_(inst_25929)){
var statearr_25956_25979 = state_25940__$1;
(statearr_25956_25979[(1)] = (12));

} else {
var statearr_25957_25980 = state_25940__$1;
(statearr_25957_25980[(1)] = (13));

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
});})(c__21347__auto___25966,tc,fc))
;
return ((function (switch__21285__auto__,c__21347__auto___25966,tc,fc){
return (function() {
var cljs$core$async$state_machine__21286__auto__ = null;
var cljs$core$async$state_machine__21286__auto____0 = (function (){
var statearr_25961 = [null,null,null,null,null,null,null,null,null];
(statearr_25961[(0)] = cljs$core$async$state_machine__21286__auto__);

(statearr_25961[(1)] = (1));

return statearr_25961;
});
var cljs$core$async$state_machine__21286__auto____1 = (function (state_25940){
while(true){
var ret_value__21287__auto__ = (function (){try{while(true){
var result__21288__auto__ = switch__21285__auto__.call(null,state_25940);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21288__auto__;
}
break;
}
}catch (e25962){if((e25962 instanceof Object)){
var ex__21289__auto__ = e25962;
var statearr_25963_25981 = state_25940;
(statearr_25963_25981[(5)] = ex__21289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25940);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25962;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25982 = state_25940;
state_25940 = G__25982;
continue;
} else {
return ret_value__21287__auto__;
}
break;
}
});
cljs$core$async$state_machine__21286__auto__ = function(state_25940){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21286__auto____1.call(this,state_25940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21286__auto____0;
cljs$core$async$state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21286__auto____1;
return cljs$core$async$state_machine__21286__auto__;
})()
;})(switch__21285__auto__,c__21347__auto___25966,tc,fc))
})();
var state__21349__auto__ = (function (){var statearr_25964 = f__21348__auto__.call(null);
(statearr_25964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21347__auto___25966);

return statearr_25964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21349__auto__);
});})(c__21347__auto___25966,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__21347__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21347__auto__){
return (function (){
var f__21348__auto__ = (function (){var switch__21285__auto__ = ((function (c__21347__auto__){
return (function (state_26029){
var state_val_26030 = (state_26029[(1)]);
if((state_val_26030 === (1))){
var inst_26015 = init;
var state_26029__$1 = (function (){var statearr_26031 = state_26029;
(statearr_26031[(7)] = inst_26015);

return statearr_26031;
})();
var statearr_26032_26047 = state_26029__$1;
(statearr_26032_26047[(2)] = null);

(statearr_26032_26047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26030 === (2))){
var state_26029__$1 = state_26029;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26029__$1,(4),ch);
} else {
if((state_val_26030 === (3))){
var inst_26027 = (state_26029[(2)]);
var state_26029__$1 = state_26029;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26029__$1,inst_26027);
} else {
if((state_val_26030 === (4))){
var inst_26018 = (state_26029[(8)]);
var inst_26018__$1 = (state_26029[(2)]);
var inst_26019 = (inst_26018__$1 == null);
var state_26029__$1 = (function (){var statearr_26033 = state_26029;
(statearr_26033[(8)] = inst_26018__$1);

return statearr_26033;
})();
if(cljs.core.truth_(inst_26019)){
var statearr_26034_26048 = state_26029__$1;
(statearr_26034_26048[(1)] = (5));

} else {
var statearr_26035_26049 = state_26029__$1;
(statearr_26035_26049[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26030 === (5))){
var inst_26015 = (state_26029[(7)]);
var state_26029__$1 = state_26029;
var statearr_26036_26050 = state_26029__$1;
(statearr_26036_26050[(2)] = inst_26015);

(statearr_26036_26050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26030 === (6))){
var inst_26018 = (state_26029[(8)]);
var inst_26015 = (state_26029[(7)]);
var inst_26022 = f.call(null,inst_26015,inst_26018);
var inst_26015__$1 = inst_26022;
var state_26029__$1 = (function (){var statearr_26037 = state_26029;
(statearr_26037[(7)] = inst_26015__$1);

return statearr_26037;
})();
var statearr_26038_26051 = state_26029__$1;
(statearr_26038_26051[(2)] = null);

(statearr_26038_26051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26030 === (7))){
var inst_26025 = (state_26029[(2)]);
var state_26029__$1 = state_26029;
var statearr_26039_26052 = state_26029__$1;
(statearr_26039_26052[(2)] = inst_26025);

(statearr_26039_26052[(1)] = (3));


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
});})(c__21347__auto__))
;
return ((function (switch__21285__auto__,c__21347__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21286__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21286__auto____0 = (function (){
var statearr_26043 = [null,null,null,null,null,null,null,null,null];
(statearr_26043[(0)] = cljs$core$async$reduce_$_state_machine__21286__auto__);

(statearr_26043[(1)] = (1));

return statearr_26043;
});
var cljs$core$async$reduce_$_state_machine__21286__auto____1 = (function (state_26029){
while(true){
var ret_value__21287__auto__ = (function (){try{while(true){
var result__21288__auto__ = switch__21285__auto__.call(null,state_26029);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21288__auto__;
}
break;
}
}catch (e26044){if((e26044 instanceof Object)){
var ex__21289__auto__ = e26044;
var statearr_26045_26053 = state_26029;
(statearr_26045_26053[(5)] = ex__21289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26029);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26044;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26054 = state_26029;
state_26029 = G__26054;
continue;
} else {
return ret_value__21287__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21286__auto__ = function(state_26029){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21286__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21286__auto____1.call(this,state_26029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21286__auto____0;
cljs$core$async$reduce_$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21286__auto____1;
return cljs$core$async$reduce_$_state_machine__21286__auto__;
})()
;})(switch__21285__auto__,c__21347__auto__))
})();
var state__21349__auto__ = (function (){var statearr_26046 = f__21348__auto__.call(null);
(statearr_26046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21347__auto__);

return statearr_26046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21349__auto__);
});})(c__21347__auto__))
);

return c__21347__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__26056 = arguments.length;
switch (G__26056) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21347__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21347__auto__){
return (function (){
var f__21348__auto__ = (function (){var switch__21285__auto__ = ((function (c__21347__auto__){
return (function (state_26081){
var state_val_26082 = (state_26081[(1)]);
if((state_val_26082 === (7))){
var inst_26063 = (state_26081[(2)]);
var state_26081__$1 = state_26081;
var statearr_26083_26107 = state_26081__$1;
(statearr_26083_26107[(2)] = inst_26063);

(statearr_26083_26107[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26082 === (1))){
var inst_26057 = cljs.core.seq.call(null,coll);
var inst_26058 = inst_26057;
var state_26081__$1 = (function (){var statearr_26084 = state_26081;
(statearr_26084[(7)] = inst_26058);

return statearr_26084;
})();
var statearr_26085_26108 = state_26081__$1;
(statearr_26085_26108[(2)] = null);

(statearr_26085_26108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26082 === (4))){
var inst_26058 = (state_26081[(7)]);
var inst_26061 = cljs.core.first.call(null,inst_26058);
var state_26081__$1 = state_26081;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26081__$1,(7),ch,inst_26061);
} else {
if((state_val_26082 === (13))){
var inst_26075 = (state_26081[(2)]);
var state_26081__$1 = state_26081;
var statearr_26086_26109 = state_26081__$1;
(statearr_26086_26109[(2)] = inst_26075);

(statearr_26086_26109[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26082 === (6))){
var inst_26066 = (state_26081[(2)]);
var state_26081__$1 = state_26081;
if(cljs.core.truth_(inst_26066)){
var statearr_26087_26110 = state_26081__$1;
(statearr_26087_26110[(1)] = (8));

} else {
var statearr_26088_26111 = state_26081__$1;
(statearr_26088_26111[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26082 === (3))){
var inst_26079 = (state_26081[(2)]);
var state_26081__$1 = state_26081;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26081__$1,inst_26079);
} else {
if((state_val_26082 === (12))){
var state_26081__$1 = state_26081;
var statearr_26089_26112 = state_26081__$1;
(statearr_26089_26112[(2)] = null);

(statearr_26089_26112[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26082 === (2))){
var inst_26058 = (state_26081[(7)]);
var state_26081__$1 = state_26081;
if(cljs.core.truth_(inst_26058)){
var statearr_26090_26113 = state_26081__$1;
(statearr_26090_26113[(1)] = (4));

} else {
var statearr_26091_26114 = state_26081__$1;
(statearr_26091_26114[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26082 === (11))){
var inst_26072 = cljs.core.async.close_BANG_.call(null,ch);
var state_26081__$1 = state_26081;
var statearr_26092_26115 = state_26081__$1;
(statearr_26092_26115[(2)] = inst_26072);

(statearr_26092_26115[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26082 === (9))){
var state_26081__$1 = state_26081;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26093_26116 = state_26081__$1;
(statearr_26093_26116[(1)] = (11));

} else {
var statearr_26094_26117 = state_26081__$1;
(statearr_26094_26117[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26082 === (5))){
var inst_26058 = (state_26081[(7)]);
var state_26081__$1 = state_26081;
var statearr_26095_26118 = state_26081__$1;
(statearr_26095_26118[(2)] = inst_26058);

(statearr_26095_26118[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26082 === (10))){
var inst_26077 = (state_26081[(2)]);
var state_26081__$1 = state_26081;
var statearr_26096_26119 = state_26081__$1;
(statearr_26096_26119[(2)] = inst_26077);

(statearr_26096_26119[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26082 === (8))){
var inst_26058 = (state_26081[(7)]);
var inst_26068 = cljs.core.next.call(null,inst_26058);
var inst_26058__$1 = inst_26068;
var state_26081__$1 = (function (){var statearr_26097 = state_26081;
(statearr_26097[(7)] = inst_26058__$1);

return statearr_26097;
})();
var statearr_26098_26120 = state_26081__$1;
(statearr_26098_26120[(2)] = null);

(statearr_26098_26120[(1)] = (2));


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
});})(c__21347__auto__))
;
return ((function (switch__21285__auto__,c__21347__auto__){
return (function() {
var cljs$core$async$state_machine__21286__auto__ = null;
var cljs$core$async$state_machine__21286__auto____0 = (function (){
var statearr_26102 = [null,null,null,null,null,null,null,null];
(statearr_26102[(0)] = cljs$core$async$state_machine__21286__auto__);

(statearr_26102[(1)] = (1));

return statearr_26102;
});
var cljs$core$async$state_machine__21286__auto____1 = (function (state_26081){
while(true){
var ret_value__21287__auto__ = (function (){try{while(true){
var result__21288__auto__ = switch__21285__auto__.call(null,state_26081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21288__auto__;
}
break;
}
}catch (e26103){if((e26103 instanceof Object)){
var ex__21289__auto__ = e26103;
var statearr_26104_26121 = state_26081;
(statearr_26104_26121[(5)] = ex__21289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26103;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26122 = state_26081;
state_26081 = G__26122;
continue;
} else {
return ret_value__21287__auto__;
}
break;
}
});
cljs$core$async$state_machine__21286__auto__ = function(state_26081){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21286__auto____1.call(this,state_26081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21286__auto____0;
cljs$core$async$state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21286__auto____1;
return cljs$core$async$state_machine__21286__auto__;
})()
;})(switch__21285__auto__,c__21347__auto__))
})();
var state__21349__auto__ = (function (){var statearr_26105 = f__21348__auto__.call(null);
(statearr_26105[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21347__auto__);

return statearr_26105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21349__auto__);
});})(c__21347__auto__))
);

return c__21347__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj26124 = {};
return obj26124;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__18108__auto__ = _;
if(and__18108__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__18108__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__18756__auto__ = (((_ == null))?null:_);
return (function (){var or__18120__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__18756__auto__)]);
if(or__18120__auto__){
return or__18120__auto__;
} else {
var or__18120__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__18120__auto____$1){
return or__18120__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj26126 = {};
return obj26126;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__18108__auto__ = m;
if(and__18108__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__18108__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__18756__auto__ = (((m == null))?null:m);
return (function (){var or__18120__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__18756__auto__)]);
if(or__18120__auto__){
return or__18120__auto__;
} else {
var or__18120__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__18120__auto____$1){
return or__18120__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__18108__auto__ = m;
if(and__18108__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__18108__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__18756__auto__ = (((m == null))?null:m);
return (function (){var or__18120__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__18756__auto__)]);
if(or__18120__auto__){
return or__18120__auto__;
} else {
var or__18120__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__18120__auto____$1){
return or__18120__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__18108__auto__ = m;
if(and__18108__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__18108__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__18756__auto__ = (((m == null))?null:m);
return (function (){var or__18120__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__18756__auto__)]);
if(or__18120__auto__){
return or__18120__auto__;
} else {
var or__18120__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__18120__auto____$1){
return or__18120__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t26348 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26348 = (function (mult,ch,cs,meta26349){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta26349 = meta26349;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26348.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26350,meta26349__$1){
var self__ = this;
var _26350__$1 = this;
return (new cljs.core.async.t26348(self__.mult,self__.ch,self__.cs,meta26349__$1));
});})(cs))
;

cljs.core.async.t26348.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26350){
var self__ = this;
var _26350__$1 = this;
return self__.meta26349;
});})(cs))
;

cljs.core.async.t26348.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26348.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t26348.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t26348.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t26348.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t26348.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t26348.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta26349","meta26349",-226815518,null)], null);
});})(cs))
;

cljs.core.async.t26348.cljs$lang$type = true;

cljs.core.async.t26348.cljs$lang$ctorStr = "cljs.core.async/t26348";

cljs.core.async.t26348.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18699__auto__,writer__18700__auto__,opt__18701__auto__){
return cljs.core._write.call(null,writer__18700__auto__,"cljs.core.async/t26348");
});})(cs))
;

cljs.core.async.__GT_t26348 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t26348(mult__$1,ch__$1,cs__$1,meta26349){
return (new cljs.core.async.t26348(mult__$1,ch__$1,cs__$1,meta26349));
});})(cs))
;

}

return (new cljs.core.async.t26348(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__21347__auto___26569 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21347__auto___26569,cs,m,dchan,dctr,done){
return (function (){
var f__21348__auto__ = (function (){var switch__21285__auto__ = ((function (c__21347__auto___26569,cs,m,dchan,dctr,done){
return (function (state_26481){
var state_val_26482 = (state_26481[(1)]);
if((state_val_26482 === (7))){
var inst_26477 = (state_26481[(2)]);
var state_26481__$1 = state_26481;
var statearr_26483_26570 = state_26481__$1;
(statearr_26483_26570[(2)] = inst_26477);

(statearr_26483_26570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (20))){
var inst_26382 = (state_26481[(7)]);
var inst_26392 = cljs.core.first.call(null,inst_26382);
var inst_26393 = cljs.core.nth.call(null,inst_26392,(0),null);
var inst_26394 = cljs.core.nth.call(null,inst_26392,(1),null);
var state_26481__$1 = (function (){var statearr_26484 = state_26481;
(statearr_26484[(8)] = inst_26393);

return statearr_26484;
})();
if(cljs.core.truth_(inst_26394)){
var statearr_26485_26571 = state_26481__$1;
(statearr_26485_26571[(1)] = (22));

} else {
var statearr_26486_26572 = state_26481__$1;
(statearr_26486_26572[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (27))){
var inst_26353 = (state_26481[(9)]);
var inst_26424 = (state_26481[(10)]);
var inst_26422 = (state_26481[(11)]);
var inst_26429 = (state_26481[(12)]);
var inst_26429__$1 = cljs.core._nth.call(null,inst_26422,inst_26424);
var inst_26430 = cljs.core.async.put_BANG_.call(null,inst_26429__$1,inst_26353,done);
var state_26481__$1 = (function (){var statearr_26487 = state_26481;
(statearr_26487[(12)] = inst_26429__$1);

return statearr_26487;
})();
if(cljs.core.truth_(inst_26430)){
var statearr_26488_26573 = state_26481__$1;
(statearr_26488_26573[(1)] = (30));

} else {
var statearr_26489_26574 = state_26481__$1;
(statearr_26489_26574[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (1))){
var state_26481__$1 = state_26481;
var statearr_26490_26575 = state_26481__$1;
(statearr_26490_26575[(2)] = null);

(statearr_26490_26575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (24))){
var inst_26382 = (state_26481[(7)]);
var inst_26399 = (state_26481[(2)]);
var inst_26400 = cljs.core.next.call(null,inst_26382);
var inst_26362 = inst_26400;
var inst_26363 = null;
var inst_26364 = (0);
var inst_26365 = (0);
var state_26481__$1 = (function (){var statearr_26491 = state_26481;
(statearr_26491[(13)] = inst_26364);

(statearr_26491[(14)] = inst_26399);

(statearr_26491[(15)] = inst_26362);

(statearr_26491[(16)] = inst_26363);

(statearr_26491[(17)] = inst_26365);

return statearr_26491;
})();
var statearr_26492_26576 = state_26481__$1;
(statearr_26492_26576[(2)] = null);

(statearr_26492_26576[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (39))){
var state_26481__$1 = state_26481;
var statearr_26496_26577 = state_26481__$1;
(statearr_26496_26577[(2)] = null);

(statearr_26496_26577[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (4))){
var inst_26353 = (state_26481[(9)]);
var inst_26353__$1 = (state_26481[(2)]);
var inst_26354 = (inst_26353__$1 == null);
var state_26481__$1 = (function (){var statearr_26497 = state_26481;
(statearr_26497[(9)] = inst_26353__$1);

return statearr_26497;
})();
if(cljs.core.truth_(inst_26354)){
var statearr_26498_26578 = state_26481__$1;
(statearr_26498_26578[(1)] = (5));

} else {
var statearr_26499_26579 = state_26481__$1;
(statearr_26499_26579[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (15))){
var inst_26364 = (state_26481[(13)]);
var inst_26362 = (state_26481[(15)]);
var inst_26363 = (state_26481[(16)]);
var inst_26365 = (state_26481[(17)]);
var inst_26378 = (state_26481[(2)]);
var inst_26379 = (inst_26365 + (1));
var tmp26493 = inst_26364;
var tmp26494 = inst_26362;
var tmp26495 = inst_26363;
var inst_26362__$1 = tmp26494;
var inst_26363__$1 = tmp26495;
var inst_26364__$1 = tmp26493;
var inst_26365__$1 = inst_26379;
var state_26481__$1 = (function (){var statearr_26500 = state_26481;
(statearr_26500[(13)] = inst_26364__$1);

(statearr_26500[(18)] = inst_26378);

(statearr_26500[(15)] = inst_26362__$1);

(statearr_26500[(16)] = inst_26363__$1);

(statearr_26500[(17)] = inst_26365__$1);

return statearr_26500;
})();
var statearr_26501_26580 = state_26481__$1;
(statearr_26501_26580[(2)] = null);

(statearr_26501_26580[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (21))){
var inst_26403 = (state_26481[(2)]);
var state_26481__$1 = state_26481;
var statearr_26505_26581 = state_26481__$1;
(statearr_26505_26581[(2)] = inst_26403);

(statearr_26505_26581[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (31))){
var inst_26429 = (state_26481[(12)]);
var inst_26433 = done.call(null,null);
var inst_26434 = cljs.core.async.untap_STAR_.call(null,m,inst_26429);
var state_26481__$1 = (function (){var statearr_26506 = state_26481;
(statearr_26506[(19)] = inst_26433);

return statearr_26506;
})();
var statearr_26507_26582 = state_26481__$1;
(statearr_26507_26582[(2)] = inst_26434);

(statearr_26507_26582[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (32))){
var inst_26423 = (state_26481[(20)]);
var inst_26424 = (state_26481[(10)]);
var inst_26421 = (state_26481[(21)]);
var inst_26422 = (state_26481[(11)]);
var inst_26436 = (state_26481[(2)]);
var inst_26437 = (inst_26424 + (1));
var tmp26502 = inst_26423;
var tmp26503 = inst_26421;
var tmp26504 = inst_26422;
var inst_26421__$1 = tmp26503;
var inst_26422__$1 = tmp26504;
var inst_26423__$1 = tmp26502;
var inst_26424__$1 = inst_26437;
var state_26481__$1 = (function (){var statearr_26508 = state_26481;
(statearr_26508[(20)] = inst_26423__$1);

(statearr_26508[(10)] = inst_26424__$1);

(statearr_26508[(21)] = inst_26421__$1);

(statearr_26508[(11)] = inst_26422__$1);

(statearr_26508[(22)] = inst_26436);

return statearr_26508;
})();
var statearr_26509_26583 = state_26481__$1;
(statearr_26509_26583[(2)] = null);

(statearr_26509_26583[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (40))){
var inst_26449 = (state_26481[(23)]);
var inst_26453 = done.call(null,null);
var inst_26454 = cljs.core.async.untap_STAR_.call(null,m,inst_26449);
var state_26481__$1 = (function (){var statearr_26510 = state_26481;
(statearr_26510[(24)] = inst_26453);

return statearr_26510;
})();
var statearr_26511_26584 = state_26481__$1;
(statearr_26511_26584[(2)] = inst_26454);

(statearr_26511_26584[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (33))){
var inst_26440 = (state_26481[(25)]);
var inst_26442 = cljs.core.chunked_seq_QMARK_.call(null,inst_26440);
var state_26481__$1 = state_26481;
if(inst_26442){
var statearr_26512_26585 = state_26481__$1;
(statearr_26512_26585[(1)] = (36));

} else {
var statearr_26513_26586 = state_26481__$1;
(statearr_26513_26586[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (13))){
var inst_26372 = (state_26481[(26)]);
var inst_26375 = cljs.core.async.close_BANG_.call(null,inst_26372);
var state_26481__$1 = state_26481;
var statearr_26514_26587 = state_26481__$1;
(statearr_26514_26587[(2)] = inst_26375);

(statearr_26514_26587[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (22))){
var inst_26393 = (state_26481[(8)]);
var inst_26396 = cljs.core.async.close_BANG_.call(null,inst_26393);
var state_26481__$1 = state_26481;
var statearr_26515_26588 = state_26481__$1;
(statearr_26515_26588[(2)] = inst_26396);

(statearr_26515_26588[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (36))){
var inst_26440 = (state_26481[(25)]);
var inst_26444 = cljs.core.chunk_first.call(null,inst_26440);
var inst_26445 = cljs.core.chunk_rest.call(null,inst_26440);
var inst_26446 = cljs.core.count.call(null,inst_26444);
var inst_26421 = inst_26445;
var inst_26422 = inst_26444;
var inst_26423 = inst_26446;
var inst_26424 = (0);
var state_26481__$1 = (function (){var statearr_26516 = state_26481;
(statearr_26516[(20)] = inst_26423);

(statearr_26516[(10)] = inst_26424);

(statearr_26516[(21)] = inst_26421);

(statearr_26516[(11)] = inst_26422);

return statearr_26516;
})();
var statearr_26517_26589 = state_26481__$1;
(statearr_26517_26589[(2)] = null);

(statearr_26517_26589[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (41))){
var inst_26440 = (state_26481[(25)]);
var inst_26456 = (state_26481[(2)]);
var inst_26457 = cljs.core.next.call(null,inst_26440);
var inst_26421 = inst_26457;
var inst_26422 = null;
var inst_26423 = (0);
var inst_26424 = (0);
var state_26481__$1 = (function (){var statearr_26518 = state_26481;
(statearr_26518[(20)] = inst_26423);

(statearr_26518[(10)] = inst_26424);

(statearr_26518[(21)] = inst_26421);

(statearr_26518[(11)] = inst_26422);

(statearr_26518[(27)] = inst_26456);

return statearr_26518;
})();
var statearr_26519_26590 = state_26481__$1;
(statearr_26519_26590[(2)] = null);

(statearr_26519_26590[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (43))){
var state_26481__$1 = state_26481;
var statearr_26520_26591 = state_26481__$1;
(statearr_26520_26591[(2)] = null);

(statearr_26520_26591[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (29))){
var inst_26465 = (state_26481[(2)]);
var state_26481__$1 = state_26481;
var statearr_26521_26592 = state_26481__$1;
(statearr_26521_26592[(2)] = inst_26465);

(statearr_26521_26592[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (44))){
var inst_26474 = (state_26481[(2)]);
var state_26481__$1 = (function (){var statearr_26522 = state_26481;
(statearr_26522[(28)] = inst_26474);

return statearr_26522;
})();
var statearr_26523_26593 = state_26481__$1;
(statearr_26523_26593[(2)] = null);

(statearr_26523_26593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (6))){
var inst_26413 = (state_26481[(29)]);
var inst_26412 = cljs.core.deref.call(null,cs);
var inst_26413__$1 = cljs.core.keys.call(null,inst_26412);
var inst_26414 = cljs.core.count.call(null,inst_26413__$1);
var inst_26415 = cljs.core.reset_BANG_.call(null,dctr,inst_26414);
var inst_26420 = cljs.core.seq.call(null,inst_26413__$1);
var inst_26421 = inst_26420;
var inst_26422 = null;
var inst_26423 = (0);
var inst_26424 = (0);
var state_26481__$1 = (function (){var statearr_26524 = state_26481;
(statearr_26524[(20)] = inst_26423);

(statearr_26524[(10)] = inst_26424);

(statearr_26524[(21)] = inst_26421);

(statearr_26524[(29)] = inst_26413__$1);

(statearr_26524[(11)] = inst_26422);

(statearr_26524[(30)] = inst_26415);

return statearr_26524;
})();
var statearr_26525_26594 = state_26481__$1;
(statearr_26525_26594[(2)] = null);

(statearr_26525_26594[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (28))){
var inst_26440 = (state_26481[(25)]);
var inst_26421 = (state_26481[(21)]);
var inst_26440__$1 = cljs.core.seq.call(null,inst_26421);
var state_26481__$1 = (function (){var statearr_26526 = state_26481;
(statearr_26526[(25)] = inst_26440__$1);

return statearr_26526;
})();
if(inst_26440__$1){
var statearr_26527_26595 = state_26481__$1;
(statearr_26527_26595[(1)] = (33));

} else {
var statearr_26528_26596 = state_26481__$1;
(statearr_26528_26596[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (25))){
var inst_26423 = (state_26481[(20)]);
var inst_26424 = (state_26481[(10)]);
var inst_26426 = (inst_26424 < inst_26423);
var inst_26427 = inst_26426;
var state_26481__$1 = state_26481;
if(cljs.core.truth_(inst_26427)){
var statearr_26529_26597 = state_26481__$1;
(statearr_26529_26597[(1)] = (27));

} else {
var statearr_26530_26598 = state_26481__$1;
(statearr_26530_26598[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (34))){
var state_26481__$1 = state_26481;
var statearr_26531_26599 = state_26481__$1;
(statearr_26531_26599[(2)] = null);

(statearr_26531_26599[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (17))){
var state_26481__$1 = state_26481;
var statearr_26532_26600 = state_26481__$1;
(statearr_26532_26600[(2)] = null);

(statearr_26532_26600[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (3))){
var inst_26479 = (state_26481[(2)]);
var state_26481__$1 = state_26481;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26481__$1,inst_26479);
} else {
if((state_val_26482 === (12))){
var inst_26408 = (state_26481[(2)]);
var state_26481__$1 = state_26481;
var statearr_26533_26601 = state_26481__$1;
(statearr_26533_26601[(2)] = inst_26408);

(statearr_26533_26601[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (2))){
var state_26481__$1 = state_26481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26481__$1,(4),ch);
} else {
if((state_val_26482 === (23))){
var state_26481__$1 = state_26481;
var statearr_26534_26602 = state_26481__$1;
(statearr_26534_26602[(2)] = null);

(statearr_26534_26602[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (35))){
var inst_26463 = (state_26481[(2)]);
var state_26481__$1 = state_26481;
var statearr_26535_26603 = state_26481__$1;
(statearr_26535_26603[(2)] = inst_26463);

(statearr_26535_26603[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (19))){
var inst_26382 = (state_26481[(7)]);
var inst_26386 = cljs.core.chunk_first.call(null,inst_26382);
var inst_26387 = cljs.core.chunk_rest.call(null,inst_26382);
var inst_26388 = cljs.core.count.call(null,inst_26386);
var inst_26362 = inst_26387;
var inst_26363 = inst_26386;
var inst_26364 = inst_26388;
var inst_26365 = (0);
var state_26481__$1 = (function (){var statearr_26536 = state_26481;
(statearr_26536[(13)] = inst_26364);

(statearr_26536[(15)] = inst_26362);

(statearr_26536[(16)] = inst_26363);

(statearr_26536[(17)] = inst_26365);

return statearr_26536;
})();
var statearr_26537_26604 = state_26481__$1;
(statearr_26537_26604[(2)] = null);

(statearr_26537_26604[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (11))){
var inst_26382 = (state_26481[(7)]);
var inst_26362 = (state_26481[(15)]);
var inst_26382__$1 = cljs.core.seq.call(null,inst_26362);
var state_26481__$1 = (function (){var statearr_26538 = state_26481;
(statearr_26538[(7)] = inst_26382__$1);

return statearr_26538;
})();
if(inst_26382__$1){
var statearr_26539_26605 = state_26481__$1;
(statearr_26539_26605[(1)] = (16));

} else {
var statearr_26540_26606 = state_26481__$1;
(statearr_26540_26606[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (9))){
var inst_26410 = (state_26481[(2)]);
var state_26481__$1 = state_26481;
var statearr_26541_26607 = state_26481__$1;
(statearr_26541_26607[(2)] = inst_26410);

(statearr_26541_26607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (5))){
var inst_26360 = cljs.core.deref.call(null,cs);
var inst_26361 = cljs.core.seq.call(null,inst_26360);
var inst_26362 = inst_26361;
var inst_26363 = null;
var inst_26364 = (0);
var inst_26365 = (0);
var state_26481__$1 = (function (){var statearr_26542 = state_26481;
(statearr_26542[(13)] = inst_26364);

(statearr_26542[(15)] = inst_26362);

(statearr_26542[(16)] = inst_26363);

(statearr_26542[(17)] = inst_26365);

return statearr_26542;
})();
var statearr_26543_26608 = state_26481__$1;
(statearr_26543_26608[(2)] = null);

(statearr_26543_26608[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (14))){
var state_26481__$1 = state_26481;
var statearr_26544_26609 = state_26481__$1;
(statearr_26544_26609[(2)] = null);

(statearr_26544_26609[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (45))){
var inst_26471 = (state_26481[(2)]);
var state_26481__$1 = state_26481;
var statearr_26545_26610 = state_26481__$1;
(statearr_26545_26610[(2)] = inst_26471);

(statearr_26545_26610[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (26))){
var inst_26413 = (state_26481[(29)]);
var inst_26467 = (state_26481[(2)]);
var inst_26468 = cljs.core.seq.call(null,inst_26413);
var state_26481__$1 = (function (){var statearr_26546 = state_26481;
(statearr_26546[(31)] = inst_26467);

return statearr_26546;
})();
if(inst_26468){
var statearr_26547_26611 = state_26481__$1;
(statearr_26547_26611[(1)] = (42));

} else {
var statearr_26548_26612 = state_26481__$1;
(statearr_26548_26612[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (16))){
var inst_26382 = (state_26481[(7)]);
var inst_26384 = cljs.core.chunked_seq_QMARK_.call(null,inst_26382);
var state_26481__$1 = state_26481;
if(inst_26384){
var statearr_26549_26613 = state_26481__$1;
(statearr_26549_26613[(1)] = (19));

} else {
var statearr_26550_26614 = state_26481__$1;
(statearr_26550_26614[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (38))){
var inst_26460 = (state_26481[(2)]);
var state_26481__$1 = state_26481;
var statearr_26551_26615 = state_26481__$1;
(statearr_26551_26615[(2)] = inst_26460);

(statearr_26551_26615[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (30))){
var state_26481__$1 = state_26481;
var statearr_26552_26616 = state_26481__$1;
(statearr_26552_26616[(2)] = null);

(statearr_26552_26616[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (10))){
var inst_26363 = (state_26481[(16)]);
var inst_26365 = (state_26481[(17)]);
var inst_26371 = cljs.core._nth.call(null,inst_26363,inst_26365);
var inst_26372 = cljs.core.nth.call(null,inst_26371,(0),null);
var inst_26373 = cljs.core.nth.call(null,inst_26371,(1),null);
var state_26481__$1 = (function (){var statearr_26553 = state_26481;
(statearr_26553[(26)] = inst_26372);

return statearr_26553;
})();
if(cljs.core.truth_(inst_26373)){
var statearr_26554_26617 = state_26481__$1;
(statearr_26554_26617[(1)] = (13));

} else {
var statearr_26555_26618 = state_26481__$1;
(statearr_26555_26618[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (18))){
var inst_26406 = (state_26481[(2)]);
var state_26481__$1 = state_26481;
var statearr_26556_26619 = state_26481__$1;
(statearr_26556_26619[(2)] = inst_26406);

(statearr_26556_26619[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (42))){
var state_26481__$1 = state_26481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26481__$1,(45),dchan);
} else {
if((state_val_26482 === (37))){
var inst_26440 = (state_26481[(25)]);
var inst_26353 = (state_26481[(9)]);
var inst_26449 = (state_26481[(23)]);
var inst_26449__$1 = cljs.core.first.call(null,inst_26440);
var inst_26450 = cljs.core.async.put_BANG_.call(null,inst_26449__$1,inst_26353,done);
var state_26481__$1 = (function (){var statearr_26557 = state_26481;
(statearr_26557[(23)] = inst_26449__$1);

return statearr_26557;
})();
if(cljs.core.truth_(inst_26450)){
var statearr_26558_26620 = state_26481__$1;
(statearr_26558_26620[(1)] = (39));

} else {
var statearr_26559_26621 = state_26481__$1;
(statearr_26559_26621[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (8))){
var inst_26364 = (state_26481[(13)]);
var inst_26365 = (state_26481[(17)]);
var inst_26367 = (inst_26365 < inst_26364);
var inst_26368 = inst_26367;
var state_26481__$1 = state_26481;
if(cljs.core.truth_(inst_26368)){
var statearr_26560_26622 = state_26481__$1;
(statearr_26560_26622[(1)] = (10));

} else {
var statearr_26561_26623 = state_26481__$1;
(statearr_26561_26623[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__21347__auto___26569,cs,m,dchan,dctr,done))
;
return ((function (switch__21285__auto__,c__21347__auto___26569,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21286__auto__ = null;
var cljs$core$async$mult_$_state_machine__21286__auto____0 = (function (){
var statearr_26565 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26565[(0)] = cljs$core$async$mult_$_state_machine__21286__auto__);

(statearr_26565[(1)] = (1));

return statearr_26565;
});
var cljs$core$async$mult_$_state_machine__21286__auto____1 = (function (state_26481){
while(true){
var ret_value__21287__auto__ = (function (){try{while(true){
var result__21288__auto__ = switch__21285__auto__.call(null,state_26481);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21288__auto__;
}
break;
}
}catch (e26566){if((e26566 instanceof Object)){
var ex__21289__auto__ = e26566;
var statearr_26567_26624 = state_26481;
(statearr_26567_26624[(5)] = ex__21289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26566;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26625 = state_26481;
state_26481 = G__26625;
continue;
} else {
return ret_value__21287__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21286__auto__ = function(state_26481){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21286__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21286__auto____1.call(this,state_26481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21286__auto____0;
cljs$core$async$mult_$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21286__auto____1;
return cljs$core$async$mult_$_state_machine__21286__auto__;
})()
;})(switch__21285__auto__,c__21347__auto___26569,cs,m,dchan,dctr,done))
})();
var state__21349__auto__ = (function (){var statearr_26568 = f__21348__auto__.call(null);
(statearr_26568[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21347__auto___26569);

return statearr_26568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21349__auto__);
});})(c__21347__auto___26569,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__26627 = arguments.length;
switch (G__26627) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj26630 = {};
return obj26630;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__18108__auto__ = m;
if(and__18108__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__18108__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__18756__auto__ = (((m == null))?null:m);
return (function (){var or__18120__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__18756__auto__)]);
if(or__18120__auto__){
return or__18120__auto__;
} else {
var or__18120__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__18120__auto____$1){
return or__18120__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__18108__auto__ = m;
if(and__18108__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__18108__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__18756__auto__ = (((m == null))?null:m);
return (function (){var or__18120__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__18756__auto__)]);
if(or__18120__auto__){
return or__18120__auto__;
} else {
var or__18120__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__18120__auto____$1){
return or__18120__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__18108__auto__ = m;
if(and__18108__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__18108__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__18756__auto__ = (((m == null))?null:m);
return (function (){var or__18120__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__18756__auto__)]);
if(or__18120__auto__){
return or__18120__auto__;
} else {
var or__18120__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__18120__auto____$1){
return or__18120__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__18108__auto__ = m;
if(and__18108__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__18108__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__18756__auto__ = (((m == null))?null:m);
return (function (){var or__18120__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__18756__auto__)]);
if(or__18120__auto__){
return or__18120__auto__;
} else {
var or__18120__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__18120__auto____$1){
return or__18120__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__18108__auto__ = m;
if(and__18108__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__18108__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__18756__auto__ = (((m == null))?null:m);
return (function (){var or__18120__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__18756__auto__)]);
if(or__18120__auto__){
return or__18120__auto__;
} else {
var or__18120__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__18120__auto____$1){
return or__18120__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__19160__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19160__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26635){
var map__26636 = p__26635;
var map__26636__$1 = ((cljs.core.seq_QMARK_.call(null,map__26636))?cljs.core.apply.call(null,cljs.core.hash_map,map__26636):map__26636);
var opts = map__26636__$1;
var statearr_26637_26640 = state;
(statearr_26637_26640[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4422__auto__ = cljs.core.async.do_alts.call(null,((function (map__26636,map__26636__$1,opts){
return (function (val){
var statearr_26638_26641 = state;
(statearr_26638_26641[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26636,map__26636__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4422__auto__)){
var cb = temp__4422__auto__;
var statearr_26639_26642 = state;
(statearr_26639_26642[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26631){
var G__26632 = cljs.core.first.call(null,seq26631);
var seq26631__$1 = cljs.core.next.call(null,seq26631);
var G__26633 = cljs.core.first.call(null,seq26631__$1);
var seq26631__$2 = cljs.core.next.call(null,seq26631__$1);
var G__26634 = cljs.core.first.call(null,seq26631__$2);
var seq26631__$3 = cljs.core.next.call(null,seq26631__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26632,G__26633,G__26634,seq26631__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t26762 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26762 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26763){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta26763 = meta26763;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26762.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26764,meta26763__$1){
var self__ = this;
var _26764__$1 = this;
return (new cljs.core.async.t26762(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26763__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26762.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26764){
var self__ = this;
var _26764__$1 = this;
return self__.meta26763;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26762.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26762.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26762.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t26762.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26762.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26762.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26762.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26762.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26762.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta26763","meta26763",-1755990429,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26762.cljs$lang$type = true;

cljs.core.async.t26762.cljs$lang$ctorStr = "cljs.core.async/t26762";

cljs.core.async.t26762.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18699__auto__,writer__18700__auto__,opt__18701__auto__){
return cljs.core._write.call(null,writer__18700__auto__,"cljs.core.async/t26762");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t26762 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t26762(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26763){
return (new cljs.core.async.t26762(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26763));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t26762(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21347__auto___26881 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21347__auto___26881,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21348__auto__ = (function (){var switch__21285__auto__ = ((function (c__21347__auto___26881,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26834){
var state_val_26835 = (state_26834[(1)]);
if((state_val_26835 === (7))){
var inst_26778 = (state_26834[(7)]);
var inst_26783 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26778);
var state_26834__$1 = state_26834;
var statearr_26836_26882 = state_26834__$1;
(statearr_26836_26882[(2)] = inst_26783);

(statearr_26836_26882[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26835 === (20))){
var inst_26793 = (state_26834[(8)]);
var state_26834__$1 = state_26834;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26834__$1,(23),out,inst_26793);
} else {
if((state_val_26835 === (1))){
var inst_26768 = (state_26834[(9)]);
var inst_26768__$1 = calc_state.call(null);
var inst_26769 = cljs.core.seq_QMARK_.call(null,inst_26768__$1);
var state_26834__$1 = (function (){var statearr_26837 = state_26834;
(statearr_26837[(9)] = inst_26768__$1);

return statearr_26837;
})();
if(inst_26769){
var statearr_26838_26883 = state_26834__$1;
(statearr_26838_26883[(1)] = (2));

} else {
var statearr_26839_26884 = state_26834__$1;
(statearr_26839_26884[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26835 === (24))){
var inst_26786 = (state_26834[(10)]);
var inst_26778 = inst_26786;
var state_26834__$1 = (function (){var statearr_26840 = state_26834;
(statearr_26840[(7)] = inst_26778);

return statearr_26840;
})();
var statearr_26841_26885 = state_26834__$1;
(statearr_26841_26885[(2)] = null);

(statearr_26841_26885[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26835 === (4))){
var inst_26768 = (state_26834[(9)]);
var inst_26774 = (state_26834[(2)]);
var inst_26775 = cljs.core.get.call(null,inst_26774,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26776 = cljs.core.get.call(null,inst_26774,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26777 = cljs.core.get.call(null,inst_26774,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26778 = inst_26768;
var state_26834__$1 = (function (){var statearr_26842 = state_26834;
(statearr_26842[(11)] = inst_26776);

(statearr_26842[(7)] = inst_26778);

(statearr_26842[(12)] = inst_26777);

(statearr_26842[(13)] = inst_26775);

return statearr_26842;
})();
var statearr_26843_26886 = state_26834__$1;
(statearr_26843_26886[(2)] = null);

(statearr_26843_26886[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26835 === (15))){
var state_26834__$1 = state_26834;
var statearr_26844_26887 = state_26834__$1;
(statearr_26844_26887[(2)] = null);

(statearr_26844_26887[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26835 === (21))){
var inst_26786 = (state_26834[(10)]);
var inst_26778 = inst_26786;
var state_26834__$1 = (function (){var statearr_26845 = state_26834;
(statearr_26845[(7)] = inst_26778);

return statearr_26845;
})();
var statearr_26846_26888 = state_26834__$1;
(statearr_26846_26888[(2)] = null);

(statearr_26846_26888[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26835 === (13))){
var inst_26830 = (state_26834[(2)]);
var state_26834__$1 = state_26834;
var statearr_26847_26889 = state_26834__$1;
(statearr_26847_26889[(2)] = inst_26830);

(statearr_26847_26889[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26835 === (22))){
var inst_26828 = (state_26834[(2)]);
var state_26834__$1 = state_26834;
var statearr_26848_26890 = state_26834__$1;
(statearr_26848_26890[(2)] = inst_26828);

(statearr_26848_26890[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26835 === (6))){
var inst_26832 = (state_26834[(2)]);
var state_26834__$1 = state_26834;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26834__$1,inst_26832);
} else {
if((state_val_26835 === (25))){
var state_26834__$1 = state_26834;
var statearr_26849_26891 = state_26834__$1;
(statearr_26849_26891[(2)] = null);

(statearr_26849_26891[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26835 === (17))){
var inst_26808 = (state_26834[(14)]);
var state_26834__$1 = state_26834;
var statearr_26850_26892 = state_26834__$1;
(statearr_26850_26892[(2)] = inst_26808);

(statearr_26850_26892[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26835 === (3))){
var inst_26768 = (state_26834[(9)]);
var state_26834__$1 = state_26834;
var statearr_26851_26893 = state_26834__$1;
(statearr_26851_26893[(2)] = inst_26768);

(statearr_26851_26893[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26835 === (12))){
var inst_26787 = (state_26834[(15)]);
var inst_26808 = (state_26834[(14)]);
var inst_26794 = (state_26834[(16)]);
var inst_26808__$1 = inst_26787.call(null,inst_26794);
var state_26834__$1 = (function (){var statearr_26852 = state_26834;
(statearr_26852[(14)] = inst_26808__$1);

return statearr_26852;
})();
if(cljs.core.truth_(inst_26808__$1)){
var statearr_26853_26894 = state_26834__$1;
(statearr_26853_26894[(1)] = (17));

} else {
var statearr_26854_26895 = state_26834__$1;
(statearr_26854_26895[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26835 === (2))){
var inst_26768 = (state_26834[(9)]);
var inst_26771 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26768);
var state_26834__$1 = state_26834;
var statearr_26855_26896 = state_26834__$1;
(statearr_26855_26896[(2)] = inst_26771);

(statearr_26855_26896[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26835 === (23))){
var inst_26819 = (state_26834[(2)]);
var state_26834__$1 = state_26834;
if(cljs.core.truth_(inst_26819)){
var statearr_26856_26897 = state_26834__$1;
(statearr_26856_26897[(1)] = (24));

} else {
var statearr_26857_26898 = state_26834__$1;
(statearr_26857_26898[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26835 === (19))){
var inst_26816 = (state_26834[(2)]);
var state_26834__$1 = state_26834;
if(cljs.core.truth_(inst_26816)){
var statearr_26858_26899 = state_26834__$1;
(statearr_26858_26899[(1)] = (20));

} else {
var statearr_26859_26900 = state_26834__$1;
(statearr_26859_26900[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26835 === (11))){
var inst_26793 = (state_26834[(8)]);
var inst_26799 = (inst_26793 == null);
var state_26834__$1 = state_26834;
if(cljs.core.truth_(inst_26799)){
var statearr_26860_26901 = state_26834__$1;
(statearr_26860_26901[(1)] = (14));

} else {
var statearr_26861_26902 = state_26834__$1;
(statearr_26861_26902[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26835 === (9))){
var inst_26786 = (state_26834[(10)]);
var inst_26786__$1 = (state_26834[(2)]);
var inst_26787 = cljs.core.get.call(null,inst_26786__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26788 = cljs.core.get.call(null,inst_26786__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26789 = cljs.core.get.call(null,inst_26786__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26834__$1 = (function (){var statearr_26862 = state_26834;
(statearr_26862[(15)] = inst_26787);

(statearr_26862[(10)] = inst_26786__$1);

(statearr_26862[(17)] = inst_26788);

return statearr_26862;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26834__$1,(10),inst_26789);
} else {
if((state_val_26835 === (5))){
var inst_26778 = (state_26834[(7)]);
var inst_26781 = cljs.core.seq_QMARK_.call(null,inst_26778);
var state_26834__$1 = state_26834;
if(inst_26781){
var statearr_26863_26903 = state_26834__$1;
(statearr_26863_26903[(1)] = (7));

} else {
var statearr_26864_26904 = state_26834__$1;
(statearr_26864_26904[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26835 === (14))){
var inst_26794 = (state_26834[(16)]);
var inst_26801 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26794);
var state_26834__$1 = state_26834;
var statearr_26865_26905 = state_26834__$1;
(statearr_26865_26905[(2)] = inst_26801);

(statearr_26865_26905[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26835 === (26))){
var inst_26824 = (state_26834[(2)]);
var state_26834__$1 = state_26834;
var statearr_26866_26906 = state_26834__$1;
(statearr_26866_26906[(2)] = inst_26824);

(statearr_26866_26906[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26835 === (16))){
var inst_26804 = (state_26834[(2)]);
var inst_26805 = calc_state.call(null);
var inst_26778 = inst_26805;
var state_26834__$1 = (function (){var statearr_26867 = state_26834;
(statearr_26867[(18)] = inst_26804);

(statearr_26867[(7)] = inst_26778);

return statearr_26867;
})();
var statearr_26868_26907 = state_26834__$1;
(statearr_26868_26907[(2)] = null);

(statearr_26868_26907[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26835 === (10))){
var inst_26793 = (state_26834[(8)]);
var inst_26794 = (state_26834[(16)]);
var inst_26792 = (state_26834[(2)]);
var inst_26793__$1 = cljs.core.nth.call(null,inst_26792,(0),null);
var inst_26794__$1 = cljs.core.nth.call(null,inst_26792,(1),null);
var inst_26795 = (inst_26793__$1 == null);
var inst_26796 = cljs.core._EQ_.call(null,inst_26794__$1,change);
var inst_26797 = (inst_26795) || (inst_26796);
var state_26834__$1 = (function (){var statearr_26869 = state_26834;
(statearr_26869[(8)] = inst_26793__$1);

(statearr_26869[(16)] = inst_26794__$1);

return statearr_26869;
})();
if(cljs.core.truth_(inst_26797)){
var statearr_26870_26908 = state_26834__$1;
(statearr_26870_26908[(1)] = (11));

} else {
var statearr_26871_26909 = state_26834__$1;
(statearr_26871_26909[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26835 === (18))){
var inst_26787 = (state_26834[(15)]);
var inst_26788 = (state_26834[(17)]);
var inst_26794 = (state_26834[(16)]);
var inst_26811 = cljs.core.empty_QMARK_.call(null,inst_26787);
var inst_26812 = inst_26788.call(null,inst_26794);
var inst_26813 = cljs.core.not.call(null,inst_26812);
var inst_26814 = (inst_26811) && (inst_26813);
var state_26834__$1 = state_26834;
var statearr_26872_26910 = state_26834__$1;
(statearr_26872_26910[(2)] = inst_26814);

(statearr_26872_26910[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26835 === (8))){
var inst_26778 = (state_26834[(7)]);
var state_26834__$1 = state_26834;
var statearr_26873_26911 = state_26834__$1;
(statearr_26873_26911[(2)] = inst_26778);

(statearr_26873_26911[(1)] = (9));


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
});})(c__21347__auto___26881,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21285__auto__,c__21347__auto___26881,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21286__auto__ = null;
var cljs$core$async$mix_$_state_machine__21286__auto____0 = (function (){
var statearr_26877 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26877[(0)] = cljs$core$async$mix_$_state_machine__21286__auto__);

(statearr_26877[(1)] = (1));

return statearr_26877;
});
var cljs$core$async$mix_$_state_machine__21286__auto____1 = (function (state_26834){
while(true){
var ret_value__21287__auto__ = (function (){try{while(true){
var result__21288__auto__ = switch__21285__auto__.call(null,state_26834);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21288__auto__;
}
break;
}
}catch (e26878){if((e26878 instanceof Object)){
var ex__21289__auto__ = e26878;
var statearr_26879_26912 = state_26834;
(statearr_26879_26912[(5)] = ex__21289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26834);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26878;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26913 = state_26834;
state_26834 = G__26913;
continue;
} else {
return ret_value__21287__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21286__auto__ = function(state_26834){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21286__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21286__auto____1.call(this,state_26834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21286__auto____0;
cljs$core$async$mix_$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21286__auto____1;
return cljs$core$async$mix_$_state_machine__21286__auto__;
})()
;})(switch__21285__auto__,c__21347__auto___26881,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21349__auto__ = (function (){var statearr_26880 = f__21348__auto__.call(null);
(statearr_26880[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21347__auto___26881);

return statearr_26880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21349__auto__);
});})(c__21347__auto___26881,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj26915 = {};
return obj26915;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__18108__auto__ = p;
if(and__18108__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__18108__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__18756__auto__ = (((p == null))?null:p);
return (function (){var or__18120__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__18756__auto__)]);
if(or__18120__auto__){
return or__18120__auto__;
} else {
var or__18120__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__18120__auto____$1){
return or__18120__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__18108__auto__ = p;
if(and__18108__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__18108__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__18756__auto__ = (((p == null))?null:p);
return (function (){var or__18120__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__18756__auto__)]);
if(or__18120__auto__){
return or__18120__auto__;
} else {
var or__18120__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__18120__auto____$1){
return or__18120__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__26917 = arguments.length;
switch (G__26917) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__18108__auto__ = p;
if(and__18108__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__18108__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__18756__auto__ = (((p == null))?null:p);
return (function (){var or__18120__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18756__auto__)]);
if(or__18120__auto__){
return or__18120__auto__;
} else {
var or__18120__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__18120__auto____$1){
return or__18120__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__18108__auto__ = p;
if(and__18108__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__18108__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__18756__auto__ = (((p == null))?null:p);
return (function (){var or__18120__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18756__auto__)]);
if(or__18120__auto__){
return or__18120__auto__;
} else {
var or__18120__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__18120__auto____$1){
return or__18120__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__26921 = arguments.length;
switch (G__26921) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18120__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18120__auto__)){
return or__18120__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18120__auto__,mults){
return (function (p1__26919_SHARP_){
if(cljs.core.truth_(p1__26919_SHARP_.call(null,topic))){
return p1__26919_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26919_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18120__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t26922 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26922 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26923){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26923 = meta26923;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26922.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26924,meta26923__$1){
var self__ = this;
var _26924__$1 = this;
return (new cljs.core.async.t26922(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26923__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t26922.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26924){
var self__ = this;
var _26924__$1 = this;
return self__.meta26923;
});})(mults,ensure_mult))
;

cljs.core.async.t26922.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26922.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t26922.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t26922.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t26922.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4422__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4422__auto__)){
var m = temp__4422__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t26922.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t26922.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t26922.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26923","meta26923",-1992763042,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t26922.cljs$lang$type = true;

cljs.core.async.t26922.cljs$lang$ctorStr = "cljs.core.async/t26922";

cljs.core.async.t26922.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18699__auto__,writer__18700__auto__,opt__18701__auto__){
return cljs.core._write.call(null,writer__18700__auto__,"cljs.core.async/t26922");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t26922 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t26922(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26923){
return (new cljs.core.async.t26922(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26923));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t26922(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21347__auto___27045 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21347__auto___27045,mults,ensure_mult,p){
return (function (){
var f__21348__auto__ = (function (){var switch__21285__auto__ = ((function (c__21347__auto___27045,mults,ensure_mult,p){
return (function (state_26996){
var state_val_26997 = (state_26996[(1)]);
if((state_val_26997 === (7))){
var inst_26992 = (state_26996[(2)]);
var state_26996__$1 = state_26996;
var statearr_26998_27046 = state_26996__$1;
(statearr_26998_27046[(2)] = inst_26992);

(statearr_26998_27046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26997 === (20))){
var state_26996__$1 = state_26996;
var statearr_26999_27047 = state_26996__$1;
(statearr_26999_27047[(2)] = null);

(statearr_26999_27047[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26997 === (1))){
var state_26996__$1 = state_26996;
var statearr_27000_27048 = state_26996__$1;
(statearr_27000_27048[(2)] = null);

(statearr_27000_27048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26997 === (24))){
var inst_26975 = (state_26996[(7)]);
var inst_26984 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26975);
var state_26996__$1 = state_26996;
var statearr_27001_27049 = state_26996__$1;
(statearr_27001_27049[(2)] = inst_26984);

(statearr_27001_27049[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26997 === (4))){
var inst_26927 = (state_26996[(8)]);
var inst_26927__$1 = (state_26996[(2)]);
var inst_26928 = (inst_26927__$1 == null);
var state_26996__$1 = (function (){var statearr_27002 = state_26996;
(statearr_27002[(8)] = inst_26927__$1);

return statearr_27002;
})();
if(cljs.core.truth_(inst_26928)){
var statearr_27003_27050 = state_26996__$1;
(statearr_27003_27050[(1)] = (5));

} else {
var statearr_27004_27051 = state_26996__$1;
(statearr_27004_27051[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26997 === (15))){
var inst_26969 = (state_26996[(2)]);
var state_26996__$1 = state_26996;
var statearr_27005_27052 = state_26996__$1;
(statearr_27005_27052[(2)] = inst_26969);

(statearr_27005_27052[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26997 === (21))){
var inst_26989 = (state_26996[(2)]);
var state_26996__$1 = (function (){var statearr_27006 = state_26996;
(statearr_27006[(9)] = inst_26989);

return statearr_27006;
})();
var statearr_27007_27053 = state_26996__$1;
(statearr_27007_27053[(2)] = null);

(statearr_27007_27053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26997 === (13))){
var inst_26951 = (state_26996[(10)]);
var inst_26953 = cljs.core.chunked_seq_QMARK_.call(null,inst_26951);
var state_26996__$1 = state_26996;
if(inst_26953){
var statearr_27008_27054 = state_26996__$1;
(statearr_27008_27054[(1)] = (16));

} else {
var statearr_27009_27055 = state_26996__$1;
(statearr_27009_27055[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26997 === (22))){
var inst_26981 = (state_26996[(2)]);
var state_26996__$1 = state_26996;
if(cljs.core.truth_(inst_26981)){
var statearr_27010_27056 = state_26996__$1;
(statearr_27010_27056[(1)] = (23));

} else {
var statearr_27011_27057 = state_26996__$1;
(statearr_27011_27057[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26997 === (6))){
var inst_26927 = (state_26996[(8)]);
var inst_26975 = (state_26996[(7)]);
var inst_26977 = (state_26996[(11)]);
var inst_26975__$1 = topic_fn.call(null,inst_26927);
var inst_26976 = cljs.core.deref.call(null,mults);
var inst_26977__$1 = cljs.core.get.call(null,inst_26976,inst_26975__$1);
var state_26996__$1 = (function (){var statearr_27012 = state_26996;
(statearr_27012[(7)] = inst_26975__$1);

(statearr_27012[(11)] = inst_26977__$1);

return statearr_27012;
})();
if(cljs.core.truth_(inst_26977__$1)){
var statearr_27013_27058 = state_26996__$1;
(statearr_27013_27058[(1)] = (19));

} else {
var statearr_27014_27059 = state_26996__$1;
(statearr_27014_27059[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26997 === (25))){
var inst_26986 = (state_26996[(2)]);
var state_26996__$1 = state_26996;
var statearr_27015_27060 = state_26996__$1;
(statearr_27015_27060[(2)] = inst_26986);

(statearr_27015_27060[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26997 === (17))){
var inst_26951 = (state_26996[(10)]);
var inst_26960 = cljs.core.first.call(null,inst_26951);
var inst_26961 = cljs.core.async.muxch_STAR_.call(null,inst_26960);
var inst_26962 = cljs.core.async.close_BANG_.call(null,inst_26961);
var inst_26963 = cljs.core.next.call(null,inst_26951);
var inst_26937 = inst_26963;
var inst_26938 = null;
var inst_26939 = (0);
var inst_26940 = (0);
var state_26996__$1 = (function (){var statearr_27016 = state_26996;
(statearr_27016[(12)] = inst_26937);

(statearr_27016[(13)] = inst_26940);

(statearr_27016[(14)] = inst_26962);

(statearr_27016[(15)] = inst_26939);

(statearr_27016[(16)] = inst_26938);

return statearr_27016;
})();
var statearr_27017_27061 = state_26996__$1;
(statearr_27017_27061[(2)] = null);

(statearr_27017_27061[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26997 === (3))){
var inst_26994 = (state_26996[(2)]);
var state_26996__$1 = state_26996;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26996__$1,inst_26994);
} else {
if((state_val_26997 === (12))){
var inst_26971 = (state_26996[(2)]);
var state_26996__$1 = state_26996;
var statearr_27018_27062 = state_26996__$1;
(statearr_27018_27062[(2)] = inst_26971);

(statearr_27018_27062[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26997 === (2))){
var state_26996__$1 = state_26996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26996__$1,(4),ch);
} else {
if((state_val_26997 === (23))){
var state_26996__$1 = state_26996;
var statearr_27019_27063 = state_26996__$1;
(statearr_27019_27063[(2)] = null);

(statearr_27019_27063[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26997 === (19))){
var inst_26927 = (state_26996[(8)]);
var inst_26977 = (state_26996[(11)]);
var inst_26979 = cljs.core.async.muxch_STAR_.call(null,inst_26977);
var state_26996__$1 = state_26996;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26996__$1,(22),inst_26979,inst_26927);
} else {
if((state_val_26997 === (11))){
var inst_26937 = (state_26996[(12)]);
var inst_26951 = (state_26996[(10)]);
var inst_26951__$1 = cljs.core.seq.call(null,inst_26937);
var state_26996__$1 = (function (){var statearr_27020 = state_26996;
(statearr_27020[(10)] = inst_26951__$1);

return statearr_27020;
})();
if(inst_26951__$1){
var statearr_27021_27064 = state_26996__$1;
(statearr_27021_27064[(1)] = (13));

} else {
var statearr_27022_27065 = state_26996__$1;
(statearr_27022_27065[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26997 === (9))){
var inst_26973 = (state_26996[(2)]);
var state_26996__$1 = state_26996;
var statearr_27023_27066 = state_26996__$1;
(statearr_27023_27066[(2)] = inst_26973);

(statearr_27023_27066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26997 === (5))){
var inst_26934 = cljs.core.deref.call(null,mults);
var inst_26935 = cljs.core.vals.call(null,inst_26934);
var inst_26936 = cljs.core.seq.call(null,inst_26935);
var inst_26937 = inst_26936;
var inst_26938 = null;
var inst_26939 = (0);
var inst_26940 = (0);
var state_26996__$1 = (function (){var statearr_27024 = state_26996;
(statearr_27024[(12)] = inst_26937);

(statearr_27024[(13)] = inst_26940);

(statearr_27024[(15)] = inst_26939);

(statearr_27024[(16)] = inst_26938);

return statearr_27024;
})();
var statearr_27025_27067 = state_26996__$1;
(statearr_27025_27067[(2)] = null);

(statearr_27025_27067[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26997 === (14))){
var state_26996__$1 = state_26996;
var statearr_27029_27068 = state_26996__$1;
(statearr_27029_27068[(2)] = null);

(statearr_27029_27068[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26997 === (16))){
var inst_26951 = (state_26996[(10)]);
var inst_26955 = cljs.core.chunk_first.call(null,inst_26951);
var inst_26956 = cljs.core.chunk_rest.call(null,inst_26951);
var inst_26957 = cljs.core.count.call(null,inst_26955);
var inst_26937 = inst_26956;
var inst_26938 = inst_26955;
var inst_26939 = inst_26957;
var inst_26940 = (0);
var state_26996__$1 = (function (){var statearr_27030 = state_26996;
(statearr_27030[(12)] = inst_26937);

(statearr_27030[(13)] = inst_26940);

(statearr_27030[(15)] = inst_26939);

(statearr_27030[(16)] = inst_26938);

return statearr_27030;
})();
var statearr_27031_27069 = state_26996__$1;
(statearr_27031_27069[(2)] = null);

(statearr_27031_27069[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26997 === (10))){
var inst_26937 = (state_26996[(12)]);
var inst_26940 = (state_26996[(13)]);
var inst_26939 = (state_26996[(15)]);
var inst_26938 = (state_26996[(16)]);
var inst_26945 = cljs.core._nth.call(null,inst_26938,inst_26940);
var inst_26946 = cljs.core.async.muxch_STAR_.call(null,inst_26945);
var inst_26947 = cljs.core.async.close_BANG_.call(null,inst_26946);
var inst_26948 = (inst_26940 + (1));
var tmp27026 = inst_26937;
var tmp27027 = inst_26939;
var tmp27028 = inst_26938;
var inst_26937__$1 = tmp27026;
var inst_26938__$1 = tmp27028;
var inst_26939__$1 = tmp27027;
var inst_26940__$1 = inst_26948;
var state_26996__$1 = (function (){var statearr_27032 = state_26996;
(statearr_27032[(12)] = inst_26937__$1);

(statearr_27032[(17)] = inst_26947);

(statearr_27032[(13)] = inst_26940__$1);

(statearr_27032[(15)] = inst_26939__$1);

(statearr_27032[(16)] = inst_26938__$1);

return statearr_27032;
})();
var statearr_27033_27070 = state_26996__$1;
(statearr_27033_27070[(2)] = null);

(statearr_27033_27070[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26997 === (18))){
var inst_26966 = (state_26996[(2)]);
var state_26996__$1 = state_26996;
var statearr_27034_27071 = state_26996__$1;
(statearr_27034_27071[(2)] = inst_26966);

(statearr_27034_27071[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26997 === (8))){
var inst_26940 = (state_26996[(13)]);
var inst_26939 = (state_26996[(15)]);
var inst_26942 = (inst_26940 < inst_26939);
var inst_26943 = inst_26942;
var state_26996__$1 = state_26996;
if(cljs.core.truth_(inst_26943)){
var statearr_27035_27072 = state_26996__$1;
(statearr_27035_27072[(1)] = (10));

} else {
var statearr_27036_27073 = state_26996__$1;
(statearr_27036_27073[(1)] = (11));

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
});})(c__21347__auto___27045,mults,ensure_mult,p))
;
return ((function (switch__21285__auto__,c__21347__auto___27045,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21286__auto__ = null;
var cljs$core$async$state_machine__21286__auto____0 = (function (){
var statearr_27040 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27040[(0)] = cljs$core$async$state_machine__21286__auto__);

(statearr_27040[(1)] = (1));

return statearr_27040;
});
var cljs$core$async$state_machine__21286__auto____1 = (function (state_26996){
while(true){
var ret_value__21287__auto__ = (function (){try{while(true){
var result__21288__auto__ = switch__21285__auto__.call(null,state_26996);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21288__auto__;
}
break;
}
}catch (e27041){if((e27041 instanceof Object)){
var ex__21289__auto__ = e27041;
var statearr_27042_27074 = state_26996;
(statearr_27042_27074[(5)] = ex__21289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27041;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27075 = state_26996;
state_26996 = G__27075;
continue;
} else {
return ret_value__21287__auto__;
}
break;
}
});
cljs$core$async$state_machine__21286__auto__ = function(state_26996){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21286__auto____1.call(this,state_26996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21286__auto____0;
cljs$core$async$state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21286__auto____1;
return cljs$core$async$state_machine__21286__auto__;
})()
;})(switch__21285__auto__,c__21347__auto___27045,mults,ensure_mult,p))
})();
var state__21349__auto__ = (function (){var statearr_27043 = f__21348__auto__.call(null);
(statearr_27043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21347__auto___27045);

return statearr_27043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21349__auto__);
});})(c__21347__auto___27045,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__27077 = arguments.length;
switch (G__27077) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__27080 = arguments.length;
switch (G__27080) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__27083 = arguments.length;
switch (G__27083) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__21347__auto___27153 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21347__auto___27153,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21348__auto__ = (function (){var switch__21285__auto__ = ((function (c__21347__auto___27153,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27122){
var state_val_27123 = (state_27122[(1)]);
if((state_val_27123 === (7))){
var state_27122__$1 = state_27122;
var statearr_27124_27154 = state_27122__$1;
(statearr_27124_27154[(2)] = null);

(statearr_27124_27154[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27123 === (1))){
var state_27122__$1 = state_27122;
var statearr_27125_27155 = state_27122__$1;
(statearr_27125_27155[(2)] = null);

(statearr_27125_27155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27123 === (4))){
var inst_27086 = (state_27122[(7)]);
var inst_27088 = (inst_27086 < cnt);
var state_27122__$1 = state_27122;
if(cljs.core.truth_(inst_27088)){
var statearr_27126_27156 = state_27122__$1;
(statearr_27126_27156[(1)] = (6));

} else {
var statearr_27127_27157 = state_27122__$1;
(statearr_27127_27157[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27123 === (15))){
var inst_27118 = (state_27122[(2)]);
var state_27122__$1 = state_27122;
var statearr_27128_27158 = state_27122__$1;
(statearr_27128_27158[(2)] = inst_27118);

(statearr_27128_27158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27123 === (13))){
var inst_27111 = cljs.core.async.close_BANG_.call(null,out);
var state_27122__$1 = state_27122;
var statearr_27129_27159 = state_27122__$1;
(statearr_27129_27159[(2)] = inst_27111);

(statearr_27129_27159[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27123 === (6))){
var state_27122__$1 = state_27122;
var statearr_27130_27160 = state_27122__$1;
(statearr_27130_27160[(2)] = null);

(statearr_27130_27160[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27123 === (3))){
var inst_27120 = (state_27122[(2)]);
var state_27122__$1 = state_27122;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27122__$1,inst_27120);
} else {
if((state_val_27123 === (12))){
var inst_27108 = (state_27122[(8)]);
var inst_27108__$1 = (state_27122[(2)]);
var inst_27109 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27108__$1);
var state_27122__$1 = (function (){var statearr_27131 = state_27122;
(statearr_27131[(8)] = inst_27108__$1);

return statearr_27131;
})();
if(cljs.core.truth_(inst_27109)){
var statearr_27132_27161 = state_27122__$1;
(statearr_27132_27161[(1)] = (13));

} else {
var statearr_27133_27162 = state_27122__$1;
(statearr_27133_27162[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27123 === (2))){
var inst_27085 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27086 = (0);
var state_27122__$1 = (function (){var statearr_27134 = state_27122;
(statearr_27134[(7)] = inst_27086);

(statearr_27134[(9)] = inst_27085);

return statearr_27134;
})();
var statearr_27135_27163 = state_27122__$1;
(statearr_27135_27163[(2)] = null);

(statearr_27135_27163[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27123 === (11))){
var inst_27086 = (state_27122[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27122,(10),Object,null,(9));
var inst_27095 = chs__$1.call(null,inst_27086);
var inst_27096 = done.call(null,inst_27086);
var inst_27097 = cljs.core.async.take_BANG_.call(null,inst_27095,inst_27096);
var state_27122__$1 = state_27122;
var statearr_27136_27164 = state_27122__$1;
(statearr_27136_27164[(2)] = inst_27097);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27122__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27123 === (9))){
var inst_27086 = (state_27122[(7)]);
var inst_27099 = (state_27122[(2)]);
var inst_27100 = (inst_27086 + (1));
var inst_27086__$1 = inst_27100;
var state_27122__$1 = (function (){var statearr_27137 = state_27122;
(statearr_27137[(7)] = inst_27086__$1);

(statearr_27137[(10)] = inst_27099);

return statearr_27137;
})();
var statearr_27138_27165 = state_27122__$1;
(statearr_27138_27165[(2)] = null);

(statearr_27138_27165[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27123 === (5))){
var inst_27106 = (state_27122[(2)]);
var state_27122__$1 = (function (){var statearr_27139 = state_27122;
(statearr_27139[(11)] = inst_27106);

return statearr_27139;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27122__$1,(12),dchan);
} else {
if((state_val_27123 === (14))){
var inst_27108 = (state_27122[(8)]);
var inst_27113 = cljs.core.apply.call(null,f,inst_27108);
var state_27122__$1 = state_27122;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27122__$1,(16),out,inst_27113);
} else {
if((state_val_27123 === (16))){
var inst_27115 = (state_27122[(2)]);
var state_27122__$1 = (function (){var statearr_27140 = state_27122;
(statearr_27140[(12)] = inst_27115);

return statearr_27140;
})();
var statearr_27141_27166 = state_27122__$1;
(statearr_27141_27166[(2)] = null);

(statearr_27141_27166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27123 === (10))){
var inst_27090 = (state_27122[(2)]);
var inst_27091 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27122__$1 = (function (){var statearr_27142 = state_27122;
(statearr_27142[(13)] = inst_27090);

return statearr_27142;
})();
var statearr_27143_27167 = state_27122__$1;
(statearr_27143_27167[(2)] = inst_27091);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27122__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27123 === (8))){
var inst_27104 = (state_27122[(2)]);
var state_27122__$1 = state_27122;
var statearr_27144_27168 = state_27122__$1;
(statearr_27144_27168[(2)] = inst_27104);

(statearr_27144_27168[(1)] = (5));


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
});})(c__21347__auto___27153,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21285__auto__,c__21347__auto___27153,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21286__auto__ = null;
var cljs$core$async$state_machine__21286__auto____0 = (function (){
var statearr_27148 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27148[(0)] = cljs$core$async$state_machine__21286__auto__);

(statearr_27148[(1)] = (1));

return statearr_27148;
});
var cljs$core$async$state_machine__21286__auto____1 = (function (state_27122){
while(true){
var ret_value__21287__auto__ = (function (){try{while(true){
var result__21288__auto__ = switch__21285__auto__.call(null,state_27122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21288__auto__;
}
break;
}
}catch (e27149){if((e27149 instanceof Object)){
var ex__21289__auto__ = e27149;
var statearr_27150_27169 = state_27122;
(statearr_27150_27169[(5)] = ex__21289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27149;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27170 = state_27122;
state_27122 = G__27170;
continue;
} else {
return ret_value__21287__auto__;
}
break;
}
});
cljs$core$async$state_machine__21286__auto__ = function(state_27122){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21286__auto____1.call(this,state_27122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21286__auto____0;
cljs$core$async$state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21286__auto____1;
return cljs$core$async$state_machine__21286__auto__;
})()
;})(switch__21285__auto__,c__21347__auto___27153,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21349__auto__ = (function (){var statearr_27151 = f__21348__auto__.call(null);
(statearr_27151[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21347__auto___27153);

return statearr_27151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21349__auto__);
});})(c__21347__auto___27153,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__27173 = arguments.length;
switch (G__27173) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21347__auto___27228 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21347__auto___27228,out){
return (function (){
var f__21348__auto__ = (function (){var switch__21285__auto__ = ((function (c__21347__auto___27228,out){
return (function (state_27203){
var state_val_27204 = (state_27203[(1)]);
if((state_val_27204 === (7))){
var inst_27182 = (state_27203[(7)]);
var inst_27183 = (state_27203[(8)]);
var inst_27182__$1 = (state_27203[(2)]);
var inst_27183__$1 = cljs.core.nth.call(null,inst_27182__$1,(0),null);
var inst_27184 = cljs.core.nth.call(null,inst_27182__$1,(1),null);
var inst_27185 = (inst_27183__$1 == null);
var state_27203__$1 = (function (){var statearr_27205 = state_27203;
(statearr_27205[(7)] = inst_27182__$1);

(statearr_27205[(9)] = inst_27184);

(statearr_27205[(8)] = inst_27183__$1);

return statearr_27205;
})();
if(cljs.core.truth_(inst_27185)){
var statearr_27206_27229 = state_27203__$1;
(statearr_27206_27229[(1)] = (8));

} else {
var statearr_27207_27230 = state_27203__$1;
(statearr_27207_27230[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27204 === (1))){
var inst_27174 = cljs.core.vec.call(null,chs);
var inst_27175 = inst_27174;
var state_27203__$1 = (function (){var statearr_27208 = state_27203;
(statearr_27208[(10)] = inst_27175);

return statearr_27208;
})();
var statearr_27209_27231 = state_27203__$1;
(statearr_27209_27231[(2)] = null);

(statearr_27209_27231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27204 === (4))){
var inst_27175 = (state_27203[(10)]);
var state_27203__$1 = state_27203;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27203__$1,(7),inst_27175);
} else {
if((state_val_27204 === (6))){
var inst_27199 = (state_27203[(2)]);
var state_27203__$1 = state_27203;
var statearr_27210_27232 = state_27203__$1;
(statearr_27210_27232[(2)] = inst_27199);

(statearr_27210_27232[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27204 === (3))){
var inst_27201 = (state_27203[(2)]);
var state_27203__$1 = state_27203;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27203__$1,inst_27201);
} else {
if((state_val_27204 === (2))){
var inst_27175 = (state_27203[(10)]);
var inst_27177 = cljs.core.count.call(null,inst_27175);
var inst_27178 = (inst_27177 > (0));
var state_27203__$1 = state_27203;
if(cljs.core.truth_(inst_27178)){
var statearr_27212_27233 = state_27203__$1;
(statearr_27212_27233[(1)] = (4));

} else {
var statearr_27213_27234 = state_27203__$1;
(statearr_27213_27234[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27204 === (11))){
var inst_27175 = (state_27203[(10)]);
var inst_27192 = (state_27203[(2)]);
var tmp27211 = inst_27175;
var inst_27175__$1 = tmp27211;
var state_27203__$1 = (function (){var statearr_27214 = state_27203;
(statearr_27214[(11)] = inst_27192);

(statearr_27214[(10)] = inst_27175__$1);

return statearr_27214;
})();
var statearr_27215_27235 = state_27203__$1;
(statearr_27215_27235[(2)] = null);

(statearr_27215_27235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27204 === (9))){
var inst_27183 = (state_27203[(8)]);
var state_27203__$1 = state_27203;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27203__$1,(11),out,inst_27183);
} else {
if((state_val_27204 === (5))){
var inst_27197 = cljs.core.async.close_BANG_.call(null,out);
var state_27203__$1 = state_27203;
var statearr_27216_27236 = state_27203__$1;
(statearr_27216_27236[(2)] = inst_27197);

(statearr_27216_27236[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27204 === (10))){
var inst_27195 = (state_27203[(2)]);
var state_27203__$1 = state_27203;
var statearr_27217_27237 = state_27203__$1;
(statearr_27217_27237[(2)] = inst_27195);

(statearr_27217_27237[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27204 === (8))){
var inst_27182 = (state_27203[(7)]);
var inst_27175 = (state_27203[(10)]);
var inst_27184 = (state_27203[(9)]);
var inst_27183 = (state_27203[(8)]);
var inst_27187 = (function (){var cs = inst_27175;
var vec__27180 = inst_27182;
var v = inst_27183;
var c = inst_27184;
return ((function (cs,vec__27180,v,c,inst_27182,inst_27175,inst_27184,inst_27183,state_val_27204,c__21347__auto___27228,out){
return (function (p1__27171_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27171_SHARP_);
});
;})(cs,vec__27180,v,c,inst_27182,inst_27175,inst_27184,inst_27183,state_val_27204,c__21347__auto___27228,out))
})();
var inst_27188 = cljs.core.filterv.call(null,inst_27187,inst_27175);
var inst_27175__$1 = inst_27188;
var state_27203__$1 = (function (){var statearr_27218 = state_27203;
(statearr_27218[(10)] = inst_27175__$1);

return statearr_27218;
})();
var statearr_27219_27238 = state_27203__$1;
(statearr_27219_27238[(2)] = null);

(statearr_27219_27238[(1)] = (2));


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
});})(c__21347__auto___27228,out))
;
return ((function (switch__21285__auto__,c__21347__auto___27228,out){
return (function() {
var cljs$core$async$state_machine__21286__auto__ = null;
var cljs$core$async$state_machine__21286__auto____0 = (function (){
var statearr_27223 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27223[(0)] = cljs$core$async$state_machine__21286__auto__);

(statearr_27223[(1)] = (1));

return statearr_27223;
});
var cljs$core$async$state_machine__21286__auto____1 = (function (state_27203){
while(true){
var ret_value__21287__auto__ = (function (){try{while(true){
var result__21288__auto__ = switch__21285__auto__.call(null,state_27203);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21288__auto__;
}
break;
}
}catch (e27224){if((e27224 instanceof Object)){
var ex__21289__auto__ = e27224;
var statearr_27225_27239 = state_27203;
(statearr_27225_27239[(5)] = ex__21289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27203);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27224;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27240 = state_27203;
state_27203 = G__27240;
continue;
} else {
return ret_value__21287__auto__;
}
break;
}
});
cljs$core$async$state_machine__21286__auto__ = function(state_27203){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21286__auto____1.call(this,state_27203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21286__auto____0;
cljs$core$async$state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21286__auto____1;
return cljs$core$async$state_machine__21286__auto__;
})()
;})(switch__21285__auto__,c__21347__auto___27228,out))
})();
var state__21349__auto__ = (function (){var statearr_27226 = f__21348__auto__.call(null);
(statearr_27226[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21347__auto___27228);

return statearr_27226;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21349__auto__);
});})(c__21347__auto___27228,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__27242 = arguments.length;
switch (G__27242) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21347__auto___27290 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21347__auto___27290,out){
return (function (){
var f__21348__auto__ = (function (){var switch__21285__auto__ = ((function (c__21347__auto___27290,out){
return (function (state_27266){
var state_val_27267 = (state_27266[(1)]);
if((state_val_27267 === (7))){
var inst_27248 = (state_27266[(7)]);
var inst_27248__$1 = (state_27266[(2)]);
var inst_27249 = (inst_27248__$1 == null);
var inst_27250 = cljs.core.not.call(null,inst_27249);
var state_27266__$1 = (function (){var statearr_27268 = state_27266;
(statearr_27268[(7)] = inst_27248__$1);

return statearr_27268;
})();
if(inst_27250){
var statearr_27269_27291 = state_27266__$1;
(statearr_27269_27291[(1)] = (8));

} else {
var statearr_27270_27292 = state_27266__$1;
(statearr_27270_27292[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27267 === (1))){
var inst_27243 = (0);
var state_27266__$1 = (function (){var statearr_27271 = state_27266;
(statearr_27271[(8)] = inst_27243);

return statearr_27271;
})();
var statearr_27272_27293 = state_27266__$1;
(statearr_27272_27293[(2)] = null);

(statearr_27272_27293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27267 === (4))){
var state_27266__$1 = state_27266;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27266__$1,(7),ch);
} else {
if((state_val_27267 === (6))){
var inst_27261 = (state_27266[(2)]);
var state_27266__$1 = state_27266;
var statearr_27273_27294 = state_27266__$1;
(statearr_27273_27294[(2)] = inst_27261);

(statearr_27273_27294[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27267 === (3))){
var inst_27263 = (state_27266[(2)]);
var inst_27264 = cljs.core.async.close_BANG_.call(null,out);
var state_27266__$1 = (function (){var statearr_27274 = state_27266;
(statearr_27274[(9)] = inst_27263);

return statearr_27274;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27266__$1,inst_27264);
} else {
if((state_val_27267 === (2))){
var inst_27243 = (state_27266[(8)]);
var inst_27245 = (inst_27243 < n);
var state_27266__$1 = state_27266;
if(cljs.core.truth_(inst_27245)){
var statearr_27275_27295 = state_27266__$1;
(statearr_27275_27295[(1)] = (4));

} else {
var statearr_27276_27296 = state_27266__$1;
(statearr_27276_27296[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27267 === (11))){
var inst_27243 = (state_27266[(8)]);
var inst_27253 = (state_27266[(2)]);
var inst_27254 = (inst_27243 + (1));
var inst_27243__$1 = inst_27254;
var state_27266__$1 = (function (){var statearr_27277 = state_27266;
(statearr_27277[(10)] = inst_27253);

(statearr_27277[(8)] = inst_27243__$1);

return statearr_27277;
})();
var statearr_27278_27297 = state_27266__$1;
(statearr_27278_27297[(2)] = null);

(statearr_27278_27297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27267 === (9))){
var state_27266__$1 = state_27266;
var statearr_27279_27298 = state_27266__$1;
(statearr_27279_27298[(2)] = null);

(statearr_27279_27298[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27267 === (5))){
var state_27266__$1 = state_27266;
var statearr_27280_27299 = state_27266__$1;
(statearr_27280_27299[(2)] = null);

(statearr_27280_27299[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27267 === (10))){
var inst_27258 = (state_27266[(2)]);
var state_27266__$1 = state_27266;
var statearr_27281_27300 = state_27266__$1;
(statearr_27281_27300[(2)] = inst_27258);

(statearr_27281_27300[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27267 === (8))){
var inst_27248 = (state_27266[(7)]);
var state_27266__$1 = state_27266;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27266__$1,(11),out,inst_27248);
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
});})(c__21347__auto___27290,out))
;
return ((function (switch__21285__auto__,c__21347__auto___27290,out){
return (function() {
var cljs$core$async$state_machine__21286__auto__ = null;
var cljs$core$async$state_machine__21286__auto____0 = (function (){
var statearr_27285 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27285[(0)] = cljs$core$async$state_machine__21286__auto__);

(statearr_27285[(1)] = (1));

return statearr_27285;
});
var cljs$core$async$state_machine__21286__auto____1 = (function (state_27266){
while(true){
var ret_value__21287__auto__ = (function (){try{while(true){
var result__21288__auto__ = switch__21285__auto__.call(null,state_27266);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21288__auto__;
}
break;
}
}catch (e27286){if((e27286 instanceof Object)){
var ex__21289__auto__ = e27286;
var statearr_27287_27301 = state_27266;
(statearr_27287_27301[(5)] = ex__21289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27266);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27286;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27302 = state_27266;
state_27266 = G__27302;
continue;
} else {
return ret_value__21287__auto__;
}
break;
}
});
cljs$core$async$state_machine__21286__auto__ = function(state_27266){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21286__auto____1.call(this,state_27266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21286__auto____0;
cljs$core$async$state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21286__auto____1;
return cljs$core$async$state_machine__21286__auto__;
})()
;})(switch__21285__auto__,c__21347__auto___27290,out))
})();
var state__21349__auto__ = (function (){var statearr_27288 = f__21348__auto__.call(null);
(statearr_27288[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21347__auto___27290);

return statearr_27288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21349__auto__);
});})(c__21347__auto___27290,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t27310 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27310 = (function (map_LT_,f,ch,meta27311){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27311 = meta27311;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27310.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27312,meta27311__$1){
var self__ = this;
var _27312__$1 = this;
return (new cljs.core.async.t27310(self__.map_LT_,self__.f,self__.ch,meta27311__$1));
});

cljs.core.async.t27310.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27312){
var self__ = this;
var _27312__$1 = this;
return self__.meta27311;
});

cljs.core.async.t27310.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27310.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27310.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t27310.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27310.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t27313 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27313 = (function (map_LT_,f,ch,meta27311,_,fn1,meta27314){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27311 = meta27311;
this._ = _;
this.fn1 = fn1;
this.meta27314 = meta27314;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27315,meta27314__$1){
var self__ = this;
var _27315__$1 = this;
return (new cljs.core.async.t27313(self__.map_LT_,self__.f,self__.ch,self__.meta27311,self__._,self__.fn1,meta27314__$1));
});})(___$1))
;

cljs.core.async.t27313.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27315){
var self__ = this;
var _27315__$1 = this;
return self__.meta27314;
});})(___$1))
;

cljs.core.async.t27313.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27313.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t27313.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27303_SHARP_){
return f1.call(null,(((p1__27303_SHARP_ == null))?null:self__.f.call(null,p1__27303_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t27313.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27311","meta27311",-1709495642,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27314","meta27314",1591564646,null)], null);
});})(___$1))
;

cljs.core.async.t27313.cljs$lang$type = true;

cljs.core.async.t27313.cljs$lang$ctorStr = "cljs.core.async/t27313";

cljs.core.async.t27313.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18699__auto__,writer__18700__auto__,opt__18701__auto__){
return cljs.core._write.call(null,writer__18700__auto__,"cljs.core.async/t27313");
});})(___$1))
;

cljs.core.async.__GT_t27313 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t27313(map_LT___$1,f__$1,ch__$1,meta27311__$1,___$2,fn1__$1,meta27314){
return (new cljs.core.async.t27313(map_LT___$1,f__$1,ch__$1,meta27311__$1,___$2,fn1__$1,meta27314));
});})(___$1))
;

}

return (new cljs.core.async.t27313(self__.map_LT_,self__.f,self__.ch,self__.meta27311,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18108__auto__ = ret;
if(cljs.core.truth_(and__18108__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18108__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t27310.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27310.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t27310.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27311","meta27311",-1709495642,null)], null);
});

cljs.core.async.t27310.cljs$lang$type = true;

cljs.core.async.t27310.cljs$lang$ctorStr = "cljs.core.async/t27310";

cljs.core.async.t27310.cljs$lang$ctorPrWriter = (function (this__18699__auto__,writer__18700__auto__,opt__18701__auto__){
return cljs.core._write.call(null,writer__18700__auto__,"cljs.core.async/t27310");
});

cljs.core.async.__GT_t27310 = (function cljs$core$async$map_LT__$___GT_t27310(map_LT___$1,f__$1,ch__$1,meta27311){
return (new cljs.core.async.t27310(map_LT___$1,f__$1,ch__$1,meta27311));
});

}

return (new cljs.core.async.t27310(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t27319 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27319 = (function (map_GT_,f,ch,meta27320){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta27320 = meta27320;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27319.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27321,meta27320__$1){
var self__ = this;
var _27321__$1 = this;
return (new cljs.core.async.t27319(self__.map_GT_,self__.f,self__.ch,meta27320__$1));
});

cljs.core.async.t27319.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27321){
var self__ = this;
var _27321__$1 = this;
return self__.meta27320;
});

cljs.core.async.t27319.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27319.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27319.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27319.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t27319.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27319.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t27319.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27320","meta27320",1844684250,null)], null);
});

cljs.core.async.t27319.cljs$lang$type = true;

cljs.core.async.t27319.cljs$lang$ctorStr = "cljs.core.async/t27319";

cljs.core.async.t27319.cljs$lang$ctorPrWriter = (function (this__18699__auto__,writer__18700__auto__,opt__18701__auto__){
return cljs.core._write.call(null,writer__18700__auto__,"cljs.core.async/t27319");
});

cljs.core.async.__GT_t27319 = (function cljs$core$async$map_GT__$___GT_t27319(map_GT___$1,f__$1,ch__$1,meta27320){
return (new cljs.core.async.t27319(map_GT___$1,f__$1,ch__$1,meta27320));
});

}

return (new cljs.core.async.t27319(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t27325 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27325 = (function (filter_GT_,p,ch,meta27326){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta27326 = meta27326;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27325.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27327,meta27326__$1){
var self__ = this;
var _27327__$1 = this;
return (new cljs.core.async.t27325(self__.filter_GT_,self__.p,self__.ch,meta27326__$1));
});

cljs.core.async.t27325.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27327){
var self__ = this;
var _27327__$1 = this;
return self__.meta27326;
});

cljs.core.async.t27325.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27325.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27325.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t27325.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27325.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t27325.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27325.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t27325.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27326","meta27326",2108666980,null)], null);
});

cljs.core.async.t27325.cljs$lang$type = true;

cljs.core.async.t27325.cljs$lang$ctorStr = "cljs.core.async/t27325";

cljs.core.async.t27325.cljs$lang$ctorPrWriter = (function (this__18699__auto__,writer__18700__auto__,opt__18701__auto__){
return cljs.core._write.call(null,writer__18700__auto__,"cljs.core.async/t27325");
});

cljs.core.async.__GT_t27325 = (function cljs$core$async$filter_GT__$___GT_t27325(filter_GT___$1,p__$1,ch__$1,meta27326){
return (new cljs.core.async.t27325(filter_GT___$1,p__$1,ch__$1,meta27326));
});

}

return (new cljs.core.async.t27325(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__27329 = arguments.length;
switch (G__27329) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21347__auto___27372 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21347__auto___27372,out){
return (function (){
var f__21348__auto__ = (function (){var switch__21285__auto__ = ((function (c__21347__auto___27372,out){
return (function (state_27350){
var state_val_27351 = (state_27350[(1)]);
if((state_val_27351 === (7))){
var inst_27346 = (state_27350[(2)]);
var state_27350__$1 = state_27350;
var statearr_27352_27373 = state_27350__$1;
(statearr_27352_27373[(2)] = inst_27346);

(statearr_27352_27373[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27351 === (1))){
var state_27350__$1 = state_27350;
var statearr_27353_27374 = state_27350__$1;
(statearr_27353_27374[(2)] = null);

(statearr_27353_27374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27351 === (4))){
var inst_27332 = (state_27350[(7)]);
var inst_27332__$1 = (state_27350[(2)]);
var inst_27333 = (inst_27332__$1 == null);
var state_27350__$1 = (function (){var statearr_27354 = state_27350;
(statearr_27354[(7)] = inst_27332__$1);

return statearr_27354;
})();
if(cljs.core.truth_(inst_27333)){
var statearr_27355_27375 = state_27350__$1;
(statearr_27355_27375[(1)] = (5));

} else {
var statearr_27356_27376 = state_27350__$1;
(statearr_27356_27376[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27351 === (6))){
var inst_27332 = (state_27350[(7)]);
var inst_27337 = p.call(null,inst_27332);
var state_27350__$1 = state_27350;
if(cljs.core.truth_(inst_27337)){
var statearr_27357_27377 = state_27350__$1;
(statearr_27357_27377[(1)] = (8));

} else {
var statearr_27358_27378 = state_27350__$1;
(statearr_27358_27378[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27351 === (3))){
var inst_27348 = (state_27350[(2)]);
var state_27350__$1 = state_27350;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27350__$1,inst_27348);
} else {
if((state_val_27351 === (2))){
var state_27350__$1 = state_27350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27350__$1,(4),ch);
} else {
if((state_val_27351 === (11))){
var inst_27340 = (state_27350[(2)]);
var state_27350__$1 = state_27350;
var statearr_27359_27379 = state_27350__$1;
(statearr_27359_27379[(2)] = inst_27340);

(statearr_27359_27379[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27351 === (9))){
var state_27350__$1 = state_27350;
var statearr_27360_27380 = state_27350__$1;
(statearr_27360_27380[(2)] = null);

(statearr_27360_27380[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27351 === (5))){
var inst_27335 = cljs.core.async.close_BANG_.call(null,out);
var state_27350__$1 = state_27350;
var statearr_27361_27381 = state_27350__$1;
(statearr_27361_27381[(2)] = inst_27335);

(statearr_27361_27381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27351 === (10))){
var inst_27343 = (state_27350[(2)]);
var state_27350__$1 = (function (){var statearr_27362 = state_27350;
(statearr_27362[(8)] = inst_27343);

return statearr_27362;
})();
var statearr_27363_27382 = state_27350__$1;
(statearr_27363_27382[(2)] = null);

(statearr_27363_27382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27351 === (8))){
var inst_27332 = (state_27350[(7)]);
var state_27350__$1 = state_27350;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27350__$1,(11),out,inst_27332);
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
});})(c__21347__auto___27372,out))
;
return ((function (switch__21285__auto__,c__21347__auto___27372,out){
return (function() {
var cljs$core$async$state_machine__21286__auto__ = null;
var cljs$core$async$state_machine__21286__auto____0 = (function (){
var statearr_27367 = [null,null,null,null,null,null,null,null,null];
(statearr_27367[(0)] = cljs$core$async$state_machine__21286__auto__);

(statearr_27367[(1)] = (1));

return statearr_27367;
});
var cljs$core$async$state_machine__21286__auto____1 = (function (state_27350){
while(true){
var ret_value__21287__auto__ = (function (){try{while(true){
var result__21288__auto__ = switch__21285__auto__.call(null,state_27350);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21288__auto__;
}
break;
}
}catch (e27368){if((e27368 instanceof Object)){
var ex__21289__auto__ = e27368;
var statearr_27369_27383 = state_27350;
(statearr_27369_27383[(5)] = ex__21289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27350);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27368;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27384 = state_27350;
state_27350 = G__27384;
continue;
} else {
return ret_value__21287__auto__;
}
break;
}
});
cljs$core$async$state_machine__21286__auto__ = function(state_27350){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21286__auto____1.call(this,state_27350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21286__auto____0;
cljs$core$async$state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21286__auto____1;
return cljs$core$async$state_machine__21286__auto__;
})()
;})(switch__21285__auto__,c__21347__auto___27372,out))
})();
var state__21349__auto__ = (function (){var statearr_27370 = f__21348__auto__.call(null);
(statearr_27370[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21347__auto___27372);

return statearr_27370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21349__auto__);
});})(c__21347__auto___27372,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__27386 = arguments.length;
switch (G__27386) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__21347__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21347__auto__){
return (function (){
var f__21348__auto__ = (function (){var switch__21285__auto__ = ((function (c__21347__auto__){
return (function (state_27553){
var state_val_27554 = (state_27553[(1)]);
if((state_val_27554 === (7))){
var inst_27549 = (state_27553[(2)]);
var state_27553__$1 = state_27553;
var statearr_27555_27596 = state_27553__$1;
(statearr_27555_27596[(2)] = inst_27549);

(statearr_27555_27596[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27554 === (20))){
var inst_27519 = (state_27553[(7)]);
var inst_27530 = (state_27553[(2)]);
var inst_27531 = cljs.core.next.call(null,inst_27519);
var inst_27505 = inst_27531;
var inst_27506 = null;
var inst_27507 = (0);
var inst_27508 = (0);
var state_27553__$1 = (function (){var statearr_27556 = state_27553;
(statearr_27556[(8)] = inst_27506);

(statearr_27556[(9)] = inst_27530);

(statearr_27556[(10)] = inst_27508);

(statearr_27556[(11)] = inst_27505);

(statearr_27556[(12)] = inst_27507);

return statearr_27556;
})();
var statearr_27557_27597 = state_27553__$1;
(statearr_27557_27597[(2)] = null);

(statearr_27557_27597[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27554 === (1))){
var state_27553__$1 = state_27553;
var statearr_27558_27598 = state_27553__$1;
(statearr_27558_27598[(2)] = null);

(statearr_27558_27598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27554 === (4))){
var inst_27494 = (state_27553[(13)]);
var inst_27494__$1 = (state_27553[(2)]);
var inst_27495 = (inst_27494__$1 == null);
var state_27553__$1 = (function (){var statearr_27559 = state_27553;
(statearr_27559[(13)] = inst_27494__$1);

return statearr_27559;
})();
if(cljs.core.truth_(inst_27495)){
var statearr_27560_27599 = state_27553__$1;
(statearr_27560_27599[(1)] = (5));

} else {
var statearr_27561_27600 = state_27553__$1;
(statearr_27561_27600[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27554 === (15))){
var state_27553__$1 = state_27553;
var statearr_27565_27601 = state_27553__$1;
(statearr_27565_27601[(2)] = null);

(statearr_27565_27601[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27554 === (21))){
var state_27553__$1 = state_27553;
var statearr_27566_27602 = state_27553__$1;
(statearr_27566_27602[(2)] = null);

(statearr_27566_27602[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27554 === (13))){
var inst_27506 = (state_27553[(8)]);
var inst_27508 = (state_27553[(10)]);
var inst_27505 = (state_27553[(11)]);
var inst_27507 = (state_27553[(12)]);
var inst_27515 = (state_27553[(2)]);
var inst_27516 = (inst_27508 + (1));
var tmp27562 = inst_27506;
var tmp27563 = inst_27505;
var tmp27564 = inst_27507;
var inst_27505__$1 = tmp27563;
var inst_27506__$1 = tmp27562;
var inst_27507__$1 = tmp27564;
var inst_27508__$1 = inst_27516;
var state_27553__$1 = (function (){var statearr_27567 = state_27553;
(statearr_27567[(14)] = inst_27515);

(statearr_27567[(8)] = inst_27506__$1);

(statearr_27567[(10)] = inst_27508__$1);

(statearr_27567[(11)] = inst_27505__$1);

(statearr_27567[(12)] = inst_27507__$1);

return statearr_27567;
})();
var statearr_27568_27603 = state_27553__$1;
(statearr_27568_27603[(2)] = null);

(statearr_27568_27603[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27554 === (22))){
var state_27553__$1 = state_27553;
var statearr_27569_27604 = state_27553__$1;
(statearr_27569_27604[(2)] = null);

(statearr_27569_27604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27554 === (6))){
var inst_27494 = (state_27553[(13)]);
var inst_27503 = f.call(null,inst_27494);
var inst_27504 = cljs.core.seq.call(null,inst_27503);
var inst_27505 = inst_27504;
var inst_27506 = null;
var inst_27507 = (0);
var inst_27508 = (0);
var state_27553__$1 = (function (){var statearr_27570 = state_27553;
(statearr_27570[(8)] = inst_27506);

(statearr_27570[(10)] = inst_27508);

(statearr_27570[(11)] = inst_27505);

(statearr_27570[(12)] = inst_27507);

return statearr_27570;
})();
var statearr_27571_27605 = state_27553__$1;
(statearr_27571_27605[(2)] = null);

(statearr_27571_27605[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27554 === (17))){
var inst_27519 = (state_27553[(7)]);
var inst_27523 = cljs.core.chunk_first.call(null,inst_27519);
var inst_27524 = cljs.core.chunk_rest.call(null,inst_27519);
var inst_27525 = cljs.core.count.call(null,inst_27523);
var inst_27505 = inst_27524;
var inst_27506 = inst_27523;
var inst_27507 = inst_27525;
var inst_27508 = (0);
var state_27553__$1 = (function (){var statearr_27572 = state_27553;
(statearr_27572[(8)] = inst_27506);

(statearr_27572[(10)] = inst_27508);

(statearr_27572[(11)] = inst_27505);

(statearr_27572[(12)] = inst_27507);

return statearr_27572;
})();
var statearr_27573_27606 = state_27553__$1;
(statearr_27573_27606[(2)] = null);

(statearr_27573_27606[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27554 === (3))){
var inst_27551 = (state_27553[(2)]);
var state_27553__$1 = state_27553;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27553__$1,inst_27551);
} else {
if((state_val_27554 === (12))){
var inst_27539 = (state_27553[(2)]);
var state_27553__$1 = state_27553;
var statearr_27574_27607 = state_27553__$1;
(statearr_27574_27607[(2)] = inst_27539);

(statearr_27574_27607[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27554 === (2))){
var state_27553__$1 = state_27553;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27553__$1,(4),in$);
} else {
if((state_val_27554 === (23))){
var inst_27547 = (state_27553[(2)]);
var state_27553__$1 = state_27553;
var statearr_27575_27608 = state_27553__$1;
(statearr_27575_27608[(2)] = inst_27547);

(statearr_27575_27608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27554 === (19))){
var inst_27534 = (state_27553[(2)]);
var state_27553__$1 = state_27553;
var statearr_27576_27609 = state_27553__$1;
(statearr_27576_27609[(2)] = inst_27534);

(statearr_27576_27609[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27554 === (11))){
var inst_27519 = (state_27553[(7)]);
var inst_27505 = (state_27553[(11)]);
var inst_27519__$1 = cljs.core.seq.call(null,inst_27505);
var state_27553__$1 = (function (){var statearr_27577 = state_27553;
(statearr_27577[(7)] = inst_27519__$1);

return statearr_27577;
})();
if(inst_27519__$1){
var statearr_27578_27610 = state_27553__$1;
(statearr_27578_27610[(1)] = (14));

} else {
var statearr_27579_27611 = state_27553__$1;
(statearr_27579_27611[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27554 === (9))){
var inst_27541 = (state_27553[(2)]);
var inst_27542 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27553__$1 = (function (){var statearr_27580 = state_27553;
(statearr_27580[(15)] = inst_27541);

return statearr_27580;
})();
if(cljs.core.truth_(inst_27542)){
var statearr_27581_27612 = state_27553__$1;
(statearr_27581_27612[(1)] = (21));

} else {
var statearr_27582_27613 = state_27553__$1;
(statearr_27582_27613[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27554 === (5))){
var inst_27497 = cljs.core.async.close_BANG_.call(null,out);
var state_27553__$1 = state_27553;
var statearr_27583_27614 = state_27553__$1;
(statearr_27583_27614[(2)] = inst_27497);

(statearr_27583_27614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27554 === (14))){
var inst_27519 = (state_27553[(7)]);
var inst_27521 = cljs.core.chunked_seq_QMARK_.call(null,inst_27519);
var state_27553__$1 = state_27553;
if(inst_27521){
var statearr_27584_27615 = state_27553__$1;
(statearr_27584_27615[(1)] = (17));

} else {
var statearr_27585_27616 = state_27553__$1;
(statearr_27585_27616[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27554 === (16))){
var inst_27537 = (state_27553[(2)]);
var state_27553__$1 = state_27553;
var statearr_27586_27617 = state_27553__$1;
(statearr_27586_27617[(2)] = inst_27537);

(statearr_27586_27617[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27554 === (10))){
var inst_27506 = (state_27553[(8)]);
var inst_27508 = (state_27553[(10)]);
var inst_27513 = cljs.core._nth.call(null,inst_27506,inst_27508);
var state_27553__$1 = state_27553;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27553__$1,(13),out,inst_27513);
} else {
if((state_val_27554 === (18))){
var inst_27519 = (state_27553[(7)]);
var inst_27528 = cljs.core.first.call(null,inst_27519);
var state_27553__$1 = state_27553;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27553__$1,(20),out,inst_27528);
} else {
if((state_val_27554 === (8))){
var inst_27508 = (state_27553[(10)]);
var inst_27507 = (state_27553[(12)]);
var inst_27510 = (inst_27508 < inst_27507);
var inst_27511 = inst_27510;
var state_27553__$1 = state_27553;
if(cljs.core.truth_(inst_27511)){
var statearr_27587_27618 = state_27553__$1;
(statearr_27587_27618[(1)] = (10));

} else {
var statearr_27588_27619 = state_27553__$1;
(statearr_27588_27619[(1)] = (11));

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
});})(c__21347__auto__))
;
return ((function (switch__21285__auto__,c__21347__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21286__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21286__auto____0 = (function (){
var statearr_27592 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27592[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21286__auto__);

(statearr_27592[(1)] = (1));

return statearr_27592;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21286__auto____1 = (function (state_27553){
while(true){
var ret_value__21287__auto__ = (function (){try{while(true){
var result__21288__auto__ = switch__21285__auto__.call(null,state_27553);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21288__auto__;
}
break;
}
}catch (e27593){if((e27593 instanceof Object)){
var ex__21289__auto__ = e27593;
var statearr_27594_27620 = state_27553;
(statearr_27594_27620[(5)] = ex__21289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27553);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27593;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27621 = state_27553;
state_27553 = G__27621;
continue;
} else {
return ret_value__21287__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21286__auto__ = function(state_27553){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21286__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21286__auto____1.call(this,state_27553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21286__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21286__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21286__auto__;
})()
;})(switch__21285__auto__,c__21347__auto__))
})();
var state__21349__auto__ = (function (){var statearr_27595 = f__21348__auto__.call(null);
(statearr_27595[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21347__auto__);

return statearr_27595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21349__auto__);
});})(c__21347__auto__))
);

return c__21347__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__27623 = arguments.length;
switch (G__27623) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__27626 = arguments.length;
switch (G__27626) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__27629 = arguments.length;
switch (G__27629) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21347__auto___27679 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21347__auto___27679,out){
return (function (){
var f__21348__auto__ = (function (){var switch__21285__auto__ = ((function (c__21347__auto___27679,out){
return (function (state_27653){
var state_val_27654 = (state_27653[(1)]);
if((state_val_27654 === (7))){
var inst_27648 = (state_27653[(2)]);
var state_27653__$1 = state_27653;
var statearr_27655_27680 = state_27653__$1;
(statearr_27655_27680[(2)] = inst_27648);

(statearr_27655_27680[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27654 === (1))){
var inst_27630 = null;
var state_27653__$1 = (function (){var statearr_27656 = state_27653;
(statearr_27656[(7)] = inst_27630);

return statearr_27656;
})();
var statearr_27657_27681 = state_27653__$1;
(statearr_27657_27681[(2)] = null);

(statearr_27657_27681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27654 === (4))){
var inst_27633 = (state_27653[(8)]);
var inst_27633__$1 = (state_27653[(2)]);
var inst_27634 = (inst_27633__$1 == null);
var inst_27635 = cljs.core.not.call(null,inst_27634);
var state_27653__$1 = (function (){var statearr_27658 = state_27653;
(statearr_27658[(8)] = inst_27633__$1);

return statearr_27658;
})();
if(inst_27635){
var statearr_27659_27682 = state_27653__$1;
(statearr_27659_27682[(1)] = (5));

} else {
var statearr_27660_27683 = state_27653__$1;
(statearr_27660_27683[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27654 === (6))){
var state_27653__$1 = state_27653;
var statearr_27661_27684 = state_27653__$1;
(statearr_27661_27684[(2)] = null);

(statearr_27661_27684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27654 === (3))){
var inst_27650 = (state_27653[(2)]);
var inst_27651 = cljs.core.async.close_BANG_.call(null,out);
var state_27653__$1 = (function (){var statearr_27662 = state_27653;
(statearr_27662[(9)] = inst_27650);

return statearr_27662;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27653__$1,inst_27651);
} else {
if((state_val_27654 === (2))){
var state_27653__$1 = state_27653;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27653__$1,(4),ch);
} else {
if((state_val_27654 === (11))){
var inst_27633 = (state_27653[(8)]);
var inst_27642 = (state_27653[(2)]);
var inst_27630 = inst_27633;
var state_27653__$1 = (function (){var statearr_27663 = state_27653;
(statearr_27663[(10)] = inst_27642);

(statearr_27663[(7)] = inst_27630);

return statearr_27663;
})();
var statearr_27664_27685 = state_27653__$1;
(statearr_27664_27685[(2)] = null);

(statearr_27664_27685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27654 === (9))){
var inst_27633 = (state_27653[(8)]);
var state_27653__$1 = state_27653;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27653__$1,(11),out,inst_27633);
} else {
if((state_val_27654 === (5))){
var inst_27633 = (state_27653[(8)]);
var inst_27630 = (state_27653[(7)]);
var inst_27637 = cljs.core._EQ_.call(null,inst_27633,inst_27630);
var state_27653__$1 = state_27653;
if(inst_27637){
var statearr_27666_27686 = state_27653__$1;
(statearr_27666_27686[(1)] = (8));

} else {
var statearr_27667_27687 = state_27653__$1;
(statearr_27667_27687[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27654 === (10))){
var inst_27645 = (state_27653[(2)]);
var state_27653__$1 = state_27653;
var statearr_27668_27688 = state_27653__$1;
(statearr_27668_27688[(2)] = inst_27645);

(statearr_27668_27688[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27654 === (8))){
var inst_27630 = (state_27653[(7)]);
var tmp27665 = inst_27630;
var inst_27630__$1 = tmp27665;
var state_27653__$1 = (function (){var statearr_27669 = state_27653;
(statearr_27669[(7)] = inst_27630__$1);

return statearr_27669;
})();
var statearr_27670_27689 = state_27653__$1;
(statearr_27670_27689[(2)] = null);

(statearr_27670_27689[(1)] = (2));


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
});})(c__21347__auto___27679,out))
;
return ((function (switch__21285__auto__,c__21347__auto___27679,out){
return (function() {
var cljs$core$async$state_machine__21286__auto__ = null;
var cljs$core$async$state_machine__21286__auto____0 = (function (){
var statearr_27674 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27674[(0)] = cljs$core$async$state_machine__21286__auto__);

(statearr_27674[(1)] = (1));

return statearr_27674;
});
var cljs$core$async$state_machine__21286__auto____1 = (function (state_27653){
while(true){
var ret_value__21287__auto__ = (function (){try{while(true){
var result__21288__auto__ = switch__21285__auto__.call(null,state_27653);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21288__auto__;
}
break;
}
}catch (e27675){if((e27675 instanceof Object)){
var ex__21289__auto__ = e27675;
var statearr_27676_27690 = state_27653;
(statearr_27676_27690[(5)] = ex__21289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27675;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27691 = state_27653;
state_27653 = G__27691;
continue;
} else {
return ret_value__21287__auto__;
}
break;
}
});
cljs$core$async$state_machine__21286__auto__ = function(state_27653){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21286__auto____1.call(this,state_27653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21286__auto____0;
cljs$core$async$state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21286__auto____1;
return cljs$core$async$state_machine__21286__auto__;
})()
;})(switch__21285__auto__,c__21347__auto___27679,out))
})();
var state__21349__auto__ = (function (){var statearr_27677 = f__21348__auto__.call(null);
(statearr_27677[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21347__auto___27679);

return statearr_27677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21349__auto__);
});})(c__21347__auto___27679,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__27693 = arguments.length;
switch (G__27693) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21347__auto___27762 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21347__auto___27762,out){
return (function (){
var f__21348__auto__ = (function (){var switch__21285__auto__ = ((function (c__21347__auto___27762,out){
return (function (state_27731){
var state_val_27732 = (state_27731[(1)]);
if((state_val_27732 === (7))){
var inst_27727 = (state_27731[(2)]);
var state_27731__$1 = state_27731;
var statearr_27733_27763 = state_27731__$1;
(statearr_27733_27763[(2)] = inst_27727);

(statearr_27733_27763[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27732 === (1))){
var inst_27694 = (new Array(n));
var inst_27695 = inst_27694;
var inst_27696 = (0);
var state_27731__$1 = (function (){var statearr_27734 = state_27731;
(statearr_27734[(7)] = inst_27696);

(statearr_27734[(8)] = inst_27695);

return statearr_27734;
})();
var statearr_27735_27764 = state_27731__$1;
(statearr_27735_27764[(2)] = null);

(statearr_27735_27764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27732 === (4))){
var inst_27699 = (state_27731[(9)]);
var inst_27699__$1 = (state_27731[(2)]);
var inst_27700 = (inst_27699__$1 == null);
var inst_27701 = cljs.core.not.call(null,inst_27700);
var state_27731__$1 = (function (){var statearr_27736 = state_27731;
(statearr_27736[(9)] = inst_27699__$1);

return statearr_27736;
})();
if(inst_27701){
var statearr_27737_27765 = state_27731__$1;
(statearr_27737_27765[(1)] = (5));

} else {
var statearr_27738_27766 = state_27731__$1;
(statearr_27738_27766[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27732 === (15))){
var inst_27721 = (state_27731[(2)]);
var state_27731__$1 = state_27731;
var statearr_27739_27767 = state_27731__$1;
(statearr_27739_27767[(2)] = inst_27721);

(statearr_27739_27767[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27732 === (13))){
var state_27731__$1 = state_27731;
var statearr_27740_27768 = state_27731__$1;
(statearr_27740_27768[(2)] = null);

(statearr_27740_27768[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27732 === (6))){
var inst_27696 = (state_27731[(7)]);
var inst_27717 = (inst_27696 > (0));
var state_27731__$1 = state_27731;
if(cljs.core.truth_(inst_27717)){
var statearr_27741_27769 = state_27731__$1;
(statearr_27741_27769[(1)] = (12));

} else {
var statearr_27742_27770 = state_27731__$1;
(statearr_27742_27770[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27732 === (3))){
var inst_27729 = (state_27731[(2)]);
var state_27731__$1 = state_27731;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27731__$1,inst_27729);
} else {
if((state_val_27732 === (12))){
var inst_27695 = (state_27731[(8)]);
var inst_27719 = cljs.core.vec.call(null,inst_27695);
var state_27731__$1 = state_27731;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27731__$1,(15),out,inst_27719);
} else {
if((state_val_27732 === (2))){
var state_27731__$1 = state_27731;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27731__$1,(4),ch);
} else {
if((state_val_27732 === (11))){
var inst_27711 = (state_27731[(2)]);
var inst_27712 = (new Array(n));
var inst_27695 = inst_27712;
var inst_27696 = (0);
var state_27731__$1 = (function (){var statearr_27743 = state_27731;
(statearr_27743[(10)] = inst_27711);

(statearr_27743[(7)] = inst_27696);

(statearr_27743[(8)] = inst_27695);

return statearr_27743;
})();
var statearr_27744_27771 = state_27731__$1;
(statearr_27744_27771[(2)] = null);

(statearr_27744_27771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27732 === (9))){
var inst_27695 = (state_27731[(8)]);
var inst_27709 = cljs.core.vec.call(null,inst_27695);
var state_27731__$1 = state_27731;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27731__$1,(11),out,inst_27709);
} else {
if((state_val_27732 === (5))){
var inst_27699 = (state_27731[(9)]);
var inst_27704 = (state_27731[(11)]);
var inst_27696 = (state_27731[(7)]);
var inst_27695 = (state_27731[(8)]);
var inst_27703 = (inst_27695[inst_27696] = inst_27699);
var inst_27704__$1 = (inst_27696 + (1));
var inst_27705 = (inst_27704__$1 < n);
var state_27731__$1 = (function (){var statearr_27745 = state_27731;
(statearr_27745[(12)] = inst_27703);

(statearr_27745[(11)] = inst_27704__$1);

return statearr_27745;
})();
if(cljs.core.truth_(inst_27705)){
var statearr_27746_27772 = state_27731__$1;
(statearr_27746_27772[(1)] = (8));

} else {
var statearr_27747_27773 = state_27731__$1;
(statearr_27747_27773[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27732 === (14))){
var inst_27724 = (state_27731[(2)]);
var inst_27725 = cljs.core.async.close_BANG_.call(null,out);
var state_27731__$1 = (function (){var statearr_27749 = state_27731;
(statearr_27749[(13)] = inst_27724);

return statearr_27749;
})();
var statearr_27750_27774 = state_27731__$1;
(statearr_27750_27774[(2)] = inst_27725);

(statearr_27750_27774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27732 === (10))){
var inst_27715 = (state_27731[(2)]);
var state_27731__$1 = state_27731;
var statearr_27751_27775 = state_27731__$1;
(statearr_27751_27775[(2)] = inst_27715);

(statearr_27751_27775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27732 === (8))){
var inst_27704 = (state_27731[(11)]);
var inst_27695 = (state_27731[(8)]);
var tmp27748 = inst_27695;
var inst_27695__$1 = tmp27748;
var inst_27696 = inst_27704;
var state_27731__$1 = (function (){var statearr_27752 = state_27731;
(statearr_27752[(7)] = inst_27696);

(statearr_27752[(8)] = inst_27695__$1);

return statearr_27752;
})();
var statearr_27753_27776 = state_27731__$1;
(statearr_27753_27776[(2)] = null);

(statearr_27753_27776[(1)] = (2));


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
});})(c__21347__auto___27762,out))
;
return ((function (switch__21285__auto__,c__21347__auto___27762,out){
return (function() {
var cljs$core$async$state_machine__21286__auto__ = null;
var cljs$core$async$state_machine__21286__auto____0 = (function (){
var statearr_27757 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27757[(0)] = cljs$core$async$state_machine__21286__auto__);

(statearr_27757[(1)] = (1));

return statearr_27757;
});
var cljs$core$async$state_machine__21286__auto____1 = (function (state_27731){
while(true){
var ret_value__21287__auto__ = (function (){try{while(true){
var result__21288__auto__ = switch__21285__auto__.call(null,state_27731);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21288__auto__;
}
break;
}
}catch (e27758){if((e27758 instanceof Object)){
var ex__21289__auto__ = e27758;
var statearr_27759_27777 = state_27731;
(statearr_27759_27777[(5)] = ex__21289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27731);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27758;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27778 = state_27731;
state_27731 = G__27778;
continue;
} else {
return ret_value__21287__auto__;
}
break;
}
});
cljs$core$async$state_machine__21286__auto__ = function(state_27731){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21286__auto____1.call(this,state_27731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21286__auto____0;
cljs$core$async$state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21286__auto____1;
return cljs$core$async$state_machine__21286__auto__;
})()
;})(switch__21285__auto__,c__21347__auto___27762,out))
})();
var state__21349__auto__ = (function (){var statearr_27760 = f__21348__auto__.call(null);
(statearr_27760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21347__auto___27762);

return statearr_27760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21349__auto__);
});})(c__21347__auto___27762,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__27780 = arguments.length;
switch (G__27780) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21347__auto___27853 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21347__auto___27853,out){
return (function (){
var f__21348__auto__ = (function (){var switch__21285__auto__ = ((function (c__21347__auto___27853,out){
return (function (state_27822){
var state_val_27823 = (state_27822[(1)]);
if((state_val_27823 === (7))){
var inst_27818 = (state_27822[(2)]);
var state_27822__$1 = state_27822;
var statearr_27824_27854 = state_27822__$1;
(statearr_27824_27854[(2)] = inst_27818);

(statearr_27824_27854[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27823 === (1))){
var inst_27781 = [];
var inst_27782 = inst_27781;
var inst_27783 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27822__$1 = (function (){var statearr_27825 = state_27822;
(statearr_27825[(7)] = inst_27782);

(statearr_27825[(8)] = inst_27783);

return statearr_27825;
})();
var statearr_27826_27855 = state_27822__$1;
(statearr_27826_27855[(2)] = null);

(statearr_27826_27855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27823 === (4))){
var inst_27786 = (state_27822[(9)]);
var inst_27786__$1 = (state_27822[(2)]);
var inst_27787 = (inst_27786__$1 == null);
var inst_27788 = cljs.core.not.call(null,inst_27787);
var state_27822__$1 = (function (){var statearr_27827 = state_27822;
(statearr_27827[(9)] = inst_27786__$1);

return statearr_27827;
})();
if(inst_27788){
var statearr_27828_27856 = state_27822__$1;
(statearr_27828_27856[(1)] = (5));

} else {
var statearr_27829_27857 = state_27822__$1;
(statearr_27829_27857[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27823 === (15))){
var inst_27812 = (state_27822[(2)]);
var state_27822__$1 = state_27822;
var statearr_27830_27858 = state_27822__$1;
(statearr_27830_27858[(2)] = inst_27812);

(statearr_27830_27858[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27823 === (13))){
var state_27822__$1 = state_27822;
var statearr_27831_27859 = state_27822__$1;
(statearr_27831_27859[(2)] = null);

(statearr_27831_27859[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27823 === (6))){
var inst_27782 = (state_27822[(7)]);
var inst_27807 = inst_27782.length;
var inst_27808 = (inst_27807 > (0));
var state_27822__$1 = state_27822;
if(cljs.core.truth_(inst_27808)){
var statearr_27832_27860 = state_27822__$1;
(statearr_27832_27860[(1)] = (12));

} else {
var statearr_27833_27861 = state_27822__$1;
(statearr_27833_27861[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27823 === (3))){
var inst_27820 = (state_27822[(2)]);
var state_27822__$1 = state_27822;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27822__$1,inst_27820);
} else {
if((state_val_27823 === (12))){
var inst_27782 = (state_27822[(7)]);
var inst_27810 = cljs.core.vec.call(null,inst_27782);
var state_27822__$1 = state_27822;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27822__$1,(15),out,inst_27810);
} else {
if((state_val_27823 === (2))){
var state_27822__$1 = state_27822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27822__$1,(4),ch);
} else {
if((state_val_27823 === (11))){
var inst_27786 = (state_27822[(9)]);
var inst_27790 = (state_27822[(10)]);
var inst_27800 = (state_27822[(2)]);
var inst_27801 = [];
var inst_27802 = inst_27801.push(inst_27786);
var inst_27782 = inst_27801;
var inst_27783 = inst_27790;
var state_27822__$1 = (function (){var statearr_27834 = state_27822;
(statearr_27834[(11)] = inst_27802);

(statearr_27834[(12)] = inst_27800);

(statearr_27834[(7)] = inst_27782);

(statearr_27834[(8)] = inst_27783);

return statearr_27834;
})();
var statearr_27835_27862 = state_27822__$1;
(statearr_27835_27862[(2)] = null);

(statearr_27835_27862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27823 === (9))){
var inst_27782 = (state_27822[(7)]);
var inst_27798 = cljs.core.vec.call(null,inst_27782);
var state_27822__$1 = state_27822;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27822__$1,(11),out,inst_27798);
} else {
if((state_val_27823 === (5))){
var inst_27786 = (state_27822[(9)]);
var inst_27790 = (state_27822[(10)]);
var inst_27783 = (state_27822[(8)]);
var inst_27790__$1 = f.call(null,inst_27786);
var inst_27791 = cljs.core._EQ_.call(null,inst_27790__$1,inst_27783);
var inst_27792 = cljs.core.keyword_identical_QMARK_.call(null,inst_27783,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27793 = (inst_27791) || (inst_27792);
var state_27822__$1 = (function (){var statearr_27836 = state_27822;
(statearr_27836[(10)] = inst_27790__$1);

return statearr_27836;
})();
if(cljs.core.truth_(inst_27793)){
var statearr_27837_27863 = state_27822__$1;
(statearr_27837_27863[(1)] = (8));

} else {
var statearr_27838_27864 = state_27822__$1;
(statearr_27838_27864[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27823 === (14))){
var inst_27815 = (state_27822[(2)]);
var inst_27816 = cljs.core.async.close_BANG_.call(null,out);
var state_27822__$1 = (function (){var statearr_27840 = state_27822;
(statearr_27840[(13)] = inst_27815);

return statearr_27840;
})();
var statearr_27841_27865 = state_27822__$1;
(statearr_27841_27865[(2)] = inst_27816);

(statearr_27841_27865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27823 === (10))){
var inst_27805 = (state_27822[(2)]);
var state_27822__$1 = state_27822;
var statearr_27842_27866 = state_27822__$1;
(statearr_27842_27866[(2)] = inst_27805);

(statearr_27842_27866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27823 === (8))){
var inst_27786 = (state_27822[(9)]);
var inst_27782 = (state_27822[(7)]);
var inst_27790 = (state_27822[(10)]);
var inst_27795 = inst_27782.push(inst_27786);
var tmp27839 = inst_27782;
var inst_27782__$1 = tmp27839;
var inst_27783 = inst_27790;
var state_27822__$1 = (function (){var statearr_27843 = state_27822;
(statearr_27843[(14)] = inst_27795);

(statearr_27843[(7)] = inst_27782__$1);

(statearr_27843[(8)] = inst_27783);

return statearr_27843;
})();
var statearr_27844_27867 = state_27822__$1;
(statearr_27844_27867[(2)] = null);

(statearr_27844_27867[(1)] = (2));


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
});})(c__21347__auto___27853,out))
;
return ((function (switch__21285__auto__,c__21347__auto___27853,out){
return (function() {
var cljs$core$async$state_machine__21286__auto__ = null;
var cljs$core$async$state_machine__21286__auto____0 = (function (){
var statearr_27848 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27848[(0)] = cljs$core$async$state_machine__21286__auto__);

(statearr_27848[(1)] = (1));

return statearr_27848;
});
var cljs$core$async$state_machine__21286__auto____1 = (function (state_27822){
while(true){
var ret_value__21287__auto__ = (function (){try{while(true){
var result__21288__auto__ = switch__21285__auto__.call(null,state_27822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21288__auto__;
}
break;
}
}catch (e27849){if((e27849 instanceof Object)){
var ex__21289__auto__ = e27849;
var statearr_27850_27868 = state_27822;
(statearr_27850_27868[(5)] = ex__21289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27849;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27869 = state_27822;
state_27822 = G__27869;
continue;
} else {
return ret_value__21287__auto__;
}
break;
}
});
cljs$core$async$state_machine__21286__auto__ = function(state_27822){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21286__auto____1.call(this,state_27822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21286__auto____0;
cljs$core$async$state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21286__auto____1;
return cljs$core$async$state_machine__21286__auto__;
})()
;})(switch__21285__auto__,c__21347__auto___27853,out))
})();
var state__21349__auto__ = (function (){var statearr_27851 = f__21348__auto__.call(null);
(statearr_27851[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21347__auto___27853);

return statearr_27851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21349__auto__);
});})(c__21347__auto___27853,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map