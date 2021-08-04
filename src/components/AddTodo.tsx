import * as React from 'react';
import { Grid, IconButton, TextField } from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';
import SendIcon from '@material-ui/icons/Send';
import { IAddTodoProps } from '../interfaces';
import { StyledAddTodo } from './style';

export const AddTodo = (props: IAddTodoProps): React.ReactElement => {
  const [task, setTask] = React.useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
    props.restrictedWordAlertOpen && props.onAlertClose();
    setTask(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === 'Enter') {
      handleClick();
    }
  };

  const handleClick = (): void => {
    task && props.onAdd(task);
    setTask('');
  };

  return (
    <StyledAddTodo container direction="column" justifyContent="center" alignItems="center">
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <TextField id="newTask" className="addTasksField" label="Add new task" variant="outlined" value={task} onChange={handleChange} onKeyPress={handleKeyPress} autoComplete='off' />
        <IconButton id="sendIcon" color="primary" onClick={handleClick}>
          <SendIcon />
        </IconButton>
      </Grid>
      {props.restrictedWordAlertOpen && <Alert severity="error" className="alertBar">This task already exists - try adding a new one!</Alert>}
    </StyledAddTodo>
  )
}