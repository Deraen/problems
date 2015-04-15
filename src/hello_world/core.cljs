(ns ^:figwheel-always hello-world.core
  (:require [hello-world.foobar]))

(defn hello []
  (hello-world.foobar/hello))
