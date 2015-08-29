(ns hello-world.core
  (:require-macros hello-world.macro)
  (:require hello-world.test))

(enable-console-print!)

(println (hello-world.macro/foo hello-world.test))
