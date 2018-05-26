export class Validators {
  public static email(value: string) {
    return value && value.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
  }

  public static wordLength(value: string, minLength = 0, maxLength?: number) {
    return value && value.length > minLength && maxLength ? value.length < maxLength : true;
  }

  public static password(value: string) {
    // return value && value.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);
    return value && value.match(/^.{8,}$/);
  }

  public static username(value: string) {
    return value && value.match(/[a-zA-Z]+/);
  }
}
