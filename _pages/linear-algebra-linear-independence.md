---
title: "Linear Independence"
permalink: /linear-algebra/linear-independence/
layout: linear-algebra-lesson
lesson_number: 11
module: "Module 3 · Vector Spaces"
description: "Understanding when vectors provide genuinely new directions and when some vectors are redundant."
---

## What is the question?

In the previous lesson, we learned about **linear combinations** and **span**.

Given vectors

$$
\mathbf v_1,\mathbf v_2,\ldots,\mathbf v_k,
$$

we can form combinations such as

<div class="math-scroll">

$$
c_1\mathbf v_1+
c_2\mathbf v_2+
\cdots+
c_k\mathbf v_k.
$$

</div>

The collection of all such combinations is their span.

But we noticed something important.

Suppose

$$
\mathbf u=
\begin{bmatrix}
1\\
2
\end{bmatrix}
$$

and

$$
\mathbf v=
\begin{bmatrix}
2\\
4
\end{bmatrix}.
$$

The second vector does not give us a new direction because

$$
\mathbf v=2\mathbf u.
$$

So although we have two vectors, we really have only **one direction**.

This leads to the next question:

> How can we tell whether a collection of vectors contains redundant vectors?

This is the idea of **linear independence**.

---

## 1. Start with redundancy

Consider

$$
\mathbf u=
\begin{bmatrix}
1\\
2
\end{bmatrix},
\qquad
\mathbf v=
\begin{bmatrix}
2\\
4
\end{bmatrix}.
$$

Because

$$
\mathbf v=2\mathbf u,
$$

we can write

$$
\mathbf v-2\mathbf u=\mathbf 0.
$$

That is,

$$
-2\mathbf u+\mathbf v=\mathbf 0.
$$

Notice something interesting.

We have found a combination of the vectors that produces the zero vector.

And the coefficients are **not all zero**.

Specifically,

$$
-2\neq0
$$

and

$$
1\neq0.
$$

This is the key observation behind linear dependence.

---

## 2. The zero vector gives us a clue

Suppose we have two vectors $\mathbf u$ and $\mathbf v$.

Consider

$$
a\mathbf u+b\mathbf v=\mathbf 0.
$$

There is always one obvious solution:

$$
a=0,\qquad b=0.
$$

Then

$$
0\mathbf u+0\mathbf v=\mathbf 0.
$$

That is not very interesting.

The important question is:

> Is there another solution in which at least one coefficient is nonzero?

For our previous example,

$$
\mathbf u=
\begin{bmatrix}
1\\
2
\end{bmatrix},
\qquad
\mathbf v=
\begin{bmatrix}
2\\
4
\end{bmatrix},
$$

we found

$$
-2\mathbf u+\mathbf v=\mathbf0.
$$

So there is a **nonzero choice of coefficients** that produces zero.

That tells us that the vectors are redundant.

---

## 3. The definition of linear independence

Now we can state the definition.

Vectors

$$
\mathbf v_1,\mathbf v_2,\ldots,\mathbf v_k
$$

are **linearly independent** if the equation

<div class="math-scroll">

$$
c_1\mathbf v_1+
c_2\mathbf v_2+
\cdots+
c_k\mathbf v_k
=
\mathbf0
$$

</div>

has only the trivial solution

$$
c_1=c_2=\cdots=c_k=0.
$$

In other words:

> The only way to combine the vectors and get the zero vector is to use zero for every coefficient.

If there is a nonzero combination that gives zero, the vectors are **linearly dependent**.

So there are two possibilities.

### Linearly independent

$$
c_1\mathbf v_1+\cdots+c_k\mathbf v_k=\mathbf0
$$

implies

$$
\boxed{
c_1=\cdots=c_k=0
}.
$$

### Linearly dependent

There exists some choice of coefficients, not all zero, such that

$$
\boxed{
c_1\mathbf v_1+\cdots+c_k\mathbf v_k=\mathbf0
}.
$$

---

## 4. Why zero?

You might wonder:

> Why do we specifically look at combinations that equal the zero vector?

Because zero gives us a way to detect **redundancy**.

Suppose

$$
a\mathbf u+b\mathbf v=\mathbf0
$$

and suppose $b\neq0$.

Then

$$
b\mathbf v=-a\mathbf u.
$$

Divide by $b$:

$$
\mathbf v
=
-\frac{a}{b}\mathbf u.
$$

So $\mathbf v$ can be constructed from $\mathbf u$.

It does not provide a genuinely new direction.

That is exactly what we mean by redundancy.

---

## 5. A simple example

Consider

$$
\mathbf u=
\begin{bmatrix}
1\\
2
\end{bmatrix},
\qquad
\mathbf v=
\begin{bmatrix}
2\\
4
\end{bmatrix}.
$$

We want to determine whether these vectors are linearly independent.

Start with

$$
a\mathbf u+b\mathbf v=\mathbf0.
$$

Substitute the vectors:

$$
a
\begin{bmatrix}
1\\
2
\end{bmatrix}
+
b
\begin{bmatrix}
2\\
4
\end{bmatrix}
=
\begin{bmatrix}
0\\
0
\end{bmatrix}.
$$

Looking at the components gives

$$
a+2b=0
$$

and

$$
2a+4b=0.
$$

The second equation is just twice the first.

So we have only one independent equation:

$$
a+2b=0.
$$

Therefore,

$$
a=-2b.
$$

We can choose, for example,

$$
b=1.
$$

Then

$$
a=-2.
$$

So

$$
-2\mathbf u+\mathbf v=\mathbf0.
$$

The coefficients are not both zero.

Therefore,

$$
\boxed{
\mathbf u,\mathbf v
\text{ are linearly dependent}.
}
$$

---

## 6. Geometric meaning

For two vectors in $\mathbb R^2$, there is a very useful geometric interpretation.

If two nonzero vectors lie on the same line through the origin, they are linearly dependent.

For example,

$$
\mathbf u=
\begin{bmatrix}
1\\
2
\end{bmatrix},
\qquad
\mathbf v=
\begin{bmatrix}
2\\
4
\end{bmatrix}.
$$

Both point along the same line.

Their span is only a line.

So they do not provide two genuinely different directions.

The picture is the important part:

> **Two vectors on the same line are dependent.**

---

## 7. Two vectors pointing in different directions

Now consider

$$
\mathbf u=
\begin{bmatrix}
1\\
2
\end{bmatrix},
\qquad
\mathbf v=
\begin{bmatrix}
2\\
-1
\end{bmatrix}.
$$

These vectors do not lie on the same line.

They point in different directions.


::contentReference[oaicite:0]{index=0}


This means neither vector can be produced by simply scaling the other.

So we expect them to be linearly independent.

Let's verify this algebraically.

---

## 8. Testing the example algebraically

Start with

$$
a\mathbf u+b\mathbf v=\mathbf0.
$$

Substitute:

$$
a
\begin{bmatrix}
1\\
2
\end{bmatrix}
+
b
\begin{bmatrix}
2\\
-1
\end{bmatrix}
=
\begin{bmatrix}
0\\
0
\end{bmatrix}.
$$

This gives

$$
a+2b=0
$$

and

$$
2a-b=0.
$$

From the first equation,

$$
a=-2b.
$$

Substitute into the second:

$$
2(-2b)-b=0.
$$

Therefore,

$$
-5b=0.
$$

So

$$
b=0.
$$

Then

$$
a=0.
$$

The only solution is

$$
a=b=0.
$$

Therefore,

$$
\boxed{
\mathbf u,\mathbf v
\text{ are linearly independent}.
}
$$

---

## 9. What independence really means

It is tempting to memorize:

> "Independent vectors point in different directions."

That is useful in $\mathbb R^2$, but the deeper meaning is more general.

Linear independence means:

> **No vector in the collection can be constructed from the others.**

For example, suppose

$$
\mathbf v_3
=
2\mathbf v_1
-
3\mathbf v_2.
$$

Then

$$
2\mathbf v_1
-
3\mathbf v_2
-
\mathbf v_3
=
\mathbf0.
$$

The coefficients

$$
2,\quad -3,\quad -1
$$

are not all zero.

Therefore the three vectors are linearly dependent.

The third vector was redundant.

---

## 10. Dependence means redundancy

This is perhaps the most useful way to think about the definition.

Suppose we have

$$
\mathbf v_1,\mathbf v_2,\mathbf v_3.
$$

If we can write

$$
\mathbf v_3
=
c_1\mathbf v_1+c_2\mathbf v_2,
$$

then $\mathbf v_3$ does not add a new direction.

It can already be produced using the first two vectors.

Therefore the collection is dependent.

So:

$$
\boxed{
\text{Linear dependence}
=
\text{redundancy}
}
$$

while

$$
\boxed{
\text{Linear independence}
=
\text{no redundancy}
}.
$$

---

## 11. An example with three vectors

Consider

$$
\mathbf v_1=
\begin{bmatrix}
1\\
0\\
0
\end{bmatrix},
\qquad
\mathbf v_2=
\begin{bmatrix}
0\\
1\\
0
\end{bmatrix},
\qquad
\mathbf v_3=
\begin{bmatrix}
1\\
1\\
0
\end{bmatrix}.
$$

Notice that

$$
\mathbf v_3
=
\mathbf v_1+\mathbf v_2.
$$

Therefore,

$$
\mathbf v_1+\mathbf v_2-\mathbf v_3
=
\mathbf0.
$$

The coefficients

$$
1,\quad1,\quad-1
$$

are not all zero.

Therefore,

$$
\boxed{
\mathbf v_1,\mathbf v_2,\mathbf v_3
\text{ are linearly dependent}.
}
$$

We had three vectors, but only two genuinely new directions.

---

## 12. What if we remove the redundant vector?

Now consider only

$$
\mathbf v_1=
\begin{bmatrix}
1\\
0\\
0
\end{bmatrix}
$$

and

$$
\mathbf v_2=
\begin{bmatrix}
0\\
1\\
0
\end{bmatrix}.
$$

Suppose

$$
a\mathbf v_1+b\mathbf v_2
=
\mathbf0.
$$

Then

$$
a
\begin{bmatrix}
1\\
0\\
0
\end{bmatrix}
+
b
\begin{bmatrix}
0\\
1\\
0
\end{bmatrix}
=
\begin{bmatrix}
0\\
0\\
0
\end{bmatrix}.
$$

Therefore,

$$
a=0
$$

and

$$
b=0.
$$

So these two vectors are linearly independent.

They provide two genuinely different directions.

---

## 13. The connection with span

We can now connect the last two lessons.

### Span asks:

> **What can these vectors produce?**

### Linear independence asks:

> **Are any of these vectors redundant?**

These are different questions.

For example,

$$
\mathbf u=
\begin{bmatrix}
1\\
2
\end{bmatrix},
\qquad
\mathbf v=
\begin{bmatrix}
2\\
4
\end{bmatrix}.
$$

Their span is

$$
\operatorname{span}\{\mathbf u,\mathbf v\}
=
\operatorname{span}\{\mathbf u\}.
$$

So they generate a line.

But because $\mathbf v=2\mathbf u$, the vectors are dependent.

We could remove $\mathbf v$ without changing the span.

That is exactly what redundancy means.

---

## 14. A very useful thought experiment

Suppose you have a collection of vectors.

Ask yourself:

> If I remove one of these vectors, does the span change?

If removing a vector does **not** change the span, that vector was redundant.

For example,

$$
\mathbf v_1=
\begin{bmatrix}
1\\
0
\end{bmatrix},
\qquad
\mathbf v_2=
\begin{bmatrix}
0\\
1
\end{bmatrix},
\qquad
\mathbf v_3=
\begin{bmatrix}
1\\
1
\end{bmatrix}.
$$

Because

$$
\mathbf v_3=\mathbf v_1+\mathbf v_2,
$$

we have

$$
\operatorname{span}
\{\mathbf v_1,\mathbf v_2,\mathbf v_3\}
=
\operatorname{span}
\{\mathbf v_1,\mathbf v_2\}.
$$

Removing $\mathbf v_3$ does not change the span.

Therefore $\mathbf v_3$ is redundant.

---

## 15. Linear independence and the zero vector

There is one very useful shortcut.

Any collection containing the zero vector is automatically linearly dependent.

Why?

Suppose one of the vectors is

$$
\mathbf v_1=\mathbf0.
$$

Then

$$
1\mathbf v_1+
0\mathbf v_2+
\cdots+
0\mathbf v_k
=
\mathbf0.
$$

The coefficients are not all zero because the first coefficient is $1$.

Therefore the vectors are dependent.

So:

$$
\boxed{
\text{Any set containing }\mathbf0
\text{ is linearly dependent.}
}
$$

---

## 16. One vector

What about a collection containing only one vector?

Suppose

$$
\mathbf v\neq\mathbf0.
$$

Is $\{\mathbf v\}$ linearly independent?

We ask whether

$$
c\mathbf v=\mathbf0.
$$

Because $\mathbf v\neq\mathbf0$, the only possibility is

$$
c=0.
$$

Therefore,

$$
\boxed{
\{\mathbf v\}
\text{ is linearly independent if }
\mathbf v\neq\mathbf0.
}
$$

But if

$$
\mathbf v=\mathbf0,
$$

the collection is dependent.

So a single vector is independent precisely when it is nonzero.

---

## 17. How many independent vectors can we have?

Here is an important geometric limitation.

In $\mathbb R^2$, we can have at most **two** linearly independent vectors.

Why?

Two independent vectors can provide two different directions.

But a third vector in $\mathbb R^2$ must be expressible using those two directions.

So any collection of three vectors in $\mathbb R^2$ must be linearly dependent.

This generalizes:

> In $\mathbb R^n$, there can be at most $n$ linearly independent vectors.

For example:

$$
\boxed{
\mathbb R^2
\rightarrow
\text{at most 2 independent vectors}
}
$$

$$
\boxed{
\mathbb R^3
\rightarrow
\text{at most 3 independent vectors}
}
$$

$$
\boxed{
\mathbb R^n
\rightarrow
\text{at most }n\text{ independent vectors}
}
$$

This will become extremely important when we study **basis** and **dimension**.

---

## 18. A geometric picture in $\mathbb R^2$

There are three basic cases.

### One nonzero vector

Its span is a line.

It is linearly independent by itself.

### Two vectors on the same line

Their span is still a line.

They are linearly dependent.

### Two vectors pointing in different directions

Their span is the whole plane.

They are linearly independent.

This gives us a useful geometric summary:

$$
\boxed{
\begin{array}{c}
\text{one direction}\\
\downarrow\\
\text{line}
\end{array}
}
$$

and

$$
\boxed{
\begin{array}{c}
\text{two independent directions}\\
\downarrow\\
\text{plane}
\end{array}
}
$$

---

## 19. Linear independence as a system of equations

There is another way to test independence.

Suppose we put vectors into a matrix as columns:

$$
A=
\begin{bmatrix}
|&|& &|\\
\mathbf v_1&\mathbf v_2&\cdots&\mathbf v_k\\
|&|& &|
\end{bmatrix}.
$$

Then

$$
c_1\mathbf v_1+
\cdots+
c_k\mathbf v_k
=
\mathbf0
$$

can be written as

<div class="math-scroll">

$$
A
\begin{bmatrix}
c_1\\
c_2\\
\vdots\\
c_k
\end{bmatrix}
=
\begin{bmatrix}
0\\
0\\
\vdots\\
0
\end{bmatrix}.
$$

</div>

In other words,

$$
A\mathbf c=\mathbf0.
$$

Therefore:

> The columns of $A$ are linearly independent exactly when the homogeneous system $A\mathbf c=\mathbf0$ has only the trivial solution.

This connects linear independence directly to the systems of equations we studied earlier.

---

## 20. Example using a matrix

Consider

$$
A=
\begin{bmatrix}
1&2\\
2&4
\end{bmatrix}.
$$

Its columns are

$$
\mathbf v_1=
\begin{bmatrix}
1\\
2
\end{bmatrix},
\qquad
\mathbf v_2=
\begin{bmatrix}
2\\
4
\end{bmatrix}.
$$

To test independence, solve

$$
A\mathbf c=\mathbf0.
$$

That is,

<div class="math-scroll">

$$
\begin{bmatrix}
1&2\\
2&4
\end{bmatrix}
\begin{bmatrix}
c_1\\
c_2
\end{bmatrix}
=
\begin{bmatrix}
0\\
0
\end{bmatrix}.
$$

</div>

This gives

$$
c_1+2c_2=0.
$$

There are infinitely many solutions.

For example,

$$
c_2=1
$$

gives

$$
c_1=-2.
$$

Therefore,

$$
\begin{bmatrix}
c_1\\
c_2
\end{bmatrix}
=
\begin{bmatrix}
-2\\
1
\end{bmatrix}
$$

is a nonzero solution.

Therefore the columns are linearly dependent.

---

## 21. An independent matrix example

Now consider

$$
A=
\begin{bmatrix}
1&2\\
2&-1
\end{bmatrix}.
$$

Its columns are

$$
\mathbf v_1=
\begin{bmatrix}
1\\
2
\end{bmatrix},
\qquad
\mathbf v_2=
\begin{bmatrix}
2\\
-1
\end{bmatrix}.
$$

Solve

$$
A\mathbf c=\mathbf0.
$$

We get

$$
c_1+2c_2=0
$$

and

$$
2c_1-c_2=0.
$$

As we saw earlier, these equations imply

$$
c_1=0,
\qquad
c_2=0.
$$

Therefore the only solution is the trivial solution.

So the columns are linearly independent.

---

## 22. Independence and unique representation

Here is a deeper consequence.

Suppose $\mathbf v_1,\ldots,\mathbf v_k$ are linearly independent.

Suppose a vector $\mathbf x$ can be written in two ways:

$$
\mathbf x
=
c_1\mathbf v_1+\cdots+c_k\mathbf v_k
$$

and

$$
\mathbf x
=
d_1\mathbf v_1+\cdots+d_k\mathbf v_k.
$$

Because both expressions equal $\mathbf x$, we can set them equal:

<div class="math-scroll">

$$
c_1\mathbf v_1+\cdots+c_k\mathbf v_k
=
d_1\mathbf v_1+\cdots+d_k\mathbf v_k.
$$

</div>

Move everything to one side:

<div class="math-scroll">

$$
(c_1-d_1)\mathbf v_1+
\cdots+
(c_k-d_k)\mathbf v_k
=
\mathbf0.
$$

</div>

Because the vectors are linearly independent, the only possibility is

$$
c_1-d_1=0,
\quad\ldots,\quad
c_k-d_k=0.
$$

Therefore,

$$
c_i=d_i
$$

for every $i$.

So:

> **Linear independence guarantees that a linear combination has a unique set of coefficients.**

This is an important idea that will return when we study basis.

---

## 23. Three ideas together

We can now see the relationship between the concepts from the last three lessons.

### Linear combination

Take vectors and combine them:

$$
c_1\mathbf v_1+\cdots+c_k\mathbf v_k.
$$

### Span

Consider **all possible** such combinations:

$$
\operatorname{span}
\{\mathbf v_1,\ldots,\mathbf v_k\}.
$$

### Linear independence

Ask whether any vector in the collection is redundant.

Equivalently, ask whether

$$
c_1\mathbf v_1+\cdots+c_k\mathbf v_k=\mathbf0
$$

has a nontrivial solution.

These ideas fit together naturally.

---

## 24. A useful example combining everything

Consider

$$
\mathbf v_1=
\begin{bmatrix}
1\\
0
\end{bmatrix},
\qquad
\mathbf v_2=
\begin{bmatrix}
0\\
1
\end{bmatrix}.
$$

### Linear combinations

We can form

$$
a\mathbf v_1+b\mathbf v_2.
$$

This gives

$$
\begin{bmatrix}
a\\
b
\end{bmatrix}.
$$

### Span

Because $a$ and $b$ can be any real numbers,

$$
\operatorname{span}
\{\mathbf v_1,\mathbf v_2\}
=
\mathbb R^2.
$$

### Independence

Suppose

$$
a\mathbf v_1+b\mathbf v_2
=
\mathbf0.
$$

Then

$$
\begin{bmatrix}
a\\
b
\end{bmatrix}
=
\begin{bmatrix}
0\\
0
\end{bmatrix}.
$$

Therefore,

$$
a=0,\qquad b=0.
$$

So the vectors are linearly independent.

Thus these two vectors have both properties:

$$
\boxed{
\text{They span }\mathbb R^2
}
$$

and

$$
\boxed{
\text{They are linearly independent}.
}
$$

That combination will soon receive a special name.

---

## Try It Yourself

Consider

$$
\mathbf u=
\begin{bmatrix}
1\\
3
\end{bmatrix},
\qquad
\mathbf v=
\begin{bmatrix}
2\\
6
\end{bmatrix}.
$$

### Question 1

Are $\mathbf u$ and $\mathbf v$ linearly independent?

### Question 2

Find nonzero coefficients $a$ and $b$ such that

$$
a\mathbf u+b\mathbf v=\mathbf0.
$$

### Question 3

Now consider

$$
\mathbf p=
\begin{bmatrix}
1\\
3
\end{bmatrix},
\qquad
\mathbf q=
\begin{bmatrix}
2\\
-1
\end{bmatrix}.
$$

Determine whether $\mathbf p$ and $\mathbf q$ are linearly independent.

### Question 4

Consider

$$
\mathbf v_1=
\begin{bmatrix}
1\\
0\\
0
\end{bmatrix},
\qquad
\mathbf v_2=
\begin{bmatrix}
0\\
1\\
0
\end{bmatrix},
\qquad
\mathbf v_3=
\begin{bmatrix}
1\\
1\\
0
\end{bmatrix}.
$$

Are these three vectors linearly independent?

---

## Answers

### Answer 1

We have

$$
\mathbf v=
\begin{bmatrix}
2\\
6
\end{bmatrix}
=
2
\begin{bmatrix}
1\\
3
\end{bmatrix}
=
2\mathbf u.
$$

Therefore the vectors point in the same direction.

They are linearly dependent.

$$
\boxed{\text{Dependent}}
$$

---

### Answer 2

Since

$$
\mathbf v=2\mathbf u,
$$

we can write

$$
-2\mathbf u+\mathbf v=\mathbf0.
$$

Therefore one valid choice is

$$
\boxed{a=-2,\qquad b=1}.
$$

Because these coefficients are not both zero, the vectors are dependent.

---

### Answer 3

Start with

$$
a\mathbf p+b\mathbf q=\mathbf0.
$$

Then

$$
a
\begin{bmatrix}
1\\
3
\end{bmatrix}
+
b
\begin{bmatrix}
2\\
-1
\end{bmatrix}
=
\begin{bmatrix}
0\\
0
\end{bmatrix}.
$$

This gives

$$
a+2b=0
$$

and

$$
3a-b=0.
$$

From the first equation,

$$
a=-2b.
$$

Substitute:

$$
3(-2b)-b=0.
$$

Therefore,

$$
-7b=0.
$$

Hence

$$
b=0
$$

and therefore

$$
a=0.
$$

Only the trivial solution exists.

Thus,

$$
\boxed{\mathbf p,\mathbf q
\text{ are linearly independent}.}
$$

---

### Answer 4

Notice that

$$
\mathbf v_3
=
\mathbf v_1+\mathbf v_2.
$$

Therefore,

$$
\mathbf v_1+\mathbf v_2-\mathbf v_3
=
\mathbf0.
$$

The coefficients are not all zero.

Therefore,

$$
\boxed{
\mathbf v_1,\mathbf v_2,\mathbf v_3
\text{ are linearly dependent}.
}
$$

The third vector is redundant.

---

## The big idea

Linear independence is ultimately about **whether vectors contain redundant information**.

If

$$
c_1\mathbf v_1+\cdots+c_k\mathbf v_k
=
\mathbf0
$$

has a nonzero solution, some combination of the vectors cancels out.

That tells us that at least one vector can be constructed from the others.

So the collection is **dependent**.

If the only way to produce zero is

$$
c_1=\cdots=c_k=0,
$$

then no vector is redundant.

The collection is **independent**.

So remember:

$$
\boxed{
\text{Independent}
\quad\Longleftrightarrow\quad
\text{no redundancy}
}
$$

and

$$
\boxed{
\text{Dependent}
\quad\Longleftrightarrow\quad
\text{some redundancy}
}
$$

---

## What comes next?

We now have three important ideas:

$$
\text{Linear combinations}
\rightarrow
\text{Span}
\rightarrow
\text{Linear independence}.
$$

We can now ask a much bigger question:

> **Can we find a collection of vectors that spans a space without containing any redundant vectors?**

Such a collection is called a **basis**.

A basis combines the two ideas we have just learned:

$$
\boxed{
\text{Basis}
=
\text{spanning}
+
\text{linear independence}
}
$$

This will lead naturally to the ideas of **basis, coordinates, and dimension**.
