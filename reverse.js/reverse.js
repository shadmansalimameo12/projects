// const names = 'i am a good boy'

// for (const name of names) {
//   console.log(name)
// }







// কোডের কাজ কীভাবে হচ্ছে, ধাপে ধাপে ব্যাখ্যা:
// আমাদের শুরুতে একটি স্ট্রিং আছে names = 'i am a good boy' এবং একটি খালি স্ট্রিং reverse = ''। এরপর, আমরা একটি for...of লুপ ব্যবহার করে স্ট্রিং names এর প্রতিটি অক্ষর এক এক করে পড়ছি এবং reverse স্ট্রিং এর সামনে সেটি যোগ করছি (মানে, প্রতিটি নতুন অক্ষর reverse স্ট্রিং এর শুরুতে যাবে)।

// এটি কীভাবে কাজ করে, তা ধাপে ধাপে দেখে নাও:

// প্রথম ধাপ:
// শুরুতে, names = 'i am a good boy' এবং reverse = ''।
// লুপ শুরু হলে প্রথম অক্ষর হবে 'i'।
// ধাপে ধাপে:
// Iteration 1 (অক্ষর: 'i'):
// reverse এর বর্তমান মান: '' (খালি)
// 'i' নিয়ে আমরা reverse = 'i' করে ফেলি।
// এখন, reverse = 'i'।
// Iteration 2 (অক্ষর: ' ' (স্পেস)):
// reverse এর বর্তমান মান: 'i'।
// ' ' (স্পেস) নিয়ে আমরা reverse = ' ' + 'i' করে ফেলি।
// এখন, reverse = ' i'।
// Iteration 3 (অক্ষর: 'a'):
// reverse এর বর্তমান মান: ' i'।
// 'a' নিয়ে আমরা reverse = 'a' + ' i' করে ফেলি।
// এখন, reverse = 'a i'।
// Iteration 4 (অক্ষর: 'm'):
// reverse এর বর্তমান মান: 'a i'।
// 'm' নিয়ে আমরা reverse = 'm' + 'a i' করে ফেলি।
// এখন, reverse = 'ma i'।
// Iteration 5 (অক্ষর: ' ' (স্পেস)):
// reverse এর বর্তমান মান: 'ma i'।
// ' ' (স্পেস) নিয়ে আমরা reverse = ' ' + 'ma i' করে ফেলি।
// এখন, reverse = ' ma i'।
// Iteration 6 (অক্ষর: 'a'):
// reverse এর বর্তমান মান: ' ma i'।
// 'a' নিয়ে আমরা reverse = 'a' + ' ma i' করে ফেলি।
// এখন, reverse = 'a ma i'।
// Iteration 7 (অক্ষর: ' ' (স্পেস)):
// reverse এর বর্তমান মান: 'a ma i'।
// ' ' (স্পেস) নিয়ে আমরা reverse = ' ' + 'a ma i' করে ফেলি।
// এখন, reverse = ' a ma i'।
// Iteration 8 (অক্ষর: 'g'):
// reverse এর বর্তমান মান: ' a ma i'।
// 'g' নিয়ে আমরা reverse = 'g' + ' a ma i' করে ফেলি।
// এখন, reverse = 'g a ma i'।
// Iteration 9 (অক্ষর: 'o'):
// reverse এর বর্তমান মান: 'g a ma i'।
// 'o' নিয়ে আমরা reverse = 'o' + 'g a ma i' করে ফেলি।
// এখন, reverse = 'og a ma i'।
// Iteration 10 (অক্ষর: 'o'):
// reverse এর বর্তমান মান: 'og a ma i'।
// 'o' নিয়ে আমরা reverse = 'o' + 'og a ma i' করে ফেলি।
// এখন, reverse = 'oog a ma i'।
// Iteration 11 (অক্ষর: 'd'):
// reverse এর বর্তমান মান: 'oog a ma i'।
// 'd' নিয়ে আমরা reverse = 'd' + 'oog a ma i' করে ফেলি।
// এখন, reverse = 'doog a ma i'।
// Iteration 12 (অক্ষর: ' ' (স্পেস)):
// reverse এর বর্তমান মান: 'doog a ma i'।
// ' ' (স্পেস) নিয়ে আমরা reverse = ' ' + 'doog a ma i' করে ফেলি।
// এখন, reverse = ' doog a ma i'।
// Iteration 13 (অক্ষর: 'b'):
// reverse এর বর্তমান মান: ' doog a ma i'।
// 'b' নিয়ে আমরা reverse = 'b' + ' doog a ma i' করে ফেলি।
// এখন, reverse = 'b doog a ma i'।
// Iteration 14 (অক্ষর: 'o'):
// reverse এর বর্তমান মান: 'b doog a ma i'।
// 'o' নিয়ে আমরা reverse = 'o' + 'b doog a ma i' করে ফেলি।
// এখন, reverse = 'ob doog a ma i'।
// Iteration 15 (অক্ষর: 'y'):
// reverse এর বর্তমান মান: 'ob doog a ma i'।
// 'y' নিয়ে আমরা reverse = 'y' + 'ob doog a ma i' করে ফেলি।
// এখন, reverse = 'yob doog a ma i'।
// শেষের ফলাফল:
// শেষে, আমাদের reverse স্ট্রিং হবে 'yob doog a ma i', যা মূল স্ট্রিং 'i am a good boy' এর বিপরীত (reverse) হবে।

// কিভাবে কাজ করে:
// প্রথমে reverse শুরুতে খালি ছিল।
// প্রতিটি নতুন অক্ষর reverse স্ট্রিং এর শুরুতে যোগ হয়।
// এইভাবে পুরো স্ট্রিংটি উল্টে গিয়ে শেষ হয়।
// ধাপে ধাপে এটা যেমন কাজ করে তেমনি, তুমি একে একটি স্তুপের মতো ভাবতে পার, যেখানে প্রতিটি নতুন অক্ষর আগের অক্ষরের ওপর বসে।

// const names = 'i am a good boy'
// let reverse = ''
// for (const name of names) {
// //   console.log(name)
// reverse = name + reverse;

 
// }
// console.log(reverse)


// ---------------------------`একটি স্ট্রিং কে উল্টা করা এবং সেটি প্রিন্ট করা`---------------------------

// method number 2


// const names = 'i am a good boy'
// let rev = '';

// for ( i = 0; i < names.length; i++) {
//     // console.log(i)
//     // console.log(names[i])

//     const name = names[i];
//     rev = name + rev ; 
// }
// console.log(rev)




// shortcut way--------------------------------------------

//  const names = 'i am a good boy'

//  const rev = names.split('').reverse().join('')
//  console.log(rev)

let str = "Mississippi";
console.log(str.indexOf("i", 3));

//todo: I am ameo;










