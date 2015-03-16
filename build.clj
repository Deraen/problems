(require 'cljs.closure)

(cljs.closure/build
  "src"
  {:main "hello-world.core"
   :output-to "out-adv/hello_world.min.js"
   :output-dir "out-adv"
   :optimizations :advanced
   :pretty-print false})
