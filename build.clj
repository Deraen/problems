(require 'cljs.closure '[cljs.env :as env] '[cljs.analyzer.api :as ana-api])

(def opts {:main "hello-world.core"
           :output-to "out/hello_world.min.js"
           :output-dir "out"
           :optimizations :none})

(def env (env/default-compiler-env opts))

(binding [env/*compiler* env]
  (cljs.closure/build "src" opts)
  (println "all ns:" (ana-api/all-ns)))

(shutdown-agents)
