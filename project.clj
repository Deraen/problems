(defproject hello-world "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :exclusions [cljsjs/react cljsjs/react-dom cljsjs/react-dom-server]

  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.293"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [reagent "0.6.1-SNAPSHOT"]
                 [figwheel "0.3.3"]

                 [cljsjs/preact "7.1.0-0"]
                 [cljsjs/preact-compat "3.9.4-0"]
                 ]

  :plugins [[lein-figwheel "0.5.8"]
            [lein-cljsbuild "1.1.5"]]

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
                                  :compiler {:optimizations :advanced
                                             :main "hello-world.core"
                                             :asset-path "/problems/reagent-preact/out"
                                             :output-to "gh-pages/reagent-preact/main.js"
                                             :output-dir "gh-pages/reagent-preact/out"}}}})
