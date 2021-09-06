// 发布订阅模式
// 发布订阅（TypeScript版）
interface Publish {
  registerObserver(eventType: string, subscribe: Subscribe): void;
  remove(eventType: string, subscribe?: Subscribe): void;
  notifyObservers(eventType: string): void;
}
interface SubscribesObject {
  [key: string]: Array<Subscribe>;
}
class ConcretePublish implements Publish {
  private subscribes: SubscribesObject;

  constructor() {
    this.subscribes = {};
  }

  registerObserver(eventType: string, subscribe: Subscribe): void {
    if (!this.subscribes[eventType]) {
      this.subscribes[eventType] = [];
    }

    this.subscribes[eventType].push(subscribe);
  }

  remove(eventType: string, subscribe?: Subscribe): void {
    const subscribeArray = this.subscribes[eventType];
    if (subscribeArray) {
      if (!subscribe) {
        delete this.subscribes[eventType];
      } else {
        for (let i = 0; i < subscribeArray.length; i++) {
          if (subscribe === subscribeArray[i]) {
            subscribeArray.splice(i, 1);
          }
        }
      }
    }
  }

  notifyObservers(eventType: string, ...args: any[]): void {
    const subscribes = this.subscribes[eventType];
    if (subscribes) {
      subscribes.forEach((subscribe) => subscribe.update(...args));
    }
  }
}

interface Subscribe {
  update(...value: any[]): void;
}

class ConcreteSubscribe1 implements Subscribe {
  public update(...value: any[]): void {
    console.log("已经执行更新操作1，值为", ...value);
  }
}
class ConcreteSubscribe2 implements Subscribe {
  public update(...value: any[]): void {
    console.log("已经执行更新操作2，值为", ...value);
  }
}
function main() {
  const publish = new ConcretePublish();
  const subscribe1 = new ConcreteSubscribe1();
  const subscribe2 = new ConcreteSubscribe2();

  publish.registerObserver("1", subscribe1);
  publish.registerObserver("2", subscribe2);

  publish.notifyObservers("2", "22222");
}

main();
