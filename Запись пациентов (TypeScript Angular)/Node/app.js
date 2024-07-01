const express = require("express");
    
const app = express();

const masters = {
"masters":[
  {"fullName":"Арончикова-Буланова Л. И.", "workStart":"8:30", "workEnd":"12:00"},
  {"fullName":"В. И. Козлов", "workStart":"8:30", "workEnd":"12:00"},
  {"fullName":"И. Л. Горбунова", "workStart":"8:30", "workEnd":"12:00"},
  {"fullName":"М. Н. Капустина", "workStart":"8:30", "workEnd":"12:00"},
  {"fullName":"В. Г. Селиванова", "workStart":"8:30", "workEnd":"12:00"},
  {"fullName":"З. З. Баранова", "workStart":"8:30", "workEnd":"12:00"},
  {"fullName":"Д. Д. Белов", "workStart":"8:30", "workEnd":"12:00"},
  {"fullName":"Н. Г. Галкин", "workStart":"8:30", "workEnd":"12:00"},
  {"fullName":"А. А. Медведев", "workStart":"8:30", "workEnd":"12:00"},
  {"fullName":"А. Я. Федосеева", "workStart":"8:30", "workEnd":"12:00"},
  {"fullName":"В. Д. Назаров", "workStart":"8:30", "workEnd":"12:00"},
  {"fullName":"А. Я. Орлов", "workStart":"8:30", "workEnd":"12:00"},
  {"fullName":"Д. Г. Левин", "workStart":"8:30", "workEnd":"12:00"},
  {"fullName":"Н. Р. Шубин", "workStart":"8:30", "workEnd":"12:00"},
  {"fullName":"Р. К. Олейников", "workStart":"8:30", "workEnd":"12:00"},
  {"fullName":"А. Д. Фокина", "workStart":"8:30", "workEnd":"12:00"},
  {"fullName":"А. К. Крылова", "workStart":"8:30", "workEnd":"12:00"},
  {"fullName":"Е. Н. Фирсова", "workStart":"8:30", "workEnd":"12:00"},
  {"fullName":"В. М. Акимов", "workStart":"8:30", "workEnd":"12:00"},
  {"fullName":"Д. В. Харитонов", "workStart":"8:30", "workEnd":"12:00"},
  {"fullName":"Н. Н. Акимова", "workStart":"8:30", "workEnd":"12:00"},
  {"fullName":"Я. А. Золотарев", "workStart":"8:30", "workEnd":"12:00"},
  {"fullName":"Л. Г. Уварова", "workStart":"8:30", "workEnd":"12:00"},
  {"fullName":"С. Е. Иванова", "workStart":"8:30", "workEnd":"12:00"},
  {"fullName":"С. М. Лаврова", "workStart":"8:30", "workEnd":"12:00"},
  {"fullName":"К. А. Прохорова", "workStart":"8:30", "workEnd":"12:00"},
  {"fullName":"Д. Н. Мещеряков", "workStart":"8:30", "workEnd":"12:00"},
  {"fullName":"А. Ф. Демина", "workStart":"8:30", "workEnd":"12:00"},
  {"fullName":"В. Н. Киселева", "workStart":"8:30", "workEnd":"12:00"},
  {"fullName":"М. Д. Калачева", "workStart":"8:30", "workEnd":"12:00"},
  {"fullName":"И. Д. Шапошников", "workStart":"8:30", "workEnd":"12:00"},
  {"fullName":"В. С. Худяков", "workStart":"8:30", "workEnd":"12:00"},
  {"fullName":"Е. П. Ермакова", "workStart":"8:30", "workEnd":"12:00"},
  {"fullName":"Е. Т. Мартынова", "workStart":"8:30", "workEnd":"12:00"},
  {"fullName":"К. А. Голованова", "workStart":"8:30", "workEnd":"12:00"},
  {"fullName":"У. И. Соболева", "workStart":"8:30", "workEnd":"12:00"},
  {"fullName":"А. Р. Орлов", "workStart":"8:30", "workEnd":"12:00"},
  {"fullName":"Д. А. Комаров", "workStart":"8:30", "workEnd":"12:00"},
  {"fullName":"Д. А. Киселев", "workStart":"8:30", "workEnd":"12:00"},
  {"fullName":"А. М. Кондратьева", "workStart":"8:30", "workEnd":"12:00"},
  {"fullName":"Л. М. Осипов", "workStart":"8:30", "workEnd":"12:00"},
  {"fullName":"У. М. Колесова", "workStart":"8:30", "workEnd":"12:00"},
  {"fullName":"У. В. Захарова", "workStart":"8:30", "workEnd":"12:00"},
  {"fullName":"М. В. Гусев", "workStart":"8:30", "workEnd":"12:00"},
  {"fullName":"А. З. Сальников", "workStart":"8:30", "workEnd":"12:00"},
  {"fullName":"В. К. Пантелеев", "workStart":"8:30", "workEnd":"12:00"},
  {"fullName":"А. Р. Павлова", "workStart":"8:30", "workEnd":"12:00"},
  {"fullName":"А. М. Дементьев", "workStart":"8:30", "workEnd":"12:00"},
  {"fullName":"Д. К. Волкова", "workStart":"8:30", "workEnd":"12:00"},
  {"fullName":"А. А. Сазонова", "workStart":"8:30", "workEnd":"12:00"},
  {"fullName":"В. Я. Жукова", "workStart":"8:30", "workEnd":"12:00"},
  {"fullName":"П. Л. Кудрявцева", "workStart":"8:30", "workEnd":"12:00"},
  {"fullName":"У. А. Петрова", "workStart":"8:30", "workEnd":"12:00"},
  {"fullName":"Н. С. Вешнякова", "workStart":"8:30", "workEnd":"12:00"},
  {"fullName":"Д. Ф. Круглов", "workStart":"8:30", "workEnd":"12:00"},
]
};
  
// обработчик по маршруту localhost:3000/sum
app.get("/masters", function(request, response){
    // настройка заголовков CORS для кроссдоменных запросов
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    response.header("Access-Control-Allow-Methods", "GET, PATCH, PUT, POST, DELETE, OPTIONS");
      
    response.send(masters);
});
   
app.listen(3000, ()=>console.log("Сервер запущен по адресу http://localhost:3000/"));