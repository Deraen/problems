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
if(typeof cljs.core.async.t9360 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t9360 = (function (fn_handler,f,meta9361){
this.fn_handler = fn_handler;
this.f = f;
this.meta9361 = meta9361;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t9360.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9362,meta9361__$1){
var self__ = this;
var _9362__$1 = this;
return (new cljs.core.async.t9360(self__.fn_handler,self__.f,meta9361__$1));
});

cljs.core.async.t9360.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9362){
var self__ = this;
var _9362__$1 = this;
return self__.meta9361;
});

cljs.core.async.t9360.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t9360.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t9360.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t9360.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta9361","meta9361",-2088830199,null)], null);
});

cljs.core.async.t9360.cljs$lang$type = true;

cljs.core.async.t9360.cljs$lang$ctorStr = "cljs.core.async/t9360";

cljs.core.async.t9360.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t9360");
});

cljs.core.async.__GT_t9360 = (function cljs$core$async$fn_handler_$___GT_t9360(fn_handler__$1,f__$1,meta9361){
return (new cljs.core.async.t9360(fn_handler__$1,f__$1,meta9361));
});

}

return (new cljs.core.async.t9360(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var G__9364 = buff;
if(G__9364){
var bit__4983__auto__ = null;
if(cljs.core.truth_((function (){var or__4309__auto__ = bit__4983__auto__;
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return G__9364.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__9364.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9364);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9364);
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
var G__9366 = arguments.length;
switch (G__9366) {
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
var G__9369 = arguments.length;
switch (G__9369) {
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
var val_9371 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_9371);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_9371,ret){
return (function (){
return fn1.call(null,val_9371);
});})(val_9371,ret))
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
var G__9373 = arguments.length;
switch (G__9373) {
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
var n__5194__auto___9375 = n;
var x_9376 = (0);
while(true){
if((x_9376 < n__5194__auto___9375)){
(a[x_9376] = (0));

var G__9377 = (x_9376 + (1));
x_9376 = G__9377;
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

var G__9378 = (i + (1));
i = G__9378;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t9382 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t9382 = (function (alt_flag,flag,meta9383){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta9383 = meta9383;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t9382.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_9384,meta9383__$1){
var self__ = this;
var _9384__$1 = this;
return (new cljs.core.async.t9382(self__.alt_flag,self__.flag,meta9383__$1));
});})(flag))
;

cljs.core.async.t9382.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_9384){
var self__ = this;
var _9384__$1 = this;
return self__.meta9383;
});})(flag))
;

cljs.core.async.t9382.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t9382.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t9382.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t9382.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta9383","meta9383",892742929,null)], null);
});})(flag))
;

cljs.core.async.t9382.cljs$lang$type = true;

cljs.core.async.t9382.cljs$lang$ctorStr = "cljs.core.async/t9382";

cljs.core.async.t9382.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t9382");
});})(flag))
;

cljs.core.async.__GT_t9382 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t9382(alt_flag__$1,flag__$1,meta9383){
return (new cljs.core.async.t9382(alt_flag__$1,flag__$1,meta9383));
});})(flag))
;

}

return (new cljs.core.async.t9382(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t9388 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t9388 = (function (alt_handler,flag,cb,meta9389){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta9389 = meta9389;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t9388.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9390,meta9389__$1){
var self__ = this;
var _9390__$1 = this;
return (new cljs.core.async.t9388(self__.alt_handler,self__.flag,self__.cb,meta9389__$1));
});

cljs.core.async.t9388.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9390){
var self__ = this;
var _9390__$1 = this;
return self__.meta9389;
});

cljs.core.async.t9388.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t9388.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t9388.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t9388.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta9389","meta9389",-595366378,null)], null);
});

cljs.core.async.t9388.cljs$lang$type = true;

cljs.core.async.t9388.cljs$lang$ctorStr = "cljs.core.async/t9388";

cljs.core.async.t9388.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t9388");
});

cljs.core.async.__GT_t9388 = (function cljs$core$async$alt_handler_$___GT_t9388(alt_handler__$1,flag__$1,cb__$1,meta9389){
return (new cljs.core.async.t9388(alt_handler__$1,flag__$1,cb__$1,meta9389));
});

}

return (new cljs.core.async.t9388(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__9391_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9391_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9392_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9392_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4309__auto__ = wport;
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return port;
}
})()], null));
} else {
var G__9393 = (i + (1));
i = G__9393;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4309__auto__ = ret;
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4422__auto__ = (function (){var and__4297__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4297__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4297__auto__;
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
var argseq__5349__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5349__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__9396){
var map__9397 = p__9396;
var map__9397__$1 = ((cljs.core.seq_QMARK_.call(null,map__9397))?cljs.core.apply.call(null,cljs.core.hash_map,map__9397):map__9397);
var opts = map__9397__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq9394){
var G__9395 = cljs.core.first.call(null,seq9394);
var seq9394__$1 = cljs.core.next.call(null,seq9394);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9395,seq9394__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__9399 = arguments.length;
switch (G__9399) {
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
var c__6888__auto___9448 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6888__auto___9448){
return (function (){
var f__6889__auto__ = (function (){var switch__6826__auto__ = ((function (c__6888__auto___9448){
return (function (state_9423){
var state_val_9424 = (state_9423[(1)]);
if((state_val_9424 === (7))){
var inst_9419 = (state_9423[(2)]);
var state_9423__$1 = state_9423;
var statearr_9425_9449 = state_9423__$1;
(statearr_9425_9449[(2)] = inst_9419);

(statearr_9425_9449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9424 === (1))){
var state_9423__$1 = state_9423;
var statearr_9426_9450 = state_9423__$1;
(statearr_9426_9450[(2)] = null);

(statearr_9426_9450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9424 === (4))){
var inst_9402 = (state_9423[(7)]);
var inst_9402__$1 = (state_9423[(2)]);
var inst_9403 = (inst_9402__$1 == null);
var state_9423__$1 = (function (){var statearr_9427 = state_9423;
(statearr_9427[(7)] = inst_9402__$1);

return statearr_9427;
})();
if(cljs.core.truth_(inst_9403)){
var statearr_9428_9451 = state_9423__$1;
(statearr_9428_9451[(1)] = (5));

} else {
var statearr_9429_9452 = state_9423__$1;
(statearr_9429_9452[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9424 === (13))){
var state_9423__$1 = state_9423;
var statearr_9430_9453 = state_9423__$1;
(statearr_9430_9453[(2)] = null);

(statearr_9430_9453[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9424 === (6))){
var inst_9402 = (state_9423[(7)]);
var state_9423__$1 = state_9423;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9423__$1,(11),to,inst_9402);
} else {
if((state_val_9424 === (3))){
var inst_9421 = (state_9423[(2)]);
var state_9423__$1 = state_9423;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9423__$1,inst_9421);
} else {
if((state_val_9424 === (12))){
var state_9423__$1 = state_9423;
var statearr_9431_9454 = state_9423__$1;
(statearr_9431_9454[(2)] = null);

(statearr_9431_9454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9424 === (2))){
var state_9423__$1 = state_9423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9423__$1,(4),from);
} else {
if((state_val_9424 === (11))){
var inst_9412 = (state_9423[(2)]);
var state_9423__$1 = state_9423;
if(cljs.core.truth_(inst_9412)){
var statearr_9432_9455 = state_9423__$1;
(statearr_9432_9455[(1)] = (12));

} else {
var statearr_9433_9456 = state_9423__$1;
(statearr_9433_9456[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9424 === (9))){
var state_9423__$1 = state_9423;
var statearr_9434_9457 = state_9423__$1;
(statearr_9434_9457[(2)] = null);

(statearr_9434_9457[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9424 === (5))){
var state_9423__$1 = state_9423;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9435_9458 = state_9423__$1;
(statearr_9435_9458[(1)] = (8));

} else {
var statearr_9436_9459 = state_9423__$1;
(statearr_9436_9459[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9424 === (14))){
var inst_9417 = (state_9423[(2)]);
var state_9423__$1 = state_9423;
var statearr_9437_9460 = state_9423__$1;
(statearr_9437_9460[(2)] = inst_9417);

(statearr_9437_9460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9424 === (10))){
var inst_9409 = (state_9423[(2)]);
var state_9423__$1 = state_9423;
var statearr_9438_9461 = state_9423__$1;
(statearr_9438_9461[(2)] = inst_9409);

(statearr_9438_9461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9424 === (8))){
var inst_9406 = cljs.core.async.close_BANG_.call(null,to);
var state_9423__$1 = state_9423;
var statearr_9439_9462 = state_9423__$1;
(statearr_9439_9462[(2)] = inst_9406);

(statearr_9439_9462[(1)] = (10));


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
});})(c__6888__auto___9448))
;
return ((function (switch__6826__auto__,c__6888__auto___9448){
return (function() {
var cljs$core$async$state_machine__6827__auto__ = null;
var cljs$core$async$state_machine__6827__auto____0 = (function (){
var statearr_9443 = [null,null,null,null,null,null,null,null];
(statearr_9443[(0)] = cljs$core$async$state_machine__6827__auto__);

(statearr_9443[(1)] = (1));

return statearr_9443;
});
var cljs$core$async$state_machine__6827__auto____1 = (function (state_9423){
while(true){
var ret_value__6828__auto__ = (function (){try{while(true){
var result__6829__auto__ = switch__6826__auto__.call(null,state_9423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6829__auto__;
}
break;
}
}catch (e9444){if((e9444 instanceof Object)){
var ex__6830__auto__ = e9444;
var statearr_9445_9463 = state_9423;
(statearr_9445_9463[(5)] = ex__6830__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9444;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9464 = state_9423;
state_9423 = G__9464;
continue;
} else {
return ret_value__6828__auto__;
}
break;
}
});
cljs$core$async$state_machine__6827__auto__ = function(state_9423){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6827__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6827__auto____1.call(this,state_9423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6827__auto____0;
cljs$core$async$state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6827__auto____1;
return cljs$core$async$state_machine__6827__auto__;
})()
;})(switch__6826__auto__,c__6888__auto___9448))
})();
var state__6890__auto__ = (function (){var statearr_9446 = f__6889__auto__.call(null);
(statearr_9446[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6888__auto___9448);

return statearr_9446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6890__auto__);
});})(c__6888__auto___9448))
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
return (function (p__9648){
var vec__9649 = p__9648;
var v = cljs.core.nth.call(null,vec__9649,(0),null);
var p = cljs.core.nth.call(null,vec__9649,(1),null);
var job = vec__9649;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6888__auto___9831 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6888__auto___9831,res,vec__9649,v,p,job,jobs,results){
return (function (){
var f__6889__auto__ = (function (){var switch__6826__auto__ = ((function (c__6888__auto___9831,res,vec__9649,v,p,job,jobs,results){
return (function (state_9654){
var state_val_9655 = (state_9654[(1)]);
if((state_val_9655 === (1))){
var state_9654__$1 = state_9654;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9654__$1,(2),res,v);
} else {
if((state_val_9655 === (2))){
var inst_9651 = (state_9654[(2)]);
var inst_9652 = cljs.core.async.close_BANG_.call(null,res);
var state_9654__$1 = (function (){var statearr_9656 = state_9654;
(statearr_9656[(7)] = inst_9651);

return statearr_9656;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9654__$1,inst_9652);
} else {
return null;
}
}
});})(c__6888__auto___9831,res,vec__9649,v,p,job,jobs,results))
;
return ((function (switch__6826__auto__,c__6888__auto___9831,res,vec__9649,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6827__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6827__auto____0 = (function (){
var statearr_9660 = [null,null,null,null,null,null,null,null];
(statearr_9660[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6827__auto__);

(statearr_9660[(1)] = (1));

return statearr_9660;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6827__auto____1 = (function (state_9654){
while(true){
var ret_value__6828__auto__ = (function (){try{while(true){
var result__6829__auto__ = switch__6826__auto__.call(null,state_9654);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6829__auto__;
}
break;
}
}catch (e9661){if((e9661 instanceof Object)){
var ex__6830__auto__ = e9661;
var statearr_9662_9832 = state_9654;
(statearr_9662_9832[(5)] = ex__6830__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9661;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9833 = state_9654;
state_9654 = G__9833;
continue;
} else {
return ret_value__6828__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6827__auto__ = function(state_9654){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6827__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6827__auto____1.call(this,state_9654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6827__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6827__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6827__auto__;
})()
;})(switch__6826__auto__,c__6888__auto___9831,res,vec__9649,v,p,job,jobs,results))
})();
var state__6890__auto__ = (function (){var statearr_9663 = f__6889__auto__.call(null);
(statearr_9663[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6888__auto___9831);

return statearr_9663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6890__auto__);
});})(c__6888__auto___9831,res,vec__9649,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__9664){
var vec__9665 = p__9664;
var v = cljs.core.nth.call(null,vec__9665,(0),null);
var p = cljs.core.nth.call(null,vec__9665,(1),null);
var job = vec__9665;
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
var n__5194__auto___9834 = n;
var __9835 = (0);
while(true){
if((__9835 < n__5194__auto___9834)){
var G__9666_9836 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__9666_9836) {
case "compute":
var c__6888__auto___9838 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__9835,c__6888__auto___9838,G__9666_9836,n__5194__auto___9834,jobs,results,process,async){
return (function (){
var f__6889__auto__ = (function (){var switch__6826__auto__ = ((function (__9835,c__6888__auto___9838,G__9666_9836,n__5194__auto___9834,jobs,results,process,async){
return (function (state_9679){
var state_val_9680 = (state_9679[(1)]);
if((state_val_9680 === (1))){
var state_9679__$1 = state_9679;
var statearr_9681_9839 = state_9679__$1;
(statearr_9681_9839[(2)] = null);

(statearr_9681_9839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9680 === (2))){
var state_9679__$1 = state_9679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9679__$1,(4),jobs);
} else {
if((state_val_9680 === (3))){
var inst_9677 = (state_9679[(2)]);
var state_9679__$1 = state_9679;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9679__$1,inst_9677);
} else {
if((state_val_9680 === (4))){
var inst_9669 = (state_9679[(2)]);
var inst_9670 = process.call(null,inst_9669);
var state_9679__$1 = state_9679;
if(cljs.core.truth_(inst_9670)){
var statearr_9682_9840 = state_9679__$1;
(statearr_9682_9840[(1)] = (5));

} else {
var statearr_9683_9841 = state_9679__$1;
(statearr_9683_9841[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9680 === (5))){
var state_9679__$1 = state_9679;
var statearr_9684_9842 = state_9679__$1;
(statearr_9684_9842[(2)] = null);

(statearr_9684_9842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9680 === (6))){
var state_9679__$1 = state_9679;
var statearr_9685_9843 = state_9679__$1;
(statearr_9685_9843[(2)] = null);

(statearr_9685_9843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9680 === (7))){
var inst_9675 = (state_9679[(2)]);
var state_9679__$1 = state_9679;
var statearr_9686_9844 = state_9679__$1;
(statearr_9686_9844[(2)] = inst_9675);

(statearr_9686_9844[(1)] = (3));


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
});})(__9835,c__6888__auto___9838,G__9666_9836,n__5194__auto___9834,jobs,results,process,async))
;
return ((function (__9835,switch__6826__auto__,c__6888__auto___9838,G__9666_9836,n__5194__auto___9834,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6827__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6827__auto____0 = (function (){
var statearr_9690 = [null,null,null,null,null,null,null];
(statearr_9690[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6827__auto__);

(statearr_9690[(1)] = (1));

return statearr_9690;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6827__auto____1 = (function (state_9679){
while(true){
var ret_value__6828__auto__ = (function (){try{while(true){
var result__6829__auto__ = switch__6826__auto__.call(null,state_9679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6829__auto__;
}
break;
}
}catch (e9691){if((e9691 instanceof Object)){
var ex__6830__auto__ = e9691;
var statearr_9692_9845 = state_9679;
(statearr_9692_9845[(5)] = ex__6830__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9691;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9846 = state_9679;
state_9679 = G__9846;
continue;
} else {
return ret_value__6828__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6827__auto__ = function(state_9679){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6827__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6827__auto____1.call(this,state_9679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6827__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6827__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6827__auto__;
})()
;})(__9835,switch__6826__auto__,c__6888__auto___9838,G__9666_9836,n__5194__auto___9834,jobs,results,process,async))
})();
var state__6890__auto__ = (function (){var statearr_9693 = f__6889__auto__.call(null);
(statearr_9693[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6888__auto___9838);

return statearr_9693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6890__auto__);
});})(__9835,c__6888__auto___9838,G__9666_9836,n__5194__auto___9834,jobs,results,process,async))
);


break;
case "async":
var c__6888__auto___9847 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__9835,c__6888__auto___9847,G__9666_9836,n__5194__auto___9834,jobs,results,process,async){
return (function (){
var f__6889__auto__ = (function (){var switch__6826__auto__ = ((function (__9835,c__6888__auto___9847,G__9666_9836,n__5194__auto___9834,jobs,results,process,async){
return (function (state_9706){
var state_val_9707 = (state_9706[(1)]);
if((state_val_9707 === (1))){
var state_9706__$1 = state_9706;
var statearr_9708_9848 = state_9706__$1;
(statearr_9708_9848[(2)] = null);

(statearr_9708_9848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9707 === (2))){
var state_9706__$1 = state_9706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9706__$1,(4),jobs);
} else {
if((state_val_9707 === (3))){
var inst_9704 = (state_9706[(2)]);
var state_9706__$1 = state_9706;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9706__$1,inst_9704);
} else {
if((state_val_9707 === (4))){
var inst_9696 = (state_9706[(2)]);
var inst_9697 = async.call(null,inst_9696);
var state_9706__$1 = state_9706;
if(cljs.core.truth_(inst_9697)){
var statearr_9709_9849 = state_9706__$1;
(statearr_9709_9849[(1)] = (5));

} else {
var statearr_9710_9850 = state_9706__$1;
(statearr_9710_9850[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9707 === (5))){
var state_9706__$1 = state_9706;
var statearr_9711_9851 = state_9706__$1;
(statearr_9711_9851[(2)] = null);

(statearr_9711_9851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9707 === (6))){
var state_9706__$1 = state_9706;
var statearr_9712_9852 = state_9706__$1;
(statearr_9712_9852[(2)] = null);

(statearr_9712_9852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9707 === (7))){
var inst_9702 = (state_9706[(2)]);
var state_9706__$1 = state_9706;
var statearr_9713_9853 = state_9706__$1;
(statearr_9713_9853[(2)] = inst_9702);

(statearr_9713_9853[(1)] = (3));


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
});})(__9835,c__6888__auto___9847,G__9666_9836,n__5194__auto___9834,jobs,results,process,async))
;
return ((function (__9835,switch__6826__auto__,c__6888__auto___9847,G__9666_9836,n__5194__auto___9834,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6827__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6827__auto____0 = (function (){
var statearr_9717 = [null,null,null,null,null,null,null];
(statearr_9717[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6827__auto__);

(statearr_9717[(1)] = (1));

return statearr_9717;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6827__auto____1 = (function (state_9706){
while(true){
var ret_value__6828__auto__ = (function (){try{while(true){
var result__6829__auto__ = switch__6826__auto__.call(null,state_9706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6829__auto__;
}
break;
}
}catch (e9718){if((e9718 instanceof Object)){
var ex__6830__auto__ = e9718;
var statearr_9719_9854 = state_9706;
(statearr_9719_9854[(5)] = ex__6830__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9718;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9855 = state_9706;
state_9706 = G__9855;
continue;
} else {
return ret_value__6828__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6827__auto__ = function(state_9706){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6827__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6827__auto____1.call(this,state_9706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6827__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6827__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6827__auto__;
})()
;})(__9835,switch__6826__auto__,c__6888__auto___9847,G__9666_9836,n__5194__auto___9834,jobs,results,process,async))
})();
var state__6890__auto__ = (function (){var statearr_9720 = f__6889__auto__.call(null);
(statearr_9720[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6888__auto___9847);

return statearr_9720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6890__auto__);
});})(__9835,c__6888__auto___9847,G__9666_9836,n__5194__auto___9834,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__9856 = (__9835 + (1));
__9835 = G__9856;
continue;
} else {
}
break;
}

var c__6888__auto___9857 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6888__auto___9857,jobs,results,process,async){
return (function (){
var f__6889__auto__ = (function (){var switch__6826__auto__ = ((function (c__6888__auto___9857,jobs,results,process,async){
return (function (state_9742){
var state_val_9743 = (state_9742[(1)]);
if((state_val_9743 === (1))){
var state_9742__$1 = state_9742;
var statearr_9744_9858 = state_9742__$1;
(statearr_9744_9858[(2)] = null);

(statearr_9744_9858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9743 === (2))){
var state_9742__$1 = state_9742;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9742__$1,(4),from);
} else {
if((state_val_9743 === (3))){
var inst_9740 = (state_9742[(2)]);
var state_9742__$1 = state_9742;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9742__$1,inst_9740);
} else {
if((state_val_9743 === (4))){
var inst_9723 = (state_9742[(7)]);
var inst_9723__$1 = (state_9742[(2)]);
var inst_9724 = (inst_9723__$1 == null);
var state_9742__$1 = (function (){var statearr_9745 = state_9742;
(statearr_9745[(7)] = inst_9723__$1);

return statearr_9745;
})();
if(cljs.core.truth_(inst_9724)){
var statearr_9746_9859 = state_9742__$1;
(statearr_9746_9859[(1)] = (5));

} else {
var statearr_9747_9860 = state_9742__$1;
(statearr_9747_9860[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9743 === (5))){
var inst_9726 = cljs.core.async.close_BANG_.call(null,jobs);
var state_9742__$1 = state_9742;
var statearr_9748_9861 = state_9742__$1;
(statearr_9748_9861[(2)] = inst_9726);

(statearr_9748_9861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9743 === (6))){
var inst_9728 = (state_9742[(8)]);
var inst_9723 = (state_9742[(7)]);
var inst_9728__$1 = cljs.core.async.chan.call(null,(1));
var inst_9729 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9730 = [inst_9723,inst_9728__$1];
var inst_9731 = (new cljs.core.PersistentVector(null,2,(5),inst_9729,inst_9730,null));
var state_9742__$1 = (function (){var statearr_9749 = state_9742;
(statearr_9749[(8)] = inst_9728__$1);

return statearr_9749;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9742__$1,(8),jobs,inst_9731);
} else {
if((state_val_9743 === (7))){
var inst_9738 = (state_9742[(2)]);
var state_9742__$1 = state_9742;
var statearr_9750_9862 = state_9742__$1;
(statearr_9750_9862[(2)] = inst_9738);

(statearr_9750_9862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9743 === (8))){
var inst_9728 = (state_9742[(8)]);
var inst_9733 = (state_9742[(2)]);
var state_9742__$1 = (function (){var statearr_9751 = state_9742;
(statearr_9751[(9)] = inst_9733);

return statearr_9751;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9742__$1,(9),results,inst_9728);
} else {
if((state_val_9743 === (9))){
var inst_9735 = (state_9742[(2)]);
var state_9742__$1 = (function (){var statearr_9752 = state_9742;
(statearr_9752[(10)] = inst_9735);

return statearr_9752;
})();
var statearr_9753_9863 = state_9742__$1;
(statearr_9753_9863[(2)] = null);

(statearr_9753_9863[(1)] = (2));


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
});})(c__6888__auto___9857,jobs,results,process,async))
;
return ((function (switch__6826__auto__,c__6888__auto___9857,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6827__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6827__auto____0 = (function (){
var statearr_9757 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9757[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6827__auto__);

(statearr_9757[(1)] = (1));

return statearr_9757;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6827__auto____1 = (function (state_9742){
while(true){
var ret_value__6828__auto__ = (function (){try{while(true){
var result__6829__auto__ = switch__6826__auto__.call(null,state_9742);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6829__auto__;
}
break;
}
}catch (e9758){if((e9758 instanceof Object)){
var ex__6830__auto__ = e9758;
var statearr_9759_9864 = state_9742;
(statearr_9759_9864[(5)] = ex__6830__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9742);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9758;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9865 = state_9742;
state_9742 = G__9865;
continue;
} else {
return ret_value__6828__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6827__auto__ = function(state_9742){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6827__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6827__auto____1.call(this,state_9742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6827__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6827__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6827__auto__;
})()
;})(switch__6826__auto__,c__6888__auto___9857,jobs,results,process,async))
})();
var state__6890__auto__ = (function (){var statearr_9760 = f__6889__auto__.call(null);
(statearr_9760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6888__auto___9857);

return statearr_9760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6890__auto__);
});})(c__6888__auto___9857,jobs,results,process,async))
);


var c__6888__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6888__auto__,jobs,results,process,async){
return (function (){
var f__6889__auto__ = (function (){var switch__6826__auto__ = ((function (c__6888__auto__,jobs,results,process,async){
return (function (state_9798){
var state_val_9799 = (state_9798[(1)]);
if((state_val_9799 === (7))){
var inst_9794 = (state_9798[(2)]);
var state_9798__$1 = state_9798;
var statearr_9800_9866 = state_9798__$1;
(statearr_9800_9866[(2)] = inst_9794);

(statearr_9800_9866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9799 === (20))){
var state_9798__$1 = state_9798;
var statearr_9801_9867 = state_9798__$1;
(statearr_9801_9867[(2)] = null);

(statearr_9801_9867[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9799 === (1))){
var state_9798__$1 = state_9798;
var statearr_9802_9868 = state_9798__$1;
(statearr_9802_9868[(2)] = null);

(statearr_9802_9868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9799 === (4))){
var inst_9763 = (state_9798[(7)]);
var inst_9763__$1 = (state_9798[(2)]);
var inst_9764 = (inst_9763__$1 == null);
var state_9798__$1 = (function (){var statearr_9803 = state_9798;
(statearr_9803[(7)] = inst_9763__$1);

return statearr_9803;
})();
if(cljs.core.truth_(inst_9764)){
var statearr_9804_9869 = state_9798__$1;
(statearr_9804_9869[(1)] = (5));

} else {
var statearr_9805_9870 = state_9798__$1;
(statearr_9805_9870[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9799 === (15))){
var inst_9776 = (state_9798[(8)]);
var state_9798__$1 = state_9798;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9798__$1,(18),to,inst_9776);
} else {
if((state_val_9799 === (21))){
var inst_9789 = (state_9798[(2)]);
var state_9798__$1 = state_9798;
var statearr_9806_9871 = state_9798__$1;
(statearr_9806_9871[(2)] = inst_9789);

(statearr_9806_9871[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9799 === (13))){
var inst_9791 = (state_9798[(2)]);
var state_9798__$1 = (function (){var statearr_9807 = state_9798;
(statearr_9807[(9)] = inst_9791);

return statearr_9807;
})();
var statearr_9808_9872 = state_9798__$1;
(statearr_9808_9872[(2)] = null);

(statearr_9808_9872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9799 === (6))){
var inst_9763 = (state_9798[(7)]);
var state_9798__$1 = state_9798;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9798__$1,(11),inst_9763);
} else {
if((state_val_9799 === (17))){
var inst_9784 = (state_9798[(2)]);
var state_9798__$1 = state_9798;
if(cljs.core.truth_(inst_9784)){
var statearr_9809_9873 = state_9798__$1;
(statearr_9809_9873[(1)] = (19));

} else {
var statearr_9810_9874 = state_9798__$1;
(statearr_9810_9874[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9799 === (3))){
var inst_9796 = (state_9798[(2)]);
var state_9798__$1 = state_9798;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9798__$1,inst_9796);
} else {
if((state_val_9799 === (12))){
var inst_9773 = (state_9798[(10)]);
var state_9798__$1 = state_9798;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9798__$1,(14),inst_9773);
} else {
if((state_val_9799 === (2))){
var state_9798__$1 = state_9798;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9798__$1,(4),results);
} else {
if((state_val_9799 === (19))){
var state_9798__$1 = state_9798;
var statearr_9811_9875 = state_9798__$1;
(statearr_9811_9875[(2)] = null);

(statearr_9811_9875[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9799 === (11))){
var inst_9773 = (state_9798[(2)]);
var state_9798__$1 = (function (){var statearr_9812 = state_9798;
(statearr_9812[(10)] = inst_9773);

return statearr_9812;
})();
var statearr_9813_9876 = state_9798__$1;
(statearr_9813_9876[(2)] = null);

(statearr_9813_9876[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9799 === (9))){
var state_9798__$1 = state_9798;
var statearr_9814_9877 = state_9798__$1;
(statearr_9814_9877[(2)] = null);

(statearr_9814_9877[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9799 === (5))){
var state_9798__$1 = state_9798;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9815_9878 = state_9798__$1;
(statearr_9815_9878[(1)] = (8));

} else {
var statearr_9816_9879 = state_9798__$1;
(statearr_9816_9879[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9799 === (14))){
var inst_9778 = (state_9798[(11)]);
var inst_9776 = (state_9798[(8)]);
var inst_9776__$1 = (state_9798[(2)]);
var inst_9777 = (inst_9776__$1 == null);
var inst_9778__$1 = cljs.core.not.call(null,inst_9777);
var state_9798__$1 = (function (){var statearr_9817 = state_9798;
(statearr_9817[(11)] = inst_9778__$1);

(statearr_9817[(8)] = inst_9776__$1);

return statearr_9817;
})();
if(inst_9778__$1){
var statearr_9818_9880 = state_9798__$1;
(statearr_9818_9880[(1)] = (15));

} else {
var statearr_9819_9881 = state_9798__$1;
(statearr_9819_9881[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9799 === (16))){
var inst_9778 = (state_9798[(11)]);
var state_9798__$1 = state_9798;
var statearr_9820_9882 = state_9798__$1;
(statearr_9820_9882[(2)] = inst_9778);

(statearr_9820_9882[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9799 === (10))){
var inst_9770 = (state_9798[(2)]);
var state_9798__$1 = state_9798;
var statearr_9821_9883 = state_9798__$1;
(statearr_9821_9883[(2)] = inst_9770);

(statearr_9821_9883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9799 === (18))){
var inst_9781 = (state_9798[(2)]);
var state_9798__$1 = state_9798;
var statearr_9822_9884 = state_9798__$1;
(statearr_9822_9884[(2)] = inst_9781);

(statearr_9822_9884[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9799 === (8))){
var inst_9767 = cljs.core.async.close_BANG_.call(null,to);
var state_9798__$1 = state_9798;
var statearr_9823_9885 = state_9798__$1;
(statearr_9823_9885[(2)] = inst_9767);

(statearr_9823_9885[(1)] = (10));


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
});})(c__6888__auto__,jobs,results,process,async))
;
return ((function (switch__6826__auto__,c__6888__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6827__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6827__auto____0 = (function (){
var statearr_9827 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9827[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6827__auto__);

(statearr_9827[(1)] = (1));

return statearr_9827;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6827__auto____1 = (function (state_9798){
while(true){
var ret_value__6828__auto__ = (function (){try{while(true){
var result__6829__auto__ = switch__6826__auto__.call(null,state_9798);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6829__auto__;
}
break;
}
}catch (e9828){if((e9828 instanceof Object)){
var ex__6830__auto__ = e9828;
var statearr_9829_9886 = state_9798;
(statearr_9829_9886[(5)] = ex__6830__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9798);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9828;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9887 = state_9798;
state_9798 = G__9887;
continue;
} else {
return ret_value__6828__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6827__auto__ = function(state_9798){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6827__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6827__auto____1.call(this,state_9798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6827__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6827__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6827__auto__;
})()
;})(switch__6826__auto__,c__6888__auto__,jobs,results,process,async))
})();
var state__6890__auto__ = (function (){var statearr_9830 = f__6889__auto__.call(null);
(statearr_9830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6888__auto__);

return statearr_9830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6890__auto__);
});})(c__6888__auto__,jobs,results,process,async))
);

return c__6888__auto__;
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
var G__9889 = arguments.length;
switch (G__9889) {
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
var G__9892 = arguments.length;
switch (G__9892) {
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
var G__9895 = arguments.length;
switch (G__9895) {
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
var c__6888__auto___9947 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6888__auto___9947,tc,fc){
return (function (){
var f__6889__auto__ = (function (){var switch__6826__auto__ = ((function (c__6888__auto___9947,tc,fc){
return (function (state_9921){
var state_val_9922 = (state_9921[(1)]);
if((state_val_9922 === (7))){
var inst_9917 = (state_9921[(2)]);
var state_9921__$1 = state_9921;
var statearr_9923_9948 = state_9921__$1;
(statearr_9923_9948[(2)] = inst_9917);

(statearr_9923_9948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9922 === (1))){
var state_9921__$1 = state_9921;
var statearr_9924_9949 = state_9921__$1;
(statearr_9924_9949[(2)] = null);

(statearr_9924_9949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9922 === (4))){
var inst_9898 = (state_9921[(7)]);
var inst_9898__$1 = (state_9921[(2)]);
var inst_9899 = (inst_9898__$1 == null);
var state_9921__$1 = (function (){var statearr_9925 = state_9921;
(statearr_9925[(7)] = inst_9898__$1);

return statearr_9925;
})();
if(cljs.core.truth_(inst_9899)){
var statearr_9926_9950 = state_9921__$1;
(statearr_9926_9950[(1)] = (5));

} else {
var statearr_9927_9951 = state_9921__$1;
(statearr_9927_9951[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9922 === (13))){
var state_9921__$1 = state_9921;
var statearr_9928_9952 = state_9921__$1;
(statearr_9928_9952[(2)] = null);

(statearr_9928_9952[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9922 === (6))){
var inst_9898 = (state_9921[(7)]);
var inst_9904 = p.call(null,inst_9898);
var state_9921__$1 = state_9921;
if(cljs.core.truth_(inst_9904)){
var statearr_9929_9953 = state_9921__$1;
(statearr_9929_9953[(1)] = (9));

} else {
var statearr_9930_9954 = state_9921__$1;
(statearr_9930_9954[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9922 === (3))){
var inst_9919 = (state_9921[(2)]);
var state_9921__$1 = state_9921;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9921__$1,inst_9919);
} else {
if((state_val_9922 === (12))){
var state_9921__$1 = state_9921;
var statearr_9931_9955 = state_9921__$1;
(statearr_9931_9955[(2)] = null);

(statearr_9931_9955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9922 === (2))){
var state_9921__$1 = state_9921;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9921__$1,(4),ch);
} else {
if((state_val_9922 === (11))){
var inst_9898 = (state_9921[(7)]);
var inst_9908 = (state_9921[(2)]);
var state_9921__$1 = state_9921;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9921__$1,(8),inst_9908,inst_9898);
} else {
if((state_val_9922 === (9))){
var state_9921__$1 = state_9921;
var statearr_9932_9956 = state_9921__$1;
(statearr_9932_9956[(2)] = tc);

(statearr_9932_9956[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9922 === (5))){
var inst_9901 = cljs.core.async.close_BANG_.call(null,tc);
var inst_9902 = cljs.core.async.close_BANG_.call(null,fc);
var state_9921__$1 = (function (){var statearr_9933 = state_9921;
(statearr_9933[(8)] = inst_9901);

return statearr_9933;
})();
var statearr_9934_9957 = state_9921__$1;
(statearr_9934_9957[(2)] = inst_9902);

(statearr_9934_9957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9922 === (14))){
var inst_9915 = (state_9921[(2)]);
var state_9921__$1 = state_9921;
var statearr_9935_9958 = state_9921__$1;
(statearr_9935_9958[(2)] = inst_9915);

(statearr_9935_9958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9922 === (10))){
var state_9921__$1 = state_9921;
var statearr_9936_9959 = state_9921__$1;
(statearr_9936_9959[(2)] = fc);

(statearr_9936_9959[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9922 === (8))){
var inst_9910 = (state_9921[(2)]);
var state_9921__$1 = state_9921;
if(cljs.core.truth_(inst_9910)){
var statearr_9937_9960 = state_9921__$1;
(statearr_9937_9960[(1)] = (12));

} else {
var statearr_9938_9961 = state_9921__$1;
(statearr_9938_9961[(1)] = (13));

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
});})(c__6888__auto___9947,tc,fc))
;
return ((function (switch__6826__auto__,c__6888__auto___9947,tc,fc){
return (function() {
var cljs$core$async$state_machine__6827__auto__ = null;
var cljs$core$async$state_machine__6827__auto____0 = (function (){
var statearr_9942 = [null,null,null,null,null,null,null,null,null];
(statearr_9942[(0)] = cljs$core$async$state_machine__6827__auto__);

(statearr_9942[(1)] = (1));

return statearr_9942;
});
var cljs$core$async$state_machine__6827__auto____1 = (function (state_9921){
while(true){
var ret_value__6828__auto__ = (function (){try{while(true){
var result__6829__auto__ = switch__6826__auto__.call(null,state_9921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6829__auto__;
}
break;
}
}catch (e9943){if((e9943 instanceof Object)){
var ex__6830__auto__ = e9943;
var statearr_9944_9962 = state_9921;
(statearr_9944_9962[(5)] = ex__6830__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9943;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9963 = state_9921;
state_9921 = G__9963;
continue;
} else {
return ret_value__6828__auto__;
}
break;
}
});
cljs$core$async$state_machine__6827__auto__ = function(state_9921){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6827__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6827__auto____1.call(this,state_9921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6827__auto____0;
cljs$core$async$state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6827__auto____1;
return cljs$core$async$state_machine__6827__auto__;
})()
;})(switch__6826__auto__,c__6888__auto___9947,tc,fc))
})();
var state__6890__auto__ = (function (){var statearr_9945 = f__6889__auto__.call(null);
(statearr_9945[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6888__auto___9947);

return statearr_9945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6890__auto__);
});})(c__6888__auto___9947,tc,fc))
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
var c__6888__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6888__auto__){
return (function (){
var f__6889__auto__ = (function (){var switch__6826__auto__ = ((function (c__6888__auto__){
return (function (state_10010){
var state_val_10011 = (state_10010[(1)]);
if((state_val_10011 === (1))){
var inst_9996 = init;
var state_10010__$1 = (function (){var statearr_10012 = state_10010;
(statearr_10012[(7)] = inst_9996);

return statearr_10012;
})();
var statearr_10013_10028 = state_10010__$1;
(statearr_10013_10028[(2)] = null);

(statearr_10013_10028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10011 === (2))){
var state_10010__$1 = state_10010;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10010__$1,(4),ch);
} else {
if((state_val_10011 === (3))){
var inst_10008 = (state_10010[(2)]);
var state_10010__$1 = state_10010;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10010__$1,inst_10008);
} else {
if((state_val_10011 === (4))){
var inst_9999 = (state_10010[(8)]);
var inst_9999__$1 = (state_10010[(2)]);
var inst_10000 = (inst_9999__$1 == null);
var state_10010__$1 = (function (){var statearr_10014 = state_10010;
(statearr_10014[(8)] = inst_9999__$1);

return statearr_10014;
})();
if(cljs.core.truth_(inst_10000)){
var statearr_10015_10029 = state_10010__$1;
(statearr_10015_10029[(1)] = (5));

} else {
var statearr_10016_10030 = state_10010__$1;
(statearr_10016_10030[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10011 === (5))){
var inst_9996 = (state_10010[(7)]);
var state_10010__$1 = state_10010;
var statearr_10017_10031 = state_10010__$1;
(statearr_10017_10031[(2)] = inst_9996);

(statearr_10017_10031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10011 === (6))){
var inst_9999 = (state_10010[(8)]);
var inst_9996 = (state_10010[(7)]);
var inst_10003 = f.call(null,inst_9996,inst_9999);
var inst_9996__$1 = inst_10003;
var state_10010__$1 = (function (){var statearr_10018 = state_10010;
(statearr_10018[(7)] = inst_9996__$1);

return statearr_10018;
})();
var statearr_10019_10032 = state_10010__$1;
(statearr_10019_10032[(2)] = null);

(statearr_10019_10032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10011 === (7))){
var inst_10006 = (state_10010[(2)]);
var state_10010__$1 = state_10010;
var statearr_10020_10033 = state_10010__$1;
(statearr_10020_10033[(2)] = inst_10006);

(statearr_10020_10033[(1)] = (3));


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
});})(c__6888__auto__))
;
return ((function (switch__6826__auto__,c__6888__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__6827__auto__ = null;
var cljs$core$async$reduce_$_state_machine__6827__auto____0 = (function (){
var statearr_10024 = [null,null,null,null,null,null,null,null,null];
(statearr_10024[(0)] = cljs$core$async$reduce_$_state_machine__6827__auto__);

(statearr_10024[(1)] = (1));

return statearr_10024;
});
var cljs$core$async$reduce_$_state_machine__6827__auto____1 = (function (state_10010){
while(true){
var ret_value__6828__auto__ = (function (){try{while(true){
var result__6829__auto__ = switch__6826__auto__.call(null,state_10010);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6829__auto__;
}
break;
}
}catch (e10025){if((e10025 instanceof Object)){
var ex__6830__auto__ = e10025;
var statearr_10026_10034 = state_10010;
(statearr_10026_10034[(5)] = ex__6830__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10025;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10035 = state_10010;
state_10010 = G__10035;
continue;
} else {
return ret_value__6828__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__6827__auto__ = function(state_10010){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__6827__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__6827__auto____1.call(this,state_10010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__6827__auto____0;
cljs$core$async$reduce_$_state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__6827__auto____1;
return cljs$core$async$reduce_$_state_machine__6827__auto__;
})()
;})(switch__6826__auto__,c__6888__auto__))
})();
var state__6890__auto__ = (function (){var statearr_10027 = f__6889__auto__.call(null);
(statearr_10027[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6888__auto__);

return statearr_10027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6890__auto__);
});})(c__6888__auto__))
);

return c__6888__auto__;
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
var G__10037 = arguments.length;
switch (G__10037) {
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
var c__6888__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6888__auto__){
return (function (){
var f__6889__auto__ = (function (){var switch__6826__auto__ = ((function (c__6888__auto__){
return (function (state_10062){
var state_val_10063 = (state_10062[(1)]);
if((state_val_10063 === (7))){
var inst_10044 = (state_10062[(2)]);
var state_10062__$1 = state_10062;
var statearr_10064_10088 = state_10062__$1;
(statearr_10064_10088[(2)] = inst_10044);

(statearr_10064_10088[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10063 === (1))){
var inst_10038 = cljs.core.seq.call(null,coll);
var inst_10039 = inst_10038;
var state_10062__$1 = (function (){var statearr_10065 = state_10062;
(statearr_10065[(7)] = inst_10039);

return statearr_10065;
})();
var statearr_10066_10089 = state_10062__$1;
(statearr_10066_10089[(2)] = null);

(statearr_10066_10089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10063 === (4))){
var inst_10039 = (state_10062[(7)]);
var inst_10042 = cljs.core.first.call(null,inst_10039);
var state_10062__$1 = state_10062;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10062__$1,(7),ch,inst_10042);
} else {
if((state_val_10063 === (13))){
var inst_10056 = (state_10062[(2)]);
var state_10062__$1 = state_10062;
var statearr_10067_10090 = state_10062__$1;
(statearr_10067_10090[(2)] = inst_10056);

(statearr_10067_10090[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10063 === (6))){
var inst_10047 = (state_10062[(2)]);
var state_10062__$1 = state_10062;
if(cljs.core.truth_(inst_10047)){
var statearr_10068_10091 = state_10062__$1;
(statearr_10068_10091[(1)] = (8));

} else {
var statearr_10069_10092 = state_10062__$1;
(statearr_10069_10092[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10063 === (3))){
var inst_10060 = (state_10062[(2)]);
var state_10062__$1 = state_10062;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10062__$1,inst_10060);
} else {
if((state_val_10063 === (12))){
var state_10062__$1 = state_10062;
var statearr_10070_10093 = state_10062__$1;
(statearr_10070_10093[(2)] = null);

(statearr_10070_10093[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10063 === (2))){
var inst_10039 = (state_10062[(7)]);
var state_10062__$1 = state_10062;
if(cljs.core.truth_(inst_10039)){
var statearr_10071_10094 = state_10062__$1;
(statearr_10071_10094[(1)] = (4));

} else {
var statearr_10072_10095 = state_10062__$1;
(statearr_10072_10095[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10063 === (11))){
var inst_10053 = cljs.core.async.close_BANG_.call(null,ch);
var state_10062__$1 = state_10062;
var statearr_10073_10096 = state_10062__$1;
(statearr_10073_10096[(2)] = inst_10053);

(statearr_10073_10096[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10063 === (9))){
var state_10062__$1 = state_10062;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10074_10097 = state_10062__$1;
(statearr_10074_10097[(1)] = (11));

} else {
var statearr_10075_10098 = state_10062__$1;
(statearr_10075_10098[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10063 === (5))){
var inst_10039 = (state_10062[(7)]);
var state_10062__$1 = state_10062;
var statearr_10076_10099 = state_10062__$1;
(statearr_10076_10099[(2)] = inst_10039);

(statearr_10076_10099[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10063 === (10))){
var inst_10058 = (state_10062[(2)]);
var state_10062__$1 = state_10062;
var statearr_10077_10100 = state_10062__$1;
(statearr_10077_10100[(2)] = inst_10058);

(statearr_10077_10100[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10063 === (8))){
var inst_10039 = (state_10062[(7)]);
var inst_10049 = cljs.core.next.call(null,inst_10039);
var inst_10039__$1 = inst_10049;
var state_10062__$1 = (function (){var statearr_10078 = state_10062;
(statearr_10078[(7)] = inst_10039__$1);

return statearr_10078;
})();
var statearr_10079_10101 = state_10062__$1;
(statearr_10079_10101[(2)] = null);

(statearr_10079_10101[(1)] = (2));


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
});})(c__6888__auto__))
;
return ((function (switch__6826__auto__,c__6888__auto__){
return (function() {
var cljs$core$async$state_machine__6827__auto__ = null;
var cljs$core$async$state_machine__6827__auto____0 = (function (){
var statearr_10083 = [null,null,null,null,null,null,null,null];
(statearr_10083[(0)] = cljs$core$async$state_machine__6827__auto__);

(statearr_10083[(1)] = (1));

return statearr_10083;
});
var cljs$core$async$state_machine__6827__auto____1 = (function (state_10062){
while(true){
var ret_value__6828__auto__ = (function (){try{while(true){
var result__6829__auto__ = switch__6826__auto__.call(null,state_10062);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6829__auto__;
}
break;
}
}catch (e10084){if((e10084 instanceof Object)){
var ex__6830__auto__ = e10084;
var statearr_10085_10102 = state_10062;
(statearr_10085_10102[(5)] = ex__6830__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10062);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10084;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10103 = state_10062;
state_10062 = G__10103;
continue;
} else {
return ret_value__6828__auto__;
}
break;
}
});
cljs$core$async$state_machine__6827__auto__ = function(state_10062){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6827__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6827__auto____1.call(this,state_10062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6827__auto____0;
cljs$core$async$state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6827__auto____1;
return cljs$core$async$state_machine__6827__auto__;
})()
;})(switch__6826__auto__,c__6888__auto__))
})();
var state__6890__auto__ = (function (){var statearr_10086 = f__6889__auto__.call(null);
(statearr_10086[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6888__auto__);

return statearr_10086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6890__auto__);
});})(c__6888__auto__))
);

return c__6888__auto__;
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

cljs.core.async.Mux = (function (){var obj10105 = {};
return obj10105;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__4297__auto__ = _;
if(and__4297__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__4297__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4945__auto__ = (((_ == null))?null:_);
return (function (){var or__4309__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj10107 = {};
return obj10107;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__4297__auto__ = m;
if(and__4297__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__4297__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4945__auto__ = (((m == null))?null:m);
return (function (){var or__4309__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__4297__auto__ = m;
if(and__4297__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__4297__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4945__auto__ = (((m == null))?null:m);
return (function (){var or__4309__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__4297__auto__ = m;
if(and__4297__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__4297__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4945__auto__ = (((m == null))?null:m);
return (function (){var or__4309__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
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
if(typeof cljs.core.async.t10329 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t10329 = (function (mult,ch,cs,meta10330){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta10330 = meta10330;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t10329.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10331,meta10330__$1){
var self__ = this;
var _10331__$1 = this;
return (new cljs.core.async.t10329(self__.mult,self__.ch,self__.cs,meta10330__$1));
});})(cs))
;

cljs.core.async.t10329.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10331){
var self__ = this;
var _10331__$1 = this;
return self__.meta10330;
});})(cs))
;

cljs.core.async.t10329.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t10329.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t10329.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t10329.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t10329.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t10329.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t10329.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta10330","meta10330",-1692853073,null)], null);
});})(cs))
;

cljs.core.async.t10329.cljs$lang$type = true;

cljs.core.async.t10329.cljs$lang$ctorStr = "cljs.core.async/t10329";

cljs.core.async.t10329.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t10329");
});})(cs))
;

cljs.core.async.__GT_t10329 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t10329(mult__$1,ch__$1,cs__$1,meta10330){
return (new cljs.core.async.t10329(mult__$1,ch__$1,cs__$1,meta10330));
});})(cs))
;

}

return (new cljs.core.async.t10329(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__6888__auto___10550 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6888__auto___10550,cs,m,dchan,dctr,done){
return (function (){
var f__6889__auto__ = (function (){var switch__6826__auto__ = ((function (c__6888__auto___10550,cs,m,dchan,dctr,done){
return (function (state_10462){
var state_val_10463 = (state_10462[(1)]);
if((state_val_10463 === (7))){
var inst_10458 = (state_10462[(2)]);
var state_10462__$1 = state_10462;
var statearr_10464_10551 = state_10462__$1;
(statearr_10464_10551[(2)] = inst_10458);

(statearr_10464_10551[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10463 === (20))){
var inst_10363 = (state_10462[(7)]);
var inst_10373 = cljs.core.first.call(null,inst_10363);
var inst_10374 = cljs.core.nth.call(null,inst_10373,(0),null);
var inst_10375 = cljs.core.nth.call(null,inst_10373,(1),null);
var state_10462__$1 = (function (){var statearr_10465 = state_10462;
(statearr_10465[(8)] = inst_10374);

return statearr_10465;
})();
if(cljs.core.truth_(inst_10375)){
var statearr_10466_10552 = state_10462__$1;
(statearr_10466_10552[(1)] = (22));

} else {
var statearr_10467_10553 = state_10462__$1;
(statearr_10467_10553[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10463 === (27))){
var inst_10334 = (state_10462[(9)]);
var inst_10405 = (state_10462[(10)]);
var inst_10403 = (state_10462[(11)]);
var inst_10410 = (state_10462[(12)]);
var inst_10410__$1 = cljs.core._nth.call(null,inst_10403,inst_10405);
var inst_10411 = cljs.core.async.put_BANG_.call(null,inst_10410__$1,inst_10334,done);
var state_10462__$1 = (function (){var statearr_10468 = state_10462;
(statearr_10468[(12)] = inst_10410__$1);

return statearr_10468;
})();
if(cljs.core.truth_(inst_10411)){
var statearr_10469_10554 = state_10462__$1;
(statearr_10469_10554[(1)] = (30));

} else {
var statearr_10470_10555 = state_10462__$1;
(statearr_10470_10555[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10463 === (1))){
var state_10462__$1 = state_10462;
var statearr_10471_10556 = state_10462__$1;
(statearr_10471_10556[(2)] = null);

(statearr_10471_10556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10463 === (24))){
var inst_10363 = (state_10462[(7)]);
var inst_10380 = (state_10462[(2)]);
var inst_10381 = cljs.core.next.call(null,inst_10363);
var inst_10343 = inst_10381;
var inst_10344 = null;
var inst_10345 = (0);
var inst_10346 = (0);
var state_10462__$1 = (function (){var statearr_10472 = state_10462;
(statearr_10472[(13)] = inst_10380);

(statearr_10472[(14)] = inst_10345);

(statearr_10472[(15)] = inst_10344);

(statearr_10472[(16)] = inst_10346);

(statearr_10472[(17)] = inst_10343);

return statearr_10472;
})();
var statearr_10473_10557 = state_10462__$1;
(statearr_10473_10557[(2)] = null);

(statearr_10473_10557[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10463 === (39))){
var state_10462__$1 = state_10462;
var statearr_10477_10558 = state_10462__$1;
(statearr_10477_10558[(2)] = null);

(statearr_10477_10558[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10463 === (4))){
var inst_10334 = (state_10462[(9)]);
var inst_10334__$1 = (state_10462[(2)]);
var inst_10335 = (inst_10334__$1 == null);
var state_10462__$1 = (function (){var statearr_10478 = state_10462;
(statearr_10478[(9)] = inst_10334__$1);

return statearr_10478;
})();
if(cljs.core.truth_(inst_10335)){
var statearr_10479_10559 = state_10462__$1;
(statearr_10479_10559[(1)] = (5));

} else {
var statearr_10480_10560 = state_10462__$1;
(statearr_10480_10560[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10463 === (15))){
var inst_10345 = (state_10462[(14)]);
var inst_10344 = (state_10462[(15)]);
var inst_10346 = (state_10462[(16)]);
var inst_10343 = (state_10462[(17)]);
var inst_10359 = (state_10462[(2)]);
var inst_10360 = (inst_10346 + (1));
var tmp10474 = inst_10345;
var tmp10475 = inst_10344;
var tmp10476 = inst_10343;
var inst_10343__$1 = tmp10476;
var inst_10344__$1 = tmp10475;
var inst_10345__$1 = tmp10474;
var inst_10346__$1 = inst_10360;
var state_10462__$1 = (function (){var statearr_10481 = state_10462;
(statearr_10481[(18)] = inst_10359);

(statearr_10481[(14)] = inst_10345__$1);

(statearr_10481[(15)] = inst_10344__$1);

(statearr_10481[(16)] = inst_10346__$1);

(statearr_10481[(17)] = inst_10343__$1);

return statearr_10481;
})();
var statearr_10482_10561 = state_10462__$1;
(statearr_10482_10561[(2)] = null);

(statearr_10482_10561[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10463 === (21))){
var inst_10384 = (state_10462[(2)]);
var state_10462__$1 = state_10462;
var statearr_10486_10562 = state_10462__$1;
(statearr_10486_10562[(2)] = inst_10384);

(statearr_10486_10562[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10463 === (31))){
var inst_10410 = (state_10462[(12)]);
var inst_10414 = done.call(null,null);
var inst_10415 = cljs.core.async.untap_STAR_.call(null,m,inst_10410);
var state_10462__$1 = (function (){var statearr_10487 = state_10462;
(statearr_10487[(19)] = inst_10414);

return statearr_10487;
})();
var statearr_10488_10563 = state_10462__$1;
(statearr_10488_10563[(2)] = inst_10415);

(statearr_10488_10563[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10463 === (32))){
var inst_10402 = (state_10462[(20)]);
var inst_10404 = (state_10462[(21)]);
var inst_10405 = (state_10462[(10)]);
var inst_10403 = (state_10462[(11)]);
var inst_10417 = (state_10462[(2)]);
var inst_10418 = (inst_10405 + (1));
var tmp10483 = inst_10402;
var tmp10484 = inst_10404;
var tmp10485 = inst_10403;
var inst_10402__$1 = tmp10483;
var inst_10403__$1 = tmp10485;
var inst_10404__$1 = tmp10484;
var inst_10405__$1 = inst_10418;
var state_10462__$1 = (function (){var statearr_10489 = state_10462;
(statearr_10489[(20)] = inst_10402__$1);

(statearr_10489[(21)] = inst_10404__$1);

(statearr_10489[(10)] = inst_10405__$1);

(statearr_10489[(22)] = inst_10417);

(statearr_10489[(11)] = inst_10403__$1);

return statearr_10489;
})();
var statearr_10490_10564 = state_10462__$1;
(statearr_10490_10564[(2)] = null);

(statearr_10490_10564[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10463 === (40))){
var inst_10430 = (state_10462[(23)]);
var inst_10434 = done.call(null,null);
var inst_10435 = cljs.core.async.untap_STAR_.call(null,m,inst_10430);
var state_10462__$1 = (function (){var statearr_10491 = state_10462;
(statearr_10491[(24)] = inst_10434);

return statearr_10491;
})();
var statearr_10492_10565 = state_10462__$1;
(statearr_10492_10565[(2)] = inst_10435);

(statearr_10492_10565[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10463 === (33))){
var inst_10421 = (state_10462[(25)]);
var inst_10423 = cljs.core.chunked_seq_QMARK_.call(null,inst_10421);
var state_10462__$1 = state_10462;
if(inst_10423){
var statearr_10493_10566 = state_10462__$1;
(statearr_10493_10566[(1)] = (36));

} else {
var statearr_10494_10567 = state_10462__$1;
(statearr_10494_10567[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10463 === (13))){
var inst_10353 = (state_10462[(26)]);
var inst_10356 = cljs.core.async.close_BANG_.call(null,inst_10353);
var state_10462__$1 = state_10462;
var statearr_10495_10568 = state_10462__$1;
(statearr_10495_10568[(2)] = inst_10356);

(statearr_10495_10568[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10463 === (22))){
var inst_10374 = (state_10462[(8)]);
var inst_10377 = cljs.core.async.close_BANG_.call(null,inst_10374);
var state_10462__$1 = state_10462;
var statearr_10496_10569 = state_10462__$1;
(statearr_10496_10569[(2)] = inst_10377);

(statearr_10496_10569[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10463 === (36))){
var inst_10421 = (state_10462[(25)]);
var inst_10425 = cljs.core.chunk_first.call(null,inst_10421);
var inst_10426 = cljs.core.chunk_rest.call(null,inst_10421);
var inst_10427 = cljs.core.count.call(null,inst_10425);
var inst_10402 = inst_10426;
var inst_10403 = inst_10425;
var inst_10404 = inst_10427;
var inst_10405 = (0);
var state_10462__$1 = (function (){var statearr_10497 = state_10462;
(statearr_10497[(20)] = inst_10402);

(statearr_10497[(21)] = inst_10404);

(statearr_10497[(10)] = inst_10405);

(statearr_10497[(11)] = inst_10403);

return statearr_10497;
})();
var statearr_10498_10570 = state_10462__$1;
(statearr_10498_10570[(2)] = null);

(statearr_10498_10570[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10463 === (41))){
var inst_10421 = (state_10462[(25)]);
var inst_10437 = (state_10462[(2)]);
var inst_10438 = cljs.core.next.call(null,inst_10421);
var inst_10402 = inst_10438;
var inst_10403 = null;
var inst_10404 = (0);
var inst_10405 = (0);
var state_10462__$1 = (function (){var statearr_10499 = state_10462;
(statearr_10499[(20)] = inst_10402);

(statearr_10499[(21)] = inst_10404);

(statearr_10499[(10)] = inst_10405);

(statearr_10499[(11)] = inst_10403);

(statearr_10499[(27)] = inst_10437);

return statearr_10499;
})();
var statearr_10500_10571 = state_10462__$1;
(statearr_10500_10571[(2)] = null);

(statearr_10500_10571[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10463 === (43))){
var state_10462__$1 = state_10462;
var statearr_10501_10572 = state_10462__$1;
(statearr_10501_10572[(2)] = null);

(statearr_10501_10572[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10463 === (29))){
var inst_10446 = (state_10462[(2)]);
var state_10462__$1 = state_10462;
var statearr_10502_10573 = state_10462__$1;
(statearr_10502_10573[(2)] = inst_10446);

(statearr_10502_10573[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10463 === (44))){
var inst_10455 = (state_10462[(2)]);
var state_10462__$1 = (function (){var statearr_10503 = state_10462;
(statearr_10503[(28)] = inst_10455);

return statearr_10503;
})();
var statearr_10504_10574 = state_10462__$1;
(statearr_10504_10574[(2)] = null);

(statearr_10504_10574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10463 === (6))){
var inst_10394 = (state_10462[(29)]);
var inst_10393 = cljs.core.deref.call(null,cs);
var inst_10394__$1 = cljs.core.keys.call(null,inst_10393);
var inst_10395 = cljs.core.count.call(null,inst_10394__$1);
var inst_10396 = cljs.core.reset_BANG_.call(null,dctr,inst_10395);
var inst_10401 = cljs.core.seq.call(null,inst_10394__$1);
var inst_10402 = inst_10401;
var inst_10403 = null;
var inst_10404 = (0);
var inst_10405 = (0);
var state_10462__$1 = (function (){var statearr_10505 = state_10462;
(statearr_10505[(20)] = inst_10402);

(statearr_10505[(21)] = inst_10404);

(statearr_10505[(10)] = inst_10405);

(statearr_10505[(29)] = inst_10394__$1);

(statearr_10505[(30)] = inst_10396);

(statearr_10505[(11)] = inst_10403);

return statearr_10505;
})();
var statearr_10506_10575 = state_10462__$1;
(statearr_10506_10575[(2)] = null);

(statearr_10506_10575[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10463 === (28))){
var inst_10402 = (state_10462[(20)]);
var inst_10421 = (state_10462[(25)]);
var inst_10421__$1 = cljs.core.seq.call(null,inst_10402);
var state_10462__$1 = (function (){var statearr_10507 = state_10462;
(statearr_10507[(25)] = inst_10421__$1);

return statearr_10507;
})();
if(inst_10421__$1){
var statearr_10508_10576 = state_10462__$1;
(statearr_10508_10576[(1)] = (33));

} else {
var statearr_10509_10577 = state_10462__$1;
(statearr_10509_10577[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10463 === (25))){
var inst_10404 = (state_10462[(21)]);
var inst_10405 = (state_10462[(10)]);
var inst_10407 = (inst_10405 < inst_10404);
var inst_10408 = inst_10407;
var state_10462__$1 = state_10462;
if(cljs.core.truth_(inst_10408)){
var statearr_10510_10578 = state_10462__$1;
(statearr_10510_10578[(1)] = (27));

} else {
var statearr_10511_10579 = state_10462__$1;
(statearr_10511_10579[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10463 === (34))){
var state_10462__$1 = state_10462;
var statearr_10512_10580 = state_10462__$1;
(statearr_10512_10580[(2)] = null);

(statearr_10512_10580[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10463 === (17))){
var state_10462__$1 = state_10462;
var statearr_10513_10581 = state_10462__$1;
(statearr_10513_10581[(2)] = null);

(statearr_10513_10581[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10463 === (3))){
var inst_10460 = (state_10462[(2)]);
var state_10462__$1 = state_10462;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10462__$1,inst_10460);
} else {
if((state_val_10463 === (12))){
var inst_10389 = (state_10462[(2)]);
var state_10462__$1 = state_10462;
var statearr_10514_10582 = state_10462__$1;
(statearr_10514_10582[(2)] = inst_10389);

(statearr_10514_10582[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10463 === (2))){
var state_10462__$1 = state_10462;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10462__$1,(4),ch);
} else {
if((state_val_10463 === (23))){
var state_10462__$1 = state_10462;
var statearr_10515_10583 = state_10462__$1;
(statearr_10515_10583[(2)] = null);

(statearr_10515_10583[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10463 === (35))){
var inst_10444 = (state_10462[(2)]);
var state_10462__$1 = state_10462;
var statearr_10516_10584 = state_10462__$1;
(statearr_10516_10584[(2)] = inst_10444);

(statearr_10516_10584[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10463 === (19))){
var inst_10363 = (state_10462[(7)]);
var inst_10367 = cljs.core.chunk_first.call(null,inst_10363);
var inst_10368 = cljs.core.chunk_rest.call(null,inst_10363);
var inst_10369 = cljs.core.count.call(null,inst_10367);
var inst_10343 = inst_10368;
var inst_10344 = inst_10367;
var inst_10345 = inst_10369;
var inst_10346 = (0);
var state_10462__$1 = (function (){var statearr_10517 = state_10462;
(statearr_10517[(14)] = inst_10345);

(statearr_10517[(15)] = inst_10344);

(statearr_10517[(16)] = inst_10346);

(statearr_10517[(17)] = inst_10343);

return statearr_10517;
})();
var statearr_10518_10585 = state_10462__$1;
(statearr_10518_10585[(2)] = null);

(statearr_10518_10585[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10463 === (11))){
var inst_10363 = (state_10462[(7)]);
var inst_10343 = (state_10462[(17)]);
var inst_10363__$1 = cljs.core.seq.call(null,inst_10343);
var state_10462__$1 = (function (){var statearr_10519 = state_10462;
(statearr_10519[(7)] = inst_10363__$1);

return statearr_10519;
})();
if(inst_10363__$1){
var statearr_10520_10586 = state_10462__$1;
(statearr_10520_10586[(1)] = (16));

} else {
var statearr_10521_10587 = state_10462__$1;
(statearr_10521_10587[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10463 === (9))){
var inst_10391 = (state_10462[(2)]);
var state_10462__$1 = state_10462;
var statearr_10522_10588 = state_10462__$1;
(statearr_10522_10588[(2)] = inst_10391);

(statearr_10522_10588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10463 === (5))){
var inst_10341 = cljs.core.deref.call(null,cs);
var inst_10342 = cljs.core.seq.call(null,inst_10341);
var inst_10343 = inst_10342;
var inst_10344 = null;
var inst_10345 = (0);
var inst_10346 = (0);
var state_10462__$1 = (function (){var statearr_10523 = state_10462;
(statearr_10523[(14)] = inst_10345);

(statearr_10523[(15)] = inst_10344);

(statearr_10523[(16)] = inst_10346);

(statearr_10523[(17)] = inst_10343);

return statearr_10523;
})();
var statearr_10524_10589 = state_10462__$1;
(statearr_10524_10589[(2)] = null);

(statearr_10524_10589[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10463 === (14))){
var state_10462__$1 = state_10462;
var statearr_10525_10590 = state_10462__$1;
(statearr_10525_10590[(2)] = null);

(statearr_10525_10590[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10463 === (45))){
var inst_10452 = (state_10462[(2)]);
var state_10462__$1 = state_10462;
var statearr_10526_10591 = state_10462__$1;
(statearr_10526_10591[(2)] = inst_10452);

(statearr_10526_10591[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10463 === (26))){
var inst_10394 = (state_10462[(29)]);
var inst_10448 = (state_10462[(2)]);
var inst_10449 = cljs.core.seq.call(null,inst_10394);
var state_10462__$1 = (function (){var statearr_10527 = state_10462;
(statearr_10527[(31)] = inst_10448);

return statearr_10527;
})();
if(inst_10449){
var statearr_10528_10592 = state_10462__$1;
(statearr_10528_10592[(1)] = (42));

} else {
var statearr_10529_10593 = state_10462__$1;
(statearr_10529_10593[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10463 === (16))){
var inst_10363 = (state_10462[(7)]);
var inst_10365 = cljs.core.chunked_seq_QMARK_.call(null,inst_10363);
var state_10462__$1 = state_10462;
if(inst_10365){
var statearr_10530_10594 = state_10462__$1;
(statearr_10530_10594[(1)] = (19));

} else {
var statearr_10531_10595 = state_10462__$1;
(statearr_10531_10595[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10463 === (38))){
var inst_10441 = (state_10462[(2)]);
var state_10462__$1 = state_10462;
var statearr_10532_10596 = state_10462__$1;
(statearr_10532_10596[(2)] = inst_10441);

(statearr_10532_10596[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10463 === (30))){
var state_10462__$1 = state_10462;
var statearr_10533_10597 = state_10462__$1;
(statearr_10533_10597[(2)] = null);

(statearr_10533_10597[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10463 === (10))){
var inst_10344 = (state_10462[(15)]);
var inst_10346 = (state_10462[(16)]);
var inst_10352 = cljs.core._nth.call(null,inst_10344,inst_10346);
var inst_10353 = cljs.core.nth.call(null,inst_10352,(0),null);
var inst_10354 = cljs.core.nth.call(null,inst_10352,(1),null);
var state_10462__$1 = (function (){var statearr_10534 = state_10462;
(statearr_10534[(26)] = inst_10353);

return statearr_10534;
})();
if(cljs.core.truth_(inst_10354)){
var statearr_10535_10598 = state_10462__$1;
(statearr_10535_10598[(1)] = (13));

} else {
var statearr_10536_10599 = state_10462__$1;
(statearr_10536_10599[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10463 === (18))){
var inst_10387 = (state_10462[(2)]);
var state_10462__$1 = state_10462;
var statearr_10537_10600 = state_10462__$1;
(statearr_10537_10600[(2)] = inst_10387);

(statearr_10537_10600[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10463 === (42))){
var state_10462__$1 = state_10462;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10462__$1,(45),dchan);
} else {
if((state_val_10463 === (37))){
var inst_10334 = (state_10462[(9)]);
var inst_10421 = (state_10462[(25)]);
var inst_10430 = (state_10462[(23)]);
var inst_10430__$1 = cljs.core.first.call(null,inst_10421);
var inst_10431 = cljs.core.async.put_BANG_.call(null,inst_10430__$1,inst_10334,done);
var state_10462__$1 = (function (){var statearr_10538 = state_10462;
(statearr_10538[(23)] = inst_10430__$1);

return statearr_10538;
})();
if(cljs.core.truth_(inst_10431)){
var statearr_10539_10601 = state_10462__$1;
(statearr_10539_10601[(1)] = (39));

} else {
var statearr_10540_10602 = state_10462__$1;
(statearr_10540_10602[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10463 === (8))){
var inst_10345 = (state_10462[(14)]);
var inst_10346 = (state_10462[(16)]);
var inst_10348 = (inst_10346 < inst_10345);
var inst_10349 = inst_10348;
var state_10462__$1 = state_10462;
if(cljs.core.truth_(inst_10349)){
var statearr_10541_10603 = state_10462__$1;
(statearr_10541_10603[(1)] = (10));

} else {
var statearr_10542_10604 = state_10462__$1;
(statearr_10542_10604[(1)] = (11));

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
});})(c__6888__auto___10550,cs,m,dchan,dctr,done))
;
return ((function (switch__6826__auto__,c__6888__auto___10550,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__6827__auto__ = null;
var cljs$core$async$mult_$_state_machine__6827__auto____0 = (function (){
var statearr_10546 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10546[(0)] = cljs$core$async$mult_$_state_machine__6827__auto__);

(statearr_10546[(1)] = (1));

return statearr_10546;
});
var cljs$core$async$mult_$_state_machine__6827__auto____1 = (function (state_10462){
while(true){
var ret_value__6828__auto__ = (function (){try{while(true){
var result__6829__auto__ = switch__6826__auto__.call(null,state_10462);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6829__auto__;
}
break;
}
}catch (e10547){if((e10547 instanceof Object)){
var ex__6830__auto__ = e10547;
var statearr_10548_10605 = state_10462;
(statearr_10548_10605[(5)] = ex__6830__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10462);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10547;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10606 = state_10462;
state_10462 = G__10606;
continue;
} else {
return ret_value__6828__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__6827__auto__ = function(state_10462){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__6827__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__6827__auto____1.call(this,state_10462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__6827__auto____0;
cljs$core$async$mult_$_state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__6827__auto____1;
return cljs$core$async$mult_$_state_machine__6827__auto__;
})()
;})(switch__6826__auto__,c__6888__auto___10550,cs,m,dchan,dctr,done))
})();
var state__6890__auto__ = (function (){var statearr_10549 = f__6889__auto__.call(null);
(statearr_10549[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6888__auto___10550);

return statearr_10549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6890__auto__);
});})(c__6888__auto___10550,cs,m,dchan,dctr,done))
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
var G__10608 = arguments.length;
switch (G__10608) {
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

cljs.core.async.Mix = (function (){var obj10611 = {};
return obj10611;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__4297__auto__ = m;
if(and__4297__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__4297__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4945__auto__ = (((m == null))?null:m);
return (function (){var or__4309__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__4297__auto__ = m;
if(and__4297__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__4297__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4945__auto__ = (((m == null))?null:m);
return (function (){var or__4309__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__4297__auto__ = m;
if(and__4297__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__4297__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4945__auto__ = (((m == null))?null:m);
return (function (){var or__4309__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__4297__auto__ = m;
if(and__4297__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__4297__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4945__auto__ = (((m == null))?null:m);
return (function (){var or__4309__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__4297__auto__ = m;
if(and__4297__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__4297__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4945__auto__ = (((m == null))?null:m);
return (function (){var or__4309__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__5349__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5349__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__10616){
var map__10617 = p__10616;
var map__10617__$1 = ((cljs.core.seq_QMARK_.call(null,map__10617))?cljs.core.apply.call(null,cljs.core.hash_map,map__10617):map__10617);
var opts = map__10617__$1;
var statearr_10618_10621 = state;
(statearr_10618_10621[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4422__auto__ = cljs.core.async.do_alts.call(null,((function (map__10617,map__10617__$1,opts){
return (function (val){
var statearr_10619_10622 = state;
(statearr_10619_10622[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__10617,map__10617__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4422__auto__)){
var cb = temp__4422__auto__;
var statearr_10620_10623 = state;
(statearr_10620_10623[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq10612){
var G__10613 = cljs.core.first.call(null,seq10612);
var seq10612__$1 = cljs.core.next.call(null,seq10612);
var G__10614 = cljs.core.first.call(null,seq10612__$1);
var seq10612__$2 = cljs.core.next.call(null,seq10612__$1);
var G__10615 = cljs.core.first.call(null,seq10612__$2);
var seq10612__$3 = cljs.core.next.call(null,seq10612__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10613,G__10614,G__10615,seq10612__$3);
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
if(typeof cljs.core.async.t10743 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t10743 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta10744){
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
this.meta10744 = meta10744;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t10743.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10745,meta10744__$1){
var self__ = this;
var _10745__$1 = this;
return (new cljs.core.async.t10743(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta10744__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10743.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10745){
var self__ = this;
var _10745__$1 = this;
return self__.meta10744;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10743.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t10743.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10743.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t10743.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10743.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10743.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10743.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10743.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t10743.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta10744","meta10744",272720314,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10743.cljs$lang$type = true;

cljs.core.async.t10743.cljs$lang$ctorStr = "cljs.core.async/t10743";

cljs.core.async.t10743.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t10743");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t10743 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t10743(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10744){
return (new cljs.core.async.t10743(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10744));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t10743(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6888__auto___10862 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6888__auto___10862,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6889__auto__ = (function (){var switch__6826__auto__ = ((function (c__6888__auto___10862,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_10815){
var state_val_10816 = (state_10815[(1)]);
if((state_val_10816 === (7))){
var inst_10759 = (state_10815[(7)]);
var inst_10764 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10759);
var state_10815__$1 = state_10815;
var statearr_10817_10863 = state_10815__$1;
(statearr_10817_10863[(2)] = inst_10764);

(statearr_10817_10863[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10816 === (20))){
var inst_10774 = (state_10815[(8)]);
var state_10815__$1 = state_10815;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10815__$1,(23),out,inst_10774);
} else {
if((state_val_10816 === (1))){
var inst_10749 = (state_10815[(9)]);
var inst_10749__$1 = calc_state.call(null);
var inst_10750 = cljs.core.seq_QMARK_.call(null,inst_10749__$1);
var state_10815__$1 = (function (){var statearr_10818 = state_10815;
(statearr_10818[(9)] = inst_10749__$1);

return statearr_10818;
})();
if(inst_10750){
var statearr_10819_10864 = state_10815__$1;
(statearr_10819_10864[(1)] = (2));

} else {
var statearr_10820_10865 = state_10815__$1;
(statearr_10820_10865[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10816 === (24))){
var inst_10767 = (state_10815[(10)]);
var inst_10759 = inst_10767;
var state_10815__$1 = (function (){var statearr_10821 = state_10815;
(statearr_10821[(7)] = inst_10759);

return statearr_10821;
})();
var statearr_10822_10866 = state_10815__$1;
(statearr_10822_10866[(2)] = null);

(statearr_10822_10866[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10816 === (4))){
var inst_10749 = (state_10815[(9)]);
var inst_10755 = (state_10815[(2)]);
var inst_10756 = cljs.core.get.call(null,inst_10755,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_10757 = cljs.core.get.call(null,inst_10755,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_10758 = cljs.core.get.call(null,inst_10755,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_10759 = inst_10749;
var state_10815__$1 = (function (){var statearr_10823 = state_10815;
(statearr_10823[(11)] = inst_10758);

(statearr_10823[(12)] = inst_10757);

(statearr_10823[(13)] = inst_10756);

(statearr_10823[(7)] = inst_10759);

return statearr_10823;
})();
var statearr_10824_10867 = state_10815__$1;
(statearr_10824_10867[(2)] = null);

(statearr_10824_10867[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10816 === (15))){
var state_10815__$1 = state_10815;
var statearr_10825_10868 = state_10815__$1;
(statearr_10825_10868[(2)] = null);

(statearr_10825_10868[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10816 === (21))){
var inst_10767 = (state_10815[(10)]);
var inst_10759 = inst_10767;
var state_10815__$1 = (function (){var statearr_10826 = state_10815;
(statearr_10826[(7)] = inst_10759);

return statearr_10826;
})();
var statearr_10827_10869 = state_10815__$1;
(statearr_10827_10869[(2)] = null);

(statearr_10827_10869[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10816 === (13))){
var inst_10811 = (state_10815[(2)]);
var state_10815__$1 = state_10815;
var statearr_10828_10870 = state_10815__$1;
(statearr_10828_10870[(2)] = inst_10811);

(statearr_10828_10870[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10816 === (22))){
var inst_10809 = (state_10815[(2)]);
var state_10815__$1 = state_10815;
var statearr_10829_10871 = state_10815__$1;
(statearr_10829_10871[(2)] = inst_10809);

(statearr_10829_10871[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10816 === (6))){
var inst_10813 = (state_10815[(2)]);
var state_10815__$1 = state_10815;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10815__$1,inst_10813);
} else {
if((state_val_10816 === (25))){
var state_10815__$1 = state_10815;
var statearr_10830_10872 = state_10815__$1;
(statearr_10830_10872[(2)] = null);

(statearr_10830_10872[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10816 === (17))){
var inst_10789 = (state_10815[(14)]);
var state_10815__$1 = state_10815;
var statearr_10831_10873 = state_10815__$1;
(statearr_10831_10873[(2)] = inst_10789);

(statearr_10831_10873[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10816 === (3))){
var inst_10749 = (state_10815[(9)]);
var state_10815__$1 = state_10815;
var statearr_10832_10874 = state_10815__$1;
(statearr_10832_10874[(2)] = inst_10749);

(statearr_10832_10874[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10816 === (12))){
var inst_10768 = (state_10815[(15)]);
var inst_10775 = (state_10815[(16)]);
var inst_10789 = (state_10815[(14)]);
var inst_10789__$1 = inst_10768.call(null,inst_10775);
var state_10815__$1 = (function (){var statearr_10833 = state_10815;
(statearr_10833[(14)] = inst_10789__$1);

return statearr_10833;
})();
if(cljs.core.truth_(inst_10789__$1)){
var statearr_10834_10875 = state_10815__$1;
(statearr_10834_10875[(1)] = (17));

} else {
var statearr_10835_10876 = state_10815__$1;
(statearr_10835_10876[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10816 === (2))){
var inst_10749 = (state_10815[(9)]);
var inst_10752 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10749);
var state_10815__$1 = state_10815;
var statearr_10836_10877 = state_10815__$1;
(statearr_10836_10877[(2)] = inst_10752);

(statearr_10836_10877[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10816 === (23))){
var inst_10800 = (state_10815[(2)]);
var state_10815__$1 = state_10815;
if(cljs.core.truth_(inst_10800)){
var statearr_10837_10878 = state_10815__$1;
(statearr_10837_10878[(1)] = (24));

} else {
var statearr_10838_10879 = state_10815__$1;
(statearr_10838_10879[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10816 === (19))){
var inst_10797 = (state_10815[(2)]);
var state_10815__$1 = state_10815;
if(cljs.core.truth_(inst_10797)){
var statearr_10839_10880 = state_10815__$1;
(statearr_10839_10880[(1)] = (20));

} else {
var statearr_10840_10881 = state_10815__$1;
(statearr_10840_10881[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10816 === (11))){
var inst_10774 = (state_10815[(8)]);
var inst_10780 = (inst_10774 == null);
var state_10815__$1 = state_10815;
if(cljs.core.truth_(inst_10780)){
var statearr_10841_10882 = state_10815__$1;
(statearr_10841_10882[(1)] = (14));

} else {
var statearr_10842_10883 = state_10815__$1;
(statearr_10842_10883[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10816 === (9))){
var inst_10767 = (state_10815[(10)]);
var inst_10767__$1 = (state_10815[(2)]);
var inst_10768 = cljs.core.get.call(null,inst_10767__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_10769 = cljs.core.get.call(null,inst_10767__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_10770 = cljs.core.get.call(null,inst_10767__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_10815__$1 = (function (){var statearr_10843 = state_10815;
(statearr_10843[(15)] = inst_10768);

(statearr_10843[(10)] = inst_10767__$1);

(statearr_10843[(17)] = inst_10769);

return statearr_10843;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_10815__$1,(10),inst_10770);
} else {
if((state_val_10816 === (5))){
var inst_10759 = (state_10815[(7)]);
var inst_10762 = cljs.core.seq_QMARK_.call(null,inst_10759);
var state_10815__$1 = state_10815;
if(inst_10762){
var statearr_10844_10884 = state_10815__$1;
(statearr_10844_10884[(1)] = (7));

} else {
var statearr_10845_10885 = state_10815__$1;
(statearr_10845_10885[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10816 === (14))){
var inst_10775 = (state_10815[(16)]);
var inst_10782 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_10775);
var state_10815__$1 = state_10815;
var statearr_10846_10886 = state_10815__$1;
(statearr_10846_10886[(2)] = inst_10782);

(statearr_10846_10886[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10816 === (26))){
var inst_10805 = (state_10815[(2)]);
var state_10815__$1 = state_10815;
var statearr_10847_10887 = state_10815__$1;
(statearr_10847_10887[(2)] = inst_10805);

(statearr_10847_10887[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10816 === (16))){
var inst_10785 = (state_10815[(2)]);
var inst_10786 = calc_state.call(null);
var inst_10759 = inst_10786;
var state_10815__$1 = (function (){var statearr_10848 = state_10815;
(statearr_10848[(18)] = inst_10785);

(statearr_10848[(7)] = inst_10759);

return statearr_10848;
})();
var statearr_10849_10888 = state_10815__$1;
(statearr_10849_10888[(2)] = null);

(statearr_10849_10888[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10816 === (10))){
var inst_10774 = (state_10815[(8)]);
var inst_10775 = (state_10815[(16)]);
var inst_10773 = (state_10815[(2)]);
var inst_10774__$1 = cljs.core.nth.call(null,inst_10773,(0),null);
var inst_10775__$1 = cljs.core.nth.call(null,inst_10773,(1),null);
var inst_10776 = (inst_10774__$1 == null);
var inst_10777 = cljs.core._EQ_.call(null,inst_10775__$1,change);
var inst_10778 = (inst_10776) || (inst_10777);
var state_10815__$1 = (function (){var statearr_10850 = state_10815;
(statearr_10850[(8)] = inst_10774__$1);

(statearr_10850[(16)] = inst_10775__$1);

return statearr_10850;
})();
if(cljs.core.truth_(inst_10778)){
var statearr_10851_10889 = state_10815__$1;
(statearr_10851_10889[(1)] = (11));

} else {
var statearr_10852_10890 = state_10815__$1;
(statearr_10852_10890[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10816 === (18))){
var inst_10768 = (state_10815[(15)]);
var inst_10769 = (state_10815[(17)]);
var inst_10775 = (state_10815[(16)]);
var inst_10792 = cljs.core.empty_QMARK_.call(null,inst_10768);
var inst_10793 = inst_10769.call(null,inst_10775);
var inst_10794 = cljs.core.not.call(null,inst_10793);
var inst_10795 = (inst_10792) && (inst_10794);
var state_10815__$1 = state_10815;
var statearr_10853_10891 = state_10815__$1;
(statearr_10853_10891[(2)] = inst_10795);

(statearr_10853_10891[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10816 === (8))){
var inst_10759 = (state_10815[(7)]);
var state_10815__$1 = state_10815;
var statearr_10854_10892 = state_10815__$1;
(statearr_10854_10892[(2)] = inst_10759);

(statearr_10854_10892[(1)] = (9));


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
});})(c__6888__auto___10862,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6826__auto__,c__6888__auto___10862,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__6827__auto__ = null;
var cljs$core$async$mix_$_state_machine__6827__auto____0 = (function (){
var statearr_10858 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10858[(0)] = cljs$core$async$mix_$_state_machine__6827__auto__);

(statearr_10858[(1)] = (1));

return statearr_10858;
});
var cljs$core$async$mix_$_state_machine__6827__auto____1 = (function (state_10815){
while(true){
var ret_value__6828__auto__ = (function (){try{while(true){
var result__6829__auto__ = switch__6826__auto__.call(null,state_10815);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6829__auto__;
}
break;
}
}catch (e10859){if((e10859 instanceof Object)){
var ex__6830__auto__ = e10859;
var statearr_10860_10893 = state_10815;
(statearr_10860_10893[(5)] = ex__6830__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10815);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10859;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10894 = state_10815;
state_10815 = G__10894;
continue;
} else {
return ret_value__6828__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__6827__auto__ = function(state_10815){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__6827__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__6827__auto____1.call(this,state_10815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__6827__auto____0;
cljs$core$async$mix_$_state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__6827__auto____1;
return cljs$core$async$mix_$_state_machine__6827__auto__;
})()
;})(switch__6826__auto__,c__6888__auto___10862,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6890__auto__ = (function (){var statearr_10861 = f__6889__auto__.call(null);
(statearr_10861[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6888__auto___10862);

return statearr_10861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6890__auto__);
});})(c__6888__auto___10862,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj10896 = {};
return obj10896;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__4297__auto__ = p;
if(and__4297__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__4297__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4945__auto__ = (((p == null))?null:p);
return (function (){var or__4309__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__4297__auto__ = p;
if(and__4297__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__4297__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4945__auto__ = (((p == null))?null:p);
return (function (){var or__4309__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__10898 = arguments.length;
switch (G__10898) {
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
if((function (){var and__4297__auto__ = p;
if(and__4297__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__4297__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4945__auto__ = (((p == null))?null:p);
return (function (){var or__4309__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__4297__auto__ = p;
if(and__4297__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__4297__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4945__auto__ = (((p == null))?null:p);
return (function (){var or__4309__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
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
var G__10902 = arguments.length;
switch (G__10902) {
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
var or__4309__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4309__auto__,mults){
return (function (p1__10900_SHARP_){
if(cljs.core.truth_(p1__10900_SHARP_.call(null,topic))){
return p1__10900_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__10900_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4309__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t10903 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t10903 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta10904){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta10904 = meta10904;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t10903.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_10905,meta10904__$1){
var self__ = this;
var _10905__$1 = this;
return (new cljs.core.async.t10903(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta10904__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t10903.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_10905){
var self__ = this;
var _10905__$1 = this;
return self__.meta10904;
});})(mults,ensure_mult))
;

cljs.core.async.t10903.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t10903.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t10903.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t10903.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t10903.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t10903.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t10903.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t10903.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta10904","meta10904",66158133,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t10903.cljs$lang$type = true;

cljs.core.async.t10903.cljs$lang$ctorStr = "cljs.core.async/t10903";

cljs.core.async.t10903.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t10903");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t10903 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t10903(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta10904){
return (new cljs.core.async.t10903(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta10904));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t10903(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6888__auto___11026 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6888__auto___11026,mults,ensure_mult,p){
return (function (){
var f__6889__auto__ = (function (){var switch__6826__auto__ = ((function (c__6888__auto___11026,mults,ensure_mult,p){
return (function (state_10977){
var state_val_10978 = (state_10977[(1)]);
if((state_val_10978 === (7))){
var inst_10973 = (state_10977[(2)]);
var state_10977__$1 = state_10977;
var statearr_10979_11027 = state_10977__$1;
(statearr_10979_11027[(2)] = inst_10973);

(statearr_10979_11027[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10978 === (20))){
var state_10977__$1 = state_10977;
var statearr_10980_11028 = state_10977__$1;
(statearr_10980_11028[(2)] = null);

(statearr_10980_11028[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10978 === (1))){
var state_10977__$1 = state_10977;
var statearr_10981_11029 = state_10977__$1;
(statearr_10981_11029[(2)] = null);

(statearr_10981_11029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10978 === (24))){
var inst_10956 = (state_10977[(7)]);
var inst_10965 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_10956);
var state_10977__$1 = state_10977;
var statearr_10982_11030 = state_10977__$1;
(statearr_10982_11030[(2)] = inst_10965);

(statearr_10982_11030[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10978 === (4))){
var inst_10908 = (state_10977[(8)]);
var inst_10908__$1 = (state_10977[(2)]);
var inst_10909 = (inst_10908__$1 == null);
var state_10977__$1 = (function (){var statearr_10983 = state_10977;
(statearr_10983[(8)] = inst_10908__$1);

return statearr_10983;
})();
if(cljs.core.truth_(inst_10909)){
var statearr_10984_11031 = state_10977__$1;
(statearr_10984_11031[(1)] = (5));

} else {
var statearr_10985_11032 = state_10977__$1;
(statearr_10985_11032[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10978 === (15))){
var inst_10950 = (state_10977[(2)]);
var state_10977__$1 = state_10977;
var statearr_10986_11033 = state_10977__$1;
(statearr_10986_11033[(2)] = inst_10950);

(statearr_10986_11033[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10978 === (21))){
var inst_10970 = (state_10977[(2)]);
var state_10977__$1 = (function (){var statearr_10987 = state_10977;
(statearr_10987[(9)] = inst_10970);

return statearr_10987;
})();
var statearr_10988_11034 = state_10977__$1;
(statearr_10988_11034[(2)] = null);

(statearr_10988_11034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10978 === (13))){
var inst_10932 = (state_10977[(10)]);
var inst_10934 = cljs.core.chunked_seq_QMARK_.call(null,inst_10932);
var state_10977__$1 = state_10977;
if(inst_10934){
var statearr_10989_11035 = state_10977__$1;
(statearr_10989_11035[(1)] = (16));

} else {
var statearr_10990_11036 = state_10977__$1;
(statearr_10990_11036[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10978 === (22))){
var inst_10962 = (state_10977[(2)]);
var state_10977__$1 = state_10977;
if(cljs.core.truth_(inst_10962)){
var statearr_10991_11037 = state_10977__$1;
(statearr_10991_11037[(1)] = (23));

} else {
var statearr_10992_11038 = state_10977__$1;
(statearr_10992_11038[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10978 === (6))){
var inst_10908 = (state_10977[(8)]);
var inst_10958 = (state_10977[(11)]);
var inst_10956 = (state_10977[(7)]);
var inst_10956__$1 = topic_fn.call(null,inst_10908);
var inst_10957 = cljs.core.deref.call(null,mults);
var inst_10958__$1 = cljs.core.get.call(null,inst_10957,inst_10956__$1);
var state_10977__$1 = (function (){var statearr_10993 = state_10977;
(statearr_10993[(11)] = inst_10958__$1);

(statearr_10993[(7)] = inst_10956__$1);

return statearr_10993;
})();
if(cljs.core.truth_(inst_10958__$1)){
var statearr_10994_11039 = state_10977__$1;
(statearr_10994_11039[(1)] = (19));

} else {
var statearr_10995_11040 = state_10977__$1;
(statearr_10995_11040[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10978 === (25))){
var inst_10967 = (state_10977[(2)]);
var state_10977__$1 = state_10977;
var statearr_10996_11041 = state_10977__$1;
(statearr_10996_11041[(2)] = inst_10967);

(statearr_10996_11041[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10978 === (17))){
var inst_10932 = (state_10977[(10)]);
var inst_10941 = cljs.core.first.call(null,inst_10932);
var inst_10942 = cljs.core.async.muxch_STAR_.call(null,inst_10941);
var inst_10943 = cljs.core.async.close_BANG_.call(null,inst_10942);
var inst_10944 = cljs.core.next.call(null,inst_10932);
var inst_10918 = inst_10944;
var inst_10919 = null;
var inst_10920 = (0);
var inst_10921 = (0);
var state_10977__$1 = (function (){var statearr_10997 = state_10977;
(statearr_10997[(12)] = inst_10921);

(statearr_10997[(13)] = inst_10920);

(statearr_10997[(14)] = inst_10918);

(statearr_10997[(15)] = inst_10943);

(statearr_10997[(16)] = inst_10919);

return statearr_10997;
})();
var statearr_10998_11042 = state_10977__$1;
(statearr_10998_11042[(2)] = null);

(statearr_10998_11042[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10978 === (3))){
var inst_10975 = (state_10977[(2)]);
var state_10977__$1 = state_10977;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10977__$1,inst_10975);
} else {
if((state_val_10978 === (12))){
var inst_10952 = (state_10977[(2)]);
var state_10977__$1 = state_10977;
var statearr_10999_11043 = state_10977__$1;
(statearr_10999_11043[(2)] = inst_10952);

(statearr_10999_11043[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10978 === (2))){
var state_10977__$1 = state_10977;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10977__$1,(4),ch);
} else {
if((state_val_10978 === (23))){
var state_10977__$1 = state_10977;
var statearr_11000_11044 = state_10977__$1;
(statearr_11000_11044[(2)] = null);

(statearr_11000_11044[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10978 === (19))){
var inst_10908 = (state_10977[(8)]);
var inst_10958 = (state_10977[(11)]);
var inst_10960 = cljs.core.async.muxch_STAR_.call(null,inst_10958);
var state_10977__$1 = state_10977;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10977__$1,(22),inst_10960,inst_10908);
} else {
if((state_val_10978 === (11))){
var inst_10932 = (state_10977[(10)]);
var inst_10918 = (state_10977[(14)]);
var inst_10932__$1 = cljs.core.seq.call(null,inst_10918);
var state_10977__$1 = (function (){var statearr_11001 = state_10977;
(statearr_11001[(10)] = inst_10932__$1);

return statearr_11001;
})();
if(inst_10932__$1){
var statearr_11002_11045 = state_10977__$1;
(statearr_11002_11045[(1)] = (13));

} else {
var statearr_11003_11046 = state_10977__$1;
(statearr_11003_11046[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10978 === (9))){
var inst_10954 = (state_10977[(2)]);
var state_10977__$1 = state_10977;
var statearr_11004_11047 = state_10977__$1;
(statearr_11004_11047[(2)] = inst_10954);

(statearr_11004_11047[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10978 === (5))){
var inst_10915 = cljs.core.deref.call(null,mults);
var inst_10916 = cljs.core.vals.call(null,inst_10915);
var inst_10917 = cljs.core.seq.call(null,inst_10916);
var inst_10918 = inst_10917;
var inst_10919 = null;
var inst_10920 = (0);
var inst_10921 = (0);
var state_10977__$1 = (function (){var statearr_11005 = state_10977;
(statearr_11005[(12)] = inst_10921);

(statearr_11005[(13)] = inst_10920);

(statearr_11005[(14)] = inst_10918);

(statearr_11005[(16)] = inst_10919);

return statearr_11005;
})();
var statearr_11006_11048 = state_10977__$1;
(statearr_11006_11048[(2)] = null);

(statearr_11006_11048[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10978 === (14))){
var state_10977__$1 = state_10977;
var statearr_11010_11049 = state_10977__$1;
(statearr_11010_11049[(2)] = null);

(statearr_11010_11049[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10978 === (16))){
var inst_10932 = (state_10977[(10)]);
var inst_10936 = cljs.core.chunk_first.call(null,inst_10932);
var inst_10937 = cljs.core.chunk_rest.call(null,inst_10932);
var inst_10938 = cljs.core.count.call(null,inst_10936);
var inst_10918 = inst_10937;
var inst_10919 = inst_10936;
var inst_10920 = inst_10938;
var inst_10921 = (0);
var state_10977__$1 = (function (){var statearr_11011 = state_10977;
(statearr_11011[(12)] = inst_10921);

(statearr_11011[(13)] = inst_10920);

(statearr_11011[(14)] = inst_10918);

(statearr_11011[(16)] = inst_10919);

return statearr_11011;
})();
var statearr_11012_11050 = state_10977__$1;
(statearr_11012_11050[(2)] = null);

(statearr_11012_11050[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10978 === (10))){
var inst_10921 = (state_10977[(12)]);
var inst_10920 = (state_10977[(13)]);
var inst_10918 = (state_10977[(14)]);
var inst_10919 = (state_10977[(16)]);
var inst_10926 = cljs.core._nth.call(null,inst_10919,inst_10921);
var inst_10927 = cljs.core.async.muxch_STAR_.call(null,inst_10926);
var inst_10928 = cljs.core.async.close_BANG_.call(null,inst_10927);
var inst_10929 = (inst_10921 + (1));
var tmp11007 = inst_10920;
var tmp11008 = inst_10918;
var tmp11009 = inst_10919;
var inst_10918__$1 = tmp11008;
var inst_10919__$1 = tmp11009;
var inst_10920__$1 = tmp11007;
var inst_10921__$1 = inst_10929;
var state_10977__$1 = (function (){var statearr_11013 = state_10977;
(statearr_11013[(12)] = inst_10921__$1);

(statearr_11013[(17)] = inst_10928);

(statearr_11013[(13)] = inst_10920__$1);

(statearr_11013[(14)] = inst_10918__$1);

(statearr_11013[(16)] = inst_10919__$1);

return statearr_11013;
})();
var statearr_11014_11051 = state_10977__$1;
(statearr_11014_11051[(2)] = null);

(statearr_11014_11051[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10978 === (18))){
var inst_10947 = (state_10977[(2)]);
var state_10977__$1 = state_10977;
var statearr_11015_11052 = state_10977__$1;
(statearr_11015_11052[(2)] = inst_10947);

(statearr_11015_11052[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10978 === (8))){
var inst_10921 = (state_10977[(12)]);
var inst_10920 = (state_10977[(13)]);
var inst_10923 = (inst_10921 < inst_10920);
var inst_10924 = inst_10923;
var state_10977__$1 = state_10977;
if(cljs.core.truth_(inst_10924)){
var statearr_11016_11053 = state_10977__$1;
(statearr_11016_11053[(1)] = (10));

} else {
var statearr_11017_11054 = state_10977__$1;
(statearr_11017_11054[(1)] = (11));

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
});})(c__6888__auto___11026,mults,ensure_mult,p))
;
return ((function (switch__6826__auto__,c__6888__auto___11026,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__6827__auto__ = null;
var cljs$core$async$state_machine__6827__auto____0 = (function (){
var statearr_11021 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11021[(0)] = cljs$core$async$state_machine__6827__auto__);

(statearr_11021[(1)] = (1));

return statearr_11021;
});
var cljs$core$async$state_machine__6827__auto____1 = (function (state_10977){
while(true){
var ret_value__6828__auto__ = (function (){try{while(true){
var result__6829__auto__ = switch__6826__auto__.call(null,state_10977);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6829__auto__;
}
break;
}
}catch (e11022){if((e11022 instanceof Object)){
var ex__6830__auto__ = e11022;
var statearr_11023_11055 = state_10977;
(statearr_11023_11055[(5)] = ex__6830__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11022;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11056 = state_10977;
state_10977 = G__11056;
continue;
} else {
return ret_value__6828__auto__;
}
break;
}
});
cljs$core$async$state_machine__6827__auto__ = function(state_10977){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6827__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6827__auto____1.call(this,state_10977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6827__auto____0;
cljs$core$async$state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6827__auto____1;
return cljs$core$async$state_machine__6827__auto__;
})()
;})(switch__6826__auto__,c__6888__auto___11026,mults,ensure_mult,p))
})();
var state__6890__auto__ = (function (){var statearr_11024 = f__6889__auto__.call(null);
(statearr_11024[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6888__auto___11026);

return statearr_11024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6890__auto__);
});})(c__6888__auto___11026,mults,ensure_mult,p))
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
var G__11058 = arguments.length;
switch (G__11058) {
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
var G__11061 = arguments.length;
switch (G__11061) {
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
var G__11064 = arguments.length;
switch (G__11064) {
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
var c__6888__auto___11134 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6888__auto___11134,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6889__auto__ = (function (){var switch__6826__auto__ = ((function (c__6888__auto___11134,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_11103){
var state_val_11104 = (state_11103[(1)]);
if((state_val_11104 === (7))){
var state_11103__$1 = state_11103;
var statearr_11105_11135 = state_11103__$1;
(statearr_11105_11135[(2)] = null);

(statearr_11105_11135[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11104 === (1))){
var state_11103__$1 = state_11103;
var statearr_11106_11136 = state_11103__$1;
(statearr_11106_11136[(2)] = null);

(statearr_11106_11136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11104 === (4))){
var inst_11067 = (state_11103[(7)]);
var inst_11069 = (inst_11067 < cnt);
var state_11103__$1 = state_11103;
if(cljs.core.truth_(inst_11069)){
var statearr_11107_11137 = state_11103__$1;
(statearr_11107_11137[(1)] = (6));

} else {
var statearr_11108_11138 = state_11103__$1;
(statearr_11108_11138[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11104 === (15))){
var inst_11099 = (state_11103[(2)]);
var state_11103__$1 = state_11103;
var statearr_11109_11139 = state_11103__$1;
(statearr_11109_11139[(2)] = inst_11099);

(statearr_11109_11139[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11104 === (13))){
var inst_11092 = cljs.core.async.close_BANG_.call(null,out);
var state_11103__$1 = state_11103;
var statearr_11110_11140 = state_11103__$1;
(statearr_11110_11140[(2)] = inst_11092);

(statearr_11110_11140[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11104 === (6))){
var state_11103__$1 = state_11103;
var statearr_11111_11141 = state_11103__$1;
(statearr_11111_11141[(2)] = null);

(statearr_11111_11141[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11104 === (3))){
var inst_11101 = (state_11103[(2)]);
var state_11103__$1 = state_11103;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11103__$1,inst_11101);
} else {
if((state_val_11104 === (12))){
var inst_11089 = (state_11103[(8)]);
var inst_11089__$1 = (state_11103[(2)]);
var inst_11090 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11089__$1);
var state_11103__$1 = (function (){var statearr_11112 = state_11103;
(statearr_11112[(8)] = inst_11089__$1);

return statearr_11112;
})();
if(cljs.core.truth_(inst_11090)){
var statearr_11113_11142 = state_11103__$1;
(statearr_11113_11142[(1)] = (13));

} else {
var statearr_11114_11143 = state_11103__$1;
(statearr_11114_11143[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11104 === (2))){
var inst_11066 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_11067 = (0);
var state_11103__$1 = (function (){var statearr_11115 = state_11103;
(statearr_11115[(7)] = inst_11067);

(statearr_11115[(9)] = inst_11066);

return statearr_11115;
})();
var statearr_11116_11144 = state_11103__$1;
(statearr_11116_11144[(2)] = null);

(statearr_11116_11144[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11104 === (11))){
var inst_11067 = (state_11103[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11103,(10),Object,null,(9));
var inst_11076 = chs__$1.call(null,inst_11067);
var inst_11077 = done.call(null,inst_11067);
var inst_11078 = cljs.core.async.take_BANG_.call(null,inst_11076,inst_11077);
var state_11103__$1 = state_11103;
var statearr_11117_11145 = state_11103__$1;
(statearr_11117_11145[(2)] = inst_11078);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11103__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11104 === (9))){
var inst_11067 = (state_11103[(7)]);
var inst_11080 = (state_11103[(2)]);
var inst_11081 = (inst_11067 + (1));
var inst_11067__$1 = inst_11081;
var state_11103__$1 = (function (){var statearr_11118 = state_11103;
(statearr_11118[(10)] = inst_11080);

(statearr_11118[(7)] = inst_11067__$1);

return statearr_11118;
})();
var statearr_11119_11146 = state_11103__$1;
(statearr_11119_11146[(2)] = null);

(statearr_11119_11146[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11104 === (5))){
var inst_11087 = (state_11103[(2)]);
var state_11103__$1 = (function (){var statearr_11120 = state_11103;
(statearr_11120[(11)] = inst_11087);

return statearr_11120;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11103__$1,(12),dchan);
} else {
if((state_val_11104 === (14))){
var inst_11089 = (state_11103[(8)]);
var inst_11094 = cljs.core.apply.call(null,f,inst_11089);
var state_11103__$1 = state_11103;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11103__$1,(16),out,inst_11094);
} else {
if((state_val_11104 === (16))){
var inst_11096 = (state_11103[(2)]);
var state_11103__$1 = (function (){var statearr_11121 = state_11103;
(statearr_11121[(12)] = inst_11096);

return statearr_11121;
})();
var statearr_11122_11147 = state_11103__$1;
(statearr_11122_11147[(2)] = null);

(statearr_11122_11147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11104 === (10))){
var inst_11071 = (state_11103[(2)]);
var inst_11072 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_11103__$1 = (function (){var statearr_11123 = state_11103;
(statearr_11123[(13)] = inst_11071);

return statearr_11123;
})();
var statearr_11124_11148 = state_11103__$1;
(statearr_11124_11148[(2)] = inst_11072);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11103__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11104 === (8))){
var inst_11085 = (state_11103[(2)]);
var state_11103__$1 = state_11103;
var statearr_11125_11149 = state_11103__$1;
(statearr_11125_11149[(2)] = inst_11085);

(statearr_11125_11149[(1)] = (5));


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
});})(c__6888__auto___11134,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6826__auto__,c__6888__auto___11134,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__6827__auto__ = null;
var cljs$core$async$state_machine__6827__auto____0 = (function (){
var statearr_11129 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11129[(0)] = cljs$core$async$state_machine__6827__auto__);

(statearr_11129[(1)] = (1));

return statearr_11129;
});
var cljs$core$async$state_machine__6827__auto____1 = (function (state_11103){
while(true){
var ret_value__6828__auto__ = (function (){try{while(true){
var result__6829__auto__ = switch__6826__auto__.call(null,state_11103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6829__auto__;
}
break;
}
}catch (e11130){if((e11130 instanceof Object)){
var ex__6830__auto__ = e11130;
var statearr_11131_11150 = state_11103;
(statearr_11131_11150[(5)] = ex__6830__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11151 = state_11103;
state_11103 = G__11151;
continue;
} else {
return ret_value__6828__auto__;
}
break;
}
});
cljs$core$async$state_machine__6827__auto__ = function(state_11103){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6827__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6827__auto____1.call(this,state_11103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6827__auto____0;
cljs$core$async$state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6827__auto____1;
return cljs$core$async$state_machine__6827__auto__;
})()
;})(switch__6826__auto__,c__6888__auto___11134,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6890__auto__ = (function (){var statearr_11132 = f__6889__auto__.call(null);
(statearr_11132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6888__auto___11134);

return statearr_11132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6890__auto__);
});})(c__6888__auto___11134,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__11154 = arguments.length;
switch (G__11154) {
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
var c__6888__auto___11209 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6888__auto___11209,out){
return (function (){
var f__6889__auto__ = (function (){var switch__6826__auto__ = ((function (c__6888__auto___11209,out){
return (function (state_11184){
var state_val_11185 = (state_11184[(1)]);
if((state_val_11185 === (7))){
var inst_11163 = (state_11184[(7)]);
var inst_11164 = (state_11184[(8)]);
var inst_11163__$1 = (state_11184[(2)]);
var inst_11164__$1 = cljs.core.nth.call(null,inst_11163__$1,(0),null);
var inst_11165 = cljs.core.nth.call(null,inst_11163__$1,(1),null);
var inst_11166 = (inst_11164__$1 == null);
var state_11184__$1 = (function (){var statearr_11186 = state_11184;
(statearr_11186[(7)] = inst_11163__$1);

(statearr_11186[(8)] = inst_11164__$1);

(statearr_11186[(9)] = inst_11165);

return statearr_11186;
})();
if(cljs.core.truth_(inst_11166)){
var statearr_11187_11210 = state_11184__$1;
(statearr_11187_11210[(1)] = (8));

} else {
var statearr_11188_11211 = state_11184__$1;
(statearr_11188_11211[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11185 === (1))){
var inst_11155 = cljs.core.vec.call(null,chs);
var inst_11156 = inst_11155;
var state_11184__$1 = (function (){var statearr_11189 = state_11184;
(statearr_11189[(10)] = inst_11156);

return statearr_11189;
})();
var statearr_11190_11212 = state_11184__$1;
(statearr_11190_11212[(2)] = null);

(statearr_11190_11212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11185 === (4))){
var inst_11156 = (state_11184[(10)]);
var state_11184__$1 = state_11184;
return cljs.core.async.ioc_alts_BANG_.call(null,state_11184__$1,(7),inst_11156);
} else {
if((state_val_11185 === (6))){
var inst_11180 = (state_11184[(2)]);
var state_11184__$1 = state_11184;
var statearr_11191_11213 = state_11184__$1;
(statearr_11191_11213[(2)] = inst_11180);

(statearr_11191_11213[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11185 === (3))){
var inst_11182 = (state_11184[(2)]);
var state_11184__$1 = state_11184;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11184__$1,inst_11182);
} else {
if((state_val_11185 === (2))){
var inst_11156 = (state_11184[(10)]);
var inst_11158 = cljs.core.count.call(null,inst_11156);
var inst_11159 = (inst_11158 > (0));
var state_11184__$1 = state_11184;
if(cljs.core.truth_(inst_11159)){
var statearr_11193_11214 = state_11184__$1;
(statearr_11193_11214[(1)] = (4));

} else {
var statearr_11194_11215 = state_11184__$1;
(statearr_11194_11215[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11185 === (11))){
var inst_11156 = (state_11184[(10)]);
var inst_11173 = (state_11184[(2)]);
var tmp11192 = inst_11156;
var inst_11156__$1 = tmp11192;
var state_11184__$1 = (function (){var statearr_11195 = state_11184;
(statearr_11195[(11)] = inst_11173);

(statearr_11195[(10)] = inst_11156__$1);

return statearr_11195;
})();
var statearr_11196_11216 = state_11184__$1;
(statearr_11196_11216[(2)] = null);

(statearr_11196_11216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11185 === (9))){
var inst_11164 = (state_11184[(8)]);
var state_11184__$1 = state_11184;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11184__$1,(11),out,inst_11164);
} else {
if((state_val_11185 === (5))){
var inst_11178 = cljs.core.async.close_BANG_.call(null,out);
var state_11184__$1 = state_11184;
var statearr_11197_11217 = state_11184__$1;
(statearr_11197_11217[(2)] = inst_11178);

(statearr_11197_11217[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11185 === (10))){
var inst_11176 = (state_11184[(2)]);
var state_11184__$1 = state_11184;
var statearr_11198_11218 = state_11184__$1;
(statearr_11198_11218[(2)] = inst_11176);

(statearr_11198_11218[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11185 === (8))){
var inst_11163 = (state_11184[(7)]);
var inst_11164 = (state_11184[(8)]);
var inst_11165 = (state_11184[(9)]);
var inst_11156 = (state_11184[(10)]);
var inst_11168 = (function (){var cs = inst_11156;
var vec__11161 = inst_11163;
var v = inst_11164;
var c = inst_11165;
return ((function (cs,vec__11161,v,c,inst_11163,inst_11164,inst_11165,inst_11156,state_val_11185,c__6888__auto___11209,out){
return (function (p1__11152_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__11152_SHARP_);
});
;})(cs,vec__11161,v,c,inst_11163,inst_11164,inst_11165,inst_11156,state_val_11185,c__6888__auto___11209,out))
})();
var inst_11169 = cljs.core.filterv.call(null,inst_11168,inst_11156);
var inst_11156__$1 = inst_11169;
var state_11184__$1 = (function (){var statearr_11199 = state_11184;
(statearr_11199[(10)] = inst_11156__$1);

return statearr_11199;
})();
var statearr_11200_11219 = state_11184__$1;
(statearr_11200_11219[(2)] = null);

(statearr_11200_11219[(1)] = (2));


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
});})(c__6888__auto___11209,out))
;
return ((function (switch__6826__auto__,c__6888__auto___11209,out){
return (function() {
var cljs$core$async$state_machine__6827__auto__ = null;
var cljs$core$async$state_machine__6827__auto____0 = (function (){
var statearr_11204 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11204[(0)] = cljs$core$async$state_machine__6827__auto__);

(statearr_11204[(1)] = (1));

return statearr_11204;
});
var cljs$core$async$state_machine__6827__auto____1 = (function (state_11184){
while(true){
var ret_value__6828__auto__ = (function (){try{while(true){
var result__6829__auto__ = switch__6826__auto__.call(null,state_11184);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6829__auto__;
}
break;
}
}catch (e11205){if((e11205 instanceof Object)){
var ex__6830__auto__ = e11205;
var statearr_11206_11220 = state_11184;
(statearr_11206_11220[(5)] = ex__6830__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11184);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11205;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11221 = state_11184;
state_11184 = G__11221;
continue;
} else {
return ret_value__6828__auto__;
}
break;
}
});
cljs$core$async$state_machine__6827__auto__ = function(state_11184){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6827__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6827__auto____1.call(this,state_11184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6827__auto____0;
cljs$core$async$state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6827__auto____1;
return cljs$core$async$state_machine__6827__auto__;
})()
;})(switch__6826__auto__,c__6888__auto___11209,out))
})();
var state__6890__auto__ = (function (){var statearr_11207 = f__6889__auto__.call(null);
(statearr_11207[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6888__auto___11209);

return statearr_11207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6890__auto__);
});})(c__6888__auto___11209,out))
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
var G__11223 = arguments.length;
switch (G__11223) {
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
var c__6888__auto___11271 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6888__auto___11271,out){
return (function (){
var f__6889__auto__ = (function (){var switch__6826__auto__ = ((function (c__6888__auto___11271,out){
return (function (state_11247){
var state_val_11248 = (state_11247[(1)]);
if((state_val_11248 === (7))){
var inst_11229 = (state_11247[(7)]);
var inst_11229__$1 = (state_11247[(2)]);
var inst_11230 = (inst_11229__$1 == null);
var inst_11231 = cljs.core.not.call(null,inst_11230);
var state_11247__$1 = (function (){var statearr_11249 = state_11247;
(statearr_11249[(7)] = inst_11229__$1);

return statearr_11249;
})();
if(inst_11231){
var statearr_11250_11272 = state_11247__$1;
(statearr_11250_11272[(1)] = (8));

} else {
var statearr_11251_11273 = state_11247__$1;
(statearr_11251_11273[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11248 === (1))){
var inst_11224 = (0);
var state_11247__$1 = (function (){var statearr_11252 = state_11247;
(statearr_11252[(8)] = inst_11224);

return statearr_11252;
})();
var statearr_11253_11274 = state_11247__$1;
(statearr_11253_11274[(2)] = null);

(statearr_11253_11274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11248 === (4))){
var state_11247__$1 = state_11247;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11247__$1,(7),ch);
} else {
if((state_val_11248 === (6))){
var inst_11242 = (state_11247[(2)]);
var state_11247__$1 = state_11247;
var statearr_11254_11275 = state_11247__$1;
(statearr_11254_11275[(2)] = inst_11242);

(statearr_11254_11275[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11248 === (3))){
var inst_11244 = (state_11247[(2)]);
var inst_11245 = cljs.core.async.close_BANG_.call(null,out);
var state_11247__$1 = (function (){var statearr_11255 = state_11247;
(statearr_11255[(9)] = inst_11244);

return statearr_11255;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11247__$1,inst_11245);
} else {
if((state_val_11248 === (2))){
var inst_11224 = (state_11247[(8)]);
var inst_11226 = (inst_11224 < n);
var state_11247__$1 = state_11247;
if(cljs.core.truth_(inst_11226)){
var statearr_11256_11276 = state_11247__$1;
(statearr_11256_11276[(1)] = (4));

} else {
var statearr_11257_11277 = state_11247__$1;
(statearr_11257_11277[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11248 === (11))){
var inst_11224 = (state_11247[(8)]);
var inst_11234 = (state_11247[(2)]);
var inst_11235 = (inst_11224 + (1));
var inst_11224__$1 = inst_11235;
var state_11247__$1 = (function (){var statearr_11258 = state_11247;
(statearr_11258[(10)] = inst_11234);

(statearr_11258[(8)] = inst_11224__$1);

return statearr_11258;
})();
var statearr_11259_11278 = state_11247__$1;
(statearr_11259_11278[(2)] = null);

(statearr_11259_11278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11248 === (9))){
var state_11247__$1 = state_11247;
var statearr_11260_11279 = state_11247__$1;
(statearr_11260_11279[(2)] = null);

(statearr_11260_11279[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11248 === (5))){
var state_11247__$1 = state_11247;
var statearr_11261_11280 = state_11247__$1;
(statearr_11261_11280[(2)] = null);

(statearr_11261_11280[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11248 === (10))){
var inst_11239 = (state_11247[(2)]);
var state_11247__$1 = state_11247;
var statearr_11262_11281 = state_11247__$1;
(statearr_11262_11281[(2)] = inst_11239);

(statearr_11262_11281[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11248 === (8))){
var inst_11229 = (state_11247[(7)]);
var state_11247__$1 = state_11247;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11247__$1,(11),out,inst_11229);
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
});})(c__6888__auto___11271,out))
;
return ((function (switch__6826__auto__,c__6888__auto___11271,out){
return (function() {
var cljs$core$async$state_machine__6827__auto__ = null;
var cljs$core$async$state_machine__6827__auto____0 = (function (){
var statearr_11266 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11266[(0)] = cljs$core$async$state_machine__6827__auto__);

(statearr_11266[(1)] = (1));

return statearr_11266;
});
var cljs$core$async$state_machine__6827__auto____1 = (function (state_11247){
while(true){
var ret_value__6828__auto__ = (function (){try{while(true){
var result__6829__auto__ = switch__6826__auto__.call(null,state_11247);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6829__auto__;
}
break;
}
}catch (e11267){if((e11267 instanceof Object)){
var ex__6830__auto__ = e11267;
var statearr_11268_11282 = state_11247;
(statearr_11268_11282[(5)] = ex__6830__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11247);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11267;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11283 = state_11247;
state_11247 = G__11283;
continue;
} else {
return ret_value__6828__auto__;
}
break;
}
});
cljs$core$async$state_machine__6827__auto__ = function(state_11247){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6827__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6827__auto____1.call(this,state_11247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6827__auto____0;
cljs$core$async$state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6827__auto____1;
return cljs$core$async$state_machine__6827__auto__;
})()
;})(switch__6826__auto__,c__6888__auto___11271,out))
})();
var state__6890__auto__ = (function (){var statearr_11269 = f__6889__auto__.call(null);
(statearr_11269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6888__auto___11271);

return statearr_11269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6890__auto__);
});})(c__6888__auto___11271,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t11291 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11291 = (function (map_LT_,f,ch,meta11292){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta11292 = meta11292;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t11291.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11293,meta11292__$1){
var self__ = this;
var _11293__$1 = this;
return (new cljs.core.async.t11291(self__.map_LT_,self__.f,self__.ch,meta11292__$1));
});

cljs.core.async.t11291.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11293){
var self__ = this;
var _11293__$1 = this;
return self__.meta11292;
});

cljs.core.async.t11291.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t11291.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t11291.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t11291.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t11291.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t11294 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11294 = (function (map_LT_,f,ch,meta11292,_,fn1,meta11295){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta11292 = meta11292;
this._ = _;
this.fn1 = fn1;
this.meta11295 = meta11295;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t11294.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_11296,meta11295__$1){
var self__ = this;
var _11296__$1 = this;
return (new cljs.core.async.t11294(self__.map_LT_,self__.f,self__.ch,self__.meta11292,self__._,self__.fn1,meta11295__$1));
});})(___$1))
;

cljs.core.async.t11294.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_11296){
var self__ = this;
var _11296__$1 = this;
return self__.meta11295;
});})(___$1))
;

cljs.core.async.t11294.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t11294.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t11294.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__11284_SHARP_){
return f1.call(null,(((p1__11284_SHARP_ == null))?null:self__.f.call(null,p1__11284_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t11294.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11292","meta11292",1090034862,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta11295","meta11295",1096807794,null)], null);
});})(___$1))
;

cljs.core.async.t11294.cljs$lang$type = true;

cljs.core.async.t11294.cljs$lang$ctorStr = "cljs.core.async/t11294";

cljs.core.async.t11294.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t11294");
});})(___$1))
;

cljs.core.async.__GT_t11294 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t11294(map_LT___$1,f__$1,ch__$1,meta11292__$1,___$2,fn1__$1,meta11295){
return (new cljs.core.async.t11294(map_LT___$1,f__$1,ch__$1,meta11292__$1,___$2,fn1__$1,meta11295));
});})(___$1))
;

}

return (new cljs.core.async.t11294(self__.map_LT_,self__.f,self__.ch,self__.meta11292,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4297__auto__ = ret;
if(cljs.core.truth_(and__4297__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4297__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t11291.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t11291.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t11291.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11292","meta11292",1090034862,null)], null);
});

cljs.core.async.t11291.cljs$lang$type = true;

cljs.core.async.t11291.cljs$lang$ctorStr = "cljs.core.async/t11291";

cljs.core.async.t11291.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t11291");
});

cljs.core.async.__GT_t11291 = (function cljs$core$async$map_LT__$___GT_t11291(map_LT___$1,f__$1,ch__$1,meta11292){
return (new cljs.core.async.t11291(map_LT___$1,f__$1,ch__$1,meta11292));
});

}

return (new cljs.core.async.t11291(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t11300 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11300 = (function (map_GT_,f,ch,meta11301){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta11301 = meta11301;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t11300.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11302,meta11301__$1){
var self__ = this;
var _11302__$1 = this;
return (new cljs.core.async.t11300(self__.map_GT_,self__.f,self__.ch,meta11301__$1));
});

cljs.core.async.t11300.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11302){
var self__ = this;
var _11302__$1 = this;
return self__.meta11301;
});

cljs.core.async.t11300.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t11300.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t11300.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t11300.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t11300.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t11300.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t11300.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11301","meta11301",-561252542,null)], null);
});

cljs.core.async.t11300.cljs$lang$type = true;

cljs.core.async.t11300.cljs$lang$ctorStr = "cljs.core.async/t11300";

cljs.core.async.t11300.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t11300");
});

cljs.core.async.__GT_t11300 = (function cljs$core$async$map_GT__$___GT_t11300(map_GT___$1,f__$1,ch__$1,meta11301){
return (new cljs.core.async.t11300(map_GT___$1,f__$1,ch__$1,meta11301));
});

}

return (new cljs.core.async.t11300(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t11306 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11306 = (function (filter_GT_,p,ch,meta11307){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta11307 = meta11307;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t11306.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11308,meta11307__$1){
var self__ = this;
var _11308__$1 = this;
return (new cljs.core.async.t11306(self__.filter_GT_,self__.p,self__.ch,meta11307__$1));
});

cljs.core.async.t11306.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11308){
var self__ = this;
var _11308__$1 = this;
return self__.meta11307;
});

cljs.core.async.t11306.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t11306.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t11306.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t11306.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t11306.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t11306.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t11306.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t11306.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11307","meta11307",-1765592194,null)], null);
});

cljs.core.async.t11306.cljs$lang$type = true;

cljs.core.async.t11306.cljs$lang$ctorStr = "cljs.core.async/t11306";

cljs.core.async.t11306.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t11306");
});

cljs.core.async.__GT_t11306 = (function cljs$core$async$filter_GT__$___GT_t11306(filter_GT___$1,p__$1,ch__$1,meta11307){
return (new cljs.core.async.t11306(filter_GT___$1,p__$1,ch__$1,meta11307));
});

}

return (new cljs.core.async.t11306(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__11310 = arguments.length;
switch (G__11310) {
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
var c__6888__auto___11353 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6888__auto___11353,out){
return (function (){
var f__6889__auto__ = (function (){var switch__6826__auto__ = ((function (c__6888__auto___11353,out){
return (function (state_11331){
var state_val_11332 = (state_11331[(1)]);
if((state_val_11332 === (7))){
var inst_11327 = (state_11331[(2)]);
var state_11331__$1 = state_11331;
var statearr_11333_11354 = state_11331__$1;
(statearr_11333_11354[(2)] = inst_11327);

(statearr_11333_11354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11332 === (1))){
var state_11331__$1 = state_11331;
var statearr_11334_11355 = state_11331__$1;
(statearr_11334_11355[(2)] = null);

(statearr_11334_11355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11332 === (4))){
var inst_11313 = (state_11331[(7)]);
var inst_11313__$1 = (state_11331[(2)]);
var inst_11314 = (inst_11313__$1 == null);
var state_11331__$1 = (function (){var statearr_11335 = state_11331;
(statearr_11335[(7)] = inst_11313__$1);

return statearr_11335;
})();
if(cljs.core.truth_(inst_11314)){
var statearr_11336_11356 = state_11331__$1;
(statearr_11336_11356[(1)] = (5));

} else {
var statearr_11337_11357 = state_11331__$1;
(statearr_11337_11357[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11332 === (6))){
var inst_11313 = (state_11331[(7)]);
var inst_11318 = p.call(null,inst_11313);
var state_11331__$1 = state_11331;
if(cljs.core.truth_(inst_11318)){
var statearr_11338_11358 = state_11331__$1;
(statearr_11338_11358[(1)] = (8));

} else {
var statearr_11339_11359 = state_11331__$1;
(statearr_11339_11359[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11332 === (3))){
var inst_11329 = (state_11331[(2)]);
var state_11331__$1 = state_11331;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11331__$1,inst_11329);
} else {
if((state_val_11332 === (2))){
var state_11331__$1 = state_11331;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11331__$1,(4),ch);
} else {
if((state_val_11332 === (11))){
var inst_11321 = (state_11331[(2)]);
var state_11331__$1 = state_11331;
var statearr_11340_11360 = state_11331__$1;
(statearr_11340_11360[(2)] = inst_11321);

(statearr_11340_11360[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11332 === (9))){
var state_11331__$1 = state_11331;
var statearr_11341_11361 = state_11331__$1;
(statearr_11341_11361[(2)] = null);

(statearr_11341_11361[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11332 === (5))){
var inst_11316 = cljs.core.async.close_BANG_.call(null,out);
var state_11331__$1 = state_11331;
var statearr_11342_11362 = state_11331__$1;
(statearr_11342_11362[(2)] = inst_11316);

(statearr_11342_11362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11332 === (10))){
var inst_11324 = (state_11331[(2)]);
var state_11331__$1 = (function (){var statearr_11343 = state_11331;
(statearr_11343[(8)] = inst_11324);

return statearr_11343;
})();
var statearr_11344_11363 = state_11331__$1;
(statearr_11344_11363[(2)] = null);

(statearr_11344_11363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11332 === (8))){
var inst_11313 = (state_11331[(7)]);
var state_11331__$1 = state_11331;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11331__$1,(11),out,inst_11313);
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
});})(c__6888__auto___11353,out))
;
return ((function (switch__6826__auto__,c__6888__auto___11353,out){
return (function() {
var cljs$core$async$state_machine__6827__auto__ = null;
var cljs$core$async$state_machine__6827__auto____0 = (function (){
var statearr_11348 = [null,null,null,null,null,null,null,null,null];
(statearr_11348[(0)] = cljs$core$async$state_machine__6827__auto__);

(statearr_11348[(1)] = (1));

return statearr_11348;
});
var cljs$core$async$state_machine__6827__auto____1 = (function (state_11331){
while(true){
var ret_value__6828__auto__ = (function (){try{while(true){
var result__6829__auto__ = switch__6826__auto__.call(null,state_11331);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6829__auto__;
}
break;
}
}catch (e11349){if((e11349 instanceof Object)){
var ex__6830__auto__ = e11349;
var statearr_11350_11364 = state_11331;
(statearr_11350_11364[(5)] = ex__6830__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11331);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11349;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11365 = state_11331;
state_11331 = G__11365;
continue;
} else {
return ret_value__6828__auto__;
}
break;
}
});
cljs$core$async$state_machine__6827__auto__ = function(state_11331){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6827__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6827__auto____1.call(this,state_11331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6827__auto____0;
cljs$core$async$state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6827__auto____1;
return cljs$core$async$state_machine__6827__auto__;
})()
;})(switch__6826__auto__,c__6888__auto___11353,out))
})();
var state__6890__auto__ = (function (){var statearr_11351 = f__6889__auto__.call(null);
(statearr_11351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6888__auto___11353);

return statearr_11351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6890__auto__);
});})(c__6888__auto___11353,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__11367 = arguments.length;
switch (G__11367) {
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
var c__6888__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6888__auto__){
return (function (){
var f__6889__auto__ = (function (){var switch__6826__auto__ = ((function (c__6888__auto__){
return (function (state_11534){
var state_val_11535 = (state_11534[(1)]);
if((state_val_11535 === (7))){
var inst_11530 = (state_11534[(2)]);
var state_11534__$1 = state_11534;
var statearr_11536_11577 = state_11534__$1;
(statearr_11536_11577[(2)] = inst_11530);

(statearr_11536_11577[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11535 === (20))){
var inst_11500 = (state_11534[(7)]);
var inst_11511 = (state_11534[(2)]);
var inst_11512 = cljs.core.next.call(null,inst_11500);
var inst_11486 = inst_11512;
var inst_11487 = null;
var inst_11488 = (0);
var inst_11489 = (0);
var state_11534__$1 = (function (){var statearr_11537 = state_11534;
(statearr_11537[(8)] = inst_11511);

(statearr_11537[(9)] = inst_11488);

(statearr_11537[(10)] = inst_11486);

(statearr_11537[(11)] = inst_11487);

(statearr_11537[(12)] = inst_11489);

return statearr_11537;
})();
var statearr_11538_11578 = state_11534__$1;
(statearr_11538_11578[(2)] = null);

(statearr_11538_11578[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11535 === (1))){
var state_11534__$1 = state_11534;
var statearr_11539_11579 = state_11534__$1;
(statearr_11539_11579[(2)] = null);

(statearr_11539_11579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11535 === (4))){
var inst_11475 = (state_11534[(13)]);
var inst_11475__$1 = (state_11534[(2)]);
var inst_11476 = (inst_11475__$1 == null);
var state_11534__$1 = (function (){var statearr_11540 = state_11534;
(statearr_11540[(13)] = inst_11475__$1);

return statearr_11540;
})();
if(cljs.core.truth_(inst_11476)){
var statearr_11541_11580 = state_11534__$1;
(statearr_11541_11580[(1)] = (5));

} else {
var statearr_11542_11581 = state_11534__$1;
(statearr_11542_11581[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11535 === (15))){
var state_11534__$1 = state_11534;
var statearr_11546_11582 = state_11534__$1;
(statearr_11546_11582[(2)] = null);

(statearr_11546_11582[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11535 === (21))){
var state_11534__$1 = state_11534;
var statearr_11547_11583 = state_11534__$1;
(statearr_11547_11583[(2)] = null);

(statearr_11547_11583[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11535 === (13))){
var inst_11488 = (state_11534[(9)]);
var inst_11486 = (state_11534[(10)]);
var inst_11487 = (state_11534[(11)]);
var inst_11489 = (state_11534[(12)]);
var inst_11496 = (state_11534[(2)]);
var inst_11497 = (inst_11489 + (1));
var tmp11543 = inst_11488;
var tmp11544 = inst_11486;
var tmp11545 = inst_11487;
var inst_11486__$1 = tmp11544;
var inst_11487__$1 = tmp11545;
var inst_11488__$1 = tmp11543;
var inst_11489__$1 = inst_11497;
var state_11534__$1 = (function (){var statearr_11548 = state_11534;
(statearr_11548[(14)] = inst_11496);

(statearr_11548[(9)] = inst_11488__$1);

(statearr_11548[(10)] = inst_11486__$1);

(statearr_11548[(11)] = inst_11487__$1);

(statearr_11548[(12)] = inst_11489__$1);

return statearr_11548;
})();
var statearr_11549_11584 = state_11534__$1;
(statearr_11549_11584[(2)] = null);

(statearr_11549_11584[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11535 === (22))){
var state_11534__$1 = state_11534;
var statearr_11550_11585 = state_11534__$1;
(statearr_11550_11585[(2)] = null);

(statearr_11550_11585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11535 === (6))){
var inst_11475 = (state_11534[(13)]);
var inst_11484 = f.call(null,inst_11475);
var inst_11485 = cljs.core.seq.call(null,inst_11484);
var inst_11486 = inst_11485;
var inst_11487 = null;
var inst_11488 = (0);
var inst_11489 = (0);
var state_11534__$1 = (function (){var statearr_11551 = state_11534;
(statearr_11551[(9)] = inst_11488);

(statearr_11551[(10)] = inst_11486);

(statearr_11551[(11)] = inst_11487);

(statearr_11551[(12)] = inst_11489);

return statearr_11551;
})();
var statearr_11552_11586 = state_11534__$1;
(statearr_11552_11586[(2)] = null);

(statearr_11552_11586[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11535 === (17))){
var inst_11500 = (state_11534[(7)]);
var inst_11504 = cljs.core.chunk_first.call(null,inst_11500);
var inst_11505 = cljs.core.chunk_rest.call(null,inst_11500);
var inst_11506 = cljs.core.count.call(null,inst_11504);
var inst_11486 = inst_11505;
var inst_11487 = inst_11504;
var inst_11488 = inst_11506;
var inst_11489 = (0);
var state_11534__$1 = (function (){var statearr_11553 = state_11534;
(statearr_11553[(9)] = inst_11488);

(statearr_11553[(10)] = inst_11486);

(statearr_11553[(11)] = inst_11487);

(statearr_11553[(12)] = inst_11489);

return statearr_11553;
})();
var statearr_11554_11587 = state_11534__$1;
(statearr_11554_11587[(2)] = null);

(statearr_11554_11587[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11535 === (3))){
var inst_11532 = (state_11534[(2)]);
var state_11534__$1 = state_11534;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11534__$1,inst_11532);
} else {
if((state_val_11535 === (12))){
var inst_11520 = (state_11534[(2)]);
var state_11534__$1 = state_11534;
var statearr_11555_11588 = state_11534__$1;
(statearr_11555_11588[(2)] = inst_11520);

(statearr_11555_11588[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11535 === (2))){
var state_11534__$1 = state_11534;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11534__$1,(4),in$);
} else {
if((state_val_11535 === (23))){
var inst_11528 = (state_11534[(2)]);
var state_11534__$1 = state_11534;
var statearr_11556_11589 = state_11534__$1;
(statearr_11556_11589[(2)] = inst_11528);

(statearr_11556_11589[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11535 === (19))){
var inst_11515 = (state_11534[(2)]);
var state_11534__$1 = state_11534;
var statearr_11557_11590 = state_11534__$1;
(statearr_11557_11590[(2)] = inst_11515);

(statearr_11557_11590[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11535 === (11))){
var inst_11486 = (state_11534[(10)]);
var inst_11500 = (state_11534[(7)]);
var inst_11500__$1 = cljs.core.seq.call(null,inst_11486);
var state_11534__$1 = (function (){var statearr_11558 = state_11534;
(statearr_11558[(7)] = inst_11500__$1);

return statearr_11558;
})();
if(inst_11500__$1){
var statearr_11559_11591 = state_11534__$1;
(statearr_11559_11591[(1)] = (14));

} else {
var statearr_11560_11592 = state_11534__$1;
(statearr_11560_11592[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11535 === (9))){
var inst_11522 = (state_11534[(2)]);
var inst_11523 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_11534__$1 = (function (){var statearr_11561 = state_11534;
(statearr_11561[(15)] = inst_11522);

return statearr_11561;
})();
if(cljs.core.truth_(inst_11523)){
var statearr_11562_11593 = state_11534__$1;
(statearr_11562_11593[(1)] = (21));

} else {
var statearr_11563_11594 = state_11534__$1;
(statearr_11563_11594[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11535 === (5))){
var inst_11478 = cljs.core.async.close_BANG_.call(null,out);
var state_11534__$1 = state_11534;
var statearr_11564_11595 = state_11534__$1;
(statearr_11564_11595[(2)] = inst_11478);

(statearr_11564_11595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11535 === (14))){
var inst_11500 = (state_11534[(7)]);
var inst_11502 = cljs.core.chunked_seq_QMARK_.call(null,inst_11500);
var state_11534__$1 = state_11534;
if(inst_11502){
var statearr_11565_11596 = state_11534__$1;
(statearr_11565_11596[(1)] = (17));

} else {
var statearr_11566_11597 = state_11534__$1;
(statearr_11566_11597[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11535 === (16))){
var inst_11518 = (state_11534[(2)]);
var state_11534__$1 = state_11534;
var statearr_11567_11598 = state_11534__$1;
(statearr_11567_11598[(2)] = inst_11518);

(statearr_11567_11598[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11535 === (10))){
var inst_11487 = (state_11534[(11)]);
var inst_11489 = (state_11534[(12)]);
var inst_11494 = cljs.core._nth.call(null,inst_11487,inst_11489);
var state_11534__$1 = state_11534;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11534__$1,(13),out,inst_11494);
} else {
if((state_val_11535 === (18))){
var inst_11500 = (state_11534[(7)]);
var inst_11509 = cljs.core.first.call(null,inst_11500);
var state_11534__$1 = state_11534;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11534__$1,(20),out,inst_11509);
} else {
if((state_val_11535 === (8))){
var inst_11488 = (state_11534[(9)]);
var inst_11489 = (state_11534[(12)]);
var inst_11491 = (inst_11489 < inst_11488);
var inst_11492 = inst_11491;
var state_11534__$1 = state_11534;
if(cljs.core.truth_(inst_11492)){
var statearr_11568_11599 = state_11534__$1;
(statearr_11568_11599[(1)] = (10));

} else {
var statearr_11569_11600 = state_11534__$1;
(statearr_11569_11600[(1)] = (11));

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
});})(c__6888__auto__))
;
return ((function (switch__6826__auto__,c__6888__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__6827__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__6827__auto____0 = (function (){
var statearr_11573 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11573[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__6827__auto__);

(statearr_11573[(1)] = (1));

return statearr_11573;
});
var cljs$core$async$mapcat_STAR__$_state_machine__6827__auto____1 = (function (state_11534){
while(true){
var ret_value__6828__auto__ = (function (){try{while(true){
var result__6829__auto__ = switch__6826__auto__.call(null,state_11534);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6829__auto__;
}
break;
}
}catch (e11574){if((e11574 instanceof Object)){
var ex__6830__auto__ = e11574;
var statearr_11575_11601 = state_11534;
(statearr_11575_11601[(5)] = ex__6830__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11534);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11574;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11602 = state_11534;
state_11534 = G__11602;
continue;
} else {
return ret_value__6828__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__6827__auto__ = function(state_11534){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__6827__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__6827__auto____1.call(this,state_11534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__6827__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__6827__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__6827__auto__;
})()
;})(switch__6826__auto__,c__6888__auto__))
})();
var state__6890__auto__ = (function (){var statearr_11576 = f__6889__auto__.call(null);
(statearr_11576[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6888__auto__);

return statearr_11576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6890__auto__);
});})(c__6888__auto__))
);

return c__6888__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__11604 = arguments.length;
switch (G__11604) {
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
var G__11607 = arguments.length;
switch (G__11607) {
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
var G__11610 = arguments.length;
switch (G__11610) {
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
var c__6888__auto___11660 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6888__auto___11660,out){
return (function (){
var f__6889__auto__ = (function (){var switch__6826__auto__ = ((function (c__6888__auto___11660,out){
return (function (state_11634){
var state_val_11635 = (state_11634[(1)]);
if((state_val_11635 === (7))){
var inst_11629 = (state_11634[(2)]);
var state_11634__$1 = state_11634;
var statearr_11636_11661 = state_11634__$1;
(statearr_11636_11661[(2)] = inst_11629);

(statearr_11636_11661[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11635 === (1))){
var inst_11611 = null;
var state_11634__$1 = (function (){var statearr_11637 = state_11634;
(statearr_11637[(7)] = inst_11611);

return statearr_11637;
})();
var statearr_11638_11662 = state_11634__$1;
(statearr_11638_11662[(2)] = null);

(statearr_11638_11662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11635 === (4))){
var inst_11614 = (state_11634[(8)]);
var inst_11614__$1 = (state_11634[(2)]);
var inst_11615 = (inst_11614__$1 == null);
var inst_11616 = cljs.core.not.call(null,inst_11615);
var state_11634__$1 = (function (){var statearr_11639 = state_11634;
(statearr_11639[(8)] = inst_11614__$1);

return statearr_11639;
})();
if(inst_11616){
var statearr_11640_11663 = state_11634__$1;
(statearr_11640_11663[(1)] = (5));

} else {
var statearr_11641_11664 = state_11634__$1;
(statearr_11641_11664[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11635 === (6))){
var state_11634__$1 = state_11634;
var statearr_11642_11665 = state_11634__$1;
(statearr_11642_11665[(2)] = null);

(statearr_11642_11665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11635 === (3))){
var inst_11631 = (state_11634[(2)]);
var inst_11632 = cljs.core.async.close_BANG_.call(null,out);
var state_11634__$1 = (function (){var statearr_11643 = state_11634;
(statearr_11643[(9)] = inst_11631);

return statearr_11643;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11634__$1,inst_11632);
} else {
if((state_val_11635 === (2))){
var state_11634__$1 = state_11634;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11634__$1,(4),ch);
} else {
if((state_val_11635 === (11))){
var inst_11614 = (state_11634[(8)]);
var inst_11623 = (state_11634[(2)]);
var inst_11611 = inst_11614;
var state_11634__$1 = (function (){var statearr_11644 = state_11634;
(statearr_11644[(7)] = inst_11611);

(statearr_11644[(10)] = inst_11623);

return statearr_11644;
})();
var statearr_11645_11666 = state_11634__$1;
(statearr_11645_11666[(2)] = null);

(statearr_11645_11666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11635 === (9))){
var inst_11614 = (state_11634[(8)]);
var state_11634__$1 = state_11634;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11634__$1,(11),out,inst_11614);
} else {
if((state_val_11635 === (5))){
var inst_11611 = (state_11634[(7)]);
var inst_11614 = (state_11634[(8)]);
var inst_11618 = cljs.core._EQ_.call(null,inst_11614,inst_11611);
var state_11634__$1 = state_11634;
if(inst_11618){
var statearr_11647_11667 = state_11634__$1;
(statearr_11647_11667[(1)] = (8));

} else {
var statearr_11648_11668 = state_11634__$1;
(statearr_11648_11668[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11635 === (10))){
var inst_11626 = (state_11634[(2)]);
var state_11634__$1 = state_11634;
var statearr_11649_11669 = state_11634__$1;
(statearr_11649_11669[(2)] = inst_11626);

(statearr_11649_11669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11635 === (8))){
var inst_11611 = (state_11634[(7)]);
var tmp11646 = inst_11611;
var inst_11611__$1 = tmp11646;
var state_11634__$1 = (function (){var statearr_11650 = state_11634;
(statearr_11650[(7)] = inst_11611__$1);

return statearr_11650;
})();
var statearr_11651_11670 = state_11634__$1;
(statearr_11651_11670[(2)] = null);

(statearr_11651_11670[(1)] = (2));


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
});})(c__6888__auto___11660,out))
;
return ((function (switch__6826__auto__,c__6888__auto___11660,out){
return (function() {
var cljs$core$async$state_machine__6827__auto__ = null;
var cljs$core$async$state_machine__6827__auto____0 = (function (){
var statearr_11655 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11655[(0)] = cljs$core$async$state_machine__6827__auto__);

(statearr_11655[(1)] = (1));

return statearr_11655;
});
var cljs$core$async$state_machine__6827__auto____1 = (function (state_11634){
while(true){
var ret_value__6828__auto__ = (function (){try{while(true){
var result__6829__auto__ = switch__6826__auto__.call(null,state_11634);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6829__auto__;
}
break;
}
}catch (e11656){if((e11656 instanceof Object)){
var ex__6830__auto__ = e11656;
var statearr_11657_11671 = state_11634;
(statearr_11657_11671[(5)] = ex__6830__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11656;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11672 = state_11634;
state_11634 = G__11672;
continue;
} else {
return ret_value__6828__auto__;
}
break;
}
});
cljs$core$async$state_machine__6827__auto__ = function(state_11634){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6827__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6827__auto____1.call(this,state_11634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6827__auto____0;
cljs$core$async$state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6827__auto____1;
return cljs$core$async$state_machine__6827__auto__;
})()
;})(switch__6826__auto__,c__6888__auto___11660,out))
})();
var state__6890__auto__ = (function (){var statearr_11658 = f__6889__auto__.call(null);
(statearr_11658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6888__auto___11660);

return statearr_11658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6890__auto__);
});})(c__6888__auto___11660,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__11674 = arguments.length;
switch (G__11674) {
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
var c__6888__auto___11743 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6888__auto___11743,out){
return (function (){
var f__6889__auto__ = (function (){var switch__6826__auto__ = ((function (c__6888__auto___11743,out){
return (function (state_11712){
var state_val_11713 = (state_11712[(1)]);
if((state_val_11713 === (7))){
var inst_11708 = (state_11712[(2)]);
var state_11712__$1 = state_11712;
var statearr_11714_11744 = state_11712__$1;
(statearr_11714_11744[(2)] = inst_11708);

(statearr_11714_11744[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11713 === (1))){
var inst_11675 = (new Array(n));
var inst_11676 = inst_11675;
var inst_11677 = (0);
var state_11712__$1 = (function (){var statearr_11715 = state_11712;
(statearr_11715[(7)] = inst_11676);

(statearr_11715[(8)] = inst_11677);

return statearr_11715;
})();
var statearr_11716_11745 = state_11712__$1;
(statearr_11716_11745[(2)] = null);

(statearr_11716_11745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11713 === (4))){
var inst_11680 = (state_11712[(9)]);
var inst_11680__$1 = (state_11712[(2)]);
var inst_11681 = (inst_11680__$1 == null);
var inst_11682 = cljs.core.not.call(null,inst_11681);
var state_11712__$1 = (function (){var statearr_11717 = state_11712;
(statearr_11717[(9)] = inst_11680__$1);

return statearr_11717;
})();
if(inst_11682){
var statearr_11718_11746 = state_11712__$1;
(statearr_11718_11746[(1)] = (5));

} else {
var statearr_11719_11747 = state_11712__$1;
(statearr_11719_11747[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11713 === (15))){
var inst_11702 = (state_11712[(2)]);
var state_11712__$1 = state_11712;
var statearr_11720_11748 = state_11712__$1;
(statearr_11720_11748[(2)] = inst_11702);

(statearr_11720_11748[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11713 === (13))){
var state_11712__$1 = state_11712;
var statearr_11721_11749 = state_11712__$1;
(statearr_11721_11749[(2)] = null);

(statearr_11721_11749[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11713 === (6))){
var inst_11677 = (state_11712[(8)]);
var inst_11698 = (inst_11677 > (0));
var state_11712__$1 = state_11712;
if(cljs.core.truth_(inst_11698)){
var statearr_11722_11750 = state_11712__$1;
(statearr_11722_11750[(1)] = (12));

} else {
var statearr_11723_11751 = state_11712__$1;
(statearr_11723_11751[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11713 === (3))){
var inst_11710 = (state_11712[(2)]);
var state_11712__$1 = state_11712;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11712__$1,inst_11710);
} else {
if((state_val_11713 === (12))){
var inst_11676 = (state_11712[(7)]);
var inst_11700 = cljs.core.vec.call(null,inst_11676);
var state_11712__$1 = state_11712;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11712__$1,(15),out,inst_11700);
} else {
if((state_val_11713 === (2))){
var state_11712__$1 = state_11712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11712__$1,(4),ch);
} else {
if((state_val_11713 === (11))){
var inst_11692 = (state_11712[(2)]);
var inst_11693 = (new Array(n));
var inst_11676 = inst_11693;
var inst_11677 = (0);
var state_11712__$1 = (function (){var statearr_11724 = state_11712;
(statearr_11724[(10)] = inst_11692);

(statearr_11724[(7)] = inst_11676);

(statearr_11724[(8)] = inst_11677);

return statearr_11724;
})();
var statearr_11725_11752 = state_11712__$1;
(statearr_11725_11752[(2)] = null);

(statearr_11725_11752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11713 === (9))){
var inst_11676 = (state_11712[(7)]);
var inst_11690 = cljs.core.vec.call(null,inst_11676);
var state_11712__$1 = state_11712;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11712__$1,(11),out,inst_11690);
} else {
if((state_val_11713 === (5))){
var inst_11680 = (state_11712[(9)]);
var inst_11676 = (state_11712[(7)]);
var inst_11677 = (state_11712[(8)]);
var inst_11685 = (state_11712[(11)]);
var inst_11684 = (inst_11676[inst_11677] = inst_11680);
var inst_11685__$1 = (inst_11677 + (1));
var inst_11686 = (inst_11685__$1 < n);
var state_11712__$1 = (function (){var statearr_11726 = state_11712;
(statearr_11726[(12)] = inst_11684);

(statearr_11726[(11)] = inst_11685__$1);

return statearr_11726;
})();
if(cljs.core.truth_(inst_11686)){
var statearr_11727_11753 = state_11712__$1;
(statearr_11727_11753[(1)] = (8));

} else {
var statearr_11728_11754 = state_11712__$1;
(statearr_11728_11754[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11713 === (14))){
var inst_11705 = (state_11712[(2)]);
var inst_11706 = cljs.core.async.close_BANG_.call(null,out);
var state_11712__$1 = (function (){var statearr_11730 = state_11712;
(statearr_11730[(13)] = inst_11705);

return statearr_11730;
})();
var statearr_11731_11755 = state_11712__$1;
(statearr_11731_11755[(2)] = inst_11706);

(statearr_11731_11755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11713 === (10))){
var inst_11696 = (state_11712[(2)]);
var state_11712__$1 = state_11712;
var statearr_11732_11756 = state_11712__$1;
(statearr_11732_11756[(2)] = inst_11696);

(statearr_11732_11756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11713 === (8))){
var inst_11676 = (state_11712[(7)]);
var inst_11685 = (state_11712[(11)]);
var tmp11729 = inst_11676;
var inst_11676__$1 = tmp11729;
var inst_11677 = inst_11685;
var state_11712__$1 = (function (){var statearr_11733 = state_11712;
(statearr_11733[(7)] = inst_11676__$1);

(statearr_11733[(8)] = inst_11677);

return statearr_11733;
})();
var statearr_11734_11757 = state_11712__$1;
(statearr_11734_11757[(2)] = null);

(statearr_11734_11757[(1)] = (2));


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
});})(c__6888__auto___11743,out))
;
return ((function (switch__6826__auto__,c__6888__auto___11743,out){
return (function() {
var cljs$core$async$state_machine__6827__auto__ = null;
var cljs$core$async$state_machine__6827__auto____0 = (function (){
var statearr_11738 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11738[(0)] = cljs$core$async$state_machine__6827__auto__);

(statearr_11738[(1)] = (1));

return statearr_11738;
});
var cljs$core$async$state_machine__6827__auto____1 = (function (state_11712){
while(true){
var ret_value__6828__auto__ = (function (){try{while(true){
var result__6829__auto__ = switch__6826__auto__.call(null,state_11712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6829__auto__;
}
break;
}
}catch (e11739){if((e11739 instanceof Object)){
var ex__6830__auto__ = e11739;
var statearr_11740_11758 = state_11712;
(statearr_11740_11758[(5)] = ex__6830__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11739;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11759 = state_11712;
state_11712 = G__11759;
continue;
} else {
return ret_value__6828__auto__;
}
break;
}
});
cljs$core$async$state_machine__6827__auto__ = function(state_11712){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6827__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6827__auto____1.call(this,state_11712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6827__auto____0;
cljs$core$async$state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6827__auto____1;
return cljs$core$async$state_machine__6827__auto__;
})()
;})(switch__6826__auto__,c__6888__auto___11743,out))
})();
var state__6890__auto__ = (function (){var statearr_11741 = f__6889__auto__.call(null);
(statearr_11741[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6888__auto___11743);

return statearr_11741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6890__auto__);
});})(c__6888__auto___11743,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__11761 = arguments.length;
switch (G__11761) {
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
var c__6888__auto___11834 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6888__auto___11834,out){
return (function (){
var f__6889__auto__ = (function (){var switch__6826__auto__ = ((function (c__6888__auto___11834,out){
return (function (state_11803){
var state_val_11804 = (state_11803[(1)]);
if((state_val_11804 === (7))){
var inst_11799 = (state_11803[(2)]);
var state_11803__$1 = state_11803;
var statearr_11805_11835 = state_11803__$1;
(statearr_11805_11835[(2)] = inst_11799);

(statearr_11805_11835[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11804 === (1))){
var inst_11762 = [];
var inst_11763 = inst_11762;
var inst_11764 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_11803__$1 = (function (){var statearr_11806 = state_11803;
(statearr_11806[(7)] = inst_11763);

(statearr_11806[(8)] = inst_11764);

return statearr_11806;
})();
var statearr_11807_11836 = state_11803__$1;
(statearr_11807_11836[(2)] = null);

(statearr_11807_11836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11804 === (4))){
var inst_11767 = (state_11803[(9)]);
var inst_11767__$1 = (state_11803[(2)]);
var inst_11768 = (inst_11767__$1 == null);
var inst_11769 = cljs.core.not.call(null,inst_11768);
var state_11803__$1 = (function (){var statearr_11808 = state_11803;
(statearr_11808[(9)] = inst_11767__$1);

return statearr_11808;
})();
if(inst_11769){
var statearr_11809_11837 = state_11803__$1;
(statearr_11809_11837[(1)] = (5));

} else {
var statearr_11810_11838 = state_11803__$1;
(statearr_11810_11838[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11804 === (15))){
var inst_11793 = (state_11803[(2)]);
var state_11803__$1 = state_11803;
var statearr_11811_11839 = state_11803__$1;
(statearr_11811_11839[(2)] = inst_11793);

(statearr_11811_11839[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11804 === (13))){
var state_11803__$1 = state_11803;
var statearr_11812_11840 = state_11803__$1;
(statearr_11812_11840[(2)] = null);

(statearr_11812_11840[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11804 === (6))){
var inst_11763 = (state_11803[(7)]);
var inst_11788 = inst_11763.length;
var inst_11789 = (inst_11788 > (0));
var state_11803__$1 = state_11803;
if(cljs.core.truth_(inst_11789)){
var statearr_11813_11841 = state_11803__$1;
(statearr_11813_11841[(1)] = (12));

} else {
var statearr_11814_11842 = state_11803__$1;
(statearr_11814_11842[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11804 === (3))){
var inst_11801 = (state_11803[(2)]);
var state_11803__$1 = state_11803;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11803__$1,inst_11801);
} else {
if((state_val_11804 === (12))){
var inst_11763 = (state_11803[(7)]);
var inst_11791 = cljs.core.vec.call(null,inst_11763);
var state_11803__$1 = state_11803;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11803__$1,(15),out,inst_11791);
} else {
if((state_val_11804 === (2))){
var state_11803__$1 = state_11803;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11803__$1,(4),ch);
} else {
if((state_val_11804 === (11))){
var inst_11771 = (state_11803[(10)]);
var inst_11767 = (state_11803[(9)]);
var inst_11781 = (state_11803[(2)]);
var inst_11782 = [];
var inst_11783 = inst_11782.push(inst_11767);
var inst_11763 = inst_11782;
var inst_11764 = inst_11771;
var state_11803__$1 = (function (){var statearr_11815 = state_11803;
(statearr_11815[(7)] = inst_11763);

(statearr_11815[(11)] = inst_11783);

(statearr_11815[(12)] = inst_11781);

(statearr_11815[(8)] = inst_11764);

return statearr_11815;
})();
var statearr_11816_11843 = state_11803__$1;
(statearr_11816_11843[(2)] = null);

(statearr_11816_11843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11804 === (9))){
var inst_11763 = (state_11803[(7)]);
var inst_11779 = cljs.core.vec.call(null,inst_11763);
var state_11803__$1 = state_11803;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11803__$1,(11),out,inst_11779);
} else {
if((state_val_11804 === (5))){
var inst_11764 = (state_11803[(8)]);
var inst_11771 = (state_11803[(10)]);
var inst_11767 = (state_11803[(9)]);
var inst_11771__$1 = f.call(null,inst_11767);
var inst_11772 = cljs.core._EQ_.call(null,inst_11771__$1,inst_11764);
var inst_11773 = cljs.core.keyword_identical_QMARK_.call(null,inst_11764,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_11774 = (inst_11772) || (inst_11773);
var state_11803__$1 = (function (){var statearr_11817 = state_11803;
(statearr_11817[(10)] = inst_11771__$1);

return statearr_11817;
})();
if(cljs.core.truth_(inst_11774)){
var statearr_11818_11844 = state_11803__$1;
(statearr_11818_11844[(1)] = (8));

} else {
var statearr_11819_11845 = state_11803__$1;
(statearr_11819_11845[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11804 === (14))){
var inst_11796 = (state_11803[(2)]);
var inst_11797 = cljs.core.async.close_BANG_.call(null,out);
var state_11803__$1 = (function (){var statearr_11821 = state_11803;
(statearr_11821[(13)] = inst_11796);

return statearr_11821;
})();
var statearr_11822_11846 = state_11803__$1;
(statearr_11822_11846[(2)] = inst_11797);

(statearr_11822_11846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11804 === (10))){
var inst_11786 = (state_11803[(2)]);
var state_11803__$1 = state_11803;
var statearr_11823_11847 = state_11803__$1;
(statearr_11823_11847[(2)] = inst_11786);

(statearr_11823_11847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11804 === (8))){
var inst_11763 = (state_11803[(7)]);
var inst_11771 = (state_11803[(10)]);
var inst_11767 = (state_11803[(9)]);
var inst_11776 = inst_11763.push(inst_11767);
var tmp11820 = inst_11763;
var inst_11763__$1 = tmp11820;
var inst_11764 = inst_11771;
var state_11803__$1 = (function (){var statearr_11824 = state_11803;
(statearr_11824[(14)] = inst_11776);

(statearr_11824[(7)] = inst_11763__$1);

(statearr_11824[(8)] = inst_11764);

return statearr_11824;
})();
var statearr_11825_11848 = state_11803__$1;
(statearr_11825_11848[(2)] = null);

(statearr_11825_11848[(1)] = (2));


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
});})(c__6888__auto___11834,out))
;
return ((function (switch__6826__auto__,c__6888__auto___11834,out){
return (function() {
var cljs$core$async$state_machine__6827__auto__ = null;
var cljs$core$async$state_machine__6827__auto____0 = (function (){
var statearr_11829 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11829[(0)] = cljs$core$async$state_machine__6827__auto__);

(statearr_11829[(1)] = (1));

return statearr_11829;
});
var cljs$core$async$state_machine__6827__auto____1 = (function (state_11803){
while(true){
var ret_value__6828__auto__ = (function (){try{while(true){
var result__6829__auto__ = switch__6826__auto__.call(null,state_11803);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6829__auto__;
}
break;
}
}catch (e11830){if((e11830 instanceof Object)){
var ex__6830__auto__ = e11830;
var statearr_11831_11849 = state_11803;
(statearr_11831_11849[(5)] = ex__6830__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11850 = state_11803;
state_11803 = G__11850;
continue;
} else {
return ret_value__6828__auto__;
}
break;
}
});
cljs$core$async$state_machine__6827__auto__ = function(state_11803){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6827__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6827__auto____1.call(this,state_11803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6827__auto____0;
cljs$core$async$state_machine__6827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6827__auto____1;
return cljs$core$async$state_machine__6827__auto__;
})()
;})(switch__6826__auto__,c__6888__auto___11834,out))
})();
var state__6890__auto__ = (function (){var statearr_11832 = f__6889__auto__.call(null);
(statearr_11832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6888__auto___11834);

return statearr_11832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6890__auto__);
});})(c__6888__auto___11834,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map