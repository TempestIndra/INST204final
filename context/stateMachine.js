import { createMachine } from 'xstate';

export const storyMachine = (character) => {

  return {
    id: "INST240",
    initial: "Start",
    states: {
      "Start": {
        meta: {
          Story:
            "Hi My name is Evita and you are my personal assistance today. Today we will be Amazon recruiter and we will be working on a new project to use artificial intelligence to automate the hiring process.",
        },
        on: {
          "Move forward": {
            target: "Reviewing Applications",
          },
        },
      },
      "Reviewing Applications": {
        meta: {
          Story:
            "I am excited about the potential of this technology to help me identify top talent more quickly and efficiently. However, I also know the potential for bias in AI systems. I want to make sure that my system is fair and unbiased, so I decide to run a test.",
        },
        on: {
          Retreat: {
            target: "Start",
          },
        },
      },
    },
  }
};

export const stateMachineFromVars = (character) => {
  return createMachine(storyMachine(character));
};
