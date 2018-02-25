(defproject hello-world "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :exclusions [cljsjs/react cljsjs/react-dom cljsjs/react-dom-server]

  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.9.946"]
                 [reagent "0.8.0-alpha2"]
                 [figwheel "0.5.14"]

                 [cljsjs/react "15.6.2-2"]
                 [cljsjs/react-dom "15.6.2-2"]
                 [cljsjs/react-dom-server "15.6.2-2"]
                 [cljsjs/create-react-class "15.6.2-0"]

                 [cljs-react-material-ui "0.2.50"]]

  :plugins [[lein-figwheel "0.5.14"]]

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
