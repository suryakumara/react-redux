import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    minWidth: 650,
    backgroundColor: theme.palette.background.paper,
  },
}));

const Todos = ({ todos, deleteTodo }) => {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h3">Todo's</Typography>
      <div className={classes.root}>
        {todos.length ? (
          <List component="nav">
            {todos.map((todo) => {
              return (
                <ListItem button key={todo.id}>
                  <ListItemText onClick={() => deleteTodo(todo.id)}>
                    {todo.content}
                  </ListItemText>
                </ListItem>
              );
            })}
          </List>
        ) : (
          <Typography>You Have No Todo's Left !</Typography>
        )}
      </div>
    </div>
  );
};

export default Todos;
