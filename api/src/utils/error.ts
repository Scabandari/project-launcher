export class ErrorBase extends Error {
  status: number;
  property: string;
  values: any;
  showToUser: boolean | undefined;
  message: string;

  constructor(
    status: number,
    property: string,
    values: any,
    message: string,
    showToUser: boolean | undefined
  ) {
    super(message);
    this.name = this.constructor.name;
    this.status = status;
    this.property = property;
    this.values = values;
    this.showToUser = showToUser;
    this.message = message;

    Error.captureStackTrace(this);
  }
}

export class ErrorBadRequest extends ErrorBase {
  constructor(property: string, values: any, message: string) {
    super(400, property, values, `BAD REQUEST: ${message}`, true);
  }
}

export class ErrorUnauthorized extends ErrorBase {
  constructor(property: string, values: any, message: string) {
    super(401, property, values, `UNAUTHORIZED: ${message}`, true);
  }
}

export class ErrorForbidden extends ErrorBase {
  constructor(property: string, values: any, message: string) {
    super(403, property, values, `FORBIDDEN: ${message}`, true);
  }
}

export class ErrorNotFound extends ErrorBase {
  constructor(property: string, values: any, message: string) {
    super(404, property, values, `NOT FOUND: ${message}`, true);
  }
}

export class ErrorConflict extends ErrorBase {
  constructor(property: string, values: any, message: string) {
    super(409, property, values, `CONFLICT: ${message}`, true);
  }
}
