# hello-world

```bash
lein trampoline run -m clojure.main -i build.clj -r
```

## Problem

- *Shim*, requires *core* ns. In folder `src2`.
- *core*, does `run-tests`. In folder `src`.
- *test*, has `deftests`. In folder `src`.

When *test* ns is changed, new tests are not picked up.

If *shim* ns is in `src` folder, problem doesn't exist.

## Log

```
❯ rm -r out

~/tmp/problems cljs-changes-problem*
❯ lein trampoline run -m clojure.main -i build.clj -r
Clojure 1.7.0
user=> (comment "test-b commented out")
user=> (b)
Reading analysis cache for jar:file:/home/juho/.m2/repository/org/clojure/clojurescript/1.7.48/clojurescript-1.7.48.jar!/cljs/core.cljs
Compiling src2/hello_world/shim.cljs
Analyzing file:/home/juho/tmp/problems/src/hello_world/core.cljs
Analyzing jar:file:/home/juho/.m2/repository/org/clojure/clojurescript/1.7.48/clojurescript-1.7.48.jar!/cljs/test.cljs
Analyzing jar:file:/home/juho/.m2/repository/org/clojure/clojurescript/1.7.48/clojurescript-1.7.48.jar!/cljs/pprint.cljs
Analyzing jar:file:/home/juho/.m2/repository/org/clojure/clojurescript/1.7.48/clojurescript-1.7.48.jar!/clojure/string.cljs
Analyzing file:/home/juho/tmp/problems/src/hello_world/test.cljs
Compiling /home/juho/tmp/problems/src/hello_world/core.cljs
Compiling /home/juho/tmp/problems/src/hello_world/test.cljs
Compiling out/cljs/test.cljs
Compiling out/clojure/string.cljs
Compiling out/cljs/pprint.cljs
Compiling out/cljs/core.cljs
Using cached cljs.core out/cljs/core.cljs
nil
user=> (comment "Ran 1 tests containing 1 assertions.")
user=> (comment "Uncommented test-b")
user=> (b)
Reading analysis cache for jar:file:/home/juho/.m2/repository/org/clojure/clojurescript/1.7.48/clojurescript-1.7.48.jar!/cljs/core.cljs
Compiling /home/juho/tmp/problems/src/hello_world/test.cljs
Reading analysis cache for jar:file:/home/juho/.m2/repository/org/clojure/clojurescript/1.7.48/clojurescript-1.7.48.jar!/clojure/string.cljs
Reading analysis cache for jar:file:/home/juho/.m2/repository/org/clojure/clojurescript/1.7.48/clojurescript-1.7.48.jar!/cljs/pprint.cljs
Reading analysis cache for jar:file:/home/juho/.m2/repository/org/clojure/clojurescript/1.7.48/clojurescript-1.7.48.jar!/cljs/test.cljs
nil
user=> (comment "Ran 1 tests containing 1 assertions.")
user=> (comment "Saved core.cljs")
user=> (b)
Reading analysis cache for jar:file:/home/juho/.m2/repository/org/clojure/clojurescript/1.7.48/clojurescript-1.7.48.jar!/cljs/core.cljs
Compiling /home/juho/tmp/problems/src/hello_world/core.cljs
Reading analysis cache for jar:file:/home/juho/.m2/repository/org/clojure/clojurescript/1.7.48/clojurescript-1.7.48.jar!/clojure/string.cljs
Reading analysis cache for jar:file:/home/juho/.m2/repository/org/clojure/clojurescript/1.7.48/clojurescript-1.7.48.jar!/cljs/pprint.cljs
Reading analysis cache for jar:file:/home/juho/.m2/repository/org/clojure/clojurescript/1.7.48/clojurescript-1.7.48.jar!/cljs/test.cljs
Reading analysis cache for file:/home/juho/tmp/problems/src/hello_world/test.cljs
nil
user=> (comment "Ran 2 tests containing 2 assertions.")
```
