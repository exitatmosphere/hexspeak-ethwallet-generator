# hexspeak-ethwallet-generator

Generates ethereum wallet with hexspeak address.

## Usage

### Setup env variables (may ignore this step)

See `.env.example` for reference.

### Run

```bash
pnpm start
```

Result for 4 letter word with 1 trailing zero:

```bash
Chance: 1 in 61681 per iteration
Iterations: 3830

Private key: 0x015491ee2ef90f0def134a299ba7df792900aaa197a4bdf54ffb50e7f43f0262
Address: 0xb00B08b13c89888e1F9Ae40F3182016A4ED20714
```

## Notes

Bruteforcing in this implementation is really slow and ineffective, so i wouldn't recommend running this for >6 symbols.
