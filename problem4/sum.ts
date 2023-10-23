function sum_to_n_a_solution1(n: number): number {
  let sum = 0;
  for(let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

/*
  + Solution1
	Complexity:
		Use a for loop to calculate the sum of numbers from 1 to n.
		Each iteration will perform addition.
		The number of iterations is n times.
		Therefore, the complexity of the algorithm is O(n)

	Effective:
		Use a simple loop to perform summation, the source code is concise and easy to read.
		Each iteration only performs a simple addition operation.
		No need for complicated operations on arrays or objects.
		High performance. Suitable for simple math problems.
*/

function sum_to_n_a_solution2(n: number): number {
  if(n === 1) return 1;
  return n + sum_to_n_a_solution2(n-1);
}

/*
	+ Solution2
	Complexity:
		Use recursion to calculate the sum of numbers from 1 to n.
		The recursive function will be called n times, each time decreasing the background n-1.
		The total number of addition operations is n + (n-1) + ... + 1 = n(n+1)/2
		Therefore the complexity is O(n^2), more complicated than the loop function.

	Effective:
		Use recursion to solve problems, concise source code.
		However, recursion will create more stack frames than loops, consuming memory.
		Each call must make opening and closing turns, slower than the loop.
		Not suitable for problems that require multiple calculations.
*/


function sum_to_n_a_solution3(n: number): number {
  return n * (n + 1) / 2;
}

/*
	+ Solution3
	Complexity:
		Use mathematical formulas to directly calculate the sum of numbers from 1 to n.
		There are only 3 basic operations: multiplication, addition and division.
		Linear complexity O(1), independent of n.

	Effective:
		Solve problems thoroughly using mathematical formulas.
		Avoid loops or recursion, optimize runtime.
		Source code is concise and easy to understand.
		Highest performance compared to the above functions.
*/

