import { AbstractControl, FormControl } from "@angular/forms";

export class customValidatin {
  static noSpaceAllowed(control: FormControl) {
    if (control.value != null && control.value.indexOf(' ') != -1) {
      return { noSpaceAllowed: true }
    }
    return null
  }

  static checkUsername(control:AbstractControl):Promise<any>{
    return usrerNameAllowd(control.value)
  }
}

function usrerNameAllowd(username: string) {
  let allusername = ['john', 'jaggutopi',]

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (allusername.includes(username)) {
        resolve({ checkUsername: true })
      }
      else {
        resolve(null);
      }
    }, 1000);
  })
}
