(ns hello-world.core
  (:require [reagent.core :as r]
            [cljs-react-material-ui.core :as ui]
            [cljs-react-material-ui.icons :as ic]
            ;; wtf
            cljsjs.material-ui
            [cljs-react-material-ui.reagent :as rui]))

(defonce text-state (r/atom "foobar"))

(def text-field (r/adapt-react-class (.-TextField js/MaterialUI)
                                     {:synthetic-input {:on-update (fn [input-node-set-value node children rendered-value dom-value this]
                                                                     (let [input-node (aget (.getElementsByTagName node "input") 0)]
                                                                       (input-node-set-value input-node rendered-value dom-value this
                                                                                             {:on-write (fn [value]
                                                                                                          (.setState children #js {:hasValue (boolean (and (string? value) (seq value)))
                                                                                                                                   :isClean false}))})))
                                                        :on-change (fn [on-change e]
                                                                     (on-change e (.. e -target -value)))}}))

(defn main []
  [rui/mui-theme-provider
   {:mui-theme (ui/get-mui-theme
                 {:palette {:text-color (ui/color :green600)}})}
   [:div
    [:div
     [:strong @text-state]]
    [:button
     {:on-click #(swap! text-state str " foo")}
     "update value property"]
    [:button
     {:on-click #(reset! text-state "")}
     "reset"]
    [text-field
     {:id "example"
      :value @text-state
      :floating-label-text "foo"
      :hint-text "hint"
      ; :ref #(js/console.log "text-field" %)
      :on-change (fn [e]
                   (js/console.log e)
                   (reset! text-state (.. e -target -value)))}]]])

(defn start []
  (r/render [main] (js/document.getElementById "app")))

(start)
