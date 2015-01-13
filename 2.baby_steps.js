var s = 0
for (idx=2; idx<process.argv.length; idx++){
    s = s + Number(process.argv[idx])
}
console.log(s);

