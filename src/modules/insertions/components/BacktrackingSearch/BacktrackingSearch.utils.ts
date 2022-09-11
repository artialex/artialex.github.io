import { sleep } from '@/utils.lang/promise'

export class BS<V, D> {
  constraints: Map<any, any> = new Map<any, any>()

  constructor(public variables: any[], public domains: Map<any, any>) {
    for (let variable of variables) {
      this.constraints.set(variable, [])

      if (!this.domains.has(variable)) {
        throw new Error('Every variable should have a domain assigned to it')
      }
    }
  }

  addConstraint(constraint: Constraint) {
    for (let variable of constraint.variables) {
      if (!this.variables.includes(variable)) {
        throw new Error('Variable in constraint not in CSP')
      } else {
        this.constraints.get(variable).push(constraint)
      }
    }
  }

  isConsistent(variable: any, assignment: Map<any, any>) {
    for (let constraint of this.constraints.get(variable)) {
      if (!constraint.isSatisfied(assignment)) {
        return false
      }
    }

    return true
  }

  async execute(assignment: any, delay: number, callback?: any): Promise<boolean> {
    if (assignment.size === this.variables.length) {
      return assignment
    }

    let unassigned = this.variables.filter((_) => !assignment.has(_))

    let first = unassigned[0]

    for (let value of this.domains.get(first)) {
      let localAssignment = new Map(assignment)

      localAssignment.set(first, value)

      if (delay) {
        await sleep(delay)
      }

      callback(localAssignment)

      if (this.isConsistent(first, localAssignment)) {
        let result = await this.execute(localAssignment, delay, callback)

        if (result) {
          return result
        }
      }
    }

    return false
  }
}

export abstract class Constraint {
  protected constructor(public variables: any[]) {}

  abstract isSatisfied(assignment: Map<any, any>): boolean
}
