(ns hello-world.core
  (:require-macros [cljs.core.async.macros :as a])
  (:require [cljs.core.async :as a]))

(a/go
  (a/<! (a/timeout 1000))
  (println "hello"))
