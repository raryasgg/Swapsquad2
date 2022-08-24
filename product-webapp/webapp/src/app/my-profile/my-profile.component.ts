import { Component, OnInit } from "@angular/core";
import { UpdateDetailsService } from "../update-details.service";
import { DomSanitizer } from "@angular/platform-browser";
import { UserRegistration } from "../user-registration";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
@Component({
  selector: "app-my-profile",
  templateUrl: "./my-profile.component.html",
  styleUrls: ["./my-profile.component.css"],
})
export class MyProfileComponent implements OnInit {
  public employees: UserRegistration;
  email: String;

  firstname: String;
  lastname: String;
  age: String;
  gender: String;

  mobile: String;
  image: any;
  street: String;
  city: String;
  state: String;
  pincode: string;

  constructor(
    private domSanitizer: DomSanitizer,
    private userratingservice: UpdateDetailsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.email = this.route.snapshot.params["email"];
    this.employees = new UserRegistration();
    this.userratingservice
      .getUserDetailByEmail("nkkkk@gmail.com")
      .subscribe((data) => {
        this.employees = data;
        console.log(this.employees);
        this.firstname = this.employees.firstname;
        this.lastname = this.employees.lastname;
        this.email = this.employees.email;
        this.mobile = this.employees.mobile;
        this.age = this.employees.age;
        this.street = this.employees.street;
        this.city = this.employees.city;
        this.state = this.employees.state;
        this.pincode = this.employees.pincode;
        this.gender = this.employees.gender;
        this.image = this.domSanitizer.bypassSecurityTrustResourceUrl(
          "data:img/" + "jpg" + ";base64," + this.employees.image
        );
      });
  }

  updateEmployee(email: any) {
    this.router.navigate(["/updateDetails", email]);
  }
}
