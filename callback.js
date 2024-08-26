// console.log("one")
// console.log("two")
// setTimeout(()=>{
//     console.log("hello")
// },5000)
// console.log("three")
// console.log("four")

// function sum(a,b){
//     console.log(a+b)
// }

// function calculator(a,b,sum){
//     sum(a,b)
// }
// calculator(1,2,sum)


// function getData(dataId,getNext){
//     setTimeout(()=>{
//         console.log("data",dataId)
// if (getNext){
//     getNext()
// }
//     },2000)
// }
// getData(1,()=>{
//     getData(2,()=>{
//         getData(3)
//     })
// })

function asyncFunc1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data1")
            resolve("success")
        },3000)
    })
}

function asyncFunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data2")
            resolve("success")
        },3000)
    })
}

function asyncFunc3(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data3")
            resolve("success")
        },3000)
    })
}

// console.log("fetching data1...")
// asyncFunc1().then((res)=>{
//     console.log("fetching data2...")
//    return asyncFunc2()
// }
// ).then((res)=>{
//     console.log("fetching data3...")
//     return asyncFunc3()
// }).then((res)=>{
//     console.log(res)

// })
(async function(){
    console.log("fetching data1...")
    await asyncFunc1()
    console.log("fetching data2...")
    await asyncFunc2()
    console.log("fetching data3...")
    await asyncFunc3()
   
})()