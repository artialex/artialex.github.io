---
tags: [probability]
---

# Probability

Probability is always between 0 and 1 (or 0% and 100%)


$$
P(A) =  \frac{n(A)}{n(S)}
$$

- $P(A)$ - Probability of an event $A$
- $n(A)$ - Number of ways it can happen
- $n(S)$ - Number of all possible outcomes in the sample space


### Examples
- Rolling a _d6_ dice has a probability of $1/6 \approx 17\%$ to roll **6**
- Rolling a _d20_ dice has these probabilities:
	- Chance to critical hit (19-20): 
		- $2/20 = 10\%$
	- Chance to critical miss: 
		- $1/20 = 5\%$
	- Chance to roll 10+: 
		- $10/20 = 0.5 = 50\%$


## Independent events

Probability of independent events is the _product_ of their probabilities

- Throwing two _d6_ dices:
	- Chance of two six-es (same as a chance to get any specific combination): 
		- $1/6 \times 1/6 = 1/36 \approx 2.8\%$
	- Chance of rolling two highest values (5-6): 
		- $2/6 \times 2/6 = 1/9 \approx 11\%$
	- Chance of two same values:
		- $1 \ (\text{Any number}) \times 1/6 \ (\text{Same number chance}) \approx 33\%$
		- $1/36 \ (\text{Any combination chance}) \times 6 \approx 33\%$
- Throwing a coin 10 times:
	- Chance to throw 10 heads:
		- $\underbrace{1/2 \times 1/2 \times 1/2 \times \ldots \times 1/2}_{\text{10 times}} = 1/2^{10} \approx 0.097\%$


Deck of cards


### 3 microservices

- Their cumulative uptime:
	- $99\% \times 99\% \times 99\% \approx 97\%$


## Dependent events
Probability of dependent events is the _sum_ of their probabilities
- Throwing two _d6_ dices:
	

## Mutually exclusive events
- Throwing a coin 10 times:
	- Chance to get at least one head:
		- $100\% - 0.097\% \approx 99.003\%$



[[Poker probability]]