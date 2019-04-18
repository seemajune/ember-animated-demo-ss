import Component from '@ember/component';
import move from 'ember-animated/motions/move';
import {easeOut, easeIn } from 'ember-animated/easings/cosine';

export default Component.extend({
  isExpanded: false,
  transition: function*({ insertedSprites, removedSprites, beacons }) {
    for (let sprite of insertedSprites) {
      sprite.startAtSprite(beacons.source);
      move(sprite, { easing: easeOut });
    }

    for (let sprite of removedSprites) {
      sprite.endAtSprite(beacons.source);
      move(sprite, { easing: easeIn });
    }
  },
  actions: {
    toggleExpand() {
      this.set('isExpanded', !this.get('isExpanded'));
    }
  }
});