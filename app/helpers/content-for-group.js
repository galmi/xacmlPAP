import Ember from "ember";

export default Ember.Helper.helper(function([content, group, contentGroupKey]) {
    return content.filterBy(contentGroupKey, group);
});