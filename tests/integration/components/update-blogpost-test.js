import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('update-blogpost', 'Integration | Component | update blogpost', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{update-blogpost}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#update-blogpost}}
      template block text
    {{/update-blogpost}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
