import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
} from "@material-ui/core";
import { useState } from "react";
import "./todo.css";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if(newTodo.trim() !== ""){
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
    
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const [editingIndex, setEditingIndex] = useState(-1);
  const [editingTodo, setEditingTodo] = useState('');
  
  const handleEditTodo = (index) => {
    setEditingIndex(index);
    setEditingTodo(todos[index]);
  }
  
  const handleSaveEdit = (index) => {
    const newTodos = [...todos];
    newTodos[index] = editingTodo;
    setTodos(newTodos);
    setEditingIndex(-1);
    setEditingTodo('');
  }

  return (
    <Paper className="list">
      <h2 className="title-todo">Priority List</h2>
      <div className="header">
        <TextField
          className="input"
          label="New Assignment"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <Button className="button" onClick={handleAddTodo}>
          Add Task
        </Button>
      </div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell >Todo</TableCell>
              <TableCell  width='40%'>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos.map((todo, index) => (
              <TableRow key={index}>
                <TableCell>
                    {editingIndex === index ? (
                      <TextField
                        value={editingTodo}
                        onChange={(e) => setEditingTodo(e.target.value)}
                      />
                    ) : (
                      todo
                    )}
                  </TableCell>
                  <TableCell>
                    {editingIndex === index ? (
                      <>
                        <Button onClick={() => handleSaveEdit(index)}>Save</Button>
                        <Button onClick={() => setEditingIndex(-1)}>Cancel</Button>
                      </>
                    ) : (
                      <div className="bt">
                        <Button className="edit" onClick={() => handleEditTodo(index)}>Edit</Button>
                        <Button className="delete" onClick={() => handleDeleteTodo(index)}>Delete</Button>
                      </div>
                    )}
                  </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
