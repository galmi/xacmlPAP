export default function (server) {

    // Seed your development database using your factories. This
    // data will not be loaded in your tests.

    // server.createList('contact', 10);
    server.createList('rule', 5);
    server.createList('policy', 5);
    server.createList('policy-set', 5);
}
