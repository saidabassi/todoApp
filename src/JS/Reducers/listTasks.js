import { ADD_TASK, DELETE_TASK, EDIT_TASK, DONE_TASK} from "../ActionsType";

const initialState = {
  listTasks: [
    { id: Math.random(), text: "task1", isDone: false },
    { id: Math.random(), text: "task2", isDone: false },
  ],
};
const listReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return { ...state, listTasks: [...state.listTasks,payload] };
    case DELETE_TASK:
      return {
        ...state, listTasks: state.listTasks.filter((el) => el.id !== payload),
      };
    case EDIT_TASK:
      return {...state, listTasks: state.listTasks.map((el) => el.id === payload? {...el, text:payload.newTask}:el),
      };
    case DONE_TASK:
          return {
              ...state, listTasks: state.listTasks.map(el => el.id === payload ? {...el, isDone: !el.isDone}:el),
         
      }
      default: 
      return state;
  }
}; 
export default listReducer
