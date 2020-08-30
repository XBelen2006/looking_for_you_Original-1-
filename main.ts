enum ActionKind {
    Walking,
    Idle,
    Jumping,
    Derecha,
    Izquierda,
    Parada,
    prima2Derecha,
    prima2Izquierda,
    prima2Idle,
    prima2Escalar,
    prima2Jumping,
    womanEnemyWalking
}
namespace SpriteKind {
    export const Premio_Final = SpriteKind.create()
    export const PrimaNº1 = SpriteKind.create()
    export const PREMIO1 = SpriteKind.create()
    export const Food2 = SpriteKind.create()
    export const Food3 = SpriteKind.create()
    export const premio2 = SpriteKind.create()
    export const premio3 = SpriteKind.create()
    export const Premio_1 = SpriteKind.create()
    export const EnemyWoman = SpriteKind.create()
}
function Nivel_3 () {
    game.splash("Nivel 3")
    scene.setBackgroundImage(img`
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 d d 1 d d d d d d d d d d d 1 1 d d d d d d d d d c c c 1 d c 1 f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 d 1 1 d d d d d d c d d d d 1 1 1 d c d c d d d d c c c 1 1 d 1 f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 d 1 1 d d d d d d c d d d d 1 1 1 c c c d d d d d c c c 1 1 d 1 f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 d 1 1 d d c d d c c d d d 1 1 1 1 c c d d d d d d c c c 1 1 d 1 f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 d 1 d 1 d c d d c c d d 1 d 1 1 1 d c d d d d d c c c c 1 1 d 1 f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 d 1 d 1 d c c c d d d d 1 1 d 1 d d d d d d d d c c d c 1 1 d 1 f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 d 1 d 1 d d d d d d d d 1 1 1 d d d d d d d d c c c d 1 1 1 d 1 f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f f f f f f f f f d f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 d 1 1 1 d d d d d d d d 1 1 d d c d d d d d c d c c c 1 1 1 d 1 f f f f f f 
        f f f f f f f f f f f f 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 d d 1 1 1 d d d d d d d d d d c d d d d d c d c c d c 1 1 1 d 1 f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 d d 1 d d d d c d d d d c c d d d d c c c c c c c 1 1 1 d 1 f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b f f f f f f f f f f f f f f f f 9 f f f f f f f f f f f f f f f 1 d 1 1 1 d d d c d d d d d d c c c c c c c c c c d 1 1 1 d 1 f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 d d d 1 1 1 d c d c d d c d d d c c c c c c c d 1 1 1 d d 1 f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 d d d d d d c c d c d c d d d d d d d d d d 1 1 1 d d 1 f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 d d d d d d c c d c c c d d d d d d d d 1 1 1 d d 1 f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 d d d d d c c c c c c c d d d d 1 1 1 1 1 1 d 1 f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 d d d d d d d c d d c d d 1 1 1 1 d d d d 1 1 f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 d d d d d d c c c c c c c c d d d d d 1 f f f f f f f f f f f f 
        f f f f f f f f f f d f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 d d d d 1 d d d d d d d d d d d d 1 f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 d d 1 1 1 d d d d d d 1 1 1 f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f d f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f d f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f f f d f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f d f f f f f f d f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f f f f f f f f f f f f f d f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f a f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f a f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f a f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        `)
    tiles.setTilemap(tiles.createTilemap(hex`5a001400020819171a00000000000000000000000000000000000000000000000000000000000000000019171e1d1d1d171a19171a1b000000000000000000000000000000000000000000000000000000000000000000000000000000000909191e171a0000000000000000001b0000191a0000001b1b000000000000000000001b000000161d1d1d1d161d171d1a171a000000000000000000000000000000001b191a1b000000000000000000000000000000000000000909021f19171a0000000000000019171a1917171a001917171a001b00000000000019171a00070209090902020209180018000000000000000000000000000000001b1917171e1a000000000000000000000000000000000000020909020819171c00000000001b00181b19161616191717171a1a171a0000000000191d1a07020909020202020209090902080000000000000000000000000000001917171d171a0000160000001500001600000000000000000f090909021f18001b00001b19171a0916070a0a0a081618161e1e161c000003000000181602020302020202020215150909020800000018000000000000000000000000181618160004030303030303030306000000000000002a0f090909021f19171c19171a1609020209090909020909021f1618000000040303030303030306020203090403030303060202090208181600000003030315000000070909090908040b0b0b0b0b0b0b0b06000000000000002a2a2a0c090202081800001807020202090909020202020909021f18040315031010101010100303060909090410101010060202090909090908030303030315031507090909090403030b0b0b0b0b0b0b0406000000000000000e0e0f0c090902091f0403030306020209020403030306020909021f111010101211101010101012060909021110101010120602020209090915030b0b0b0b0b15150303030315110b0b0b0b0b0b0b0b0b0b05000000000000000403030303030303151110101204031515061110101004151503030306090202020d0209090909090415151506020204030303150202020904150b0b0b0b0b0b0b150b0b0b0b0909110b04030303030306050515130000000000211110101010102e2b2b2b2b341110102e1209110b2e111010101010120909090d0028090909090911101010120d2811101010120403030303030303060b0b0b0b0b0b0b0b12090909110b0b0b0b0b0b0b0b05050515000000002321313110102e3131310c2a2b3411102e090d2809090909090909090109020d0000000000000000000000000000000000002802111010101010101012110b0b0b0b0b0b120909090909110b0b0b0b0b0b0b050505130000000023233131313131313131310c2a2b342a2a00000000000000000000000000000000000000000000000000000000000000000000002811120d28111012020d00000000000000280909090d002a2b2b2b2b2b0505050513000000002323212131313131313131310c0e2b000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002a002b2b2b050505131300000000232723232121213131313131312f2a0000000000000000000000000000000000000000000000000000000000000000000000000000000038222233333333333300000000000000000000000000002a002a2a2a2a00000000000025242623232323212121212131312f0000000000000000000000000000000000000000000000000000000000000000003600000000000000382c10101022223300000000000000000000000000000000002a0000000000000000333323232723232323272323212121303131312f0000003200320032003200320032003200320032003200000000003031312f00000000000000000000382233333300000000000000000000000000000000000000000000000033333333242623232524262323242621212121212f00002d002d002d002d002d002d002d002d002d002d0000000030313333332f00000000000000000000381010390000000000333333333308000000000000000000000000003333333333232323232323232323232323232323312f002d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d320000303131313131312f33333333332f0000000000000000333300002a2a281110330800000000000000000000000022222222222222222222222222222222222222222231322d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d222d003031313737373737372f36303136332f30312f0000003335353535353507091112090829000000000000000000002020202020202020202020202020202020202020222222222222222222222222222222222222222222222d3533333333333333333333333333333737373333353533333314141414141414141414141414141414141414141414`, img`
        . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 . . . . . . 2 
        2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 . . 2 . 2 2 2 2 2 2 . . . . . . . . . . 2 2 2 . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 . . . . . . 2 
        2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . 2 2 . 2 2 2 2 2 2 2 2 2 2 . . . 2 2 2 2 2 2 . . . . . . . . 2 2 2 2 2 . 2 . . . . . . 2 2 2 2 2 . . . . 2 2 2 . . . . . . 2 
        2 2 2 2 . . . . . 2 2 2 2 2 . . . . 2 2 2 2 2 . . . . . 2 2 2 2 2 . . . . . . 2 2 . . . 2 2 2 2 2 2 2 . . . . . . . . 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 . . . . . . 2 2 . . . . . . 2 
        2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 . . 2 2 . . . 2 . . 2 2 2 2 . . . . . . . . . . . 2 . . . 2 . . 2 2 2 2 2 . . . . 2 . . 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 . . . . . . . 2 2 . . . . . . 2 
        2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 . . . . . . . . . 2 2 2 . . . . 2 
        2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 . . . 2 
        2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 . . . 2 
        2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 . . . 2 
        2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . 2 
        2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 . . . . . . . . . . . . . 2 
        2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 . . . . . . . . . 2 2 . . . . . . . 2 . . . . . . . . . . . . 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `, [myTiles.transparency16,myTiles.tile35,myTiles.tile37,myTiles.tile69,myTiles.tile71,myTiles.tile67,myTiles.tile72,myTiles.tile20,myTiles.tile23,myTiles.tile26,myTiles.tile14,myTiles.tile39,myTiles.tile41,myTiles.tile44,myTiles.tile50,myTiles.tile55,myTiles.tile75,myTiles.tile76,myTiles.tile77,sprites.castle.rock1,sprites.builtin.oceanDepths4,myTiles.tile80,myTiles.tile81,myTiles.tile82,myTiles.tile83,myTiles.tile84,myTiles.tile85,myTiles.tile86,myTiles.tile88,myTiles.tile89,myTiles.tile90,myTiles.tile91,myTiles.tile92,myTiles.tile93,myTiles.tile94,myTiles.tile95,myTiles.tile97,myTiles.tile98,myTiles.tile99,myTiles.tile103,myTiles.tile24,myTiles.tile32,myTiles.tile42,myTiles.tile53,myTiles.tile79,myTiles.tile96,myTiles.tile104,myTiles.tile105,myTiles.tile106,myTiles.tile107,myTiles.tile109,myTiles.tile110,myTiles.tile111,myTiles.tile112,myTiles.tile113,myTiles.tile114,myTiles.tile118,myTiles.tile119], TileScale.Sixteen))
    Enemigo3 = sprites.create(img`
        . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . f f f f . . . . . . . . . . 
        . . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
        . . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
        . . . . . . . f 1 1 1 1 1 1 1 d f . . . . . . . 
        . . . . . . f d 1 1 1 1 1 1 1 d d f . . . . . . 
        . . . . . . f d 1 1 1 1 1 1 d d d f . . . . . . 
        . . . . . . f d 1 1 1 d d d d d d f . . . . . . 
        . . . . . . f d 1 d f b d d d d b f . . . . . . 
        . . . . . . f b d d f c d b b b c f . . . . . . 
        . . . . . . . f 1 1 1 1 1 b b c f . . . . . . . 
        . . . . . . . f 1 b 1 f f f f f . . . . . . . . 
        . . . . . . . f b f c 1 1 1 b f . . . . . . . . 
        . . . . . . . . f f 1 b 1 b f f . . . . . . . . 
        . . . . . . . . . f b f b f f f . f . . . . . . 
        . . . . . . . . . . f f f f f f f f . . . . . . 
        . . . . . . . . . . . . f f f f f . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    paleta_de_pintura = sprites.create(img`
        . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . e e e e e e e . . . . . . . 
        . . . . . . . . e e e e e e e e e e e e e . . . . 
        . . . . . . . e e e e d d d d d d d d e e e e . . 
        . . . . . e e e e e d d 3 3 d d d d d d e e e e . 
        . . . . e e e e d d d 3 3 3 d d a a d d d e e e . 
        . . . e e e d d d d d 3 3 d d a a a d d d d e e e 
        . . e e e d d 5 5 d d d d d d a a d d d d e e e e 
        . e e e d d 5 5 5 d d d d d d d d d d e e e e e e 
        . e e d d d 5 5 d d d d d d d d d e e e e e e e . 
        e e e d d d d d d d d d d d d e e e e e e e e . . 
        e e e d d 9 9 d d d d d d d d e e e e e e . . . . 
        e e e d 9 9 9 d d d d d d d d d e e . . . . . . . 
        e e e d 9 9 d d 4 4 d d 2 2 d d d e e e . . . . . 
        . e e e d d d 4 4 4 d 2 2 2 d d d e e e e . . . . 
        . e e e e d d 4 4 d d 2 2 d d d d d e e e e . . . 
        . . e e e e e d d d d d d d d d d d e e e e . . . 
        . . . e e e e e e d d d d d d d d e e e e . . . . 
        . . . . . e e e e e e e e e e e e e e e . . . . . 
        . . . . . . . . e e e e e e e e e e . . . . . . . 
        `, SpriteKind.Food)
    Prima_Nº1.setPosition(15, 0)
    paleta_de_pintura.setPosition(721, 52)
    Enemigo3.vy = 60
    Enemigo3.setFlag(SpriteFlag.BounceOnWall, true)
    info.startCountdown(40)
    crearEnemyWoman()
    createPrima2()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (direccion == 1) {
        Projectil = sprites.createProjectileFromSprite(img`
            . f 9 . . . . . . . . . . . . . 
            . . f 9 9 5 f . . . . . . . . . 
            . . . f 9 9 5 f 9 9 f . . . . . 
            . . . . f 3 9 5 f 5 9 f . . . . 
            . . . . . f 9 3 5 f 9 9 f . . . 
            . . . . . . f 3 3 3 f 5 3 f . . 
            . . . . . . f 9 5 3 f 3 3 f . . 
            . . . . . . f 9 3 3 f 9 . f . . 
            . . . . . . f 5 3 3 f 5 5 f . . 
            . . . . . f 9 9 . f 9 3 f . . . 
            . . . . f 3 3 . f 3 3 f . . . . 
            . . . f 9 5 . f 9 . f . . . . . 
            . . f 9 5 . f 9 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Prima_Nº1, 200, 0)
    } else {
        Projectil = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . f . . . f . . 
            . . . . . f . . f 9 9 . f . . . 
            . . . . f 3 9 f 9 5 3 f . . . . 
            . . . f 9 3 f 3 5 3 f . . . . . 
            . . f 9 5 f 9 5 9 f . . . . . . 
            . . f 3 3 f 5 9 3 f . . . . . . 
            . . f 5 5 f 3 9 3 f . . . . . . 
            . . f 3 5 f 9 5 9 f . . . . . . 
            . . . f 3 5 f 3 5 3 f . . . . . 
            . . . . f 9 5 f 9 5 . f . . . . 
            . . . . . f 3 9 f 9 . . f . . . 
            . . . . . . . . . f . . . f . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Prima_Nº1, -200, 0)
    }
})
function movePrima2 () {
    if (prima2Direccion == 1) {
        animation.setAction(prima2, ActionKind.prima2Izquierda)
        prima2.x += -2
        prima2X += -2
        if (prima2X <= prima2Limite - 100) {
            prima2Direccion = 2
        }
    }
    if (prima2Direccion == 2) {
        animation.setAction(prima2, ActionKind.prima2Derecha)
        prima2.x += 2
        prima2X += 2
        if (prima2X >= prima2Limite) {
            prima2Direccion = 1
        }
    }
}
function Nivel_1 () {
    scene.setBackgroundImage(img`
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        `)
    scene.setBackgroundColor(15)
    game.setDialogTextColor(0)
    game.setDialogFrame(img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 f f f f f f f f f f f f f f 1 
        1 f 1 1 1 1 1 1 1 1 1 1 1 1 f 1 
        1 f 1 f f f f f f f f f f 1 f 1 
        1 f 1 f f f f f f f f f f 1 f 1 
        1 f 1 f f f f f f f f f f 1 f 1 
        1 f 1 f f f f f f f f f f 1 f 1 
        1 f 1 f f f f f f f f f f 1 f 1 
        1 f 1 f f f f f f f f f f 1 f 1 
        1 f 1 f f f f f f f f f f 1 f 1 
        1 f 1 f f f f f f f f f f 1 f 1 
        1 f 1 f f f f f f f f f f 1 f 1 
        1 f 1 f f f f f f f f f f 1 f 1 
        1 f 1 1 1 1 1 1 1 1 1 1 1 1 f 1 
        1 f f f f f f f f f f f f f f 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `)
    scene.setBackgroundImage(img`
        c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e e e e e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e e e e e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e e e e e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e e e e e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e e e e e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f e e e e e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f 9 9 f f f f e e e e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b f f 9 9 9 9 9 9 9 f f f f e e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e 8 8 8 8 8 8 8 8 8 8 8 8 1 1 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b f f 9 9 9 9 9 9 9 9 9 9 9 f f f e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e 8 8 8 8 8 8 8 8 8 8 1 1 8 8 8 8 8 1 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b f 9 9 8 8 9 9 9 9 9 9 9 9 9 f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 8 8 8 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b f f f 9 8 9 8 9 9 9 8 8 8 9 9 9 9 9 f f f f f f f f f 8 8 8 8 1 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e 8 8 8 8 8 8 1 8 8 8 8 8 8 8 8 8 8 8 8 d d 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b f f f 9 9 8 8 8 9 9 8 8 9 9 8 8 9 9 9 f 9 9 9 9 9 9 9 9 f f 8 8 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e 8 8 8 8 8 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b f 9 9 9 9 8 9 9 9 8 8 9 9 9 9 8 8 9 9 f 9 9 9 9 9 9 9 9 9 9 f 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b f 9 9 9 9 8 9 9 9 8 9 9 9 9 9 9 8 9 9 f 9 9 9 9 9 9 9 9 9 9 9 f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b f f 9 9 9 9 9 8 9 8 8 9 9 8 8 9 9 8 9 9 f 9 9 9 9 9 9 9 9 9 9 9 9 9 f f 8 8 8 8 8 8 8 8 1 8 8 8 8 8 8 8 8 8 8 8 e e e e e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 d 1 1 1 8 8 8 8 e e e e e c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b f 9 9 9 9 9 9 9 8 8 8 9 9 9 8 8 8 8 9 9 f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 8 8 8 8 d 8 1 1 1 8 8 8 8 8 8 8 8 8 8 8 e e e e e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 d d 8 8 8 8 8 8 e e e e e c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b f 9 9 9 9 9 9 9 9 8 8 8 8 9 9 9 9 9 9 9 f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 8 8 8 d 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b f 9 9 8 8 8 8 9 9 8 9 9 8 8 9 9 9 9 9 9 f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f d d 1 8 8 8 8 8 8 8 8 8 8 1 8 8 8 8 e e e e e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 d 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b f f 9 9 8 9 9 8 9 9 8 9 9 9 9 8 9 9 9 9 9 f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f d d 1 8 8 8 8 8 8 8 8 8 1 1 8 8 8 8 e e e e e 8 8 8 8 8 8 8 8 8 8 8 8 8 d d 8 8 8 8 8 8 8 8 8 8 8 d d 1 8 8 8 8 8 8 8 8 e e e e e c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b f 9 9 9 8 9 9 9 9 8 8 9 9 9 9 8 8 9 9 9 9 f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 8 8 8 8 8 8 8 8 8 8 1 8 8 8 8 8 8 e e e e e 8 8 8 8 8 8 8 8 8 8 8 8 d d 8 8 8 8 8 8 8 8 8 8 8 8 d 1 8 8 8 8 8 8 8 8 8 e e e e e c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b f 9 9 9 8 9 9 9 9 8 9 9 9 9 9 9 8 9 9 9 f 9 9 9 9 9 9 8 8 8 8 9 9 9 9 9 9 9 9 f 8 8 8 8 8 8 8 8 8 8 1 8 8 8 8 8 8 e e e e e 8 8 8 8 8 8 8 8 8 8 8 d 1 1 8 8 8 8 8 8 8 8 8 8 d 1 8 8 8 8 8 8 8 8 8 8 8 e e e e e c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b f f 9 9 8 9 9 9 8 8 9 9 9 9 8 8 8 9 9 f 9 9 9 9 9 9 9 9 9 9 8 8 9 9 9 9 9 9 9 f 8 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 e e e e e 8 8 8 8 8 8 8 8 8 8 d d 8 8 8 8 8 8 8 8 8 8 8 8 1 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b f f 9 8 8 8 8 8 9 9 9 9 9 8 9 8 9 f 9 9 9 9 9 9 9 9 9 9 9 9 9 8 8 9 9 9 9 9 f f 8 8 8 8 8 8 8 1 8 8 8 8 8 8 8 8 e e e e e 8 8 8 8 8 8 8 8 8 8 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b f 9 9 8 8 9 9 9 9 9 9 9 8 8 9 9 f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 8 9 9 9 9 f f 8 8 8 8 8 8 1 8 8 8 8 8 8 8 8 8 e e e e e 8 8 8 8 8 8 8 8 8 8 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b f 9 9 9 9 9 9 9 9 9 9 9 9 9 f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 9 9 9 9 f f 8 8 8 8 8 1 8 8 8 8 8 8 8 8 8 8 e e e e e 8 8 8 8 8 8 8 8 8 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b f 9 9 9 9 9 9 9 9 9 9 9 f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 9 9 9 9 f f 8 8 8 8 8 1 8 8 8 8 8 8 8 8 8 8 e e e e e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b f 9 9 9 9 9 9 9 9 9 f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 9 9 9 9 f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 1 8 8 8 8 8 e e e e e c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 9 9 8 8 9 9 9 f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f 9 9 8 9 9 9 f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f d f 9 8 8 9 9 f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f d f 9 9 8 9 9 9 f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f d d f 9 9 8 9 9 f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 9 9 9 9 9 9 9 9 9 9 8 8 9 9 9 9 9 9 9 f d d f 9 9 9 9 9 f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 9 9 9 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 9 f d d f 9 9 9 9 9 f d f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 9 9 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 9 9 f f d f 9 9 9 9 9 f d f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 9 9 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 9 9 9 f f f 9 9 9 9 9 f d f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f 9 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 9 9 9 9 9 f f 9 9 9 9 f d f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f 9 9 9 9 9 9 9 9 8 9 9 9 9 9 9 8 9 9 9 9 9 9 f 9 9 9 9 f d f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 9 9 9 9 9 f 9 9 9 9 f d f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 9 9 9 9 9 9 f f 9 9 9 f f f 8 8 8 8 8 8 8 8 8 8 8 1 8 8 8 e e e e e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f 9 9 9 9 9 9 9 9 9 9 9 9 9 8 8 9 9 9 9 9 9 f 9 9 f d f f 8 8 8 8 8 8 8 8 8 8 8 1 8 8 8 e e e e e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 d 1 1 1 8 8 e e e e e c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 9 9 f f d f 8 8 8 8 8 8 8 8 8 8 1 8 8 8 8 e e e e e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 d d 8 8 8 8 8 e e e e e c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 9 9 f f d f f 8 8 8 1 1 1 1 1 1 8 8 8 8 8 e e e e e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 d 1 8 8 8 8 8 e e e e e c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 9 9 f d d d f 8 f f f f f f f f 8 8 8 8 8 e e e e e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 d d 1 8 8 8 8 8 8 8 8 8 d d d 8 8 8 8 8 8 e e e e e c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 9 9 f d d d f f f c c c c c c c 8 8 8 8 8 e e e e e 8 8 8 8 8 8 8 8 8 8 8 8 8 d d d d 1 8 8 8 8 8 8 8 8 d d d 1 1 8 8 8 8 8 8 e e e e e c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 f 9 9 f f f f f c f f f f f f f c f 8 8 8 8 e e e e e 8 8 8 8 8 8 8 8 8 8 8 d d 1 1 1 1 8 8 8 8 8 8 8 8 8 d 1 8 8 8 8 8 8 8 8 8 e e e e e c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e e e e f f f f f f f f f f f f f f 8 f f 8 8 f f f c f c c c c c f c c 8 8 8 8 e e e e e 8 8 8 8 8 8 8 8 8 8 d d 1 8 8 8 8 8 8 8 8 8 8 8 8 8 1 8 8 8 8 8 8 8 8 8 8 e e e e e c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e e e e f d d d d d d d d d d d f 8 8 8 8 8 8 f f c c c c c c c c f c c 8 8 8 8 e e e e e 8 8 8 8 8 8 8 8 8 d d 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 8 8 8 8 8 8 8 8 8 8 e e e e e c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e e e e f d d d d d d d d d d d f 8 8 8 8 8 f f c c f f f c c c c c f f f f 8 8 e e e e e 8 8 8 8 8 8 8 8 8 8 1 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e e e e f f f f f f f f f f f f f f f 8 8 8 f f c c f 3 f c c c c c c f a a f 8 e e e e e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 3 3 f f c c c c c f a f 8 e e e e e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f 3 3 3 f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f f c c c c f a a f e e e e e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f 8 8 8 8 8 8 8 8 e e f f e c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f c c c c f a a f e e e e e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f 8 8 8 8 8 8 8 e f f f e c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f c c c c c f a f e e e e e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f 8 8 8 8 8 8 8 e f f f e c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f c c c c f f a a f f e e e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f 8 8 8 8 8 8 f f f f e c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f f f f f a a a a a f e e e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f 8 8 8 8 f f f f f e c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f a a a a a a a a a a f e e 8 8 8 8 8 8 8 8 8 8 8 8 8 1 1 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f 8 8 8 8 f f f f f e c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f a a a a a a a a a a f e e 8 8 8 8 8 8 8 8 8 1 1 1 1 d d 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f 8 8 8 8 f f f f f e c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f a a a a a a a a a a f e e 8 8 8 8 8 8 8 8 1 d d d d d 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f e c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f a a a a a a a a a a f e 8 8 8 8 8 8 8 1 d d 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f a a a a a a a a a a f e 8 8 8 8 8 8 8 1 d 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f a a a a a a a a a a f e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f a a a a a a a a a f e e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f a a a a a a a a f e e e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f a a a a a a a a f e e e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f a a a a a a a f e e e e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f a a a a a f f c f e e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f b b b b b b b b c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f a a a a f c c c f e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f b b b b b b b c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f a f f f c c c c f e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f b b b b b b b c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f f c c c c c c c c f b e e e e e e e e e e e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f b b b b b b b c c c c c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f c c c c c c c c c c f e e e e e e e e e e e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f b b b b b b b c c c c c f c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f c c c c c c c c c c f b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f b b b b b b b b c c c c f f f c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f c c c c c c c c c c f b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f b b b b b b b b c c c f f f f c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f c c c c c c c c c c c f f b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f b b b b b b b b c c f f f f f c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f c c c c c c c c c c c f b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f b b b b b b b b c f f f f f f c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f c c c c c c c c c c c c f b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f b b b b b b b b f f f f f f f c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f c c c c c c c c c c c c c f b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f b b b b b b b b b b f f f f f f c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f c f f f c c c c c c c c c f b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f b b b b b b b b b b b f f f f f f f c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f c c c f f c c c c c c c c c f b b b b b b b b b b b b b b b b b b b b b b a a f f f f f f f f f a a b b b b b b b b b b b f f f f f f c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f c c c c f f c c c c c c c c f b b b b b b b b b b b b b b b b b b b b b f f f a a a a a a a a a f f f b b b b b b b b b f f f f f f f c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f c c c c c c f c c c c c c c c f b b b b b b f f f b b b b b b b b b b b f f f f f f f f f f f f f f f f b b b b b b b b f f f f f f f c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f c c c c c c c f c c c c c c c f b b b b f f 1 1 f b b b b b b b b b b f f f f f f f f f f f f f f f f f f b b b b b b b f f f f f f f c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b f f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f c c c c c c f c c c c c c c c f b b f f 1 1 1 f b b b b b b b b b f f f f f f f f f f f f f f f f f f f b b b b b b b b f f f f f f c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f c c c c c c c f c c c f c c c f f f f 1 1 1 1 f b b b b b b b b b f f f f f f f f f f f f f f f f f f f f b b b b b b b f f f f f f c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b f f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f c c c c c c c c f c c c c c c f 1 1 1 1 1 1 1 f b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f b b b b b b f f f f f f c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b f f 3 3 3 3 f f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f f f f c c c c c f c c c c c c f 1 1 1 1 1 1 1 f b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f b b b b b f f f f f f c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f a a a f f c c c f c c c c c f 1 1 1 1 1 1 1 1 f b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f b b b b b b f f f f f c c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f a a a a f c c c c f c c c c f 1 1 1 1 1 1 1 1 f b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f b b b b b f f f f f f c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f f a a a a f c c c c f f f f 1 1 1 1 1 1 1 1 1 f b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f b b b b b f f f f f f c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f a a a a a f c f f f f f f 1 f 1 1 1 1 1 f f f f b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b f f f f f f c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 3 f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f a a a a a f f 1 1 1 1 1 1 1 f f 1 f f f f b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b f f f f f f f c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f 3 f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f f a a a a a f f f 1 1 1 1 1 1 1 f f f b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b f f f f f f f c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b f 3 3 3 f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f a a a a a a f b f f 1 1 1 1 1 1 f f b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b f f f f f f f c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b f 3 3 3 f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f f a a a a a a a f b b b f f f f f f f b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b f f f f f f f c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b f 3 3 3 3 f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f a a a a a a a f f b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b f f f f f f f c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b f 3 3 3 3 3 f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f f f a a a a a a a a f b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b f f f f f f f c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b f 3 3 3 3 f f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f f a a a a a a a a a f b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b f f f f f f f c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b f 3 3 3 f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f f a a a a a a a a a a f b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b f f f f f f f c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b f 3 3 3 f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f f f a a a a a a a a a a f b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f b b b f f f f f f f f c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b f 3 f f f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f f f f a a a a a a a a a a a f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f b b b f f f f f f f f c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b f 3 3 f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f f f a a a a a a a a a a a a a a f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f b b b f f f f f f f c c c c 
        c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f 3 f f f f f f f f f f f f f f f f f f f f f f f f f a a a a a a a a a a a a a a f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c 
        c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c 
        c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c 
        c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c 
        c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c 
        c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c 
        c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c 
        c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
        `)
    game.showLongText("Cuando volveras  Mery??... ¡Dijiste que volverias pronto!", DialogLayout.Bottom)
    scene.setBackgroundImage(img`
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 b b 1 1 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 b 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 5 5 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 5 5 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 5 5 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 5 5 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 5 5 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 5 5 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 1 b 1 1 1 1 b 1 1 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 8 8 8 8 8 8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f c c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 5 5 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f b c f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 5 5 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 5 5 8 8 8 8 f b c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 8 8 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 8 8 f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 9 8 8 8 8 8 8 5 5 5 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 5 5 8 8 8 8 f c 8 8 8 8 f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 8 8 8 8 8 8 8 8 2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 5 5 8 f f f f f f f f f f 8 8 5 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 8 8 f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f c c c c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f 8 c c c c c 8 8 8 8 8 8 8 8 8 5 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f c c c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f b b b b f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 8 8 8 c c c c c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 2 8 8 8 8 8 8 8 f f 8 f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 8 8 8 8 8 f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 9 8 8 8 8 8 8 8 8 8 f c 8 8 8 8 8 8 8 8 8 8 b b b b b b b b b b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f c 8 8 8 8 8 8 8 8 8 8 b b b b b b b b b b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f 8 f 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f c 8 8 8 8 8 8 8 8 8 8 b b b b b b b b b b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 8 8 8 8 8 f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f 9 9 9 9 9 9 f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 f c 8 8 8 8 8 8 8 8 8 8 b b b b b b b b b b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 8 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 8 8 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 f 8 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c c c c b b 1 1 1 b b b b b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f b f 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 8 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c c c b b 1 1 1 b b b b b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f 8 c c 5 5 5 c c c c c c c b b 1 1 1 b b b b b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f 9 9 9 9 9 9 9 9 9 9 f f f 8 c c 5 5 5 c c c c c c c b b b b b b b b b b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 8 8 8 8 8 8 
        8 8 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f c c 5 5 5 c c c c c c c b b b b b b b b b b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 8 8 8 8 8 8 
        8 8 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 9 9 8 8 8 8 8 9 9 9 9 8 8 8 9 9 f c c c c c c c c c c c c b b b b b b b b b b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 8 8 8 8 8 8 
        8 8 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 9 9 9 9 9 8 8 9 9 9 9 9 9 9 9 9 f 9 8 8 9 9 9 8 8 9 9 8 8 9 9 8 9 f c c c c c c c c c c c c b b b b b b b b b 5 5 5 b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 8 8 8 8 8 8 
        8 8 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 8 8 8 f f f 1 1 1 1 1 f f f f f f f 5 5 5 5 5 f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 9 9 9 9 8 8 8 9 9 9 9 9 9 9 9 9 9 f 9 8 9 9 9 9 9 8 8 9 8 9 9 9 8 9 f c c c c c c c c c c c c b b b b b b b b b 5 5 5 b b f f f f f f f f f f f f f f f f f f f f f f f f f f 
        8 8 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 8 8 8 f f f 1 1 1 1 1 f f f f f f f 5 5 5 5 5 f f f 8 8 8 8 8 8 9 8 8 8 8 8 8 8 f 9 9 9 9 8 9 9 9 9 9 9 9 9 9 9 9 9 f 9 8 8 9 8 8 9 9 8 9 9 9 9 8 8 9 f c c c c c c c 1 1 1 c c b b b b b b b b b 5 5 5 b b f f f f f f f f f f f f f f f f f f f f f f f f f f 
        8 8 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 8 8 8 f f f 1 1 1 1 1 f f f f f f f 5 5 5 5 5 f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 f 9 9 9 9 9 8 9 9 9 9 9 9 8 9 9 9 9 f 9 9 9 8 8 8 9 9 9 8 9 9 9 8 8 9 9 9 f c c c c c c 1 1 1 c c b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f 
        8 8 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 8 8 8 f f f 1 1 1 1 1 f f f f f f f 5 5 5 5 5 f f f 8 8 8 8 2 8 8 8 8 8 8 8 8 f 9 9 9 9 9 8 9 9 9 9 9 9 9 8 8 9 9 f 9 9 9 9 9 9 9 9 9 8 9 8 8 8 9 9 9 9 f c c c c c c 1 1 1 c c b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f 
        8 8 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 8 8 8 f f f 1 1 1 1 1 f f f f f f f 5 5 5 5 5 f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 f 9 9 9 9 9 8 9 9 9 9 9 9 9 9 8 9 9 f 9 9 9 9 9 9 9 9 8 8 8 8 9 9 9 9 9 9 f c c c c c c c c c c c b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f 
        8 8 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 f 9 9 9 9 9 8 9 9 9 9 9 9 9 9 8 9 9 f 9 9 9 9 9 9 9 9 8 8 8 9 9 9 9 9 9 9 f c c c c c c c c c c c b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f 
        8 8 c c c c 1 1 1 1 1 c c c c c c c c c c c c c c c c c c c c c 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 f 9 9 9 9 9 8 9 9 f f f 9 9 9 8 9 9 f 9 9 8 8 8 9 9 8 8 9 8 9 9 8 9 9 9 9 f c c c c c c c c c c c b b 1 1 1 b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f 
        8 8 c c c c 1 1 1 1 1 c c c c c c c c c c c c c c c c c c c c c 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 f 9 9 9 9 9 8 9 f d d d f 9 9 8 9 9 f 9 9 8 9 9 9 9 8 9 9 8 9 9 8 8 8 9 9 f c c c c c c c c c c c b b 1 1 1 b b b b b b b b b f f 1 1 1 1 1 f f f f f f f f f f 5 5 5 5 5 f f f f 
        8 8 c c c c 1 1 1 1 1 c c c c c c c c c c c c c c c c c c c c c 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 f f 9 9 9 8 8 9 f d b b f 9 9 8 9 9 f 9 9 8 9 9 9 8 9 9 9 8 9 9 9 9 8 9 9 f c 5 5 5 c c c c c c c b b 1 1 1 b b b b b b b b b f f 1 1 1 1 1 f f f f f f f f f f 5 5 5 5 5 f f f f 
        8 8 c c c c 1 1 1 1 1 c c c c c c c c c c c c c c c c c c c c c 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 5 8 8 8 8 8 f d f 9 9 8 9 9 f d b d f 9 9 8 9 9 9 f 9 9 8 8 8 8 9 9 9 8 8 9 9 8 8 9 f c c 5 5 5 c c c c c c c b b b b b b b b b b b b b b f f 1 1 1 1 1 f f f f f f f f f f 5 5 5 5 5 f f f f 
        8 8 c c c c 1 1 1 1 1 c c c c c c c c c c c c c c c c c c c c c 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 f d f 9 9 9 9 9 f d b d f 9 8 8 9 9 9 f 9 9 9 9 9 9 9 9 9 9 8 8 8 8 9 9 f c c 5 5 5 c c c c c c c b b b b b b b b b b b b b b f f 1 1 1 1 1 f f f f f f f f f f 5 5 5 5 5 f f f f 
        8 8 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 f d f 9 9 9 9 9 f d d f 9 9 8 9 9 9 9 9 f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f b c c c c c c c c c c c c b b b b b b b b b b b b b b f f 1 1 1 1 1 f f f f f f f f f f 5 5 5 5 5 f f f f 
        8 8 c c c c c c c c c c c c c c c c c c c c 5 5 5 5 5 c c c c c 8 8 8 f f f 5 5 5 5 5 f f f f f f f 1 1 1 1 1 f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 f d d f 9 9 9 9 f d f 9 9 9 8 8 9 9 9 9 9 f f f f f f f f f f f f f f b b c c c c c c c c c c c c b b b b b b b b b b b b b b a a a a a a a a a a a f f f f f f f f f f f f f f f 
        8 8 c c c c c c c c c c c c c c c c c c c c 5 5 5 5 5 c c c c c 8 8 8 f f f 5 5 5 5 5 f f f f f f f 1 1 1 1 1 f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 f d d f 9 9 9 9 f f 9 9 9 9 9 8 8 8 9 9 9 9 9 9 9 9 9 9 9 f b b b b b b b c c c c c c c c c c c c b b b b b b b b b 5 5 5 b b a a a a a a a a a a a f f f f f f f f f f f f f f f 
        8 8 c c c c c c c c c c c c c c c c c c c c 5 5 5 5 5 c c c c c 8 8 8 f f f 5 5 5 5 5 f f f f f f f 1 1 1 1 1 f f f 8 8 8 8 8 8 8 c c c c c c f d d f 9 9 9 9 f 9 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 9 9 9 f b b b b b b b b c c c c c c c 1 1 1 c c b b b b b b b b b 5 5 5 b b a a a a a a a a a a a f f f f f f f f f f f f f f f 
        8 8 c c c c c c c c c c c c c c c c c c c c 5 5 5 5 5 c c c c b b b b b b b b b b b b b b b b f f f 1 1 1 1 1 f f f 8 8 8 8 8 8 8 c c c c c c f d d f 9 9 9 9 9 f 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 9 9 9 f b 5 5 5 5 5 b b c c c c c c c 1 1 1 c c b b b b b b b b b 5 5 5 b b a a a a a a a a a a a f f f f f f f f f f f f f f f 
        8 8 c c c c c c c c c c c c c c c c c c c c 5 5 5 5 5 c c c c b b b b b b b b b b b b b b b b f f f 1 1 1 1 1 f f f a a a a a a a c c c c c c f d d f 9 9 9 9 f f f f f f 9 9 9 9 9 9 9 9 8 9 9 9 9 f b b 5 5 5 5 5 b b c c c c c c c 1 1 1 c c b b b b b b b b b b b b b b a 1 1 1 a a a a a a a f f f f f f f f f f f f f f f 
        8 8 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b f f f f f f f f f f f a a a a a a a c c c c c c f d d f 9 9 9 9 f d b b f 9 9 9 9 9 9 9 9 9 8 9 9 9 9 f b b 5 5 5 5 5 b b c c c c c c c c c c c c b b b b b b b b b b b b b b a 1 1 1 a a a a a a a f f f f f f f f f f f f f f f 
        8 8 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b f f f f f f f f f f f a a a a a a a c c c c c c f d f 9 9 9 9 f d b b b f 9 9 9 9 9 9 8 9 9 9 8 9 9 f 1 b b 5 5 5 5 5 b b c c c c c c c c c c c c b b 1 1 1 b b b b b b b b b a 1 1 1 a a a a a a a f f f f f f f f f f f f f f f 
        8 8 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b f f f f f f f f f f f a a a a a a a c c c c c c c f 9 9 9 9 9 f d b b f f 9 9 9 9 9 9 9 9 9 9 9 9 f 1 1 b b 5 5 5 5 5 b b c c c c c c c c c c c c b b 1 1 1 b b b b b b b b b a a a a a a a a a a a f f f f f f 1 1 1 1 1 f f f f 
        8 8 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b 5 5 5 5 5 b b b b b b f f f f f f f f f f f a a a a a a a c c c c c c c f 9 9 9 f f d b b b f f 9 9 9 9 9 9 9 9 9 f f f b b b b b b b b b b b b c c 5 5 5 c c c c c c c b b 1 1 1 b b b b b b b b b a a a a a a a a a a a f f f f f f 1 1 1 1 1 f f f f 
        8 8 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b 5 5 5 5 5 b b b b b b f f f f f f f f f f f a a a a a a a c c c c c c c f 9 9 9 f d d b d b b f 9 9 9 9 9 9 f f f b b b b b b b b b b b b b b b c f 5 5 5 c c f c c c c b b b b b b b b b b b b b b a a a a a a a a a a a f f f f f f 1 1 1 1 1 f f f f 
        8 8 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b 5 5 5 5 5 b b b b b b f f f f f f f f f f f a 1 1 1 1 1 a c c c 1 1 1 f f 9 9 f f f d d b b b f f f f f f f f f b b b b b b b b b b b b b b b b f f 5 5 5 c c f f c c c b b b b b b b b b b b b b b a a a a a a a a a a a f f f f f f 1 1 1 1 1 f f f f 
        8 8 c c c c 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c b b b b b 5 5 5 5 5 b b b b b b f f f f f f f f f f f a 1 1 1 1 1 a c c c 1 1 1 f 9 9 f f c f f f f f f d d d d d d d d f b b 5 5 5 5 5 b b 1 1 1 1 1 b f f f c c c c c f f f c c b b b b b b b b b b b b b b a a a a a a 5 5 5 a a f f f f f f 1 1 1 1 1 f f f f 
        8 8 c c c c 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c b b b b b 5 5 5 5 5 b b b b b b f f f f f f f f f f f a 1 1 1 1 1 a c c c 1 1 1 f 9 f c c c c 5 5 5 5 f b b b b d d d d f b b 5 5 5 5 5 b b 1 1 1 1 1 b f f f f c c c f f f f c c b b b b b b b b b 5 5 5 b b a a a a a a 5 5 5 a a f f f f f f f f f f f f f f f 
        8 8 c c c c 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b f f f f f f f f f f f a 1 1 1 1 1 a c c c 1 1 1 f 9 f c c c c 5 5 5 5 f b b b b b b b b b f b 5 5 5 5 5 b b 1 1 1 1 1 b f f f f c c c f f f f c c b b b b b b b b b 5 5 5 b b a a a a a a 5 5 5 a a f f f f f f f f f f f f f f f 
        8 8 c c c c 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b f f f 5 5 5 5 5 f f f a 1 1 1 1 1 a c c c 1 1 1 f f 1 c c c c 5 f f f f f f f f f f f f f f f f f f f f b b 1 1 1 1 1 b f f f f c c c f f f f c c b b b b b b b b b 5 5 5 b b a a a a a a a a a a a f f f f f f f f f f f f f f f 
        8 8 c c c c 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b f f f 5 5 5 5 5 f f f a a a a a a a c c c c c c f c c c c c f f a a a a a a a a a a a a a a a a a a a a f f f 1 1 1 1 b f f f f f f f f f f f c c b b b b b b b b b b b b b b a a a a a a a a a a a f f f f f f f f f f f f f f f 
        8 8 c c c c c c c c c c c c c c c c c c c 1 1 1 1 1 c c c c c b b b b b b b b b b b b b b b b f f f 5 5 5 5 5 f f f a a a a a a a c c c c c c c c c c c c f a a a a a a a a a a a a a a a a a a a a a a a f f b b b f f f f f f f f f f f f f c b b b b b b b b b b b b b b a a a a a a a a a a a f f f f f f f f f f f f f f f 
        8 8 c c c c c c c c c c c c c c c c c c c 1 1 1 1 1 c c c c c b b b b b b b b b b b b b b b b f f f 5 5 5 5 5 f f f a a a a a a a c c c c c c c c c c c c f a a a a a a a a a a a a a a a a a a a a a a a a f b b b f f f f f f f f f f f f f c b b 1 1 1 b b b b b b b b b a a 1 1 1 a a a a a a f f f f f f f f f f f f f f f 
        8 8 c c c c c c c c c c c c c c c c c c c 1 1 1 1 1 c c c c c b b b b b 1 1 1 1 1 b b b b b b f f f 5 5 5 5 5 f f f a a a a a a a c c c 5 5 5 5 5 c c f f a a a a a a a a a a a a a a a a a a a a a a a a a f f b b f f f f f f f f f f f f f c b b 1 1 1 b b b b b b b b b a a 1 1 1 a a a a a a f f f f f f f f f f f f f f f 
        8 8 c c c c c c c c c c c c c c c c c c c 1 1 1 1 1 c c c c c b b b b b 1 1 1 1 1 b b b b b b f f f f f f f f f f f a a a a a a a c c c 5 5 5 5 5 c c f a a a a a a a a a a a a a a a a a a a a a a a a a a a f f b f f f f f f f f f f f f f c b b 1 1 1 b b b b b b b b b a a 1 1 1 a a a a a a f f f f f f 5 5 5 5 5 f f f f 
        8 8 c c c c c c c c c c c c c c c c c c c 1 1 1 1 1 c c c c c b b b b b 1 1 1 1 1 b b b b b b f f f f f f f f f f f a a a a a a a c c c 5 5 5 5 5 c c f a a a a a a a a a a a a a a a a a a a a a a a a a a a a f b f f f f f f f f f f f f f c b b b b b b b b b b b b f f a a a a a a a a a a a f f f f f f 5 5 5 5 5 f f f f 
        8 8 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b 1 1 1 1 1 b b b b b b f f f f f f f f f f f a a a a a a a c c c 5 5 5 5 5 c f a a a a a a a a a a a a a a a a a a a a a a a f a a a a a f b f f f f f f f f f f f f f c b b b b b b b b b b b b f f f a a a a a a a a a a f f f f f f 5 5 5 5 5 f f f f 
        8 8 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b 1 1 1 1 1 b b b b b b f f f f f f f f f f f a 5 5 5 5 5 a c c c 5 5 5 5 5 c f a a a a a a a a a a a a a a a a a a a a a a a f a a a a a f b f f f f f f f f f f f f f c b b b b b b b b b 5 5 5 f f f a a a a a a a a a a f f f f f f 5 5 5 5 5 f f f f 
        8 8 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b f f f f f f f f f f f a 5 5 5 5 5 a c c c c c c c c c f a a a a a a a a a a f a a a a a a a a a a a a f a a a a a f b b f f f f f f f f f f f c c b b b b b b b b b 5 5 f f f f a a a a a a a a a a f f f f f f 5 5 5 5 5 f f f f 
        8 8 c c c c c 1 1 1 c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b f f f f f f f f f f f a 5 5 5 5 5 a c c c c c c c f f a a a a a a a a a a a f a a a a a a a a a a a a f a a a a a f b b b f f f f f f f f f c c c b b b b b b b b b 5 f f f f f a a a a a 5 5 5 a a f f f f f f f f f f f f f f f 
        8 8 c c c c c 1 1 1 c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b f f f f f f f f f f f a 5 5 5 5 5 a c c c c c c c f a a a a a a a a a a a a f a a a a a a a a a a a a f a a a a a f b b b f f f f f f f f f c c c b b b b b b b b b b f f f f f a a a a a 5 5 5 a a f f f f f f f f f f f f f f f 
        8 8 c c c c c 1 1 1 c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b f f f f f f f f f f f a 5 5 5 5 5 a c c c 1 1 1 1 f a a a a a a a a a a a a f f a a a a a a a a a a a f a a a a a a f b b a a f f f f f a a c c c b b b b b b b b b f f f f f f a a a a a 5 5 5 a a f f f f f f f f f f f f f f f 
        8 8 c c c c c c c c c c c c c c c c c c 5 5 5 5 5 c c c c c c b b b b b b b b b b b b b b b b f f f 1 1 1 1 1 f f f a a a a a a a c c c 1 1 1 f a a a a a a a a a a a a a f a a a a a a a a a a a a f a a a a a a f b f f a a a a a a a f f f c b b b b b b b b f f f f f f a a a a a a a a a a a f f f f f f f f f f f f f f f 
        8 8 c c c c c c c c c c c c c c c c c c 5 5 5 5 5 c c c c c c b b b b b 5 5 5 5 5 b b b b b b f f f 1 1 1 1 1 f f f a a a a a a a c c c 1 1 1 f a a a a a a a a a a a a a f a a a a a a a a a a a a f a a a a a a f f f f f f f f f f f f f f f b b 1 1 1 b b b f f f f f f a a a a a a a a a a a f f f f f f f f f f f f f f f 
        8 8 c c c c c c c c c c c c c c c c c c 5 5 5 5 5 c c c c c c b b b b b 5 5 5 5 5 b b b b b b f f f 1 1 1 1 1 f f f a a a a a a a c c c 1 1 f a a a a a a a a a a a a a a f a a a a a a a a a a a a f a a a a a a f f f f f f f f f f f f f f f b b 1 1 1 b b f f f f f f b a a a a a a a a a a a f f f f f f 1 1 1 1 1 f f f f 
        8 8 c c c c c c c c c c c c c c c c c c 5 5 5 5 5 c c c c c c b b b b b 5 5 5 5 5 b b b b b b f f f 1 1 1 1 1 f f f a a a a a a a c c c 1 1 f a a a a a a a a a a a a a f a a a a a a a a a a a a a f a a a a a a f f f f f f f f f f f f f f f b b 1 1 1 b b f f f f f f b a a a a a a a a a a a f f f f f f 1 1 1 1 1 f f f f 
        8 8 c c c c c c c c c c c c c c c c c c 5 5 5 5 5 c c c c c c b b b b b 5 5 5 5 5 b b b b b b f f f 1 1 1 1 1 f f f a a a a a a a c c c c c f a a a a a a a a a a a a a f a a a a a a a a a a a a a f a a a a a a a f f f f f f f f f f f f f f b b b b b b f f f f f f b b a a 1 1 1 a a a a a a f f f f f f 1 1 1 1 1 f f f f 
        8 8 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b 5 5 5 5 5 b b b b b b f f f f f f f f f f f a a a a a a a c c c c f f a a a a a a a a a a a a a f a a a a a a a a a a a a a f a a a a a a a f f f f f f f f f f f f f f b b b b b b f f f f f f b b a a 1 1 1 a a a a a a f f f f f f 1 1 1 1 1 f f f f 
        8 8 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b f f f f f f f f f f f a a a a a a a c c c c f a a a a a a a a a a a a a a f a a a a a a a a a a a a a f a a a a a a a f f f f f f f f f f f f f f f b b b b b f f f f f f b b a a 1 1 1 a a a a a a f f f f f f 1 1 1 1 1 f f f f 
        8 8 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b f f f f f f f f f f f a a a a a a a c c c c f a a a a a a a a a a a a a a a a a a a a a a a a a a a a f a a a a a a a f f f f f f f f f f f f f f f b b b b b f f f f f b b b a a a a a a a a a a a f f f f f f f f f f f f f f f 
        8 8 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b f f f f f f f f f f f a a a a a a a c c c f a a a a a a a a a a a a a f f a a a a a a a a a a a a a a f a a a a a a a f f f f f f f f f f f f f f f f b b b b f f f f f b b b a a a a a a a a a a a f f f f f f f f f f f f f f f 
        8 8 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b f f f f f f f f f f f a a a a a a a c c f a a a a a a a a a a a a a a f a a a a a a a a a a a a a a a a f a a a a a a f f f f f f f f f f f f f f f f b b b b b f f f f b b b a a a a a a a a a a a f f f f f f f f f f f f f f f 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f a a a a a a a a a a a a a a f a a a a a a a a a a a a a a a a f a a a a a a f f f f f f f f f f f f f f f f f 8 8 8 8 f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        1 1 8 8 1 1 1 1 1 1 1 8 8 8 1 1 1 1 1 1 1 8 8 8 1 1 1 1 1 1 1 1 8 8 8 8 1 1 1 1 1 1 1 1 1 8 8 8 8 1 1 1 1 1 1 1 8 8 8 8 1 1 1 1 1 1 f a a a a a a a a a a a a a a a f a a a a a a a a a a a a a a a a a f a a a a f f f f f f f f f f f f f f f f f f f 1 1 1 f f f f 8 1 1 1 1 1 1 8 8 8 8 1 1 1 1 1 1 1 8 8 8 8 1 1 1 1 1 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f a a a a a a a a a a a a a a a f a a a a a a a a a a a a a a a a a f a a a f f f f f f f f f f f f f f f f f f f f f 8 8 f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f a a a a a a a a a a a a a a a a f a a a a a a a a a a a a a a a a a f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f a a a a a a a a a a a a a a a a a a f a a a a a a a a a a a a a a a a a f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f a a a a a a a a a a a a a a a a a f a a a a a a a a a a a a a a a a a a f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        c c c c c c c c c c c c f f f f f c c c c c c c c c c c c c c c c c c c f f f f f c c c c c c c c c c c c c c c c c c f f a a a a a a a a a a a a a a a a a a f a a a a a a a a a a a a a a a a a a f f f c c c c c f f f f f f f f f f f f f f f f f f f f c c f f f f f f f f f f f f f f c c c c c c c c c c c c c c f f f f 
        c c c c c c c c c c c c f f f f f c c c c c c c c c c c c c c c c c c c f f f f f c c c c c c c c c c c c c c c c c c f f a a a a a a a a a a a a a a a a a f a a a a a a a a a a a a a a a a a a a f f f c c c c c f f f f f f f f f f f f f f f f f f f f c c f f f f f f f f f f f f f f f c c c c c c c c c c c c c f f f f 
        c c c c c c c c c c c c f f f f f c c c c c c c c c c c c c c c c c c c f f f f f c c c c c c c c c c c c c c c c c c f a a a a a a a a a a a a a a a a a f f a a a a a a a a a a a a a a a a a a a f f f c c c c c c f f f f f f f f f f f f f f f f f f f c f f f f f f f f f f f f f f f f c c c c c c c c c c c c f f f f f 
        c c c c c c c c c c c f f f f f f c c c c c c c c c c c c c c c c c c c f f f f f c c c c c c c c c c c c c c c f f f f a a a a a a a a a a a a a a a a c f a f a a a a a a a a a a a a a a a a a a f f f f f c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c f f f f f 
        c c c c c c c c c c c f f f f f f c c c c c c c c c c c c c c c c c c c f f f f f c c c c c c c c c c c c c c c f d d f a a a a a a a a a a a a a a a c f f f a a a a a a a a a a a a a a a a a a f f f f f f f c c c c c f f f f f f f f f f f f f f f f f f f f f f f f c c c f f f f f f f c c c c c c c c c c c c f f f f f 
        c c c c c c c c c c c f f f f f f c c c c c c c c c c c c c c c c c c c f f f f f c c c c c c c c c c c c c c f d d d f a a a a a a a a a a a a a a a f b f f a a a a a a a a a a a a a a f f f f f b f f f f f f c c c c c c c c c c c c c c c c c f f f f f f f f f f f c c c c f f f f f f c c c c c c c c c c c c f f f f f 
        c c c c c c c c c c f f f f f f f c c c c c c c c c c c c c c c c c c c f f f f f f c c c c c c c c c c c c f d d d d d a a a a a a a a a a a a a a f f b b f f f f a a a a a a a a a f f b b b b b b f f f f f f f c c c c c c c c c c c c c c c c c f f f f f f f f f c c c c c f f f f f f c c c c c c c c c c c c f f f f f 
        c c c c c c c c c c f f f f f f c c c c c c c c c c c c c c c c c c c c f f f f f f f c c c c c c c c c c c f d d d d d a a a a a a a a a a a a a f f f b b b b b b f f f f f f f f f b b b b b b b f f f f f f f f c c c c c c c c c c c c c c c c c c f f f f f f f c c c c c c f f f f f c c c c c c c c c c c c c f f f f f 
        c c c c c c c c c f f f f f f f c c c c c c c c c c c c c c c c c c c c f f f f f f f c c c c c c c c c c c f d d d d d f f f f a a a a a a a a f f f f b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f c c c c c c c c c c c c c f f f f f 
        c c c c c c c c f f f f f f f f c c c c c c c c c c c c c c c c c c c c f f f f f f f c c c c c c c c c c c f d d d d d d d d f f f a a a a a f f f f f f b b b b b b b b b b b b b b b b b b b b f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f c c c c c c c c c c c f f f f f f f 
        c c c c c c c c f f f f f f f f f f f f f c c c c c c c c c c c c c c c f f f f f f f c c c c c c c c c c c f f d d d d d d d d d f f f f f f f f f f f c f f b b b b b b b b b b b b b b b b b f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f c c c c c c c c f f f f f f f f f f 
        c c c c c c c f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c f f f f f c c c c c c c c c c c c c f d d d d d d d d d f c c c f f f f f f c c c f f f b b b b b b b b b b b f f f c c c f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f 
        c c c c c c f f f f f f f f c f f f f f f f c c c c c c c c c c c c c c c f f f f f f c c c c c c c c c c c c c c f f f f f f f f f f c c c f f f f f f c c c c c c f f f f f f f f f f f c c c c c f f f f f f f f c c c c f f f f f f f f f f f f c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f 
        c c c c f f f f f f f f f c c f f f f f f f c c c c c c c c c c c c c c f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f c c c c c c c c c c c c c c c f f f f f f f f c f f f f f f f f f f f f f f f f f c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f c 
        c c f f f f f f f f f f f c c f f f f f f f c c c c c c c c c c c c c f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f c c 
        f f f f f f f f f f f f c c c c f f f f f f c c c c c c c c c c c c c f f f f f f f f c c c f f f f f f f f f f f f f f c c c c c c c c f f f f f f f f f f f f f f f f f f c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c 
        f f f f f f f f f f f c c c c c c f f f f f c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c f f f f f f f f f f f f f f f f f f f f f c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c f f f f f f f f f c c c c 
        f f f f f f f f f f c c c c c c c f f f f f c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c f f f f f f f f f f f f f f f f f f f f f f f f f c c f f f f f f f f f f f f f f f f f f f f f f f c c c c f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c f f f f f f f c c c c 
        f f f f f f f f c c c c c c c c c f f f f f f c c c c c c c f f f f f f f f f f c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c f f f f f f f f c c c c c c c c c f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c f f f f f f f c c c 
        f f f f f f c c c c c c c c c c c f f f f f f f c c c f f f f f f f f f f f f f c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c f f f f f f f f f f f f f f f f f f f f c c f f f f f c c c c c c c c c c c c c f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c f f f f f f c c c 
        f f f f f c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f c f f f f f f f f f c c c c c c f f f f f f f f f f f f f f f f c c c c c c c c c c f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f c c c c c c c c c c c c c c c c c c c f f f f f f c c c 
        c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f c c c c c c c c c c c c c f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f c c c c c c c c c c c c c c c c c c c c c f f f f f f c c c 
        c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f c c c c c c c c c c c c c c c c c f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f c c c c c c c c c c c c c c c c c c c c c c f f f f f f c c 
        c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f c c c c c c c c c c c c c c c c c c c c f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f c c c c c c c c c c c c c c c c c c c c c c f f f f f f f c 
        c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f c c c c c c c c c c c c c c c c c c c c f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f c c c c c c c c c c c c c c c c c c c c c c f f f f f f f c 
        c c c c c c c c c c c c c c c c c c c c f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f c c c c c c c c c c c c c c c c c c c c f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f 
        c c c c c c c c c c c c c c c c c c c c c f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f c c c c c c c c c c c c c c c c c c c c f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f 
        c c c c c c c c c c c c c c c c c c c c c f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f c c c c c c c c c c c c c c c c c c c f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f c c c c c c c c c c c c c c c c c c f f f f f f f 
        c c c c c c c c c c c c c c c c c c c c c f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f c c c c c c c c c c c c c c c c c f f f f f f 
        c c c c c c c c c c c c c c c c c c c c c f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c f f f f f 
        c c c c c c c c c c c c c c c c c c c c c f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c f f f f 
        c c c c c c c c c c c c c c c c c c c c c f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c 
        `)
    game.showLongText("¡Ah no es posible! Ya pasaron dos días....   Y la policia no da solución a su ausencia!!", DialogLayout.Bottom)
    scene.setBackgroundImage(img`
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 8 8 8 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 8 8 8 8 8 8 8 8 8 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 8 8 8 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 8 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 8 8 8 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 8 8 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 8 8 8 8 8 8 8 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 8 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 8 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 8 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 8 8 8 8 8 8 8 8 8 8 8 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        9 9 9 9 9 9 8 8 8 8 8 8 8 8 8 8 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 9 9 9 9 9 8 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 8 8 9 9 9 9 9 8 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 8 9 9 9 8 9 9 9 8 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 
        9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 8 9 9 9 9 9 9 8 9 8 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d 1 1 1 1 1 1 1 1 1 1 1 
        9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 8 8 8 9 9 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d 1 1 1 1 1 1 1 1 
        9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 f 9 9 9 9 9 9 9 9 9 f 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 f 9 9 9 9 9 9 9 9 9 9 f f 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 f 9 8 8 9 9 9 9 9 9 9 9 f f f f 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 f 9 8 9 8 9 9 9 8 8 8 8 9 f 9 9 f f 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 9 1 1 1 1 1 1 1 1 1 1 1 1 1 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 7 7 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 f 9 9 8 8 8 8 9 8 8 9 9 9 8 f 9 9 9 9 f 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 7 7 9 9 9 7 7 7 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 9 9 9 9 9 8 9 8 9 9 8 8 8 9 f 9 9 9 f f 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 7 7 7 e e 9 7 7 7 9 9 7 7 7 9 9 9 9 9 9 
        9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 9 9 9 9 9 8 8 8 9 9 9 9 9 9 f 9 9 9 9 f f 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 7 7 7 e 9 e 9 9 9 9 9 7 7 7 9 e 9 9 9 9 
        9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 9 9 9 9 9 9 8 8 8 8 8 9 9 9 9 f 9 9 9 9 9 f 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 7 7 7 9 e 7 7 7 9 9 9 7 7 7 9 9 9 9 7 7 7 e 7 7 7 9 9 
        9 9 d d d 1 d d d d d 1 1 1 1 1 1 f 9 9 9 9 9 9 9 8 9 9 8 8 9 9 9 f 9 9 9 9 9 f f 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 7 7 7 9 e 7 7 7 9 9 9 7 7 7 9 9 9 e e e 9 9 7 7 7 9 9 
        9 9 9 9 d d d d d d d d d d 1 1 1 f 9 9 9 9 9 9 9 8 9 9 9 8 8 9 9 f 9 9 9 9 9 9 f 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 7 7 7 9 e 7 7 7 9 9 9 7 7 7 9 e e 9 9 9 9 9 7 7 7 e 9 
        9 9 9 9 9 9 9 9 9 9 d d d d d d 1 f 9 9 8 8 8 9 9 8 9 9 8 8 8 9 9 f 9 9 9 9 9 9 f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 e 9 e 9 e 9 9 9 9 9 e 9 9 e e 9 9 9 9 9 9 9 9 e 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 9 8 9 8 9 9 8 9 9 8 9 8 9 9 f 9 9 9 9 8 9 f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 8 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 d d d d d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 7 7 9 e 9 9 9 9 9 e 9 9 e 9 e 9 7 7 7 9 9 7 7 7 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 9 8 9 9 9 8 8 9 9 8 8 9 9 9 f 9 9 9 9 8 9 9 f 9 9 9 9 9 9 9 9 9 9 9 9 9 8 8 8 8 8 8 8 8 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 d d d d d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 7 7 9 9 9 7 7 7 9 9 e 9 9 7 7 7 9 9 e 9 9 e 7 7 7 9 9 7 7 7 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 9 8 8 8 8 8 9 9 9 9 9 9 9 9 f 9 9 9 9 8 8 8 f f 9 9 9 9 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d d d d 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 7 7 9 e e 7 7 7 9 7 7 7 9 7 7 7 9 9 e 7 7 7 7 7 7 9 e 7 7 7 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f 9 9 9 9 9 9 9 9 9 9 9 9 9 f 9 9 9 9 9 9 9 8 9 f 9 9 9 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d d d 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 7 7 e 9 7 7 7 e e 9 e 9 9 9 7 7 7 e 7 7 7 9 9 e 7 7 7 9 9 e 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 9 f f f 9 9 9 9 9 9 9 9 9 f f 9 9 9 9 9 9 9 8 8 f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 7 7 9 9 9 9 9 e 9 9 7 7 7 9 7 7 7 9 9 7 7 7 e e 7 7 7 7 e 9 e 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 9 9 9 9 f f f 9 9 9 9 f f 9 9 9 9 9 9 9 9 9 f 8 f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 7 7 9 9 9 9 9 e 9 9 7 7 7 9 9 9 9 9 9 7 7 7 e 9 9 7 7 7 9 9 9 e e 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 9 9 9 9 9 9 9 f f f f 9 9 9 9 9 9 9 9 9 9 9 f 9 9 f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 e 9 9 9 9 e 9 9 9 7 7 7 e e 9 9 9 9 7 7 7 e 9 9 7 7 7 9 9 9 9 9 e 9 
        9 9 9 9 9 9 9 9 9 8 8 9 9 9 9 9 9 f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f 9 f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 7 7 9 9 9 9 7 7 7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 e 9 7 7 7 9 9 9 9 9 9 9 9 e e e 9 7 7 7 e 9 9 9 9 9 9 9 9 7 7 7 9 
        9 9 9 9 9 9 9 9 8 9 8 9 9 9 9 9 9 f 9 9 9 9 9 9 9 9 9 9 9 9 8 9 9 9 8 9 9 9 9 f 9 f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 7 7 9 9 9 9 7 7 7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 7 7 9 9 9 e 7 7 7 9 9 9 9 9 9 9 9 9 9 9 e 7 7 7 9 6 6 6 9 9 9 9 9 7 7 7 9 
        9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 9 9 f f 9 9 9 9 9 9 8 9 9 9 9 8 9 9 9 8 9 9 9 9 f 9 9 f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 6 6 6 9 9 7 7 7 9 9 7 7 7 7 7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 7 7 7 7 7 9 7 7 7 e 7 7 7 9 6 6 6 e 9 6 6 7 7 7 9 6 6 7 7 7 6 6 6 7 7 7 e 
        9 9 9 9 9 8 8 9 9 9 9 9 9 9 9 9 9 f 9 f 9 9 9 9 9 8 9 9 9 9 8 9 9 9 8 8 9 9 f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 7 7 9 9 6 6 6 9 9 9 9 9 9 9 7 7 7 6 6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 6 6 6 9 9 7 7 7 7 7 7 9 9 9 9 e 7 7 7 9 6 6 6 e 9 6 6 6 e 9 9 6 6 7 7 7 6 6 6 7 7 7 e 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 9 f 9 9 9 9 9 8 8 8 9 9 8 8 9 9 9 8 9 9 f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 7 7 9 9 9 7 7 7 9 9 6 7 7 7 9 9 7 7 7 9 7 7 7 6 6 9 9 6 6 6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 6 6 6 9 9 9 9 9 7 7 7 e e e e 9 7 7 7 9 6 6 6 e 9 6 6 6 9 e 9 9 9 7 7 7 6 6 6 7 7 7 e 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 9 9 f 9 9 9 9 9 9 8 9 9 9 8 9 9 8 9 9 9 f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 7 7 9 9 9 7 7 7 9 9 e 7 7 7 9 9 9 7 7 7 9 9 7 7 7 9 9 9 9 e 7 7 7 6 6 6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 6 6 6 e 6 6 6 9 9 9 9 7 7 7 9 9 9 7 7 7 9 e 9 9 9 9 9 e 9 9 9 9 9 e 9 6 6 6 e e 9 9 9 9 9 9 e 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 9 9 9 f 9 9 9 9 9 8 9 9 9 8 9 9 8 9 9 f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 7 7 9 9 9 7 7 7 9 9 e 9 9 9 9 9 9 7 7 7 6 9 7 7 7 9 9 9 9 9 7 7 7 6 6 7 7 7 9 9 7 7 7 9 9 9 9 e e 9 9 6 6 6 e 9 9 9 9 9 9 9 7 7 7 9 9 9 7 7 7 9 9 e 9 9 9 9 9 e 9 9 9 9 e 9 6 6 6 e 9 9 9 9 6 6 6 e 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 9 9 9 f 9 9 9 9 9 9 9 9 9 9 9 9 9 f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 7 7 9 9 7 7 7 9 9 9 9 9 9 9 9 9 e 9 9 9 9 9 9 6 6 6 9 6 e 6 9 9 9 9 9 7 7 7 9 9 7 7 7 9 6 7 7 7 9 6 6 6 e 9 9 9 6 6 6 9 9 9 9 9 9 9 9 7 7 7 9 9 9 7 7 7 6 6 9 9 9 9 9 9 e 9 9 9 9 e 9 6 6 6 e 6 6 6 9 6 6 6 e 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 9 8 9 9 f 9 9 9 9 9 9 9 9 9 9 9 f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 7 7 9 9 9 9 e 9 9 9 e e e e 9 9 9 e 9 9 9 9 9 6 6 6 e e e 6 9 9 9 9 9 9 e e 9 9 7 7 7 9 6 7 7 7 9 6 6 6 9 9 9 9 9 9 e 9 9 9 9 9 9 9 9 9 9 9 6 6 6 9 9 6 6 6 9 9 9 6 6 6 e 9 9 9 9 e 9 9 9 9 e 6 6 6 9 6 6 6 e 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 9 8 9 f 9 f 9 9 9 9 9 9 9 9 9 f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 7 7 9 9 9 9 e 9 9 9 9 9 9 e 7 7 7 e 9 9 9 9 9 9 7 7 7 9 e 9 9 6 6 6 9 9 e e 9 9 9 9 e 9 6 e 6 9 9 6 6 6 9 9 9 9 9 9 e 6 6 6 9 9 9 9 9 9 9 9 6 6 6 9 9 6 6 6 9 9 9 6 6 6 6 6 9 e e 9 6 6 6 9 e 6 6 6 9 9 e 9 e 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 9 9 8 9 f 9 9 f f f 9 9 9 9 f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 e 9 9 9 9 9 9 9 9 7 7 7 e 9 9 9 9 9 9 7 7 7 9 6 6 6 6 6 6 9 9 e e 9 9 9 9 e 9 9 e 9 9 9 e 9 9 9 9 9 9 9 9 e 6 6 6 9 9 9 9 9 9 9 9 6 6 6 9 9 9 e 6 6 6 9 6 6 6 6 6 9 9 e 9 6 6 6 9 e 9 9 9 9 9 e 9 e 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 9 8 9 f 9 9 9 9 f d f f f f d f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 e 9 9 9 9 7 7 7 9 9 7 7 7 7 7 7 9 9 9 9 7 7 7 9 6 6 6 7 7 7 9 e 9 e 9 9 9 9 9 e e 9 9 9 9 e 9 9 6 6 6 9 9 e 9 6 6 6 9 9 9 9 9 9 9 9 e 9 9 9 9 9 e 6 6 6 9 9 9 6 6 6 9 9 9 e 6 6 6 9 9 e 9 9 9 9 e 9 e 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 9 8 9 f 9 9 9 9 f d d d d d d f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 e 9 9 9 e 7 7 7 9 9 9 e 9 7 7 7 9 6 6 e 9 7 7 7 6 6 6 7 7 7 e e 6 6 9 6 6 6 7 7 7 9 9 9 9 e 9 9 6 6 6 9 9 e 9 9 9 9 9 9 9 9 9 9 9 9 9 e 9 9 9 9 9 6 6 6 9 9 9 9 e 6 6 6 9 e 9 9 9 9 9 e 6 6 6 9 e 9 e 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 9 8 f 9 9 9 f f d d d d d d f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 7 7 9 9 7 7 7 9 9 9 e 9 7 7 7 7 7 7 6 e 7 7 7 e e e 7 7 7 9 6 6 6 9 6 6 6 7 7 7 9 9 9 9 e 9 9 6 6 6 9 e 9 9 9 9 9 9 9 9 9 9 9 6 6 6 e 9 9 6 6 6 e 9 6 6 6 9 9 e 6 6 6 9 9 6 6 6 9 9 e 6 6 6 e 9 9 e 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 9 9 9 f 9 9 9 f f f f f f d d f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 e 9 9 9 9 9 9 7 7 7 9 9 9 e e 9 9 9 e 9 9 9 e 7 7 7 6 9 7 7 7 9 9 6 6 6 9 e 6 6 6 9 6 6 6 7 7 7 9 9 9 9 9 e 9 9 9 9 e 9 9 9 9 9 9 9 9 9 9 9 9 6 6 6 e 9 9 6 6 6 9 e 6 6 6 9 9 e 6 6 6 9 9 6 6 6 9 9 9 6 6 6 e 9 9 e 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 9 9 f 9 9 9 f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 e 9 7 7 7 9 e 7 7 7 9 9 9 9 9 e e 9 e 9 9 9 e 7 7 7 9 9 9 9 9 7 7 7 6 6 9 9 e 9 e 9 9 9 7 7 7 e 9 9 9 9 9 e 9 9 9 6 6 6 9 9 9 9 9 9 9 9 9 9 9 6 6 6 e 9 9 6 6 6 9 e 6 6 6 9 e 9 9 9 9 9 9 6 6 6 9 9 9 e d d e 9 6 6 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f e e f f f f f f f a a a a a a f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 e 9 7 7 7 9 e 7 7 7 9 9 9 9 9 9 7 7 7 9 6 6 e 7 7 7 6 6 6 9 e 7 7 7 6 6 9 9 9 e e 9 9 9 7 7 7 e 9 6 6 6 9 e 9 9 e 6 6 6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 e 9 9 9 9 9 e 9 9 9 9 e 9 9 9 9 9 9 e 9 9 9 9 9 e d d d e 6 6 
        9 9 9 9 9 9 9 9 9 9 9 9 9 f 9 9 f f b b f f b e e e b b f f f f f f f f f a a a f f f 9 9 9 9 9 9 9 9 9 9 9 e 9 7 7 7 e 9 7 7 7 9 9 9 9 9 9 7 7 7 9 6 6 e 7 7 7 6 6 6 6 e 7 7 7 9 9 9 9 9 9 e 9 9 9 7 7 7 e 9 6 6 6 9 9 e e 9 6 6 6 9 9 9 9 9 9 9 9 9 9 9 6 6 9 e 9 e 9 9 9 9 e 9 9 6 6 6 9 9 9 6 6 6 d e 9 6 6 6 e d d d e 6 6 
        9 9 9 9 9 9 9 9 9 9 9 9 f b f f b f f b f b b e e e b b b b b f f f b b b f f a a a f f 9 9 9 9 9 9 9 9 7 7 7 9 9 9 9 e 9 7 7 7 9 9 9 9 9 9 7 7 7 9 6 6 e e 9 9 6 7 7 7 6 6 6 6 6 9 9 9 9 6 6 6 9 e e 6 6 e 9 6 6 6 9 9 e 9 6 6 6 9 9 9 9 9 9 9 9 9 9 9 6 6 6 9 e 9 6 6 6 9 9 9 e e 6 6 6 9 9 9 6 6 6 d d e 6 6 6 d e d d e d d 
        9 9 9 9 9 9 9 9 9 9 9 f b b b b b b f b f b b e e b b b b b f b b b f b b b f a a a a f f 9 9 9 9 9 9 9 7 7 7 9 9 9 9 7 7 7 9 e 7 7 7 9 9 9 9 e e 9 9 9 7 7 7 9 e 7 7 7 6 6 6 6 6 e 9 9 9 6 6 6 e 9 6 6 6 e e 9 9 9 9 9 e 9 6 6 6 9 e 9 9 9 9 9 9 9 9 9 6 6 6 9 e 9 6 6 6 e e e e e 6 6 6 e 9 9 6 6 6 6 6 e 6 6 6 d 6 6 6 e d d 
        9 9 9 9 9 9 9 9 9 9 9 f b b b b b b f f f b b e e b b b f f b b b b f b b b f a a a a a f 9 9 9 9 9 9 9 7 7 7 e 9 9 9 7 7 7 9 9 7 7 7 9 9 9 9 e e 9 9 9 7 7 7 6 6 7 7 7 9 9 6 6 6 e e 9 7 7 7 e 7 7 7 9 9 6 6 6 e 9 9 6 6 6 6 6 6 9 e 9 9 b b b b b b b b b 6 6 6 e 6 6 6 d d d d d d d d d e e e d 6 6 6 d e d d d 6 6 6 d e d 
        9 9 9 9 9 9 9 9 9 9 f b b b b b b b f f b e e e b b b f b b b b b b f b f b f f a a a a a f 9 9 9 9 9 9 9 9 9 9 e 9 9 7 7 7 7 7 7 7 7 7 7 7 6 6 e 9 9 6 7 7 7 6 6 6 e 9 e 9 9 9 9 9 e e 7 7 7 e 7 7 7 9 9 6 6 6 9 e e 6 6 6 9 9 9 6 6 6 b d d d d d d d d d 6 6 6 d e d d d d d 6 6 6 d e d 6 6 6 e 6 6 6 d e d d d 6 6 6 d e d 
        9 9 9 9 9 9 9 9 9 9 f b b b b b b f b b b e e e b b b f b b b b b f b b f b f f a a a a a f 9 9 9 9 9 9 9 9 9 9 e 9 9 e 9 9 7 7 7 e 9 7 7 7 6 6 e e 9 6 e 6 9 6 6 6 9 e e 9 9 6 6 6 9 9 7 7 7 e 7 7 7 9 9 6 6 6 9 9 9 6 6 6 e b b 6 6 6 d d d d d d d d d d 6 6 6 d d e e d d d 6 6 6 d e d 6 6 6 d e d d d d e d d d e d d e d 
        9 9 9 9 9 9 9 9 9 9 f b b b b b b f b b b e e e b b b f b b b b b f b f b b f f a a a a a f f 9 9 9 9 9 9 9 9 9 e 9 9 9 e 9 7 7 7 9 e 7 7 7 6 6 7 7 7 6 e 6 9 9 9 9 6 6 7 7 7 7 6 6 7 7 7 6 9 e 9 9 9 e e 9 9 9 9 9 9 9 9 b e d d 6 6 6 d d d d d d d d d d d d d d d d 6 6 6 e 6 6 6 e d d 6 6 6 d d e e d d e 6 6 6 e d d e d 
        9 9 9 9 9 9 9 9 9 9 9 f b b b b b f b b b e e e b b f b b b b b b f b f b f f f a a a a a a f 9 9 9 9 9 9 9 9 9 e 9 9 9 e 9 9 9 9 9 e e 9 e e 9 7 7 7 e e e e 9 7 7 7 6 7 7 7 7 6 6 7 7 7 e e 9 9 6 6 6 9 e 9 9 9 9 9 9 b d e d d e d d d d d d d d d d d d d d d d d d 6 6 6 d d d 6 6 6 d d d d d d d d e e e 6 6 6 e d d e d 
        9 9 9 9 9 9 9 9 9 9 9 f b b b b f b b b b e e e b b f b b b b b f b b f f b f a a a a a a a f 9 9 9 9 9 9 9 7 7 7 9 9 9 e 9 7 7 7 9 9 e 9 9 e e 7 7 7 e 6 e 6 e 7 7 7 6 7 7 7 7 e 9 7 7 7 6 9 9 9 6 6 6 9 e e 9 9 6 6 6 d d e d e d d d d d d d d d d d d d d d d d d d 6 6 6 d d d 6 6 6 d d d d d e d 6 6 6 d 6 6 6 e 6 6 6 d 
        9 9 9 9 9 9 9 9 9 9 9 f b b b b f b b b b e e b b b f b b b b b f b b f f b f a a a a a a a f 9 9 9 9 9 9 9 7 7 7 e e 9 e 9 7 7 7 9 e 9 9 9 9 e 7 7 e e 6 e e e 7 7 7 e e e e e e e e 9 9 9 9 9 9 6 6 6 b e e e b 6 6 6 d d e d e d e d d d d d d d d d d d d d d d d d d d d d d 7 6 6 6 7 7 7 6 6 6 e 6 6 6 d e d d e 6 6 6 d 
        9 9 9 9 9 9 9 9 9 9 9 f b b b b f b b b b e e b b b f b b b b b f b b f b b f a a a a a a a f 9 9 9 9 9 9 9 7 7 7 9 7 7 7 9 7 7 7 9 e 9 9 9 9 e 7 7 9 e 6 e 7 7 7 6 6 e 9 9 9 6 6 6 9 e e 9 9 b b b 6 6 6 d e d e 6 6 6 6 6 6 d e 6 6 6 d d d d d d d d d d d d b b b 7 7 7 7 d d 7 7 7 7 7 7 7 6 6 6 e 6 6 6 d d e d d 6 6 6 d 
        9 9 9 9 9 9 9 9 9 9 9 f b b b b f b b b b e e b b b f b b b b b f b b f b f f a a a a a a a a f 9 9 9 9 9 9 9 9 9 9 7 7 7 e 9 9 e 9 9 9 9 9 7 7 7 7 9 e 9 e 7 7 7 6 6 9 e e 9 6 6 6 9 9 9 e b d d d 6 6 6 d e d e d d d 6 6 6 d e 6 6 6 d d d d d d d d d d b b b 7 7 7 7 7 7 d d 7 7 7 7 7 7 7 6 6 6 d d e d 6 6 6 d d d d e d 
        9 9 9 9 9 9 9 9 9 9 9 f b b b b f b b b f e e b b b f b b b b b f b b f f b f a a a a a a a a f 9 9 9 9 9 9 9 9 9 9 7 7 7 9 e e 7 7 7 9 9 9 7 7 7 e 9 9 e 9 7 7 7 6 6 9 9 9 e 7 7 7 b b d d e 6 6 6 6 6 6 d e d d e d d 6 6 6 e d 6 6 6 d d d d d d d d b b d d d 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d 6 6 6 d e 6 6 6 d d d e d d 
        9 9 9 9 9 9 9 9 9 9 9 9 f b b b b f b f b e e b b b f b b b b b f b b b b b f a a a a a a a a f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 7 7 9 9 9 7 7 7 9 e 9 e 9 9 e e 9 9 9 9 9 e 7 7 7 e e e d d 6 6 6 d d d e 6 6 6 e d d d d d e d d e d d d d b b d b b d d d d d 7 7 7 e d 7 7 7 7 7 7 7 7 7 7 d d 6 6 6 d d 6 6 6 e d 6 6 6 d 
        9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f e b b b f b b b b b f b b b b b f a a a a a a a a f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 7 7 9 e e e 9 9 9 9 e e 9 9 e 9 e e e e 9 b 7 7 7 d d d e e 6 6 6 d d e d 6 6 6 e d d d d e d d e d d d d b d b b d d d d d d d 7 7 7 d e 7 7 7 7 7 7 7 7 7 7 d d 6 6 6 d d e d d e d 6 6 6 d 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f b f e b b f f f f f f b b b b f f b b b f f f a a a a a a a f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 e 9 9 9 9 9 7 7 7 9 e 9 9 e 6 6 9 e e b d e d 6 6 6 d d e d d e d e d 6 6 6 e d d d d 6 6 6 d d d d d b d d d d d d d d d d 7 7 7 d e d d d d d d e 7 7 7 d 7 7 7 d d d e d d e d 6 6 6 d 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f b e e b b b b b b e f f f f f f f f b f f f f a a a a a a a f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 e e 9 9 9 7 7 7 9 e 9 7 7 7 7 7 9 b e e d e 6 6 6 d d e 6 6 6 e d d d d d e d d d e 6 6 6 d d d d b d d d d d d d d d 7 7 7 7 7 7 e d 7 7 7 7 7 e d d d d 7 7 7 d d 6 6 6 d e d d d d d 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f b e e e b f b b b b e f e f b b b b f b b b b f a a a a a a a f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 e 9 9 7 7 7 e e 9 7 7 7 7 7 b 6 6 6 e d 6 6 6 d d d 6 6 6 d e d 6 6 6 e d 6 6 6 6 6 6 d d d d b d d d d d d d d d 7 7 7 7 7 7 e d 7 7 7 7 7 e d d d d 7 7 7 d d 6 6 6 d e 6 6 6 6 6 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f b e e e f b b b b b e e e b b b b b f b b b b b f a a a a a a f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 e 9 9 9 9 9 9 e e 7 7 7 7 7 b 6 6 6 d e e e d d d d 6 6 6 d e d 6 6 6 e d 6 6 6 d d d d d b b d d d d d d d d d d 7 7 7 7 7 7 d e 7 7 7 7 7 e d 7 7 7 d d d 6 6 6 6 6 d d 6 6 6 6 6 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 f b b e e e f b b b b b e e e b b b b b f b b b b b f a a a a a a f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 7 7 9 9 9 9 9 9 9 9 9 e e 9 7 7 7 6 6 d d d e d d 6 6 6 d d d e d 6 6 6 e d 6 6 6 d d d d b d d d d d d d d 7 7 7 d e d d 7 7 7 d e d d d d d e d 7 7 7 d d d 6 6 6 d d 6 6 6 6 6 6 6 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 f b b e e e f b b b b b e e e b b b b b f b b b b f f a a a a a a f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 7 7 e e e 7 7 7 e e e e e e 7 7 7 d d d 6 6 6 e d 6 6 6 d d d e d d d d e d d d e d d d d d d d d d d d d d 7 7 7 d d e d 7 7 7 7 7 d d 7 7 7 e 7 7 7 7 7 7 d 6 6 6 d d 6 6 6 e d d d 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 f b b e e b f b b b b b e e e b b b b b f b b b f b b f a a a a a f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 7 7 9 9 9 7 7 7 9 9 e e e e 7 7 7 d d d 6 6 6 e d 6 6 6 6 6 6 e d d d e d d d e d d d d d d d d d d d d d d 7 7 7 d d e d 7 7 7 7 7 e d 7 7 7 e 7 7 7 7 7 7 d 6 6 6 d d 6 6 6 d e d d 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 f b b e e f f b b b b b e e e b b b b b f b b f b b b f a a a a a f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 7 7 9 b e e e e e d d d d d 6 6 6 d e d d e 6 6 6 e d d d e d d d e 6 6 6 d d d d d d d d d d d d d e d d d e d d 7 7 7 e d 7 7 7 e 7 7 7 7 7 7 d 6 6 6 d d d d d e e d d 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 f b b e e f b f b b b b e e e b b b b f f b b f b b b f a a a a a f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 b b b b d e e e e e d d d d d d d d 6 6 6 d e 6 6 6 d e d d e d d e e 6 6 6 d d d d d d d d d d 7 7 7 e d 7 7 7 e d d d d d e d d e e d e d 7 7 7 d 6 6 6 d 6 6 6 d e e d d 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 f b e e e b f b f b b b e e e b b b f f f b b f b b b f a a a a a f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 b d d d d d e e e e e d d d d d d d d 6 6 6 d e d d d d e d 6 6 6 d e d 6 6 6 d d d d d d d d d d 7 7 7 e d 7 7 7 d e d d d d e d e e d d e d 7 7 7 d d d e e 6 6 6 6 6 6 d d 
        c c c c c c c 9 9 9 9 9 9 9 f b e e b b f b b f f b e e e b f f f f f b b f b b b f a a a a a f c c c c c c c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 b b d d d d d d e e e e e d d d d d d d d 6 6 6 e e d d d d d e 6 6 6 d e d d d d d d d d d d d d d d 7 7 7 e d 7 7 7 d e e 7 7 7 d e d 7 7 7 e d 7 7 7 d d d d e 6 6 6 6 6 6 e d 
        c c c c c c c c 9 c c c 9 9 f b e e b b b f f d d f e e e f b b d d f b b f b b b f a a a a a f c c c c c c c c c c c c c c 9 9 9 9 9 9 9 9 9 b d d d d d d d e e e e e d d d d d d d d d d d d e e e 6 6 6 e 6 6 6 d e 6 6 6 d d d d d d d d d d d d d d e d 7 7 7 d d e 7 7 7 d e d 7 7 7 e d 7 7 7 d e d d d e d d 6 6 6 6 6 
        c c c c c c c c c c c c c c c f e b b b b f f d d d e e e b b f d d d f b b f b b f a a a a a f c c c c c c c c c c c c c c c c c c c 9 9 9 9 b d d d d d d d e e e e e d d d d d d d d d d 6 6 6 e d 6 6 6 d d d d d e 6 6 6 d d d d d d d 7 7 7 d d d d e d 7 7 7 d d e 7 7 7 d d e 7 7 7 e 7 7 7 7 d 6 6 6 d d e e e 6 6 6 6 
        c c c c c c c c c c c c c c c c f b b b b f f d d f e e e b b f f d d f b b f b b f a a a a a f c c c c c c c c c c c c c c c c c c c c c c 9 b d d d d d d d e e e e e d d d d d d d d d d 6 6 6 e d 6 6 6 d d 6 6 6 d 6 6 6 d d d d d d d 7 7 7 d 7 7 7 e d 7 7 7 d d e d 7 7 7 d d e d d e 7 7 7 d d 6 6 6 e e d d d 6 6 6 6 
        c c c c c c c c c c c c c c c c f b b b b f f d f b e f e b b f f d d f b b f b b f a a a a a f c c c c c c c c c c c c c c c c c c c c c c c b d d d d d d d e e e e e d d d d d d d d d d 6 6 6 d e d e d e e 6 6 6 d d d d d d d d d d d 7 7 7 d 7 7 7 d e d 7 7 7 d e d 7 7 7 d d d e d e 7 7 7 e e 6 6 6 d d e d d 6 6 6 d 
        c c c c c c c c c c c c c c c f f b b b f b f f b b b e e b b f f f f b b b b f b f a a a a a f c c c c c c c c c c c c c c c c c c c c c c c c c d d d d d d e e e e e d d d d d d d d d d d d d d e e e e e e 6 6 6 d d d d d d d d d d d d d e d 7 7 7 d e d 7 7 7 d e d 7 7 7 e d d e d 7 7 7 d d d e e d d d d e d d d e d 
        c c c c c c c c c c c c c c c f f f b b f b f f b b b b b b b b b b b b b b b f b f a a a a a f c c c c c c c c c c c c c c c c c c c c c c c d c d d d d d d e e e e e d d d d d d d d d d d d d d e e e e e e d d d d d d d d d d d d d d d d d e d d d 7 7 7 7 7 7 d e d 7 7 7 e d d e e 7 7 7 d d d d e 6 6 6 d 6 6 6 d e d 
        c c c c c c c c c c c c c c c f a f b b f b b b b b b b b b b b b b b b b b b f b f a a a a a f c c c c c c c c c c c c c c c c c d c c c c d d c c c d d d d e e e e e d d d d d d d b b d d d d d e e e e e e d d d d d b b b b b d d d d d d 7 7 7 d d 7 7 7 e d d d e 7 7 7 7 e e d e e 7 7 7 d 6 6 6 e 6 6 6 d 6 6 6 e d d 
        c c c c c c c c c c c c c c f a a f f b b b b b b b b b b b b b b b b b b b b f f a a a a a a f c c c c c c c c c c d c c c c c c c c d d d d c d c c c d d d e e e e e d d d d d d b d d b d d d d e e e e e e d d d d b b b b b b b d d d d d 7 7 7 e d 7 7 7 e d d e d 7 7 7 7 d d e e 7 7 7 d d 6 6 6 e 6 6 6 d 6 6 6 e d d 
        c c c c c c c c c c c c c f a a a a f b b b b b b b b b b b b b b b b b b b f f f a a a a a a f c c c c c c c c c c c c c c c c c c c d d d c d d c c c c c d e e e e e d d d d d b d d d b d b d d e e e e e e d d d d d b b b b b b d d d d d 7 7 7 d e d d d d e e d d 7 7 7 e d d d e 7 7 7 d d 6 6 6 e d e d d d e d e 6 6 
        c c c c c c c c c c c c c f a a a a a f b b b f f b b b b b b b b b b b b f a f f a a a a a a a f c c c c c c c c c c c c c c c c c c d d d d c c c c c c c c e e e e e d d d d b b d d d b b d d d e e e e e e d d d d d d d b d d d d d d d d 7 7 7 d d e e d d d d e d d d d e 7 7 7 7 7 7 7 7 7 7 d d 6 6 6 e d d e d e 6 6 
        c c c c c c c c c c c c c f a a a a a f b b b f b b b b b b b b b b b b f a a f a a a a a a a a a f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c e e e e e d d b b d d d d d d d d d d e e e e e e d d d d d d d d d d d d d d d d 7 7 7 d d 7 7 7 e d d d e e d e d 7 7 7 7 7 7 d 7 7 e e d 6 6 6 e e e d d e 6 6 
        c c c c c c c c c c c c c f a a a a a f f f f f b b b b b b b b b b f f a a a f a a a a a a a a a f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c e e e e e d d d d d d d d d d d d d d e e e e e e d d d d d d d d d d d d d d d d 7 7 7 d d 7 7 7 d e d 7 7 7 e e d 7 7 7 7 7 7 d 7 7 7 e e 6 6 6 d e e d e d d e 
        c c c c c c c c c c c c c f a a a a a f a a f f f f f f f f f f f f f a a a a f a a a a a a a a a f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c e e e e e d d d d d d d d d d d d d d e e e e e e d d d d d d d d d d d d d d d d d d d d d 7 7 7 d d e 7 7 7 d e d d d e d d d e 7 7 7 d e e d 6 6 6 e e d d d e 
        c c c c c c c c c c c c c c f a a a a f a a a a a a a a a a a a a a a a a a a f a a a a a a a a a f c c c c c c c c c c c c c c c c c c c c c c c c c d c c c c c c c e d d d d d d d d d d d d d d 6 6 6 6 6 6 6 6 6 d d d d d d d d d d d d d d d d d d d d 7 7 7 e 7 7 7 7 7 e d d e d d d e 7 7 7 d d e d 6 6 6 d e d 6 6 6 
        c c c c c c c c c c c c c c f a a a f a a a a a a a a a a a a a a a a a a a a f a a a a a a a f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c d d d d d d d d d d d d d 6 6 6 6 6 6 6 6 6 d d d d d d d d b d d d d d b b b d d d 7 7 7 d e d 7 7 7 e d e e d d e d 7 7 7 6 6 6 e 6 6 6 e d d 6 6 6 
        c c c c c c c c c c c c c c c f f a f a a a a a a a a a a a a a a a a a a a a f a a a a f f d d f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d d d d d d d b b d d d b b d d d d d d 7 7 7 d e e 7 7 7 e e e 7 7 7 e 7 7 7 d 6 6 6 d e d e e e e 6 6 6 
        c c c c c c c c c c c c c c f d d d f a a a a a a a a a a a a a a a a a a a a a f a f f d d d d f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d d d b b d d b b b d d d d d d d d d d d d d e d d d e e d 7 7 7 e 7 7 7 d e 6 6 e e e e 6 6 6 d d d 
        c c c c c c c c c c c c c c f d d d f f f f a a a a a a a a a a a a a a a a a a f f d d d d d d f c c c c c c c c c c c c c c c c c c c c c c c c c c c c d c c d c c c c c 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d d d d d d d d d d d d d d 7 7 7 d e e d d e d e 7 7 7 d 7 7 7 d e d e e e e e 6 6 6 d d d 
        c c c c c c c c c c c c c f d d d d f c c f f a a a a a a a a a a a a a a f f f 6 6 f d d d d d f c c c c c c c c c c c c c c c c c c c c c d c c c c c c c c c c c c c c c 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d d d d d d d d d d d d d 7 7 7 7 7 e e e e d e d d d e d d e e e d d e e e e 6 6 d d d d 
        c c c c c c c c c c c c c f d d d d f c c f f f f f a a a a a a f f f f f 6 6 6 6 6 f d d d f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d d d d d d d d d d d d d 7 7 7 7 7 d e e d e d e e e 7 7 7 e e e d d e e e e e d d d d d 
        c c c c c c c c c c c c c c f f f f f c c f 6 6 6 6 f f f f f f 6 6 6 6 6 6 6 6 6 6 6 f f f f c c c c c c c c c c c c c c c c c c c c c d c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d d d d d d d d d d d d d d d 7 7 7 d e e e e d e d d 7 7 7 e e e d d e e e e e d d d d d 
        c c c c c c c c c c c c c c c c c c c c c f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c d c c c c c c c c c 6 6 6 6 6 6 6 6 6 6 6 e e e e 6 6 6 6 6 6 6 6 6 6 6 d d d d d d d d d d d d d d d d d d d e e e e e d d d 7 7 7 e e e d d e e e e e d d d d d 
        c c c c c c c c c c c c c c c c c c c c c c f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 6 d d d d d d d d d d d d d d d d d d d e e e e e d d d d e e e e e d d e e e e e d d d d d 
        c c c c c c c c c c c c c c c c c c c c c c f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c d d c c c c c c c c c c c c c 6 6 6 6 6 6 d d d d d d d d d d d d d d d d d d d e e e e e d d d d e e e e e d d e e e e e d d d d d 
        c c c c c c c c c c c c c c c c c c c c c c f 6 6 6 6 6 6 6 6 6 f f 6 6 6 6 6 6 6 6 6 6 6 f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c d d d c c c c c c c c c c c c c c c c c c c c d d d d d d d d d d d d d d d e e e e e d d d d e e e e e d d e e e e e d d d d d 
        c c c c c c c c c c c c c c c c c c c c c c f f 6 6 6 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 6 6 6 f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c d c c c d d d d d d d d d c c c c c c c c c c c c c c c d d d d d d b b b d d e e e e e d d d d e e e e e d d e e e e e d d d d d 
        c c c c c c c c c c c c c c c c c c c c c c c f 6 6 6 6 6 6 6 6 f 6 f 6 6 6 6 6 6 6 6 6 f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c d d c c c c c c c c c c c c c c c d c c c c c c c c c d d d d d b b b b d d e e e e e d d d d e e e e e d d e e e e e d d d d d 
        c c c c c c c c c c c c c c c c c c c c c c c f 6 6 6 6 6 6 6 6 f 6 f 6 6 6 6 6 6 6 6 6 f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c d d d d d c c c c c c c c c c c c c c c c c c c c d d d d d b b d d d d e e e e e d d d d e e e e e d d e e e e e d d d d d 
        c c c c c c c c c c c c c c c c c c c c c c c f 6 6 6 6 6 6 6 6 f f f f 6 6 6 6 6 6 6 6 f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c d d d d d c c c c c c c c c c c c d c c c c c d d d d d d d d e e e e e d d d d e e e e e d d e e e e e d d d d d 
        c c c c c c c c c c c c c c c c c c c c c c c f 6 6 6 6 6 6 6 6 6 f c f 6 6 6 6 6 6 6 6 f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c d d d d d d d d e e e e e d d d d e e e e e d d e e e e e d d d d d 
        c c c c c c c c c c c c c c c c c c c c c c c f 6 6 6 6 6 6 6 6 6 f c f 6 6 6 6 6 6 6 6 f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c d d d d d d d d e e e e e d d d d e e e e e d d e e e e e d d d d d 
        c c c c c c c c c c c c c c c c c c c c c c c f 6 6 6 6 6 6 6 6 6 f c f 6 6 6 6 6 6 6 6 f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c d d d d d d d d e e e e e d d d d e e e e e d d e e e e e d d d d d 
        c c c c c c c c c c c c c c c c c c c c c c c f 6 6 6 6 6 6 6 6 6 f c f 6 6 6 6 6 6 6 6 f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c d d d d d d d d e e e e e d d d d e e e e e d d e e e e e d d d d d 
        c c c c c c c c c c c c c c c c c c c c c c c f 6 f f f 6 6 f f f f c f 6 6 f f f 6 f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c d d d d d d d d d d e e e e e d 6 6 6 6 6 6 6 6 d d e e e e e d d d d d 
        c c c c c c c c c c c c c c c c c c c c c c c f f f d f f f f f f f c f f f f d f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c d d d d d d d d d d e e e e e 6 6 6 6 6 6 6 6 6 d d e e e e e d d d d d 
        c c c c c c c c c c c c c c c c c c c c c c c f d d d d d d d d d f c f d d d d d d d d f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c d d d d d d d e e e e e 6 6 6 6 6 6 6 6 6 6 6 6 6 6 e e d d d d d 
        c c c c c c c c c c c c c c c c c c c c c c c f d d d d d d d d d f c f d d d d d d d d f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d d d d d 
        c c c c c c c c c c c c c c c c c c c c c c c f d d d d d d d d d f c f d d d d d d d d f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d d d d d 
        c c c c c c c c c c c c c c c c c c c c c c c f d d d d d d d d d f c f d d d d d d d d f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d d d d 
        c c c c c c c c c c c c c c c c c c c c c c c f d d d d d d d d d f c f d d d d d d d d f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d d d d 
        c c c c c c c c c c c c c c c c c c c c c c c f d d d d d d d d f f c f d d d d d d d d f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d d d d 
        c c c c c c c c c c c c c c c c c c c c c c c f d d d d d d d d f c c f d d d d d d d f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d d d d 
        c c c c c c c c c c c c c c c c c c c c c c c f d d d d d d d d f c c f d d d d d d d f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d d d d 
        c c c c c c c c c c c c c c c c c c c c c c c f d d d d d d d d f c c f d d d d d d d f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 e e d d d 6 6 6 6 6 6 d 6 6 6 6 6 6 6 d d d d 
        c c c c c c c c c c c c c c c c c c c c c c c f d d d d d d d d f c c f d d d d d d d f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
        c c c c c c c c c c c c c c c c c c c c c c c f d d d d d d d d f c c f d d d d d d d f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
        c c c c c c c c c c c c c c c c c c c c c c c f d d d d d d d d f c c f d d d d d d d f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
        `)
    game.showLongText("¡No puedo esperar más! Ire por ti Mery....    Listo ya empaque todo lo que nesecitare. Gatito cuida la casa esta bien.   ", DialogLayout.Bottom)
    scene.setBackgroundImage(img`
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        `)
    game.showLongText("Te encontrare Mary, se que lo hare!! ..... Es pero que sirva de algo mi voz!!  ", DialogLayout.Bottom)
    game.splash("Nivel 1")
    tiles.setTilemap(tiles.createTilemap(hex`5a001c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000270000000000000000000000000000000000000000000000131500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002900000000000000000000000f0b2727000000000000000000000000000000000000000000001400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000029000000000000000000000f0b021c1c1926000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000290000000000000000000f0b0b02181919191909260000000018191919191909000000000000000000181919190900000000000000000000000000000000000000000000000000000000000000000000000000000000000000002900000000000000000f0b0b0802272727272719190900000027272727272727090000000001001819020202021819191919191919090000000000000000000f292929292929100000000000000000000000000000000000000029000f0703070303070b0b0b0802272727272727271919190927020202020202271919190900001702020202020202020202020202020900000000000000292929220808082429292910000f2929292929292929100000000000290f070308080807080b0b0b08021b1b272727272727272727270d00000000000e0202020d00000e17020202020202020202020202020202090000000000110b0b0b0b0b0808242929292929292929220808080808100029292929080807080307080808080808021b1b000000000000000e270d0000000000000000000000000000272727270e02280202020202280202020d0000000000000000110b0b0b08081e1e1e1e1e1e1e1e080808080808081000000f29030303030308070808080808021b1b2600000000000000000000000000000000000000000000252727272727270e02020202020202020d000000000000000000000b0b0b0b0303030808080808080808080808030708100f0829030303070807080808080808081b1b1b260000000000000000000000000000000000000000251b270619192627272727272727272727000000000000000000000011030303030303030303030303030303030307292929292929030307030808080807080303021b1b1b1b00000000000000000000251b1c260000000000251c1b270202061919191926272727272700000000000000000000000000110303030303030303030303030303030729221e1e1e1e0a0303030808080808030303030302021909000000000000000000251b1c1c1b26000000251c1b1b27020202020202021919191919191919260000000000000000000000000011030303030303030303030307292216120011030a0b0808070b0807080b03031a1a02020219090000000000000000181919191919191919191919190606060606060606060602280202021819191919191919090000000000000000000011080808080729292929161200000f080a0b0b0b0b242408030303071a1a280202020900000000000000000e02020202020202020202020202020202020202020202020202020202020202020202022929292929290000000000002929292929292929120000000f0808080b0724240404220303031a1a02020202021900000000000000000000000000000000000000000000000000000000000000000e0228020202020202280202110b0808081f290000000000110b0b0b0b0b0b120000000f08080808082404050521230303031a1a0202020d0e020000000000000000000000000000000000000000000000000000000000000000000e0202020202020202020d00110b0b08081f2900000000000000000000000000000f080808080824040405210c23220b031a1a02020d00000000001919190900000000000000000000000000000000000000000000000000000000000000000000000000000000000000110b29290000000000000000000000000f0808080808240405052120202322031a1a1a0202000000000000000202061919090000000000001819191919191919191909000000000000000000000000000000000000000000000000111f2929000000000000000000000f082929292929292929292929292929292929291a022c2d0000000000002802020202191919190000191902020228022802020d00000000000000000000000000000000000000000000000000111f292929290000000000000f29291a1a1a1a1a1a1a1a1a1a1a1a1a2e2e2f2f1a1a0230302d2c302d0000000000000000000000000000000000000000000000000000001806060609000000000000000000060606060910000000110b08080b00000000000f29291a2a2a2a2a2a2a2a2a2a2a2f2f2e2f2f2f2e1a1a02302b2b2b2f2f2d0000002c2e30302e2d000000000000000000002c2f302d000000000000000000000000000000180606020202292910000000000000000000000f29291a1a2a2a2a2a2a2a2a2a2e2e2f2b2b2f2f3030301a1a02022b302f2b2f2f2d002c2f2f302f2f2f2e3030302d000000002c2b302b2f2d00002c2e2f302f2e2e2d180606060602020202020229081000000000000000000f291a1a2a2a2e2e2e2a2a2a2e2e3030302b2b302f2f2f2f1a1a02022f2b2f2b302b2b2f2b302b2b2f2b302b2b2f2b2b302d002c2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b1b1b1b1b1b0202280202021d2908100000000000000f29291a2a2a2e2e2b2f2e2f2e2b302b302b2b2b2f2f2f2f2f2f1a02022b2b2f2f2b2b2b302f2f2b302b2f2f2b2b2b2f2f2b2b2d06060606060606060606060606060606061b1b0202020202020202021d292929100000000000291a1a2a2a2e2b30302b2b2b2b2b2b2b2b2b2b2b302f2f2f301a1a0202060606060606060606060606060606060606060606060606060202020202020202020202020202020202020202020202020203081e1d0a07100000000f2a2a2a2a2e2b30302b2b2b0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a02280202020202020202020202020202020202020202020202020202020202020202022802020202020202020202020202020202020808081d292929292c2e2e302f2b2b2b2b0a0a0a0a1e1e1e1e1e1e1e1e1e1e1e1e1e1e1e1e0202020202020202280202020202020202020202020202280202020202020202020202020202020202020202022802020202020308080808081e1e1e1e0a0a0a0a0a0a0a0a0a1e1e1e1e1e080808080808080808030303030303`, img`
        . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . 2 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . 2 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . 2 
        2 2 2 2 2 2 . . . . . 2 2 2 2 2 2 2 . . . . . . . . . 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . 2 
        2 2 2 2 2 2 2 2 . . . . . . . . . . 2 . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . 2 
        2 2 2 2 2 2 2 2 2 2 2 . . . . . . . 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 2 . . . . . . 2 . . . . . . . . . . . . 2 
        2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . 2 2 . . . . 2 . . . . . . . . . . . . 2 2 2 2 . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 . . . . . . . . 2 2 2 2 . . . . . . . . . . . . 2 
        2 2 . . . . . . . 2 2 . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . 2 
        2 2 . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . 2 
        2 2 . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 . . . . . . . . . . . . 2 
        2 2 . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . 2 . . . . . . . . . . . . 2 
        2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . 2 . . . . . . . . 2 2 2 2 2 
        2 2 2 2 2 . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . 2 2 2 2 . . . . . . 2 . . . . . . 2 2 2 2 2 2 2 
        2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . 2 2 2 2 2 2 2 
        2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 
        2 . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 . 2 
        2 . . . . 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 
        2 . . . . 2 2 2 2 2 2 2 2 2 . . . . . . 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 . . . . . . . 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 . . . . . . . . . 2 2 2 2 2 . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `, [myTiles.transparency16,myTiles.tile12,myTiles.tile11,myTiles.tile2,myTiles.tile6,myTiles.tile10,myTiles.tile15,myTiles.tile19,myTiles.tile26,myTiles.tile28,myTiles.tile31,myTiles.tile14,myTiles.tile43,myTiles.tile17,myTiles.tile18,myTiles.tile20,myTiles.tile23,myTiles.tile24,myTiles.tile44,myTiles.tile46,myTiles.tile48,myTiles.tile49,myTiles.tile35,myTiles.tile16,myTiles.tile27,myTiles.tile30,myTiles.tile32,myTiles.tile58,myTiles.tile59,myTiles.tile21,myTiles.tile22,myTiles.tile38,myTiles.tile50,myTiles.tile53,myTiles.tile54,myTiles.tile55,myTiles.tile60,myTiles.tile61,myTiles.tile62,sprites.builtin.brick,myTiles.tile64,myTiles.tile65,myTiles.tile40,myTiles.tile120,myTiles.tile121,myTiles.tile122,myTiles.tile123,myTiles.tile124,myTiles.tile125], TileScale.Sixteen))
    PREMIO12 = sprites.create(img`
        . . . . . . . f f f . . . . . . . . 
        . . . . . . f f d d f . . . . . . . 
        . . . . . f d f d d d f . . . . . . 
        . . . . f d d f d d d d f . . . . . 
        . . . f d d d f d d d d d f . . . . 
        . . f d d d d f d d d d d d f . . . 
        . f 3 d d d d f 3 3 d d d d d f . . 
        f 3 3 d d d d f 2 2 3 d d d d 3 f . 
        f 3 3 3 d d d d 2 2 2 3 d d d 3 3 f 
        f 3 3 3 3 d d d 2 2 2 3 3 3 3 3 3 f 
        . f 3 3 3 3 d 3 3 3 f f f f f f f f 
        . . f 3 3 3 3 3 3 3 3 3 3 3 3 3 f . 
        . . . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . . . . f 3 3 3 3 3 3 3 3 3 f . . . 
        . . . . . f 3 3 3 3 3 3 3 f . . . . 
        . . . . . . f 3 3 3 3 3 f . . . . . 
        . . . . . . . f 3 3 3 f . . . . . . 
        . . . . . . . . f f f . . . . . . . 
        `, SpriteKind.Premio_1)
    enemigo = sprites.create(img`
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . f f f f f f . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . f f d d d d d d f f . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . f d d d b b b b b b b f . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . b d d b b b b d d b b b b f . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . b d d b b b d d d d b b b f . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . b d d d b b d d d d d d b b b f . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . b b b b b b d d d d d d b b b f . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . b d d d d d d d d d d d d b b f f . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . d d d d d d d d f f f f f b f b b f . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . d f f f f f f f f f f f f f b f b d d f . . . . . . . . . . . . . . . 
        . . . . . . . . . . . b f f f f f f f f f f f f d b f b d d f . . . . . . . . . . . . . . . 
        . . . . . . . . . . . b f f f f f f f f f f f f d b f b d d f . . . . . . . . . . . . . . . 
        . . . . . . . . . . . b f f f f f f f f d d d d d b f b b f . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . d d d d d d d d d b b b b b f f f . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . b b b b b b b b b b b f f f . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . f f f f b b b b b f f f f f f f . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . b b b b b b b f f f f f f b b f f . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . f f f f f f f d f b b b b f . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . f d f f f f f d f b d d d f f f . . . . . . . . . . . . 
        . . . . . . . . . . . f f f f f . f d d d d d f b f b d d f d d b d f . . . . . . . . . . . 
        . . . . . . . . . . f 5 5 5 f f f f b b b b b f b b d d d f f f b d d f . . . . . . . . . . 
        . . . . . . . . . . f f f f f 5 5 f b b f b b f d d d d b b f f f f d f . . . . . . . . . . 
        . . . . . . . . . . f 5 5 5 f 5 5 f b b f b 5 f d d b b b b f . . f f f f f f . . . . . . . 
        . . . . . . . . . . f f f f f 5 5 f b b f f 5 f d b b 5 b b f . . . f f f 5 5 5 . . . . . . 
        . . . . . . . . . . f 5 5 5 f f f f f f f f f f f f b b 5 f f . . . f 5 f 5 5 5 . . . . . . 
        . . . . . . . . . . f f f f f f f f f f . f b f f f b b 5 f f f . . f f f 5 5 5 . . . . . . 
        . . . . . . . . . . f f 5 5 5 f f f f . . f 5 5 5 5 b b f 5 f f . . f 5 f f f f . . . . . . 
        . . . . . . . . . . . f f f f f f f . . . f 5 f f f b f 5 5 f b f . f 5 5 5 f . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . f 5 f 5 f f f f f d b b f f f f f . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . f f 5 f f f b b b d d b b f . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . f b d 5 5 5 5 f f f d d d f f f f . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . f f f d d d . f . . . f d f b b b f f . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . f f f d d d f . . . . f f b d d b b b f . . . . . . . . 
        . . . . . . . . . . . . . . . . . . f f f f f f f . . . . . f d d d b b b f . . . . . . . . 
        . . . . . . . . . . . . . . . . . f b b b f f f . . . . . . f d d d d b b b f . . . . . . . 
        . . . . . . . . . . . . . . . . . f b b b b b f . . . . . . f b d d d b b b f f . . . . . . 
        . . . . . . . . . . . . . . . . f b d b b b b f . . . . . . . f d d b f f f f f f . . . . . 
        . . . . . . . . . . . . . . . f f f f f b b f f . . . . . . . f b b f f f f f f f f . . . . 
        . . . . . . . . . . . . . . f f f f b b b b f . . . . . . . . . f f f b b b b b b f f . . . 
        . . . . . . . . . . . . . f f f f b d d d b f . . . . . . . . . f b b b b b b b b f f f . . 
        . . . . . . . . . . . f f b b d d d d d b b f . . . . . . . . . . f b b d d d d d b b f f . 
        . . . . . . . . . . . f b b b b b b b b b f f . . . . . . . . . . f b d d d d d d d b b f . 
        . . . . . . . . . . . f f f f f f f f f f f f . . . . . . . . . . f f f f f f f f f f f f . 
        `, SpriteKind.Enemy)
    enemigo.setVelocity(-145, 0)
    enemigo.setPosition(1160, 40)
    lapiz = sprites.create(img`
        . . . . . . . . . . . . . . . f . . . . . . 
        . . . . . . . . . . . . . . f 3 f . . . . . 
        . . . . . . . . . . . . . f 3 3 3 f . . . . 
        . . . . . . . . . . . . f 3 3 3 3 3 f . . . 
        . . . . . . . . . . . f 1 b 3 3 3 3 3 f . . 
        . . . . . . . . . . f 5 f 1 b 3 3 3 3 3 f . 
        . . . . . . . . . f 5 5 5 f 1 b 3 3 3 3 3 f 
        . . . . . . . . f d 5 5 5 5 f 1 b 3 3 3 f . 
        . . . . . . . f d 5 5 5 5 5 5 f 1 b 3 f . . 
        . . . . . . f 5 5 5 5 5 5 5 5 5 f 1 f . . . 
        . . . . . f 5 5 5 5 5 5 5 5 5 5 d f . . . . 
        . . . . f 5 5 5 5 5 5 5 5 5 5 d f . . . . . 
        . . . f d 5 5 5 5 5 5 5 5 5 5 f . . . . . . 
        . . f d 5 5 5 5 5 5 5 5 5 d f . . . . . . . 
        . f d 5 5 5 5 5 5 5 f 5 d f . . . . . . . . 
        f 4 4 5 5 5 5 5 5 f 5 d f . . . . . . . . . 
        f 4 4 4 5 5 5 5 f 5 d f . . . . . . . . . . 
        f f 4 4 4 5 5 f 5 d f . . . . . . . . . . . 
        f f f 4 4 4 5 5 d f . . . . . . . . . . . . 
        f f f f 4 4 4 d f . . . . . . . . . . . . . 
        f f f f f 4 4 f . . . . . . . . . . . . . . 
        f f f f f f f . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    microfono = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . b b b b b b . . . . . 
        . . . . b b b b b b b b . . . . 
        . . . b b b b b b b b b b . . . 
        . . . b b b b b b b b b b . . . 
        . . . d d d d d d d d d d . . . 
        . . . b b b b b b b b b b . . . 
        . . . b b b b b b b b b b . . . 
        . . . . d d d d d d d d . . . . 
        . . . . . b b b b b b . . . . . 
        . . . . . . f d d f . . . . . . 
        . . . . . . f d d f . . . . . . 
        . . . . . . f d d f . . . . . . 
        . . . . . . f d d f . . . . . . 
        . . . . . . f d d f . . . . . . 
        . . . . . . f d d f . . . . . . 
        . . . . . . f d d f . . . . . . 
        . . . . . . f f f f . . . . . . 
        `, SpriteKind.Food)
    lapiz.setPosition(155, 88)
    PREMIO12.setPosition(1231, 266)
    microfono.setPosition(449, 266)
    info.startCountdown(40)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Prima_Nº1.isHittingTile(CollisionDirection.Bottom)) {
        Prima_Nº1.vy = -150
    }
})
controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {
    animation.setAction(Prima_Nº1, ActionKind.Parada)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.setAction(Prima_Nº1, ActionKind.Izquierda)
    direccion = 0
})
function createPrima2 () {
    Prima2TiempoCaminar = 100
    prima2 = sprites.create(img`
        . . . . . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . 
        . . . . . . . . . f f f f f f f f f f f c c c f f f f f f f f f f f f f f f f f f f c c f f f f f f f f . . . . . . . . . . . . 
        . . . . . . . f f f f f f c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f c c c c c f f f f f f . . . . . . . . . . 
        . . . . . . f f f f c c c c c f f c c c c c c c c c c c c c c c c c c c c f f f f f f c f c c c c c f f f f f . . . . . . . . . 
        . . . . . f f f c c c c c c f f f f f f f f f c f f f f f f f f f f f f f f f f f f f f f c c c c c c c f f f f . . . . . . . . 
        . . . . f f f c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c f f f . . . . . . . 
        . . . f f f c f c c c c c f f f f f f f f f f f f f f f f f f f c b f f f f f c b c c c e e e e e e c c c c c f f . . . . . . . 
        . . . f f f f c c c c c c f f f f f f f f f f f f f f f f f f f c d c f f f f c d d d d d c c e e e c c c c c f f f . . . . . . 
        . . f f f f c c c c c c f f f f f f f f f f f f f f f f f f f f c d c f f f f c d d d d d d e e c c c c c c c c f f . . . . . . 
        . . f f c c c c f f f f f f f f f f f f c c f c c f f f f f f f b d b f c c f c d d d d d d d 2 e c c c c c c c f f . . . . . . 
        . . f f c c c c f f f f f f f f f f f f b c f c b f f f f f f f d d d c c b f b d d d d d d d e c c c c c c b c f f f . . . . . 
        . . f f c c f f f f f f c f f f f f f f b b c c d b b b b b b b d d d d d d b b d d d d d d d b f c c c c c c c c f f . . . . . 
        . . f f c c f f f f f f b c c c c b c c d d d d d d d d d d d d d d d d d d d d d d d d d d d b c c c c c c c c c f f . . . . . 
        . . f f c c f f f f f f b d b b e c c c f c c b d d d d d d d d d d d d b c f f f c c e e b d b c c c c c c c c c f f . . . . . 
        . . f f c c f f f f f f c b e b d c f f f f f b d d d d d d d d d d d d d c f f f f f d d c e b c c c c f b b c c f f . . . . . 
        . . f f c f f f f f f f c d d d d d e e e c b d d d d d d d d d d d d d d b b e e c b d d d d b c c c c c b b c c f f . . . . . 
        . . f f c c f f f f f f f f b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c c c c c c c c b c f f . . . . . 
        . . f f f b c f f f f f f f f b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c f f c c c c c f c f f f . . . . . 
        . . . f f c c f f f f f f f f f c d d d d d d d d d d d d d d d d d d d d d d d d d d d b c f f c c c f f f f f f f . . . . . . 
        . . . f f f f c f f f f f f f b c c b d d d d d d d c c c c c c b c b d d d d d d b c f f f f f c c c c f f f f f . . . . . . . 
        . . . . f f f f f f f f c f f d . b f c b d d d d d b c c c c c c c d d d d d b f f b d . d f f c f f f f f f f f . . . . . . . 
        . . . . . . f f f f f f c b f b . . d c f c c b e c b b d d d d d d d d c f f c b . . . . b f f c f f f f f f . . . . . . . . . 
        . . . . . . f f f f f f f f f f d . . . d c f f c c c f f c b b c f f f f c d . . . . . d f f b c f f f . . . . . . . . . . . . 
        . . . . . . . . . . f f f f f f c c c c f f f e 4 4 4 b e f f f e e 4 4 e f f c c b b b c c f f f f f . . . . . . . . . . . . . 
        . . . . . . . . . . . . f f f f c f f c c c c e 4 4 4 2 2 4 4 2 4 4 4 4 e c c f f f f f c c f f f f . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . f f f f c c c c c c c e e e 2 2 b d 2 2 e e e c c c c c c f f f f f f . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . f f f c c c c c c c c c c c c b b c c c c c c c c c c c c f f f f . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . f f f f f c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f . . . . . . . . . . . . . . . 
        . . . . . . . . . . . f f f f c b f f c c c c c c c c c c c c c c c c c c c c c c c f f b c f f f f . . . . . . . . . . . . . . 
        . . . . . . . . . . . f f c c d d c f c c c c c c c c c c c c c c c c c c c c c c f f c d d d b f f f . . . . . . . . . . . . . 
        . . . . . . . . . . f f c d d d d e f f f f f f f f f f f f c c c c f f f f f f f c f c d d d d b f f f . . . . . . . . . . . . 
        . . . . . . . . f f f f b d d d c f c c f f f f f f f f f f f f f f f f f f f f f c f f f b d d d b f f f f . . . . . . . . . . 
        . . . . . . . . f f c d d d d d f f c c f f f f f f f f f f c c c c f f f f f f f c f f f c d d d d d c f f . . . . . . . . . . 
        . . . . . . . f f c d d d d d c f f c c c c c c c c c c c c c c c c c c c c c c c c c f f f e d d d d d f f f . . . . . . . . . 
        . . . . . . . f f b d d d b c f f f c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f b d d d b f f . . . . . . . . . 
        . . . . . . f f f d d d b f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f e d d d c f f . . . . . . . . 
        . . . . . . f f b d d c f f f c c c c c c f c c c c c c c c c c c c c c c c c c c c c c c f f f f f f b d d f f f . . . . . . . 
        . . . . . f f f d d c f f f f c c f c c f f f f f f f f f f f f f f f f f f f f f f f f c c f f f f f f b d d f f f . . . . . . 
        . . . . f f f b d d e f f f c c c c c c c c c c c c f f c c f f c c f c c c c c c c c c c c f f f f f f b d d d f f f . . . . . 
        . . . f f f b d d b f f f c b c f c f f c f f f f c c c f f f f c c c f f c c c f c c c c c f f f f f f f c d d b f f f . . . . 
        . . f f f c d d c f f f c c e f c f f f f f f f f c f f f f f f f f f f f f c c f f f c f c c c f f f f f f f b b b f f f . . . 
        . . f f c 3 c f f f c c c e c c f f f f f f f f f f f f f c f f f f f f f f f f f f f f c f f f f f f f f f f f f b b f f f . . 
        . f f c d f f f f f c f c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e f f . . 
        . f f c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c e b e f f f f f f f f f . . . f f f f f f . . 
        . f f f f f f . . f f f f f f f f f b b d d d d d 3 b e f f f f f b 3 d d d d d d 3 e f f f f f f f f f . . . . . f f f f . . . 
        . . f f f . . . . . . . . . f f f f f b d d d d d 3 3 f f f f f f b d d d d d d d e f f f . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . f f f c d d d d d 3 b f f . . f f c d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . f f f f e c c c e e c f f . . f f f e e e b e e e f f f . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . f f f f f f f f f f c f f . . f f f f f f f f f f c f f . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . f f c c c c c c c f c f f . . f f e c c c c c c c c f f . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . f f c c c c c c c f c f f . . f f c f c c c c c c c f f . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . f f c c c c c c f c f f . . f f c c c c c c c c f f f . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . f f f c c c c c c c f f . . f f f c c c c c c c f f . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . f f c c c c c c f f . . . . f f c c c c c c f f f . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . f f f c c c c c f f . . . . f f c c c c c c f f . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . f f f c f f f f f f f . . f f f c f f f c f f f . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . f f f f f f f f f f f . . f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . f f f e c c c c c f f . . f f c e c c c c c f f f . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . f f f c f f c f c e f f f f f f c b f f c f c c f f f f . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . f f c e c f f f f c f f f f f c b e c f f f f f f f f f . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . f f c e e c c c c f f f b f f f c e e c c c c f f c c c f . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . f f f c f f f f f f f f c f f f f c f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f . f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . 
        `, SpriteKind.Premio_Final)
    prima2Derecha = animation.createAnimation(ActionKind.prima2Derecha, Prima2TiempoCaminar)
    prima2Izquierda = animation.createAnimation(ActionKind.prima2Izquierda, Prima2TiempoCaminar)
    prima2Idle = animation.createAnimation(ActionKind.prima2Idle, Prima2TiempoCaminar)
    prima2Escalar = animation.createAnimation(ActionKind.prima2Escalar, Prima2TiempoCaminar)
    prima2Jumping = animation.createAnimation(ActionKind.prima2Jumping, Prima2TiempoCaminar)
    prima2Idle.addAnimationFrame(img`
        . . . . . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . 
        . . . . . . . . . f f f f f f f f f f f c c c f f f f f f f f f f f f f f f f f f f c c f f f f f f f f . . . . . . . . . . . . 
        . . . . . . . f f f f f f c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f c c c c c f f f f f f . . . . . . . . . . 
        . . . . . . f f f f c c c c c f f c c c c c c c c c c c c c c c c c c c c f f f f f f c f c c c c c f f f f f . . . . . . . . . 
        . . . . . f f f c c c c c c f f f f f f f f f c f f f f f f f f f f f f f f f f f f f f f c c c c c c c f f f f . . . . . . . . 
        . . . . f f f c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c f f f . . . . . . . 
        . . . f f f c f c c c c c f f f f f f f f f f f f f f f f f f f c b f f f f f c b c c c e e e e e e c c c c c f f . . . . . . . 
        . . . f f f f c c c c c c f f f f f f f f f f f f f f f f f f f c d c f f f f c d d d d d c c e e e c c c c c f f f . . . . . . 
        . . f f f f c c c c c c f f f f f f f f f f f f f f f f f f f f c d c f f f f c d d d d d d e e c c c c c c c c f f . . . . . . 
        . . f f c c c c f f f f f f f f f f f f c c f c c f f f f f f f b d b f c c f c d d d d d d d 2 e c c c c c c c f f . . . . . . 
        . . f f c c c c f f f f f f f f f f f f b c f c b f f f f f f f d d d c c b f b d d d d d d d e c c c c c c b c f f f . . . . . 
        . . f f c c f f f f f f c f f f f f f f b b c c d b b b b b b b d d d d d d b b d d d d d d d b f c c c c c c c c f f . . . . . 
        . . f f c c f f f f f f b c c c c b c c d d d d d d d d d d d d d d d d d d d d d d d d d d d b c c c c c c c c c f f . . . . . 
        . . f f c c f f f f f f b d b b e c c c f c c b d d d d d d d d d d d d b c f f f c c e e b d b c c c c c c c c c f f . . . . . 
        . . f f c c f f f f f f c b e b d c f f f f f b d d d d d d d d d d d d d c f f f f f d d c e b c c c c f b b c c f f . . . . . 
        . . f f c f f f f f f f c d d d d d e e e c b d d d d d d d d d d d d d d b b e e c b d d d d b c c c c c b b c c f f . . . . . 
        . . f f c c f f f f f f f f b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c c c c c c c c b c f f . . . . . 
        . . f f f b c f f f f f f f f b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c f f c c c c c f c f f f . . . . . 
        . . . f f c c f f f f f f f f f c d d d d d d d d d d d d d d d d d d d d d d d d d d d b c f f c c c f f f f f f f . . . . . . 
        . . . f f f f c f f f f f f f b c c b d d d d d d d c c c c c c b c b d d d d d d b c f f f f f c c c c f f f f f . . . . . . . 
        . . . . f f f f f f f f c f f d . b f c b d d d d d b c c c c c c c d d d d d b f f b d . d f f c f f f f f f f f . . . . . . . 
        . . . . . . f f f f f f c b f b . . d c f c c b e c b b d d d d d d d d c f f c b . . . . b f f c f f f f f f . . . . . . . . . 
        . . . . . . f f f f f f f f f f d . . . d c f f c c c f f c b b c f f f f c d . . . . . d f f b c f f f . . . . . . . . . . . . 
        . . . . . . . . . . f f f f f f c c c c f f f e 4 4 4 b e f f f e e 4 4 e f f c c b b b c c f f f f f . . . . . . . . . . . . . 
        . . . . . . . . . . . . f f f f c f f c c c c e 4 4 4 2 2 4 4 2 4 4 4 4 e c c f f f f f c c f f f f . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . f f f f c c c c c c c e e e 2 2 b d 2 2 e e e c c c c c c f f f f f f . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . f f f c c c c c c c c c c c c b b c c c c c c c c c c c c f f f f . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . f f f f f c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f . . . . . . . . . . . . . . . 
        . . . . . . . . . . . f f f f c b f f c c c c c c c c c c c c c c c c c c c c c c c f f b c f f f f . . . . . . . . . . . . . . 
        . . . . . . . . . . . f f c c d d c f c c c c c c c c c c c c c c c c c c c c c c f f c d d d b f f f . . . . . . . . . . . . . 
        . . . . . . . . . . f f c d d d d e f f f f f f f f f f f f c c c c f f f f f f f c f c d d d d b f f f . . . . . . . . . . . . 
        . . . . . . . . f f f f b d d d c f c c f f f f f f f f f f f f f f f f f f f f f c f f f b d d d b f f f f . . . . . . . . . . 
        . . . . . . . . f f c d d d d d f f c c f f f f f f f f f f c c c c f f f f f f f c f f f c d d d d d c f f . . . . . . . . . . 
        . . . . . . . f f c d d d d d c f f c c c c c c c c c c c c c c c c c c c c c c c c c f f f e d d d d d f f f . . . . . . . . . 
        . . . . . . . f f b d d d b c f f f c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f b d d d b f f . . . . . . . . . 
        . . . . . . f f f d d d b f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f e d d d c f f . . . . . . . . 
        . . . . . . f f b d d c f f f c c c c c c f c c c c c c c c c c c c c c c c c c c c c c c f f f f f f b d d f f f . . . . . . . 
        . . . . . f f f d d c f f f f c c f c c f f f f f f f f f f f f f f f f f f f f f f f f c c f f f f f f b d d f f f . . . . . . 
        . . . . f f f b d d e f f f c c c c c c c c c c c c f f c c f f c c f c c c c c c c c c c c f f f f f f b d d d f f f . . . . . 
        . . . f f f b d d b f f f c b c f c f f c f f f f c c c f f f f c c c f f c c c f c c c c c f f f f f f f c d d b f f f . . . . 
        . . f f f c d d c f f f c c e f c f f f f f f f f c f f f f f f f f f f f f c c f f f c f c c c f f f f f f f b b b f f f . . . 
        . . f f c 3 c f f f c c c e c c f f f f f f f f f f f f f c f f f f f f f f f f f f f f c f f f f f f f f f f f f b b f f f . . 
        . f f c d f f f f f c f c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e f f . . 
        . f f c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c e b e f f f f f f f f f . . . f f f f f f . . 
        . f f f f f f . . f f f f f f f f f b b d d d d d 3 b e f f f f f b 3 d d d d d d 3 e f f f f f f f f f . . . . . f f f f . . . 
        . . f f f . . . . . . . . . f f f f f b d d d d d 3 3 f f f f f f b d d d d d d d e f f f . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . f f f c d d d d d 3 b f f . . f f c d d d d d d d f f f . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . f f f f e c c c e e c f f . . f f f e e e b e e e f f f . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . f f f f f f f f f f c f f . . f f f f f f f f f f c f f . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . f f c c c c c c c f c f f . . f f e c c c c c c c c f f . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . f f c c c c c c c f c f f . . f f c f c c c c c c c f f . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . f f c c c c c c f c f f . . f f c c c c c c c c f f f . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . f f f c c c c c c c f f . . f f f c c c c c c c f f . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . f f c c c c c c f f . . . . f f c c c c c c f f f . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . f f f c c c c c f f . . . . f f c c c c c c f f . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . f f f c f f f f f f f . . f f f c f f f c f f f . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . f f f f f f f f f f f . . f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . f f f e c c c c c f f . . f f c e c c c c c f f f . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . f f f c f f c f c e f f f f f f c b f f c f c c f f f f . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . f f c e c f f f f c f f f f f c b e c f f f f f f f f f . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . f f c e e c c c c f f f b f f f c e e c c c c f f c c c f . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . f f f c f f f f f f f f c f f f f c f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f . f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . 
        `)
    prima2Derecha.addAnimationFrame(img`
        . . . . . . . . . . . . . f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . 
        . . . . . . . . . f f c c c c c c c c c c c f f f c c f f f f . . . . . . . . . . . . . . . 
        . . . . . . . . f c c c c c c c c c c c c c c f f c c c c c f f f . . . . . . . . . . . . . 
        . . . . . . . f c f f f f f c c c f c c c c c c c f f f f f f f f f . . . . . . . . . . . . 
        . . . . . . f c c c f f f f f f f f f f f c c c c f f f f f f f f f . . . . . . . . . . . . 
        . . . . . f c c c c c f f f f f f f f f f f c c f f f f f f f c f f f . . . . . . . . . . . 
        . . . . f c c c c c c f f f f f f f f f f c f f f f f f f f f c f f f f . . . . . . . . . . 
        . . . . f c c c c c c f f f f f f f f f f f f f f c f f f f c b c f f f . . . . . . . . . . 
        . . . . f c c c c c c f f f f f f f f f f f f f f b c f b b d d d f f f . . . . . . . . . . 
        . . . . f c c c c c c c f f f f f f f f f f f f f c f f e d d d c f f f . . . . . . . . . . 
        . . . . f c c c c c f f f f f f f f f f f f f f f b c e d d d b c f f . . . . . . . . . . . 
        . . . . f f f f f f f f f f f f f f f f f f f f f b d d d d d d c f f . . . . . . . . . . . 
        . . . . f f f f f f f f f f f f f f f f f f f f f c d d d d d d d f f . . . . . . . . . . . 
        . . . . . f f f f f f f f f f f f f f e e c f c f f d d d b c c c f f . . . . . . . . . . . 
        . . . . . . f f f f f f f f f f c b b 3 b b c c b c c d d d b f c f f . . . . . . . . . . . 
        . . . . . . . f f f f f f f f f f c b d d 3 e f f c f e e e f f c f f . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . f f c c b b e e e f f f f f f f f f f . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . f f f f c c c e 4 e f . . . . f f f . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . f f f f f c c c c c c c f . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . f f f f f f b c f c c c c c f . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . f c d d d b f c f f f f f c c c f . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . f f d d d c f f f f f f f f c c f . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . f b d d b f c c c f f f f f c f . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . f d d d b f c c c c c c c c c f . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . f b d d c c c c c c c c c c c f . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . f c d d d f f c c c c f f c c c f . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . f f b d d d b f f c c c c c f f c f f . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . f c d d d d d b c f f f f f c c c c c f . . . . . . . . . . . . . . . 
        . . . . . . . . . . f c c d d d d c f c f f f f f f f f c f f . . . . . . . . . . . . . . . 
        . . . . . . . . . . . f c b b b b f f f f f f f f f f f f f . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . f f f c c b b b b c e e b c f f . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . f b d d d d d f b d b f . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . f c d d d d b e d d f . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . f b d d d b f b d f . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . f f f f f f f f f c f . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . f c c c c f f c c f . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . f c c c c f f c c f . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . f c c c f f c c f . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . f c c f f c c f . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . f c c c f f f c f f f . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . f f c c c c c f f f f f f f f . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . f f f f f f c c f f f f f f f f f f . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . 
        . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . 
        . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . 
        `)
    prima2Derecha.addAnimationFrame(img`
        . . . . . . . . . . . . . f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . f f f f f c c c f c f f f f f f f f f f f . . . . . . . . . . . . . . 
        . . . . . . . . . f f f f c c c c c c c c c c c f f f c f f f f f . . . . . . . . . . . . . 
        . . . . . . . . f f f c c c c c c c c c c c c c c f f c c c c f f f . . . . . . . . . . . . 
        . . . . . . . f f c c c f f f f f c c c c c c c c c c f f f f f f f f . . . . . . . . . . . 
        . . . . . . . f f c c c c f f f f f f f f f f f c c c f f f f f f f f f . . . . . . . . . . 
        . . . . . . f f c c c c c c f f f f f f f f f f c c c f f f f f f f f f . . . . . . . . . . 
        . . . . . . f f c c c c c c f f f f f f f f f f c f f f f f f f c f f f . . . . . . . . . . 
        . . . . . . f f c c c c c c f f f f f f f f f f f f f f f f f c c f f f . . . . . . . . . . 
        . . . . . . f f c c c c c c f f f f f f f f f f f f c b c c c d c f f f . . . . . . . . . . 
        . . . . . . f f c c c c c c f f f f f f f f f f f f c c f e d d f f f . . . . . . . . . . . 
        . . . . . . f f c c c c c c f f f f f f f f f f f f c c c d d b f . . . . . . . . . . . . . 
        . . . . . . . f f f f f f f f f f f f f f f f f f f f d d d d d c f . . . . . . . . . . . . 
        . . . . . . . f f f f f f f f f f f f f f f f f f f f b d d d d d f . . . . . . . . . . . . 
        . . . . . . . . f f f f f f f f f f f f f f c f f f f c d d b b f . . . . . . . . . . . . . 
        . . . . . . . . . f f f f f f f f f f c c e b e f c c c d d c c f . . . . . . . . . . . . . 
        . . . . . . . . . . . . f f f f f f f b d d 3 e f f c f e b c c c f . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . f f c c c b b e e f f f f f f f . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . f c c b b c f f e 4 e f . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . f c c d 1 1 d b c c c f . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . f c c c b 1 1 c f f c c c f . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . f c c f b c c d b f c c f . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . f f f f f f b d b f c f . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . f f f f f f f e d d c c f f . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . f f c c c c c c f f f c b d b c f f f . . . . . . . . . . . 
        . . . . . . . . . . . . . . . f c c c c c c c c c c c c f c b d d d b f . . . . . . . . . . 
        . . . . . . . . . . . . . . . f c c c c c c c c c c c c f f f b d d d c f . . . . . . . . . 
        . . . . . . . . . . . . . f f c c c c c c c c c c c f c f f . f c b d b f . . . . . . . . . 
        . . . . . . . . . . . . f c c b c c c c c c c c c c f c c f . . f f e f . . . . . . . . . . 
        . . . . . . . . . . . . f c c f c c c c f c f f f f f f f f . . . . f . . . . . . . . . . . 
        . . . . . . . . . . . . . f f f f f c c f c f f f f f f f f . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . f 3 b e f f f f f f f f f f f . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . f c d d d d b c f f f f c e f . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . f f d d d d d c f f b b 3 d c f . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . f f f f b d c f f f f c e e e f f . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . f c c c f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . f c c c c f f f . . . . f f f c c c f . . . . . . . . . . . . . . . . . . 
        . . . . . . . . f f c c c f f f . . . . . . f c c c c f . . . . . . . . . . . . . . . . . . 
        . . . . . . . f f f c c c f f . . . . . . . . f c c c f f . . . . . . . . . . . . . . . . . 
        . . . . . . f f f c c c f f . . . . . . . . . . f c c c f f . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f c f . . . . . . . . . . . f f f f f f f f f f . . . . . . . . . . . . 
        . . . . . f f f f f f f f f . . . . . . . . . . f c f f f f f f f f f f . . . . . . . . . . 
        . . . . . f f f f f f f f f f f . . . . . . . . . f f f f f f f f f f f . . . . . . . . . . 
        . . . . . . f f f f f f f f f f f . . . . . . . . . . f f c c f f f f f . . . . . . . . . . 
        . . . . . . . . f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        `)
    prima2Derecha.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . f f c c c c c f f f f f f f f f f . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . f c c c c c c c c c c f c f f f f f f f . . . . . . . . . . . 
        . . . . . . . . . . . . . . f c c c c c c c c c c c c c c f c c c f f f . . . . . . . . . . 
        . . . . . . . . . . . . f c c c c c f f c f c c c c c c c c c f f f f f . . . . . . . . . . 
        . . . . . . . . . . . f c c c c c c c f f f f f f f f f c c c f f f f f f . . . . . . . . . 
        . . . . . . . . . . . f c c c c c c c c f f f f f f f f f c c f f f f f f . . . . . . . . . 
        . . . . . . . . . . f c c c c c c c c c f f f f f f f f f c f f f f f f f . . . . . . . . . 
        . . . . . . . . . . f c c c c c c c c c f f f f f f f f f c f f f f f f f . . . . . . . . . 
        . . . . . . . . . . f c c c c c c c c c f f f f f f f f f f f c f f c f f . . . . . . . . . 
        . . . . . . . . . . f c c c c c c c c c f f f f f f f f f f f c c c f f f . . . . . . . . . 
        . . . . . . . . . . . f c c c c c c c c c f f f f f f f f f f f b f . . . . . . . . . . . . 
        . . . . . . . . . . . f f f f c c c c f f f f f f f f f f f f e d c f . . . . . . . . . . . 
        . . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f b d d c f . . . . . . . . . . 
        . . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f c d d c f . . . . . . . . . . 
        . . . . . . . . . . . . . f f f f f f f f f f c f f f e c f c c d c f . . . . . . . . . . . 
        . . . . . . . . . . . . . . . f f f f f f c b b b e e e e f b c b f . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . f c b b c f f f f f f f f f . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . f f c c c c c e f f . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . f f f f f c c c c f f . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . f f f f f f c c c c c f . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . f b b c f f f b c f c c f . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . f c d d d b f c c f f f f f . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . f b d d c f f f f f f f f f f . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . f c d c c f c c c f c c f f c f . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . f d b c b f c c c f c c c c c f . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . f b d c d f c c c c c c c c c c f . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . f b d d c d f f f f f c c c c f c f . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . f b d d d c b c c c c c c c c c c c f . . . . . . . . . . . . . . . 
        . . . . . . . . . . . f d d d e e b c c f c c c c c c c c c f . . . . . . . . . . . . . . . 
        . . . . . . . . . . . f b b b f f e c c f c c c c c f f f f f . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . f f f . . f f f f f c f c c f f f f f . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . f f f f f f f f c e f . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . f e b b b b c d d d d f . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . f f f b 3 b f f d d d d f . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . f f f f f f f f c c c f . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . f f f c f f . f f f c c c f . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . f f f c f f . . . f c c c c f . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . f f f c c f . . . . . f f c c c f . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . f f f f f f f . . . . . . f c c f . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . f f f f f f f f f . . . . . . f c c f f f f f . . . . . . . . . . . 
        . . . . . . . . . . . . f f f f f f c f f f . . . . . f f f f f f f f f f . . . . . . . . . 
        . . . . . . . . . . . . f f f f f f f f f f f . . . . f f f f f f f f f f f . . . . . . . . 
        . . . . . . . . . . . . . . f f f c f f f f f f . . . f f f f f f f f f f f . . . . . . . . 
        . . . . . . . . . . . . . . . . f f f f f f f f . . . . f f f f f f f f . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . f f f f f . . . . . f f f f f . . . . . . . . . . . . . 
        `)
    prima2Escalar.addAnimationFrame(img`
        . . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . 
        . . . . . . . . . f f f f f c c c c c c c c c c c c c f c f f f f f . . . . . . . . . . . . 
        . . . . . . . f f f f f c c c c c c c c c c c c c c c c c c c f f f f . . . . . . . . . . . 
        . . . . . . f f f c c c c c c c c c c c c c c c c c c c c c c c c f f f . . . . . . . . . . 
        . . . . . f f c b c c c c c c c c c c c c c c c c c c c c c c c c c f f f . . . . . . . . . 
        . . . . . f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f . . . . . . . . . 
        . . . . . f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f . . . . . . . . 
        . . . . f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f . . . . . . . . 
        . . . . f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f . . . . . . . . 
        . . . . f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f . . . . . . . . 
        . . . . f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f . . . . . . . . 
        . . . . f f c c c c c c c c c c f c f f f f f f f f f c f c c c c c c c f f . . . . . . . . 
        . . . . f f b c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f . . . . . . . . . 
        . . . . f f f f f f f f f f f f f f f f f f f f f f f f f c f f f f f f f . . . . . . . . . 
        . . . . . f f f c f f f c f e e c c c c c c c c c c c e f f f f f f f f f . . . . . . . . . 
        . . . . . . f f f f f c f f f f c f c c c c c c c c f f f f c f f f f f . . . . . . . . . . 
        . . . . . . . f f f f c f f f f f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . 
        . . . . . . . . . . f f f f f c c c c c c c c c c c c c f f f f . . . . . . . . . . . . . . 
        . . . . . . . . . f f f c f f f f f f f f f f f f f f f f c f f . . . . . . . . . . . . . . 
        . . . . . . . . f f f b d c f f f f f f f f f f f f f f f b b f f . . . . . . . . . . . . . 
        . . . . . . . . f f c b d b f f f f f f f f f f f f f c c b d c f f . . . . . . . . . . . . 
        . . . . . . . . f f f c c c f f f f f f f f f f f f f c f c c f f f . . . . . . . . . . . . 
        . . . . . . . f f f b 3 e f f f f f f f f f f f f f f f f b d c f f . . . . . . . . . . . . 
        . . . . . . . f f 3 3 3 f f c f f f f f f f f f c c c c f e 3 3 e f f . . . . . . . . . . . 
        . . . . . . f f b 3 b c f f c c f f f f c c c c c c c c f f b 3 3 f f . . . . . . . . . . . 
        . . . . . . f c 3 e f f f c c c c c c c c c c c c c c c c f f e 3 c f . . . . . . . . . . . 
        . . . . . f f b b f f f f c f f f f f f f f f f f f f f f c f f b b f f . . . . . . . . . . 
        . . . . f f e 3 b f f f e c c c f c f f c c f c c f c c c c f f b 3 e f f . . . . . . . . . 
        . . . f f e b c f f f e e f f f f c f c c c f c c f f c f c c f f e 3 c f . . . . . . . . . 
        . . f f c e f f f f c e f f f f f f f f c c c f f f f f f c f f f f c b f f . . . . . . . . 
        . . f f e f f f f f f f f f f f f f f f f f f f c c f f f f f f f f f c c f . . . . . . . . 
        . . f f f f . f f f f f f f b 3 3 3 3 e f f c 3 3 3 3 3 e f f f f f f f f f . . . . . . . . 
        . . . . . . . . . . . f f f f 3 3 3 3 c f f f b 3 3 3 e f f f . . . . f f . . . . . . . . . 
        . . . . . . . . . . . . . f f 3 3 3 3 f f f f b b b b f f f . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . f f e b b e f f f f f f f f c f f . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . f c f c f f f f f f c f f c c f f . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . f c f f f f f f f f c f f f c f f . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . f f c f f c f f f f f f f f f f f . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . f f f f f c f . . f f c f c f f . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . f f c f c f f . f f c f f f . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . f f c f f f f f f f f f f e f f . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . f f f f f c f f e f f c c f f e c f . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . f f c c c c f f f f c c c f f f f f . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        `)
    prima2Izquierda.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . c f f f f f f f f f f f f c c . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . f f f c f f f c c c c c c c c c c c c f . . . . . . . . . . 
        . . . . . . . . . . . . . . f c c c c c c f f c c c c c c c c c c c c c f c . . . . . . . . 
        . . . . . . . . . . . . . f f f f f f f f c c c c c c c f c c f f f f f c c f . . . . . . . 
        . . . . . . . . . . . . f f f f f f f f c c c c f f f f f f f f f f f f c c c f . . . . . . 
        . . . . . . . . . . . f f f c f f f f f f c f c f f f f f f f f f f f c c c c c f . . . . . 
        . . . . . . . . . . . f f f c f f f f f f f f c c f f f f f f f f f f c c c c c c c . . . . 
        . . . . . . . . . . . f f c c c f f f f c f f f f f f f f f f f f f f c c c c c c c . . . . 
        . . . . . . . . . . . f c d d d b c f e b f f f f f f f f f f f f f f c c c c c c c . . . . 
        . . . . . . . . . . . b c b d d b c f f c f f f f f f f f f f f f f c c c c c c c c . . . . 
        . . . . . . . . . . . d f c b d d d e c c f f f f f f f f f f f f f f c c c c c f . . . . . 
        . . . . . . . . . . . . f b d d d d d d c f f f f f f f f f f f f f f f f f f f f . . . . . 
        . . . . . . . . . . . . c d d d d d d d f f f f f f f f f f f f f f f f f f f f . . . . . . 
        . . . . . . . . . . . . f b c c d d d b f c c f c e c f f f f f f f f f f f f . . . . . . . 
        . . . . . . . . . . . . f c f d d d d c c b f e b b b b b c f f f f f f c . . . . . . . . . 
        . . . . . . . . . . . . f c f c e e e f c f f b d d d b f f . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . c f . . . . . . f e e b b b c c f f f . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . c . . . . . c e 4 e e c c c f f c c f f . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . c f c c c c c c c c 1 1 1 1 c . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . f c c c c c c f c c c c c c c c . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . c f c c c f f f f f c f b d d b f . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . b f c c f f f f f f f f c d d b f . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . b f c f f f f f c c f f d d d c . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . c c c c c c c c c c f b d d b b . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . f c c c c c c c c c f c d d e c . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . f c c f f f c c c f f f d d b f . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . c c f f f c c c c f f c b d d d c . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . b c c c c c c c f c f f c d d d d d b c . . . . . . . . . . . . 
        . . . . . . . . . . . . . . f f f f f f f f f f f f c f c d d d b c f . . . . . . . . . . . 
        . . . . . . . . . . . . . . . b f f f f f f f f f f f f f b b b b f f f . . . . . . . . . . 
        . . . . . . . . . . . . . . . . c f c f c b e c e b b b e c c f f c . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . f d d e c d d d d d c c . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . b c d d f b d d d d f . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . c d b c d d d d c f . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . c c f f c c c c c f . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . f c c f c c c c c c . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . f c c f c c c c f . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . f c c f f c c f . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . d . f f c f f c c c f . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . c f f f f f f c c c c f . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . c f f f f f f f f f c f f f c c . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . f f f f f f f f f f f f f f f c f . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . c f f f f f f f f f f f f f f c c . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        `)
    prima2Izquierda.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . . . . b b c c c c c c c c b . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . b c f f f f f f f c f c c c f f c . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . c f f f c f f f c c c c c c c c c c c f c . . . . . . . . . . . 
        . . . . . . . . . . . . . c f c c c c f f c c c c c c c c c c c c c c f . . . . . . . . . . 
        . . . . . . . . . . . . f f f f f f f c c c c c c c c c c f f f f f c c f . . . . . . . . . 
        . . . . . . . . . . . c f f f f f f f c c c f f f f f f f f f f f c c c c . . . . . . . . . 
        . . . . . . . . . . . f f c f f f f f c c c f f f f f f f f f c c c c c c c . . . . . . . . 
        . . . . . . . . . . b f f c f f f f f f f c f f f f f f f f f c c c c c c c . . . . . . . . 
        . . . . . . . . . . b f f c c f f f f f f f f f f f f f f f f c c c c c c c c . . . . . . . 
        . . . . . . . . . . . c f b b c c c b f f f f f f f f f f f f c c c c c c c c . . . . . . . 
        . . . . . . . . . . . . c c d d c f c f f f f f f f f f f f c c c c c c c c c . . . . . . . 
        . . . . . . . . . . . . c c d d b f c f f f f f f f f f f f f f c c c c c c . . . . . . . . 
        . . . . . . . . . . . . c c d d d d b f f f f f f f f f f f f f f f f c c f . . . . . . . . 
        . . . . . . . . . . . . f d d d d d c f f f f f f f f f f f f f f f f f f . . . . . . . . . 
        . . . . . . . . . . . . c c b b d d c f f f f c f f f f f f f f f f f f f . . . . . . . . . 
        . . . . . . . . . . . . c f c c d d f c c f b b c c f f f f f f f f . . . . . . . . . . . . 
        . . . . . . . . . . . . c c f b b c f c f f b d d d b f c c . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . c f b b . . . f e e b b c c f f f f . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . b b . . . . f e e e f f c b b c c f . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . c c e f c b d d d d c c c . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . f c c f f f b d d b f c f d . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . c c c c c d d c c c f c c c . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . c f f c d d b f f f f f f . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . f c b d b c f f f f f f f . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . c c c c c c d d e f f f c c c c c c f f . . . . . . . . . . . . . . . . . 
        . . . . . . . . c f c d d d d b f f c c c c c c c c c c c f . . . . . . . . . . . . . . . . 
        . . . . . . . . d c c d d d c c f c c c c c c c c c c c c c c . . . . . . . . . . . . . . . 
        . . . . . . . . f c d d b c b d c c f f c c c c c c c c c c f c . . . . . . . . . . . . . . 
        . . . . . . . . c f c c c . . f f c c c c c c c c c c c c c c c f . . . . . . . . . . . . . 
        . . . . . . . . . . b b . . . . f f f f f f f c f c c c c c f e c c . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . f f f f f f f c f c f f f f f . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . f f f f f f f f f c b 3 b c . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . c b c f f c f e d d d d d c c . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . c b d b b e c c e d d d d b f f . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . c c e e e c f c . . e d e f f c f . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . c f f f f f f . . . . f f c c c c f . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . f c c c f f f . . . . . f f c c c c . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . f c c c c f . . . . . . . f c c c c c . . . . . . . . . 
        . . . . . . . . . . . . . . . . . c c c c f f . . . . . . . . . f c c c f . . . . . . . . . 
        . . . . . . . . . . . . . . . . c f c c c f . . . . . . . . . . . f c c c f . . . . . . . . 
        . . . . . . . . . . . b c f f f f f f f f b . . . . . . . . . . . f c f f f f . . . . . . . 
        . . . . . . . . . . f f f f f f f f f f f b . . . . . . . . . c f f f f f f f . . . . . . . 
        . . . . . . . . . . f f f f f f f f f f f c . . . . . . . . f f f f f f f f f . . . . . . . 
        . . . . . . . . . . . c c f f c c f f f f . . . . . . . c f f f f f f f f c . . . . . . . . 
        . . . . . . . . . . . . . d d d d d d d . . . . . . . . c f f f f f c f . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        `)
    prima2Izquierda.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . . . b b c c c c c b b . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . c f f f f f f f c c c c f c . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . c f f f f c c c c c c c c c c c c f . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . f c c f f c c c c c c c c c c c c c c f . . . . . . . . . . . . . . 
        . . . . . . . . . . . f f f f c c c c c c c c c f f f f c c c c c . . . . . . . . . . . . . 
        . . . . . . . . . . f f f f c c c f f f f f f f f f f c c c c c c f . . . . . . . . . . . . 
        . . . . . . . . . b f f f f c c c f f f f f f f f f c c c c c c c c f . . . . . . . . . . . 
        . . . . . . . . . c f f f f f f f f f f f f f f f f c c c c c c c c f . . . . . . . . . . . 
        . . . . . . . . . c f f f f f f c f f f f f f f f f c c c c c c c c f . . . . . . . . . . . 
        . . . . . . . . . b f c f f c f f f f f f f f f f f c c c c c c c c f . . . . . . . . . . . 
        . . . . . . . . . . b f c c c f f f f f f f f f c f c c c c c c c c f . . . . . . . . . . . 
        . . . . . . . . . . . . c c f f f f f f f f f f c c c c c c c c c c f . . . . . . . . . . . 
        . . . . . . . . . . . c b d c f f f f f f f f f f f c c c f c f f f c . . . . . . . . . . . 
        . . . . . . . . . . f b d d c f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . 
        . . . . . . . . . . c b d d c f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . 
        . . . . . . . . . . . c b d f c f c e f f f c f f f f f f f f . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . f b c b f e e e b b b b f f . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . f f f f f f f f f c b c f . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . f c . . . e e c c c c f f c . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . c e c c c f b b c f f . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . c c c c c c b 1 1 d c f . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . c c c c f c b f b c c b c c . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . c c f f f f c c c b d d d c b . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . d f c f f f f f f f f c d d c b . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . c c f c c c f c c c c c b d f . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . c c c c c c f c c f f d c d b c . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . f c c c c c c c c c f c b b d c b . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . d f c c c c c f f f f f f d c d d c c . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . d f c c c c c c c c c c c c c d d d b c . . . . . . . . . . . . 
        . . . . . . . . . . . . . . d f c c c c c c c c c c c c b c b d d b c . . . . . . . . . . . 
        . . . . . . . . . . . . . . b f f f f f c c c c c f c c c f c b b c c . . . . . . . . . . . 
        . . . . . . . . . . . . . . . c f f f c c c f c f f f f f . . f f c . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . c f e f f f f f f f f f f . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . c d d d b c b b b b c f . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . c d d d 3 f c b b e f f f . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . f c c c c f c f f f f f f f . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . f c c c f f . c f f c f f f . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . c c c c c f f . . . f c c f f . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . f c c c f f . . . . . f c c f f . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . f f c c f f . . . . . . f c f f f c . . . . . . . . . . . . . 
        . . . . . . . . . . . . b c f f c c f . . . . . . . . f f f f f f c . . . . . . . . . . . . 
        . . . . . . . . . . f f f f f f f f c . . . . . . f f c f f f f f f . . . . . . . . . . . . 
        . . . . . . . . . f f f f f f f f f . . . . . . f f f f f f f f f f . . . . . . . . . . . . 
        . . . . . . . . . f f f f f f f f f . . . . . f f f f f c . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . b c c f f f f . . . . . f f f f c c . d . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        `)
    prima2Jumping.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f f f f . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . f f f f c c c c c c c f c f f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . . . . f f f c c c c c c c c c c c c f c c c f f f f . . . . 
        . . . . . . . . . . . . . . . . . . f f f c c c c c c f c c c c c c c c c c f c c f f f . . 
        . . . . . . . . . . . . . . . . . f f c c c c c c f c f f f f c c f c c c c c f f f f f . . 
        . . . . . . . . . . . . . . . . f f c c c c c c c c c f f f f f f f f f f c c c f f f f f . 
        . . . . . . . . . . . . . . . . f f c c c c c c c c c c f f f f f f f f f c c c f f f f f . 
        . . . . . . . . . . . . . . . . f c c c c c c c c c c c f f e b b f f f f f f f f f f f f . 
        . . . . . . . . . . . . . . . f f c c c c c c c c c c c c f b 3 3 f f f f c f f f f f f f . 
        . . . . . . . . . . . . . . . f f c c c c c c c c c c c c f b d d b e f f f f c c f f f f . 
        . . . . . . . . . . . . . . . . f c c c c c c c c c c c c f b d d b f f f f f c b f f f f . 
        . . . . . . . . . . . . . . . . f f c c c c c c c c c c c f b d b f f f f f f f e f f f . . 
        . . . . . . . . . . . . . . . . f f c c c c c f c c c d b f 3 d e f f f f f f c d f f . . . 
        . . . . . . . . . . . . . . . . f f f f f f f f f f f c c c d d e f f f f f f c d c f f . . 
        . . . . . . . . . . . . . . . . . f f f f f f f f f f f f e d d c f f c f f f c d d b f f . 
        . . . . . . . . . . . . . . . . . f f f f f f f f f f f f e d d f f c b f f f f b b f f . . 
        . . . . . . . . . . . . . . . . . . f f f f f f f f c c c e d d c c b b b f c f c f f f . . 
        . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f b d e f c e e c b b f f f . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . f f f f b c f f c f f f f c c f f f . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . f f f b b b b b f f f f f f f f f . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . f f c c c 6 b b f e f f f f f f . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . f f f b a 6 b b f c f f f . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . f f c c b b b c f f c f f f . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . f f c f f f f f f f f c f f . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . f f c f f f f f f f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . f f c f f f f f f f c f f . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . f f f f c c c c c c c c c f f . . . . . . . 
        . . . . . f f f f f f f . . . . . . . . . . . f f f f c c c c c c c c c c f f . . . . . . . 
        . . . . f f f f f f f f f f f f . . . . . . . f f c c c c c c c c c c c c c f . . . . . . . 
        . . . . f f f f f f f f f f f f f f f f f f f f f f c f c c c f f c c f c f f . . . . . . . 
        . . . f f f f f f f c c c c f f f f f f f f f f f f f f f f f f f f c c c f f f . . . . . . 
        . . f f f f f f f f f f f f c c c c c c c f c e d b f c c c f f f f f f f f f f . . . . . . 
        . . f f f f f f f f f f f f f c c c c c c f d d 3 3 c f c c c c c c f f f f f . . . . . . . 
        . f f f f f f f f f f f f f f f f c c c f c d 3 3 3 b f f c f f c f f f f f . . . . . . . . 
        . f f f f f f f f f f f f f f f f f f f f e 3 3 b b b e f f f f f f f f f . . . . . . . . . 
        . . f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f . . . . . . . . . . 
        . . . . f f f f f f f f f f f f f f . . . f f f f f . f f f f f f f . . . . . . . . . . . . 
        . . . . f f f f f f f f f f . . . . . . . . . . . . . . . f f f . . . . . . . . . . . . . . 
        . . . . . f f f f f c f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . f f f f c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        `)
    animation.attachAnimation(prima2, prima2Idle)
    animation.attachAnimation(prima2, prima2Jumping)
    animation.attachAnimation(prima2, prima2Derecha)
    animation.attachAnimation(prima2, prima2Izquierda)
    animation.attachAnimation(prima2, prima2Escalar)
    prima2Limite = 900
    prima2X = prima2Limite
    prima2Direccion = 1
    prima2.x = prima2Limite
    prima2.y = 130
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Premio_1, function (sprite, otherSprite) {
    otherSprite.destroy()
    enemigo.destroy()
    info.stopCountdown()
    game.setDialogTextColor(0)
    game.setDialogFrame(img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 f f f f f f f f f f f f f f 1 
        1 f 1 1 1 1 1 1 1 1 1 1 1 1 f 1 
        1 f 1 f f f f f f f f f f 1 f 1 
        1 f 1 f f f f f f f f f f 1 f 1 
        1 f 1 f f f f f f f f f f 1 f 1 
        1 f 1 f f f f f f f f f f 1 f 1 
        1 f 1 f f f f f f f f f f 1 f 1 
        1 f 1 f f f f f f f f f f 1 f 1 
        1 f 1 f f f f f f f f f f 1 f 1 
        1 f 1 f f f f f f f f f f 1 f 1 
        1 f 1 f f f f f f f f f f 1 f 1 
        1 f 1 f f f f f f f f f f 1 f 1 
        1 f 1 1 1 1 1 1 1 1 1 1 1 1 f 1 
        1 f f f f f f f f f f f f f f 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `)
    game.showLongText("Keysi ayudame estoy secuestrada, estoy en un lugar muy oscuro salvame!!!", DialogLayout.Top)
    Nivel_2()
})
info.onCountdownEnd(function () {
    game.over(false)
    music.wawawawaa.play()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.EnemyWoman, function (sprite, otherSprite) {
    EnemyWomanLife += -1
    if (EnemyWomanLife == 0) {
        sprite.destroy()
        otherSprite.destroy()
    } else {
        sprite.destroy()
        otherSprite.say("jaja")
    }
    music.wawawawaa.play()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.setAction(Prima_Nº1, ActionKind.Derecha)
    direccion = 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Premio_Final, function (sprite, otherSprite) {
    info.stopCountdown()
    game.setDialogTextColor(0)
    game.setDialogFrame(img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 f f f f f f f f f f f f f f 1 
        1 f 1 1 1 1 1 1 1 1 1 1 1 1 f 1 
        1 f 1 f f f f f f f f f f 1 f 1 
        1 f 1 f f f f f f f f f f 1 f 1 
        1 f 1 f f f f f f f f f f 1 f 1 
        1 f 1 f f f f f f f f f f 1 f 1 
        1 f 1 f f f f f f f f f f 1 f 1 
        1 f 1 f f f f f f f f f f 1 f 1 
        1 f 1 f f f f f f f f f f 1 f 1 
        1 f 1 f f f f f f f f f f 1 f 1 
        1 f 1 f f f f f f f f f f 1 f 1 
        1 f 1 f f f f f f f f f f 1 f 1 
        1 f 1 1 1 1 1 1 1 1 1 1 1 1 f 1 
        1 f f f f f f f f f f f f f f 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `)
    game.showLongText("Mary que bueno que estas bien te extrañe muchisimo", DialogLayout.Top)
    game.showLongText("Siempre juntas a la distancia nada ni nadie nos podra separar", DialogLayout.Top)
    game.over(true, effects.confetti)
    music.stopAllSounds()
})
function Nivel_2 () {
    game.splash("Nivel 2")
    tiles.setTilemap(tiles.createTilemap(hex`28003200060c061e0505060606060606061e1e060e0f1414141414141414141414141414141414141414141406070c0d0605061e05060506050605050d0e0f100a13131003030a0a130a130a0a0a140a140a14140607110c0d05050505050505051e050605050e0f100a100a0a13030a130a0a130a140a0a13141314060707110c0d0506050505050505060d061e060e0f0a0a0a0a0a0a03100a130a0a13100a0a130a1406070711110c0d0505051e0505060d060505050e090f0a0a100a0a130a0a100a0a100a0a100a0a140607070711110c060505060d1c1c1c1c1c1c1c1c1c1d0f0a0a0a0a0a0a0a0b0b0b0b0b0b0b0b0b0b1c1c1c1c1c1c1c1c1c1c1c1c1c121d121212121d1c1c1c0f0a0a100a0a0b120a1413130a0a0a141412121212121d12121d12121212121d121d1212121212120f0a0a0a0a0b121514131315130a130a1412121d121d1d121212121d1212121212121212121d12120f0a100a0a14120a130a140a0a0a1415141212121212121212121d1212121212121212121d1d120f0a0a0a0a0b1314130a0a130a1313131414021d121212121212121212121212121212121212120f0b0b0b0b0b0b13130a130a0a0a0a0a1313130212121d1212121212121212121212121d1d1212120f0a140a1315130a0a0a0a0a150a100a15130a021c1c1c1c1c1c1c1c1c1d121212121d1212121212120f130a0a0a0a0a140a100a130a140a0a150a01010106060606060e1c1d1d1212121c1c1c1c1c1c1c1c0a0a0a0a150a0a0a130a0a0a130a0a130a011e01011e06061e060e1c1212121d0f0a0a0a130a0a0a0a0a0a0a0a0a0a0a0a130a0a0a0a150a0a1e01010101010101010e1c1c121d1d120a130a0a0a0a100a0a100a0a0a0a0a140a100a0a0a13150a010101060606060601011e06161212120f0a0a0a0a130a0a0a0a0a0a0a0a0a0a0a140a0a0a0a130a0101010606060106060101060616121d1d0f0a150a0a0a0a15150a0a0a150a0a0a130a150a0a0a0a1e0101060606060606010101011c1c1c120f0a0a0a0a0a0a0a150a0a0a130a0a0a0a0a130a0a150a010101060606060606011e010106061c1d0f0a0a100a0a0a0a130a0a100a0a0a0a150a0a0a0a130a01011e01011e011e011b1c1c0106061c1c1c1c1c1c1c1c0a0a0a0a0a0a0a150a0a0a0a100a100a0a041c1c1c1c1c1c1c1c1c1c18011e010e140a13130a141c100a0a0a150a0a0a0a100a0a0a0a100a0a191909090909090909090909180d0d0e130a0a0a0a0a141c0a0a0a150a0a0a0a0a150a0a1510100a090909090909090909090909091818090f0a0a15100a0a140a100a130a0a0a0a150a130a0a130a0a09090909090909090909090909090909090f0a0a150a0a101c1c0a0a0a0a0a15150a0a0a100a150a0909090909090909090909090909090909090f1315150a0a141c0a0a0a100a130a13100a1015130a0909090909090909090909090909090909090f0a130a0a0a0a0a0a0a0a0a0a0a0a0a101510100a0a0909090909090909090909090909090909090f0a0a150a0a0a0a0a0a150a1010101010131510100a09090909090909090909090909041c1c1c1c1c0a0a0a0a0a100a0a0a130a15151515100a1315150a09090909090909041c1c1c1c1c1c1c0f0a0a150a0a0a0a0a0a0a0a0a0a0a15130a1310100a130a0a040909090909041c191212121212121d0f0a0a0a0a150b0b0b0b0b0b0b0b0a0a0a0a1410100a130a0404040404041c19121d091d12121212120f0a0a0a1c1514130a130a140a0a0a0a0a0a15100a0a0a1c1c1c1c1c1c19120909090909090912121d0f0a0a1c1c0a0a0a0a0a130b0b0b0a10130a1410100a1912121212121209091d090909091d1c1c1c1c1c1c1c0a130a0a100a0a0a140a0a0a0a0a1315150a121d121d120909090909090909091c1c1c15140a130a0a0a0a150a0a0a130a0b0b0b150a0a0a140a12121d12120909090909090904121c150a13130a0a1912121d12121d0f0a0a0a140a150a0a130a0a1d1212121209090909090909041c1c140a0a0a0a19121d1212121212120f0a0a130a0a0a0a0a0a0a041d121212090909090909091d03030a150a0a19121d09090909090909120f0a0a0a150a0a0a150a1c1c1c1c1c0909090909091212030a130a0a190909091d09090909091d09121d0f0a0a150b0b0b0b1c121d12120909090912121d1d030a0a0a1912090909091816161609121d0912120a15031a0711071c1d121d0909091d121c1c1c1c0a130a0a12121d091616171e081e0e0909091d1d030303071111111c121d09090909121d1c0a0a0a130a19191209091608081e0808081e0e091d12031a0711111107071c121d090912121d1c1c1514130a191212091616081e080808080808080e09031a111111111107071c1d090904121d1c1c15140a0a1909121d09180808080808080808080803030311110707111107071c121d121d1d1c1c1c150a130a191d12090918081e08080808081e0303031a1111111111110707071c121d1d1c1c1c1c1c15150a0a0a19121209181e08080808080303031a11111111110707111107071c1c1c1c1c1c1c1c1c15150a150a0a09120918171e08081e081a11111111111111110711110707071c1c1c1c1c1c1c1c1c1515150a0a0a191212181e080808081a1111111107110707110711071107071c1c1c1c1c1c1c1c1c151515150a0a0a091d1817170d0d1a111111071111110707110707071107071c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c`, img`
        . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . 2 2 2 . . . . . . 2 2 . . . . . . . 2 2 
        2 . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 . . . . . . . . 2 
        2 . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 2 2 2 2 2 2 2 2 . . . . . 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . 2 
        2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 . . . . . . . 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 . . . . . . . . . . . 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 . . . . . . . . 2 2 . . . 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . 2 
        2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . 2 
        2 2 . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . 2 
        2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 . . . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . 2 
        2 2 . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . 2 
        2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 . . . . . . . . . . . . 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . 2 
        2 2 . . . . . . 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 . . . . . 2 . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 . . . . . . . . . 2 
        2 2 . . . . 2 . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . 2 
        2 2 2 2 2 2 . . . . . . . . . . . . . . . 2 2 . . . . . . 2 2 2 . . . . . . . 2 
        2 2 . . . . . . . . . . . . . 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . 2 
        2 2 . . . . . . . . . . . . 2 2 2 . . . . . . . . . . . . . . 2 2 2 . . . . . 2 
        2 2 . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 2 2 2 . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 
        2 2 . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 . . 2 
        2 2 . . . . . . . 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . 2 2 2 . . . 2 
        2 2 . . . . . . . 2 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . 2 
        2 2 . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . 2 
        2 2 . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 2 . . . . . . . 2 
        2 2 . . . . 2 2 2 . . . . . . . . . . . . . . . . . . 2 2 2 . . . . . . . . . 2 
        2 2 . . 2 2 2 2 2 . . . . . . . . . . . . . . . . 2 2 2 . . . . . . . . . . . 2 
        2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `, [myTiles.transparency16,myTiles.tile2,myTiles.tile31,myTiles.tile32,myTiles.tile33,myTiles.tile36,myTiles.tile26,myTiles.tile25,myTiles.tile37,myTiles.tile39,myTiles.tile50,myTiles.tile51,myTiles.tile34,myTiles.tile35,myTiles.tile38,myTiles.tile41,myTiles.tile43,myTiles.tile52,myTiles.tile40,myTiles.tile42,myTiles.tile53,myTiles.tile56,myTiles.tile22,myTiles.tile14,myTiles.tile54,myTiles.tile55,myTiles.tile57,myTiles.tile60,myTiles.tile66,myTiles.tile67,myTiles.tile68], TileScale.Sixteen))
    PREMIO2 = sprites.create(img`
        . . . . . . . f f f . . . . . . . . 
        . . . . . . f f d d f . . . . . . . 
        . . . . . f d f d d d f . . . . . . 
        . . . . f d d f d d d d f . . . . . 
        . . . f d d d f d d d d d f . . . . 
        . . f d d d d f d d d d d d f . . . 
        . f 3 d d d d f 3 3 d d d d d f . . 
        f 3 3 d d d d f 2 2 3 d d d d 3 f . 
        f 3 3 3 d d d d 2 2 2 3 d d d 3 3 f 
        f 3 3 3 3 d d d 2 2 2 3 3 3 3 3 3 f 
        . f 3 3 3 3 d 3 3 3 f f f f f f f f 
        . . f 3 3 3 3 3 3 3 3 3 3 3 3 3 f . 
        . . . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . . . . f 3 3 3 3 3 3 3 3 3 f . . . 
        . . . . . f 3 3 3 3 3 3 3 f . . . . 
        . . . . . . f 3 3 3 3 3 f . . . . . 
        . . . . . . . f 3 3 3 f . . . . . . 
        . . . . . . . . f f f . . . . . . . 
        `, SpriteKind.premio2)
    Enemigo2 = sprites.create(img`
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . e e e e e e e e e . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . e e e e e e e e e e e e . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . e e e e e d e e e e e e e e . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . e e e e e d e e d e e e e e e . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . e e e d e e d e e e e e e e e e . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . e e e d e e e e e e e e e e e e e . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . e e d d e e d e e e e e e e e e e . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . e e e f f f e d e e e e e e e e e e . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . e e e d d f f d f f e e e e e e e e e . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . e . e d d d d d d d e e e e e e e e e . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . e f f f f d f f e e e e e e e e e . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . e d f f f f f f e e e e e e e e e . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . e f f f f d f f e e e e e e e e e . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . e d d d d d d d d e e e e e e e e . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . e d d d d f f f d d d e e e e e e e . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . e e d d f f f f d d d a f f e e e e . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . e e d d d d d d d a a f f f f f e e . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . e e d d d d f a a f f f f f f f e . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . e e e a f f a a f f a f f f f f f . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . e e f a a a f f f f f f a a a f f f . . . . . . . . . . . . 
        . . . . . . . . . . . f f f f f . f f f f a f f a f f f a f a a f a f . . . . . . . . . . . 
        . . . . . . . . . . f 5 5 5 f f f f f a a f f f a f f f a f f f f a a f . . . . . . . . . . 
        . . . . . . . . . . f f f f f 5 5 f f a f f f f a f f f f f f f f f a f . . . . . . . . . . 
        . . . . . . . . . . f 5 5 5 f 5 5 f f f f f a f a f f f f f . . . f f f f f f . . . . . . . 
        . . . . . . . . . . f f f f f 5 5 f f f f f a f a f f a f f . . . . f f f 5 5 5 . . . . . . 
        . . . . . . . . . . f 5 5 5 f f f f f f f f f f f f f f a f . . . . f 5 f 5 5 5 . . . . . . 
        . . . . . . . . . . f f f f f f f f f f . f a f f f f f a f . . . . f f f 5 5 5 . . . . . . 
        . . . . . . . . . . f f 5 5 5 f f f f . . f a a a a f f f a f . . . f 5 f f f f . . . . . . 
        . . . . . . . . . . . f f f f f f f . . . f f f f f f f a a 5 f . . f 5 5 5 f . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . f 5 5 5 5 5 5 5 5 5 f f f f f f f . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . f f f f f f f f f a a f f f . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . f a a a a a 5 f f f a a a f f f f . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . f f f a a a a f . . . f a f a a a f f . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . f f f a a a f . . . . f f a a a a a a f . . . . . . . . 
        . . . . . . . . . . . . . . . . . . f f f f f f f . . . . . f 5 5 5 a a a f . . . . . . . . 
        . . . . . . . . . . . . . . . . . f a a a f f f . . . . . . f 5 5 5 5 a a a f . . . . . . . 
        . . . . . . . . . . . . . . . . . f a a a a a f . . . . . . f a 5 5 5 a a a f f . . . . . . 
        . . . . . . . . . . . . . . . . f a 5 a a a a f . . . . . . . f 5 5 a f f f f f f . . . . . 
        . . . . . . . . . . . . . . . f f f f f a a f f . . . . . . . f a a f f f f f f f f . . . . 
        . . . . . . . . . . . . . . f f f f a a a a f . . . . . . . . . f f f a a a a a a f f . . . 
        . . . . . . . . . . . . . f f f f a 5 5 5 a f . . . . . . . . . f a a a a a a a a f f f . . 
        . . . . . . . . . . . f f a a 5 5 5 5 5 a a f . . . . . . . . . . f a a 5 5 5 5 5 a a f f . 
        . . . . . . . . . . . f a a a a a a a a a f f . . . . . . . . . . f a 5 5 5 5 5 5 5 a a f . 
        . . . . . . . . . . . f f f f f f f f f f f f . . . . . . . . . . f f f f f f f f f f f f . 
        `, SpriteKind.Enemy)
    balon = sprites.create(img`
        . . . . . . 4 4 f 4 4 . . . . . . 
        . . . . 4 4 4 4 f 4 4 4 4 . . . . 
        . . . 4 4 4 4 4 f 4 4 4 4 4 . . . 
        . . 4 f 4 4 4 4 f 4 4 4 4 f 4 . . 
        . 4 4 4 f 4 4 4 f 4 4 4 f 4 4 4 . 
        . 4 4 4 4 f 4 4 f 4 4 f 4 4 4 4 . 
        4 4 4 4 4 f 4 4 f 4 4 f 4 4 4 4 4 
        4 4 4 4 4 f 4 4 f 4 4 f 4 4 4 4 4 
        f f f f f f f f f f f f f f f f f 
        4 4 4 4 4 f 4 4 f 4 4 f 4 4 4 4 4 
        4 4 4 4 4 f 4 4 f 4 4 f 4 4 4 4 4 
        . 4 4 4 4 f 4 4 f 4 4 f 4 4 4 4 . 
        . 4 4 4 f 4 4 4 f 4 4 4 f 4 4 4 . 
        . . 4 f 4 4 4 4 f 4 4 4 4 f 4 . . 
        . . . 4 4 4 4 4 f 4 4 4 4 4 . . . 
        . . . . 4 4 4 4 f 4 4 4 4 . . . . 
        . . . . . . 4 4 f 4 4 . . . . . . 
        `, SpriteKind.Food)
    bate = sprites.create(img`
        . . . . . . . . . . . . . . . . . 4 4 . . 
        . . . . . . . . . . . . . . . . 4 d d 4 . 
        . . . . . . . . . . . . . . . 4 d d 4 4 2 
        . . . . . . . . . . . . . . 4 d d 4 4 2 4 
        . . . . . . . . . . . . . 4 d d 4 4 2 4 . 
        . . . . . . . . . . . . 4 d d 4 4 2 4 . . 
        . . . . . . . . . . . 4 d d 4 4 2 4 . . . 
        . . . . . . . . . . 4 d d 4 4 2 4 . . . . 
        . . . . . . . . . 4 d d 4 4 2 4 . . . . . 
        . . . . . . . . 4 d d 4 4 2 4 . . . . . . 
        . . . . . . . . 4 d 4 4 2 4 . . . . . . . 
        . . . . . . . . 4 4 4 2 4 . . . . . . . . 
        . . . . . . . 6 6 6 2 4 . . . . . . . . . 
        . . . . . . 9 9 9 . . . . . . . . . . . . 
        . . . . . 6 6 6 . . . . . . . . . . . . . 
        . . . . 9 9 9 . . . . . . . . . . . . . . 
        . . . 6 6 6 . . . . . . . . . . . . . . . 
        . . 4 4 2 . . . . . . . . . . . . . . . . 
        4 4 4 2 . . . . . . . . . . . . . . . . . 
        . 4 2 . . . . . . . . . . . . . . . . . . 
        . . 2 . . . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    Prima_Nº1.setPosition(15, 0)
    bate.setPosition(142, 69)
    balon.setPosition(301, 58)
    PREMIO2.setPosition(175, 762)
    Enemigo2.vy = 60
    Enemigo2.setFlag(SpriteFlag.BounceOnWall, true)
    info.startCountdown(40)
}
function crearEnemyWoman () {
    EnemyWomanLife = 3
    enemyWoman1 = sprites.create(img`
        . . . . . . . . . . . . . . f f c 9 9 6 6 6 6 6 6 6 6 c c f f f f . . . . . . . . . . . . . 
        . . . . . . . . . . . f f c 6 6 9 9 9 9 6 6 6 6 b b c c c c c c c f f . . . . . . . . . . . 
        . . . . . . . . . . f b 9 9 9 9 9 9 9 9 b 6 b c c b b c c c c c c c c f . . . . . . . . . . 
        . . . . . . . . f c 9 9 9 9 6 6 6 6 6 6 6 c c c c c c c c c c c c c c c f . . . . . . . . . 
        . . . . . . . f 6 9 9 6 6 6 6 6 6 6 6 6 c c c c c c c c c c d c c c c c c f . . . . . . . . 
        . . . . . . . f 6 9 6 6 6 6 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c f . . . . . . . 
        . . . . . . . f 6 6 6 c 6 6 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c f . . . . . . 
        . . . . . . . f c 6 6 c b 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c f . . . . . . 
        . . . . . . . . f f c b d c 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c f . . . . . . 
        . . . . . . . . . . f c d 6 c 6 6 c c c c c c c c c c c c c c c c c c c c c c f . . . . . . 
        . . . . . . . . . . f b d d c 6 6 c c c c c c c c c c c c c c c c c c c c c c f . . . . . . 
        . . . . . . . . . f b d d d b b c c c c c c c c c c c c c c c c c c c c c c f . . . . . . . 
        . . . . . . . . . f c d d d b b b b e b e c c c c c c c c c c c c b b c f f . . . . . . . . 
        . . . . . . . . . . f f d d d d d d 3 3 3 e c c c c c c c c c c f c f f . . . . . . . . . . 
        . . . . . . . . . . . f c d d d d d d d 3 3 3 e e c c c c c c c f f . . . . . . . . . . . . 
        . . . . . . . . . . . . f f f f f f f f d 3 3 3 3 f f f f f f f . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . f d d d d d c f . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . f c d d d d d d f . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . f f b d d b b b d d c f . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . f c c d b 6 6 6 c 3 b f . . . . . . . . . . . . c . . . . . . 
        . . . . . . . . . . . . . . f c 9 6 a c 6 6 6 c c c f . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . f 6 6 8 8 c 6 6 c c c f . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . f c 6 8 8 c c c c 8 8 f . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . f 6 6 6 6 c c c c 8 8 c f . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . f 6 9 6 c c c c c 8 8 6 c f . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . f 6 6 c b b 6 c c c 8 b d d f . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . f 6 6 c c b b c b d d c c b d b f . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . f d b b c c c c c c c 8 c c c c f . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . f b b b d b b c c 8 8 8 8 c c f . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . f c c b b b c c 6 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . f c c c b d 3 b b 6 8 8 6 6 6 f . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . f f f c d b b d b 6 6 6 b 6 6 f . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . f c 6 6 b 6 6 6 c c c c f . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . f 6 6 6 6 6 c f f f f . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . f c c 6 c c c f . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . f c c c c c c f . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . f c c c c c c f . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . f c c c c c c f . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . f c c c c c f . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . f c c c c c f . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . f c c c c f . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . f f c c c c c f f . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . f f f c c c c c c c c f . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . f c c c c c c c c f f f . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . f c c c c c f f f c f . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . f c c c f . . f f f . . . . . . . . . . . . . . . . . . . 
        `, SpriteKind.EnemyWoman)
    enemyWomanAnimate = animation.createAnimation(ActionKind.womanEnemyWalking, 100)
    enemyWomanAnimate.addAnimationFrame(img`
        . . . . . . . . . . . . . . f f c 9 9 6 6 6 6 6 6 6 6 c c f f f f . . . . . . . . . . . . . 
        . . . . . . . . . . . f f c 6 6 9 9 9 9 6 6 6 6 b b c c c c c c c f f . . . . . . . . . . . 
        . . . . . . . . . . f b 9 9 9 9 9 9 9 9 b 6 b c c b b c c c c c c c c f . . . . . . . . . . 
        . . . . . . . . f c 9 9 9 9 6 6 6 6 6 6 6 c c c c c c c c c c c c c c c f . . . . . . . . . 
        . . . . . . . f 6 9 9 6 6 6 6 6 6 6 6 6 c c c c c c c c c c d c c c c c c f . . . . . . . . 
        . . . . . . . f 6 9 6 6 6 6 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c f . . . . . . . 
        . . . . . . . f 6 6 6 c 6 6 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c f . . . . . . 
        . . . . . . . f c 6 6 c b 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c f . . . . . . 
        . . . . . . . . f f c b d c 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c f . . . . . . 
        . . . . . . . . . . f c d 6 c 6 6 c c c c c c c c c c c c c c c c c c c c c c f . . . . . . 
        . . . . . . . . . . f b d d c 6 6 c c c c c c c c c c c c c c c c c c c c c c f . . . . . . 
        . . . . . . . . . f b d d d b b c c c c c c c c c c c c c c c c c c c c c c f . . . . . . . 
        . . . . . . . . . f c d d d b b b b e b e c c c c c c c c c c c c b b c f f . . . . . . . . 
        . . . . . . . . . . f f d d d d d d 3 3 3 e c c c c c c c c c c f c f f . . . . . . . . . . 
        . . . . . . . . . . . f c d d d d d d d 3 3 3 e e c c c c c c c f f . . . . . . . . . . . . 
        . . . . . . . . . . . . f f f f f f f f d 3 3 3 3 f f f f f f f . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . f d d d d d c f . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . f c d d d d d d f . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . f f b d d b b b d d c f . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . f c c d b 6 6 6 c 3 b f . . . . . . . . . . . . c . . . . . . 
        . . . . . . . . . . . . . . f c 9 6 a c 6 6 6 c c c f . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . f 6 6 8 8 c 6 6 c c c f . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . f c 6 8 8 c c c c 8 8 f . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . f 6 6 6 6 c c c c 8 8 c f . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . f 6 9 6 c c c c c 8 8 6 c f . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . f 6 6 c b b 6 c c c 8 b d d f . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . f 6 6 c c b b c b d d c c b d b f . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . f d b b c c c c c c c 8 c c c c f . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . f b b b d b b c c 8 8 8 8 c c f . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . f c c b b b c c 6 8 8 8 8 8 8 f . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . f c c c b d 3 b b 6 8 8 6 6 6 f . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . f f f c d b b d b 6 6 6 b 6 6 f . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . f c 6 6 b 6 6 6 c c c c f . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . f 6 6 6 6 6 c f f f f . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . f c c 6 c c c f . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . f c c c c c c f . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . f c c c c c c f . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . f c c c c c c f . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . f c c c c c f . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . f c c c c c f . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . f c c c c f . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . f f c c c c c f f . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . f f f c c c c c c c c f . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . f c c c c c c c c f f f . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . f c c c c c f f f c f . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . f c c c f . . f f f . . . . . . . . . . . . . . . . . . . 
        `)
    enemyWomanAnimate.addAnimationFrame(img`
        . . . . . . . . . . . . . . . f f c 9 9 6 6 6 6 6 6 6 6 6 c c f f f . . . . . . . . . . . . 
        . . . . . . . . . . . . f f c 6 6 6 6 9 9 6 6 6 6 6 b 6 b b c b c c c f . . . . . . . . . . 
        . . . . . . . . . . f c b 9 9 9 9 9 9 9 9 9 6 b b c c b c c c c c c c c c f . . . . . . . . 
        . . . . . . . . f c b 9 9 9 9 6 9 9 9 6 6 6 b c b c c c c c c c c c c c c c f f . . . . . . 
        . . . . . . . f c b 9 9 6 6 6 6 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c f . . . . . 
        . . . . . . . f 6 9 6 6 6 6 6 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c f . . . . 
        . . . . . . . . c 9 6 6 c 6 6 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c f . . . . 
        . . . . . . . . f b 6 6 b 6 6 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c f . . . 
        . . . . . . . . . f c c b b 6 6 6 6 6 c 6 c c c c c c c c c c c c c c c c c c c c c f . . . 
        . . . . . . . . . . . f d b 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c f . . . 
        . . . . . . . . . . . f d d 9 c 6 6 c c c c c c c c c c c c c c c c c c c c c c c f . . . . 
        . . . . . . . . . . f b d d d c 6 6 c c c c c c c c c c c c c c c c c c c c c c f . . . . . 
        . . . . . . . . . f c d d d b c c c c c c b c c c c c c c c c c c c c c b c c f . . . . . . 
        . . . . . . . . . . f c d d d d d d d d d d b c c c c c c c c c c c f c f f f . . . . . . . 
        . . . . . . . . . . . f c d d d d d d d d d d b c e c c c c c c c c f f . . . . . . . . . . 
        . . . . . . . . . . . . f f c f f f f f c e d b b b c f f c f f f f . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . f f f c c b b b f . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . f c d d d d d d d c f . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . f f c d d d d d d d b b c f f f . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . f c b d d d b b b b b 6 6 6 6 f c f . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . f b 9 9 6 b 3 3 3 3 3 b c 6 6 6 6 6 c f f . . . . . . . . . . . 
        . . . . . . . . . . . . . . f c 9 6 6 8 8 6 b b c c c c f c c 6 c c c f . . . . . . . . . . 
        . . . . . . . . . . . . . . . f 6 6 8 8 8 8 8 8 8 8 c f f f f c c c c c f f 3 f f f . . . . 
        . . . . . . . . . . . . . . . f c c 6 8 8 8 8 8 8 8 c f . . . f f f c c c c 6 9 b a f . . . 
        . . . . . . . . . . . . . . . f b 6 9 6 6 6 8 8 8 8 6 c f f . . . . f c 9 d b c c c f f . . 
        . . . . . . . . . . . . . . . f 6 6 6 c c b c c c 8 8 d d c f . . . f b c c c c c c b e f . 
        . . . . . . . . . . . . . . . f 6 6 6 6 d d d d b c 8 b d d c f . . f f c f f c b d b c f . 
        . . . . . . . . . . . . . . . f f 6 6 c c b 3 3 3 c c b c b c f . . . f c f . f f c f f . . 
        . . . . . . . . . . . . . . f b b d c c c c c c c 8 8 c c c f f . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . f b d d d b c c c 8 8 8 8 8 8 c f f . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . f c b d d b b 6 6 8 8 8 8 8 8 8 f f . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . f c c c 6 d d 3 b b 6 8 8 6 b b 8 f f . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . f c 6 6 6 d b b b b b 6 6 8 8 8 c f . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . f c c c b c b 6 6 b 6 6 6 c f c f . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . f c c c c c f c 6 6 b c c c f f . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . f c c c c c c f f c c c c c c c f f f . . . . . . . . . . . . 
        . . . . . . . . . . . . . . f c c c c c c c f . f c c c c c c c c f . . . . . . . . . . . . 
        . . . . . . . . . . . . . f f c c c c c c f . . . f c c c c c c c f . . . . . . . . . . . . 
        . . . . . . . . . . . . f c c c c c f f f . . . . . f c c c c c f . . . . . . . . . . . . . 
        . . . . . . . . . f f f c c c c f f . . . . . . . . f c c c c c f . . . . . . . . . . . . . 
        . . . . . . f f f c c c c c f f . . . . . . . . . . f f c c c c f . . . . . . . . . . . . . 
        . . . . . f c c c c c c c c c f . . . . . . . . . . f c c c c c f . . . . . . . . . . . . . 
        . . . . . f f f f f f f f f f . . . . . . . . . . f c c c c c c c f . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . f f f f c c c c c c f f f . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . f c c c c c c f f f f c f . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . f c c c c c c f . . f f f . . . . . . . . . . . . 
        `)
    enemyWomanAnimate.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . f f b 9 9 6 6 6 6 6 6 6 6 6 c c c f f f . . . . . . . . . . 
        . . . . . . . . . . . . . f f c 6 6 6 6 9 6 6 6 6 6 b 6 6 b b c b c c c f f . . . . . . . . 
        . . . . . . . . . f f f c 9 9 9 9 9 9 9 9 9 6 6 b c c b b c c c c c c c c c f f . . . . . . 
        . . . . . . . . f f 6 9 9 9 9 9 9 9 9 9 6 6 b c c b c c c c c c c c c c c c c c f . . . . . 
        . . . . . . . . f 6 9 9 6 6 6 6 6 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c f . . . . 
        . . . . . . . . c 9 9 6 6 6 6 6 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c f . . . 
        . . . . . . . . f 9 6 6 c 6 6 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c f . . 
        . . . . . . . . f b 6 6 6 6 6 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c b f . . 
        . . . . . . . . . f f c c d 6 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c f . 
        . . . . . . . . . . . f c d 6 8 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c f . 
        . . . . . . . . . . . f c d 9 6 c 6 c c c c c c c c c c c c c c c c c c c c c c c c c f . . 
        . . . . . . . . . . f c d d d b c 6 c c c c c c c c c c c c c c c c c c c c c c c c f . . . 
        . . . . . . . . . . f d d d b c b 6 c b c c c c c c c c c c c c c c c c c c c c f f . . . . 
        . . . . . . . . . . . f b d d d b b b e b 3 3 c c c c c c c c c c c c f f c c f . . . . . . 
        . . . . . . . . . . . f f b d d d 3 3 3 3 3 3 3 e c c c c c c c c c c f . f f . . . . . . . 
        . . . . . . . . . . . . f f e e e c f f c e b 3 3 b b e f f c c f c f . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . f f f c c b b b f . f f . f . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . f f f f c b d d d d d d c . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . f f f c c c d d d d d d d d d d f . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f f c c c 6 6 c d d 3 d 9 b b c d b f . . . . . . . . . . . . . . . . 
        . . . f f b c c c c c c c c c 6 c c 6 b 3 d 6 6 6 6 c b c f . . . . . . . . . . . . . . . . 
        . . f b c c b c c c c f f f f c c 9 6 8 6 b 6 6 6 c c c f . . . . . . . . . . . . . . . . . 
        . . f c b c c a b c c f . . . f c 6 6 8 8 8 c 6 6 c 6 c f . . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f . . . . . f c 8 8 8 8 c c c c 8 c f . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . f b 6 6 6 c c c c c 8 6 c f f . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . f c 9 9 6 c c c c c c 8 8 d b c f . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . f d 6 6 6 c b c c c c 8 8 b 6 d c f . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . f b 6 b c c c b d b b b b c c c b b c f . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . f c b b c c c b c c b b c c c c c f . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . f c c d b b c c c c c 8 8 8 c c c c f . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . f b 6 c b b d b b c 8 8 8 8 8 b b c f . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . f f f c c b b c 8 8 8 8 8 8 b b c f . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . f 6 6 d d b b b 6 6 6 6 6 f f . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . f 6 6 6 6 6 6 6 b c 6 a a 6 c c f . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . f 6 6 b 6 6 c f f c c c a 6 c c f f . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . f c c c 6 c c c . . f f c c c c c c c f . . . . . . . . . . 
        . . . . . . . . . . . . . . . . f c c c c c c f . . . . f c c c c c c c f . . . . . . . . . 
        . . . . . . . . . . . . . . . f c c c c c c c f . . . . . f c c c c c c c f . . . . . . . . 
        . . . . . . . . . . . . . . . f c c c c c c f . . . . . . . f c c c c c f . . . . . . . . . 
        . . . . . . . . . . . . . f f c c c c c f f . . . . . . . . . f c c c c f . . . . . . . . . 
        . . . . . . . . . . f f f c c c c c f f . . . . . . . . . . . f c c c c c f . . . . . . . . 
        . . . . . . . . f f c c c c c c c f . . . . . . . . . . . . . f c c c c c c f . . . . . . . 
        . . . . . . . f c c c c c c c c f . . . . . . . . . . . . . f c c c c c c f f . . . . . . . 
        . . . . . . . . f f f f f f f f . . . . . . . . . . . f f f c c c c f f f f c f . . . . . . 
        . . . . . . . . . . . . f c f . . . . . . . . . . . f c c c c c c c f . . . f . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . f f c c c c f . . . . . . . . . . . . 
        `)
    animation.attachAnimation(enemyWoman1, enemyWomanAnimate)
    womanEnemyLimiteX = 570
    enemyWoman1.x = womanEnemyLimiteX
    enemyWoman1.y = 50
    enemyWomanX = womanEnemyLimiteX
    directionWoman = 1
    enemyWoman1.ay = 200
    enemyWoman1.setFlag(SpriteFlag.BounceOnWall, true)
    enemyWoman1.vx = -80
    animation.setAction(enemyWoman1, ActionKind.womanEnemyWalking)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.EnemyWoman, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    Prima_Nº1.setPosition(15, 0)
    music.wawawawaa.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
    music.baDing.play()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.premio2, function (sprite, otherSprite) {
    otherSprite.destroy()
    Enemigo2.destroy()
    info.stopCountdown()
    game.setDialogTextColor(0)
    game.setDialogFrame(img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 f f f f f f f f f f f f f f 1 
        1 f 1 1 1 1 1 1 1 1 1 1 1 1 f 1 
        1 f 1 f f f f f f f f f f 1 f 1 
        1 f 1 f f f f f f f f f f 1 f 1 
        1 f 1 f f f f f f f f f f 1 f 1 
        1 f 1 f f f f f f f f f f 1 f 1 
        1 f 1 f f f f f f f f f f 1 f 1 
        1 f 1 f f f f f f f f f f 1 f 1 
        1 f 1 f f f f f f f f f f 1 f 1 
        1 f 1 f f f f f f f f f f 1 f 1 
        1 f 1 f f f f f f f f f f 1 f 1 
        1 f 1 f f f f f f f f f f 1 f 1 
        1 f 1 1 1 1 1 1 1 1 1 1 1 1 f 1 
        1 f f f f f f f f f f f f f f 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `)
    game.showLongText("Calle 273 Surrey", DialogLayout.Top)
    game.showLongText("Otra pista de Mery, esa debe ser la direccion de donde se encuentra hmmm...", DialogLayout.Top)
    Nivel_3()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
    music.baDing.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.wawawawaa.play()
    Prima_Nº1.setPosition(20, 0)
    info.changeLifeBy(-1)
})
let directionWoman = 0
let enemyWomanX = 0
let womanEnemyLimiteX = 0
let enemyWomanAnimate: animation.Animation = null
let enemyWoman1: Sprite = null
let bate: Sprite = null
let balon: Sprite = null
let Enemigo2: Sprite = null
let PREMIO2: Sprite = null
let EnemyWomanLife = 0
let prima2Jumping: animation.Animation = null
let prima2Escalar: animation.Animation = null
let prima2Idle: animation.Animation = null
let prima2Izquierda: animation.Animation = null
let prima2Derecha: animation.Animation = null
let Prima2TiempoCaminar = 0
let microfono: Sprite = null
let lapiz: Sprite = null
let enemigo: Sprite = null
let PREMIO12: Sprite = null
let prima2Limite = 0
let prima2X = 0
let prima2: Sprite = null
let prima2Direccion = 0
let Projectil: Sprite = null
let paleta_de_pintura: Sprite = null
let Enemigo3: Sprite = null
let direccion = 0
let Caminar = 0
let Prima_Nº1: Sprite = null
Nivel_1()
scene.setBackgroundColor(9)
effects.clouds.startScreenEffect()
Prima_Nº1 = sprites.create(img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . f f 8 6 8 8 8 8 8 8 6 8 f f . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . f 6 6 6 8 6 6 8 8 6 6 8 6 6 6 f . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f 1 6 6 1 6 6 6 6 1 6 1 6 6 1 6 1 f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 6 6 1 6 6 6 6 8 6 6 1 6 6 6 6 1 6 6 f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 6 6 6 6 6 6 8 d 8 6 6 6 8 6 6 6 6 6 f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 6 6 6 8 8 8 d d d 8 6 8 d 8 8 6 6 6 f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 6 6 6 f f f f d d d 8 f f f f 6 6 6 f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 6 6 6 1 7 1 7 d d d d 7 1 7 1 6 6 6 f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 6 9 1 6 6 f d d d d f 6 6 1 6 6 9 f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 6 1 b b f d d d d f b b 1 9 6 9 f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 9 d d d d d d d d d d d d 9 9 9 f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 9 d d d d d d d d d d d d 9 9 9 f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 9 d d d d d d d d d d d d 9 9 9 f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 9 f d d d d d d d d d d f 9 9 9 f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 f 9 9 f f f f f f f f f f f f 9 f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f . f f f f a c d d c a f f . . f . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . f c c a a a a a c c f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . f c a c c c c c a c f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . f c f a 1 a a a 1 a f c f . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . f c c f a 1 a a a 1 a f a c f . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . f c f a a 1 1 1 1 1 a a f c f . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . f c a f a a 1 1 1 1 1 a a f a c f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . f c f c a a 1 1 b 1 1 a a c f c f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f c a f a a a 1 1 1 1 1 a a a f a c f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f c f a a a a a a a a a a a a a f c f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f a f a a a a a a a a a a a a a f c f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . f f b b b b b c c c b b b b b f f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f d f 6 6 6 6 6 6 6 6 6 6 6 6 6 f d f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . f f 6 6 6 6 6 6 f 6 6 6 6 6 6 f f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . f 6 6 6 6 6 6 f 6 6 6 6 6 6 f . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . f 6 6 6 6 6 6 f 6 6 6 6 6 6 f . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . f f f f f f . f f f f f f . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . f d d d f . f d d d f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . f d d d f . f d d d f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . f d d d f . f d d d f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . f d d d f . f d d d f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 1 1 1 1 f . 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . f f b b b b f . f b b b b f f . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . f b b b b b b f . f b b b b b b f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . f b b b b b b f . f b b b b b b f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . f f f f f f . . . f f f f f f . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Prima_Nº1, 100, 0)
let Derecha = animation.createAnimation(ActionKind.Derecha, Caminar)
let Izquierda = animation.createAnimation(ActionKind.Izquierda, Caminar)
let Parada = animation.createAnimation(ActionKind.Parada, Caminar)
Parada.addAnimationFrame(img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . f f 8 6 8 8 8 8 8 8 6 8 f f . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . f 6 6 6 8 6 6 8 8 6 6 8 6 6 6 f . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f 1 6 6 1 6 6 6 6 1 6 1 6 6 1 6 1 f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 6 6 1 6 6 6 6 8 6 6 1 6 6 6 6 1 6 6 f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 6 6 6 6 6 6 8 d 8 6 6 6 8 6 6 6 6 6 f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 6 6 6 8 8 8 d d d 8 6 8 d 8 8 6 6 6 f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 6 6 6 f f f f d d d 8 f f f f 6 6 6 f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 6 6 6 1 7 1 7 d d d d 7 1 7 1 6 6 6 f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 6 9 1 6 6 f d d d d f 6 6 1 6 6 9 f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 6 1 b b f d d d d f b b 1 9 6 9 f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 9 d d d d d d d d d d d d 9 9 9 f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 9 d d d d d d d d d d d d 9 9 9 f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 9 d d d d d d d d d d d d 9 9 9 f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 9 f d d d d d d d d d d f 9 9 9 f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 f 9 9 f f f f f f f f f f f f 9 f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f . f f f f a c d d c a f f . . f . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . f c c a a a a a c c f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . f c a c c c c c a c f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . f c f a 1 a a a 1 a f c f . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . f c c f a 1 a a a 1 a f a c f . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . f c f a a 1 1 1 1 1 a a f c f . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . f c a f a a 1 1 1 1 1 a a f a c f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . f c f c a a 1 1 b 1 1 a a c f c f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f c a f a a a 1 1 1 1 1 a a a f a c f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f c f a a a a a a a a a a a a a f c f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f a f a a a a a a a a a a a a a f c f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . f f b b b b b c c c b b b b b f f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f d f 6 6 6 6 6 6 6 6 6 6 6 6 6 f d f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . f f 6 6 6 6 6 6 f 6 6 6 6 6 6 f f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . f 6 6 6 6 6 6 f 6 6 6 6 6 6 f . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . f 6 6 6 6 6 6 f 6 6 6 6 6 6 f . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . f f f f f f . f f f f f f . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . f d d d f . f d d d f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . f d d d f . f d d d f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . f d d d f . f d d d f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . f d d d f . f d d d f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 1 1 1 1 f . 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . f f b b b b f . f b b b b f f . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . f b b b b b b f . f b b b b b b f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . f b b b b b b f . f b b b b b b f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . f f f f f f . . . f f f f f f . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    `)
Derecha.addAnimationFrame(img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . f f 8 6 8 8 8 8 8 8 6 8 8 f f . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . f 6 6 6 8 6 6 8 8 6 6 8 6 6 6 f . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f 1 6 6 1 6 6 6 6 1 6 1 6 6 1 6 1 f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 6 6 1 6 6 6 6 6 6 6 1 6 6 6 6 1 6 f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f d f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 6 6 6 6 6 6 6 6 6 6 6 6 6 f f f d f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 6 6 6 6 6 6 6 6 6 6 6 6 f 1 6 1 d f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 6 6 6 9 9 6 6 6 6 f 1 1 7 f d f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 9 6 9 9 9 6 6 6 9 f 1 1 b f d d f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 9 9 9 9 9 9 6 9 9 f d d d d d d f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 9 9 9 9 9 9 9 9 9 f d d d d d d f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 9 9 9 9 9 9 9 9 9 9 f d d d d d f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 9 9 9 9 9 9 9 9 9 9 f d d d d f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 f 9 9 9 9 9 9 9 9 9 9 f d d d f . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f . f 9 9 9 f 9 f f f 9 f f f f . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . f 9 f . f f d f 9 f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . f f f c f c c f 6 f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f f a a f a f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f f a a f a f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f a f a a f a f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a 3 a f a f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a 3 a f a f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f 3 3 3 3 f a f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a 3 a f a a f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a 3 a f a a f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a 3 a f b c f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a a a f f f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f 6 f f f f 6 6 f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f 6 f d d f 6 6 f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f 6 6 f f 6 6 6 f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f d d d f . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f d d d f . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f d d d f . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f d d d f . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f b b b b f f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f b b b b b b f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f b b b b b b f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . f f f f f f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    `)
Derecha.addAnimationFrame(img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . f f 8 6 8 8 8 8 8 8 6 8 8 f f . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . f 6 6 6 8 6 6 8 8 6 6 8 6 6 6 f . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f 1 6 6 1 6 6 6 6 1 6 1 6 6 1 6 1 f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 6 6 1 6 6 6 6 6 6 6 1 6 6 6 6 1 6 f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f d f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 6 6 6 6 6 6 6 6 6 6 6 6 6 f f f d f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 6 6 6 6 6 6 6 6 6 6 6 6 f 1 6 1 d f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 6 6 6 9 9 6 6 6 6 f 1 1 7 f d f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 9 6 9 9 9 6 6 6 9 f 1 1 b f d d f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 9 9 9 9 9 9 6 9 9 f d d d d d d f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 9 9 9 9 9 9 9 9 9 f d d d d d d f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 9 9 9 9 9 9 9 9 9 9 f d d d d d f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 9 9 9 9 9 9 9 9 9 9 f d d d d f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 f 9 9 9 9 9 9 9 9 9 9 f d d d f . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f . f 9 9 9 f 9 f f f 9 f f f f . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . f 9 f . f f d f 9 f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . f f f c f c c f 6 f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f f a a f a f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f f a a f a f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f a f a a f a f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a 3 a f a f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a 3 a f a f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f 3 3 3 3 f a f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a 3 a f a a f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a 3 a f a a f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a 3 a f b c f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a a a f f f f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f 6 f f f f 6 6 6 f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f 6 f d d f 6 f 6 f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f 6 6 f f 6 6 f 6 f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f f f f f f f f f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f d d d d f d d d d f . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . f d d d d f . f d d d f . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . f d d d d f . . f d d d f . . f f . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . f d d d d f . . . . f d d 1 1 f b b f . . . . . . . . . . . . 
    . . . . . . . . . . . . . . f 1 1 d d f . . . . . . f 1 1 b b b b f . . . . . . . . . . . . 
    . . . . . . . . . . . . . f b b b 1 1 . . . . . . . . 1 b b b b f f . . . . . . . . . . . . 
    . . . . . . . . . . . . . f b b b b f . . . . . . . . f b b b f . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . f b b b b f f . . . . . . . f b f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . f b b b b b f . . . . . . . f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . 
    `)
Derecha.addAnimationFrame(img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . f f 8 6 8 8 8 8 8 8 6 8 8 f f . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . f 6 6 6 8 6 6 8 8 6 6 8 6 6 6 f . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f 1 6 6 1 6 6 6 6 1 6 1 6 6 1 6 1 f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 6 6 1 6 6 6 6 6 6 6 1 6 6 6 6 1 6 f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f d f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 6 6 6 6 6 6 6 6 6 6 6 6 6 f f f d f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 6 6 6 6 6 6 6 6 6 6 6 6 f 1 6 1 d f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 6 6 6 9 9 6 6 6 6 f 1 1 7 f d f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 9 6 9 9 9 6 6 6 9 f 1 1 b f d d f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 9 9 9 9 9 9 6 9 9 f d d d d d d f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 9 9 9 9 9 9 9 9 9 f d d d d d d f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 9 9 9 9 9 9 9 9 9 9 f d d d d d f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 9 9 9 9 9 9 9 9 9 9 9 f d d d d f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f 9 f 9 9 9 9 9 9 9 9 9 9 f d d d f . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f . f 9 9 9 f 9 f f f 9 f f f f . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . f 9 f . f f d f 9 f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . f f f c f c c f 6 f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f f a a f a f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f f a a f a f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f a f a a f a f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a 3 a f a f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a 3 a f a f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f 3 3 3 3 f a f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a 3 a f a a f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a 3 a f a a f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a 3 a f b c f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f a a a a f f f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f 6 f f f f 6 6 f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f 6 f d d f 6 6 f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f 6 6 f f 6 6 6 f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f f f f f f f f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f d d d f d d f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f d d d f d d d f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f d d d f f d d f . . f f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f d d d f f d d 1 f f b b f . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . 1 1 1 1 1 . f 1 1 b b b b f . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f b b b b f f 1 b b b b f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f b b b b b b f b b f f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f b b b b b b f f f . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . f f f f f f . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    `)
Izquierda.addAnimationFrame(img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f f f f f f f f f f f . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . f f 6 6 6 6 6 6 6 6 6 6 6 f f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . f 6 6 6 1 6 6 6 6 6 6 6 6 6 6 1 1 f . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . f f 6 6 6 6 6 1 1 6 6 6 6 6 1 1 6 6 f . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . f d f 6 6 6 6 6 1 1 1 1 6 6 6 6 6 6 f . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . f d f f f f 6 6 6 6 6 6 6 6 6 6 6 6 f . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . f d 1 6 1 1 f 6 6 6 6 6 6 6 6 6 6 6 f . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . f d f 7 1 1 1 f 6 6 6 9 6 6 6 6 6 6 f . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . f d f b 1 1 d f 6 6 6 9 6 6 6 6 9 9 f . . . . . . . . . . . . 
    . . . . . . . . . . . . . . f d d d d d d d f 9 6 9 9 9 6 6 9 9 9 f . . . . . . . . . . . . 
    . . . . . . . . . . . . . . f d d d d d d f 9 9 9 9 9 9 6 6 9 9 9 f . . . . . . . . . . . . 
    . . . . . . . . . . . . . . f d d d d d d f 9 9 9 9 9 9 9 6 9 9 9 f . . . . . . . . . . . . 
    . . . . . . . . . . . . . . f d d d d d d f 9 9 9 9 9 9 9 9 9 9 9 f . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . f d d d d d f 9 9 9 9 9 9 9 9 9 9 9 f . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . f d d d d f 9 f f f 9 f 9 9 9 f 9 f . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f f f f 9 f . f f . f 9 f . f . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . f d f f f f . f f f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . f c c c c c f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . f a f a a f f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . f a f a a f a f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . f a f a a f a f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f a f a 3 a a f f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f a f a 3 a a f f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f a f 3 3 3 3 f f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f a a f a 3 a a f f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f a a f a 3 a a f f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f c b f a 3 a a f f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f f f a a a a f f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f 6 6 6 f f f f 6 f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f 6 6 6 f d d f 6 f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f 6 6 6 6 f f 6 6 f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f f f f f f f f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . f d d d f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . f d d d f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . f d d d f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . f d d d f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . f d d d f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f f f 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f b b b b b b b f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f b b b b b b b f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f f f f f f f f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    `)
Izquierda.addAnimationFrame(img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f f f f f f f f f f f . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . f f 6 6 6 6 6 6 6 6 6 6 6 f f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . f 6 6 6 1 6 6 6 6 6 6 6 6 6 6 1 1 f . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . f f 6 6 6 6 6 1 1 6 6 6 6 6 1 1 6 6 f . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . f d f 6 6 6 6 6 1 1 1 1 6 6 6 6 6 6 f . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . f d f f f f 6 6 6 6 6 6 6 6 6 6 6 6 f . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . f d 1 6 1 1 f 6 6 6 6 6 6 6 6 6 6 6 f . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . f d f 7 1 1 1 f 6 6 6 9 6 6 6 6 6 6 f . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . f d f b 1 1 d f 6 6 6 9 6 6 6 6 9 9 f . . . . . . . . . . . . 
    . . . . . . . . . . . . . . f d d d d d d d f 9 6 9 9 9 6 6 9 9 9 f . . . . . . . . . . . . 
    . . . . . . . . . . . . . . f d d d d d d f 9 9 9 9 9 9 6 6 9 9 9 f . . . . . . . . . . . . 
    . . . . . . . . . . . . . . f d d d d d d f 9 9 9 9 9 9 9 6 9 9 9 f . . . . . . . . . . . . 
    . . . . . . . . . . . . . . f d d d d d d f 9 9 9 9 9 9 9 9 9 9 9 f . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . f d d d d d f 9 9 9 9 9 9 9 9 9 9 9 f . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . f d d d d f 9 f f f 9 f 9 9 9 f 9 f . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f f f f 9 f . f f . f 9 f . f . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . f d f f f f . f f f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . f c c c c c f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . f a f a a f f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . f a f a a f a f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . f a f a a f a f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f a f a 3 a a f f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f a f a 3 a a f f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f a f 3 3 3 3 f f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f a a f a 3 a a f f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f a a f a 3 a a f f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f c b f a 3 a a f f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f f f a a a a f f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f 6 6 6 f f f f 6 f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f 6 6 6 f d d f 6 f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f 6 6 6 6 f f 6 6 f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f f f f f f f f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f d d d f d d d f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . f d d d d f d d d f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f f f . . f d d d f f d d d f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . f b b b f 1 1 d d f . f d d d f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . f b b b b b 1 d f . . f d d d f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . f b b b b b 1 1 f f f 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f f b b b b f b b b b b b b f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . f f f b f b b b b b b b f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . f f . f f f f f f f f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    `)
Izquierda.addAnimationFrame(img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f f f f f f f f f f f . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . f f 6 6 6 6 6 6 6 6 6 6 6 f f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . f 6 6 6 1 6 6 6 6 6 6 6 6 6 6 1 1 f . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . f f 6 6 6 6 6 1 1 6 6 6 6 6 1 1 6 6 f . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . f d f 6 6 6 6 6 1 1 1 1 6 6 6 6 6 6 f . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . f d f f f f 6 6 6 6 6 6 6 6 6 6 6 6 f . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . f d 1 6 1 1 f 6 6 6 6 6 6 6 6 6 6 6 f . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . f d f 7 1 1 1 f 6 6 6 9 6 6 6 6 6 6 f . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . f d f b 1 1 d f 6 6 6 9 6 6 6 6 9 9 f . . . . . . . . . . . . 
    . . . . . . . . . . . . . . f d d d d d d d f 9 6 9 9 9 6 6 9 9 9 f . . . . . . . . . . . . 
    . . . . . . . . . . . . . . f d d d d d d f 9 9 9 9 9 9 6 6 9 9 9 f . . . . . . . . . . . . 
    . . . . . . . . . . . . . . f d d d d d d f 9 9 9 9 9 9 9 6 9 9 9 f . . . . . . . . . . . . 
    . . . . . . . . . . . . . . f d d d d d d f 9 9 9 9 9 9 9 9 9 9 9 f . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . f d d d d d f 9 9 9 9 9 9 9 9 9 9 9 f . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . f d d d d f 9 f f f 9 f 9 9 9 f 9 f . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f f f f 9 f . f f . f 9 f . f . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . f d f f f f . f f f . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . f c c c c c f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . f a f a a f f . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . f a f a a f a f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . f a f a a f a f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . f a a f a 3 a f f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . c f a a f a 3 a a f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . c c f a a f 3 3 3 3 f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . c f a a a f a 3 a a f f . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . c c f a a a a f 3 3 a a f . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . c c c f c b b b f a 3 a a f . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . c c c f f f f f f a a a a f . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . c f 6 6 6 6 6 6 f f f f f . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . f 6 6 6 f 6 6 f d d f f . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . f 6 6 6 6 f f 6 f f 6 f . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f f f f . f f f f f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f d d f . f d d d f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f d d f . f d d d f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . f d d f . . f d d f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . f d d d f . . f d d f . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . f d d d f . . f d d d f . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . b b b 1 d d f . . . . f d d 1 1 . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . b b b b 1 1 1 . . . . 1 1 1 1 b . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . b b b b b 1 b . . b b b b b b b . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . b b b b b . . . b b b b b b . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    `)
animation.attachAnimation(Prima_Nº1, Izquierda)
animation.attachAnimation(Prima_Nº1, Derecha)
animation.attachAnimation(Prima_Nº1, Parada)
scene.cameraFollowSprite(Prima_Nº1)
Prima_Nº1.ay = 300
info.setLife(3)
Prima_Nº1.setPosition(20, 0)
music.powerUp.play()
direccion = 1
game.onUpdate(function () {
    if (Prima_Nº1.tileKindAt(TileDirection.Bottom, myTiles.tile120) || Prima_Nº1.tileKindAt(TileDirection.Bottom, myTiles.tile121)) {
        info.changeLifeBy(-3)
        game.over(false)
        music.wawawawaa.play()
    }
    if (Prima_Nº1.tileKindAt(TileDirection.Bottom, myTiles.tile122) || Prima_Nº1.tileKindAt(TileDirection.Bottom, myTiles.tile123)) {
        info.changeLifeBy(-3)
        game.over(false)
        music.wawawawaa.play()
    }
    if (Prima_Nº1.tileKindAt(TileDirection.Bottom, myTiles.tile124) || Prima_Nº1.tileKindAt(TileDirection.Bottom, myTiles.tile125)) {
        info.changeLifeBy(-3)
        game.over(false)
        music.wawawawaa.play()
    }
    if (Prima_Nº1.tileKindAt(TileDirection.Bottom, myTiles.tile80)) {
        info.changeLifeBy(-3)
        game.over(false)
        music.wawawawaa.play()
    }
    movePrima2()
})
forever(function () {
    music.playMelody("E - F - G - G - ", 500)
    music.playMelody("G - G - G - - - ", 500)
    music.playMelody("C - E - D - D - ", 500)
    music.playMelody("D - D - D - - E ", 500)
    music.playMelody("- D - C - C - C ", 500)
    music.playMelody("- C - C - E - B ", 500)
    music.playMelody("- C5 - B - G - - ", 500)
    music.playMelody("E - - - - - - - ", 500)
    music.playMelody("E - F - G - G - ", 500)
    music.playMelody("G - G - G - - - ", 500)
    music.playMelody("C - E - D - D - ", 500)
    music.playMelody("D - D - D - - E ", 500)
    music.playMelody("- D - C - D - - ", 422)
    music.playMelody("E - F - D - C - ", 411)
    music.playMelody("C - - - - - - - ", 411)
})
