// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100002060606060606060606060606060603080a0a0b0b0b0a0a0a0a0a0a0a0a0a09080a0a0b0b0b0a0a0a0a0a0a0a0a0a09080a0a0a0a0a0a0a0a0a0a0a0a0a0a09080a0a0a0a0a0a0a0a0a0a0a0a0a0a09080a0a0a0a0a0a0a0a0a0a0a0a0a0a09080a0a0a0a0a0a0a0a0a0a0a0a0a0a09080a0a0a0a0a0a0a0a0a0a0a0a0a0a09080a0a0a0a0a0a0a0a0a0a0a0a0a0a09080a0a0a0a0a0a0a0a0a0a0a0a0a0a09080a0a0a0a0a0a0a0a0a0a0a0a0a0a09080a0a0a0a0a0a0a0a0a0a0a0c0c0a09080a0a0a0a0a0a0a0a0a0a0a0c0c0a090801010a0a0a0a0a0a0a0a0a0a0a0a090801010a0a0a0a0a0a0a0a0a0a0a0a0904070707070707070707070707070705`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.castle.tilePath7,sprites.castle.tilePath9,sprites.castle.tilePath2,sprites.castle.tilePath8,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.castle.tilePath5,sprites.castle.tileGrass1,sprites.castle.tileGrass3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
