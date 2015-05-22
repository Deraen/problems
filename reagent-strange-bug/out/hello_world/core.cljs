(ns hello-world.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [reagent.core :as reagent]
            [reagent.ratom :refer [atom] :refer-macros [reaction]]
            [cljs.core.async :refer [timeout chan <! put!]]))

(enable-console-print!)

(defonce state (atom {:foo {:value "", :active? false}}))

(defn main []
  (let [data (reagent/cursor state [:foo])]
    (fn []
      [:div
       ; Accesses state through cursor
       [:input
        {:value (-> @data :value)
         :on-change #(swap! data assoc :value (.. % -target -value))
         :on-blur #(swap! data assoc :not-pristine true) ; Broken
         ; :on-blur #(swap! data assoc :not-pristine {}) ; Broken
         ; :on-blur #(swap! data assoc :not-pristine {:a true}) ; Works
         }]
       ; Accesses state directly
       [:button
        {:type "button"
         :on-click #(swap! state update-in [:foo :active?] not)}
        "Click"]
       (if (:active? @data)
         "Active")])))

(defn ^:export start []
  (reagent/render-component [main] (js/document.getElementById "app")))

(start)
