export const EMP = {
  SET_EMPLOYEE: "SET-EMPLOYEE",
  STATUS_CHANGE: "STATUS-CHANGE",
};
let initialState = {};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case EMP.SET_EMPLOYEE:
      return {
        ...state,
        persons: action.persons,
      };

    case EMP.STATUS_CHANGE:
      return {
        ...state,
        persons: state.persons.map((e) => {
          if (e.id === action.id) {
            return { ...e, status: action.status };
          }
          return e;
        }),
      };
  }
};

export default employeeReducer;
