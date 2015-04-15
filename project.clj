(defproject hello-world "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-3126"]
                 [figwheel "0.2.6"]]

  :source-paths ["src" "target/classes"]
  :resource-paths ["resources" "target/js"]

  :plugins [[lein-figwheel "0.2.6"]
            [lein-cljsbuild "1.0.5"]]

  :cljsbuild {:builds {:dev {:source-paths ["src"]
                             :compiler {:main "hello-world.figwheel"
                                        :output-to "target/js/public/hello_world.js"
                                        :output-dir "target/js/public"
                                        :asset-path ""
                                        :optimizations :none}}}}

  :figwheel {:repl false})
