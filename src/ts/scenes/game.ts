import "phaser"
import {constants} from '../constants';

export class Game extends Phaser.Scene {


    constructor() {
        super({key: constants.scenes.game});
    }

    init() {
    }

    create() {
       console.log('start game');

       this.input.on(Phaser.Input.Events.POINTER_DOWN, ()=>{
           this.scene.start(constants.scenes.start);
       })
    }
}