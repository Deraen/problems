(ns hello-world.core
  (:require-macros hello-world.macro)
  (:require hello-world.test))

(enable-console-print!)

(println (meta #'hello-world.test/a))
