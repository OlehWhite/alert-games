let numberOfAttemptsForFirstGame = 0;
let counterForSecondGame = 0;
let counterForThirdGame = 0;

helloThere();

function helloThere() {
  alert('Привіт! Раді вітати вас в новій грі "Ігромат"!');
  selectGames();
}

function selectGames() {
  const game = prompt(`
    Оберіть гру:
    1 - Угадалка;
    2 - Рахувалка;
    3 - Клікалка;
    Щоб вийти введіть "Вихід".
  `);

  if (game !== null) {
    chooseGame(game);
  }
}

function chooseGame(currentGame) {
  if (currentGame === "1" || currentGame.toLowerCase() === "угадалка") {
    loading();
    aboutGuessworkGame();
  } else if (currentGame === "2" || currentGame.toLowerCase() === "рахувалка") {
    loading();
    aboutCounterGame();
  } else if (currentGame === "3" || currentGame.toLowerCase() === "клікалка") {
    loading();
    aboutClickGame();
  } else if (currentGame.toLowerCase() === "вихід") {
    goodBuy();
  } else {
    alert("Не правильний ввід, спробуйте ще раз.");
    selectGames();
  }
}

function goodBuy() {
  alert("Прощавай :(");
}

function loading() {
  alert("Гра запускається...");
}

function aboutGuessworkGame() {
  alert('Гра "Угадалка.');
  alert(`
  Я випадково буду загадувати число від 1 до 100.
  Ваша задача вгадати його за мінімальну кількість разів.
  Після кожного вашого вводу я буду говорити більше ваше число, чи менше загаданого.
  Починаємо?
  `);

  const randomNumber = generateRandomNumber();
  guessworkGame(randomNumber);
}

function guessworkGame(randomNumber) {
  const value = Number(prompt("Пробуйте вгадати:"));

  if (value >= 0 && value <= 100) {
    if (value > randomNumber) {
      alert("Дуже багато!");
      numberOfAttemptsForFirstGame++;
      guessworkGame(randomNumber);
    } else if (value < randomNumber) {
      alert("Дуже мало!");
      numberOfAttemptsForFirstGame++;
      guessworkGame(randomNumber);
    } else if (value === randomNumber) {
      alert(`Вітаю! Ти вгадав за ${numberOfAttemptsForFirstGame} спроб!`);
      selectGames();
      numberOfAttemptsForFirstGame = 0;
    }
  } else {
    alert("Неправильно ввід! Вкажіть число від 0 до 100!");
    guessworkGame();
  }
}

function aboutCounterGame() {
  alert('Гра "Рахувалка"!');
  alert(`
  Я буду давати вам випадкові математичні приклади.
  Ваша ціль правильно розв'язати 5 прикладів.
  Починаємо?
  `);
  counterGame();
}

function counterGame() {
  for (let i = 0; i <= 4; i++) {
    const firstRandomNumber = generateRandomNumber();
    const secondRandomNumber = generateRandomNumber();
    const randomNumberFormSymbol = Math.floor(Math.random() * 3);
    const symbols = ["+", "-", "*"];
    const answerUser = Number(
      prompt(
        `${firstRandomNumber} ${symbols[randomNumberFormSymbol]} ${secondRandomNumber}`
      )
    );

    if (symbols[randomNumberFormSymbol] === "+") {
      if (firstRandomNumber + secondRandomNumber === answerUser) {
        counterForSecondGame++;
      }
    } else if (symbols[randomNumberFormSymbol] === "-") {
      if (firstRandomNumber - secondRandomNumber === answerUser) {
        counterForSecondGame++;
      }
    } else if (symbols[randomNumberFormSymbol] === "*") {
      if (firstRandomNumber * secondRandomNumber === answerUser) {
        counterForSecondGame++;
      }
    }
  }
  alert(`Правильних відповідей ${counterForSecondGame} із 5`);
  counterForSecondGame = 0;
  selectGames();
}

function aboutClickGame() {
  alert('Гра "Клікалка"!');
  alert(`
  Я буду випадково показувати 10 системних вікон.
  Ваша задача як найшвидше проклікати все.
  При цьому у вікні confirm потрібно натискати "Відміна".
  Починаємо?
  `);
  clickGame();
}

function clickGame() {
  for (let i = 1; i <= 10; i++) {
    const secondRandomNumber = Math.floor(Math.random() * 2);

    if (secondRandomNumber === 0) {
      const clickOk = alert('Натисни "ок"!');
      if (clickOk !== undefined) {
        counterForThirdGame++;
      }
    } else if (secondRandomNumber === 1) {
      const clickCancel = confirm('Натисни "скасувати"!');
      if (clickCancel === true) {
        counterForThirdGame++;
      }
    }
  }
  alert(`Кількість помилок: ${counterForThirdGame}`);
  counterForThirdGame = 0;
  selectGames();
}

function generateRandomNumber() {
  return Math.floor(Math.random() * 101);
}
