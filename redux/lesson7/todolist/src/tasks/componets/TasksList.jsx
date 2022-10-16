import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput';
import * as taskActions from '../tasks.actions';
import { sortedTasksListSelector } from '../tasks.selectors';

class TasksList extends Component {
  componentDidMount() {
    this.props.getTaskList();
  }

  render() {
    return (
      <main className="todo-list">
        <CreateTaskInput onCreate={this.props.createTask} />
        <ul className="list">
          {this.props.tasks.map(task => (
            <Task
              key={task.id}
              {...task}
              onChange={this.props.updateTask}
              onDelete={this.props.deleteTask}
            />
          ))}
        </ul>
      </main>
    );
  }
}

const mapState = state => ({
  tasks: sortedTasksListSelector(state),
});

console.log('state: ', mapState);

const mapDispatch = {
  getTaskList: taskActions.getTaskList,
  updateTask: taskActions.updateTask,
  deleteTask: taskActions.deleteTask,
  createTask: taskActions.createTask,
};

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape()),
  getTaskList: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  createTask: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(TasksList);
