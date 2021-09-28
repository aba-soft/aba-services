const sData: Record<string, {a: number, b: number}> = {
    "26": {
        a: 2,
        b: 0
    },
    "27": {
        a: 0,
        b: 1
    },
    "28": {
        a: 2,
        b: 0
    },
    "29": {
        a: 0,
        b: 2
    },
    "30": {
        a: 1,
        b: 0
    },
    "31": {
        a: 0,
        b: 2
    },
    "32": {
        a: 2,
        b: 0
    },
    "33": {
        a: 2,
        b: 0
    },
    "34": {
        a: 2,
        b: 0
    },
    "35": {
        a: 1,
        b: 0
    },
    "36": {
        a: 2,
        b: 0
    },
    "37": {
        a: 1,
        b: 0
    },
    "38": {
        a: 1,
        b: 0
    },
    "39": {
        a: 0,
        b: 0
    },
    "40": {
        a: 2,
        b: 0
    },
    "41": {
        a: 0,
        b: 0
    },
    "42": {
        a: 0,
        b: 0
    },
    "43": {
        a: 0,
        b: 2
    },
    "44": {
        a: 0,
        b: 2
    },
    "45":{
        a: 1,
        b: 0
    },
    "46":{
        a: 0,
        b: 2
    },
    "47":{
        a: 0,
        b: 1
    },
    "48":{
        a: 0,
        b: 1
    },
    "49":{
        a: 0,
        b: 0
    },
    "50": {
        a: 0,
        b: 0
    },
}
const nData: Record<string, {a: number, b: number}> = {
    "26": {
        a: 0,
        b: 2
    },
    "27": {
        a: 1,
        b: 0
    },
    "28": {
        a: 0,
        b: 2
    },
    "29": {
        a: 2,
        b: 0
    },
    "30": {
        a: 0,
        b: 1
    },
    "31": {
        a: 1,
        b: 0
    },
    "32": {
        a: 0,
        b: 1
    },
    "33": {
        a: 0,
        b: 1
    },
    "34": {
        a: 0,
        b: 2
    },
    "35": {
        a: 0,
        b: 1
    },
    "36": {
        a: 0,
        b: 2
    },
    "37": {
        a: 0,
        b: 1
    },
    "38": {
        a: 0,
        b: 1
    },
    "39": {
        a: 0,
        b: 2
    },
    "40": {
        a: 0,
        b: 1
    },
    "41": {
        a: 0,
        b: 2
    },
    "42": {
        a: 1,
        b: 0
    },
    "43": {
        a: 1,
        b: 0
    },
    "44": {
        a: 2,
        b: 0
    },
    "45":{
        a: 0,
        b: 0
    },
    "46":{
        a: 1,
        b: 0
    },
    "47":{
        a: 1,
        b: 0
    },
    "48":{
        a: 0,
        b: 0
    },
    "49":{
        a: 1,
        b: 0
    },
    "50": {
        a: 1,
        b: 0
    },
 }
function snFormula(fields: Record<string, "a"| "b">) {
    let s: number = 0;
    let n: number = 0;
    for (let index = 26; index <= 50; index++) {
        const field = fields[`${index}`];
        s = s + sData[`${index}`][field]
        n = n + nData[`${index}`][field]
    }
    return { s, n , max: Math.max(s, n)}
}
console.log(snFormula(
    {
        "26":"b",
        "27":"b",
        "28":"b",
        "29":"b",
        "30":"b",
        "31":"a",
        "32":"b",
        "33":"a",
        "34":"b",
        "35":"b",
        "36":"b",
        "37":"b",
        "38":"a",
        "39":"a",
        "40":"b",
        "41":"b",
        "42":"b",
        "43":"b",
        "44":"b",
        "45":"a",
        "46":"b",
        "47":"b",
        "48":"b",
        "49":"b",
        "50":"b"
    }
    ));