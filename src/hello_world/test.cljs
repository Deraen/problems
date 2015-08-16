(ns hello-world.test
  (:require [cljs.test :as t]))

(t/deftest test-a
  (t/is (= "a" "a")))

(t/deftest test-b
  (t/is (= "b" "b")))
