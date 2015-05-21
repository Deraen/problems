(ns hello-world.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [reagent.core :as reagent]
            [reagent.ratom :refer [atom] :refer-macros [reaction]]
            [cljs.core.async :refer [timeout chan <! put!]]))

(enable-console-print!)

(defonce state (atom {:foo {:value "", :active? false}}))

(defn click []
  (go
    (swap! state assoc-in [:foo :active?] true)
    (<! (timeout 250))
    (swap! state assoc-in [:foo :active?] false)))

(def actions (chan))

(go
  (loop []
    (when (<! actions)
      (js/console.log "event")
      (click)
      (recur))))

(defn main []
  (let [data (reagent/cursor state [:foo])]
    (fn []
      [:div
       [:input
        {:value (-> @data :value)
         :on-change #(swap! data assoc-in [:value] (.. % -target -value))
         :on-blur #(swap! data assoc-in [:not-pristine] true)
         }]
       [:button
        {:type "button"
         :on-click #(do (put! actions true) nil)}
        "Click"]
       (if (:active? @data)
         "Active")])))

(defn ^:export start []
  (reagent/render-component [main] (js/document.getElementById "app")))

(start)
