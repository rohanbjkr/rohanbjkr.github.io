---
title: "The Geometry of Linear Equations"

permalink: /linear-algebra/geometry-of-linear-equations/

layout: linear-algebra-lesson

lesson_number: 1

module: "Module 1 · Linear Equations"

description: "The central problem of linear algebra: understanding Ax = b through equations, geometry, and vectors."
---

# The Geometry of Linear Equations

Linear algebra begins with a deceptively simple question:

> **Can we solve a system of linear equations?**

For example,

$$
\begin{aligned}
2x+y &= 5\\
x-y &= 1
\end{aligned}
$$

We could solve this system using the algebra we already know.

But linear algebra asks us to see something deeper.

These equations can be understood in **three different ways**:

1. as equations;
2. as geometry;
3. as vectors and matrices.

These are not three different problems.

They are **three views of the same problem**.

And learning to move between these views is one of the central skills of linear algebra.

---

# 1. Start with two equations

Consider

$$
\begin{aligned}
2x+y &= 5\\
x-y &= 1.
\end{aligned}
$$

Our goal is to find values of $x$ and $y$ that satisfy **both equations simultaneously**.

Let's solve them quickly.

From the second equation,

$$
x-y=1.
$$

Therefore,

$$
x=y+1.
$$

Substitute this into the first equation:

$$
2(y+1)+y=5.
$$

So

$$
3y+2=5,
$$

which gives

$$
y=1.
$$

Therefore,

$$
x=2.
$$

The solution is

$$
\boxed{
\begin{bmatrix}
x\\
y
\end{bmatrix}
=
\begin{bmatrix}
2\\
1
\end{bmatrix}}
$$

So far, this looks like ordinary algebra.

But now let's look at exactly the same problem geometrically.

---

# 2. The row picture: equations become lines

Rewrite the equations as

$$
y=5-2x
$$

and

$$
y=x-1.
$$

Each equation represents a line in the $xy$-plane.

The first equation gives the line

$$
y=5-2x.
$$

The second gives

$$
y=x-1.
$$

The solution of the system is the point where the two lines intersect.

That intersection is

$$
(2,1).
$$

So the algebraic solution

$$
x=2,\qquad y=1
$$

has a geometric interpretation:

> **The solution is the intersection of two lines.**

---

<div class="key-idea">

<div class="key-idea-title">
💡 The Row Picture
</div>

Each equation represents a geometric object.

For two equations in two unknowns, each equation represents a line.

The solution to the system is the point that lies on **both lines**.

</div>

---

# 3. What if the lines don't intersect?

Now consider

$$
\begin{aligned}
x+y &= 2\\
x+y &= 5.
\end{aligned}
$$

The two equations describe parallel lines.

They can never meet.

Therefore, there is **no solution**.

This is the first important lesson from geometry:

> The geometry immediately tells us whether a system has a solution.

There are three possibilities for two lines.

### Case 1: One intersection

The system has exactly **one solution**.

### Case 2: Parallel lines

The system has **no solution**.

### Case 3: The same line

The system has **infinitely many solutions**.

So even before doing any algebra, geometry gives us information about the system.

---

# 4. The column picture

Now let's look at our original system from a completely different angle.

We had

$$
\begin{aligned}
2x+y &= 5\\
x-y &= 1.
\end{aligned}
$$

Put the coefficients into a matrix:

$$
A=
\begin{bmatrix}
2&1\\
1&-1
\end{bmatrix}.
$$

Put the unknowns into a vector:

$$
\mathbf{x}
=
\begin{bmatrix}
x\\
y
\end{bmatrix}.
$$

And put the right-hand side into another vector:

$$
\mathbf{b}
=
\begin{bmatrix}
5\\
1
\end{bmatrix}.
$$

Then the entire system can be written compactly as

$$
A\mathbf{x}=\mathbf{b}.
$$

That is,

$$
\begin{bmatrix}
2&1\\
1&-1
\end{bmatrix}
\begin{bmatrix}
x\\
y
\end{bmatrix}
=
\begin{bmatrix}
5\\
1
\end{bmatrix}.
$$

This is our first important matrix equation.

---

# 5. What does matrix multiplication mean?

Let's multiply the matrix by the vector.

$$
\begin{bmatrix}
2&1\\
1&-1
\end{bmatrix}
\begin{bmatrix}
x\\
y
\end{bmatrix}
$$

The result is

$$
\begin{bmatrix}
2x+y\\
x-y
\end{bmatrix}.
$$

Therefore,

$$
\begin{bmatrix}
2&1\\
1&-1
\end{bmatrix}
\begin{bmatrix}
x\\
y
\end{bmatrix}
=
\begin{bmatrix}
2x+y\\
x-y
\end{bmatrix}.
$$

So

$$
A\mathbf{x}=\mathbf{b}
$$

simply means

$$
\begin{bmatrix}
2x+y\\
x-y
\end{bmatrix}
=
\begin{bmatrix}
5\\
1
\end{bmatrix}.
$$

In other words, matrix notation has compressed our two equations into a single expression.

---

# 6. The column picture

There is another way to interpret exactly the same equation.

Write the matrix by its columns:

$$
A=
\begin{bmatrix}
2&1\\
1&-1
\end{bmatrix}
=
\begin{bmatrix}
2\\
1
\end{bmatrix}
\begin{bmatrix}
\phantom{1}
\end{bmatrix}
+
\begin{bmatrix}
1\\
-1
\end{bmatrix}.
$$

More precisely, matrix-vector multiplication gives

$$
\begin{bmatrix}
2&1\\
1&-1
\end{bmatrix}
\begin{bmatrix}
x\\
y
\end{bmatrix}
=
x
\begin{bmatrix}
2\\
1
\end{bmatrix}
+
y
\begin{bmatrix}
1\\
-1
\end{bmatrix}.
$$

Therefore our equation

$$
A\mathbf{x}=\mathbf{b}
$$

can be written as

$$
x
\begin{bmatrix}
2\\
1
\end{bmatrix}
+
y
\begin{bmatrix}
1\\
-1
\end{bmatrix}
=
\begin{bmatrix}
5\\
1
\end{bmatrix}.
$$

Now the problem looks completely different.

We are asking:

> **Can we combine the columns of $A$ to produce $\mathbf{b}$?**

For this particular problem, the answer is yes.

Using $x=2$ and $y=1$,

$$
2
\begin{bmatrix}
2\\
1
\end{bmatrix}
+
1
\begin{bmatrix}
1\\
-1
\end{bmatrix}
=
\begin{bmatrix}
5\\
1
\end{bmatrix}.
$$

Let's check:

$$
\begin{bmatrix}
4\\
2
\end{bmatrix}
+
\begin{bmatrix}
1\\
-1
\end{bmatrix}
=
\begin{bmatrix}
5\\
1
\end{bmatrix}.
$$

It works.

---

<div class="key-idea">

<div class="key-idea-title">
💡 The Column Picture
</div>

The equation

$$
A\mathbf{x}=\mathbf{b}
$$

asks whether $\mathbf{b}$ can be created as a **linear combination of the columns of $A$**.

This idea will eventually lead us to:

- linear combinations;
- span;
- linear independence;
- basis;
- dimension;
- column space.

</div>

---

# 7. Three views of the same problem

Let's pause.

We started with

$$
\begin{aligned}
2x+y &= 5\\
x-y &= 1.
\end{aligned}
$$

We can now see the same problem in three ways.

---

## View 1 — The equation picture

We solve equations for unknowns:

$$
2x+y=5
$$

and

$$
x-y=1.
$$

The answer is

$$
x=2,\qquad y=1.
$$

---

## View 2 — The row picture

Each equation becomes a line.

The solution is the point where the lines intersect:

$$
(2,1).
$$

---

## View 3 — The column picture

The matrix equation

$$
A\mathbf{x}=\mathbf{b}
$$

asks whether $\mathbf{b}$ can be constructed from the columns of $A$.

$$
2
\begin{bmatrix}
2\\
1
\end{bmatrix}
+
1
\begin{bmatrix}
1\\
-1
\end{bmatrix}
=
\begin{bmatrix}
5\\
1
\end{bmatrix}.
$$

---

# 8. Why do we need all three views?

You might be wondering:

> If ordinary algebra already gives us the answer, why bother with matrices and geometry?

Because the problems quickly become much larger.

Imagine a system with 100 equations and 100 unknowns:

$$
A\mathbf{x}=\mathbf{b}.
$$

Writing all 100 equations individually becomes extremely difficult to understand.

Matrix notation gives us a compact structure.

Geometry gives us intuition.

And the column picture tells us something fundamental:

> **What vectors can the matrix produce?**

This question becomes central to linear algebra.

---

# 9. From two dimensions to many dimensions

Everything we have done so far works in higher dimensions.

Instead of

$$
\begin{bmatrix}
x\\
y
\end{bmatrix},
$$

we might have

$$
\mathbf{x}
=
\begin{bmatrix}
x_1\\
x_2\\
x_3
\end{bmatrix}.
$$

Or even

$$
\mathbf{x}
=
\begin{bmatrix}
x_1\\
x_2\\
\vdots\\
x_n
\end{bmatrix}.
$$

A system can then be written as

$$
A\mathbf{x}=\mathbf{b}.
$$

We can no longer easily draw the geometry when $n$ becomes large.

But the algebraic structure remains.

This is one of the great strengths of linear algebra:

> **The ideas we see in two dimensions continue to work in many dimensions.**

---

# 10. A first look at vectors

The column picture has introduced an important object:

$$
\begin{bmatrix}
2\\
1
\end{bmatrix}.
$$

This is a vector.

A vector can be viewed as an arrow, a list of numbers, or a direction and magnitude.

For example,

$$
\mathbf{v}
=
\begin{bmatrix}
3\\
4
\end{bmatrix}
$$

can be represented geometrically as an arrow from $(0,0)$ to $(3,4)$.

Its length is given by the Pythagorean theorem:

$$
\|\mathbf{v}\|
=
\sqrt{3^2+4^2}
=
5.
$$

So geometry and algebra are already beginning to connect.

We will return to vectors in much greater detail later.

---

# 11. A useful question

Consider

$$
A\mathbf{x}=\mathbf{b}.
$$

Suppose $A$ is

$$
A=
\begin{bmatrix}
1&2\\
2&4
\end{bmatrix}.
$$

Its columns are

$$
\mathbf{a}_1=
\begin{bmatrix}
1\\
2
\end{bmatrix}
$$

and

$$
\mathbf{a}_2=
\begin{bmatrix}
2\\
4
\end{bmatrix}.
$$

Notice something interesting:

$$
\mathbf{a}_2=2\mathbf{a}_1.
$$

The second column points in exactly the same direction as the first.

So can these two columns produce every vector in $\mathbb R^2$?

No.

Their combinations always look like

$$
x
\begin{bmatrix}
1\\
2
\end{bmatrix}
+
y
\begin{bmatrix}
2\\
4
\end{bmatrix}.
$$

Since the second vector is just twice the first, every combination remains on the same line.

Therefore, some vectors $\mathbf{b}$ cannot be produced.

This is our first glimpse of an important idea:

> **Not every collection of vectors gives us enough freedom to reach every possible vector.**

Later we will give this phenomenon precise mathematical names.

---

<div class="key-idea">

<div class="key-idea-title">
💡 A Central Question of Linear Algebra
</div>

Given

$$
A\mathbf{x}=\mathbf{b},
$$

we will repeatedly ask:

> **Can the columns of $A$ produce $\mathbf{b}$?**

The answer leads us toward the ideas of:

$$
\boxed{\text{Column Space}}
$$

$$
\boxed{\text{Span}}
$$

$$
\boxed{\text{Linear Independence}}
$$

$$
\boxed{\text{Basis}}
$$

and

$$
\boxed{\text{Dimension}}.
$$

</div>

---

# 12. Check Your Understanding

Consider the system

$$
\begin{aligned}
x+y &= 4\\
x-y &= 2.
\end{aligned}
$$

### Question 1

What is the solution?

### Question 2

What do the two equations represent geometrically?

### Question 3

Write the system in the form

$$
A\mathbf{x}=\mathbf{b}.
$$

### Question 4

Write the system as a combination of the columns of $A$.

---

<details>

<summary><strong>Show the answers</strong></summary>

### Answer 1

Adding the two equations gives

$$
2x=6.
$$

Therefore,

$$
x=3.
$$

Substituting back,

$$
y=1.
$$

So

$$
\boxed{
\mathbf{x}
=
\begin{bmatrix}
3\\
1
\end{bmatrix}}
$$

### Answer 2

Each equation represents a line.

The solution is their intersection:

$$
(3,1).
$$

### Answer 3

We have

$$
A=
\begin{bmatrix}
1&1\\
1&-1
\end{bmatrix},
$$

$$
\mathbf{x}
=
\begin{bmatrix}
x\\
y
\end{bmatrix},
$$

and

$$
\mathbf{b}
=
\begin{bmatrix}
4\\
2
\end{bmatrix}.
$$

Therefore,

$$
\boxed{
A\mathbf{x}=\mathbf{b}}
$$

means

$$
\begin{bmatrix}
1&1\\
1&-1
\end{bmatrix}
\begin{bmatrix}
x\\
y
\end{bmatrix}
=
\begin{bmatrix}
4\\
2
\end{bmatrix}.
$$

### Answer 4

The column picture is

$$
x
\begin{bmatrix}
1\\
1
\end{bmatrix}
+
y
\begin{bmatrix}
1\\
-1
\end{bmatrix}
=
\begin{bmatrix}
4\\
2
\end{bmatrix}.
$$

Using $x=3$ and $y=1$,

$$
3
\begin{bmatrix}
1\\
1
\end{bmatrix}
+
1
\begin{bmatrix}
1\\
-1
\end{bmatrix}
=
\begin{bmatrix}
4\\
2
\end{bmatrix}.
$$

</details>

---

# 13. The Big Picture

We began with two simple equations:

$$
\begin{aligned}
2x+y &= 5\\
x-y &= 1.
\end{aligned}
$$

But that simple system revealed the basic language of linear algebra.

We can see it as:

### Equations

$$
2x+y=5,\qquad x-y=1
$$

### Geometry

Two lines intersecting at

$$
(2,1).
$$

### Matrix equation

$$
A\mathbf{x}=\mathbf{b}.
$$

### Column combination

$$
x\mathbf{a}_1+y\mathbf{a}_2=\mathbf{b}.
$$

These are different ways of seeing the **same mathematical object**.

And this is the perspective we will carry throughout the course.

---

# What Comes Next?

We know that a system can be written as

$$
A\mathbf{x}=\mathbf{b}.
$$

But how do we actually solve a large system efficiently?

For a system with hundreds or thousands of equations, repeatedly substituting variables is not practical.

We need a systematic procedure.

That procedure is **elimination**.

In the next lesson, we will learn how to transform a system into a simpler form while preserving its solutions.

## Next Lesson

### **Elimination**

We will learn how row operations turn a complicated system into a much easier one.

The goal is simple:

$$
A\mathbf{x}=\mathbf{b}
\quad\longrightarrow\quad
\text{simpler system}
\quad\longrightarrow\quad
\mathbf{x}.
$$
