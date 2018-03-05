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
                                                                     ;; node is the element rendered by TextField, i.e. div.
                                                                     ;; If hintText is enabled, we need to control it's visibility
                                                                     ;; when the value is changed by updating :value prop (not by user interaction).
                                                                     (if (.-hintText (nth (.. this -props -argv) 5))
                                                                       (let [hint-node (aget (.getElementsByTagName node "div") 0)]
                                                                         (set! (.. hint-node -style -opacity)
                                                                               (if (and (string? rendered-value) (seq rendered-value)) 0 1))))
                                                                     ;; FIXME: floatingLabelText is broken
                                                                     ;; Update input dom node value
                                                                     (let [node (aget (.getElementsByTagName node "input") 0)]
                                                                       (input-node-set-value node rendered-value dom-value this {})))
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
    [text-field
     {:id "example"
      :value @text-state
      ;; FIXME:
      ; :floating-label-text "foo"
      :hint-text "hint"
      :on-change (fn [e]
                   (js/console.log e)
                   (reset! text-state (.. e -target -value)))}]]])

(defn start []
  (r/render [main] (js/document.getElementById "app")))

(start)
