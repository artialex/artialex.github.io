---
tags: [done]
---

# Combinatorics Tasks

- Hanoi towers
- Chess horse going through chess board
- 8 queens

## How many 3-digit numbers contain digit "7" exactly once?

3-digit number is ABC, then:

ABC where A is 7 and B is 0-9 and C is 0-9 = $1 * 9 * 9 = 81$

ABC where B is 7 and A is 1-9 and C is 0-9 = $8 * 1 * 9 = 72$

ABC where C is 7 and A is 1-9 and B is 0-9 = $8 * 1 * 9 = 72$

Total is $81 + 72 + 72 = 225$

## In how many ways it is possible to place chess pieces, white rook and black king, where rook attacks king but king does not attack rook?

$$
	4 * 12 + 24 * 11 + 36 * 10 = 672
$$
