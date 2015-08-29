(require '[cljs.build.api :refer [build inputs]])

(def o {:main "hello-world.core"
        :output-to "out/main.js"
        :output-dir "out"
        :optimizations :none
        :verbose true})

(defn broken []
  (build "src2" o))

(defn working []
  (build (inputs "src" "src2") o))
