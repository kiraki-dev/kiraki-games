[ai] {go-up} -> [ai-adapter] [engine]
[control] {up} -> [control-adapter] {go-up} -> [engine]
[control] {up} -> [control-adapter] {up} -> [lobby]

engine command { command: go-left | go-right | go-up | go-back | fire | pause | play, tankId: string }

engine event {
   eventName: tank-spawned | tank-destroyed | bullet-exploded | got-bonus
     | gerb-destroyed | paused | started
 }

 state {
   gameState: { isPaused: boolean, pausedBy?: string },
   level: {
     enemies: [
        { isPlaying? isDestroyed? }
     ]
   },
   staticObjects: [],
   dynamicObjects: [
     { isDestroyed?: boolean }
   ]
 }
