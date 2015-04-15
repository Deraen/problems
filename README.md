# hello-world

```bash
lein trampoline run -m clojure.main build.clj
```

## Log

```
~/tmp/problems all-ns*
❯ lein trampoline run -m clojure.main build.clj
all ns: (hello-world.core cljs.core)

~/tmp/problems all-ns*
❯ lein trampoline run -m clojure.main build.clj
all ns: nil

~/tmp/problems all-ns*
❯ rm -r out

~/tmp/problems all-ns*
❯ lein trampoline run -m clojure.main build.clj
all ns: (hello-world.core cljs.core)
```
