Here are **5 solid beginner → intermediate problems** where `reduce` is the *natural* choice. No tricks, just clean use-cases.

---

## 1️⃣ Sum all numbers in an array

**(Classic accumulator case)**

**Problem:**
Write a function that returns the sum of all numbers in an array.

```js
sum([1, 2, 3, 4]); // 10
sum([]);          // 0
```

**Why `reduce`?**
You’re collapsing many values → one value.

---

## 2️⃣ Count occurrences of values

**(Array → object)**

**Problem:**
Return an object showing how many times each number appears.

```js
countNums([1, 2, 2, 3, 3, 3]);
// { 1: 1, 2: 2, 3: 3 }
```

**Why `reduce`?**
You’re accumulating into an object.

---

## 3️⃣ Flatten a 2D array

**(Array → array)**

**Problem:**
Flatten one level of nesting.

```js
flatten([[1, 2], [3, 4], [5]]);
// [1, 2, 3, 4, 5]
```

**Why `reduce`?**
Each step combines arrays into a bigger array.

---

## 4️⃣ Find the maximum value

**(Keep “best so far”)**

**Problem:**
Return the largest number in an array.

```js
max([4, 1, 9, 2]); // 9
```

**Why `reduce`?**
The accumulator keeps the current max.

---

## 5️⃣ Group items by a property

**(Interview-favorite)**

**Problem:**
Group people by age.

```js
groupByAge([
  { name: 'Ava', age: 20 },
  { name: 'Ben', age: 20 },
  { name: 'Cara', age: 25 }
]);
```

**Output:**

```js
{
  20: [{ name: 'Ava', age: 20 }, { name: 'Ben', age: 20 }],
  25: [{ name: 'Cara', age: 25 }]
}
```

**Why `reduce`?**
You’re building a structured object step by step.

---

## 🔑 Rule of thumb (memorize this)

Use `reduce` when:

> **You want to turn an array into ONE thing**
> (number, object, string, or another array)

If the result is:

* same length array → `map`
* fewer elements → `filter`
* one final value → `reduce`

---

If you want, next I can:

* solve **one of these** step-by-step with you
* or turn them into **LeetCode-style prompts**
* or give you **“don’t use reduce here”** examples (super helpful for interviews)

Just tell me which direction you want 👌
