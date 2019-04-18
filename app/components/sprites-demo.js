import Component from "@ember/component";
import move from "ember-animated/motions/move";
import { easeOut, easeIn } from "ember-animated/easings/cosine";

export default Component.extend({
  init() {
    this._super();
    this.circles = [];
  },
  transition: function*(context) {
    let { insertedSprites, keptSprites, removedSprites } = context;
    insertedSprites.forEach(sprite => {
      // applyStyles(): 
      // Nothing you do to the sprite will persist after the transition is finished – 
      // we clean things up when it ends.
      sprite.applyStyles({ 
        'background-color': 'green',
        'z-index': 1 
      });
      sprite.startAtPixel({ y: 0 });
      move(sprite, { easing: easeOut });
    });

    keptSprites.forEach(sprite => {
      sprite.applyStyles({'background-color': 'blue'})
      move(sprite);
    })

    removedSprites.forEach(sprite => {
      sprite.applyStyles({ 
        'background-color': 'red',
        'z-index': 1 
      });

      sprite.endAtPixel({ y: window.innerWidth * 0.8 });
      move(sprite, { easing: easeIn });
    });
  },

  actions: {
    addItem() {
      let circles = this.get('circles');
      let index = circles.length +1;
      this.set('circles', circles.slice(0, 0).concat([makeCircle(index)]).concat(circles.slice(0)));
    },
    deleteItem() {
      let circles = this.get('circles');
      this.set('circles', circles.filter(item => item.number !== circles.length));
    }
  }
});

function makeCircle(index) {
  return { number: index };
}
