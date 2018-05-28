import {connect} from 'react-redux';
import {allTodos} from '../../reducers/selectors';
import TodoListContainer from './todo_list';


const mapStateToProps = (state, ownProps) => ({
  todos: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: todo => dispatch(receiveTodo(todo)),
  receiveTodos: todos => dispatch(receiveTodos(todos))
});

export default connect( mapStateToProps,mapDispatchToProps)(TodoListContainer);
