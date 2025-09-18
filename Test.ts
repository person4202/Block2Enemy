let player = sprites.create(img`
    . . . . . . . .
    . . 2 2 2 2 . .
    . 2 2 2 2 2 2 .
    . 2 2 2 2 2 2 .
    . . 2 2 2 2 . .
    . . . 2 2 . . .
    . . . . . . . .
`, SpriteKind.Player)

controller.moveSprite(player)

tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(player, assets.tile`myTile`)

enemyBlocks.spawnEnemyNearTile(player, assets.tile`myTile`, img`
    . . . . . . . .
    . . 5 5 5 5 . .
    . 5 5 5 5 5 5 .
    . 5 5 5 5 5 5 .
    . . 5 5 5 5 . .
    . . . 5 5 . . .
    . . . . . . . .
`, 24)
