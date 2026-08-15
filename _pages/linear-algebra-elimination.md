---
title: "Elimination"

permalink: /linear-algebra/elimination/

layout: linear-algebra-lesson

lesson_number: 2

module: "Module 1 · Linear Equations"

description: "How elimination transforms a system of linear equations into a form that is easy to solve."
---

# Elimination

In the previous lesson, we looked at the **geometry of linear equations**.

Now we turn to one of the most important ideas in linear algebra:

> **Elimination.**

Elimination is the systematic process of simplifying a system of equations until the answers become easy to find.

It is the algorithm behind **Gaussian elimination**, one of the fundamental computational tools of linear algebra.


## 1. The basic problem

Suppose we want to solve

$$
\begin{aligned}
2x+y &= 5,\\
x-y &= 1.
\end{aligned}
$$

We have two equations and two unknowns.

Our goal is to find the values of $x$ and $y$ that satisfy **both equations simultaneously**.


### The geometric picture

Each equation represents a line.

The solution is the point where the two lines intersect.

So solving the equations means finding their intersection.

But instead of drawing the lines, we can solve the system algebraically.


## 2. Eliminate one variable

We have

$$
\begin{aligned}
2x+y &= 5,\\
x-y &= 1.
\end{aligned}
$$

Look at the coefficients of $y$:

$$
+1
\qquad\text{and}\qquad
-1.
$$

They are opposites.

That is useful because if we **add the two equations**, the $y$'s disappear.

$$
(2x+y)+(x-y)=5+1.
$$

Therefore,

$$
3x=6.
$$

So

$$
x=2.
$$

Now substitute $x=2$ into either original equation.

Using

$$
x-y=1,
$$

we get

$$
2-y=1.
$$

Therefore,

$$
y=1.
$$

So the solution is

$$
\boxed{(x,y)=(2,1)}.
$$


## 3. What did elimination actually do?

The important idea is not just that we found $x=2$ and $y=1$.

The important idea is **how we transformed the equations**.

We started with

$$
\begin{aligned}
2x+y &= 5,\\
x-y &= 1.
\end{aligned}
$$

and transformed them into

$$
\begin{aligned}
3x &= 6,\\
x-y &= 1.
\end{aligned}
$$

The second equation stayed unchanged.

The first equation became:

$$
\text{Row 1}+\text{Row 2}.
$$

This is the essence of elimination.


## 4. Elimination as a sequence of steps

Let's write the system as a matrix.

$$
\begin{bmatrix}
2 & 1\\
1 & -1
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

The matrix

$$
A=
\begin{bmatrix}
2 & 1\\
1 & -1
\end{bmatrix}
$$

contains the coefficients.

The vector

$$
\mathbf{x}
=
\begin{bmatrix}
x\\
y
\end{bmatrix}
$$

contains the unknowns.

And

$$
\mathbf{b}
=
\begin{bmatrix}
5\\
1
\end{bmatrix}
$$

contains the right-hand sides.

So the system is

$$
A\mathbf{x}=\mathbf{b}.
$$

Elimination changes the equations while preserving their solution.


## 5. Three legal row operations

There are three fundamental operations that we are allowed to perform on the equations.

### Operation 1: Exchange two equations

We can swap two rows.

For example,

$$
\begin{bmatrix}
1 & 2\\
3 & 4
\end{bmatrix}
\longrightarrow
\begin{bmatrix}
3 & 4\\
1 & 2
\end{bmatrix}.
$$

The order of the equations does not matter.


### Operation 2: Multiply an equation by a nonzero number

For example,

$$
x+2y=5
$$

can be multiplied by $3$:

$$
3x+6y=15.
$$

The equation represents exactly the same line.


### Operation 3: Add a multiple of one equation to another

For example,

$$
\begin{aligned}
x+2y &= 5,\\
3x+y &= 7.
\end{aligned}
$$

We can replace the second equation with

$$
\text{Equation 2}-3(\text{Equation 1}).
$$

Then

$$
3x+y-3(x+2y)=7-15.
$$

So

$$
-5y=-8.
$$

The $x$ has been eliminated.


## 6. A larger example

Consider

$$
\begin{aligned}
x+2y+z &= 8,\\
2x+5y+2z &= 19,\\
-x-y+z &= -2.
\end{aligned}
$$

Our first goal is to eliminate $x$ from the second and third equations.

Start with the augmented matrix:

$$
\left[
\begin{array}{ccc|c}
1&2&1&8\\
2&5&2&19\\
-1&-1&1&-2
\end{array}
\right].
$$


### Step 1: Eliminate $x$ from Row 2

Perform

$$
R_2\leftarrow R_2-2R_1.
$$

Then

$$
\left[
\begin{array}{ccc|c}
1&2&1&8\\
0&1&0&3\\
-1&-1&1&-2
\end{array}
\right].
$$


### Step 2: Eliminate $x$ from Row 3

Perform

$$
R_3\leftarrow R_3+R_1.
$$

We get

$$
\left[
\begin{array}{ccc|c}
1&2&1&8\\
0&1&0&3\\
0&1&2&6
\end{array}
\right].
$$


### Step 3: Eliminate $y$ from Row 3

Perform

$$
R_3\leftarrow R_3-R_2.
$$

Therefore,

$$
\left[
\begin{array}{ccc|c}
1&2&1&8\\
0&1&0&3\\
0&0&2&3
\end{array}
\right].
$$

Now the system has a very useful structure.

It is **upper triangular**.


## 7. Back substitution

The last equation is

$$
2z=3.
$$

Therefore,

$$
z=\frac32.
$$

The second equation is

$$
y=3.
$$

Finally, the first equation is

$$
x+2y+z=8.
$$

Substitute $y=3$ and $z=\frac32$:

$$
x+6+\frac32=8.
$$

Therefore,

$$
x=\frac12.
$$

So the solution is

$$
\boxed{
x=\frac12,\qquad
y=3,\qquad
z=\frac32
}.
$$


## 8. Why elimination works

There is a deeper reason elimination is so powerful.

When we replace one equation by a combination of the existing equations, we are not randomly changing the system.

We are replacing it with an **equivalent system**.

The solution set remains unchanged.

For example, if

$$
E_1=0
$$

and

$$
E_2=0,
$$

then replacing $E_2$ by

$$
E_2-3E_1=0
$$

does not change the solutions, provided $E_1=0$ is still part of the system.

This allows us to transform a complicated system into a much simpler one.


## 9. The triangular form

The real goal of elimination is not necessarily to get the identity matrix.

The first goal is usually to produce a triangular system:

$$
\begin{aligned}
a_{11}x_1+a_{12}x_2+a_{13}x_3 &= b_1,\\
\phantom{a_{11}x_1+{}}a_{22}x_2+a_{23}x_3 &= b_2,\\
\phantom{a_{11}x_1+a_{12}x_2+{}}a_{33}x_3 &= b_3.
\end{aligned}
$$

The last equation contains only $x_3$.

The second equation contains $x_2$ and $x_3$.

The first equation contains all three variables.

This makes the solution proceed naturally from the bottom upward.

That is **back substitution**.


## 10. What can go wrong?

Elimination also helps us understand why a system might have no solution or infinitely many solutions.

For example, suppose elimination produces

$$
0=5.
$$

That is impossible.

Therefore, the system has **no solution**.

On the other hand, suppose elimination produces

$$
0=0.
$$

That equation gives us no new information.

If there are fewer independent equations than unknowns, we may have **infinitely many solutions**.

So elimination does more than find answers.

It tells us about the **structure of the solution set**.


## 11. The big picture

We can summarize the process as:

<div style="width:100%; overflow-x:auto;">
$$
\text{Original system}
\longrightarrow
\text{Elimination}
\longrightarrow
\text{Triangular system}
\longrightarrow
\text{Back substitution}
$$
</div>

And in matrix notation:

$$
A\mathbf{x}=\mathbf{b}
\quad\longrightarrow\quad
U\mathbf{x}=\mathbf{c}.
$$

Here $U$ is an upper-triangular matrix.

This simple idea is one of the foundations of computational linear algebra.


## Key idea

<div class="key-idea">

<div class="key-idea-title">
The main idea
</div>

Elimination systematically combines equations to remove variables while preserving the solution set. The result is a simpler triangular system that can be solved by back substitution.

</div>


## Try it yourself

Solve the following system using elimination:

$$
\begin{aligned}
x+y+z &= 6,\\
2x+3y+z &= 11,\\
x+2y+3z &= 14.
\end{aligned}
$$

Try to perform the elimination yourself before looking for the answer.

<details>

<summary>Show solution</summary>

Start with

$$
\left[
\begin{array}{ccc|c}
1&1&1&6\\
2&3&1&11\\
1&2&3&14
\end{array}
\right].
$$

Perform

$$
R_2\leftarrow R_2-2R_1
$$

and

$$
R_3\leftarrow R_3-R_1.
$$

This gives

$$
\left[
\begin{array}{ccc|c}
1&1&1&6\\
0&1&-1&-1\\
0&1&2&8
\end{array}
\right].
$$

Now perform

$$
R_3\leftarrow R_3-R_2.
$$

We obtain

$$
\left[
\begin{array}{ccc|c}
1&1&1&6\\
0&1&-1&-1\\
0&0&3&9
\end{array}
\right].
$$

Therefore,

$$
z=3.
$$

Then

$$
y-z=-1
$$

gives

$$
y=2.
$$

Finally,

$$
x+y+z=6
$$

gives

$$
x=1.
$$

Therefore,

$$
\boxed{(x,y,z)=(1,2,3)}.
$$

</details>


## What's next?

In this lesson, we treated elimination as a procedure for simplifying equations.

But there is an even more interesting way to look at it.

**What if every elimination step could itself be represented by a matrix?**

That is the idea behind **elimination matrices**.

In the next lesson, we will see how elimination can be written entirely in matrix language.

$$
\boxed{\text{Elimination matrices}}
$$
