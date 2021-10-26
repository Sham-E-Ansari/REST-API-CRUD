import express from 'express';
import { v4 as uuidv4 } from 'uuid';
uuidv4();

let users = [];
export const createUser = (req,res) =>{
    const user = req.body;
    const userWithID = {...user, id:uuidv4()};

    users.push(userWithID);
    res.send('User Added');
};

export const getAllUsers = (req,res) =>{
    console.log(users);
    res.send(users);
};

export const getUser = (req,res)=>{
    const {id} = req.params;
    const foundUser = users.find((user)=> user.id = id);
    res.send(foundUser);
};

export const deleteUser = (req,res)=>{
    const {id} = req.params;
    users = users.filter((user)=>user.id != id);
    res.send('User deleted from database!!!')
};

export const updateUser = (req,res)=>{
    const {id} = req.params;
    const {firstName, lastName, age} = req.body;
    const user = users.find((user)=> user.id == id);

    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;

    res.send('User updated');
};