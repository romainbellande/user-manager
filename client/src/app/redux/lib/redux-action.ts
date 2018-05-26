enum TypeStatus {
  DEFAULT = '',
  FAILED = ' Failed',
  SUCCESS = ' Success',
}

export class ReduxAction {
  constructor(private reducerName: string, private actionName: string) {}

  public default(): string {
    return this.get();
  }

  public failed(): string {
    return this.get(TypeStatus.FAILED);
  }

  public success(): string {
    return this.get(TypeStatus.SUCCESS);
  }

  private get(status: TypeStatus = TypeStatus.DEFAULT): string {
    return `[${this.reducerName.toUpperCase()}] ${this.actionName}${status}`;
  }
}
