(require 'cljs.closure)

(cljs.closure/build
  "src"
  {:main "hello-world.core"
   :output-to "out/main.js"
   :output-dir "out"
   :optimizations :none
   :pretty-print false})

(shutdown-agents)
