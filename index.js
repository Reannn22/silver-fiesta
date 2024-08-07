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

//gabung segitiga kiri dan segitiga kanan

for (let i = 0; i < x; i++) {
    let str = "* ";
    let space = "  ";

    let segitigakiri = space.repeat(x - i - 1) + str.repeat(i + 1); //=> Segitiga kiri
    let segitigakanan = str.repeat(i + 1); //=> Segitiga kanan
    
    console.log(segitigakiri + segitigakanan); //=> Gabungkan segitiga kiri dan kanan
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

const baju = "putih";
    
if (baju == "putih"){ // => kalau tipe datanya bukan boolean kita harus pakai ekspresi == atau =/=
    console.log("baju bersih");
}else if (baju == "merah") {
    console.log("baju warna merah");
} else {
    console.log("baju kotor");
}