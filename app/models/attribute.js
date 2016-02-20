import DS from 'ember-data';

let attribute = DS.Model.extend({
    name: DS.attr('string'),
    group: DS.attr('string')
});

attribute.reopenClass({
    FIXTURES: [
        {
            id: 'action',
            name: 'Action',
            group: 'Action'
        },
        {
            id: 'resource',
            name: 'Resource',
            group: 'Resource'
        },
        {
            id: 'subject',
            name: 'Subject',
            group: 'Subject'
        },
        {
            id: 'environment',
            name: 'Environment',
            group: 'Environment'
        }
    ]
});

export default attribute;