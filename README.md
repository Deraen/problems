# hello-world

```bash
wget https://github.com/clojure/clojurescript/releases/download/r1.7.48/cljs.jar
java -cp cljs.jar:src:src2 clojure.main -i build.clj -r
```

Problem:

Cljs.test uses `cljs.analyzer.api/ns-interns` to find the vars in a namespace.
When the test namespace is changed, new tests are not picked up if test
namespace is not inside a dir passed to `build`.

- Broken: Only the directory with main namespace is passed to build
- Working: Both directories are passed to build

```
$ rm -r out
$ java -cp cljs.jar:src:src2 clojure.main -i build.clj -r
Clojure 1.7.0
user=> (broken)
Reading analysis cache for jar:file:/home/juho/tmp/problems/cljs.jar!/cljs/core.cljs
Compiling src2/hello_world/shim.cljs
Analyzing file:/home/juho/tmp/problems/src/hello_world/core.cljs
Analyzing file:/home/juho/tmp/problems/src/hello_world/test.cljs
Compiling /home/juho/tmp/problems/src/hello_world/core.cljs
Compiling /home/juho/tmp/problems/src/hello_world/test.cljs
Compiling out/cljs/core.cljs
Using cached cljs.core out/cljs/core.cljs
nil
user=> (comment "[foobar] printed on browser" "uncommented b on test ns")
user=> (broken)
Reading analysis cache for jar:file:/home/juho/tmp/problems/cljs.jar!/cljs/core.cljs
Compiling /home/juho/tmp/problems/src/hello_world/test.cljs
nil
user=> (comment "only [foobar] printed on browser)")

$ rm -r out
$ java -cp cljs.jar:src:src2 clojure.main -i build.clj -r
Clojure 1.7.0
user=> (working)
Reading analysis cache for jar:file:/home/juho/tmp/problems/cljs.jar!/cljs/core.cljs
Compiling src/hello_world/test.cljs
Compiling src/hello_world/core.cljs
Compiling src2/hello_world/shim.cljs
Reading analysis cache for file:/home/juho/tmp/problems/src/hello_world/core.cljs
Compiling out/cljs/core.cljs
Using cached cljs.core out/cljs/core.cljs
nil
user=> (comment "[foobar] printed on browser "uncommented b on test ns")
user=> (working)
Reading analysis cache for jar:file:/home/juho/tmp/problems/cljs.jar!/cljs/core.cljs
Compiling src/hello_world/test.cljs
Compiling src/hello_world/core.cljs
nil
user=> (comment "[foobar zzzz] printed on browser")
```

