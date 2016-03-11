export default function () {

    this.passthrough('/rules', ['post']);

    this.get('/rules', function(db, request) {
        return {
            rules: db.rules
        };
    });
    this.get('/rules/:id', function(db, request) {
        return {
            rule: db.rules.find(request.params.id)
        };
    });
    this.post('/rules', function(db, request) {
        let attrs = JSON.parse(request.requestBody);
        let rule = db.rules.insert(attrs);
        return {
            rule: rule
        };
    });
    this.put('/rules/:id');
    this.del('/rules/:id');
    this.patch('/rules/:id', function(db, request){
        let attrs = JSON.parse(request.requestBody);
        let rule = db.rules.update(request.params.id, attrs.rule);
        return {
            rule: rule
        };
    });

    this.get('/policies', function(db, request) {
        return {
            policies: db.policies
        };
    });
    this.get('/policies/:id', function(db, request) {
        return {
            policy: db.policies.find(request.params.id)
        };
    });
    this.post('/policies', function(db, request) {
        let attrs = JSON.parse(request.requestBody);
        let policy = db.policies.insert(attrs);
        return {
            policy: policy
        };
    });
    this.put('/policies/:id');
    this.del('/policies/:id');
    this.patch('/policies/:id', function(db, request){
        let attrs = JSON.parse(request.requestBody);
        let policy = db.policies.update(request.params.id, attrs.policy);
        return {
            policy: policy
        };
    });

    this.get('/policy-sets', function(db, request) {
        return {
            "policy-sets": db['policy-sets']
        };
    });
    this.get('/policy-sets/:id', function(db, request) {
        return {
            'policy-set': db['policy-sets'].find(request.params.id)
        };
    });
    this.post('/policy-sets', function(db, request) {
        let attrs = JSON.parse(request.requestBody);
        let policySet = db['policy-sets'].insert(attrs);
        return {
            'policy-set': policySet
        };
    });
    this.put('/policy-sets/:id');
    this.del('/policy-sets/:id');
    this.patch('/policy-sets/:id', function(db, request){
        let attrs = JSON.parse(request.requestBody);
        let policySet = db['policy-sets'].update(request.params.id, attrs.policy);
        return {
            'policy-set': policySet
        };
    });

    this.get('/matches/:id', function(){
        return {
            match: {
                id: 1,
                attributeId: 'attr',
                attributeValue: 'value'
            }
        };
    });

    this.get('/attributes', function(){
       return {
           attributes: [
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
       };
    });

    var combiningAlgorithms = [
        {
            id: 'deny-overrides',
            description: 'Deny overrides'
        }, {
            id: 'deny-unless-permit',
            description: 'Deny unless permit'
        }, {
            id: 'first-applicable',
            description: 'First applicable'
        }, {
            id: 'only-one-applicable',
            description: 'Only one applicable'
        }, {
            id: 'permit-overrides',
            description: 'Permit overrides'
        }, {
            id: 'permit-unless-deny',
            description: 'Permit unless deny'
        }
    ];
    this.get('/combiningAlgorithms', function(){
        return {
           combiningAlgorithms: combiningAlgorithms
       };
    });
    this.get('/combiningAlgorithms/:id', function(db, request){
        var value;
        combiningAlgorithms.forEach(function(item) {
            if (item.id === request.params.id) {
                value = item;
            }
        });
        return {
            combiningAlgorithm: value
        };
    });
    // These comments are here to help you get started. Feel free to delete them.

    /*
     Config (with defaults).

     Note: these only affect routes defined *after* them!
     */
    // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
    // this.namespace = '';    // make this `api`, for example, if your API is namespaced
    // this.timing = 400;      // delay for each request, automatically set to 0 during testing

    /*
     Route shorthand cheatsheet
     */
    /*
     GET shorthands

     // Collections
     this.get('/contacts');
     this.get('/contacts', 'users');
     this.get('/contacts', ['contacts', 'addresses']);

     // Single objects
     this.get('/contacts/:id');
     this.get('/contacts/:id', 'user');
     this.get('/contacts/:id', ['contact', 'addresses']);
     */

    /*
     POST shorthands

     this.post('/contacts');
     this.post('/contacts', 'user'); // specify the type of resource to be created
     */

    /*
     PUT shorthands

     this.put('/contacts/:id');
     this.put('/contacts/:id', 'user'); // specify the type of resource to be updated
     */

    /*
     DELETE shorthands

     this.del('/contacts/:id');
     this.del('/contacts/:id', 'user'); // specify the type of resource to be deleted

     // Single object + related resources. Make sure parent resource is first.
     this.del('/contacts/:id', ['contact', 'addresses']);
     */

    /*
     Function fallback. Manipulate data in the db via

     - db.{collection}
     - db.{collection}.find(id)
     - db.{collection}.where(query)
     - db.{collection}.update(target, attrs)
     - db.{collection}.remove(target)

     // Example: return a single object with related models
     this.get('/contacts/:id', function(db, request) {
     var contactId = +request.params.id;

     return {
     contact: db.contacts.find(contactId),
     addresses: db.addresses.where({contact_id: contactId})
     };
     });

     */
}

/*
 You can optionally export a config that is only loaded during tests
 export function testConfig() {

 }
 */
