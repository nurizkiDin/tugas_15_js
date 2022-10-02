var ab = 8;
var bc = 6;
function smSegitiga(ab, bc){
    var ac = Math.sqrt(Math.pow(ab,2)+Math.pow(bc,2));

    return ac;
}

console.log("Nilai AB : "+ab+" cm");
console.log("Nilai BC : "+bc+" cm");
console.log("Panjang sisi AC pada segitiga siku-siku tersebut adalah : "+smSegitiga(ab,bc)+" cm");