(ns figwheel.connect (:require [hello-world.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:build-id "dev", :websocket-url "ws://localhost:3451/figwheel-ws"})

