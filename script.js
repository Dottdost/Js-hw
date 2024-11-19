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
