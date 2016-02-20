import DS from 'ember-data';

let equality = DS.Model.extend({
    name: DS.attr('string')
});

equality.reopenClass({
    FIXTURES: [
        {
            id: 'equal',
            name: 'Equal'
        },
        {
            id: 'greater-than',
            name: 'Greater than'
        },
        {
            id: 'less-than',
            name: 'Less than'
        }
    ]
});

export default equality;