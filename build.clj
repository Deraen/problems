(require '[cljs.build.api :refer [build]])

(def o {:main "hello-world.shim"
        :output-to "out/main.js"
        :output-dir "out"
        :optimizations :none
        :verbose true})

(defn b []
  (build "src2" o))

(defn c []
  (build "src" (assoc o :main "hello-world.shim-b")))
