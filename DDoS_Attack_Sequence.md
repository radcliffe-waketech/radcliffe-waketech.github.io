' ' 'mermaid  
sequenceDiagram  
   participant Attacker  
   participant BotNet  
   participant Firewall  
   participant WebServer  

    Attacker ->> BotNet: Attacker utilizes BotNets (Zombies)
    BotNet ->> Firewall: BotNets are (ideally) blocked by Firewall
    BotNet ->> WebServer: BotNets overload network traffic to WebServer, rendering it inaccessible
    Firewall ->> WebServer: Firewall allows authorized traffic

## DDoS Attack Process
 1. The Attacker utilizes BotNets (Zombies).
 2. The BotNets are _ideally_ blocked by firewall.
 3. The BotNets overload network traffic to the WebServer, rendering it inaccessible.

## Mitigation
 * A Firewall is useful in filtering out potentially malicious network traffic.

'''
