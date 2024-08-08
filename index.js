var object = "hello";

console.log(object)
console.log("hello world")

// ini adalah declaration variable dengan var dan init dengan value john
// halo
/*
 * halo this is a comment multiline
 * ini adalah komentar dengan banyak baris
*/
var name = "john";
console.log(name);

name = "akbar"
console.log(name);

let data = "this is a simple string";
console.log(data);

data = "akbar"
console.log(data);

let empty
console.log(empty);

const pi = 3.14 // => variable dengan tipe data float atau decimal
const area = 10 // => variable dengan tipe data integer atau bilangan bulat
const description = "ini adalah deskeipsi" // => variable dengan tipe data tipe string atau teks

console.log(typeof area); // => typeof untuk mengecheck tipe data  apakah dari variable area
console.log(typeof description);

const sudahistirahat = true; // => variable dengan tipe data boolean
console.log(typeof sudahistirahat);

const profile = {
  name: "akbar", // => tipe dara dari property name adalah string
  age: 23, // => tipe data dari age adalah number
  adress: "bandung", // => tipe data dari property adress adalah string
  isMarried: false, // => tipe data dari property isMarried adalah false,
  school: { // => property dengan tipe data object atau nested object
    name: "ITERA",
    year: 2024
  }
};

console.log(profile);
console.log(profile.name); // => akses properti name di dalam object profile
console.log(profile.school.name); // => akses property name didalam property school

// Array
const samplearray = [
    22, // => data pertama di dalam array, dan selanjutnya adalah data urutan setelahnya
    "A",
    true,
    { name: "akbar"} // => array of object
]

console.log(typeof samplearray);

const scores = [70, 80, 90, 95] // => 70 itu merupakan elem di dalam array yang beroperasi di index 0
/*
 * setiap data di dalam array memiliki index sebagai urutan  atau lokasi data tersebut berada
 *
 * dan array itu selalu dimulai dengan index 0 yang artinya data pertama dalam array
 *
 * data contoh diatas index ke 0 adalah 70
*/
console.log(scores[0]); // => akses array menggunakan index

console.log(typeof scores); // => akses array menggunakan index

scores[0] = 50; // => mengubah isi element f=dari array index ke 0

console.log(scores[0]); // output: 50

const fruits = ["apple", "banana", "kiwi"]; // => variable dengan tipe data string

console.log(fruits); // => output apple, banana, kiwi

fruits.push("orange"); // => menambahkan elemen di akhir array

console.log(fruits); // => output apple, banana, kiwi, orange

fruits.unshift("mango"); // => menambahkan elemen di awal; array

console.log(fruits); // => output mango, apple, banana, kiwi, orange

fruits.pop(); // => menghapus elemen di akhir array

console.log(fruits); // => output mango, apple, banana, kiwi

fruits.shift();  // => menghapus elemen di awal array

console.log(fruits);  // => output apple, banana, kiwi

console.log(fruits.length);  // => memastikan panjang dari array

const morefruits = ["orange", "grape"]; // => variable dengan tipe data string

const allfruits = fruits.concat(morefruits);  // => menggabungkan 2 array menjadi satu

console.log(allfruits);  // => output apple, banana, kiwi, orange, grape

/*
 *
 * let i = 0 adalah definisi dari index yang mau kita mulai perulangannya, jika i ini isinya 0
 * maka array yang di akses dari index 0.
 * 
 * i < 0 foods,length adalah condition yang berarti, variable itu tidak boleh kurang dari,
 * foods.length atau dalam kasus ini index itu tidak boleh melebihi panjang array
 * 
 * i++ adalah post statement yang berarti, ketika condition i < foods.length itu terpenuhi,
 * maka nilai i akan ditambah 1
 * 
 * ++ merupakan increment (atau menambah 1)
 * -- merupakan decrement (atau mengurang 1)
 * 
 */

const foods = ["noodle", "egg" , "rice"]; // => variable dengan tipe data string
for (let i = 0; i < foods.length; i ++) { // => perulangan for
    console.log(foods[i]); // => output nppdle egg rice
}

console.log("perulangan berhasil");

// 2 dimensi array
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[1][2]); // => output [4, 5, 6]

//
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    } 
}

// 3 dimensi array
const matrixs = [
    [
        [1, 2, 3],
        [4, 5, 6],
    ],
    [
        [7, 8, 9],
        [10, 11, 12],
    ],
];

console.log(matrixs[0][1][2]);

// segitiga kanan
for (let i = 0; i < 5; i++) {
    let str = "* "

    console.log(str.repeat(i));
}

//segitiga kiri
let x = 5
for (let i = 0; i < x; i++) {
    let str = "* "
    let space = "  "

    console.log(space.repeat(x-i) + str.repeat(i));
}

//gabungan segitiga kiri dan segitiga kanan

for (let i = 0; i < x; i++) {
    let str = "* ";
    let space = "  ";

    let segitigakiri = space.repeat(x - i - 1) + str.repeat(i + 1); //=> Segitiga kiri
    let segitigakanan = str.repeat(i + 1); //=> Segitiga kanan
    
    console.log(segitigakiri + segitigakanan); //=> output gabungan segitiga kiri dan kanan
}

/**
 * ketika variable if () bernilai boolean cukup gunakan nama variable jika ingin
 * memperiksa bahwa itu benar atau true. Jika ingin memperiksa jika itu salah cukup gunakan !namavariable
 * yang artinya ! melambangkan negative value dalam kasus boolean negative adalah false
 */

const isloggedin = true;
if (isloggedin) { // => untuk tipe data boolean kita hanya cukup masukan kondisi true atau false
    console.log("Halo Admin");
} else {
    console.log("Harap Login");
}

const baju = "";
    
if (baju == "putih"){ // => kalau tipe datanya bukan boolean kita harus pakai ekspresi == atau =/=
    console.log("baju bersih");
}else if (baju == "merah") {
    console.log("baju warna merah");
} else if (baju == "hitam") {
    console.log("baju hitam");
}   else {
    console.log("baju kotor");
}

/**
 * 
 * ini merupakan declaration dari sebuah function sederhana
 * decleration function di tulis dengan keywords function namaFunction()
 * jika function tidsk memiliki keyword return dia merupakan void function
 * yang berarti function tersebut tidak mengembalikan nilai apapun ketika digunakan
 * age = 23 merupakan iniliazation parameter dengan nilai awal atau default value,
 * ketika kita melakukan pemanggilan function tanpa mengirim parameter age, maka secara default
 * age itu bernilai 23 dan jika kita memasukan nilai parameter ke 2 nilai age akan sesuai berdasarkan
 * parameter kedua yang dikirim dari pemanggilan function
 * 
 * 
 * @return String
*/

function greet (name, age = 23) {
    // penggunaan string literal atau ' ketika ingin menggunakan variabel/parameter harus dengan${}
   return `hello, ${name}. My age is ${age} yo`;
}

const greeting = greet("akbar", 24); // => jika function memiliki keywords return didalamnya bisa menggunakan variable

console.log(greeting);

console.log(greet("akbar")); // => function bisa digunakan langsung tanpa variable seperti contoh berikut

/**
 * * perkalian
 * / pembagian
 * + penjumlahan
 * - pengurangan
 * 
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
function add(a, b) {
    if (a > 2) {
        return a * b;
    }
    return a + b;
}

console.log(add(5, 3)); // => Output selalu a + b dalam kasus ini argument nya bernilai 5 dan 3 dan hasilnya 8

function fizzbuzz(number) {
    if (number % 2 == 0) {
        return "fizz";
    }

    if (number % 3 == 0) {
        return "buzz";
    }

    if (number % 5 == 0) {
        return "fizzbuzz";
    }

    return "failed";
}
console.log(fizzbuzz(2)); // => output fizz
console.log(fizzbuzz(3)); // => output buzz
console.log(fizzbuzz(5)); // => output fizzbuzz
console.log(fizzbuzz(7)); // => output failed

// anonymous function
const greetanon = function(name){
    return `hello, ${name} from anonymous function`;
}

console.log(greetanon("akbar"));

// arrow function
const greatarrow = (name) => `hello, ${name} from Arrow function`;

console.log(greatarrow("akbar"));

/**
 * class itu didefinisikan dengan keyword class
 * class juga memiliki constructor dimana cinstructor diakses di awal ketika
 * kita melakukan pembuatan object baru dari class dengan keyword new car ("toyota", "camry" 2020)
 * pada dalam constructor kita menggunakan keyword this. untuk mendefinisikan sebuah property,
 * didalam object. Mirip dengan tipe data object lainnya class juga punya properti
 */
class car {
    constructor(name, brand, year) {
      this._name = name;
      this._brand = brand;
      this._year = year;
    }

    information() {
        return `${this._name} have brand from ${this._brand} and build in ${this._year}`;
    }

// ini adalah setter untuk merubah nilai dari sebuah properti
    setname(name) {
        this._name = name;
    }

    // ini adalah getter untuk mengambil nilai dari sebuah properti
    getname() {
        return this.name;
    }

    //ini merupakan contoh penggunakan setters dengan keywords set
    set name(value) {
        if (value !== " ") {
            this._name = value;
        } else {
            console.log("the value must be empty string");
        }
    }

    // ini merupakan contoh penggunaan getters dengan keywords get
    get name() {
    return this._name;
    }
}

const Car = new car("toyota", "camry", 2020);
console.log(Car.information());
//Car.setname ("daihatsu");
Car.name = "daihatsu"; // menggunakan setter untuk merubah data dari poroperty yang ada di class
console.log(Car.information());
console.log(Car.name);


class animal {
    constructor(name) {
        this.name = name;
    }

    speak(){
        console.log(`${this.name} makes a sound.`);
    }
}

/**
 * Dog merupakan sebuah children class yang mewarosi semua yang ada di dalam kelas animal
 * baik itu property maupun method
 */
class Dog extends animal { // children
    speak() {
    console.log("what the dog do'in;");
    }
}

const dog = new Dog("moly"); //parent
dog.speak();

/**
 * keywords super digunakan untuk mengakses isi dari parent class
 */
class Cat extends animal {
    constructor(name,color){
        super(name)
        this.color = color;
    }

    speak(){
        super.speak();
        console.log(`${this.name} meows.`);
        console.log(`${this.color} color.`);
    }
}

const cat = new Cat("Whisker", "Gray")
cat.speak();



class Methotil {
    static add(a, b) {
        return a + b;
    }

    static multiply(a, b) {
        return a * b;
    }
}

console.log(Methotil.add(1, 2)); // output 3
console.log(Methotil.multiply(5, 3)); // output 15

/**
 * 
 * naming comprehension class biasanya menggunakan pascalcase atau sebagai contoh loandiburstment
 * naming comprehensipon variable biasanya itu camelcase atau variablename
 * naming comprehension function buasanya itu camel case atau variablename
 * 
 */






























