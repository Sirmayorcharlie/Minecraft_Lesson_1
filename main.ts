player.onChat("material", function () {
    for (let index = 0; index < 3; index++) {
        agent.move(LEFT, 1)
    }
    if (agent.inspect(AgentInspection.Block, FORWARD) == GOLD_BLOCK) {
        agent.destroy(FORWARD)
        agent.collectAll()
    }
})
