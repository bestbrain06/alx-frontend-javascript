export interface MajorCredits {
  credits: number;
  _brand: "major";
}

export interface MinorCredits {
  credits: number;
  _brand: "minor";
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _brand: "major",
  };
}


export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _brand: "minor",
  };
}


const math: MajorCredits = { credits: 10, _brand: "major" };
const physics: MajorCredits = { credits: 15, _brand: "major" };

const resultMajor = sumMajorCredits(math, physics);
console.log("Major Credits:", resultMajor.credits);

const art: MinorCredits = { credits: 5, _brand: "minor" };
const music: MinorCredits = { credits: 8, _brand: "minor" };

const resultMinor = sumMinorCredits(art, music);
console.log("Minor Credits:", resultMinor.credits);
