import Route from '@ember/routing/route';
export default Route.extend({
  model(params) {
    const shapes = [ 
      { id: 1, name: 'rectangle', desc: 'this is a rect' },
      { id: 2, name: 'square', desc: 'this is a square' },
      { id: 3, name: 'triangle', desc: 'this is a triangle' },
      { id: 4, name: 'trapezoid', desc: 'this is a trap' }
    ];
    return shapes.find(shape => shape.id === params.shape_id);
  }
});