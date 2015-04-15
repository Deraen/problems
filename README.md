# hello-world

```
$ lein clean
$ lein figwheel
# If I save the foobar.cljs file now, Figwheel reports correctly in browser
# console that both core.js and foobar.js were reloaded
# ...
# Exit figwheel

$ lein figwheel
# If I now save the foobar.cljs, core.js is not reloaded
# After I save the core.cljs once, subsequent foobar.cljs changes will
# trigger core.js reload
```
