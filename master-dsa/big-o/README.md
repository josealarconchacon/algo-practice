# Big O Notation

## Goal
Understand how an increasing number of elements affect an algorithm's runtime.

## 5 Rules
1. **Analyze the worst-case performance of the algorithm, i.e., Big O**
2. **Add steps in order (+); multiply nested steps (*)**
3. **Different inputs should have different variables, e.g., O(a + b)**
4. **Remove constants**
5. **Drop non-dominant terms**

## 3 Types of Time Complexity

### 1. Big O – Worst Case

#### Ideal
- **O(1)** – Constant time complexity
- **O(log n)** – Logarithmic time complexity
- **O(n)** – Linear time complexity

#### Acceptable
- **O(n * log n)** – Log Linear time complexity

#### Avoid
- **O(n^2)** – Quadratic time complexity
- **O(2^n)** – Exponential time complexity
- **O(n!)** – Factorial time complexity
