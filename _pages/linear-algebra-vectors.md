---
title: "Vectors in Rⁿ"
permalink: /linear-algebra/vectors/
layout: linear-algebra-lesson
lesson_number: 9
module: "Module 3 · Vector Spaces"
description: "Vectors, components, magnitude, direction, and the geometry of Rⁿ."
---

## How do we describe movement mathematically?

Imagine that you are standing at the point $(0,0)$.

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
- move $2$ units vertically.

That simple idea is the beginning of linear algebra.

---

## 1. Seeing a vector

A vector can be represented geometrically as an **arrow**.

The arrow starts at the origin and points toward the location described by its components.

For

$$
\mathbf{v}
=
\begin{bmatrix}
3\\
2
\end{bmatrix},
$$

the arrow goes from

$$
(0,0)
$$

to

$$
(3,2).
$$

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

$$
\boxed{
\mathbf{v}
=
\begin{bmatrix}
3\\
2
\end{bmatrix}}
$$

The vector has a **horizontal component** of $3$ and a **vertical component** of $2$.

---

## 2. The components of a vector

Consider the vector

$$
\mathbf{v}
=
\begin{bmatrix}
a\\
b
\end{bmatrix}.
$$

We call $a$ and $b$ the **components** of the vector.

For example,

$$
\mathbf{v}
=
\begin{bmatrix}
5\\
-2
\end{bmatrix}
$$

has

$$
\text{horizontal component}=5
$$

and

$$
\text{vertical component}=-2.
$$

The negative sign tells us that the vertical movement is downward.

<div class="key-idea">

<div class="key-idea-title">
💡 Key Idea
</div>

A vector in two dimensions can be represented by two components:

$$
\mathbf{v}
=
\begin{bmatrix}
v_1\\
v_2
\end{bmatrix}.
$$

The components tell us how much the vector moves in each coordinate direction.

</div>

---

# 3. Vectors are not points

This distinction is important.

Suppose we have a point

$$
P=(3,2).
$$

This tells us **where something is**.

But the vector

$$
\mathbf{v}
=
\begin{bmatrix}
3\\
2
\end{bmatrix}
$$

tells us **how to move**.

These ideas are related, but they are not exactly the same.

We can use a vector to move from one point to another.

Suppose

$$
P=(1,1)
$$

and

$$
\mathbf{v}
=
\begin{bmatrix}
3\\
2
\end{bmatrix}.
$$

Adding the vector to the point gives

$$
P+\mathbf{v}
=
(1,1)+(3,2)
=
(4,3).
$$

So the vector moves us from $(1,1)$ to $(4,3)$.

---

## 4. A vector can start anywhere

Here is another important idea.

Consider

$$
\mathbf{v}
=
\begin{bmatrix}
3\\
2
\end{bmatrix}.
$$

It does not have to start at the origin.

We could draw the same vector starting at

$$
(1,1)
$$

and ending at

$$
(4,3).
$$

The movement is still:

$$
3\text{ units right}
$$

and

$$
2\text{ units up}.
$$

So these two arrows represent the same vector:

$$
(0,0)\rightarrow(3,2)
$$

and

$$
(1,1)\rightarrow(4,3).
$$

The starting location changes, but the **movement** does not.

This is why we often think of vectors as **free arrows**.

---

## 5. Vectors can be added

Now suppose we make two movements.

The first movement is

$$
\mathbf{u}
=
\begin{bmatrix}
3\\
2
\end{bmatrix}.
$$

The second movement is

$$
\mathbf{v}
=
\begin{bmatrix}
1\\
4
\end{bmatrix}.
$$

Our total movement is

$$
\mathbf{u}+\mathbf{v}.
$$

We add the corresponding components:

$$
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
$$

and therefore

$$
\mathbf{u}+\mathbf{v}
=
\begin{bmatrix}
4\\
6
\end{bmatrix}
$$

So vector addition is simply **component-by-component addition**.

---

<div class="example">

<div class="example-title">
Example · Vector Addition
</div>

Suppose

$$
\mathbf{a}
=
\begin{bmatrix}
2\\
5
\end{bmatrix}
$$

and

$$
\mathbf{b}
=
\begin{bmatrix}
3\\
-1
\end{bmatrix}.
$$

Then

$$
\mathbf{a}+\mathbf{b}
=
\begin{bmatrix}
2+3\\
5+(-1)
\end{bmatrix}
$$

so

$$
\mathbf{a}+\mathbf{b}
=
\begin{bmatrix}
5\\
4
\end{bmatrix}
$$

</div>

---

## 6. Scalar multiplication

Vectors can also be multiplied by ordinary numbers.

These numbers are called **scalars**.

Suppose

$$
\mathbf{v}
=
\begin{bmatrix}
2\\
1
\end{bmatrix}.
$$

Multiply it by $3$:

$$
3\mathbf{v}
=
3
\begin{bmatrix}
2\\
1
\end{bmatrix}.
$$

Multiply each component by $3$:

$$
3\mathbf{v}
=
\begin{bmatrix}
6\\
3
\end{bmatrix}.
$$

Geometrically, the vector becomes three times as long.

In general,

$$
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
$$

---

## 7. What if the scalar is negative?

Consider

$$
\mathbf{v}
=
\begin{bmatrix}
2\\
1
\end{bmatrix}.
$$

Multiplying by $-1$ gives

$$
-\mathbf{v}
=
\begin{bmatrix}
-2\\
-1
\end{bmatrix}.
$$

The vector now points in the opposite direction.

So:

$$
\text{positive scalar}
\rightarrow
\text{same direction}
$$

while

$$
\text{negative scalar}
\rightarrow
\text{opposite direction}
$$

This simple operation will become extremely important when we study **linear combinations**.

---

## 8. How long is a vector?

So far we have talked about the direction of a vector.

But a vector also has a **magnitude** — its length.

For

$$
\mathbf{v}
=
\begin{bmatrix}
3\\
4
\end{bmatrix},
$$

the horizontal and vertical components form a right triangle.

<div style="text-align:center; margin:35px 0;">

<img
  src="{{ '/assets/images/vector_magnitude.png' | relative_url }}"
  alt="Vector from the origin to (3,4), showing its horizontal and vertical components and its length using the Pythagorean theorem)"
  style="width:100%; max-width:1100px; height:auto; border-radius:12px;">

</div>

By the Pythagorean theorem,

$$
\|\mathbf{v}\|^2=3^2+4^2.
$$

Therefore,

$$
\|\mathbf{v}\|
=
\sqrt{3^2+4^2}
=
5.
$$

The symbol

$$
\|\mathbf{v}\|
$$

means the **magnitude** or **length** of the vector.

For a vector in $\mathbb R^2$,

$$
\|\mathbf{v}\|
=
\sqrt{x^2+y^2}
$$

---

## 9. Direction matters too

Two vectors can have the same magnitude but point in different directions.

For example,

$$
\mathbf{u}
=
\begin{bmatrix}
3\\
4
\end{bmatrix}
$$

has magnitude $5$.

But

$$
\mathbf{v}
=
\begin{bmatrix}
-3\\
4
\end{bmatrix}
$$

also has magnitude $5$:

$$
\|\mathbf{v}\|
=
\sqrt{(-3)^2+4^2}
=
5.
$$

Their lengths are the same, but their directions are different.

This is why a vector is more than simply a number representing distance.

<div class="key-idea">

<div class="key-idea-title">
💡 Think of a Vector as an Arrow
</div>

A vector has two fundamental features:

$$
\text{Magnitude}
$$

and

$$
\text{Direction}
$$

The components tell us how the vector is oriented along the coordinate axes.

</div>

---

## 10. From $\mathbb R^2$ to $\mathbb R^3$

So far, every vector we've seen has had two components.

For example,

$$
\begin{bmatrix}
3\\
2
\end{bmatrix}.
$$

We call these vectors **two-dimensional vectors**.

They live in

$$
\mathbb R^2.
$$

The symbol $\mathbb R$ means the set of real numbers.

The $2$ tells us that there are two components.

Now imagine that we need one more direction.

For example, in three-dimensional space we might have

$$
\mathbf{v}
=
\begin{bmatrix}
3\\
2\\
4
\end{bmatrix}.
$$

This vector has three components:

$$
3,\qquad 2,\qquad 4.
$$

We say

$$
\mathbf{v}\in\mathbb R^3.
$$

Now the components describe movement in three coordinate directions.

---

## 11. What does $\mathbb R^n$ mean?

We can continue this pattern.

A vector with:

- 2 components belongs to $\mathbb R^2$;
- 3 components belongs to $\mathbb R^3$;
- 4 components belongs to $\mathbb R^4$;
- $n$ components belongs to $\mathbb R^n$.

A general vector in $\mathbb R^n$ looks like

<div class="math-scroll">

$$
\mathbf{v}
=
\begin{bmatrix}
v_1\\
v_2\\
\vdots\\
v_n
\end{bmatrix}
$$

</div>

There are $n$ real numbers:

$$
v_1,v_2,\ldots,v_n.
$$

These are the **components** of the vector.

---

## 12. Why do we need $\mathbb R^n$?

We can easily draw a vector in $\mathbb R^2$.

We can also draw one in $\mathbb R^3$.

But what about

$$
\mathbb R^{10}
$$

or

$$
\mathbb R^{100}?
$$

We cannot visualize these spaces in the same way.

But mathematically, there is no problem.

For example,

<div class="math-scroll">

$$
\mathbf{v}
=
\begin{bmatrix}
v_1\\
v_2\\
v_3\\
v_4\\
v_5\\
v_6\\
v_7\\
v_8\\
v_9\\
v_{10}
\end{bmatrix}
\in\mathbb R^{10}.
$$

</div>

It is simply a vector with ten real components.

The important transition is this:

> We began by thinking of vectors as arrows in two dimensions. Now we can think of a vector more generally as an ordered list of numbers.

That is the idea that allows linear algebra to work in very high dimensions.

---

## 13. Adding vectors in $\mathbb R^n$

The rule we learned in $\mathbb R^2$ does not change.

Suppose

<div class="math-scroll">

$$
\mathbf{u}
=
\begin{bmatrix}
u_1\\
u_2\\
\vdots\\
u_n
\end{bmatrix}
$$

and

$$
\mathbf{v}
=
\begin{bmatrix}
v_1\\
v_2\\
\vdots\\
v_n
\end{bmatrix}.
$$

</div>

Then

<div class="math-scroll">

$$
\mathbf{u}+\mathbf{v}
=
\begin{bmatrix}
u_1+v_1\\
u_2+v_2\\
\vdots\\
u_n+v_n
\end{bmatrix}.
$$

</div>

We simply add corresponding components.

For example,

$$
\begin{bmatrix}
2\\
1\\
4
\end{bmatrix}
+
\begin{bmatrix}
3\\
-2\\
1
\end{bmatrix}
=
\begin{bmatrix}
5\\
-1\\
5
\end{bmatrix}.
$$

The same rule works whether the vector has $2$, $3$, or $100$ components.

---

## 14. Scalar multiplication in $\mathbb R^n$

Likewise, scalar multiplication works exactly as before.

For

<div class="math-scroll">

$$
\mathbf{v}
=
\begin{bmatrix}
v_1\\
v_2\\
\vdots\\
v_n
\end{bmatrix},
$$

</div>

and scalar $c$,

<div class="math-scroll">

$$
c\mathbf{v}
=
\begin{bmatrix}
cv_1\\
cv_2\\
\vdots\\
cv_n
\end{bmatrix}.
$$

</div>

Again, nothing fundamentally changes.

We simply have more components.

---

## 15. Length in $\mathbb R^n$

The Pythagorean idea also extends naturally.

For

<div class="math-scroll">

$$
\mathbf{v}
=
\begin{bmatrix}
v_1\\
v_2\\
\vdots\\
v_n
\end{bmatrix},
$$

</div>

the length of the vector is

<div class="math-scroll">

$$
\|\mathbf{v}\|
=
\sqrt{
v_1^2+v_2^2+\cdots+v_n^2
}.
$$

</div>

This is called the **Euclidean norm**.

For example,

$$
\mathbf{v}
=
\begin{bmatrix}
1\\
2\\
2
\end{bmatrix}
$$

has length

$$
\|\mathbf{v}\|
=
\sqrt{1^2+2^2+2^2}
=
\sqrt{9}
=
3.
$$

So

$$
\boxed{\|\mathbf v\|=3}.
$$

---

## 16. The zero vector

There is one particularly important vector:

the vector whose every component is zero.

In $\mathbb R^2$,

$$
\mathbf 0=
\begin{bmatrix}
0\\
0
\end{bmatrix}.
$$

In $\mathbb R^3$,

$$
\mathbf 0=
\begin{bmatrix}
0\\
0\\
0
\end{bmatrix}.
$$

And in $\mathbb R^n$,

<div class="math-scroll">

$$
\mathbf 0=
\begin{bmatrix}
0\\
0\\
\vdots\\
0
\end{bmatrix}.
$$

</div>

This is called the **zero vector**.

It behaves like the number zero:

$$
\mathbf v+\mathbf 0=\mathbf v.
$$

---

## 17. The standard basis vectors

Now we can introduce another important idea.

In $\mathbb R^2$, consider

$$
\mathbf e_1=
\begin{bmatrix}
1\\
0
\end{bmatrix}
$$

and

$$
\mathbf e_2=
\begin{bmatrix}
0\\
1
\end{bmatrix}.
$$

These are called the **standard basis vectors**.

Why are they useful?

Because we can build every vector in $\mathbb R^2$ from them.

For example,

$$
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
$$

Therefore,

$$
\begin{bmatrix}
5\\
3
\end{bmatrix}
=
5\mathbf e_1+3\mathbf e_2.
$$

We have just combined two vectors using scalar multiplication and addition.

That gives us our first glimpse of a **linear combination**.

We will study this idea carefully in the next chapter.

---

## 18. Standard basis in $\mathbb R^n$

The same idea works in $\mathbb R^n$.

There are $n$ standard basis vectors:

<div class="math-scroll">

$$
\mathbf e_1=
\begin{bmatrix}
1\\
0\\
\vdots\\
0
\end{bmatrix},
\quad
\mathbf e_2=
\begin{bmatrix}
0\\
1\\
\vdots\\
0
\end{bmatrix},
\quad
\ldots,
\quad
\mathbf e_n=
\begin{bmatrix}
0\\
0\\
\vdots\\
1
\end{bmatrix}.
$$

</div>

Every vector in $\mathbb R^n$ can be written as

<div class="math-scroll">

$$
\mathbf v
=
v_1\mathbf e_1+
v_2\mathbf e_2+
\cdots+
v_n\mathbf e_n.
$$

</div>

This is an important idea.

A vector is not something mysterious.

It can be built by taking the standard directions and scaling them appropriately.

---

## 19. Connection with matrices

Now we can connect vectors back to the matrix equations we studied earlier.

Suppose

$$
A=
\begin{bmatrix}
2&1\\
4&3
\end{bmatrix}
$$

and

$$
\mathbf{x}
=
\begin{bmatrix}
x_1\\
x_2
\end{bmatrix}.
$$

Then

<div class="math-scroll">

$$
A\mathbf{x}
=
\begin{bmatrix}
2&1\\
4&3
\end{bmatrix}
\begin{bmatrix}
x_1\\
x_2
\end{bmatrix}.
$$

</div>

The columns of $A$ are

$$
\mathbf a_1=
\begin{bmatrix}
2\\
4
\end{bmatrix},
\qquad
\mathbf a_2=
\begin{bmatrix}
1\\
3
\end{bmatrix}.
$$

Therefore,

<div class="math-scroll">

$$
\boxed{
A\mathbf{x}
=
x_1\mathbf a_1+x_2\mathbf a_2
}.
$$

</div>

So matrix-vector multiplication is actually a **linear combination of the columns of the matrix**.

This observation will become central in the next few chapters.

---

## 20. What have we learned?

Let's pause before moving on.

We started with a simple movement:

$$
3\text{ units right},\qquad
2\text{ units up}.
$$

We represented it as

$$
\mathbf v=
\begin{bmatrix}
3\\
2
\end{bmatrix}.
$$

Then we learned that vectors have:

- components;
- magnitude;
- direction.

We learned how to:

- add vectors;
- multiply vectors by scalars;
- calculate their length;
- work with vectors in $\mathbb R^2$, $\mathbb R^3$, and $\mathbb R^n$.

And we discovered that every vector can be built from standard basis vectors.

Most importantly, we saw that

$$
A\mathbf x
$$

is a combination of the columns of $A$.

Now we are ready for the next question.

---

## Try It Yourself

Consider

$$
\mathbf a=
\begin{bmatrix}
4\\
3
\end{bmatrix}
$$

and

$$
\mathbf b=
\begin{bmatrix}
2\\
-1
\end{bmatrix}.
$$

### Question 1

Calculate

$$
\mathbf a+\mathbf b.
$$

### Question 2

Calculate

$$
2\mathbf a.
$$

### Question 3

Calculate

$$
\|\mathbf a\|.
$$

### Question 4

Write $\mathbf a$ using the standard basis vectors $\mathbf e_1$ and $\mathbf e_2$.

---

## Answers

### Answer 1

$$
\mathbf a+\mathbf b
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
\begin{bmatrix}
6\\
2
\end{bmatrix}
$$

### Answer 2

$$
2\mathbf a
=
2
\begin{bmatrix}
4\\
3
\end{bmatrix}
=
\begin{bmatrix}
8\\
6
\end{bmatrix}
$$

### Answer 3

$$
\|\mathbf a\|
=
\sqrt{4^2+3^2}
=
\sqrt{25}
={5}.
$$

### Answer 4

Since

$$
\mathbf e_1=
\begin{bmatrix}
1\\
0
\end{bmatrix},
\qquad
\mathbf e_2=
\begin{bmatrix}
0\\
1
\end{bmatrix},
$$

we have

$$
\mathbf a=4\mathbf e_1+3\mathbf e_2.
$$

---

## What comes next?

We have now learned how to add vectors and multiply them by numbers.

That gives us a new possibility.

If we have vectors $\mathbf v_1,\mathbf v_2,\ldots,\mathbf v_k$, we can form

$$
c_1\mathbf v_1+
c_2\mathbf v_2+
\cdots+
c_k\mathbf v_k.
$$

This is called a **linear combination**.

But an even more interesting question is:

> **What collection of vectors can we create using all possible linear combinations?**

That leads us to **span**.

And once we understand span, we can ask whether some of our vectors are redundant.

That leads us to **linear independence**.

So the next sequence is:

$$
\boxed{
\text{Linear Combinations}
\rightarrow
\text{Span}
\rightarrow
\text{Linear Independence}
}
$$
