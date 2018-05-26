export enum TypeStatus {
  DEFAULT = '',
  FAILED = ' Failed',
  SUCCESS = ' Success',
}

export class EntityTypeGen {
  constructor(private entityName: string) {}

  public get(typeName: string, status: TypeStatus = TypeStatus.DEFAULT): string {
    return `[${this.entityName.toUpperCase()}] ${typeName}${status}`;
  }
}
