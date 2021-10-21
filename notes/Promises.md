# Promises

Functions are synchronous

Promise is a container for the final result that eventually will be delivered.
It has methods `then()` and `catch()`. They both return promises as well
It has following state transitions:

$$
\BA
	Pending & \xrightarrow{Fulfil} Fulfilled \ (Settled) \\
	Pending & \xrightarrow{Reject} Rejected \ (Settled)
\EA
$$

- `resolve()` could return a rejected Promise if its parameter is a rejected Promise.
- The settled value of a promise is cached
- The only difference between `then()` and `catch()` is that the latter is triggered by rejections, not fulfilments

### Async functions

Just as Promises, they start synchronously, settle asynchronously
