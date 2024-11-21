/*Реализовать класс, описывающий простой маркер. В классе
должны быть следующие компоненты:
■ поле, которое хранит цвет маркера;
■ поле, которое хранит количество чернил в маркере (в процентах);
■ метод для печати (метод принимает строку и выводит
текст соответствующим цветом; текст выводится до тех
пор, пока в маркере есть чернила; один не пробельный
символ – это 0,5% чернил в маркере).
Реализовать класс, описывающий заправляющийся маркер,
унаследовав его от простого маркера и добавив метод для заправки
маркера.
Продемонстрировать работу написанных методов.*/

class Marker {
  constructor(color, countInk) {
    this.color = color;
    this.countInk = countInk;
  }

  printText(text) {
    let printText = "";

    for (let char of text) {
      if (this.countInk === 0) {
        break;
      }
      if (char !== " ") {
        this.countInk -= 0.5;
      }
      printText += char;
    }

    console.log(printText);

    if (this.countInk <= 0) {
      console.log("Ink finished");
    }
  }
}

class FillUpMarker extends Marker {
  fillup() {
    this.countInk = 100;
    console.log("Done");
  }
}

let marker = new Marker("red", 9);
marker.printText("Aloooo");

let fillupmarker = new FillUpMarker("yellow", 5);
fillupmarker.fillup();

/*Задание 2
Реализуйте класс ExtendedDate, унаследовав его от стандартного класса Date и добавив следующие возможности:
■ метод для вывода даты (числа и месяца) текстом;
■ метод для проверки – это прошедшая дата или будущая
(если прошедшая, то метод возвращает false; если будущая или текущая, то true);
■ метод для проверки – високосный год или нет;
■ метод, возвращающий следующую дату.
Создайте объект класса ExtendedDate и выведите на экран
результаты работы новых методов.*/

class ExtendedDate extends Date {
  getDateMonth() {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return `${this.getDate()} ${months[this.getMonth()]}`;
  }
  futureOrPast() {
    return this >= new Date();
  }
  leapYear() {
    let year = this.getFullYear();
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  }

  getNextDate() {
    let nextDate = this.getDate() + 1;
    return nextDate;
  }
}

let date = new ExtendedDate(2024, 10, 21);

console.log(date.getDateMonth());
console.log(date.futureOrPast());
console.log(date.leapYear());
console.log(date.getNextDate().toLocaleDateString());
