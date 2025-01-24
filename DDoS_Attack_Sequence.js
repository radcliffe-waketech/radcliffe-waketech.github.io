sequenceDiagram
    participant Attacker
    participant BotNet
    participant WebServer
    participant Firewall

  Attacker ->> BotNet: Attacker utilizes BotNets.
  BotNet ->> Firewall: BotNets bombard the Firewall.
  Firewall ->> WebServer: WebServer becomes overwhelmed due to resources allocated to high network traffic in Firewall.
