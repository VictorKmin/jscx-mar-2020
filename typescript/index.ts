function sumator(a: number, b: number): number {
  return a + b;
}

console.log(sumator(10, 5));


let x: number | string = 10;

x = 'test'

///////////////////////////////////////////
enum genderEnum {
  MALE = 'male',
  FEMALE = 'female'
}

interface IGirl {
  name: string,
  age: number,
  laptop: string
}

interface IUser {
  name: string,
  age: number,
  girl?: IGirl
  gender?: genderEnum
}


const viktor: IUser = {
  age: 24,
  name: 'Viktor'
}

const dima: IUser = {
  age: 21,
  name: 'Dima',
  gender: genderEnum.FEMALE
}

const vova: IUser = {
  age: 18,
  name: 'Vova',
  gender: genderEnum.MALE
}

const userArr: IUser[] = [viktor, dima, vova]

// const userArr: Array<IUser> = [viktor, dima, vova]

function oldestFinder(users: IUser[]): IUser {
  return users.sort((a, b) => b.age - a.age)[0]
}


const oldMan = oldestFinder(userArr);

console.log(oldMan);


abstract class Person {
  name: string;
  age: number;

  constructor(name, age) {
    this.age = age;
    this.name = name;
  }
}

class Developer extends Person {
  laptop: string;

  constructor(age, name, laptop) {
    super(name, age);
    this.laptop = laptop;
  }


  run(): void {
    console.log(this.name + ' running');
    this.rename();
    this.BDay();
  }


  private rename(): void {
    this.name = 'XXXXX'
  }

  protected BDay(): void {
    this.age = this.age++
  }
}

class Alien extends Developer {
  skinColor: string

  constructor(age, name, laptop, skinColor) {
    super(age, name, laptop);
  }


  f() {
    this.BDay();
  }

}

const me = new Developer(22, 'Viktor', 'Dell');


me.run()


let obj = {
  name: 'Olga',
  age: 16,
  laptop: {
    model: 'Lenovo',
    job: 'React devica',
    phone: {
      model: 'Samsung'
    }
  }
}

console.log(obj && obj.laptop && obj.laptop.model && obj.laptop.model);

console.log(obj?.laptop?.model);

