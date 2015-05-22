if(typeof goog == "undefined") document.write('<script src="/goog/base.js"></script>');
document.write('<script src="/cljs_deps.js"></script>');
document.write('<script>if (typeof goog != "undefined") { goog.require("hello_world.core"); } else { console.warn("ClojureScript could not load :main, did you forget to specify :asset-path?"); };</script>');

document.write("<script>if (typeof goog != \"undefined\") { goog.require(\"figwheel.connect\"); }</script>");