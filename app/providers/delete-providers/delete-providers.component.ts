import { Component } from '@angular/core';
import { ProviderService } from '../../services/provider.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-providers',
  templateUrl: './delete-providers.component.html',
  styles: ``
})
export class DeleteProvidersComponent {
  id!: number;
  company!: string;
  isDeleted = false;

  constructor(private providerService: ProviderService, private route: ActivatedRoute) { }

  ngOnInit(): void{
    //Below function will get the id form the URL form and will we used further to delete
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam !== null) {
        this.id = parseInt(idParam, 10);
        this.deleteRecord();
      } else {
        // Handle the case where idParam is null
        console.error('ID parameter is null');
      }
    });


  }

  deleteRecord(){
    this.providerService.deleteProvider(this.id)
      .subscribe(
        data=>{
          console.log(data);
          this.company = data.company.company_name;
          this.isDeleted = true;

        },
        error => {console.log(error)}
      )
  }

}
