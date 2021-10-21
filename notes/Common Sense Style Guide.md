---
tags: [done]
---

# Common Sense Style Guide

```
prettier.use('recommended')
eslint.use('recommended')

while (true) {
    doSomeWork()

    if (team.isConcernedAbout(styleIssue)) {
        const solution = team.findSolution(styleIssue)

        if (isDetectableByFormatter(solution)) {
            prettier.addRule(solution)
        } else if (isDetectableByLinter(solution)) {
            eslint.addRule(solution)
        } else {
            wiki.addRule(solution)
            team.increaseAttentionOnCodeReview(styleIssue)
        }

        team.removeConcernAbout(styleIssue)
    }
}
```
