function mean(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0) / numbers.length;
}

function median(numbers) {
    const sorted = numbers.slice().sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
        return (sorted[mid - 1] + sorted[mid]) / 2;
    } else {
        return sorted[mid];
    }
}

function quartiles(numbers) {
    const sorted = numbers.slice().sort((a, b) => a - b);
    
    const q2 = median(sorted);
    const lowerHalf = sorted.slice(0, Math.floor(sorted.length / 2));
    const upperHalf = sorted.slice(Math.ceil(sorted.length / 2));
    
    const q1 = median(lowerHalf);
    const q3 = median(upperHalf);
    
    return { q1, q2, q3 };
}

function variance(numbers) {
    const meanValue = mean(numbers);
    return numbers.reduce((acc, curr) => acc + Math.pow(curr - meanValue, 2), 0) / numbers.length;
}

function standardDeviation(numbers) {
    return Math.sqrt(variance(numbers));
}

function min(numbers) {
    return Math.min(...numbers);
}

function max(numbers) {
    return Math.max(...numbers);
}

function range(numbers) {
    const min_val = min(numbers);
    const max_val = max(numbers);
    return max_val - min_val;
}

function iqr(numbers) {
    const { q1, q3 } = quartiles(numbers);
    return q3 - q1;
}

// Example usage:
const data = [0.1, 2, 2.3, 4, 5, 6, 7, 8, 9, 10,11];


function updateStat(dataset,unit){
    document.getElementById("stat-min").innerHTML=min(dataset)+" "+unit;
    document.getElementById("stat-max").innerHTML=max(dataset)+" "+unit;
    document.getElementById("stat-range").innerHTML=range(dataset)+" "+unit;
    document.getElementById("stat-median").innerHTML=median(dataset)+" "+unit;
    document.getElementById("stat-mean").innerHTML=mean(dataset).toFixed(2)+" "+unit;
    document.getElementById("stat-stdivation").innerHTML=standardDeviation(dataset).toFixed(2)+" "+unit;
    document.getElementById("stat-q1").innerHTML=quartiles(dataset).q1.toFixed(2)+" "+unit;
    document.getElementById("stat-q2").innerHTML=quartiles(dataset).q2.toFixed(2)+" "+unit;
    document.getElementById("stat-q3").innerHTML=quartiles(dataset).q3.toFixed(2)+" "+unit;
    document.getElementById("stat-iqr").innerHTML=iqr(dataset)+" "+unit;
}

