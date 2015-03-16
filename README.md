# hello-world

```bash
lein trampoline run -m clojure.main build.clj
```

## Log

```
❯ lein trampoline run -m clojure.main cljsbuild.clj
Mar 16, 2015 7:07:57 PM com.google.javascript.jscomp.LoggerErrorManager println
SEVERE: /home/juho/tmp/hello-world/out-adv/om/core.js:7: ERROR - required "cljsjs.react" namespace never provided
goog.require('cljsjs.react');
^

Mar 16, 2015 7:07:57 PM com.google.javascript.jscomp.LoggerErrorManager println
SEVERE: /home/juho/tmp/hello-world/out-adv/om/dom.js:5: ERROR - required "cljsjs.react" namespace never provided
goog.require('cljsjs.react');
^

Mar 16, 2015 7:07:57 PM com.google.javascript.jscomp.LoggerErrorManager printSummary
WARNING: 2 error(s), 0 warning(s)
ERROR: JSC_MISSING_PROVIDE_ERROR. required "cljsjs.react" namespace never provided at /home/juho/tmp/hello-world/out-adv/om/core.js line 7 : 0
ERROR: JSC_MISSING_PROVIDE_ERROR. required "cljsjs.react" namespace never provided at /home/juho/tmp/hello-world/out-adv/om/dom.js line 5 : 0
```
