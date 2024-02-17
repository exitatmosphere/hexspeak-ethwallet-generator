import { randomBytes } from "crypto";
import { ethers } from "ethers";
import { config } from "./config";

const LEN = config.LEN as 3 | 4;
const ZEROS = config.ZEROS;

const base = 16;
const prefixes = {
  3: ["ace", "add", "bad", "bed", "bee", "b0b", "b00", "dad", "fee", "f0e"],
  4: [
    "4bid",
    "babe",
    "bead",
    "beef",
    "b00b",
    "b1oc",
    "cafe",
    "c0de",
    "dead",
    "deaf",
    "deed",
    "face",
    "fade",
    "fa11",
    "feed",
    "f00d",
    "f1ac",
  ],
};

const currentPrefixes = prefixes[LEN].map((word) =>
  word.concat("0".repeat(ZEROS))
);
const len = LEN + ZEROS;

console.log(
  `Chance: 1 in ${Math.round(
    base ** len / currentPrefixes.length
  )} per iteration`
);

let iterations = 0;
process.stdout.write(`Iterations: `);

while (true) {
  ++iterations;

  const prevIterationDigits = (Math.log(iterations - 1) * Math.LOG10E + 1) | 0;
  process.stdout.moveCursor(-prevIterationDigits, 0);
  process.stdout.write(iterations.toString());

  const pk = "0x" + randomBytes(32).toString("hex");
  const addr = ethers.computeAddress(pk);
  const prefix = addr.slice(2, 2 + len).toLowerCase();

  if (currentPrefixes.includes(prefix)) {
    console.log("\n");
    console.log(`Private key: ${pk}`);
    console.log(`Address: ${addr}`);
    break;
  }
}
