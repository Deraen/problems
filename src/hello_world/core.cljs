(ns hello-world.core
  (:require hello-world.test
            [cljs.test :as t]))

(enable-console-print!)

(t/run-tests (t/empty-env) 'hello-world.test)
