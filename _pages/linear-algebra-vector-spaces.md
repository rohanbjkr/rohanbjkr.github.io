---
layout: linear-algebra-lesson
title: "Vector Spaces"
lesson_number: 12
module: "Module 3 · Vector Spaces"
description: "From familiar vectors in Rⁿ to the general idea of a vector space."
permalink: /linear-algebra/vector-spaces/
---

## Why do we need vector spaces?

So far, we have mostly worked with vectors in

$$
\mathbb R^n.
$$

For example,

$$
\mathbf v=
\begin{bmatrix}
2\\
1
\end{bmatrix}
$$

is a vector in $\mathbb R^2$.

We learned how to:

- add vectors,
- multiply vectors by scalars,
- form linear combinations,
- find spans,
- and determine whether vectors are linearly independent.

Everything seemed to work naturally.

But here is an important question:

> Do vectors have to be lists of numbers?

The answer is **no**.

The same ideas can apply to many other mathematical objects.

For example:

- polynomials,
- functions,
- matrices,
- sequences,
- and ordinary vectors.

What matters is not what the objects look like.

What matters is whether they obey the same basic rules.

That leads us to the idea of a **vector space**.

---

## 1. Start with what we already know

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
3\\
1
\end{bmatrix}.
$$

We can add them:

$$
\mathbf u+\mathbf v
=
\begin{bmatrix}
4\\
3
\end{bmatrix}.
$$

We can also multiply by a number.

For example,

$$
2\mathbf u
=
\begin{bmatrix}
2\\
4
\end{bmatrix}.
$$

And therefore we can form combinations such as

$$
a\mathbf u+b\mathbf v.
$$

These operations obey familiar rules.

For example,

$$
\mathbf u+\mathbf v
=
\mathbf v+\mathbf u.
$$

And

$$
a(\mathbf u+\mathbf v)
=
a\mathbf u+a\mathbf v.
$$

These rules are more important than the fact that our vectors happen to be columns of numbers.

---

## 2. What if our "vectors" were polynomials?

Consider the polynomial

$$
p(x)=x+1.
$$

And another polynomial

$$
q(x)=2x-3.
$$

Can we add them?

Yes.

$$
p(x)+q(x)
=
(x+1)+(2x-3).
$$

Therefore,

$$
p(x)+q(x)
=
3x-2.
$$

Can we multiply a polynomial by a scalar?

Yes.

For example,

$$
2p(x)=2x+2.
$$

So we can perform the same two basic operations:

### Addition

$$
p+q
$$

### Scalar multiplication

$$
cp.
$$

This begins to look very similar to ordinary vectors.

---

## 3. Polynomials behave like vectors

Consider all polynomials of degree at most 2:

$$
P_2
=
\{a+bx+cx^2:a,b,c\in\mathbb R\}.
$$

An element of $P_2$ might be

$$
p(x)=2+3x-x^2.
$$

Another might be

$$
q(x)=1-x+4x^2.
$$

We can add them:

$$
p(x)+q(x)
=
3+2x+3x^2.
$$

We can multiply by a scalar:

$$
2p(x)
=
4+6x-2x^2.
$$

So $P_2$ behaves very much like a familiar vector space.

In fact, we can write

$$
p(x)=2+3x-x^2
$$

as

$$
p(x)
=
2(1)+3(x)-1(x^2).
$$

This looks exactly like a linear combination.

The "vectors" are now

$$
1,\qquad x,\qquad x^2.
$$

---

## 4. A surprising example: functions

Now consider functions.

Let

$$
f(x)=x
$$

and

$$
g(x)=x^2.
$$

We can add them:

$$
(f+g)(x)
=
f(x)+g(x)
=
x+x^2.
$$

We can multiply a function by a scalar:

$$
3f(x)=3x.
$$

We can therefore form

$$
af+bg.
$$

For example,

$$
2f-3g
$$

is the function

$$
2x-3x^2.
$$

So functions can also behave like vectors.

This is one of the most important ideas in this chapter:

> A vector does not have to be an arrow or a column of numbers.

A vector can be a function.

---

## 5. Even matrices can be vectors

Consider the set of all $2\times2$ matrices.

For example,

$$
A=
\begin{bmatrix}
1&2\\
3&4
\end{bmatrix}
$$

and

$$
B=
\begin{bmatrix}
2&0\\
1&5
\end{bmatrix}.
$$

We can add them:

$$
A+B
=
\begin{bmatrix}
3&2\\
4&9
\end{bmatrix}.
$$

We can multiply a matrix by a scalar:

$$
2A
=
\begin{bmatrix}
2&4\\
6&8
\end{bmatrix}.
$$

So matrices can also play the role of vectors.

This may seem strange at first.

But the important point is:

> We care about the operations, not the appearance of the object.

---

## 6. The common structure

Let's compare what we have seen.

### Ordinary vectors

$$
\begin{bmatrix}
x\\
y
\end{bmatrix}
$$

### Polynomials

$$
a+bx+cx^2
$$

### Functions

$$
f(x)
$$

### Matrices

$$
\begin{bmatrix}
a&b\\
c&d
\end{bmatrix}
$$

They look completely different.

But we can perform two fundamental operations on all of them:

$$
{\text{addition}}
$$

and

$$
{\text{scalar multiplication}}.
$$

And these operations obey the same basic rules.

That common structure is what we call a **vector space**.

---

## 7. The definition

A **vector space** is a collection of objects in which we can:

1. add two objects,
2. multiply an object by a scalar,

and these operations satisfy the standard rules of vector arithmetic.

The objects in the vector space are called **vectors**.

The scalars are usually real numbers.

So we can think of a vector space as:

$$
{
\text{a collection of vectors with well-behaved addition and scaling}
}
$$

The vectors do not have to look like

$$
\begin{bmatrix}
x\\
y
\end{bmatrix}.
$$

They can be polynomials, functions, matrices, or other objects.

---

## 8. Why the rules matter

Why do we need rules?

Because without them, the familiar ideas of linear algebra could break down.

For example, we expect

$$
\mathbf u+\mathbf v
=
\mathbf v+\mathbf u.
$$

We also expect

$$
a(\mathbf u+\mathbf v)
=
a\mathbf u+a\mathbf v.
$$

And

$$
(a+b)\mathbf u
=
a\mathbf u+b\mathbf u.
$$

These rules allow us to manipulate linear combinations consistently.

They are the reason the theory of linear algebra works.

---

## 9. The zero vector

Every vector space must contain a special object called the **zero vector**.

It is the object that behaves like zero under addition.

For ordinary vectors,

$$
\mathbf0=
\begin{bmatrix}
0\\
0
\end{bmatrix}.
$$

For polynomials, the zero vector is the zero polynomial:

$$
p(x)=0.
$$

For matrices, it is the zero matrix:

$$
\begin{bmatrix}
0&0\\
0&0
\end{bmatrix}.
$$

For functions, it is the function

$$
f(x)=0
$$

for every $x$.

So the zero vector does not always look the same.

But it always plays the same role:

$$
\mathbf v+\mathbf0=\mathbf v.
$$

---

## 10. Additive inverses

Every vector must also have an additive inverse.

For an ordinary vector,

$$
\mathbf v=
\begin{bmatrix}
2\\
3
\end{bmatrix},
$$

the opposite vector is

$$
-\mathbf v=
\begin{bmatrix}
-2\\
-3
\end{bmatrix}.
$$

Then

$$
\mathbf v+(-\mathbf v)
=
\mathbf0.
$$

For a polynomial,

$$
p(x)=x^2+2x+1,
$$

the additive inverse is

$$
-p(x)=-x^2-2x-1.
$$

Again,

$$
p(x)+[-p(x)]=0.
$$

The same idea works for matrices and functions.

---

## 11. Closure: staying inside the space

There is another important idea.

Suppose we have a vector space $V$.

If

$$
\mathbf u,\mathbf v\in V,
$$

then their sum must also belong to $V$:

$$
\mathbf u+\mathbf v\in V.
$$

Similarly, if

$$
\mathbf u\in V
$$

and $c$ is a scalar, then

$$
c\mathbf u\in V.
$$

We call this **closure**.

In simple language:

> If you start inside the vector space and perform the allowed operations, you stay inside the vector space.

---

## 12. An example of closure

Consider the set

$$
V=
\left\{
\begin{bmatrix}
x\\
y
\end{bmatrix}
:x,y\in\mathbb R
\right\}.
$$

This is simply $\mathbb R^2$.

Take

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
3\\
4
\end{bmatrix}.
$$

Then

$$
\mathbf u+\mathbf v
=
\begin{bmatrix}
4\\
6
\end{bmatrix}.
$$

This is still in $V$.

Similarly,

$$
5\mathbf u
=
\begin{bmatrix}
5\\
10
\end{bmatrix}
$$

is still in $V$.

So $V$ is closed under addition and scalar multiplication.

---

## 13. A set that is not a vector space

Consider the set

$$
S=
\left\{
\begin{bmatrix}
x\\
y
\end{bmatrix}
:x>0
\right\}.
$$

This contains vectors whose first component is positive.

For example,

$$
\begin{bmatrix}
2\\
3
\end{bmatrix}
\in S.
$$

But consider multiplying by $-1$:

$$
-1
\begin{bmatrix}
2\\
3
\end{bmatrix}
=
\begin{bmatrix}
-2\\
-3
\end{bmatrix}.
$$

This vector is not in $S$ because its first component is negative.

So $S$ is not closed under scalar multiplication.

Therefore,

$$
{S\text{ is not a vector space}.}
$$

---

## 14. A very important example: a line through the origin

Consider the set

$$
V=
\left\{
\begin{bmatrix}
x\\
2x
\end{bmatrix}
:x\in\mathbb R
\right\}.
$$

This is the line

$$
y=2x.
$$

Is it a vector space?

Take two vectors in $V$:

$$
\mathbf u=
\begin{bmatrix}
a\\
2a
\end{bmatrix},
\qquad
\mathbf v=
\begin{bmatrix}
b\\
2b
\end{bmatrix}.
$$

Add them:

$$
\mathbf u+\mathbf v
=
\begin{bmatrix}
a+b\\
2a+2b
\end{bmatrix}.
$$

Factor the second component:

$$
\mathbf u+\mathbf v
=
\begin{bmatrix}
a+b\\
2(a+b)
\end{bmatrix}.
$$

This still has the required form.

So it remains on the line.

Now multiply by a scalar $c$:

$$
c\mathbf u
=
\begin{bmatrix}
ca\\
2ca
\end{bmatrix}.
$$

Again, it remains on the line.

Therefore the line through the origin is a vector space.

This is a very important geometric fact:

> **A line through the origin is a vector space.**

---

## 15. What about a line not through the origin?

Consider

$$
y=2x+1.
$$

This line does not pass through the origin.

It might look almost identical to the previous example.

But it is **not** a vector space under the usual vector addition and scalar multiplication.

Why?

Because the zero vector

$$
\begin{bmatrix}
0\\
0
\end{bmatrix}
$$

would have to belong to the vector space.

But $(0,0)$ does not satisfy

$$
y=2x+1.
$$

Indeed,

$$
0\neq1.
$$

Therefore the set cannot be a vector space.

This gives us an extremely useful geometric rule:

$$
{
\text{A subspace of }\mathbb R^2
\text{ must pass through the origin.}
}
$$

---

## 16. Vector spaces and subspaces

We have just encountered an important word:

**subspace**.

A subspace is a smaller vector space sitting inside a larger vector space.

For example,

$$
\mathbb R^2
$$

is a vector space.

The line

$$
y=2x
$$

is also a vector space.

And the line is contained inside $\mathbb R^2$.

Therefore it is a **subspace of $\mathbb R^2$**.

We can picture the relationship as

$$
\text{line}
\subset
\mathbb R^2.
$$

---

## 17. Connection with span

There is a beautiful connection with the previous chapter.

Consider

$$
\mathbf v=
\begin{bmatrix}
1\\
2
\end{bmatrix}.
$$

Its span is

$$
\operatorname{span}\{\mathbf v\}
=
\left\{
c
\begin{bmatrix}
1\\
2
\end{bmatrix}
:c\in\mathbb R
\right\}.
$$

This is exactly the line

$$
y=2x.
$$

And we just showed that this line is a vector space.

Therefore:

> The span of any collection of vectors is a vector space.

This is one of the most important connections in the chapter.

---

## 18. Why is the span a vector space?

Suppose

$$
V=
\operatorname{span}
\{\mathbf v_1,\ldots,\mathbf v_k\}.
$$

Every vector in $V$ has the form

$$
c_1\mathbf v_1+
\cdots+
c_k\mathbf v_k.
$$

Take two vectors in $V$:

$$
\mathbf u=
c_1\mathbf v_1+\cdots+c_k\mathbf v_k
$$

and

$$
\mathbf w=
d_1\mathbf v_1+\cdots+d_k\mathbf v_k.
$$

Add them:

<div class="math-scroll">

$$
\mathbf u+\mathbf w
=
(c_1+d_1)\mathbf v_1+
\cdots+
(c_k+d_k)\mathbf v_k.
$$

</div>

This is still a linear combination of the original vectors.

So it is still in the span.

Likewise, multiplying $\mathbf u$ by a scalar $a$ gives

<div class="math-scroll">

$$
a\mathbf u
=
(ac_1)\mathbf v_1+
\cdots+
(ac_k)\mathbf v_k,
$$

</div>

which is also in the span.

Therefore the span is closed under addition and scalar multiplication.

---

## 19. Vector spaces can have different dimensions

Now we can start to see something deeper.

A line through the origin needs one independent direction.

For example,

$$
\mathbf v=
\begin{bmatrix}
1\\
2
\end{bmatrix}.
$$

Its span is a one-dimensional vector space.

The entire plane $\mathbb R^2$ needs two independent directions.

For example,

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
\end{bmatrix}.
$$

And $\mathbb R^3$ needs three independent directions.

This leads naturally to the idea of **dimension**.

---

## 20. The same idea works for polynomials

Consider

$$
P_2
=
\{a+bx+cx^2:a,b,c\in\mathbb R\}.
$$

Every polynomial in $P_2$ can be written as

$$
a(1)+b(x)+c(x^2).
$$

Therefore,

$$
P_2
=
\operatorname{span}
\{1,x,x^2\}.
$$

The three polynomials

$$
1,\qquad x,\qquad x^2
$$

are linearly independent.

So $P_2$ has three independent directions.

This means its dimension is

$$
{3}.
$$

Notice how strange this initially seems:

> A space of polynomials has dimension 3.

But it makes perfect sense from our vector-space perspective.

The dimension counts the number of independent directions.

---

## 21. Functions can also form vector spaces

Consider the set of all real-valued functions.

Take two functions

$$
f(x)
$$

and

$$
g(x).
$$

Their sum is another function:

$$
(f+g)(x)
=
f(x)+g(x).
$$

And for a scalar $c$,

$$
(cf)(x)
=
cf(x).
$$

So functions can form vector spaces.

For example, consider

$$
V=
\operatorname{span}\{1,x,x^2\}.
$$

This consists of all functions of the form

$$
a+bx+cx^2.
$$

We have already seen this space as $P_2$.

The same mathematical structure can therefore be viewed as:

- polynomials,
- functions,
- or linear combinations of $1,x,x^2$.

The viewpoint changes, but the linear algebra remains the same.

---

## 22. Why this abstraction is useful

At first, vector spaces may seem unnecessarily abstract.

Why not just work with vectors in $\mathbb R^n$?

Because once we understand the underlying structure, the same linear algebra can be applied to many different problems.

The same ideas of:

- span,
- independence,
- basis,
- dimension,
- linear transformations,
- and matrices

can be applied to vectors, polynomials, functions, matrices, and many other objects.

We learn the theory once.

Then we can use it in many settings.

---

## 23. A practical way to recognize a vector space

When you encounter a new collection of objects, ask:

### Question 1

Can I add two objects from the collection?

### Question 2

Does the result stay in the collection?

### Question 3

Can I multiply an object by any real number?

### Question 4

Does the result stay in the collection?

### Question 5

Does the collection contain a zero vector?

### Question 6

Does every vector have an additive inverse?

If these operations obey the usual vector rules, we have a vector space.

For many practical problems, especially when working inside $\mathbb R^n$, checking closure and the zero vector gives us a quick way to detect whether a set is a subspace.

---

## 24. A useful comparison

Let's compare three sets in $\mathbb R^2$.

### The entire plane

$$
\mathbb R^2
$$

is a vector space.

### A line through the origin

$$
y=2x
$$

is a vector space and a subspace of $\mathbb R^2$.

### A line not through the origin

$$
y=2x+1
$$

is not a vector space under the usual operations.

The difference is subtle geometrically, but fundamental algebraically.

The first two contain the zero vector.

The third does not.

---

## Try It Yourself

Consider the following sets.

### Question 1

Is

$$
V=
\left\{
\begin{bmatrix}
x\\
2x
\end{bmatrix}
:x\in\mathbb R
\right\}
$$

a vector space?

### Question 2

Is

$$
W=
\left\{
\begin{bmatrix}
x\\
2x+1
\end{bmatrix}
:x\in\mathbb R
\right\}
$$

a vector space?

### Question 3

Consider

$$
P_1=
\{a+bx:a,b\in\mathbb R\}.
$$

Can every element of $P_1$ be written as a linear combination of $1$ and $x$?

### Question 4

What is the dimension of $P_1$?

### Question 5

Consider

$$
V=
\operatorname{span}
\left\{
\begin{bmatrix}
1\\
0
\end{bmatrix},
\begin{bmatrix}
0\\
1
\end{bmatrix}
\right\}.
$$

What vector space is $V$?

---

## Answers

### Answer 1

Yes.

The set is the line

$$
y=2x,
$$

which passes through the origin.

It is closed under addition and scalar multiplication.

Therefore,

$$
{V\text{ is a vector space}.}
$$

---

### Answer 2

No.

The line is

$$
y=2x+1.
$$

It does not contain the zero vector.

Therefore it cannot be a vector space under the usual vector operations.

$$
{W\text{ is not a vector space}.}
$$

---

### Answer 3

Yes.

Every element has the form

$$
a+bx.
$$

Therefore,

$$
a+bx
=
a(1)+b(x).
$$

Hence,

$$
P_1=
\operatorname{span}\{1,x\}.
$$

---

### Answer 4

The vectors

$$
1,\qquad x
$$

are linearly independent.

Therefore,

$$
{\dim(P_1)=2}.
$$

---

### Answer 5

Every vector in the span has the form

$$
a
\begin{bmatrix}
1\\
0
\end{bmatrix}
+
b
\begin{bmatrix}
0\\
1
\end{bmatrix}
=
\begin{bmatrix}
a\\
b
\end{bmatrix}.
$$

Since $a$ and $b$ can be any real numbers,

$$
V=\mathbb R^2.
$$

Therefore,

$$
{V=\mathbb R^2}.
$$

---

## The big picture

We started with ordinary vectors:

$$
\mathbb R^n.
$$

Then we discovered that the same ideas work for many other objects.

The important structure is:

$$
{
\text{addition}
+
\text{scalar multiplication}
}
$$

A collection with the appropriate rules is a **vector space**.

Inside a vector space, we can study:

$$
\text{linear combinations}
$$

then

$$
\text{span}
$$

then

$$
\text{linear independence}.
$$

And now we can combine the last two ideas.

A collection that:

1. spans the space, and
2. is linearly independent

is called a **basis**.

So our path is becoming:

$$
{
\text{Vectors}
\rightarrow
\text{Linear combinations}
\rightarrow
\text{Span}
\rightarrow
\text{Linear independence}
\rightarrow
\text{Vector spaces}
\rightarrow
\text{Basis}
}
$$

---

## What comes next?

We now have the language needed to answer a deeper question:

> How can we describe an entire vector space using the smallest possible collection of vectors?

We already have the ingredients.

We want vectors that:

- generate the whole space,
- but contain no redundancy.

That is exactly the idea of a **basis**.

In the next chapter, we will bring together **span and linear independence** to understand basis and dimension.
