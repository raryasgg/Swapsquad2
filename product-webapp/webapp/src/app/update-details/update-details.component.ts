import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UpdateDetailsService } from '../update-details.service';
import { UserRegistration } from '../user-registration'; 
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.css']
})
export class UpdateDetailsComponent implements OnInit {

  updateForm: FormGroup;

  constructor(private updateDetailsService: UpdateDetailsService, private router: Router) {
    
   }
 
  ngOnInit(): void {
  }

  updateObj: UserRegistration = new UserRegistration();

  file = [];

  handleFileInput(files) {
    this.prepareFilesList(files);
  }
  prepareFilesList(files: Array<any>) {
    for (const item of files) {
      item.progress = 0;
      this.file.push(item);
    }
    this.uploadFilesSimulator(0);
  }
  uploadFilesSimulator(index: number) {
    setTimeout(() => {
      if (index === this.file.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          if (this.file[index].progress === 100) {
            clearInterval(progressInterval);
            this.uploadFilesSimulator(index + 1);
          } else {
            this.file[index].progress += 5;
          }
        }, 200);
      }
    }, 1000);
  }



  onClickSubmitForm() {


      console.log(this.updateForm.value);
    
      this.updateObj.firstname = this.updateForm.value.firstname;
      this.updateObj.lastname = this.updateForm.value.lastname;
      this.updateObj.age = this.updateForm.value.age;
      this.updateObj.gender = this.updateForm.value.gender;
      this.updateObj.email = this.updateForm.value.email;
      this.updateObj.mobile = this.updateForm.value.mobile;
      this.updateObj.address = this.updateForm.value.address;
    
      this.updateDetailsService. update(this.updateObj, this.file[0]).subscribe(data =>
        console.log(data)
      )
    // To reset the form
      this.updateForm.reset();
      Swal.fire({ icon: 'success', title: 'Successfully Registered !!', text: 'Your Product Posted Succesfully !', })
    
      //To navigate to home page
      this.router.navigateByUrl('');
    
    
    // else{
    //   Swal.fire({ icon: 'error', title: 'Oops...Empty Feild !!', text: 'Please fill all sections the to continue !', })
    // }
      }




  


}
