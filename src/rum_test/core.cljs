(ns rum-test.core
    (:require cljsjs.react-transition-group
              [rum.core :as rum]
              [sablono.core :as s]))

(enable-console-print!)

(println "This text is printed from src/rum-test/core.cljs. Go ahead and edit it and see reloading in action.")

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:active true}))


(rum/defc hello-world < rum/reactive []
  [:div
   [:button
    {:on-click #(swap! app-state update :active not)}
    "Click this"]
   (js/React.createElement js/ReactTransitionGroup.CSSTransition
     #js {:classNames "fade"
          :timeout 500
          :in (:active (rum/react app-state))}
     (s/html [:h1
              {:class (if (not (:active (rum/react app-state))) "hide")}
              "Test"]))])

(rum/mount (hello-world)
           (. js/document (getElementById "app")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
