(defproject hello-world "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.89"]
                 [org.clojure/core.async "0.2.385"]]

  :source-paths ["src"]

  :profiles {:latest {:dependencies [[org.clojure/clojurescript "1.9.146"]]}})
