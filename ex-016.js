const school = "    ABCD    ";
const schl = "abcdefghijklmnopqrstwxyz";
console.log(schl.toUpperCase());
console.log(school.toLowerCase());
console.log(school.trim());


const str0 = `abcdiyryfgybhdbvfbvubhdvbfvhk`;

const part = str0.slice(2,6);
const sp = str0.split('b');
console.log(sp);
const spl = sp.join('b');
console.log(spl);

const full = school.concat(schl);
console.log(full);
console.log(full.includes('d'));
