//% weight=100 color=#cc0000 icon="\uf1e2"
namespace enemyBlocks {
    /**
     * Turn a tile into an enemy when a watcher sprite is within distance
     * @param watcher the sprite to check against
     * @param tile the tile to monitor
     * @param enemyImg the image to use for the enemy sprite
     * @param distance how close (in pixels) before it spawns
     */
    //% block="turn tile %tile=tilemap_tile_picker into enemy %enemyImg=screen_image_picker when %watcher=variables_get(mySprite) is within %distance px"
    //% blockGap=8 weight=100
    export function spawnEnemyNearTile(
        watcher: Sprite,
        tile: Image,
        enemyImg: Image,
        distance: number
    ) {
        game.onUpdate(function () {
            for (let loc of tiles.getTilesByType(tile)) {
                let tx = loc.col * 16 + 8
                let ty = loc.row * 16 + 8

                let dx = Math.abs(watcher.x - tx)
                let dy = Math.abs(watcher.y - ty)
                if (dx <= distance && dy <= distance) {
                    // Replace tile so we only spawn once
                    tiles.setTileAt(loc, assets.tile`transparency16`)
                    let enemy = sprites.create(enemyImg, SpriteKind.Enemy)
                    enemy.setPosition(tx, ty)
                }
            }
        })
    }
}
