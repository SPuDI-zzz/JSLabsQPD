describe("Функция IsEqual", function () {

 
  it("0 ? new Number(0)", function () {
    assert.equal(MyIsEqual(0, new Number(0)), true);
  });

  it("'str' ? new String('str')", function () {
    assert.equal(MyIsEqual('str', new String('str')), true);
  });

  it("new Boolean(true) ? true ", function () {
    assert.equal(MyIsEqual(new Boolean(true), true), true);
  });

  it("true ? new Number(1)", function () {
    assert.equal(MyIsEqual(true, new Number(1)), false);
  });

  it("true ? new String('1')", function () {
    assert.equal(MyIsEqual(true, new String("1")), false);
  });

  it("new Number(1) ? new String('1')", function () {
    assert.equal(MyIsEqual(new Number(1), new String("1")), false);
  });

  it("new String('str') ? new String('str')", function () {
    assert.equal(MyIsEqual(new String('str'), new String('str')), true);
  });

  it("NaN ? NaN", function () {
    assert.equal(MyIsEqual(NaN, NaN), true);
  });

  it("NaN ? null", function () {
    assert.equal(MyIsEqual(NaN, null), false);
  });

  it("NaN ? undefiend", function () {
    assert.equal(MyIsEqual(NaN, undefined), false);
  });

  it("null ? undefiend", function () {
    assert.equal(MyIsEqual(null, undefined), false);
  });

  it("true ? false", function () {
    assert.equal(MyIsEqual(true, false), false);
  });

  it("true ? true", function () {
    assert.equal(MyIsEqual(true, true), true);
  });

  it("+0 ? -0", function () {
    assert.equal(MyIsEqual(+0, -0), true);
  });

  it("\"\" ? null", function () {
    assert.equal(MyIsEqual("", null), false);
  });

  it("{} ? {}", function () {
    assert.equal(MyIsEqual({}, {}), true);
  });

  it("[] ? []", function () {
    assert.equal(MyIsEqual([], []), true);
  });

  it("Разные объекты", function () {
    const objA = { a: 1, b: 2, c: { a: "1", b: true, c: { a: 1, b: 2, sayHi() { return 5; } } } };
    const objB = { a: 1, b: 2, c: { a: "1", b: true, c: { a: 1, b: 2, sayHi() { return 4; } } } };
    assert.equal(MyIsEqual(objA, objB), false);
  });

  it("Одинаковые объекты", function () {
    const objA = { a: 1, b: 2, c: { a: "1", b: true, c: { a: 1, b: 2 } } };
    const objB = { a: 1, b: 2, c: { a: "1", b: true, c: { a: 1, b: 2 } } };
    assert.equal(MyIsEqual(objA, objB), true);
  });

  it("Разные массивы", function () {
    const objA = [
      {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
          "CS",
          "8T",
          "LP"],
        "gold": true
      },
      1,
      [3, 2],
      [3, [4]],
    ];
    const objB = [
      {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
          "C1",
          "8T",
          "LP"],
        "gold": true
      },
      1,
      [3, 2],
      [3, [4]],
    ];
    assert.equal(MyIsEqual(objA, objB), false);
  });

  it("Одинаковые массивы", function () {
    const objA = [
      {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
          "CS",
          "8T",
          "LP"],
        "gold": true
      },
      1,
      [3, 1],
      [3, [4]],
    ];
    const objB = [
      {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
          "CS",
          "8T",
          "LP"],
        "gold": true
      },
      1,
      [3, 1],
      [3, [4]],
    ];
    assert.equal(MyIsEqual(objA, objB), true);
  });

  it("Разные даты", function () {
    const date1 = new Date('December 17, 1995 03:24:01');
    const date2 = new Date('1995-12-17T03:24:00');
    assert.equal(MyIsEqual(date1, date2), false);
  });

  it("Одинаковые даты", function () {
    const date1 = new Date('December 17, 1995 03:24:00');
    const date2 = new Date('1995-12-17T03:24:00');
    assert.equal(MyIsEqual(date1, date2), true);
  });

  it("Разные map", function () {
    const map1 = new Map();
    map1.set('a', 1);
    map1.set('b', 2);
    map1.set('c', 3);
    const map2 = new Map();
    map2.set('a', 1);
    map2.set('п', 2);
    map2.set('c', 3);
    assert.equal(MyIsEqual(map1, map2), false);
  });

  it("Одинковые map", function () {
    const map1 = new Map();
    map1.set('a', 1);
    map1.set('b', 2);
    map1.set('c', 3);
    const map2 = new Map();
    map2.set('a', 1);
    map2.set('b', 2);
    map2.set('c', 3);
    assert.equal(MyIsEqual(map1, map2), true);
  });

  it("Symbol(\"id\") ? Symbol(\"id\")", function () {
    const id1 = Symbol("id");
    const id2 = Symbol("id");
    assert.equal(MyIsEqual(id1, id2), false);
  });

  it("Глобальный реестр символов (Разные)", function () {
    const id = Symbol.for("id");
    const idAgain = Symbol.for("id1");
    assert.equal(MyIsEqual(id, idAgain), false);
  });

  it("Глобальный реестр символов (одинаковые)", function () {
    const id = Symbol.for("id");
    const idAgain = Symbol.for("id");
    assert.equal(MyIsEqual(id, idAgain), true);
  });

  it("Разные типизированые массивы", function () {
    let typedArray1 = new Uint16Array([1, 2, 3, 4]);
    let typedArray2 = new Uint8Array([1, 2, 3, 4]);
    assert.equal(MyIsEqual(typedArray1, typedArray2), false);
  });

  it("Одинаковые типизированые массивы", function () {
    let typedArray1 = new Uint8Array([1, 2, 3, 4]);
    let typedArray2 = new Uint8Array([1, 2, 3, 4]);
    assert.equal(MyIsEqual(typedArray1, typedArray2), true);
  });

  it("Разные регулярные выражения", function () {
    let e1 = new RegExp("/[.**?^${}()|[\]\\]/g");
    let e2 = new RegExp("/[.*+?^${}()|[\]\\]/g");
    assert.equal(MyIsEqual(e1, e2), false);
  });

  it("Одинаковые регулярные выражения", function () {
    let e1 = new RegExp("/[.*+?^${}()|[\]\\]/g");
    let e2 = new RegExp("/[.*+?^${}()|[\]\\]/g");
    assert.equal(MyIsEqual(e1, e2), true);
  });

  it("Ссылка на объект", function () {
    let user = { name: "Иван" };
    let admin = user; // копируется ссылка
    assert.equal(MyIsEqual(user, admin), true);
  });

  it("Set (одинаковые)", function () {
    var mySet = new Set();
    mySet.add(1);
    mySet.add(5);
    mySet.add(5);
    mySet.add("some text");
    var o = { a: 1, b: 2 };
    mySet.add(o);
    mySet.add({ a: 1, b: 2 });


    var mySet1 = new Set();
    mySet1.add(1);
    mySet1.add(5);
    mySet1.add(5);
    mySet1.add("some text");
    var o = { a: 1, b: 2 };
    mySet1.add(o);
    mySet1.add({ a: 1, b: 2 });

    assert.equal(MyIsEqual(mySet, mySet1), true);
  });

  it("Set (разные)", function () {

    var mySet = new Set();
    mySet.add(1);
    mySet.add("some text");
    var o = { a: 1, b: 2 };
    mySet.add(o);
    mySet.add({ a: 1, b: 2 });

    var mySet1 = new Set();
    mySet1.add(1);
    mySet1.add("some text");
    var o = { a: 1, b: 1 };
    mySet1.add(o);
    mySet1.add({ a: 1, b: 2 });

    assert.equal(MyIsEqual(mySet, mySet1), false);
  });

});


describe("Функция difference", function () {

  it("Разница целочисленного массива", function () {
    const arr1 = [0, 1, 2, 3, 4, 4, 4, 0, 0, 6, 7, 8, 8, 10, 10];
    const arr2 = [4, 1, 2, 0];
    const result = [3, 6, 7, 8, 8, 10, 10];
    assert.deepEqual(MyDifference(arr1, arr2), result);
  });

  it("пустые", function () {
    const arr1 = [];
    const arr2 = [];
    const result = [];
    assert.deepEqual(MyDifference(arr1, arr2), result);
  });

  it("без NaN", function () {
    const arr1 = [null, "b", NaN, 0, 1, undefined, 0, "c", 1.2, 3.4, "g", +0, +0, NaN];
    const arr2 = ["b", 0, 1.2, NaN];
    const result = [null, 1, undefined, 'c', 3.4, 'g'];
    assert.deepEqual(MyDifference(arr1, arr2), result);
  });

  it("без undefined", function () {
    const arr1 = [null, "b", NaN, 0, 1, undefined, 0, "c", 1.2, "g", +0, +0, NaN];
    const arr2 = ["b", 0, 1.2, undefined];
    const result = [null, NaN, 1, 'c', 'g', NaN];
    assert.deepEqual(MyDifference(arr1, arr2), result);
  });

  it("без null", function () {
    const arr1 = [null, "b", NaN, 0, 1, undefined, 0, "c", 1.2, "g", +0, -0, NaN];
    const arr2 = ["b", 0, 1.2, null];
    const result = [NaN, 1, undefined, 'c', 'g', NaN];
    assert.deepEqual(MyDifference(arr1, arr2), result);
  });
});


describe("Функция sortedUniq", function () {

  it("Разница целочисленного массива", function () {
    assert.deepEqual(MySortedUniq([1, 2, 2, 3, 4, 4, 5, 5, 6, 6, 6]), [1, 2, 3, 4, 5, 6]);
  });

  it("Проверка объединения всех типов", function () {
    const arr1 = [null, null, undefined, undefined, NaN, NaN, NaN, 1, 1, "", "", 0, 0, " ", " "];
    const result = [null, undefined, NaN, 1, '', 0, ' '];
	MySortedUniq(arr1);
    assert.deepEqual(MySortedUniq(arr1), result);
  });

  it("Неотсортированный массив", function () {
    assert.deepEqual(MySortedUniq([1, 2, 2]), [1, 2]);
  });



});

//если знак минус то  учитываем его слева от числа