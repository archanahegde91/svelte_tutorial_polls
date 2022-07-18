import { writable } from "svelte/store";

const PollStore = writable([
    {
        question:'Python or JavaScript',
        answerA:'JavaScript',
        answerB:'Python',
        votesA:9,
        votesB:10,
        id:1
    },
]);

export default PollStore;