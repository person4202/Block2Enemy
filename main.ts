//% weight=100 color=#cc0000 icon="\uf1e2"
//% block="Enemy Blocks"
namespace enemyBlocks {
    /**
     * Watch for a sprite to get near a tile and turn it into an enemy sprite
     * @param watcher the sprite to check against
     * @param tile the tile to monitor
     * @param enemyImg the image to use for the enemy sprite
     * @param distance how close (in pixels) before it spawns
     */
    //% block="turn tile %tile=tilemap_tile_picker into enemy %enemyImg=screen_image_picker when %watcher=variables_get(mySprite) is within %distance px"
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

                if (watcher && watcher.x - tx < distance && watcher.x - tx > -distance &&
                    watcher.y - ty < distance && watcher.y - ty > -distance) {
                    
                    // Clear the tile
                    tiles.setTileAt(loc, assets.tile`transparency16`)

                    // Spawn enemy
                    let enemy = sprites.create(enemyImg, SpriteKind.Enemy)
                    enemy.setPosition(tx, ty)
                }
            }
        })
    }
}
