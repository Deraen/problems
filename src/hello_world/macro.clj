(ns hello-world.macro
  (:require [cljs.analyzer.api :as ana-api]))

(defmacro foo [s]
  `[~@(map :name (vals (ana-api/ns-interns s)))])

