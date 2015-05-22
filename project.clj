(defproject hello-world "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.7.0-beta2"]
                 [org.clojure/clojurescript "0.0-3269"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [reagent "0.5.0"]
                 [figwheel "0.3.3"]]

  :plugins [[lein-figwheel "0.3.3"]
            [lein-cljsbuild "1.0.6"]]

  :source-paths ["src" "target/classes"]

  :figwheel {:repl false
             :http-server-root "public"
             :server-port 3451}

  :resource-paths ["out" "resources"]

  :cljsbuild {:builds {:dev {:figwheel true
                             :source-paths ["src"]
                             :compiler {:main "hello-world.core"
                                        :output-to "out/public/main.js"
                                        :asset-path ""
                                        :output-dir "out/public"}}
                       :gh-pages {:source-paths ["src"]
                                  :compiler {:main "hello-world.core"
                                             :asset-path "/problems/reagent-strange-bug/out"
                                             :output-to "gh-pages/reagent-strange-bug/main.js"
                                             :output-dir "gh-pages/reagent-strange-bug/out"}}}}

  :clean-targets ["out" "out-adv"])
