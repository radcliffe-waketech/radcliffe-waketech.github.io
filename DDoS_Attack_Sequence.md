sequenceDiagram
   Actor Attacker
   participant BotNet
   participant Firewall
   participant WebServer

    Attacker ->> BotNet: Attacker utilizes BotNets (Zombies)
    BotNet ->> Firewall: BotNets are (ideally) blocked by Firewall
    BotNet ->> WebServer: BotNets overload network traffic to WebServer, rendering it inaccessible
    Firewall ->> WebServer: Firewall allows authorized traffic
