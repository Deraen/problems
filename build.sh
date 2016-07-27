#!/bin/sh

echo 1.9.89
echo
rm -r out
lein trampoline run -m clojure.main build.clj

echo
echo latest
echo
rm -r out
lein with-profile +latest trampoline run -m clojure.main build.clj
