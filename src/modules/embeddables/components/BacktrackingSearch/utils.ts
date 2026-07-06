function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function range(end: number): number[];
export function range(start: number, end: number, step?: number): number[];
export function range(startOrEnd: number, end?: number, step = 1): number[] {
  let start: number;

  if (end === undefined) {
    start = 0;
    end = startOrEnd;
  } else {
    start = startOrEnd;
  }

  if (step === 0) {
    throw new Error('Step cannot be 0');
  }

  if (!Number.isFinite(start) || !Number.isFinite(end) || !Number.isFinite(step)) {
    throw new Error('Range arguments must be finite numbers');
  }

  const result: number[] = [];

  if (step > 0) {
    for (let i = start; i < end; i += step) {
      result.push(i);
    }
  } else {
    for (let i = start; i > end; i += step) {
      result.push(i);
    }
  }

  return result;
}

export class BS<V, D> {
  constraints: Map<any, any> = new Map<any, any>();

  constructor(
    public variables: any[],
    public domains: Map<any, any>,
  ) {
    for (const variable of variables) {
      this.constraints.set(variable, []);

      if (!this.domains.has(variable)) {
        throw new Error('Every variable should have a domain assigned to it');
      }
    }
  }

  addConstraint(constraint: Constraint) {
    for (const variable of constraint.variables) {
      if (!this.variables.includes(variable)) {
        throw new Error('Variable in constraint not in CSP');
      } else {
        this.constraints.get(variable).push(constraint);
      }
    }
  }

  isConsistent(variable: any, assignment: Map<any, any>) {
    for (let constraint of this.constraints.get(variable)) {
      if (!constraint.isSatisfied(assignment)) {
        return false;
      }
    }

    return true;
  }

  async execute(assignment: any, delay: number, callback?: any): Promise<boolean> {
    if (assignment.size === this.variables.length) {
      return assignment;
    }

    const unassigned = this.variables.filter((_) => !assignment.has(_));

    const first = unassigned[0];

    for (const value of this.domains.get(first)) {
      const localAssignment = new Map(assignment);

      localAssignment.set(first, value);

      if (delay) {
        await sleep(delay);
      }

      callback(localAssignment);

      if (this.isConsistent(first, localAssignment)) {
        const result = await this.execute(localAssignment, delay, callback);

        if (result) {
          return result;
        }
      }
    }

    return false;
  }
}

export abstract class Constraint {
  protected constructor(public variables: any[]) {}

  abstract isSatisfied(assignment: Map<any, any>): boolean;
}
