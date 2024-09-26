import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-array',

  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss'],
})
export class FormArrayComponent {
  // specForm: FormGroup;

  // constructor(private fb: FormBuilder) {
  //   this.specForm = this.fb.group({
  //     specifications: this.fb.array([]),
  //   });
  // }

  // ngOnInit(): void {
  //   // this.addSpecification();
  //   this.loadSpecificationsFromLocalStorage();
  // }

  // get specifications(): FormArray {
  //   return this.specForm.get('specifications') as FormArray;
  // }

  // addSpecification() {
  //   const specGroup = this.fb.group({
  //     name: [''],
  //     value: [''],
  //   });
  //   this.specifications.push(specGroup);
  // }

  // removeSpecification(index: number) {
  //   const specifications = this.specForm.get('specifications') as FormArray;
  //   if (specifications.length > 1) {
  //     specifications.removeAt(index);
  //   }
  // }

  // submitForm() {
  //   const specificationsData = this.specifications.value;
  //   localStorage.setItem('specifications', JSON.stringify(specificationsData));
  //   // console.log('Specification saved to localStorage', specificationsData);
  // }

  // getSpecifications() {
  //   const savedSpecifications = localStorage.getItem('specifications');
  //   if (savedSpecifications) {
  //     const specifications = JSON.parse(savedSpecifications);
  //     console.log(
  //       'Retrieved specifications from localStorage:',
  //       specifications
  //     );
  //     return specifications;
  //   } else {
  //     console.log('No specifications found in localStorage');
  //     return null;
  //   }
  // }

  // loadSpecificationsFromLocalStorage() {
  //   const savedSpecifications = this.getSpecifications();
  //   if (savedSpecifications) {
  //     savedSpecifications.forEach((spec: any) => {
  //       const specGroup = this.fb.group({
  //         name: [spec.name],
  //         value: [spec.value],
  //       });
  //       this.specifications.push(specGroup);
  //     });
  //   }
  // }

  // specForm: FormGroup;
  // savedSpecifications: any[] = [];

  // constructor(private fb: FormBuilder) {
  //   this.specForm = this.fb.group({
  //     specifications: this.fb.array([]),
  //   });
  // }

  // ngOnInit(): void {
  //   this.loadSpecificationsFromLocalStorage();
  // }

  // get specifications(): FormArray {
  //   return this.specForm.get('specifications') as FormArray;
  // }

  // addSpecification() {
  //   const specGroup = this.fb.group({
  //     name: [''],
  //     value: [''],
  //   });
  //   this.specifications.push(specGroup);
  // }

  // removeSpecification(index: number) {
  //   if (this.specifications.length > 1) {
  //     this.specifications.removeAt(index);
  //   }
  // }

  // submitForm() {
  //   const specificationsData = this.specifications.value;
  //   localStorage.setItem('specifications', JSON.stringify(specificationsData));
  //   this.loadSpecificationsFromLocalStorage(); // Reload the saved data to display in the table
  // }

  // getSpecifications() {
  //   const savedSpecifications = localStorage.getItem('specifications');
  //   return savedSpecifications ? JSON.parse(savedSpecifications) : [];
  // }

  // loadSpecificationsFromLocalStorage() {
  //   this.savedSpecifications = this.getSpecifications();
  //   if (this.savedSpecifications.length) {
  //     this.specForm.setControl(
  //       'specifications',
  //       this.fb.array(
  //         this.savedSpecifications.map((spec: any) =>
  //           this.fb.group({
  //             name: [spec.name],
  //             value: [spec.value],
  //           })
  //         )
  //       )
  //     );
  //   }
  // }

  specForm: FormGroup;
  savedSpecifications: any[] = [];
  displayTable: boolean = false; // To control table visibility

  constructor(private fb: FormBuilder) {
    this.specForm = this.fb.group({
      specifications: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.loadSpecificationsFromLocalStorage();
  }

  get specifications(): FormArray {
    return this.specForm.get('specifications') as FormArray;
  }

  addSpecification() {
    const specGroup = this.fb.group({
      name: [''],
      value: [''],
    });
    this.specifications.push(specGroup);
  }

  removeSpecification(index: number) {
    if (this.specifications.length > 1) {
      this.specifications.removeAt(index);
    }
  }

  submitForm() {
    const specificationsData = this.specifications.value;
    localStorage.setItem('specifications', JSON.stringify(specificationsData));
    this.loadSpecificationsFromLocalStorage(); // Reloads data after submitting
  }

  showSpecifications() {
    this.loadSpecificationsFromLocalStorage(); // Reloads saved specifications
    this.displayTable = true; // Show the table
  }

  getSpecifications() {
    const savedSpecifications = localStorage.getItem('specifications');
    return savedSpecifications ? JSON.parse(savedSpecifications) : [];
  }

  loadSpecificationsFromLocalStorage() {
    this.savedSpecifications = this.getSpecifications();
    if (this.savedSpecifications.length) {
      this.specForm.setControl(
        'specifications',
        this.fb.array(
          this.savedSpecifications.map((spec: any) =>
            this.fb.group({
              name: [spec.name],
              value: [spec.value],
            })
          )
        )
      );
    }
  }
}
