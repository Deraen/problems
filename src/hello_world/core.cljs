(ns hello-world.core
  (:require [reagent.core :as reagent]))

(enable-console-print!)

(defn throw-something []
  (throw (js/Error. "foobar")))

(defn ^:export catch-and-rethrow []
  (try
    (throw-something)
    (catch js/Error e
      (println "catch" e)
      (throw e))))

(defn error []
  [:p (aget nil "foo")])

(defn ^:export start []
  (reagent/render-component [error] (js/document.getElementById "app")))
