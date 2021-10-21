

# React architecture

$$
	UI = Component(Data)
$$

## [[Component, Instance & Element]]

## Reconciliation
Reconciliation is a process of finding the diff between old node tree and new node tree

$$
\text{Reconcile}: Tree_{old}, Tree_{new} \to Diff
$$

### Older algorithm

### Fibers
Fibers are part of the reconciliation algorithm. Single fiber is a unit of work 
They provide a way to schedule, pause and abort the work

## Rendering
$$
	\text{Render}(diff): VDOM \to DOM
$$
