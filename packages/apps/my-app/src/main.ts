import { isEven } from '@myorg/is-even';

export function handler() {
  const no = 1;
  console.log(`${no} isEven = ${isEven(no)}`);
}

/* Uncomment and run `npx nx serve my-app` to run locally */
// handler();
