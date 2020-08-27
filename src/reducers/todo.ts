import { Action } from 'redux';
import { ITodo } from '../Todo';


// o nome do reducer, deve ser o mesmo nome armazenado
// dentro do estado.

export default function todos(state: ITodo[] = [], action: Action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { 
        id: Math.random(), 
        text: action.text 
      }];
    default: 
      return state;
  }
}
