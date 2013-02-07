interface Observer {
    update(arg:any );
}

class Observable{

    private observers : Observer [];

    constructor() {
        this.observers = [];
    }

    registerObserver(observer:Observer) : void {
        this.observers.push(observer);
    }

    removeObserver(observer:Observer) : void {
        this.observers.splice(this.observers.indexOf(observer), 1);
    }

    notifyObservers(arg : any) :void {
        this.observers.forEach((observer : Observer) => {
            observer.update(arg);
        });
    }
}

class Humnoid implements Observer {

    constructor(public name : string ){}

    update(arg:any){
        console.log(this.name, " says : old value : ", arg.old, "new value : ", arg.new);
    }
}

class Humn extends Observable {

    private name : string;

    constructor(name : string) {
        super();
        this.setName(name);
    }

    public getName(){
        return this.name;
    }

    public setName(name:string){
        var old = this.name;
        this.name = name;
        this.notifyObservers({old:old, new:this.name});
    }
}

Peter = new Humn("Peter");

September = new Humnoid("September");
December = new Humnoid("December");

Peter.registerObserver(September);
Peter.registerObserver(December);

Peter.setName("Peter Bishop");

Peter.removeObserver(December);

Peter.setName("Peter BISHOP");
