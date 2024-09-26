'use strict';


const addCarBtn = document.querySelector('#add-car');
const searchCarBtn = document.querySelector('#search-car');

const searchForm = document.querySelector('#search-lic');
const carForm = document.querySelector('#car-form');

const searchResult = document.querySelector('#search-result');

const cars = [];

class Car {
    constructor(licNum, carMaker, carModel, carOwner, carPrice, carColor) {
        this.licNum = licNum;
        this.carMaker = carMaker;
        this.carModel = carModel;
        this.carOwner = carOwner;
        this.carPrice = carPrice;
        this.carColor = carColor;
    }
}

const addCar = (e) => {
    e.preventDefault();

    const licNum = document.querySelector('#lic-number').value;
    const carMaker = document.querySelector('#car-maker').value;
    const carModel = document.querySelector('#car-model').value;
    const carOwner = document.querySelector('#car-owner').value;
    const carPrice = document.querySelector('#car-price').value;
    const carColor = document.querySelector('#car-color').value;

    const newCar = new Car(licNum, carMaker, carModel, carOwner, carPrice, carColor);

    cars.push(newCar);
    displayTable();
}

const displayTable = () => {
    const table = document.querySelector('#car-table');
    table.innerHTML = table.rows[0].innerHTML;

    cars.forEach(car => {
        const row = table.insertRow(-1);
        Object.values(car).forEach(text => {
            const cell = row.insertCell(-1);
            cell.textContent = text;
        })
    })
}

const searchCar = (e) => {
    e.preventDefault();

    for (let i = 0; i < cars.length; i++) {
        if (cars[i].licNum === searchForm.value) {
            searchResult.textContent = `Found Car: ${cars[i].carMaker} ${cars[i].carModel} owned by ${cars[i].carOwner}`;
        }
        else {
            searchResult.textContent = 'Car not found!';
        }
    }





}

addCarBtn.addEventListener('click', addCar);
searchCarBtn.addEventListener('click', searchCar);