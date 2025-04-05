namespace SpriteKind {
    export const NPC = SpriteKind.create()
    export const Misc = SpriteKind.create()
}
sprites.onCreated(SpriteKind.Enemy, function (sprite) {
    tiles.placeOnRandomTile(sprite, sprites.castle.tilePath5)
    sprite.follow(playerOne, 25)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles10, function (sprite, location) {
    shopkeep1 = sprites.create(img`
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f f f c c f f f c . 
        f f f c f f f f f f f c . 
        c c c f f f e e f f c c . 
        f f f f f e e f f c c f . 
        f f f b f e e f b f f f . 
        . f 4 1 f 4 4 f 1 4 f . . 
        . f e 4 4 4 4 4 4 e f . . 
        . f f f e e e e f f f . . 
        f e f b 7 7 7 7 b f e f . 
        e 4 f 7 7 7 7 7 7 f 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `, SpriteKind.NPC)
    shopkeep1.setPosition(10, 21)
    game.showLongText("General Store", DialogLayout.Top)
    furniture = sprites.create(img`
        ..cccc.........
        .cdddbc........
        cbdddbccccccc..
        cbdddbcbdddddc.
        cbdddbcdddddbbc
        cbdddbcbbbbbbbc
        cbdddbccccccbbc
        cbdddbcddddbccc
        cbdddbcdddddbc.
        cbdddbcdddddbc.
        cbdddbcdddddbc.
        cbdddbcdddddbc.
        cbdddbcdddddbc.
        cbdddbcdddddbc.
        cbdddbcdddddbc.
        cbddbbcdddddbc.
        cbbbbbcccccccc.
        cbbbbbcbdddddc.
        cbbbbbcdddddbbc
        cbbbbbcbbbbbbbc
        cbbbbbcbbbbbbbc
        cbbbbbcbbbbbbbc
        .cccccccccccccc
        .cbbc.....cbbc.
        `, SpriteKind.Misc)
    furniture.setPosition(10, 51)
    controller.moveSprite(playerOne, 0, 0)
    tiles.setCurrentTilemap(tilemap`level2`)
    pause(500)
    tiles.placeOnTile(playerOne, tiles.getTileLocation(4, 7))
    controller.moveSprite(playerOne, 100, 100)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.field1, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level1`)
    tiles.placeOnTile(playerOne, tiles.getTileLocation(5, 13))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.gameOver(false)
})
let furniture: Sprite = null
let shopkeep1: Sprite = null
let playerOne: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
scene.setBackgroundColor(7)
playerOne = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(playerOne)
controller.moveSprite(playerOne, 100, 100)
