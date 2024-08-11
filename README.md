Вимоги: вивести список ігрових раундів за допомогою React (React Hooks).
API:

## Завдання:

1. вивести список раундів;

2. по кліку на рядок раунда необхідно зробити реквест, отримати дані раунда і
   намалювати ігрове поле нижче від рядка з раундом.
   Респонз з даними раунда містить в собі наступні дані:

- "height": "4" - висота поля (к-ть елементів в одній колонці)
- "items": "15,4,14,10,11,12,4,13,13,14,12,4,6,14,4,12,12,8,7,4" - перелік
  ігрових елементів поля. Елементи розташовуються впорядковано зліва
  направо, починаючи зверху:

  Кожен елемент необхідно відобразити в якості картинки (номер елемента
  співпадає з назвою картинки з архіву з завданням).

3. Елемент під номером 4 завжди являє собою вертикальну групу з чотирьох
   елементів, тому цю групу необхідно показати як один елемент з темнішим
   фоном . Також необхідно звернути увагу, на те, як відцентрована картинка
   елементу 4