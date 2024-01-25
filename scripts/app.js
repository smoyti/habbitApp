'use strict'

let habbits = [];
let HABBIT_KEY = 'HABBIT_KEY';

 function loadData() {
    const habbitsString = localStorage.getItem('HABBIT_KEY');
    const habbitArray = JSON.parse(habbitsString);
    if(Array.isArray(habbitArray)) {
        habbits = habbitArray;
    }
 }

 function saveData() {
    localStorage.setItem(HABBIT_KEY, JSON.stringify(habbits));
 }

 (() => {
    loadData();
 }) ()