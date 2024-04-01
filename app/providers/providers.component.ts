import { Component } from '@angular/core';
// import { providers } from '../models/providers.data';
import { ProviderService } from '../services/provider.service';
import { ProviderClass } from '../models/providers.class';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styles: ``
})
export class ProvidersComponent {

  // providers = providers;
  providers: ProviderClass[] = [];
  
  constructor(private providerService: ProviderService){ }

  ngOnInit(): void{
    this.loadData();
  }

  loadData(){
    // this.providerService.getProviders()
    // .subscribe(
    //   (data) => {
    //     this.providers=data;
    //     console.log('Providers:', this.providers);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // )
    // this.providerService.getProviders().subscribe(
    //   (data) => {
    //     // Assuming your response is an array of objects with an 'id' property
    //     this.providers = data;
  
    //     // Logging the 'id' property of the first provider for verification
    //     if (this.providers.length > 0) {
    //       console.log('First provider id:', this.providers[0].id);
    //     } else {
    //       console.log('No providers found.');
    //     }
    //   },
    //   (error) => {
    //     console.error('Error fetching providers:', error);
    //   }
    // );
    // this.providerService.getProviders().subscribe(
    //   (data) => {
    //     // Assuming your response is an array of objects with an 'id' property
    //     this.providers = data;
  
    //     // Logging the 'id' property of the first provider if it exists
    //     if (this.providers.length > 0 && 'id' in this.providers[0]) {
    //       console.log('First provider id:', this.providers[0].id);
    //     } else {
    //       console.log('No providers found or id is undefined.');
    //     }
    //   },
    //   (error) => {
    //     console.error('Error fetching providers:', error);
    //   }
    // );
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

}
