import { FormGroup} from '@angular/forms';

export function MustMatch(controlname:string, matchingcontrolname:string)
{ return (formgroup:FormGroup) =>
  {
    const control = formgroup.controls [controlname];
    const matchingcontrol = formgroup.controls [matchingcontrolname];

    if (matchingcontrol.errors && !matchingcontrol.errors.mustmatch)
      //  return if any other validator already got any error
    {
      return;
    }
    // set error on matching error if validation fails
    if (control.value !== matchingcontrol.value){
      matchingcontrol.setErrors({mustMatch:true});
    }
    else {
      matchingcontrol.setErrors(null);
    }
  }
}
