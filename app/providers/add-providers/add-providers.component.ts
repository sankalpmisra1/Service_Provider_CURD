import { Component } from '@angular/core';
import { ProviderClass } from '../../models/providers.class';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProviderService } from '../../services/provider.service';
// import { providers } from '../../models/providers.data';

@Component({
  selector: 'app-add-providers',
  templateUrl: './add-providers.component.html',
  styles: ``
})
export class AddProvidersComponent {
  submitted = false;
  providers!: ProviderClass[];
  provider = new ProviderClass();
  providersForm!: FormGroup;
  emailError= false;
  emailErrorMsg="Invalid email. Try again or contact us.";
  constructor(private providerService: ProviderService) { }


  ngOnInit(): void {
    // this.providersForm = new FormGroup({
    //   firstname: new FormControl('Christian',[Validators.required,Validators.minLength(2)]),
    //   lastname: new FormControl(),
    //   position: new FormControl(),
    //   email: new FormControl('',[Validators.required,Validators.email]),
    //   phone: new FormControl('',[Validators.required,Validators.pattern('^[2-9]{3}-[0-9]{3}-[0-9]{4}$')]),
    //   company_name: new FormControl(),
    //   address: new FormControl(),
    //   address2: new FormControl(),
    //   city: new FormControl(),
    //   state: new FormControl(),
    //   postal_code: new FormControl(),
    //   description: new FormControl(),
    //   tagline: new FormControl(),
    // });
    this.buildFormControls();
    this.loadData();
  }

  //Method to easy access form controls
  get f() {
    return this.providersForm.controls;
  }

  handleSubmit() {
    console.log(this.providersForm.value);
    // let newId: number;
    // while (true) {
    //   newId = Math.floor(Math.random() * 10000) + 99999;
    //   if (providers.findIndex(el => el.id == newId) == -1) {
    //     break;
    //   }
    // }
    // let p = this.providersForm.value;
    // this.provider.id = this.gerNewid();
    // this.provider.firstname = p.firstname;
    // this.provider.lastname = p.lastname;
    // this.provider.position = p.position;
    // this.provider.company = {
    //   company_name: p.company_name,
    //   address: p.company_name,
    //   address2: p.company_name,
    //   city: p.company_name,
    //   state: p.company_name,
    //   postal_code: p.company_name,
    //   phone: p.company_name,
    //   email: p.company_name,
    //   description: p.company_name,
    //   tagline: p.company_name,
    // };
    this.buildProvider();
    if(!this.isInValidEmail()){
      this.providerService.addProviders(this.provider)
        .subscribe(
          data=>{
            this.submitted = true;
            this.emailError=false;
          },
          error => {console.log(error) 
          },
        )
    }
    // providers.push(this.provider);
    // this.submitted = true;
  }
//Get all record from data base
  loadData(){
    this.providerService.getProviders().subscribe(
      (data) => {
        this.providers = data;
  
        // Logging the entire first provider object
        if (this.providers.length > 0) {
          console.log('First provider:', this.providers[0]);
        } else {
          console.log('No providers found.');
        }
      },
      (error) => {
        console.error('Error fetching providers:', error);
      }
    );
  }

  //Check for duplicate email
  isInValidEmail(){
    let email = this.providersForm.get('email')?.value;
    if(this.providers.filter(el => el.company.email == email).length > 0){
      this.emailError = true;
      return true;
    }
    return false;
  }

//Generate New id
getNewid(){
  let newId: number;
    while (true) {
      newId = Math.floor(Math.random() * 10000) + 99999;
      if (this.providers.findIndex(el => el.id == newId) == -1) {
        return newId;
      }
    }
}

//Build new ProviderS Object
buildProvider(){
  let p = this.providersForm.value;
  this.provider.id = this.getNewid();
  this.provider.firstname = p.firstname;
  this.provider.lastname = p.lastname;
  this.provider.position = p.position;
  this.provider.company = {
    company_name: p.company_name,
    address: p.company_name,
    address2: p.company_name,
    city: p.company_name,
    state: p.company_name,
    postal_code: p.company_name,
    phone: p.company_name,
    email: p.company_name,
    description: p.company_name,
    tagline: p.company_name,
  };
}


  //Build Form controls
  buildFormControls() {
    this.providersForm = new FormGroup({
      firstname: new FormControl('Christian', [Validators.required, Validators.minLength(2)]),
      lastname: new FormControl(),
      position: new FormControl(),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^[2-9]{3}-[0-9]{3}-[0-9]{4}$')]),
      company_name: new FormControl(),
      address: new FormControl(),
      address2: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      postal_code: new FormControl(),
      description: new FormControl(),
      tagline: new FormControl(),
    });

  }
}


