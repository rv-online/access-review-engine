import { AccessReviewEngineStore, seedAccessReviewEngine } from "./domain.js";

const store = new AccessReviewEngineStore();
store.seed(seedAccessReviewEngine);
console.log(JSON.stringify(store.summary(), null, 2));
