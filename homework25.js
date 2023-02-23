// // Task 1
const user = {};
// Object.defineProperty (user, 'name', {
//     value: 'Stanislav',
//     writable: false,
// });
// console.log(Object.getOwnPropertyDescriptor(user, 'name'));

// Object.defineProperty(user, 'age', {
//     value: 27,
//     writable: false,
// });
// console.log(Object.getOwnPropertyDescriptor(user, 'age'));

// Object.defineProperty(user, 'id', {
//     value: 1,
//     writable: false,
//     enumerable: false,
// });
// console.log(Object.getOwnPropertyDescriptor(user, 'id'));
Object.defineProperties(user, {
    name:{
        value: 'Stanislav',
        writable: false
    },
    age: {
        value: 27,
        writable: false
    },
    id: {
        value: 1,
        writable: false,
        enumerable: false
    },
});
console.log(user);
console.log(Object.getOwnPropertyDescriptors(user));

// // Task 2

const dataBase = {
    dbName: 'user',
    dbType: 'MySQL'
};

const configurateDB = {
    token: '123',
    password: '567',
    user: 'admin'
};

Object.freeze(dataBase);
console.log(Object.isFrozen(dataBase));
Object.seal(configurateDB);
console.log(Object.isSealed(configurateDB));

// // Task 3

const salaries = {
    frontend: 2000,
    backend: 1500,
    design: 1000,
    set addSalary(position){
        for (let i = 0; i < position.length; i++) {
            let arr = position[i].split(':');
            salaries[arr[0]] = +arr[1];
        }
        return salaries;
    }
}
Object.defineProperty(salaries, 'sum', {
    get (){
        let sum = 0;
        for (const salary in this) {
            if (+this[salary]) {
                sum += this[salary];
            }
        }
        return sum;
    }
});

console.log(salaries.sum);
salaries.addSalary = ['frontend: 2000', 'backend: 1500', 'design: 1000', 'manager: 800'];
console.log(salaries.sum);
console.log(salaries);

// // Task 4

let userTusk = {
    name: 'Mike',
    surname: 'Davis',
    age: 25,
}
Object.defineProperty(userTusk, 'userInfo', {
    get() {
        let userInfo = {};
        for (const key in userTusk) {
            userInfo[key] = userTusk[key];
        }
        console.log(userInfo);
    }
})
            
userTusk.userInfo;
userTusk.login = 'MK_18';
userTusk.userInfo;


