---
title: "What Is a Vector?"
permalink: /linear-algebra/vectors/
layout: linear-algebra-lesson

lesson_number: 1
module: "Module 1 · Vectors"

description: "A visual introduction to vectors, their components, magnitude, direction, and basic operations."

next_url: /linear-algebra/adding-vectors/
next_title: "Adding Vectors"
---

# How do we describe movement mathematically?

Imagine that you are standing at the point \((0,0)\).

Someone tells you:

> **Move 3 units to the right and 2 units upward.**

You could describe that movement with words.

But mathematics gives us a much more compact way:

$$
\mathbf{v}
=
\begin{bmatrix}
3\\
2
\end{bmatrix}
$$

This object is called a **vector**.

The two numbers tell us how much movement occurs in each direction.

The first component tells us the horizontal movement.

The second component tells us the vertical movement.

So

$$
\mathbf{v}
=
\begin{bmatrix}
3\\
2
\end{bmatrix}
$$

means:

- move $3$ units horizontally;
- move \(2\) units vertically.

That simple idea is the beginning of linear algebra.

---

## 1. Seeing a vector

A vector can be represented geometrically as an **arrow**.

The arrow starts at the origin and points toward the location described by its components.

For

\[
\mathbf{v}
=
\begin{bmatrix}
3\\
2
\end{bmatrix},
\]

the arrow goes from

\[
(0,0)
\]

to

\[
(3,2).
\]

<div style="display:flex;justify-content:center;margin:35px 0;">

<svg
  id="vectorDiagram"
  width="500"
  height="360"
  viewBox="0 0 500 360"
  style="max-width:100%;background:white;border:1px solid #e5e7eb;border-radius:12px;">

  <defs>

    <marker
      id="arrowhead"
      markerWidth="8"
      markerHeight="8"
      refX="6"
      refY="3"
      orient="auto">

      <polygon
        points="0 0, 8 3, 0 6"
        fill="#111827">
      </polygon>

    </marker>

  </defs>

  <!-- Grid -->

  <g
    stroke="#e5e7eb"
    stroke-width="1">

    <line x1="60" y1="50" x2="60" y2="310"/>
    <line x1="100" y1="50" x2="100" y2="310"/>
    <line x1="140" y1="50" x2="140" y2="310"/>
    <line x1="180" y1="50" x2="180" y2="310"/>
    <line x1="220" y1="50" x2="220" y2="310"/>
    <line x1="260" y1="50" x2="260" y2="310"/>
    <line x1="300" y1="50" x2="300" y2="310"/>
    <line x1="340" y1="50" x2="340" y2="310"/>
    <line x1="380" y1="50" x2="380" y2="310"/>
    <line x1="420" y1="50" x2="420" y2="310"/>

    <line x1="60" y1="70" x2="420" y2="70"/>
    <line x1="60" y1="110" x2="420" y2="110"/>
    <line x1="60" y1="150" x2="420" y2="150"/>
    <line x1="60" y1="190" x2="420" y2="190"/>
    <line x1="60" y1="230" x2="420" y2="230"/>
    <line x1="60" y1="270" x2="420" y2="270"/>
    <line x1="60" y1="310" x2="420" y2="310"/>

  </g>

  <!-- Axes -->

  <line
    x1="60"
    y1="190"
    x2="430"
    y2="190"
    stroke="#64748b"
    stroke-width="2"/>

  <line
    x1="220"
    y1="320"
    x2="220"
    y2="40"
    stroke="#64748b"
    stroke-width="2"/>

  <!-- Vector -->

  <line
    id="vectorLine"
    x1="220"
    y1="190"
    x2="340"
    y2="110"
    stroke="#111827"
    stroke-width="4"
    marker-end="url(#arrowhead)"/>

  <!-- Point -->

  <circle
    id="vectorPoint"
    cx="340"
    cy="110"
    r="7"
    fill="#111827"/>

  <!-- Labels -->

  <text
    x="345"
    y="100"
    font-size="16"
    font-weight="600"
    fill="#111827"
    id="vectorLabel">

    (3, 2)

  </text>

  <text
    x="225"
    y="215"
    font-size="14"
    fill="#64748b">

    (0,0)

  </text>

</svg>

</div>

The arrow is not just a picture.

It is telling us something precise:

\[
\boxed{
\mathbf{v}
=
\begin{bmatrix}
3\\
2
\end{bmatrix}}
\]

The vector has a **horizontal component** of \(3\) and a **vertical component** of \(2\).

---

## 2. The components of a vector

Consider the vector

\[
\mathbf{v}
=
\begin{bmatrix}
a\\
b
\end{bmatrix}.
\]

We call \(a\) and \(b\) the **components** of the vector.

For example,

\[
\mathbf{v}
=
\begin{bmatrix}
5\\
-2
\end{bmatrix}
\]

has:

\[
\text{horizontal component}=5
\]

and

\[
\text{vertical component}=-2.
\]

The negative sign tells us that the vertical movement is downward.

<div class="key-idea">

<div class="key-idea-title">
💡 Key Idea
</div>

A vector in two dimensions can be represented by two components:

\[
\mathbf{v}
=
\begin{bmatrix}
v_1\\
v_2
\end{bmatrix}.
\]

The components tell us how much the vector moves in each coordinate direction.

</div>

---

## 3. Vectors are not points

This distinction is important.

Suppose we have a point

\[
P=(3,2).
\]

This tells us **where something is**.

But the vector

\[
\mathbf{v}
=
\begin{bmatrix}
3\\
2
\end{bmatrix}
\]

tells us **how to move**.

These ideas are related, but they are not exactly the same.

We can use a vector to move from one point to another.

Suppose

\[
P=(1,1)
\]

and

\[
\mathbf{v}
=
\begin{bmatrix}
3\\
2
\end{bmatrix}.
\]

Adding the vector to the point gives

\[
P+\mathbf{v}
=
(1,1)+(3,2)
=
(4,3).
\]

So the vector moves us from

\[
(1,1)
\]

to

\[
(4,3).
\]

---

## 4. Vectors can be added

Now suppose we make two movements.

The first movement is

\[
\mathbf{u}
=
\begin{bmatrix}
3\\
2
\end{bmatrix}.
\]

The second movement is

\[
\mathbf{v}
=
\begin{bmatrix}
1\\
4
\end{bmatrix}.
\]

Our total movement is

\[
\mathbf{u}+\mathbf{v}.
\]

We add the corresponding components:

\[
\mathbf{u}+\mathbf{v}
=
\begin{bmatrix}
3\\
2
\end{bmatrix}
+
\begin{bmatrix}
1\\
4
\end{bmatrix}
\]

\[
=
\begin{bmatrix}
3+1\\
2+4
\end{bmatrix}
\]

and therefore

\[
\boxed{
\mathbf{u}+\mathbf{v}
=
\begin{bmatrix}
4\\
6
\end{bmatrix}}
\]

So vector addition is simply **component-by-component addition**.

---

<div class="example">

<div class="example-title">
Example 1 · Vector Addition
</div>

Suppose

\[
\mathbf{a}
=
\begin{bmatrix}
2\\
5
\end{bmatrix}
\]

and

\[
\mathbf{b}
=
\begin{bmatrix}
3\\
-1
\end{bmatrix}.
\]

Then

\[
\mathbf{a}+\mathbf{b}
=
\begin{bmatrix}
2+3\\
5+(-1)
\end{bmatrix}
\]

so

\[
\boxed{
\mathbf{a}+\mathbf{b}
=
\begin{bmatrix}
5\\
4
\end{bmatrix}}
\]

</div>

---

## 5. Scalar multiplication

Vectors can also be multiplied by ordinary numbers.

These numbers are called **scalars**.

Suppose

\[
\mathbf{v}
=
\begin{bmatrix}
2\\
1
\end{bmatrix}.
\]

Multiply it by \(3\):

\[
3\mathbf{v}
=
3
\begin{bmatrix}
2\\
1
\end{bmatrix}.
\]

Multiply each component by \(3\):

\[
3\mathbf{v}
=
\begin{bmatrix}
6\\
3
\end{bmatrix}.
\]

Geometrically, the vector becomes three times as long.

In general,

\[
c
\begin{bmatrix}
x\\
y
\end{bmatrix}
=
\begin{bmatrix}
cx\\
cy
\end{bmatrix}.
\]

---

## 6. What if the scalar is negative?

Consider

\[
\mathbf{v}
=
\begin{bmatrix}
2\\
1
\end{bmatrix}.
\]

Multiplying by \(-1\) gives

\[
-\mathbf{v}
=
\begin{bmatrix}
-2\\
-1
\end{bmatrix}.
\]

The vector now points in the opposite direction.

So:

\[
\boxed{
\text{positive scalar}
\rightarrow
\text{same direction}
}
\]

while

\[
\boxed{
\text{negative scalar}
\rightarrow
\text{opposite direction}
}
\]

This simple operation will become extremely important later when we study **linear combinations**.

---

## 7. How long is a vector?

So far we've talked about the direction of a vector.

But a vector also has a **magnitude**—its length.

Consider

\[
\mathbf{v}
=
\begin{bmatrix}
3\\
4
\end{bmatrix}.
\]

If we draw this vector, we get a right triangle.

The horizontal side has length \(3\).

The vertical side has length \(4\).

Therefore, by the Pythagorean theorem,

\[
\|\mathbf{v}\|
=
\sqrt{3^2+4^2}.
\]

Thus,

\[
\|\mathbf{v}\|
=
\sqrt{9+16}
=
\sqrt{25}
=
5.
\]

So

\[
\boxed{
\left\|
\begin{bmatrix}
3\\
4
\end{bmatrix}
\right\|
=5
}
\]

The symbol

\[
\|\mathbf{v}\|
\]

means the **magnitude** or **length** of the vector.

In general, for

\[
\mathbf{v}
=
\begin{bmatrix}
x\\
y
\end{bmatrix},
\]

the magnitude is

\[
\boxed{
\|\mathbf{v}\|
=
\sqrt{x^2+y^2}
}
\]

---

## 8. Direction matters too

Two vectors can have the same magnitude but point in different directions.

For example,

\[
\mathbf{u}
=
\begin{bmatrix}
3\\
4
\end{bmatrix}
\]

has magnitude \(5\).

But

\[
\mathbf{v}
=
\begin{bmatrix}
-3\\
4
\end{bmatrix}
\]

also has magnitude \(5\):

\[
\|\mathbf{v}\|
=
\sqrt{(-3)^2+4^2}
=
5.
\]

Their lengths are the same, but their directions are different.

This is why a vector is more than simply a number representing distance.

---

<div class="key-idea">

<div class="key-idea-title">
💡 Think of a Vector as an Arrow
</div>

A vector has two fundamental features:

\[
\boxed{\text{Magnitude}}
\]

and

\[
\boxed{\text{Direction}}
\]

The components tell us how the vector is oriented along the coordinate axes.

</div>

---

## 9. A vector can start anywhere

Here is another subtle but important idea.

Consider the vector

\[
\mathbf{v}
=
\begin{bmatrix}
3\\
2
\end{bmatrix}.
\]

It doesn't have to start at the origin.

We could draw the same vector starting at

\[
(1,1)
\]

and ending at

\[
(4,3).
\]

The movement is still:

\[
3\text{ units right}
\]

and

\[
2\text{ units up}.
\]

So these two arrows represent the same vector:

\[
(0,0)\rightarrow(3,2)
\]

and

\[
(1,1)\rightarrow(4,3).
\]

The starting location changes, but the **movement** does not.

This is why we often think of vectors as **free arrows**: they can be moved around without changing the vector itself.

---

## 10. The standard basis vectors

Now let's look at two particularly important vectors:

\[
\mathbf{e}_1
=
\begin{bmatrix}
1\\
0
\end{bmatrix}
\]

and

\[
\mathbf{e}_2
=
\begin{bmatrix}
0\\
1
\end{bmatrix}.
\]

These are called the **standard basis vectors** of \(\mathbb{R}^2\).

Why are they important?

Because we can construct any two-dimensional vector using them.

For example,

\[
\begin{bmatrix}
5\\
3
\end{bmatrix}
\]

can be written as

\[
5
\begin{bmatrix}
1\\
0
\end{bmatrix}
+
3
\begin{bmatrix}
0\\
1
\end{bmatrix}.
\]

Therefore,

\[
\boxed{
\begin{bmatrix}
5\\
3
\end{bmatrix}
=
5\mathbf{e}_1+3\mathbf{e}_2
}
\]

And this is where our story becomes much more interesting.

We have just discovered that vectors can be **built from other vectors**.

That idea is called a **linear combination**.

---

# 🧠 Try It Yourself

Consider

\[
\mathbf{a}
=
\begin{bmatrix}
4\\
3
\end{bmatrix}
\]

and

\[
\mathbf{b}
=
\begin{bmatrix}
2\\
-1
\end{bmatrix}.
\]

### Question 1

Calculate

\[
\mathbf{a}+\mathbf{b}.
\]

### Question 2

Calculate

\[
2\mathbf{a}.
\]

### Question 3

Calculate

\[
\|\mathbf{a}\|.
\]

Take a moment before looking at the answers.

---

<details>
<summary><strong>Show the answers</strong></summary>

### Answer 1

\[
\mathbf{a}+\mathbf{b}
=
\begin{bmatrix}
4\\
3
\end{bmatrix}
+
\begin{bmatrix}
2\\
-1
\end{bmatrix}
=
\boxed{
\begin{bmatrix}
6\\
2
\end{bmatrix}}
\]

### Answer 2

\[
2\mathbf{a}
=
2
\begin{bmatrix}
4\\
3
\end{bmatrix}
=
\boxed{
\begin{bmatrix}
8\\
6
\end{bmatrix}}
\]

### Answer 3

\[
\|\mathbf{a}\|
=
\sqrt{4^2+3^2}
=
\sqrt{25}
=
\boxed{5}
\]

</details>

---

# The Big Picture

Let's step back.

We started with a very simple question:

> **How can we describe movement mathematically?**

We introduced vectors.

Then we learned that vectors have:

- components;
- magnitude;
- direction.

And we learned two fundamental operations:

\[
\boxed{\text{Vector addition}}
\]

and

\[
\boxed{\text{Scalar multiplication}}.
\]

Most importantly, we discovered that vectors can be **combined to create other vectors**.

For example,

\[
\begin{bmatrix}
5\\
3
\end{bmatrix}
=
5
\begin{bmatrix}
1\\
0
\end{bmatrix}
+
3
\begin{bmatrix}
0\\
1
\end{bmatrix}.
\]

This is a **linear combination**.

And that leads us to our next question:

> ### What can we create by combining vectors?

That is the subject of the next lesson.

---

## Next Lesson

### **Part 2 · Adding Vectors**

We'll go one step deeper and see how vectors combine geometrically.

We'll eventually arrive at the idea of a **linear combination**:

\[
c_1\mathbf{v}_1+c_2\mathbf{v}_2+\cdots+c_n\mathbf{v}_n.
\]

And once we understand that, the ideas of **span, linear independence, basis, and dimension** will begin to fall into place.
