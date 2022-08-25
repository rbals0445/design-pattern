let counter = 0;

class Counter {
    // 메서드 인스턴스 자체를 반환.
    getInstance() {
        return this
    }

    getCount() {
        return counter;
    }

    increment() {
        return ++counter;
    }

    decrement() {
        return --counter;
    }
}
// 핵심은 인스턴스를 단 한번만 만들 수 있어야 한다. -> 이건 여러번 만들기 가능

const counter1 = new Counter();
const counter2 = new Counter();

console.log(counter1.getInstance() === counter2.getInstance()); // 서로 다른 인스턴스

/**
 * Counter class가 어떻게 한 번만 만들어지게 할 것인가?
 * instance 변수를 만들어서, 생성자에서 instance가 매번 새로운 인스턴스를 가리키게 한다.
 */



