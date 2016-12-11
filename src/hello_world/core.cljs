(ns hello-world.core
  (:require [reagent.core :as reagent]))

(defonce state (reagent/atom 13))

(defn main []
  [:div
   [:p "Number: " @state]
   [:button
    {:type "button"
     :on-click #(swap! state inc)}
    "inc"]])

(defn start []
  (reagent/render [main] (js/document.getElementById "app")))

(start)
