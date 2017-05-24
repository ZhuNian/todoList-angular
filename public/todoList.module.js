var todoList = [{
  id: 0,
  name: 'angular',
  did: false
}, {
  id: 1,
  name: 'node',
  did: true
}, {
  id: 2,
  name: 'english',
  did: true
}, {
  id: 3,
  name: 'express',
  did: true
}, {
  id: 4,
  name: 'refactor',
  did: false
}, {
  id: 5,
  name: 'coding',
  did: false
}];

angular
  .module('todoListApp', [])
  .component('todo', {
    template: `
     <ul>
        <li ng-repeat="t in $ctrl.todoList | filter: {did: $ctrl.name == 'true'}">
          <input type='checkbox' ng-model='t.did' ng-click='$ctrl.onClick(t)' style='display: inline'></input>
          <p style='display:inline'> {{t.name}} </p>
          </li>
          </ul>
    `,
    bindings: {name: '@'},
    controller: function() {
      this.todoList = todoList;
    }
  });
