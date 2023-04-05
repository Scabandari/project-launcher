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
    super(400, property, values, message, true);
  }
}
