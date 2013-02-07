var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Observable = (function () {
    function Observable() {
        this.observers = [];
    }
    Observable.prototype.registerObserver = function (observer) {
        this.observers.push(observer);
    };
    Observable.prototype.removeObserver = function (observer) {
        this.observers.splice(this.observers.indexOf(observer), 1);
    };
    Observable.prototype.notifyObservers = function (arg) {
        this.observers.forEach(function (observer) {
            observer.update(arg);
        });
    };
    return Observable;
})();
var Humnoid = (function () {
    function Humnoid(name) {
        this.name = name;
    }
    Humnoid.prototype.update = function (arg) {
        console.log(this.name, " says : old value : ", arg.old, "new value : ", arg.new);
    };
    return Humnoid;
})();
var Humn = (function (_super) {
    __extends(Humn, _super);
    function Humn(name) {
        _super.call(this);
        this.setName(name);
    }
    Humn.prototype.getName = function () {
        return this.name;
    };
    Humn.prototype.setName = function (name) {
        var old = this.name;
        this.name = name;
        this.notifyObservers({
            old: old,
            new: this.name
        });
    };
    return Humn;
})(Observable);
Peter = new Humn("Peter");
September = new Humnoid("September");
December = new Humnoid("December");
Peter.registerObserver(September);
Peter.registerObserver(December);
Peter.setName("Peter Bishop");
Peter.removeObserver(December);
Peter.setName("Peter BISHOP");
