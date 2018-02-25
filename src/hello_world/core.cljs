(ns hello-world.core
  (:require [reagent.core :as r]
            [cljs-react-material-ui.core :as ui]
            [cljs-react-material-ui.icons :as ic]
            ;; wtf
            cljsjs.material-ui
            [cljs-react-material-ui.reagent :as rui]))

(defonce text-state (r/atom "foobar"))

(def text-field (r/adapt-react-class (.-TextField js/MaterialUI)
                                     {:synthetic-input {:on-update (fn [input-node-set-value node rendered-value dom-value this]
                                                                     (input-node-set-value node rendered-value dom-value this {}))
                                                        :on-change (fn [on-change e]
                                                                     (on-change e))}}))

(defn main []
  [rui/mui-theme-provider
   {:mui-theme (ui/get-mui-theme
                 {:palette {:text-color (ui/color :green600)}})}
   [:div
    [:div
     [:strong @text-state]]
    [text-field
     {:id "example"
      :value @text-state
      :on-change (fn [e]
                   (js/console.log e)
                   (reset! text-state (.. e -target -value)))}]]])

(defn start []
  (r/render [main] (js/document.getElementById "app")))

(start)
