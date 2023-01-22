interface Product {
    operation() : string;
}

abstract class Creator {
    // 팩토리메소드 생성
    public abstract factoryMethod() : Product; // operation을 구현 해야함.

    public someOpeartion(): string {
        const product:Product = this.factoryMethod(); 
        return `Creator: ${product.operation()}`
    
    }
}

class ConcreteCreator1 extends Creator {

    public factoryMethod(): Product {
        /*
        ConcreteProduct1 : {
            operation() : {return xxx}
        } // interface에 선언된 내용들을 구현 했음.
        */
        return new ConcreteProduct1();
    }
}

class ConcreteCreator2 extends Creator {

    public factoryMethod(): Product {
        return new ConcreteProduct2();
    }
}

class ConcreteProduct1 implements Product {
    operation(): string {
        return 'ConcreateProduct1의 operation'
    }
}

class ConcreteProduct2 implements Product {
    operation(): string {
        return 'ConcreateProduct2의 operation'
    }
}


const cp1 = new ConcreteCreator1();
console.log(cp1.someOpeartion());
const cp2 = new ConcreteCreator2();
console.log(cp2.someOpeartion());

