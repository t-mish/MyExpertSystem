export class Transition {
  id: number;
  beginState: State;
  endState: State;
  isFinish: boolean;
  answer: string;
}

export class State {
  id: string;
  question: string;
  description: string;
}


